import { Address, Chain, zeroAddress } from "viem";
import { Connector } from "wagmi";

export interface KycProps {
  account?: Address;
  isConnected: boolean;
  repoName: string;
  repoOwner: string;
  clientId: string;
  connector?: Connector;
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
