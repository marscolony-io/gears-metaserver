import Web3 from "web3";
import { CONTRACTS } from "./contracts-addresses";
import GEARS from "../abi/Gears.json";
import { AbiItem } from "web3-utils";
import { ALCHEMY_KEY } from "../secrets";
import { environment } from "../environment";

const nodeMap = {
  harmony: [
    "https://harmony-0-rpc.gateway.pokt.network",
    "https://api.harmony.one",
    "https://api.fuzz.fi",
  ],
  mumbai: ["https://polygon-mumbai.g.alchemy.com/v2/" + ALCHEMY_KEY],
  polygon: [
    "https://polygon-rpc.com",
    "https://rpc-mainnet.matic.network",
    "https://matic-mainnet-archive-rpc.bwarelabs.com",
    "https://rpc.ankr.com/polygon",
  ],
  fuji: ["https://api.avax-test.network/ext/bc/C/rpc"],
  development: ["http://127.0.0.1:9545"],
};

const web3 = new Web3(nodeMap[environment.NETWORK][0]);

export const gears = new web3.eth.Contract(
  GEARS.abi as AbiItem[],
  CONTRACTS.GEARS
);
