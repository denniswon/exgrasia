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
    "cachedTiles(uint256,uint256)": FunctionFragment;
    "getCachedTile(tuple)": FunctionFragment;
    "getPlayerIds()": FunctionFragment;
    "getPlayerLocations()": FunctionFragment;
    "getTouchedTiles()": FunctionFragment;
    "perlinMax()": FunctionFragment;
    "playerIds(uint256)": FunctionFragment;
    "playerInited(address)": FunctionFragment;
    "playerLocation(address)": FunctionFragment;
    "seed()": FunctionFragment;
    "touchedTiles(uint256)": FunctionFragment;
    "vecs(uint256,uint256)": FunctionFragment;
    "vecsDenom()": FunctionFragment;
    "worldScale()": FunctionFragment;
    "worldWidth()": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "cachedTiles",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getCachedTile",
    values: [{ x: BigNumberish; y: BigNumberish }]
  ): string;
  encodeFunctionData(
    functionFragment: "getPlayerIds",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getPlayerLocations",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getTouchedTiles",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "perlinMax", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "playerIds",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "playerInited",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "playerLocation",
    values: [string]
  ): string;
  encodeFunctionData(functionFragment: "seed", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "touchedTiles",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "vecs",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "vecsDenom", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "worldScale",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "worldWidth",
    values?: undefined
  ): string;

  decodeFunctionResult(
    functionFragment: "cachedTiles",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getCachedTile",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getPlayerIds",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getPlayerLocations",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getTouchedTiles",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "perlinMax", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "playerIds", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "playerInited",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "playerLocation",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "seed", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "touchedTiles",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "vecs", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "vecsDenom", data: BytesLike): Result;
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
    cachedTiles(
      arg0: BigNumberish,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      coords: { x: BigNumber; y: BigNumber; 0: BigNumber; 1: BigNumber };
      raritySeed: BigNumber;
      tileType: number;
      temperatureType: number;
      altitudeType: number;
      emoji: string;
      name: string;
      owner: string;
      smartContract: string;
      0: { x: BigNumber; y: BigNumber; 0: BigNumber; 1: BigNumber };
      1: BigNumber;
      2: number;
      3: number;
      4: number;
      5: string;
      6: string;
      7: string;
      8: string;
    }>;

    "cachedTiles(uint256,uint256)"(
      arg0: BigNumberish,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      coords: { x: BigNumber; y: BigNumber; 0: BigNumber; 1: BigNumber };
      raritySeed: BigNumber;
      tileType: number;
      temperatureType: number;
      altitudeType: number;
      emoji: string;
      name: string;
      owner: string;
      smartContract: string;
      0: { x: BigNumber; y: BigNumber; 0: BigNumber; 1: BigNumber };
      1: BigNumber;
      2: number;
      3: number;
      4: number;
      5: string;
      6: string;
      7: string;
      8: string;
    }>;

    getCachedTile(
      coords: { x: BigNumberish; y: BigNumberish },
      overrides?: CallOverrides
    ): Promise<{
      0: {
        coords: { x: BigNumber; y: BigNumber; 0: BigNumber; 1: BigNumber };
        perlin: [BigNumber, BigNumber];
        raritySeed: BigNumber;
        tileType: number;
        temperatureType: number;
        altitudeType: number;
        emoji: string;
        name: string;
        owner: string;
        smartContract: string;
        0: { x: BigNumber; y: BigNumber; 0: BigNumber; 1: BigNumber };
        1: [BigNumber, BigNumber];
        2: BigNumber;
        3: number;
        4: number;
        5: number;
        6: string;
        7: string;
        8: string;
        9: string;
      };
    }>;

    "getCachedTile(tuple)"(
      coords: { x: BigNumberish; y: BigNumberish },
      overrides?: CallOverrides
    ): Promise<{
      0: {
        coords: { x: BigNumber; y: BigNumber; 0: BigNumber; 1: BigNumber };
        perlin: [BigNumber, BigNumber];
        raritySeed: BigNumber;
        tileType: number;
        temperatureType: number;
        altitudeType: number;
        emoji: string;
        name: string;
        owner: string;
        smartContract: string;
        0: { x: BigNumber; y: BigNumber; 0: BigNumber; 1: BigNumber };
        1: [BigNumber, BigNumber];
        2: BigNumber;
        3: number;
        4: number;
        5: number;
        6: string;
        7: string;
        8: string;
        9: string;
      };
    }>;

    getPlayerIds(overrides?: CallOverrides): Promise<{
      0: string[];
    }>;

    "getPlayerIds()"(overrides?: CallOverrides): Promise<{
      0: string[];
    }>;

    getPlayerLocations(overrides?: CallOverrides): Promise<{
      0: { x: BigNumber; y: BigNumber; 0: BigNumber; 1: BigNumber }[];
    }>;

    "getPlayerLocations()"(overrides?: CallOverrides): Promise<{
      0: { x: BigNumber; y: BigNumber; 0: BigNumber; 1: BigNumber }[];
    }>;

    getTouchedTiles(overrides?: CallOverrides): Promise<{
      0: {
        coords: { x: BigNumber; y: BigNumber; 0: BigNumber; 1: BigNumber };
        perlin: [BigNumber, BigNumber];
        raritySeed: BigNumber;
        tileType: number;
        temperatureType: number;
        altitudeType: number;
        emoji: string;
        name: string;
        owner: string;
        smartContract: string;
        0: { x: BigNumber; y: BigNumber; 0: BigNumber; 1: BigNumber };
        1: [BigNumber, BigNumber];
        2: BigNumber;
        3: number;
        4: number;
        5: number;
        6: string;
        7: string;
        8: string;
        9: string;
      }[];
    }>;

    "getTouchedTiles()"(overrides?: CallOverrides): Promise<{
      0: {
        coords: { x: BigNumber; y: BigNumber; 0: BigNumber; 1: BigNumber };
        perlin: [BigNumber, BigNumber];
        raritySeed: BigNumber;
        tileType: number;
        temperatureType: number;
        altitudeType: number;
        emoji: string;
        name: string;
        owner: string;
        smartContract: string;
        0: { x: BigNumber; y: BigNumber; 0: BigNumber; 1: BigNumber };
        1: [BigNumber, BigNumber];
        2: BigNumber;
        3: number;
        4: number;
        5: number;
        6: string;
        7: string;
        8: string;
        9: string;
      }[];
    }>;

    perlinMax(overrides?: CallOverrides): Promise<{
      0: number;
    }>;

    "perlinMax()"(overrides?: CallOverrides): Promise<{
      0: number;
    }>;

    playerIds(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    "playerIds(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    playerInited(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<{
      0: boolean;
    }>;

    "playerInited(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<{
      0: boolean;
    }>;

    playerLocation(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<{
      x: BigNumber;
      y: BigNumber;
      0: BigNumber;
      1: BigNumber;
    }>;

    "playerLocation(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<{
      x: BigNumber;
      y: BigNumber;
      0: BigNumber;
      1: BigNumber;
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
      coords: { x: BigNumber; y: BigNumber; 0: BigNumber; 1: BigNumber };
      raritySeed: BigNumber;
      tileType: number;
      temperatureType: number;
      altitudeType: number;
      emoji: string;
      name: string;
      owner: string;
      smartContract: string;
      0: { x: BigNumber; y: BigNumber; 0: BigNumber; 1: BigNumber };
      1: BigNumber;
      2: number;
      3: number;
      4: number;
      5: string;
      6: string;
      7: string;
      8: string;
    }>;

    "touchedTiles(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      coords: { x: BigNumber; y: BigNumber; 0: BigNumber; 1: BigNumber };
      raritySeed: BigNumber;
      tileType: number;
      temperatureType: number;
      altitudeType: number;
      emoji: string;
      name: string;
      owner: string;
      smartContract: string;
      0: { x: BigNumber; y: BigNumber; 0: BigNumber; 1: BigNumber };
      1: BigNumber;
      2: number;
      3: number;
      4: number;
      5: string;
      6: string;
      7: string;
      8: string;
    }>;

    vecs(
      arg0: BigNumberish,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      0: number;
    }>;

    "vecs(uint256,uint256)"(
      arg0: BigNumberish,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      0: number;
    }>;

    vecsDenom(overrides?: CallOverrides): Promise<{
      0: number;
    }>;

    "vecsDenom()"(overrides?: CallOverrides): Promise<{
      0: number;
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

  cachedTiles(
    arg0: BigNumberish,
    arg1: BigNumberish,
    overrides?: CallOverrides
  ): Promise<{
    coords: { x: BigNumber; y: BigNumber; 0: BigNumber; 1: BigNumber };
    raritySeed: BigNumber;
    tileType: number;
    temperatureType: number;
    altitudeType: number;
    emoji: string;
    name: string;
    owner: string;
    smartContract: string;
    0: { x: BigNumber; y: BigNumber; 0: BigNumber; 1: BigNumber };
    1: BigNumber;
    2: number;
    3: number;
    4: number;
    5: string;
    6: string;
    7: string;
    8: string;
  }>;

  "cachedTiles(uint256,uint256)"(
    arg0: BigNumberish,
    arg1: BigNumberish,
    overrides?: CallOverrides
  ): Promise<{
    coords: { x: BigNumber; y: BigNumber; 0: BigNumber; 1: BigNumber };
    raritySeed: BigNumber;
    tileType: number;
    temperatureType: number;
    altitudeType: number;
    emoji: string;
    name: string;
    owner: string;
    smartContract: string;
    0: { x: BigNumber; y: BigNumber; 0: BigNumber; 1: BigNumber };
    1: BigNumber;
    2: number;
    3: number;
    4: number;
    5: string;
    6: string;
    7: string;
    8: string;
  }>;

  getCachedTile(
    coords: { x: BigNumberish; y: BigNumberish },
    overrides?: CallOverrides
  ): Promise<{
    coords: { x: BigNumber; y: BigNumber; 0: BigNumber; 1: BigNumber };
    perlin: [BigNumber, BigNumber];
    raritySeed: BigNumber;
    tileType: number;
    temperatureType: number;
    altitudeType: number;
    emoji: string;
    name: string;
    owner: string;
    smartContract: string;
    0: { x: BigNumber; y: BigNumber; 0: BigNumber; 1: BigNumber };
    1: [BigNumber, BigNumber];
    2: BigNumber;
    3: number;
    4: number;
    5: number;
    6: string;
    7: string;
    8: string;
    9: string;
  }>;

  "getCachedTile(tuple)"(
    coords: { x: BigNumberish; y: BigNumberish },
    overrides?: CallOverrides
  ): Promise<{
    coords: { x: BigNumber; y: BigNumber; 0: BigNumber; 1: BigNumber };
    perlin: [BigNumber, BigNumber];
    raritySeed: BigNumber;
    tileType: number;
    temperatureType: number;
    altitudeType: number;
    emoji: string;
    name: string;
    owner: string;
    smartContract: string;
    0: { x: BigNumber; y: BigNumber; 0: BigNumber; 1: BigNumber };
    1: [BigNumber, BigNumber];
    2: BigNumber;
    3: number;
    4: number;
    5: number;
    6: string;
    7: string;
    8: string;
    9: string;
  }>;

  getPlayerIds(overrides?: CallOverrides): Promise<string[]>;

  "getPlayerIds()"(overrides?: CallOverrides): Promise<string[]>;

  getPlayerLocations(
    overrides?: CallOverrides
  ): Promise<{ x: BigNumber; y: BigNumber; 0: BigNumber; 1: BigNumber }[]>;

  "getPlayerLocations()"(
    overrides?: CallOverrides
  ): Promise<{ x: BigNumber; y: BigNumber; 0: BigNumber; 1: BigNumber }[]>;

  getTouchedTiles(
    overrides?: CallOverrides
  ): Promise<
    {
      coords: { x: BigNumber; y: BigNumber; 0: BigNumber; 1: BigNumber };
      perlin: [BigNumber, BigNumber];
      raritySeed: BigNumber;
      tileType: number;
      temperatureType: number;
      altitudeType: number;
      emoji: string;
      name: string;
      owner: string;
      smartContract: string;
      0: { x: BigNumber; y: BigNumber; 0: BigNumber; 1: BigNumber };
      1: [BigNumber, BigNumber];
      2: BigNumber;
      3: number;
      4: number;
      5: number;
      6: string;
      7: string;
      8: string;
      9: string;
    }[]
  >;

  "getTouchedTiles()"(
    overrides?: CallOverrides
  ): Promise<
    {
      coords: { x: BigNumber; y: BigNumber; 0: BigNumber; 1: BigNumber };
      perlin: [BigNumber, BigNumber];
      raritySeed: BigNumber;
      tileType: number;
      temperatureType: number;
      altitudeType: number;
      emoji: string;
      name: string;
      owner: string;
      smartContract: string;
      0: { x: BigNumber; y: BigNumber; 0: BigNumber; 1: BigNumber };
      1: [BigNumber, BigNumber];
      2: BigNumber;
      3: number;
      4: number;
      5: number;
      6: string;
      7: string;
      8: string;
      9: string;
    }[]
  >;

  perlinMax(overrides?: CallOverrides): Promise<number>;

  "perlinMax()"(overrides?: CallOverrides): Promise<number>;

  playerIds(arg0: BigNumberish, overrides?: CallOverrides): Promise<string>;

  "playerIds(uint256)"(
    arg0: BigNumberish,
    overrides?: CallOverrides
  ): Promise<string>;

  playerInited(arg0: string, overrides?: CallOverrides): Promise<boolean>;

  "playerInited(address)"(
    arg0: string,
    overrides?: CallOverrides
  ): Promise<boolean>;

  playerLocation(
    arg0: string,
    overrides?: CallOverrides
  ): Promise<{
    x: BigNumber;
    y: BigNumber;
    0: BigNumber;
    1: BigNumber;
  }>;

  "playerLocation(address)"(
    arg0: string,
    overrides?: CallOverrides
  ): Promise<{
    x: BigNumber;
    y: BigNumber;
    0: BigNumber;
    1: BigNumber;
  }>;

  seed(overrides?: CallOverrides): Promise<BigNumber>;

  "seed()"(overrides?: CallOverrides): Promise<BigNumber>;

  touchedTiles(
    arg0: BigNumberish,
    overrides?: CallOverrides
  ): Promise<{
    coords: { x: BigNumber; y: BigNumber; 0: BigNumber; 1: BigNumber };
    raritySeed: BigNumber;
    tileType: number;
    temperatureType: number;
    altitudeType: number;
    emoji: string;
    name: string;
    owner: string;
    smartContract: string;
    0: { x: BigNumber; y: BigNumber; 0: BigNumber; 1: BigNumber };
    1: BigNumber;
    2: number;
    3: number;
    4: number;
    5: string;
    6: string;
    7: string;
    8: string;
  }>;

  "touchedTiles(uint256)"(
    arg0: BigNumberish,
    overrides?: CallOverrides
  ): Promise<{
    coords: { x: BigNumber; y: BigNumber; 0: BigNumber; 1: BigNumber };
    raritySeed: BigNumber;
    tileType: number;
    temperatureType: number;
    altitudeType: number;
    emoji: string;
    name: string;
    owner: string;
    smartContract: string;
    0: { x: BigNumber; y: BigNumber; 0: BigNumber; 1: BigNumber };
    1: BigNumber;
    2: number;
    3: number;
    4: number;
    5: string;
    6: string;
    7: string;
    8: string;
  }>;

  vecs(
    arg0: BigNumberish,
    arg1: BigNumberish,
    overrides?: CallOverrides
  ): Promise<number>;

  "vecs(uint256,uint256)"(
    arg0: BigNumberish,
    arg1: BigNumberish,
    overrides?: CallOverrides
  ): Promise<number>;

  vecsDenom(overrides?: CallOverrides): Promise<number>;

  "vecsDenom()"(overrides?: CallOverrides): Promise<number>;

  worldScale(overrides?: CallOverrides): Promise<BigNumber>;

  "worldScale()"(overrides?: CallOverrides): Promise<BigNumber>;

  worldWidth(overrides?: CallOverrides): Promise<BigNumber>;

  "worldWidth()"(overrides?: CallOverrides): Promise<BigNumber>;

  callStatic: {
    cachedTiles(
      arg0: BigNumberish,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      coords: { x: BigNumber; y: BigNumber; 0: BigNumber; 1: BigNumber };
      raritySeed: BigNumber;
      tileType: number;
      temperatureType: number;
      altitudeType: number;
      emoji: string;
      name: string;
      owner: string;
      smartContract: string;
      0: { x: BigNumber; y: BigNumber; 0: BigNumber; 1: BigNumber };
      1: BigNumber;
      2: number;
      3: number;
      4: number;
      5: string;
      6: string;
      7: string;
      8: string;
    }>;

    "cachedTiles(uint256,uint256)"(
      arg0: BigNumberish,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      coords: { x: BigNumber; y: BigNumber; 0: BigNumber; 1: BigNumber };
      raritySeed: BigNumber;
      tileType: number;
      temperatureType: number;
      altitudeType: number;
      emoji: string;
      name: string;
      owner: string;
      smartContract: string;
      0: { x: BigNumber; y: BigNumber; 0: BigNumber; 1: BigNumber };
      1: BigNumber;
      2: number;
      3: number;
      4: number;
      5: string;
      6: string;
      7: string;
      8: string;
    }>;

    getCachedTile(
      coords: { x: BigNumberish; y: BigNumberish },
      overrides?: CallOverrides
    ): Promise<{
      coords: { x: BigNumber; y: BigNumber; 0: BigNumber; 1: BigNumber };
      perlin: [BigNumber, BigNumber];
      raritySeed: BigNumber;
      tileType: number;
      temperatureType: number;
      altitudeType: number;
      emoji: string;
      name: string;
      owner: string;
      smartContract: string;
      0: { x: BigNumber; y: BigNumber; 0: BigNumber; 1: BigNumber };
      1: [BigNumber, BigNumber];
      2: BigNumber;
      3: number;
      4: number;
      5: number;
      6: string;
      7: string;
      8: string;
      9: string;
    }>;

    "getCachedTile(tuple)"(
      coords: { x: BigNumberish; y: BigNumberish },
      overrides?: CallOverrides
    ): Promise<{
      coords: { x: BigNumber; y: BigNumber; 0: BigNumber; 1: BigNumber };
      perlin: [BigNumber, BigNumber];
      raritySeed: BigNumber;
      tileType: number;
      temperatureType: number;
      altitudeType: number;
      emoji: string;
      name: string;
      owner: string;
      smartContract: string;
      0: { x: BigNumber; y: BigNumber; 0: BigNumber; 1: BigNumber };
      1: [BigNumber, BigNumber];
      2: BigNumber;
      3: number;
      4: number;
      5: number;
      6: string;
      7: string;
      8: string;
      9: string;
    }>;

    getPlayerIds(overrides?: CallOverrides): Promise<string[]>;

    "getPlayerIds()"(overrides?: CallOverrides): Promise<string[]>;

    getPlayerLocations(
      overrides?: CallOverrides
    ): Promise<{ x: BigNumber; y: BigNumber; 0: BigNumber; 1: BigNumber }[]>;

    "getPlayerLocations()"(
      overrides?: CallOverrides
    ): Promise<{ x: BigNumber; y: BigNumber; 0: BigNumber; 1: BigNumber }[]>;

    getTouchedTiles(
      overrides?: CallOverrides
    ): Promise<
      {
        coords: { x: BigNumber; y: BigNumber; 0: BigNumber; 1: BigNumber };
        perlin: [BigNumber, BigNumber];
        raritySeed: BigNumber;
        tileType: number;
        temperatureType: number;
        altitudeType: number;
        emoji: string;
        name: string;
        owner: string;
        smartContract: string;
        0: { x: BigNumber; y: BigNumber; 0: BigNumber; 1: BigNumber };
        1: [BigNumber, BigNumber];
        2: BigNumber;
        3: number;
        4: number;
        5: number;
        6: string;
        7: string;
        8: string;
        9: string;
      }[]
    >;

    "getTouchedTiles()"(
      overrides?: CallOverrides
    ): Promise<
      {
        coords: { x: BigNumber; y: BigNumber; 0: BigNumber; 1: BigNumber };
        perlin: [BigNumber, BigNumber];
        raritySeed: BigNumber;
        tileType: number;
        temperatureType: number;
        altitudeType: number;
        emoji: string;
        name: string;
        owner: string;
        smartContract: string;
        0: { x: BigNumber; y: BigNumber; 0: BigNumber; 1: BigNumber };
        1: [BigNumber, BigNumber];
        2: BigNumber;
        3: number;
        4: number;
        5: number;
        6: string;
        7: string;
        8: string;
        9: string;
      }[]
    >;

    perlinMax(overrides?: CallOverrides): Promise<number>;

    "perlinMax()"(overrides?: CallOverrides): Promise<number>;

    playerIds(arg0: BigNumberish, overrides?: CallOverrides): Promise<string>;

    "playerIds(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    playerInited(arg0: string, overrides?: CallOverrides): Promise<boolean>;

    "playerInited(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    playerLocation(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<{
      x: BigNumber;
      y: BigNumber;
      0: BigNumber;
      1: BigNumber;
    }>;

    "playerLocation(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<{
      x: BigNumber;
      y: BigNumber;
      0: BigNumber;
      1: BigNumber;
    }>;

    seed(overrides?: CallOverrides): Promise<BigNumber>;

    "seed()"(overrides?: CallOverrides): Promise<BigNumber>;

    touchedTiles(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      coords: { x: BigNumber; y: BigNumber; 0: BigNumber; 1: BigNumber };
      raritySeed: BigNumber;
      tileType: number;
      temperatureType: number;
      altitudeType: number;
      emoji: string;
      name: string;
      owner: string;
      smartContract: string;
      0: { x: BigNumber; y: BigNumber; 0: BigNumber; 1: BigNumber };
      1: BigNumber;
      2: number;
      3: number;
      4: number;
      5: string;
      6: string;
      7: string;
      8: string;
    }>;

    "touchedTiles(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      coords: { x: BigNumber; y: BigNumber; 0: BigNumber; 1: BigNumber };
      raritySeed: BigNumber;
      tileType: number;
      temperatureType: number;
      altitudeType: number;
      emoji: string;
      name: string;
      owner: string;
      smartContract: string;
      0: { x: BigNumber; y: BigNumber; 0: BigNumber; 1: BigNumber };
      1: BigNumber;
      2: number;
      3: number;
      4: number;
      5: string;
      6: string;
      7: string;
      8: string;
    }>;

    vecs(
      arg0: BigNumberish,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<number>;

    "vecs(uint256,uint256)"(
      arg0: BigNumberish,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<number>;

    vecsDenom(overrides?: CallOverrides): Promise<number>;

    "vecsDenom()"(overrides?: CallOverrides): Promise<number>;

    worldScale(overrides?: CallOverrides): Promise<BigNumber>;

    "worldScale()"(overrides?: CallOverrides): Promise<BigNumber>;

    worldWidth(overrides?: CallOverrides): Promise<BigNumber>;

    "worldWidth()"(overrides?: CallOverrides): Promise<BigNumber>;
  };

  filters: {};

  estimateGas: {
    cachedTiles(
      arg0: BigNumberish,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "cachedTiles(uint256,uint256)"(
      arg0: BigNumberish,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getCachedTile(
      coords: { x: BigNumberish; y: BigNumberish },
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getCachedTile(tuple)"(
      coords: { x: BigNumberish; y: BigNumberish },
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getPlayerIds(overrides?: CallOverrides): Promise<BigNumber>;

    "getPlayerIds()"(overrides?: CallOverrides): Promise<BigNumber>;

    getPlayerLocations(overrides?: CallOverrides): Promise<BigNumber>;

    "getPlayerLocations()"(overrides?: CallOverrides): Promise<BigNumber>;

    getTouchedTiles(overrides?: CallOverrides): Promise<BigNumber>;

    "getTouchedTiles()"(overrides?: CallOverrides): Promise<BigNumber>;

    perlinMax(overrides?: CallOverrides): Promise<BigNumber>;

    "perlinMax()"(overrides?: CallOverrides): Promise<BigNumber>;

    playerIds(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "playerIds(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    playerInited(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    "playerInited(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    playerLocation(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    "playerLocation(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

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

    vecs(
      arg0: BigNumberish,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "vecs(uint256,uint256)"(
      arg0: BigNumberish,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    vecsDenom(overrides?: CallOverrides): Promise<BigNumber>;

    "vecsDenom()"(overrides?: CallOverrides): Promise<BigNumber>;

    worldScale(overrides?: CallOverrides): Promise<BigNumber>;

    "worldScale()"(overrides?: CallOverrides): Promise<BigNumber>;

    worldWidth(overrides?: CallOverrides): Promise<BigNumber>;

    "worldWidth()"(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    cachedTiles(
      arg0: BigNumberish,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "cachedTiles(uint256,uint256)"(
      arg0: BigNumberish,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getCachedTile(
      coords: { x: BigNumberish; y: BigNumberish },
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "getCachedTile(tuple)"(
      coords: { x: BigNumberish; y: BigNumberish },
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getPlayerIds(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "getPlayerIds()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getPlayerLocations(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "getPlayerLocations()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getTouchedTiles(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "getTouchedTiles()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    perlinMax(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "perlinMax()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    playerIds(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "playerIds(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    playerInited(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "playerInited(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    playerLocation(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "playerLocation(address)"(
      arg0: string,
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

    vecs(
      arg0: BigNumberish,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "vecs(uint256,uint256)"(
      arg0: BigNumberish,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    vecsDenom(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "vecsDenom()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    worldScale(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "worldScale()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    worldWidth(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "worldWidth()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
