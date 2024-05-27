import { createEnv } from "@t3-oss/env-nextjs";
import { zeroAddress } from "viem";
import { z } from "zod";

export const env = createEnv({
  client: {
    NEXT_PUBLIC_CHAIN_ID: z.number().int().default(10),
    NEXT_PUBLIC_DAYS_TO_EXPIRE: z.number().int().positive().default(1),
    NEXT_PUBLIC_BACKEND_API_URL: z.string().url().default("https://api.allocator.tech"),
    NEXT_PUBLIC_SCORER_API_URL: z.string().url().default("https://api.scorer.gitcoin.co"),
    NEXT_PUBLIC_SCORER_API_KEY: z.string(),
    NEXT_PUBLIC_DECODER_CONTRACT_ADDRESS: z.string().default(zeroAddress)
  },

  runtimeEnv: {
    NEXT_PUBLIC_CHAIN_ID: process.env.NEXT_PUBLIC_CHAIN_ID || undefined,
    NEXT_PUBLIC_DAYS_TO_EXPIRE: process.env.NEXT_PUBLIC_DAYS_TO_EXPIRE || undefined,
    NEXT_PUBLIC_BACKEND_API_URL: process.env.NEXT_PUBLIC_BACKEND_API_URL || undefined,
    NEXT_PUBLIC_SCORER_API_URL: process.env.NEXT_PUBLIC_SCORER_API_URL || undefined,
    NEXT_PUBLIC_SCORER_API_KEY: process.env.NEXT_PUBLIC_SCORER_API_KEY || undefined,
    NEXT_PUBLIC_DECODER_CONTRACT_ADDRESS: process.env.NEXT_PUBLIC_DECODER_CONTRACT_ADDRESS || undefined
  }
});
