/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { StubTileContract } from "./StubTileContract";

export class StubTileContractFactory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(overrides?: Overrides): Promise<StubTileContract> {
    return super.deploy(overrides || {}) as Promise<StubTileContract>;
  }
  getDeployTransaction(overrides?: Overrides): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): StubTileContract {
    return super.attach(address) as StubTileContract;
  }
  connect(signer: Signer): StubTileContractFactory {
    return super.connect(signer) as StubTileContractFactory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): StubTileContract {
    return new Contract(address, _abi, signerOrProvider) as StubTileContract;
  }
}

const _abi = [
  {
    inputs: [],
    name: "tileABI",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "tileDescription",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "tileEmoji",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "tileName",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50610180806100206000396000f3fe608060405234801561001057600080fd5b506004361061004c5760003560e01c80635a6e46c7146100515780637b955146146100925780638efa142b146100b2578063a3211c2d146100d7575b600080fd5b60408051808201909152601381527254686973206973206120746573742074696c6560681b60208201525b60405161008991906100f7565b60405180910390f35b6040805180820190915260048152636970667360e01b602082015261007c565b604080518082019091526009815268546573742054696c6560b81b602082015261007c565b604080518082019091526004815263f09f8c8360e01b602082015261007c565b6000602080835283518082850152825b8181101561012357858101830151858201604001528201610107565b818111156101345783604083870101525b50601f01601f191692909201604001939250505056fea2646970667358221220413708f16da8c5775ce8a53f10ddd2d4670f3b10478871b17bf160ec93325cba64736f6c63430008040033";
