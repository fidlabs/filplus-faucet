import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
  client: {
    NEXT_PUBLIC_CHAIN_ID: z.number().int().default(314),
    NEXT_PUBLIC_DAYS_TO_EXPIRE: z.number().int().positive().default(1),
    NEXT_PUBLIC_BACKEND_API_URL: z.string().url().default("https://api.allocator.tech")
  },

  runtimeEnv: {
    NEXT_PUBLIC_CHAIN_ID: process.env.NEXT_PUBLIC_CHAIN_ID,
    NEXT_PUBLIC_DAYS_TO_EXPIRE: process.env.NEXT_PUBLIC_DAYS_TO_EXPIRE,
    NEXT_PUBLIC_BACKEND_API_URL: process.env.NEXT_PUBLIC_BACKEND_API_URL
  }
});
