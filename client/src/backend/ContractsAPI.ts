import { CORE_CONTRACT_ADDRESS, GETTERS_CONTRACT_ADDRESS } from 'common-contracts';
import {
  ProveTileContractCallArgs,
  TransitionTileContractCallArgs,
  Tile,
  TileType,
  WorldCoords,
  Awaited,
  address,
  EthAddress,
} from 'common-types';
import type { TinyWorld, TinyWorldGetters } from 'common-contracts/typechain';
import {
  ContractCaller,
  EthConnection,
  ethToWei,
  // QueuedTransaction,
  TxExecutor,
} from '@darkforest_eth/network';
import { EventEmitter } from 'events';
import {
  BigNumber as EthersBN,
  ContractFunction /*, ethers, Event, providers*/,
  providers,
  Wordlist,
} from 'ethers';
import {
  ContractEvent,
  ContractMethodName,
  ContractsAPIEvent,
  SubmittedInitPlayer,
  SubmittedMovePlayer,
  SubmittedTx,
  UnconfirmedInitPlayer,
  UnconfirmedMovePlayer,
} from '../_types/ContractAPITypes';
import { loadCoreContract, loadGettersContract } from './Blockchain';

export type RawTile = Awaited<ReturnType<TinyWorld['getCachedTile(tuple)']>>;
export type RawCoords = Awaited<ReturnType<TinyWorld['playerLocation']>>;

export function decodeCoords(rawCoords: RawCoords): WorldCoords {
  return {
    x: rawCoords.x.toNumber(),
    y: rawCoords.y.toNumber(),
  };
}

export function decodeTile(rawTile: RawTile): Tile {
  return {
    coords: decodeCoords(rawTile.coords),
    perlin: [rawTile.perlin[0].toNumber(), rawTile.perlin[1].toNumber()],
    raritySeed: rawTile.raritySeed.toNumber(),
    tileType: rawTile.tileType,
    temperatureType: rawTile.temperatureType,
    altitudeType: rawTile.altitudeType,
    emoji: rawTile.emoji,
    name: rawTile.name,
    owner: address(rawTile.owner),
    smartContract: address(rawTile.smartContract),
  };
}

/**
 * Roughly contains methods that map 1:1 with functions that live in the contract. Responsible for
 * reading and writing to and from the blockchain.
 *
 * @todo don't inherit from {@link EventEmitter}. instead use {@link Monomitter}
 */
export class ContractsAPI extends EventEmitter {
  /**
   * Don't allow users to submit txs if balance falls below this amount/
   */
  private static readonly MIN_BALANCE = ethToWei(0.002);

  /**
   * Instrumented {@link ThrottledConcurrentQueue} for blockchain reads.
   */
  private readonly contractCaller: ContractCaller;

  /**
   * Instrumented {@link ThrottledConcurrentQueue} for blockchain writes.
   */
  private readonly txExecutor: TxExecutor | undefined;

  /**
   * Our connection to the blockchain. In charge of low level networking, and also of the burner
   * wallet.
   */
  private ethConnection: EthConnection;

  get coreContract() {
    return this.ethConnection.getContract<TinyWorld>(CORE_CONTRACT_ADDRESS);
  }

  get gettersContract() {
    return this.ethConnection.getContract<TinyWorldGetters>(GETTERS_CONTRACT_ADDRESS);
  }

  public constructor(ethConnection: EthConnection) {
    super();
    this.contractCaller = new ContractCaller();
    this.ethConnection = ethConnection;
    this.txExecutor = new TxExecutor(ethConnection, () => '1');

    this.setupEventListeners();
  }

  public destroy(): void {
    this.removeEventListeners();
  }

  private makeCall<T>(contractViewFunction: ContractFunction<T>, args: unknown[] = []): Promise<T> {
    return this.contractCaller.makeCall(contractViewFunction, args);
  }

  public async setupEventListeners(): Promise<void> {
    const { coreContract } = this;

    const filter = {
      address: coreContract.address,
      topics: [
        [coreContract.filters.PlayerUpdated(null, null).topics].map(
          (topicsOrUndefined) => (topicsOrUndefined || [])[0]
        ),
      ] as Array<string | Array<string>>,
    };

    const eventHandlers = {
      [ContractEvent.PlayerUpdated]: (rawAddress: string, coords: RawCoords) => {
        this.emit(ContractsAPIEvent.PlayerUpdated, address(rawAddress), decodeCoords(coords));
      },
    };

    this.ethConnection.subscribeToContractEvents(coreContract, eventHandlers, filter);
  }

