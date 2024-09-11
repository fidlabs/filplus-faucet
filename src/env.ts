import { createEnv } from "@t3-oss/env-nextjs";
import { zeroAddress } from "viem";
import { z } from "zod";

export const env = createEnv({
  client: {
    NEXT_PUBLIC_CHAIN_ID: z.number().int().default(10),
    NEXT_PUBLIC_DAYS_TO_EXPIRE: z.number().int().positive().default(1),
    NEXT_PUBLIC_BACKEND_API_URL: z
      .string()
      .url()
      .default("https://api.allocator.tech"),
    NEXT_PUBLIC_DECODER_CONTRACT_ADDRESS: z.string().default(zeroAddress),
    NEXT_PUBLIC_RPC_URL: z
      .string()
      .url()
      .default("https://mainnet.optimism.io"),
    NEXT_PUBLIC_EXPLORER_URL: z
      .string()
      .url()
      .default("https://optimistic.etherscan.io"),
    NEXT_PUBLIC_CHAIN_NAME: z.string().default("optimism"),
    NEXT_PUBLIC_NATIVE_CURRENCY: z.string().default("ETH"),
    NEXT_PUBLIC_SYMBOL: z.string().default("ETH"),
    NEXT_PUBLIC_DECIMALS: z.number().int().default(18),
    NEXT_PUBLIC_SCORE_THRESHOLD: z.number().multipleOf(0.001).default(30),
    NEXT_PUBLIC_WALLET_CONNECT_ID: z.string().default("1234567890"),
    NEXT_PUBLIC_LAST_ALLOCATION_EXP_DAYS: z.number().default(14),
  },

  runtimeEnv: {
    NEXT_PUBLIC_CHAIN_ID: process.env.NEXT_PUBLIC_CHAIN_ID
      ? parseInt(process.env.NEXT_PUBLIC_CHAIN_ID)
      : undefined,
    NEXT_PUBLIC_DAYS_TO_EXPIRE: process.env.NEXT_PUBLIC_DAYS_TO_EXPIRE
      ? parseInt(process.env.NEXT_PUBLIC_DAYS_TO_EXPIRE)
      : undefined,
    NEXT_PUBLIC_BACKEND_API_URL:
      process.env.NEXT_PUBLIC_BACKEND_API_URL || undefined,
    NEXT_PUBLIC_DECODER_CONTRACT_ADDRESS:
      process.env.NEXT_PUBLIC_DECODER_CONTRACT_ADDRESS || undefined,
    NEXT_PUBLIC_RPC_URL: process.env.NEXT_PUBLIC_RPC_URL || undefined,
    NEXT_PUBLIC_EXPLORER_URL: process.env.NEXT_PUBLIC_EXPLORER_URL || undefined,
    NEXT_PUBLIC_CHAIN_NAME: process.env.NEXT_PUBLIC_CHAIN_NAME || undefined,
    NEXT_PUBLIC_NATIVE_CURRENCY:
      process.env.NEXT_PUBLIC_NATIVE_CURRENCY || undefined,
    NEXT_PUBLIC_SYMBOL: process.env.NEXT_PUBLIC_SYMBOL || undefined,
    NEXT_PUBLIC_DECIMALS: process.env.NEXT_PUBLIC_DECIMALS
      ? parseInt(process.env.NEXT_PUBLIC_DECIMALS)
      : undefined,
    NEXT_PUBLIC_SCORE_THRESHOLD: process.env.NEXT_PUBLIC_SCORE_THRESHOLD
      ? parseFloat(process.env.NEXT_PUBLIC_SCORE_THRESHOLD)
      : undefined,
    NEXT_PUBLIC_WALLET_CONNECT_ID:
      process.env.NEXT_PUBLIC_WALLET_CONNECT_ID || undefined,
    NEXT_PUBLIC_LAST_ALLOCATION_EXP_DAYS: process.env
      .NEXT_PUBLIC_LAST_ALLOCATION_EXP_DAYS
      ? parseInt(process.env.NEXT_PUBLIC_LAST_ALLOCATION_EXP_DAYS)
      : undefined,
  },
});
