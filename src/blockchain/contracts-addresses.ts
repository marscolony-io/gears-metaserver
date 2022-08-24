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
    GEARS: "",
    meta: "https://meta-fuji.marscolony.io/",
  },
  development: {
    GEARS: "0x6dA84E178b4D726ac69967157b8b0A0Af97e1FC3",
    meta: "https://dev.marscolony.io/",
  },
};

export const CONTRACTS = NETWORK_DATA[environment.NETWORK];
