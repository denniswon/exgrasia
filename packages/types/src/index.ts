/**
 * This package contains common TS types.
 *
 * ## Installation
 *
 * These contracts are not currently published online, but in the future may
 * be made available on NPM or Skypack.
 *
 * @packageDocumentation
 */

import type { Any } from 'ts-toolbelt';

export enum TileType {
  UNKNOWN,
  WATER,
  BEACH,
  TREE,
  CHEST,
  LAND,
  MAX = LAND, // NOTE: This MAX is hardcoded as 'divisor' in fake_perlin.circom!
}

export type WorldCoords = {
  x: number;
  y: number;
};

export type Tile = {
  coords: WorldCoords;
  originalTileType: TileType;
  currentTileType: TileType;
  perl: number;
};

/**
 * An abstract type used to differentiate between common types, like `number` or `string`.
 * The `Id` type parameter is the key to vary upon and should be unique unless being used to subtype.
 */
export type Abstract<T, Id extends Any.Key> = Any.Type<T, Id>;

/**
 * Unwraps a Promise type into the type it contains. Useful when working with Promise-returning functions.
 */
export type Awaited<T> = Any.Await<T>;

/**
 * This is expected to be a 40-character, lowercase hex string, prefixed with 0x
 * (so 42 characters in total). EthAddress should only ever be instantiated
 * through the `address` function in `serde`.
 */
export type EthAddress = Abstract<string, 'EthAddress'>;

/**
 * Converts a string to an `EthAddress`: a 0x-prefixed all lowercase hex string
 * of 40 hex characters. An object of the `EthAddress` type should only ever be
 * initialized through this constructor-like method. Throws if the provided
 * string cannot be parsed as an Ethereum address.
 *
 * @param str An address-like `string`
 */
export function address(str: string): EthAddress {
  let ret = str.toLowerCase();
  if (ret.slice(0, 2) === '0x') {
    ret = ret.slice(2);
  }
  for (const c of ret) {
    if ('0123456789abcdef'.indexOf(c) === -1) throw new Error('not a valid address');
  }
  if (ret.length !== 40) throw new Error('not a valid address');
  return `0x${ret}` as EthAddress;
}

export interface SnarkJSProof {
  pi_a: [string, string, string];
  pi_b: [[string, string], [string, string], [string, string]];
  pi_c: [string, string, string];
}

export interface SnarkJSProofAndSignals {
  proof: SnarkJSProof;
  publicSignals: string[];
}

export interface SnarkInput {
  x: string;
  y: string;
  seed: string;
  width: string;
  scale: string;
  perlinBase: string;
  isRare: string;
}

/**
 * Shape of the args for `revealLocation` DarkForestCore contract call
 */
export type ProofArgs = {
  proof: SnarkJSProof;
  input: SnarkInput;
};

export type ProveTileContractCallArgs = [
  [string, string],
  [[string, string], [string, string]],
  [string, string],
  [string, string, string, string]
];

/**
 * Corresponds to local dev deployer account 0x1c0f0Af3262A7213E59Be7f1440282279D788335
 */
export const DEV_TEST_PRIVATE_KEY =
  '0x044C7963E9A89D4F8B64AB23E02E97B2E00DD57FCB60F316AC69B77135003AEF';

export function fakePerlin(x: number, y: number, seed: number): TileType {
  return 1 + ((x + y + seed) % TileType.MAX);
}