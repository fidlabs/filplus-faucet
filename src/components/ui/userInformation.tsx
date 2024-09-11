"use client";

import { useWagmiConfig } from "@/app/wagmiConfig";
import { env } from "@/env";
import { useLoading } from "@/lib/providers/loading.provider.client";
import { ValidatePassportScore } from "filplus-validate-score";
import { FC } from "react";
import { Address } from "viem";

const UserInformation: FC<{
  walletAddress: Address;
  setScore: (score: number) => void;
  score?: number;
  isValidAllocation: boolean | null;
  lastAllocationTimestamp: number | null;
}> = ({
  walletAddress,
  setScore,
  lastAllocationTimestamp,
  isValidAllocation,
}) => {
  const { setLoading } = useLoading();
  const wagmiConfig = useWagmiConfig();

  const allocationExpireDate =
    lastAllocationTimestamp && new Date(lastAllocationTimestamp * 1000);

  return (
    <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col items-center">
      <p className="block text-gray-700 font-bold mb-2 text-lg text-center ">
        User Information:
      </p>
      <div className="mb-2">
        <ValidatePassportScore
          walletAddress={walletAddress}
          onScoreChange={setScore}
          decoderContractAddress={
            env.NEXT_PUBLIC_DECODER_CONTRACT_ADDRESS as Address
          }
          scoreDivider={BigInt(10_000)}
          wagmiConfig={wagmiConfig}
          onLoading={setLoading}
        />
      </div>
      {
        <div>
          The last allocation expires:{" "}
          <span className="text-red-600">
            {allocationExpireDate
              ? allocationExpireDate.toLocaleDateString("en-GB")
              : "not exist"}{" "}
            ({isValidAllocation ? "Valid" : "Invalid"})
          </span>
        </div>
      }
    </div>
  );
};

export default UserInformation;
