/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { Verifier } from "./Verifier";

export class VerifierFactory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(overrides?: Overrides): Promise<Verifier> {
    return super.deploy(overrides || {}) as Promise<Verifier>;
  }
  getDeployTransaction(overrides?: Overrides): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): Verifier {
    return super.attach(address) as Verifier;
  }
  connect(signer: Signer): VerifierFactory {
    return super.connect(signer) as VerifierFactory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Verifier {
    return new Contract(address, _abi, signerOrProvider) as Verifier;
  }
}

const _abi = [
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
        internalType: "uint256[8]",
        name: "input",
        type: "uint256[8]",
      },
    ],
    name: "verifyMainProof",
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
];

const _bytecode =
  "0x6116e561003a600b82828239805160001a60731461002d57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600436106100355760003560e01c8063c26de6cb1461003a575b600080fd5b61004d6100483660046114bd565b610061565b604051901515815260200160405180910390f35b6040805160088082526101208201909252600091829190602082016101008036833701905050905060005b60088110156100f7578381600881106100b557634e487b7160e01b600052603260045260246000fd5b60200201518282815181106100da57634e487b7160e01b600052603260045260246000fd5b6020908102919091010152806100ef8161165e565b91505061008c565b5061010c86868684610107610116565b610871565b9695505050505050565b61011e61132e565b6040805180820182527f2b6d4650a4a9984dd255a254717ce985d4a2625229fa63ba1268f0c8f97af9eb81527f22f3991d50b793a3660fa6ad8ce156ac3eb478b77e8b0b74ffdf4be654c5610d6020808301919091529083528151608080820184527f0e27d2438600b41133385b48fc242556e81b44ab4d0ee9a3376da7315876c2ba8285019081527f074f8374c9ddae90032fb99308af80e087027dac3ec8f203bd7ee80d8b54bb44606080850191909152908352845180860186527f218374fdb8b41d2b36cdf8b50c9a925631381f50fa6b9ad5d281a172ad21293181527f0b04b6269c1b07424f6a6985dfab0cefd704a35cae92e15048f533f4c5da412b818601528385015285840192909252835180820185527f198e9393920d483a7260bfb731fb5d25f1aa493335a9e71297e485b7aef312c28186019081527f1800deef121f1e76426a00665e5c4479674322d4f75edadd46debd5cd992f6ed828501528152845180860186527f090689d0585ff075ec9e99ad690c3395bc4b313370b38ef355acdadcd122975b81527f12c85ea5db8c6deb4aab71808dcb408fe3d1e7690c43d37b4ce6cc0166fa7daa818601528185015285850152835190810184527f2ecfc70875cc3e16e661354a0c7b8d2016d1f4093cb6b30ef164c5d10f91ebfd8185019081527f052757557db49bfeda9f535bc3ef8e5a51fd2fbcb97bef2fd74abcd4d3f94dcd828401528152835180850185527f043f4bb541e209469fdd87ced06abb9a842aabeb5162cdb47368d5e188afe82c81527f02206ab59a572fd82aa7c2ce27818d40c1bf15e65907386f6946934487eaf0e6818501528184015290840152815160098082526101408201909352919082015b604080518082019091526000808252602082015281526020019060019003908161039a57505060808201908152604080518082019091527f0a631d1cbfb8147fb2afb83e1321a381ac2b86aaf8aba79e344ac172671abe8481527f28dc6dfcfc23e9136df3814e93abae8acdd65a6b7c915370ea86ca9241628ce260208201529051805160009061043b57634e487b7160e01b600052603260045260246000fd5b602002602001018190525060405180604001604052807f16b442406e28e12dbcafb503f0e37e76886260737b02a35150c4ae078909850181526020017f2d267bcc9147e0aa07b7f1387f93ec216b9ea5c97d124168ead3379caca8379f81525081608001516001815181106104c057634e487b7160e01b600052603260045260246000fd5b602002602001018190525060405180604001604052807f1d4be82dd809fa2cc981938d807e9a0ad8a03c7c7b20d8a62ec4f9911d73fd3681526020017f2d6e3c349ca072aaf35f784f665893da630382df3265d01710856f71d7e53816815250816080015160028151811061054557634e487b7160e01b600052603260045260246000fd5b602002602001018190525060405180604001604052807f221121c97fb01abbf241a96b113947f7d2116edefd3cea5a2f02f6b8693be6f181526020017f1d22f48ac275e20405d030790a9ff6f88cd0d6f26971376a0accdf8e15c8eb1c81525081608001516003815181106105ca57634e487b7160e01b600052603260045260246000fd5b602002602001018190525060405180604001604052807f1829272455c07d2b80f5402b54d0186e55a76f70fc3d7c46dd2e82fb7022763481526020017f0945b17797435d22f880bbfecf23a29ff23f843b3cfd4f9091e5ffa99b9ef9c7815250816080015160048151811061064f57634e487b7160e01b600052603260045260246000fd5b602002602001018190525060405180604001604052807f240456a6021d0a17d63d4bd8583af8aea7c6227409e28ad2a2f36e60cfbeb02581526020017f237d68ae456f9e9f5690a411ddeb5243a93561142419cbb037152706a6491d4581525081608001516005815181106106d457634e487b7160e01b600052603260045260246000fd5b602002602001018190525060405180604001604052807f1debc0fd7c6e155c81b5a668c25b6303e616984bcd8c11fdfea761282d202ff581526020017f2e21dde1f0dcf5eadebd86bd84da896cf908043bd8b5321d8a11d2c280ec4b34815250816080015160068151811061075957634e487b7160e01b600052603260045260246000fd5b602002602001018190525060405180604001604052807f2f37c1816065e92636f06f052ecd1b48b1a7bd3bf0b5cc931b36a015c572eb5681526020017f2fc0529e7b3f286ec19fbfd8e56e469c6a1e85109fe212de0f5dd2ee1eebf00681525081608001516007815181106107de57634e487b7160e01b600052603260045260246000fd5b602002602001018190525060405180604001604052807f11f2b3aa6cf4a839f203b71ac22b899cc204d43bc60c387662b2a4914703d79781526020017f186f4080fb99cd8225e1e359892e5e89bfe569cc9fab9080150b2c5eb109e776815250816080015160088151811061086357634e487b7160e01b600052603260045260246000fd5b602002602001018190525090565b600061087b61137f565b604080518082018252885181526020808a01518183015290835281516080810183528851518184019081528951830151606083015281528251808401845289830180515182525183015181840152818301528382015281518083018352875181528782015191810191909152908201526108f6848285610913565b61090457600191505061090a565b60009150505b95945050505050565b60808101515183516000917f30644e72e131a029b85045b68181585d2833e84879b9709143e1f593f00000019161094b906001611610565b146109925760405162461bcd60e51b81526020600482015260126024820152711d995c9a599a595c8b5898590b5a5b9c1d5d60721b60448201526064015b60405180910390fd5b604080518082019091526000808252602082018190525b8651811015610aad57828782815181106109d357634e487b7160e01b600052603260045260246000fd5b602002602001015110610a285760405162461bcd60e51b815260206004820152601f60248201527f76657269666965722d6774652d736e61726b2d7363616c61722d6669656c64006044820152606401610989565b610a9982610a948760800151846001610a419190611610565b81518110610a5f57634e487b7160e01b600052603260045260246000fd5b60200260200101518a8581518110610a8757634e487b7160e01b600052603260045260246000fd5b6020026020010151610b37565b610bd3565b915080610aa58161165e565b9150506109a9565b50610ae4818560800151600081518110610ad757634e487b7160e01b600052603260045260246000fd5b6020026020010151610bd3565b9050610b1a610af68660000151610c6b565b8660200151866000015187602001518589604001518b604001518b60600151610d0a565b610b2957600192505050610b30565b6000925050505b9392505050565b6040805180820190915260008082526020820152610b536113d0565b835181526020808501519082015260408101839052600060608360808460076107d05a03fa9050808015610b8657610b88565bfe5b5080610bcb5760405162461bcd60e51b81526020600482015260126024820152711c185a5c9a5b99cb5b5d5b0b59985a5b195960721b6044820152606401610989565b505092915050565b6040805180820190915260008082526020820152610bef6113ee565b8351815260208085015181830152835160408301528301516060808301919091526000908360c08460066107d05a03fa9050808015610b86575080610bcb5760405162461bcd60e51b81526020600482015260126024820152711c185a5c9a5b99cb5859190b59985a5b195960721b6044820152606401610989565b604080518082019091526000808252602082015281517f30644e72e131a029b85045b68181585d97816a916871ca8d3c208c16d87cfd4790158015610cb257506020830151155b15610cd25750506040805180820190915260008082526020820152919050565b604051806040016040528084600001518152602001828560200151610cf79190611679565b610d019084611647565b90529392505050565b60408051600480825260a08201909252600091829190816020015b6040805180820190915260008082526020820152815260200190600190039081610d2557505060408051600480825260a0820190925291925060009190602082015b610d6f61140c565b815260200190600190039081610d675790505090508a82600081518110610da657634e487b7160e01b600052603260045260246000fd5b60200260200101819052508882600181518110610dd357634e487b7160e01b600052603260045260246000fd5b60200260200101819052508682600281518110610e0057634e487b7160e01b600052603260045260246000fd5b60200260200101819052508482600381518110610e2d57634e487b7160e01b600052603260045260246000fd5b60200260200101819052508981600081518110610e5a57634e487b7160e01b600052603260045260246000fd5b60200260200101819052508781600181518110610e8757634e487b7160e01b600052603260045260246000fd5b60200260200101819052508581600281518110610eb457634e487b7160e01b600052603260045260246000fd5b60200260200101819052508381600381518110610ee157634e487b7160e01b600052603260045260246000fd5b6020026020010181905250610ef68282610f05565b9b9a5050505050505050505050565b60008151835114610f515760405162461bcd60e51b81526020600482015260166024820152751c185a5c9a5b99cb5b195b99dd1a1ccb59985a5b195960521b6044820152606401610989565b82516000610f60826006611628565b905060008167ffffffffffffffff811115610f8b57634e487b7160e01b600052604160045260246000fd5b604051908082528060200260200182016040528015610fb4578160200160208202803683370190505b50905060005b838110156112b357868181518110610fe257634e487b7160e01b600052603260045260246000fd5b60200260200101516000015182826006610ffc9190611628565b611007906000611610565b8151811061102557634e487b7160e01b600052603260045260246000fd5b60200260200101818152505086818151811061105157634e487b7160e01b600052603260045260246000fd5b6020026020010151602001518282600661106b9190611628565b611076906001611610565b8151811061109457634e487b7160e01b600052603260045260246000fd5b6020026020010181815250508581815181106110c057634e487b7160e01b600052603260045260246000fd5b60209081029190910101515151826110d9836006611628565b6110e4906002611610565b8151811061110257634e487b7160e01b600052603260045260246000fd5b60200260200101818152505085818151811061112e57634e487b7160e01b600052603260045260246000fd5b60209081029190910181015151015182611149836006611628565b611154906003611610565b8151811061117257634e487b7160e01b600052603260045260246000fd5b60200260200101818152505085818151811061119e57634e487b7160e01b600052603260045260246000fd5b6020026020010151602001516000600281106111ca57634e487b7160e01b600052603260045260246000fd5b6020020151826111db836006611628565b6111e6906004611610565b8151811061120457634e487b7160e01b600052603260045260246000fd5b60200260200101818152505085818151811061123057634e487b7160e01b600052603260045260246000fd5b60200260200101516020015160016002811061125c57634e487b7160e01b600052603260045260246000fd5b60200201518261126d836006611628565b611278906005611610565b8151811061129657634e487b7160e01b600052603260045260246000fd5b6020908102919091010152806112ab8161165e565b915050610fba565b506112bc61142c565b6000602082602086026020860160086107d05a03fa9050808015610b865750806113205760405162461bcd60e51b81526020600482015260156024820152741c185a5c9a5b99cb5bdc18dbd9194b59985a5b1959605a1b6044820152606401610989565b505115159695505050505050565b6040805160e08101909152600060a0820181815260c083019190915281526020810161135861140c565b815260200161136561140c565b815260200161137261140c565b8152602001606081525090565b6040805160a0810190915260006060820181815260808301919091528152602081016113a961140c565b81526020016113cb604051806040016040528060008152602001600081525090565b905290565b60405180606001604052806003906020820280368337509192915050565b60405180608001604052806004906020820280368337509192915050565b604051806040016040528061141f61144a565b81526020016113cb61144a565b60405180602001604052806001906020820280368337509192915050565b60405180604001604052806002906020820280368337509192915050565b600082601f830112611478578081fd5b6114806115a7565b808385604086011115611491578384fd5b835b60028110156114b2578135845260209384019390910190600101611493565b509095945050505050565b6000806000806102008086880312156114d4578485fd5b6114de8787611468565b9450604087605f8801126114f0578485fd5b6114f86115a7565b8082890160c08a018b81111561150c578889fd5b885b6002811015611535576115218d84611468565b85526020909401939185019160010161150e565b508298506115438c82611468565b975050505050508661011f870112611559578182fd5b6115616115de565b80610100880189848a011115611575578485fd5b8493505b600884101561159957803583526001939093019260209283019201611579565b509598949750929550505050565b6040805190810167ffffffffffffffff811182821017156115d857634e487b7160e01b600052604160045260246000fd5b60405290565b604051610100810167ffffffffffffffff811182821017156115d857634e487b7160e01b600052604160045260246000fd5b6000821982111561162357611623611699565b500190565b600081600019048311821515161561164257611642611699565b500290565b60008282101561165957611659611699565b500390565b600060001982141561167257611672611699565b5060010190565b60008261169457634e487b7160e01b81526012600452602481fd5b500690565b634e487b7160e01b600052601160045260246000fdfea2646970667358221220fbffbb6f86df69f809cc92269fdbdae88c2866b1e3a697d06d8f9a46208c195564736f6c63430008040033";
