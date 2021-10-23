/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
} from "ethers";
import {
  Contract,
  ContractTransaction,
  Overrides,
  CallOverrides,
} from "@ethersproject/contracts";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";

interface TinyWorldInterface extends ethers.utils.Interface {
  functions: {
    "getCachedTile(uint256,uint256)": FunctionFragment;
    "getTouchedTiles()": FunctionFragment;
    "initialize(uint256,uint256,uint256)": FunctionFragment;
    "owner()": FunctionFragment;
    "proveTile(uint256[2],uint256[2][2],uint256[2],uint256[8])": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "seed()": FunctionFragment;
    "touchedTiles(uint256)": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
    "worldScale()": FunctionFragment;
    "worldWidth()": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "getCachedTile",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getTouchedTiles",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "initialize",
    values: [BigNumberish, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "proveTile",
    values: [
      [BigNumberish, BigNumberish],
      [[BigNumberish, BigNumberish], [BigNumberish, BigNumberish]],
      [BigNumberish, BigNumberish],
      [
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish
      ]
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "seed", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "touchedTiles",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "worldScale",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "worldWidth",
    values?: undefined
  ): string;

  decodeFunctionResult(
    functionFragment: "getCachedTile",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getTouchedTiles",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "proveTile", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "seed", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "touchedTiles",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "worldScale", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "worldWidth", data: BytesLike): Result;

  events: {
    "OwnershipTransferred(address,address)": EventFragment;
    "TileUpdated(uint256,uint256,uint8)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "TileUpdated"): EventFragment;
}

export class TinyWorld extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: TinyWorldInterface;

  functions: {
    getCachedTile(
      x: BigNumberish,
      y: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      0: {
        x: BigNumber;
        y: BigNumber;
        originalTileType: number;
        currentTileType: number;
        0: BigNumber;
        1: BigNumber;
        2: number;
        3: number;
      };
    }>;

    "getCachedTile(uint256,uint256)"(
      x: BigNumberish,
      y: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      0: {
        x: BigNumber;
        y: BigNumber;
        originalTileType: number;
        currentTileType: number;
        0: BigNumber;
        1: BigNumber;
        2: number;
        3: number;
      };
    }>;

    getTouchedTiles(overrides?: CallOverrides): Promise<{
      0: {
        x: BigNumber;
        y: BigNumber;
        originalTileType: number;
        currentTileType: number;
        0: BigNumber;
        1: BigNumber;
        2: number;
        3: number;
      }[];
    }>;

    "getTouchedTiles()"(overrides?: CallOverrides): Promise<{
      0: {
        x: BigNumber;
        y: BigNumber;
        originalTileType: number;
        currentTileType: number;
        0: BigNumber;
        1: BigNumber;
        2: number;
        3: number;
      }[];
    }>;

    initialize(
      _seed: BigNumberish,
      _worldWidth: BigNumberish,
      _worldScale: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "initialize(uint256,uint256,uint256)"(
      _seed: BigNumberish,
      _worldWidth: BigNumberish,
      _worldScale: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    owner(overrides?: CallOverrides): Promise<{
      0: string;
    }>;

    "owner()"(overrides?: CallOverrides): Promise<{
      0: string;
    }>;

    proveTile(
      a: [BigNumberish, BigNumberish],
      b: [[BigNumberish, BigNumberish], [BigNumberish, BigNumberish]],
      c: [BigNumberish, BigNumberish],
      publicSignals: [
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish
      ],
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "proveTile(uint256[2],uint256[2][2],uint256[2],uint256[8])"(
      a: [BigNumberish, BigNumberish],
      b: [[BigNumberish, BigNumberish], [BigNumberish, BigNumberish]],
      c: [BigNumberish, BigNumberish],
      publicSignals: [
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish
      ],
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    renounceOwnership(overrides?: Overrides): Promise<ContractTransaction>;

    "renounceOwnership()"(overrides?: Overrides): Promise<ContractTransaction>;

    seed(overrides?: CallOverrides): Promise<{
      0: BigNumber;
    }>;

    "seed()"(overrides?: CallOverrides): Promise<{
      0: BigNumber;
    }>;

    touchedTiles(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      x: BigNumber;
      y: BigNumber;
      originalTileType: number;
      currentTileType: number;
      0: BigNumber;
      1: BigNumber;
      2: number;
      3: number;
    }>;

    "touchedTiles(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      x: BigNumber;
      y: BigNumber;
      originalTileType: number;
      currentTileType: number;
      0: BigNumber;
      1: BigNumber;
      2: number;
      3: number;
    }>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "transferOwnership(address)"(
      newOwner: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    worldScale(overrides?: CallOverrides): Promise<{
      0: BigNumber;
    }>;

    "worldScale()"(overrides?: CallOverrides): Promise<{
      0: BigNumber;
    }>;

    worldWidth(overrides?: CallOverrides): Promise<{
      0: BigNumber;
    }>;

    "worldWidth()"(overrides?: CallOverrides): Promise<{
      0: BigNumber;
    }>;
  };

  getCachedTile(
    x: BigNumberish,
    y: BigNumberish,
    overrides?: CallOverrides
  ): Promise<{
    x: BigNumber;
    y: BigNumber;
    originalTileType: number;
    currentTileType: number;
    0: BigNumber;
    1: BigNumber;
    2: number;
    3: number;
  }>;

  "getCachedTile(uint256,uint256)"(
    x: BigNumberish,
    y: BigNumberish,
    overrides?: CallOverrides
  ): Promise<{
    x: BigNumber;
    y: BigNumber;
    originalTileType: number;
    currentTileType: number;
    0: BigNumber;
    1: BigNumber;
    2: number;
    3: number;
  }>;

  getTouchedTiles(
    overrides?: CallOverrides
  ): Promise<
    {
      x: BigNumber;
      y: BigNumber;
      originalTileType: number;
      currentTileType: number;
      0: BigNumber;
      1: BigNumber;
      2: number;
      3: number;
    }[]
  >;

  "getTouchedTiles()"(
    overrides?: CallOverrides
  ): Promise<
    {
      x: BigNumber;
      y: BigNumber;
      originalTileType: number;
      currentTileType: number;
      0: BigNumber;
      1: BigNumber;
      2: number;
      3: number;
    }[]
  >;

  initialize(
    _seed: BigNumberish,
    _worldWidth: BigNumberish,
    _worldScale: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "initialize(uint256,uint256,uint256)"(
    _seed: BigNumberish,
    _worldWidth: BigNumberish,
    _worldScale: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  owner(overrides?: CallOverrides): Promise<string>;

  "owner()"(overrides?: CallOverrides): Promise<string>;

  proveTile(
    a: [BigNumberish, BigNumberish],
    b: [[BigNumberish, BigNumberish], [BigNumberish, BigNumberish]],
    c: [BigNumberish, BigNumberish],
    publicSignals: [
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish
    ],
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "proveTile(uint256[2],uint256[2][2],uint256[2],uint256[8])"(
    a: [BigNumberish, BigNumberish],
    b: [[BigNumberish, BigNumberish], [BigNumberish, BigNumberish]],
    c: [BigNumberish, BigNumberish],
    publicSignals: [
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish
    ],
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  renounceOwnership(overrides?: Overrides): Promise<ContractTransaction>;

  "renounceOwnership()"(overrides?: Overrides): Promise<ContractTransaction>;

  seed(overrides?: CallOverrides): Promise<BigNumber>;

  "seed()"(overrides?: CallOverrides): Promise<BigNumber>;

  touchedTiles(
    arg0: BigNumberish,
    overrides?: CallOverrides
  ): Promise<{
    x: BigNumber;
    y: BigNumber;
    originalTileType: number;
    currentTileType: number;
    0: BigNumber;
    1: BigNumber;
    2: number;
    3: number;
  }>;

  "touchedTiles(uint256)"(
    arg0: BigNumberish,
    overrides?: CallOverrides
  ): Promise<{
    x: BigNumber;
    y: BigNumber;
    originalTileType: number;
    currentTileType: number;
    0: BigNumber;
    1: BigNumber;
    2: number;
    3: number;
  }>;

  transferOwnership(
    newOwner: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "transferOwnership(address)"(
    newOwner: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  worldScale(overrides?: CallOverrides): Promise<BigNumber>;

  "worldScale()"(overrides?: CallOverrides): Promise<BigNumber>;

  worldWidth(overrides?: CallOverrides): Promise<BigNumber>;

  "worldWidth()"(overrides?: CallOverrides): Promise<BigNumber>;

  callStatic: {
    getCachedTile(
      x: BigNumberish,
      y: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      x: BigNumber;
      y: BigNumber;
      originalTileType: number;
      currentTileType: number;
      0: BigNumber;
      1: BigNumber;
      2: number;
      3: number;
    }>;

    "getCachedTile(uint256,uint256)"(
      x: BigNumberish,
      y: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      x: BigNumber;
      y: BigNumber;
      originalTileType: number;
      currentTileType: number;
      0: BigNumber;
      1: BigNumber;
      2: number;
      3: number;
    }>;

    getTouchedTiles(
      overrides?: CallOverrides
    ): Promise<
      {
        x: BigNumber;
        y: BigNumber;
        originalTileType: number;
        currentTileType: number;
        0: BigNumber;
        1: BigNumber;
        2: number;
        3: number;
      }[]
    >;

    "getTouchedTiles()"(
      overrides?: CallOverrides
    ): Promise<
      {
        x: BigNumber;
        y: BigNumber;
        originalTileType: number;
        currentTileType: number;
        0: BigNumber;
        1: BigNumber;
        2: number;
        3: number;
      }[]
    >;

    initialize(
      _seed: BigNumberish,
      _worldWidth: BigNumberish,
      _worldScale: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "initialize(uint256,uint256,uint256)"(
      _seed: BigNumberish,
      _worldWidth: BigNumberish,
      _worldScale: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    owner(overrides?: CallOverrides): Promise<string>;

    "owner()"(overrides?: CallOverrides): Promise<string>;

    proveTile(
      a: [BigNumberish, BigNumberish],
      b: [[BigNumberish, BigNumberish], [BigNumberish, BigNumberish]],
      c: [BigNumberish, BigNumberish],
      publicSignals: [
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish
      ],
      overrides?: CallOverrides
    ): Promise<void>;

    "proveTile(uint256[2],uint256[2][2],uint256[2],uint256[8])"(
      a: [BigNumberish, BigNumberish],
      b: [[BigNumberish, BigNumberish], [BigNumberish, BigNumberish]],
      c: [BigNumberish, BigNumberish],
      publicSignals: [
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish
      ],
      overrides?: CallOverrides
    ): Promise<void>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    "renounceOwnership()"(overrides?: CallOverrides): Promise<void>;

    seed(overrides?: CallOverrides): Promise<BigNumber>;

    "seed()"(overrides?: CallOverrides): Promise<BigNumber>;

    touchedTiles(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      x: BigNumber;
      y: BigNumber;
      originalTileType: number;
      currentTileType: number;
      0: BigNumber;
      1: BigNumber;
      2: number;
      3: number;
    }>;

    "touchedTiles(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      x: BigNumber;
      y: BigNumber;
      originalTileType: number;
      currentTileType: number;
      0: BigNumber;
      1: BigNumber;
      2: number;
      3: number;
    }>;

    transferOwnership(
      newOwner: string,
      overrides?: CallOverrides
    ): Promise<void>;

    "transferOwnership(address)"(
      newOwner: string,
      overrides?: CallOverrides
    ): Promise<void>;

    worldScale(overrides?: CallOverrides): Promise<BigNumber>;

    "worldScale()"(overrides?: CallOverrides): Promise<BigNumber>;

    worldWidth(overrides?: CallOverrides): Promise<BigNumber>;

    "worldWidth()"(overrides?: CallOverrides): Promise<BigNumber>;
  };

  filters: {
    OwnershipTransferred(
      previousOwner: string | null,
      newOwner: string | null
    ): EventFilter;

    TileUpdated(x: null, y: null, tileType: null): EventFilter;
  };

  estimateGas: {
    getCachedTile(
      x: BigNumberish,
      y: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getCachedTile(uint256,uint256)"(
      x: BigNumberish,
      y: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getTouchedTiles(overrides?: CallOverrides): Promise<BigNumber>;

    "getTouchedTiles()"(overrides?: CallOverrides): Promise<BigNumber>;

    initialize(
      _seed: BigNumberish,
      _worldWidth: BigNumberish,
      _worldScale: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "initialize(uint256,uint256,uint256)"(
      _seed: BigNumberish,
      _worldWidth: BigNumberish,
      _worldScale: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    "owner()"(overrides?: CallOverrides): Promise<BigNumber>;

    proveTile(
      a: [BigNumberish, BigNumberish],
      b: [[BigNumberish, BigNumberish], [BigNumberish, BigNumberish]],
      c: [BigNumberish, BigNumberish],
      publicSignals: [
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish
      ],
      overrides?: Overrides
    ): Promise<BigNumber>;

    "proveTile(uint256[2],uint256[2][2],uint256[2],uint256[8])"(
      a: [BigNumberish, BigNumberish],
      b: [[BigNumberish, BigNumberish], [BigNumberish, BigNumberish]],
      c: [BigNumberish, BigNumberish],
      publicSignals: [
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish
      ],
      overrides?: Overrides
    ): Promise<BigNumber>;

    renounceOwnership(overrides?: Overrides): Promise<BigNumber>;

    "renounceOwnership()"(overrides?: Overrides): Promise<BigNumber>;

    seed(overrides?: CallOverrides): Promise<BigNumber>;

    "seed()"(overrides?: CallOverrides): Promise<BigNumber>;

    touchedTiles(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "touchedTiles(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "transferOwnership(address)"(
      newOwner: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    worldScale(overrides?: CallOverrides): Promise<BigNumber>;

    "worldScale()"(overrides?: CallOverrides): Promise<BigNumber>;

    worldWidth(overrides?: CallOverrides): Promise<BigNumber>;

    "worldWidth()"(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    getCachedTile(
      x: BigNumberish,
      y: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "getCachedTile(uint256,uint256)"(
      x: BigNumberish,
      y: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getTouchedTiles(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "getTouchedTiles()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    initialize(
      _seed: BigNumberish,
      _worldWidth: BigNumberish,
      _worldScale: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "initialize(uint256,uint256,uint256)"(
      _seed: BigNumberish,
      _worldWidth: BigNumberish,
      _worldScale: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "owner()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    proveTile(
      a: [BigNumberish, BigNumberish],
      b: [[BigNumberish, BigNumberish], [BigNumberish, BigNumberish]],
      c: [BigNumberish, BigNumberish],
      publicSignals: [
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish
      ],
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "proveTile(uint256[2],uint256[2][2],uint256[2],uint256[8])"(
      a: [BigNumberish, BigNumberish],
      b: [[BigNumberish, BigNumberish], [BigNumberish, BigNumberish]],
      c: [BigNumberish, BigNumberish],
      publicSignals: [
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish
      ],
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    renounceOwnership(overrides?: Overrides): Promise<PopulatedTransaction>;

    "renounceOwnership()"(overrides?: Overrides): Promise<PopulatedTransaction>;

    seed(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "seed()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    touchedTiles(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "touchedTiles(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "transferOwnership(address)"(
      newOwner: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    worldScale(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "worldScale()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    worldWidth(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "worldWidth()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
