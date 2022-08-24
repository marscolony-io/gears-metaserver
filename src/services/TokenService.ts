import { gears } from "../blockchain/contracts";
import { CONTRACTS } from "../blockchain/contracts-addresses";
import { Attribute } from "../types";
import { categories, gearsData, rarities } from "./constants";

type TokenData = {
  type: string;
  description: string;
  rarity: string;
  durability: number;
  category: string;
  locked: boolean;
  lastUpdated: Date;
} | null;

type Gear = [
  rarity: number,
  gearType: number,
  category: number,
  durability: number,
  locked: boolean,
  set: boolean
];

export let tokensMap: Map<number, TokenData> = new Map();

const makeTokenData = (gear: Gear): TokenData => {
  const tokenData: TokenData = {
    type: gearsData[+gear[1]].type,
    description: gearsData[+gear[1]].description,
    rarity: rarities[+gear[0]],
    category: categories[+gear[2]],
    durability: +gear[3],
    locked: gear[4],
    lastUpdated: new Date(),
  };

  console.log({ tokenData });
  return tokenData;
};

export const updateLoop = async () => {
  console.log("loop");
  const BUNCH_SIZE = 500;
  while (true) {
    const tempTokensMap: Map<number, TokenData> = new Map();
    await new Promise((rs) => setTimeout(rs, 5000));
    const tokensCount = parseInt(await gears.methods.totalSupply().call());
    console.log("tokensCount", tokensCount);
    let i = 0;
    while (i <= tokensCount) {
      await new Promise((rs) => setTimeout(rs, 2000));

      try {
        const data = await gears.methods
          .allTokensPaginate(i, i + BUNCH_SIZE)
          .call();

        data["0"].forEach((tokenId: string, index: number) => {
          tempTokensMap.set(+tokenId, makeTokenData(data["1"][index]));
        });

        i = i + BUNCH_SIZE;
      } catch (error: any) {
        console.log("data", error.message);
      }
    }
    tokensMap = tempTokensMap;
  }
};

export const attribute = (
  trait_type: string,
  value: string | number | boolean
): Attribute => {
  return {
    trait_type,
    value,
  };
};

export const getData = async (
  tokenId: number
): Promise<Record<any, any> | null> => {
  if (!tokensMap.has(tokenId)) {
    try {
      const gear = await gears.methods.gears(tokenId).call();
      console.log({ gear });
      if (!gear.set) return null;
      console.log("WITHOUT CACHE", gear);
      tokensMap.set(+tokenId, makeTokenData(gear));
    } catch (error: any) {
      console.log(error.message);
      return null;
    }
  }

  const tokenAttrs = tokensMap.get(tokenId)!;

  const data: Attribute[] = [
    attribute("Data updated", tokenAttrs.lastUpdated.toUTCString()),
    attribute("Rarity", tokenAttrs.rarity),
    attribute("Type", tokenAttrs.type),
    attribute("Category", tokenAttrs.category),
    attribute("Durability", tokenAttrs.durability),
    attribute("Locked", tokenAttrs.locked),
  ];
  return {
    name: `Marscolony.io gear #${tokenId}`,
    description: tokenAttrs.description,
    image: `${CONTRACTS.meta}${tokenId}.png`,
    ...data,
  };
};
