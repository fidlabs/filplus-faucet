import { env } from "@/env";
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { zeroAddress } from "viem";

const MESSAGE_TEXT =
  "Connect your Fil+ application with your wallet and give access to your Gitcoin passport";

const DOMAIN_NAME = "Fil+ KYC";
export const PRIMARY_TYPE = "KycApproval";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function createMessage(clientId: string) {
  const issuedAt = new Date();
  const daysToExpire = env.NEXT_PUBLIC_DAYS_TO_EXPIRE;
  const expiresAt = new Date(
    issuedAt.getTime() + daysToExpire * 24 * 60 * 60 * 1000
  );

  return {
    message: MESSAGE_TEXT,
    client_id: clientId,
    issued_at: issuedAt.toISOString(),
    expires_at: expiresAt.toISOString(),
    allocator_repo_name: "",
    allocator_repo_owner: "",
  };
}

export function createDomain(chainId?: number, version?: string) {
  return {
    name: DOMAIN_NAME,
    chainId: chainId || env.NEXT_PUBLIC_CHAIN_ID,
    verifyingContract: zeroAddress,
    version: version || "1",
  };
}

export function createFilecoinTypes() {
  return {
    KycApproval: [
      { name: "message", type: "string" },
      { name: "client_id", type: "string" },
      { name: "allocator_repo_name", type: "string" },
      { name: "allocator_repo_owner", type: "string" },
      { name: "issued_at", type: "string" },
      { name: "expires_at", type: "string" },
    ],
  };
}
