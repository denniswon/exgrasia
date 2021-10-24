/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { TinyWorld } from "./TinyWorld";

export class TinyWorldFactory extends ContractFactory {
  constructor(
    linkLibraryAddresses: TinyWorldLibraryAddresses,
    signer?: Signer
  ) {
    super(_abi, TinyWorldFactory.linkBytecode(linkLibraryAddresses), signer);
  }

  static linkBytecode(linkLibraryAddresses: TinyWorldLibraryAddresses): string {
    let linkedBytecode = _bytecode;

    linkedBytecode = linkedBytecode.replace(
      new RegExp("__\\$262fb0c830dbdf2a376562d26adc520444\\$__", "g"),
      linkLibraryAddresses["__$262fb0c830dbdf2a376562d26adc520444$__"]
        .replace(/^0x/, "")
        .toLowerCase()
    );

    return linkedBytecode;
  }

  deploy(overrides?: Overrides): Promise<TinyWorld> {
    return super.deploy(overrides || {}) as Promise<TinyWorld>;
  }
  getDeployTransaction(overrides?: Overrides): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): TinyWorld {
    return super.attach(address) as TinyWorld;
  }
  connect(signer: Signer): TinyWorldFactory {
    return super.connect(signer) as TinyWorldFactory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): TinyWorld {
    return new Contract(address, _abi, signerOrProvider) as TinyWorld;
  }
}

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "x",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "y",
            type: "uint256",
          },
        ],
        indexed: false,
        internalType: "struct Coords",
        name: "",
        type: "tuple",
      },
    ],
    name: "PlayerUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        components: [
          {
            components: [
              {
                internalType: "uint256",
                name: "x",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "y",
                type: "uint256",
              },
            ],
            internalType: "struct Coords",
            name: "coords",
            type: "tuple",
          },
          {
            internalType: "uint256[2]",
            name: "perlin",
            type: "uint256[2]",
          },
          {
            internalType: "uint256",
            name: "raritySeed",
            type: "uint256",
          },
          {
            internalType: "enum TileType",
            name: "currentTileType",
            type: "uint8",
          },
        ],
        indexed: false,
        internalType: "struct Tile",
        name: "",
        type: "tuple",
      },
    ],
    name: "TileUpdated",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "breadScore",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "x",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "y",
            type: "uint256",
          },
        ],
        internalType: "struct Coords",
        name: "coords",
        type: "tuple",
      },
    ],
    name: "buildFarm",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "cachedTiles",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "x",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "y",
            type: "uint256",
          },
        ],
        internalType: "struct Coords",
        name: "coords",
        type: "tuple",
      },
      {
        internalType: "uint256",
        name: "raritySeed",
        type: "uint256",
      },
      {
        internalType: "enum TileType",
        name: "currentTileType",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "x",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "y",
            type: "uint256",
          },
        ],
        internalType: "struct Coords",
        name: "coords",
        type: "tuple",
      },
    ],
    name: "collectWood",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "enum TileType",
        name: "from",
        type: "uint8",
      },
      {
        internalType: "enum TileType",
        name: "to",
        type: "uint8",
      },
      {
        internalType: "bool",
        name: "isValid",
        type: "bool",
      },
    ],
    name: "editTransition",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "x",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "y",
            type: "uint256",
          },
        ],
        internalType: "struct Coords",
        name: "coords",
        type: "tuple",
      },
    ],
    name: "getCachedTile",
    outputs: [
      {
        components: [
          {
            components: [
              {
                internalType: "uint256",
                name: "x",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "y",
                type: "uint256",
              },
            ],
            internalType: "struct Coords",
            name: "coords",
            type: "tuple",
          },
          {
            internalType: "uint256[2]",
            name: "perlin",
            type: "uint256[2]",
          },
          {
            internalType: "uint256",
            name: "raritySeed",
            type: "uint256",
          },
          {
            internalType: "enum TileType",
            name: "currentTileType",
            type: "uint8",
          },
        ],
        internalType: "struct Tile",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getTouchedTiles",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "x",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "y",
            type: "uint256",
          },
        ],
        internalType: "struct Coords[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "x",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "y",
            type: "uint256",
          },
        ],
        internalType: "struct Coords",
        name: "coords",
        type: "tuple",
      },
    ],
    name: "harvestWheat",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "x",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "y",
            type: "uint256",
          },
        ],
        internalType: "struct Coords",
        name: "coords",
        type: "tuple",
      },
    ],
    name: "initPlayerLocation",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_seed",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_worldWidth",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_worldScale",
        type: "uint256",
      },
    ],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "lastHarvested",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "x",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "y",
            type: "uint256",
          },
        ],
        internalType: "struct Coords",
        name: "coords",
        type: "tuple",
      },
    ],
    name: "makeBread",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "x",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "y",
            type: "uint256",
          },
        ],
        internalType: "struct Coords",
        name: "coords",
        type: "tuple",
      },
    ],
    name: "makeWindmill",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "x",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "y",
            type: "uint256",
          },
        ],
        internalType: "struct Coords",
        name: "coords",
        type: "tuple",
      },
    ],
    name: "movePlayer",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "playerInited",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "playerLocation",
    outputs: [
      {
        internalType: "uint256",
        name: "x",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "y",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256[2]",
        name: "a",
        type: "uint256[2]",
      },
      {
        internalType: "uint256[2][2]",
        name: "b",
        type: "uint256[2][2]",
      },
      {
        internalType: "uint256[2]",
        name: "c",
        type: "uint256[2]",
      },
      {
        internalType: "uint256[7]",
        name: "publicSignals",
        type: "uint256[7]",
      },
    ],
    name: "proveTile",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "seed",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "touchedTiles",
    outputs: [
      {
        internalType: "uint256",
        name: "x",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "y",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "x",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "y",
            type: "uint256",
          },
        ],
        internalType: "struct Coords",
        name: "coords",
        type: "tuple",
      },
      {
        internalType: "enum TileType",
        name: "toTileType",
        type: "uint8",
      },
    ],
    name: "transitionTile",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "enum TileType",
        name: "",
        type: "uint8",
      },
      {
        internalType: "enum TileType",
        name: "",
        type: "uint8",
      },
    ],
    name: "transitions",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "wheatScore",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "woodScore",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "worldScale",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "worldWidth",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50611f7a806100206000396000f3fe608060405234801561001057600080fd5b50600436106101c45760003560e01c8063b173fd40116100f9578063dd96353111610097578063e79c5dab11610071578063e79c5dab14610428578063ea58cb2314610448578063f2fde38b1461045d578063fc9cbb361461047057600080fd5b8063dd963531146103ef578063e673da3714610402578063e67b62901461041557600080fd5b8063c26caf38116100d3578063c26caf3814610390578063d13e4f28146103a3578063d14c3728146103ac578063d4c2e7ac146103cf57600080fd5b8063b173fd4014610309578063b38dbe6d14610345578063bf44026d1461037057600080fd5b80637474182011610166578063810a84c411610140578063810a84c41461028a5780638d5192691461029d5780638da5cb5b146102b05780639c2a1029146102cb57600080fd5b8063747418201461025b5780637d94792a1461026e57806380d859111461027757600080fd5b80634400d97e116101a25780634400d97e146102245780634ba147ee1461022d57806360100f5714610240578063715018a61461025357600080fd5b80631551cbd3146101c9578063214300d6146101de57806330cdc04b14610211575b600080fd5b6101dc6101d73660046118ec565b6104d3565b005b6101fe6101ec3660046118c5565b606b6020526000908152604090205481565b6040519081526020015b60405180910390f35b6101dc61021f366004611a6a565b61086c565b6101fe60665481565b6101dc61023b366004611a24565b61092a565b6101dc61024e366004611a6a565b610a0b565b6101dc610bb6565b6101dc610269366004611a6a565b610bec565b6101fe60655481565b6101dc610285366004611ae8565b610c1a565b6101dc610298366004611a6a565b610d76565b6101dc6102ab366004611a6a565b610edb565b6033546040516001600160a01b039091168152602001610208565b6102f96102d93660046119f2565b606860209081526000928352604080842090915290825290205460ff1681565b6040519015158152602001610208565b6103306103173660046118c5565b606f602052600090815260409020805460019091015482565b60408051928352602083019190915201610208565b6101fe610353366004611ac7565b606e60209081526000928352604080842090915290825290205481565b61038361037e366004611a6a565b610f61565b6040516102089190611d4f565b6101dc61039e366004611a6a565b611038565b6101fe606a5481565b6102f96103ba3660046118c5565b60706020526000908152604090205460ff1681565b6101fe6103dd3660046118c5565b606d6020526000908152604090205481565b6103306103fd366004611aaf565b6110f9565b6101dc610410366004611a6a565b611127565b6101dc610423366004611a85565b61112e565b6101fe6104363660046118c5565b606c6020526000908152604090205481565b6104506113f9565b6040516102089190611b58565b6101dc61046b3660046118c5565b61146c565b6104c461047e366004611ac7565b6067602090815260009283526040808420825291835291819020815180830190925280548252600181015492820192909252600482015460059092015490919060ff1683565b60405161020893929190611d22565b6040805180820182526060830151815260808301516020808301919091523360009081526070909152919091205460ff166105295760405162461bcd60e51b815260040161052090611c33565b60405180910390fd5b336000908152606f602090815260409182902082518084019093528054835260019081015491830191909152906105609083611504565b111561057e5760405162461bcd60e51b815260040161052090611ce1565b60405163ee9aee5760e01b815273__$262fb0c830dbdf2a376562d26adc520444$__9063ee9aee57906105bb908890889088908890600401611baf565b60206040518083038186803b1580156105d357600080fd5b505af41580156105e7573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061060b91906119d6565b6106495760405162461bcd60e51b815260206004820152600f60248201526e4661696c6564205a4b20636865636b60881b6044820152606401610520565b8151602083015160408401516060850151608086015160a087015160c0880151606654841061067757600080fd5b606654831061068557600080fd5b606a54811461069357600080fd5b60655482146106a157600080fd5b60006106ae888888611546565b6040805180820182528781526020808201889052825160c081018452608081018a815260a082018a90528152835180850185528d81528083018d9052918101919091529182018990529192506000906060810184600b81111561072157634e487b7160e01b600052602160045260246000fd5b905260008881526067602090815260408083208a8452825290912082518051825582015160018201559082015191925082916107639060028084019190611745565b5060408201516004820155606082015160058201805460ff1916600183600b81111561079f57634e487b7160e01b600052602160045260246000fd5b02179055505060698054600181018255600091825284517f7fb4302e8e91f9110a6554c2c0a24601252c2a42c2220ca988efcfe3999143086002909202918201556020808601517f7fb4302e8e91f9110a6554c2c0a24601252c2a42c2220ca988efcfe399914309909201919091558982526067815260408083208a84529091529081902090517f60987c6bdd72868f4e9d3ad06799309351c0b66076ffbc20cb70bf005ea77caa92506108539190611db4565b60405180910390a1505050505050505050505050505050565b3360009081526070602052604090205460ff16156108bd5760405162461bcd60e51b815260206004820152600e60248201526d105b1c9958591e481a5b9a5d195960921b6044820152606401610520565b336000908152606f602090815260408083208451815582850151600191820155607090925291829020805460ff19169091179055517f0fdaaa2b8b07a92479b35adb0552d262bd5e4f7bc415e99df1779b1612f868629061091f908390611d0b565b60405180910390a150565b6033546001600160a01b031633146109545760405162461bcd60e51b815260040161052090611cac565b806068600085600b81111561097957634e487b7160e01b600052602160045260246000fd5b600b81111561099857634e487b7160e01b600052602160045260246000fd5b8152602001908152602001600020600084600b8111156109c857634e487b7160e01b600052602160045260246000fd5b600b8111156109e757634e487b7160e01b600052602160045260246000fd5b81526020810191909152604001600020805460ff1916911515919091179055505050565b33600090815260706020526040902054819060ff16610a3c5760405162461bcd60e51b815260040161052090611c33565b336000908152606f60209081526040918290208251808401909352805483526001908101549183019190915290610a739083611504565b1115610a915760405162461bcd60e51b815260040161052090611ce1565b336000908152606b602052604090205460031115610ae45760405162461bcd60e51b815260206004820152601060248201526f139bdd08195b9bdd59da081dda19585d60821b6044820152606401610520565b60078251600090815260676020908152604080832082870151845290915290206005015460ff16600b811115610b2a57634e487b7160e01b600052602160045260246000fd5b14610b685760405162461bcd60e51b815260206004820152600e60248201526d139bdd08184815da5b991b5a5b1b60921b6044820152606401610520565b336000908152606b60205260408120805460039290610b88908490611ebe565b9091555050336000908152606d60205260408120805460019290610bad908490611e67565b90915550505050565b6033546001600160a01b03163314610be05760405162461bcd60e51b815260040161052090611cac565b610bea6000611592565b565b610bf781600461112e565b336000908152606c60205260408120805491610c1283611ed5565b919050555050565b600054610100900460ff1680610c33575060005460ff16155b610c4f5760405162461bcd60e51b815260040161052090611c5e565b600054610100900460ff16158015610c71576000805461ffff19166101011790555b610c796115e4565b60658490556066839055606a8290557ffe4781f175d08c6d6373faf8e257806a2b3882e73b5fe0c554d2607f15454f548054600160ff1991821681179092557f78e57d820f18e677b89746142553699e1fce1f959c7bc4b7a21f07161239084280548216831790557fa48154dd5d6e3d137133de6afa2e32a49e49ecb516c0335da574194588e9d120805482168317905560086000527f374dc179ab22b15b16e95e8d09508d6170a7451c6357e0b730cf2e3e1d257f986020527f73558278389be84f9d64ff2a8ba48fefe3bcc1fc8bfc7f4d099a60cfc2f95fe8805490911690911790558015610d70576000805461ff00191690555b50505050565b33600090815260706020526040902054819060ff16610da75760405162461bcd60e51b815260040161052090611c33565b336000908152606f60209081526040918290208251808401909352805483526001908101549183019190915290610dde9083611504565b1115610dfc5760405162461bcd60e51b815260040161052090611ce1565b8151600090815260676020908152604080832082860151845290915281206005015460ff16600b811115610e4057634e487b7160e01b600052602160045260246000fd5b1415610e805760405162461bcd60e51b815260206004820152600f60248201526e2a34b632903737ba10383937bb32b760891b6044820152606401610520565b336000908152606f60209081526040918290208451815590840151600190910155517f0fdaaa2b8b07a92479b35adb0552d262bd5e4f7bc415e99df1779b1612f8686290610ecf908490611d0b565b60405180910390a15050565b336000908152606c6020526040902054600a1115610f2d5760405162461bcd60e51b815260206004820152600f60248201526e139bdd08195b9bdd59da081ddbdbd9608a1b6044820152606401610520565b336000908152606c602052604081208054600a9290610f4d908490611ebe565b90915550610f5e905081600761112e565b50565b610f6961177f565b81516000908152606760209081526040808320828601518452825291829020825160c081018452815460808201908152600183015460a083015281528351808501948590529093919284019160028085019182845b815481526020019060010190808311610fbe57505050918352505060048201546020820152600582015460409091019060ff16600b81111561101057634e487b7160e01b600052602160045260246000fd5b600b81111561102f57634e487b7160e01b600052602160045260246000fd5b90525092915050565b80516000908152606e6020908152604080832082850151845290915290205461106290603c611e67565b4210156110a75760405162461bcd60e51b81526020600482015260136024820152722430b93b32b9ba34b733903a37b79039b7b7b760691b6044820152606401610520565b6110b281600861112e565b336000908152606b602052604081208054600392906110d2908490611e67565b909155505080516000908152606e6020908152604080832093820151835292905220429055565b6069818154811061110957600080fd5b60009182526020909120600290910201805460019091015490915082565b610f5e8160065b33600090815260706020526040902054829060ff1661115f5760405162461bcd60e51b815260040161052090611c33565b336000908152606f602090815260409182902082518084019093528054835260019081015491830191909152906111969083611504565b11156111b45760405162461bcd60e51b815260040161052090611ce1565b8251600090815260676020908152604080832082870151845290915281206005015460ff16600b8111156111f857634e487b7160e01b600052602160045260246000fd5b14156112385760405162461bcd60e51b815260206004820152600f60248201526e2a34b632903737ba10383937bb32b760891b6044820152606401610520565b8251600090815260676020908152604080832082870151845290915281206005015460ff169060689082600b81111561128157634e487b7160e01b600052602160045260246000fd5b600b8111156112a057634e487b7160e01b600052602160045260246000fd5b8152602001908152602001600020600084600b8111156112d057634e487b7160e01b600052602160045260246000fd5b600b8111156112ef57634e487b7160e01b600052602160045260246000fd5b815260208101919091526040016000205460ff16151560011461134d5760405162461bcd60e51b815260206004820152601660248201527521b0b73737ba1036b0b5b2903a3930b739b4ba34b7b760511b6044820152606401610520565b835160009081526067602090815260408083208288015184529091529020600501805484919060ff1916600183600b81111561139957634e487b7160e01b600052602160045260246000fd5b0217905550835160009081526067602090815260408083208288015184529091529081902090517f60987c6bdd72868f4e9d3ad06799309351c0b66076ffbc20cb70bf005ea77caa916113eb91611db4565b60405180910390a150505050565b60606069805480602002602001604051908101604052809291908181526020016000905b828210156114635783829060005260206000209060020201604051806040016040529081600082015481526020016001820154815250508152602001906001019061141d565b50505050905090565b6033546001600160a01b031633146114965760405162461bcd60e51b815260040161052090611cac565b6001600160a01b0381166114fb5760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b6064820152608401610520565b610f5e81611592565b60006115228260200151846020015161151d9190611e7f565b61165f565b825184516115339161151d91611e7f565b61153d9190611e67565b90505b92915050565b60006012841180156115585750600382105b156115655750600361158b565b600f8411156115765750600861158b565b600d8411156115875750600261158b565b5060015b9392505050565b603380546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b600054610100900460ff16806115fd575060005460ff16155b6116195760405162461bcd60e51b815260040161052090611c5e565b600054610100900460ff1615801561163b576000805461ffff19166101011790555b61164361167b565b61164b6116e5565b8015610f5e576000805461ff001916905550565b6000808212156116775761167282611ef0565b611540565b5090565b600054610100900460ff1680611694575060005460ff16155b6116b05760405162461bcd60e51b815260040161052090611c5e565b600054610100900460ff1615801561164b576000805461ffff19166101011790558015610f5e576000805461ff001916905550565b600054610100900460ff16806116fe575060005460ff16155b61171a5760405162461bcd60e51b815260040161052090611c5e565b600054610100900460ff1615801561173c576000805461ffff19166101011790555b61164b33611592565b8260028101928215611773579160200282015b82811115611773578251825591602001919060010190611758565b506116779291506117db565b6040805160c0810190915260006080820181815260a08301919091528152602081016117a96117f0565b8152602001600081526020016000600b8111156117d657634e487b7160e01b600052602160045260246000fd5b905290565b5b8082111561167757600081556001016117dc565b60405180604001604052806002906020820280368337509192915050565b600082601f83011261181e578081fd5b611826611e1b565b808385604086011115611837578384fd5b835b6002811015611858578135845260209384019390910190600101611839565b509095945050505050565b8035600c811061187257600080fd5b919050565b600060408284031215611888578081fd5b6040516040810181811067ffffffffffffffff821117156118ab576118ab611f20565b604052823581526020928301359281019290925250919050565b6000602082840312156118d6578081fd5b81356001600160a01b038116811461158b578182fd5b6000806000806101e0808688031215611903578384fd5b61190d878761180e565b9450604087605f88011261191f578485fd5b611927611e1b565b8082890160c08a018b81111561193b578889fd5b885b6002811015611964576119508d8461180e565b85526020909401939185019160010161193d565b508298506119728c8261180e565b975050505050508661011f870112611988578182fd5b611990611e44565b80610100880189848a0111156119a4578485fd5b8493505b60078410156119c8578035835260019390930192602092830192016119a8565b509598949750929550505050565b6000602082840312156119e7578081fd5b815161158b81611f36565b60008060408385031215611a04578182fd5b611a0d83611863565b9150611a1b60208401611863565b90509250929050565b600080600060608486031215611a38578283fd5b611a4184611863565b9250611a4f60208501611863565b91506040840135611a5f81611f36565b809150509250925092565b600060408284031215611a7b578081fd5b61153d8383611877565b60008060608385031215611a97578182fd5b611aa18484611877565b9150611a1b60408401611863565b600060208284031215611ac0578081fd5b5035919050565b60008060408385031215611ad9578182fd5b50508035926020909101359150565b600080600060608486031215611afc578283fd5b505081359360208301359350604090920135919050565b8060005b6002811015610d70578151845260209384019390910190600101611b17565b600c8110611b5457634e487b7160e01b600052602160045260246000fd5b9052565b602080825282518282018190526000919060409081850190868401855b82811015611ba257611b9284835180518252602090810151910152565b9284019290850190600101611b75565b5091979650505050505050565b6101e08101611bbe8287611b13565b60408083018660005b6002811015611bee57611bdb838351611b13565b9183019160209190910190600101611bc7565b50505050611bff60c0830185611b13565b61010082018360005b6007811015611c27578151835260209283019290910190600101611c08565b50505095945050505050565b602080825260119082015270141b185e595c881b9bdd081a5b9a5d1959607a1b604082015260600190565b6020808252602e908201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160408201526d191e481a5b9a5d1a585b1a5e995960921b606082015260800190565b6020808252818101527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604082015260600190565b60208082526010908201526f2637b1b0ba34b7b7103a37b7903330b960811b604082015260600190565b815181526020808301519082015260408101611540565b835181526020808501519082015260808101836040830152611d476060830184611b36565b949350505050565b8151805182526020908101519082015260c081016020808401516040840160005b6002811015611d8d57825182529183019190830190600101611d70565b50505050604083015160808301526060830151611dad60a0840182611b36565b5092915050565b600060c0820190508254825260018084015460208181860152600291506040850182870160005b84811015611df6578154835291830191908501908501611ddb565b5050505050506004830154608083015260ff600584015416611dad60a0840182611b36565b6040805190810167ffffffffffffffff81118282101715611e3e57611e3e611f20565b60405290565b60405160e0810167ffffffffffffffff81118282101715611e3e57611e3e611f20565b60008219821115611e7a57611e7a611f0a565b500190565b60008083128015600160ff1b850184121615611e9d57611e9d611f0a565b6001600160ff1b0384018313811615611eb857611eb8611f0a565b50500390565b600082821015611ed057611ed0611f0a565b500390565b6000600019821415611ee957611ee9611f0a565b5060010190565b6000600160ff1b821415611f0657611f06611f0a565b0390565b634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052604160045260246000fd5b8015158114610f5e57600080fdfea2646970667358221220b66358d2aff6d212766fa6225fe27c7a5dbd6333c419398b4cc935d12565b24f64736f6c63430008040033";

export interface TinyWorldLibraryAddresses {
  ["__$262fb0c830dbdf2a376562d26adc520444$__"]: string;
}
