import { environment } from "../environment";
const NETWORK_DATA: Record<
  string,
  {
    GEARS: string;
    meta: string;
  }
> = {
  harmony: {
    GEARS: "",
    meta: "https://meta.marscolony.io/",
  },
  polygon: {
    GEARS: "",
    meta: "https://meta-polygon.marscolony.io/",
  },
  mumbai: {
    GEARS: "",
    meta: "https://meta-mumbai.marscolony.io/",
  },
  fuji: {
    GEARS: "0x54d4bf6035D6fD5C1f06A01A382C2Fe91CA6dA80",
    meta: "https://meta-fuji.marscolony.io/",
  },
  development: {
    GEARS: "0xA402d858154A99d86aADF5dFD749B33Be5d7d3a4",
    meta: "https://dev.marscolony.io/",
  },
};

export const CONTRACTS = NETWORK_DATA[environment.NETWORK];
