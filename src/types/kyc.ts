import { Address, Chain } from "viem";

export interface KycProps {
  isConnected: boolean;
  repoName: string;
  repoOwner: string;
  clientId: string;
  chainId?: number;
  version?: string;
  onError: (message: string) => void;
}
export interface PassportScore {
  address: string;
  score: string;
  status: string;
  last_score_timestamp: string;
  evidence: any;
  error: string;
}

export interface ValidatePassportScoreProps {
  chain?: Chain;
  address?: Address;
  onScoreChange: (score: number) => void;
}
