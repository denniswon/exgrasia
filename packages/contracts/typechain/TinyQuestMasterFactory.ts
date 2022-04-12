/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { TinyQuestMaster } from "./TinyQuestMaster";

export class TinyQuestMasterFactory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    _connectedWorld: string,
    _fish: string,
    _openSea: string,
    _wheat: string,
    _corn: string,
    _cactus: string,
    _ranch: string,
    _milk: string,
    _egg: string,
    _iron: string,
    _gold: string,
    _diamond: string,
    overrides?: Overrides
  ): Promise<TinyQuestMaster> {
    return super.deploy(
      _connectedWorld,
      _fish,
      _openSea,
      _wheat,
      _corn,
      _cactus,
      _ranch,
      _milk,
      _egg,
      _iron,
      _gold,
      _diamond,
      overrides || {}
    ) as Promise<TinyQuestMaster>;
  }
  getDeployTransaction(
    _connectedWorld: string,
    _fish: string,
    _openSea: string,
    _wheat: string,
    _corn: string,
    _cactus: string,
    _ranch: string,
    _milk: string,
    _egg: string,
    _iron: string,
    _gold: string,
    _diamond: string,
    overrides?: Overrides
  ): TransactionRequest {
    return super.getDeployTransaction(
      _connectedWorld,
      _fish,
      _openSea,
      _wheat,
      _corn,
      _cactus,
      _ranch,
      _milk,
      _egg,
      _iron,
      _gold,
      _diamond,
      overrides || {}
    );
  }
  attach(address: string): TinyQuestMaster {
    return super.attach(address) as TinyQuestMaster;
  }
  connect(signer: Signer): TinyQuestMasterFactory {
    return super.connect(signer) as TinyQuestMasterFactory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): TinyQuestMaster {
    return new Contract(address, _abi, signerOrProvider) as TinyQuestMaster;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "contract TinyWorld",
        name: "_connectedWorld",
        type: "address",
      },
      {
        internalType: "contract TinyFish",
        name: "_fish",
        type: "address",
      },
      {
        internalType: "contract TinyOpenSea",
        name: "_openSea",
        type: "address",
      },
      {
        internalType: "contract TinyWheat",
        name: "_wheat",
        type: "address",
      },
      {
        internalType: "contract TinyCorn",
        name: "_corn",
        type: "address",
      },
      {
        internalType: "contract TinyCactus",
        name: "_cactus",
        type: "address",
      },
      {
        internalType: "contract TinyRanch",
        name: "_ranch",
        type: "address",
      },
      {
        internalType: "contract TinyMilk",
        name: "_milk",
        type: "address",
      },
      {
        internalType: "contract TinyEgg",
        name: "_egg",
        type: "address",
      },
      {
        internalType: "contract TinyIron",
        name: "_iron",
        type: "address",
      },
      {
        internalType: "contract TinyGold",
        name: "_gold",
        type: "address",
      },
      {
        internalType: "contract TinyDiamond",
        name: "_diamond",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "farmingLevel0",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "farmingLevel1",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "fishingLevel0",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "fishingLevel1",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "miningLevel0",
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
  {
    inputs: [],
    name: "viewQuests",
    outputs: [
      {
        components: [
          {
            internalType: "string",
            name: "levelDescription",
            type: "string",
          },
          {
            internalType: "string[]",
            name: "quests",
            type: "string[]",
          },
        ],
        internalType: "struct TinyQuestMaster.LevelQuests[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b5060405162001cbc38038062001cbc833981016040819052620000349162000116565b600080546001600160a01b03199081166001600160a01b039e8f16179091556001805482169c8e169c909c17909b55600280548c169a8d169a909a17909955600480548b16988c1698909817909755600580548a16968b1696909617909555600680548916948a169490941790935560078054881692891692909217909155600880548716918816919091179055600980548616918716919091179055600b80548516918616919091179055600c80548416918516919091179055600d8054909216921691909117905562000234565b805162000111816200021b565b919050565b6000806000806000806000806000806000806101808d8f03121562000139578788fd5b8c5162000146816200021b565b60208e0151909c5062000159816200021b565b60408e0151909b506200016c816200021b565b60608e0151909a506200017f816200021b565b60808e015190995062000192816200021b565b60a08e0151909850620001a5816200021b565b9650620001b560c08e0162000104565b9550620001c560e08e0162000104565b9450620001d66101008e0162000104565b9350620001e76101208e0162000104565b9250620001f86101408e0162000104565b9150620002096101608e0162000104565b90509295989b509295989b509295989b565b6001600160a01b03811681146200023157600080fd5b50565b611a7880620002446000396000f3fe608060405234801561001057600080fd5b506004361061009e5760003560e01c80636d26684f116100665780636d26684f1461012d5780638318609a14610135578063986c28541461013d578063d14bddf114610150578063f6bc2b8a1461015857600080fd5b806323e7d0e2146100a35780632f9ca46a146100c15780635ebecbc6146101085780635f71a8b914610112578063650883a714610125575b600080fd5b6100ab610185565b6040516100b89190611427565b60405180910390f35b6100fb6100cf366004611393565b506040805180820190915260118152702a34b73c9028bab2b9ba1026b0b9ba32b960791b602082015290565b6040516100b891906114e8565b610110610544565b005b6100fb610120366004611393565b6107e9565b61011061080a565b610110610901565b6101106109fc565b6100fb61014b366004611393565b610eeb565b610110610f0c565b6100fb610166366004611393565b50604080518082019091526004815263784fc8df60e11b602082015290565b604080516002808252606082810190935260009190816020015b604080518082019091526060808252602082015281526020019060019003908161019f5790505090506040518060a00160405280606b815260200161195f606b91398160008151811061020257634e487b7160e01b600052603260045260246000fd5b6020908102919091010151526040805160038082526080820190925290816020015b6060815260200190600190039081610224579050508160008151811061025a57634e487b7160e01b600052603260045260246000fd5b6020026020010151602001819052506040518060a00160405280607f81526020016117e3607f9139816000815181106102a357634e487b7160e01b600052603260045260246000fd5b6020026020010151602001516000815181106102cf57634e487b7160e01b600052603260045260246000fd5b60200260200101819052506040518060a00160405280607981526020016119ca607991398160008151811061031457634e487b7160e01b600052603260045260246000fd5b60200260200101516020015160018151811061034057634e487b7160e01b600052603260045260246000fd5b60200260200101819052506040518060a0016040528060628152602001611721606291398160008151811061038557634e487b7160e01b600052603260045260246000fd5b6020026020010151602001516002815181106103b157634e487b7160e01b600052603260045260246000fd5b60200260200101819052506040518060a001604052806067815260200161162760679139816001815181106103f657634e487b7160e01b600052603260045260246000fd5b6020908102919091010151526040805160028082526060820190925290816020015b6060815260200190600190039081610418579050508160018151811061044e57634e487b7160e01b600052603260045260246000fd5b6020026020010151602001819052506040518060c00160405280609081526020016118cf609091398160018151811061049757634e487b7160e01b600052603260045260246000fd5b6020026020010151602001516000815181106104c357634e487b7160e01b600052603260045260246000fd5b60200260200101819052506040518060a00160405280606d8152602001611862606d91398160018151811061050857634e487b7160e01b600052603260045260246000fd5b60200260200101516020015160018151811061053457634e487b7160e01b600052603260045260246000fd5b6020908102919091010152919050565b600480546040516370a0823160e01b81523392810192909252674563918244f40000916001600160a01b03909116906370a082319060240160206040518083038186803b15801561059457600080fd5b505afa1580156105a8573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105cc91906113c4565b10158061065a57506005546040516370a0823160e01b8152336004820152674563918244f40000916001600160a01b0316906370a082319060240160206040518083038186803b15801561061f57600080fd5b505afa158015610633573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061065791906113c4565b10155b806106e657506006546040516370a0823160e01b8152336004820152674563918244f40000916001600160a01b0316906370a082319060240160206040518083038186803b1580156106ab57600080fd5b505afa1580156106bf573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106e391906113c4565b10155b6107835760405162461bcd60e51b815260206004820152605760248201527f596f75206e65656420746f2068617276657374206174206c656173742035207760448201527f686561742c203520636f726e206f7220352063616374757320746f6b656e732060648201527f746f20636f6d706c65746520746869732071756573742e000000000000000000608482015260a4015b60405180910390fd5b600054604051633f3a10e760e21b8152336004820152600160248201526001600160a01b039091169063fce8439c90604401600060405180830381600087803b1580156107cf57600080fd5b505af11580156107e3573d6000803e3d6000fd5b50505050565b60606040518060c001604052806093815260200161168e6093913992915050565b600b546040516370a0823160e01b8152336004820152674563918244f40000916001600160a01b0316906370a082319060240160206040518083038186803b15801561085557600080fd5b505afa158015610869573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061088d91906113c4565b10156107835760405162461bcd60e51b815260206004820152603860248201527f596f75206e65656420746f206d696e65206174206c6561737420352069726f6e60448201527f20746f20636f6d706c65746520746869732071756573742e0000000000000000606482015260840161077a565b6001546040516370a0823160e01b81523360048201526003916001600160a01b0316906370a082319060240160206040518083038186803b15801561094557600080fd5b505afa158015610959573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061097d91906113c4565b10156107835760405162461bcd60e51b815260206004820152604260248201527f596f75206e65656420746f2066697368206174206c656173742033206469666660448201527f6572656e74206669736820746f20636f6d706c657465207468697320717565736064820152613a1760f11b608482015260a40161077a565b6009546040516370a0823160e01b8152336004820152674563918244f40000916001600160a01b0316906370a082319060240160206040518083038186803b158015610a4757600080fd5b505afa158015610a5b573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a7f91906113c4565b6008546040516370a0823160e01b81523360048201526001600160a01b03909116906370a082319060240160206040518083038186803b158015610ac257600080fd5b505afa158015610ad6573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610afa91906113c4565b610b0491906115c7565b1015610b9e5760405162461bcd60e51b815260206004820152606060248201527f596f75206e65656420746f2068617276657374206174206c656173742035207760448201527f686561742c203520636f726e2c2035206361637475732c2035206d696c6b206f60648201527f722035206567677320746f20636f6d706c65746520746869732071756573742e608482015260a40161077a565b60008060009054906101000a90046001600160a01b03166001600160a01b031663ea58cb236040518163ffffffff1660e01b815260040160006040518083038186803b158015610bed57600080fd5b505afa158015610c01573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f19168201604052610c299190810190611267565b90506000805b8251811015610da557336001600160a01b0316838281518110610c6257634e487b7160e01b600052603260045260246000fd5b602002602001015160c001516001600160a01b0316148015610cc7575060075483516001600160a01b0390911690849083908110610cb057634e487b7160e01b600052603260045260246000fd5b602002602001015160e001516001600160a01b0316145b15610d935760075483516001600160a01b039091169063bcd22fff90859084908110610d0357634e487b7160e01b600052603260045260246000fd5b602090810291909101810151516040516001600160e01b031960e085901b16815281516004820152910151602482015260440160206040518083038186803b158015610d4e57600080fd5b505afa158015610d62573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610d8691906113c4565b610d9090836115c7565b91505b80610d9d816115df565b915050610c2f565b506005811015610e1f576040805162461bcd60e51b81526020600482015260248101919091527f596f75206e65656420746f206f776e206174206c65617374203520636f77732f60448201527f636869636b656e7320746f20636f6d706c65746520746869732071756573742e606482015260840161077a565b60005460405163166250b760e01b8152336004820152600160248201526001600160a01b039091169063166250b790604401600060405180830381600087803b158015610e6b57600080fd5b505af1158015610e7f573d6000803e3d6000fd5b5050600054604051637ea0614360e11b8152336004820152600160248201526001600160a01b03909116925063fd40c2869150604401600060405180830381600087803b158015610ecf57600080fd5b505af1158015610ee3573d6000803e3d6000fd5b505050505050565b60606040518060800160405280606081526020016117836060913992915050565b600080600260009054906101000a90046001600160a01b03166001600160a01b031663ae73ccec6040518163ffffffff1660e01b815260040160006040518083038186803b158015610f5d57600080fd5b505afa158015610f71573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f19168201604052610f99919081019061117a565b905060005b815181101561100c57336001600160a01b0316828281518110610fd157634e487b7160e01b600052603260045260246000fd5b6020026020010151606001516001600160a01b03161415610ffa5782610ff6816115df565b9350505b80611004816115df565b915050610f9e565b506005821015610e1f5760405162461bcd60e51b815260206004820152604160248201527f596f75206e65656420746f206c697374206174206c656173742035206669736860448201527f20666f722073616c6520746f20636f6d706c65746520746869732071756573746064820152601760f91b608482015260a40161077a565b80516001600160a01b03811681146110a557600080fd5b919050565b600082601f8301126110ba578081fd5b6110c2611502565b8083856040860111156110d3578384fd5b835b60028110156110f45781518452602093840193909101906001016110d5565b509095945050505050565b8051600581106110a557600080fd5b8051600381106110a557600080fd5b8051600c81106110a557600080fd5b60006040828403121561113d578081fd5b6040516040810181811067ffffffffffffffff8211171561116057611160611610565b604052825181526020928301519281019290925250919050565b6000602080838503121561118c578182fd5b825167ffffffffffffffff8111156111a2578283fd5b8301601f810185136111b2578283fd5b80516111c56111c0826115a3565b611572565b8181528381019083850160a0808502860187018a10156111e3578788fd5b8795505b848610156112595780828b0312156111fd578788fd5b61120561152b565b82518152878301518882015260408084015190820152606061122881850161108e565b90820152608083810151801515811461123f578a8bfd5b9082015284526001959095019492860192908101906111e7565b509098975050505050505050565b60006020808385031215611279578182fd5b825167ffffffffffffffff81111561128f578283fd5b8301601f8101851361129f578283fd5b80516112ad6111c0826115a3565b81815283810190838501610160808502860187018a10156112cc578788fd5b8795505b848610156112595780828b0312156112e6578788fd5b6112ee61154e565b6112f88b8461112c565b815260406113088c8286016110aa565b898301526080808501518284015260a0915061132582860161111d565b606084015260c061133781870161110e565b8285015260e0915061134a8287016110ff565b83850152610100925061135e83870161108e565b9084015261136f610120860161108e565b908301526101408401519082015284526001959095019492860192908101906112d0565b6000604082840312156113a4578081fd5b6113ac611502565b82358152602083013560208201528091505092915050565b6000602082840312156113d5578081fd5b5051919050565b60008151808452815b81811015611401576020818501810151868301820152016113e5565b818111156114125782602083870101525b50601f01601f19169290920160200192915050565b602080825282518282018190526000919060409081850190600581811b87018401888601875b848110156114d957898303603f1901865281518051888552611471898601826113dc565b918a0151858303868c01528051808452908b019291508a82019080881b83018c018d5b828110156114c257601f198583030184526114b08287516113dc565b958e0195938e01939150600101611494565b50998c01999650505092890192505060010161144d565b50909998505050505050505050565b6020815260006114fb60208301846113dc565b9392505050565b6040805190810167ffffffffffffffff8111828210171561152557611525611610565b60405290565b60405160a0810167ffffffffffffffff8111828210171561152557611525611610565b604051610120810167ffffffffffffffff8111828210171561152557611525611610565b604051601f8201601f1916810167ffffffffffffffff8111828210171561159b5761159b611610565b604052919050565b600067ffffffffffffffff8211156115bd576115bd611610565b5060051b60200190565b600082198211156115da576115da6115fa565b500190565b60006000198214156115f3576115f36115fa565b5060010190565b634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052604160045260246000fdfe4c6576656c2031205175657374733a2046696e69736820616e79206f6e65206f6620746865736520746f20676574206120626f6174202d206120626f617420616c6c6f777320796f7520746f2074726176657273652077617465722f736e6f772074696c65732e68747470733a2f2f676973742e67697468756275736572636f6e74656e742e636f6d2f6e616c696e626861726477616a2f65363361343138336539616235626338373566346466363636343336366636662f7261772f613036366564653964656166663132363339356461353839343739353136653063613862333337352f54696e7951756573744d61737465722e6a736f6e4d696e6520617420612074696e79206d696e6520616e64206d696e652061746c6561737420352069726f6e2e2055736520746865206d696e696e674c6576656c3028292066756e6374696f6e20746f2076657269667920636f6d706c6574696f6e2e5468697320697320746865206f7665726c6f7264206f66207468697320776f726c642e20506c656173652068696d20746f206f627461696e206120626f617420616e6420636f64696e672072696768747320666f722074686520776f726c642e537461727420796f7572206f776e2074696e79206661726d20616e64206861727665737420352077686561742c203520636f726e206f7220352063616374757320746f6b656e732e2055736520746865206661726d696e674c6576656c3028292066756e6374696f6e20746f2076657269667920636f6d706c6574696f6e2e507574207570206174206c656173742035206669736820666f722073616c6520696e20612074696e792066697368206d61726b65742e20557365207468652066697368696e674c6576656c3128292066756e6374696f6e20746f2076657269667920636f6d706c6574696f6e2e537461727420796f7572206f776e2072616e63682c206f776e206174206c6561737420352067616c6c6f6e73206f66206d696c6b206f72206567677320616e64203520616e696d616c7320696e20796f75722072616e63682e2055736520746865206661726d696e674c6576656c3128292066756e6374696f6e20746f2076657269667920636f6d706c6574696f6e2e4c6576656c2030205175657374733a2046696e69736820616e79206f6e65206f6620746865736520746f206765742066756c6c2061636365737320746f2062652061626c6520746f20706c61636520796f7572206f776e20636f646520696e207468697320776f726c642e4669736820617420612074696e792066697368696e67207374616e6420616e64206f627461696e206174206c65617374203320646966666572656e7420666973682e20557365207468652066697368696e674c6576656c3028292066756e6374696f6e20746f2076657269667920636f6d706c6574696f6e2ea264697066735822122083941609fd41a1b7aade3c5288a21804e66afeed18d4911398898158ee3b100964736f6c63430008040033";