  public removeEventListeners(): void {
    const { coreContract } = this;

    coreContract.removeAllListeners(ContractEvent.PlayerUpdated);
  }

  public async getSeed(): Promise<number> {
    return (await this.makeCall<EthersBN>(this.coreContract.seed)).toNumber();
  }

  public async getWorldScale(): Promise<number> {
    return (await this.makeCall<EthersBN>(this.coreContract.worldScale)).toNumber();
  }

  public async getWorldWidth(): Promise<number> {
    return (await this.makeCall<EthersBN>(this.coreContract.worldWidth)).toNumber();
  }

  public async getTouchedTiles(): Promise<Tile[]> {
    const touchedTiles = await this.makeCall<RawTile[]>(this.coreContract.getTouchedTiles);
    return touchedTiles.map((rawTile) => decodeTile(rawTile));
  }

  public async getPlayerLocations(): Promise<Map<EthAddress, WorldCoords>> {
    const playerLocs = await this.makeCall<RawCoords[]>(this.coreContract.getPlayerLocations);
    const playerIds = await this.makeCall<string[]>(this.coreContract.getPlayerIds);

    const playerMap: Map<EthAddress, WorldCoords> = new Map();
    for (let i = 0; i < playerIds.length; i++) {
      playerMap.set(address(playerIds[i]), decodeCoords(playerLocs[i]));
    }
    return playerMap;
  }

  public async getInitted(): Promise<boolean> {
    if (!this.txExecutor) {
      throw new Error('no signer, cannot execute tx');
    }

    const addr = this.ethConnection.getAddress();

    const initted = await this.makeCall<boolean>(this.coreContract.playerInited, [addr]);
    return initted;
  }

  public async getLocation(): Promise<WorldCoords> {
    if (!this.txExecutor) {
      throw new Error('no signer, cannot execute tx');
    }

    const addr = this.ethConnection.getAddress();

    const rawCoords = await this.makeCall<RawCoords>(this.coreContract.playerLocation, [addr]);
    return decodeCoords(rawCoords);
  }

  public async initPlayerLocation(action: UnconfirmedInitPlayer) {
    if (!this.txExecutor) {
      throw new Error('no signer, cannot execute tx');
    }

    const tx = this.txExecutor.queueTransaction(
      action.actionId,
      this.coreContract,
      action.methodName,
      []
    );
    const unminedInitPlayerTx: SubmittedInitPlayer = {
      ...action,
      txHash: (await tx.submitted).hash,
      sentAtTimestamp: Math.floor(Date.now() / 1000),
    };

    return this.waitFor(unminedInitPlayerTx, tx.confirmed);
  }

  public async movePlayer(action: UnconfirmedMovePlayer) {
    if (!this.txExecutor) {
      throw new Error('no signer, cannot execute tx');
    }

    const tx = this.txExecutor.queueTransaction(
      action.actionId,
      this.coreContract,
      action.methodName,
      [action.coords]
    );
    const unminedMovePlayerTx: SubmittedMovePlayer = {
      ...action,
      txHash: (await tx.submitted).hash,
      sentAtTimestamp: Math.floor(Date.now() / 1000),
    };

    return this.waitFor(unminedMovePlayerTx, tx.confirmed);
  }

  /**
   * Given an unconfirmed (but submitted) transaction, emits the appropriate
   * [[ContractsAPIEvent]].
   */
  public waitFor(submitted: SubmittedTx, receiptPromise: Promise<providers.TransactionReceipt>) {
    this.emit(ContractsAPIEvent.TxSubmitted, submitted);

    return receiptPromise
      .then((receipt) => {
        this.emit(ContractsAPIEvent.TxConfirmed, submitted);
        return receipt;
      })
      .catch((e) => {
        this.emit(ContractsAPIEvent.TxReverted, submitted);
        throw e;
      });
  }
}

export async function makeContractsAPI(ethConnection: EthConnection): Promise<ContractsAPI> {
  // Could turn this into an array and iterate, but I like the explicitness
  await ethConnection.loadContract(CORE_CONTRACT_ADDRESS, loadCoreContract);
  await ethConnection.loadContract(GETTERS_CONTRACT_ADDRESS, loadGettersContract);

  return new ContractsAPI(ethConnection);
}
