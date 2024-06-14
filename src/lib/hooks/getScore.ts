import { abi } from "@/blockchain/abi";
import { env } from "@/env";
import { ValidatePassportScoreProps } from "@/types/kyc";
import { useEffect, useState } from "react";
import { getAddress } from "viem";
import { useReadContract } from "wagmi";
import { useLoading } from "../providers/loading.provider.client";

export default function useGetScore({
  address,
  chain,
}: ValidatePassportScoreProps) {
  const [score, setScore] = useState<string>("0");
  const { setLoading } = useLoading();
  const { data, error } = useReadContract({
    address: getAddress(env.NEXT_PUBLIC_DECODER_CONTRACT_ADDRESS),
    chainId: chain?.id,
    abi: abi,
    functionName: "getScore",
    args: address && [address],
    query: { retry: false },
  });
  useEffect(() => {
    setLoading(true);
    if (data) {
      setScore(data.toString());
      setLoading(false);
    }
    if (error) {
      setLoading(false);
      setScore("0");
    }
  }, [data, error, setLoading]);

  return { score };
}
