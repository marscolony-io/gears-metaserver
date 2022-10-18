import { environment } from "../environment";
const NETWORK_DATA: Record<
  string,
  {
    GEARS: string;
    meta: string;
  }
> = {
  harmony: {
    GEARS: "0xc909dbAFf39b0DfD35F398459335aD98B7A0f3AE",
    meta: "https://gears-harmony.marscolony.io/",
  },
  polygon: {
    GEARS: "0x1a33FAC010248AFcA0741f5c10acaBA0e3CA6814",
    meta: "https://gears-polygon.marscolony.io/",
  },
  mumbai: {
    GEARS: "0xBa83d3db8124689c3498A5C578f892A6058556Fb",
    meta: "https://gears-mumbai.marscolony.io/",
  },
  fuji: {
    GEARS: "0x98Ef6554fA8f009b3330488B10649dEf50a5690a",
    meta: "https://gears-fuji.marscolony.io/",
  },
  development: {
    GEARS: "0xA402d858154A99d86aADF5dFD749B33Be5d7d3a4",
    meta: "https://dev.marscolony.io/",
  },
};

export const CONTRACTS = NETWORK_DATA[environment.NETWORK];
