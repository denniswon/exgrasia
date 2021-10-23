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
  CallOverrides,
} from "@ethersproject/contracts";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";

interface TinyWorldStorageInterface extends ethers.utils.Interface {
  functions: {
    "getCachedTile(uint256,uint256)": FunctionFragment;
    "getTouchedTiles()": FunctionFragment;
    "seed()": FunctionFragment;
    "touchedTiles(uint256)": FunctionFragment;
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
  encodeFunctionData(functionFragment: "seed", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "touchedTiles",
    values: [BigNumberish]
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
  decodeFunctionResult(functionFragment: "seed", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "touchedTiles",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "worldScale", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "worldWidth", data: BytesLike): Result;

  events: {};
}

export class TinyWorldStorage extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: TinyWorldStorageInterface;

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

    worldScale(overrides?: CallOverrides): Promise<BigNumber>;

    "worldScale()"(overrides?: CallOverrides): Promise<BigNumber>;

    worldWidth(overrides?: CallOverrides): Promise<BigNumber>;

    "worldWidth()"(overrides?: CallOverrides): Promise<BigNumber>;
  };

  filters: {};

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

    worldScale(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "worldScale()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    worldWidth(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "worldWidth()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
