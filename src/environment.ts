import dotenv from "dotenv";
import { cleanEnv, str, num } from "envalid";

process.env.NODE_ENV = process.env.NODE_ENV || "development";

dotenv.config();

export type Environment = {
  PORT: number;
  NETWORK: string;
};

export const environment = cleanEnv(process.env, {
  NETWORK: str({
    choices: ["harmony", "mumbai", "polygon", "fuji", "development"],
  }),
  PORT: num({ default: 8000 }),
});
