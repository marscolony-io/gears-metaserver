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
    GEARS: "",
    meta: "https://gears-polygon.marscolony.io/",
  },
  mumbai: {
    GEARS: "",
    meta: "https://gears-mumbai.marscolony.io/",
  },
  fuji: {
    GEARS: "0x54d4bf6035D6fD5C1f06A01A382C2Fe91CA6dA80",
    meta: "https://gears-fuji.marscolony.io/",
  },
  development: {
    GEARS: "0xA402d858154A99d86aADF5dFD749B33Be5d7d3a4",
    meta: "https://dev.marscolony.io/",
  },
};

export const CONTRACTS = NETWORK_DATA[environment.NETWORK];
