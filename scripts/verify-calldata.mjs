import { encodeFunctionData } from "viem";

const abi = [
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
];

const suffix = "62635f6b36686f65756b700b0080218021802180218021802180218021";
const withSuffix = (data) => `${data}${suffix}`;

const tap = encodeFunctionData({ abi, functionName: "tap", args: [3n] });
const checkIn = encodeFunctionData({ abi, functionName: "checkIn" });

console.log("Contract: 0x9ABF08d1C298Ada4FC0E8FEB1a71b2FbFBf10fd9");
console.log("Builder code: bc_k6hoeukp");
console.log("");
console.log("tap(3):", withSuffix(tap));
console.log("checkIn():", withSuffix(checkIn));
console.log("");
console.log("On Basescan Input Data should end with:", suffix);
