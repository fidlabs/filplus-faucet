import { abi } from "@/blockchain/abi";
import { env } from "@/env";
import { ValidatePassportScoreProps } from "@/types/kyc";
import { useEffect, useState } from "react";
import { getAddress } from "viem";
import { useReadContract } from "wagmi";

export default function useGetScore({ address, chain }: ValidatePassportScoreProps) {
  const [score, setScore] = useState<string>("0");
  const { data, error } = useReadContract({
    address: getAddress(env.NEXT_PUBLIC_DECODER_CONTRACT_ADDRESS),
    chainId: chain?.id,
    abi: abi,
    functionName: "getScore",
    args: address && [address]
  });

  useEffect(() => {
    if (data) {
      setScore(data.toString());
    }
  }, [data]);

  if (error) return { score: "0" };

  return { score };
}
