/** Deployed on Base Mainnet — https://basescan.org/address/0x9ABF08d1C298Ada4FC0E8FEB1a71b2FbFBf10fd9 */
export const GRUZGAME04_CONTRACT_ADDRESS =
  "0x9ABF08d1C298Ada4FC0E8FEB1a71b2FbFBf10fd9" as const;

export const GRUZGAME04_CHECKIN_PRICE_ETH = "0.00001";
export const GRUZGAME04_BUILDER_CODE = "bc_k6hoeukp";
export const GRUZGAME04_BUILDER_CODE_DATA_SUFFIX =
  "0x62635f6b36686f65756b700b0080218021802180218021802180218021" as const;

export const gruzGame04OnchainAbi = [
  {
    inputs: [{ internalType: "uint256", name: "tapsCount", type: "uint256" }],
    name: "tap",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "checkIn",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
] as const;

export function withGruzGame04BuilderCodeDataSuffix(data: `0x${string}`): `0x${string}` {
  return `${data}${GRUZGAME04_BUILDER_CODE_DATA_SUFFIX.slice(2)}` as `0x${string}`;
}

export function getGruzGame04ContractAddress(): `0x${string}` {
  return GRUZGAME04_CONTRACT_ADDRESS;
}
