import { createEnv } from "@t3-oss/env-nextjs";
import { Address, zeroAddress } from "viem";
import { z } from "zod";

export const env = createEnv({
  client: {
    NEXT_PUBLIC_CHAIN_ID: z.number().int().default(314),
    NEXT_PUBLIC_VERIFYING_CONTRACT_ADDRESS: z
      .string()
      .regex(/^0x[a-fA-F0-9]{40}$/)
      .transform((v) => v as Address)
      .default(zeroAddress),
    NEXT_PUBLIC_DAYS_TO_EXPIRE: z.number().int().positive().default(1),
    NEXT_PUBLIC_BACKEND_API_URL: z.string().url().default("https://api.filplus.io/api/v1/kyc")
  },

  runtimeEnv: {
    NEXT_PUBLIC_CHAIN_ID: process.env.NEXT_PUBLIC_CHAIN_ID,
    NEXT_PUBLIC_VERIFYING_CONTRACT_ADDRESS: process.env.NEXT_PUBLIC_VERIFYING_CONTRACT_ADDRESS,
    NEXT_PUBLIC_DAYS_TO_EXPIRE: process.env.NEXT_PUBLIC_DAYS_TO_EXPIRE,
    NEXT_PUBLIC_BACKEND_API_URL: process.env.NEXT_PUBLIC_BACKEND_API_URL
  }
});
