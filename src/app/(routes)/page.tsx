"use client";

import { Modal } from "@/components/modals/modal";
import { Card } from "@/components/ui/card";
import CheckingWallet from "@/components/ui/checkingWallet";
import FileCoinAddressAccept from "@/components/ui/filecoinAddressAccept";
import LoginContent from "@/components/ui/loginContent";
import UserInformation from "@/components/ui/userInformation";
import { env } from "@/env";
import useIsClient from "@/lib/hooks/useIsClient";
import { useLoading } from "@/lib/providers/loading.provider.client";
import useCheckAllowance from "@/lib/hooks/useCheckAllowance";
import {
  createDomain,
  createFilecoinTypes,
  createMessage,
  PRIMARY_TYPE,
} from "@/lib/utils";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { signTypedData } from "@wagmi/core";
import { useState } from "react";
import { useAccount } from "wagmi";
import { useWagmiConfig } from "../wagmiConfig";
import SimplerSpinner from "@/components/ui/simpleSpinner";
import { checkIfActorExists } from "@/lib/glifApi";
import InsufficientAllowance from "@/components/ui/insufficientAllowance";
import { apiPost, apiGet } from "@/lib/httpClient";

export default function Home() {
  const [modalMessage, setModalMessage] = useState<string | null>(null);
  const [score, setScore] = useState<number>(0);
  const [error, setError] = useState(false);
  const { loading, setLoading } = useLoading();
  const isClient = useIsClient();

  const {
    isConnected,
    address: walletAddress,
    chain,
    connector,
  } = useAccount();
  const [step, setStep] = useState<number>(0);
  const wagmiConfig = useWagmiConfig();

  const [lastAllocationTimestamp, setLastAllocationTimestamp] = useState<
    number | null
  >(null);

  const [isValidAllocation, setIsValidAllocation] = useState<boolean | null>(
    null,
  );

  const minScore = env.NEXT_PUBLIC_SCORE_THRESHOLD;
  const allocationExpDays = env.NEXT_PUBLIC_LAST_ALLOCATION_EXP_DAYS;

  const handleCloseModal = (): void => {
    setError(false);
    setModalMessage(null);
  };

  const handleError = (message: string): void => {
    console.log("error", message);
    setError(true);
    setModalMessage(message);
  };

  const { isAllowanceSufficient, checkingAllowance } = useCheckAllowance();

  const getLastAllocation = async () => {
    const result = await apiGet(
      `${env.NEXT_PUBLIC_BACKEND_API_URL}/autoallocator/last_client_allocation?evm_wallet_address=${walletAddress}`,
    );

    if (result) {
      const timestamp = new Date(result).getTime();

      setLastAllocationTimestamp(timestamp);

      const isValidAllocation = timestamp
        ? timestamp + allocationExpDays * 24 * 60 * 60 * 1000 > Date.now()
        : null;

      setIsValidAllocation(isValidAllocation);
    }
  };

  const scoreError = () => {
    setScore(0);
    setIsValidAllocation(null);
    setLastAllocationTimestamp(null);
    setStep(2);
  };

  const handleScore = async (score: number | null) => {
    if (score === null) return;

    setScore(score);

    if (score < minScore) {
      setIsValidAllocation(null);
      setLastAllocationTimestamp(null);
      setStep(2);
    } else {
      try {
        await getLastAllocation();
        setStep(3);
      } catch (error) {
        console.error(
          `Error while getting last allocation for ${walletAddress}`,
          error,
        );
        setIsValidAllocation(null);
        setLastAllocationTimestamp(null);
        setStep(3);
      }
    }
  };

  const handleFilecoinAccept = async (filecoinAddress: string) => {
    setLoading(true);
    try {
      const _filecoinAddress = filecoinAddress.trim();

      if (!_filecoinAddress.length) {
        setError(true);
        handleError("Filecoin address is empty, please enter the value");
        return;
      }

      let actor = await checkIfActorExists(_filecoinAddress);
      if (!actor) {
        setError(true);
        const errorMessage =
          "Actor not found. Please add some funds to verify the address on the chain";
        console.error(errorMessage);
        handleError(errorMessage);
        return;
      }
      setError(false);
      const filecoinTypes = createFilecoinTypes();
      const domain = createDomain(chain?.id, "1");
      const message = createMessage(_filecoinAddress);
      const signature = await signTypedData(wagmiConfig, {
        account: walletAddress,
        connector,
        domain,
        types: filecoinTypes,
        primaryType: PRIMARY_TYPE,
        message,
      });

      await apiPost(
        `${env.NEXT_PUBLIC_BACKEND_API_URL}/autoallocator/trigger_autoallocation`,
        {
          message,
          signature,
        },
      );

      await getLastAllocation();
      setModalMessage("New allocation has been created!");
      setStep(0);
    } catch (error: any) {
      if (error instanceof Error) {
        if (!error.message.includes("User rejected the request.")) {
          handleError(error.message);
        }
      } else {
        handleError("An error occurred. Please try again.");
      }
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {isConnected && (
        <Card className="p-2 flex justify-end">
          <ConnectButton showBalance={false} />
        </Card>
      )}
      {checkingAllowance && isClient && isConnected && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-20">
          <SimplerSpinner />
        </div>
      )}
      <main className="flex flex-col items-center justify-between p-6 md:p-24 xl:p-24">
        <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col items-center w-full xl:w-3/5">
          <p className="block text-gray-700 font-bold mb-8 text-3xl text-center">
            Welcome to Fil+ AutoAllocator
          </p>

          {!isClient && isConnected && !checkingAllowance && <CheckingWallet />}

          {isClient && !isConnected && <LoginContent />}

          {isClient &&
            isConnected &&
            !isAllowanceSufficient &&
            !checkingAllowance && <InsufficientAllowance />}

          {isClient &&
            walletAddress &&
            isConnected &&
            isAllowanceSufficient && (
              <UserInformation
                walletAddress={walletAddress}
                score={score}
                isValidAllocation={isValidAllocation}
                lastAllocationTimestamp={lastAllocationTimestamp}
                setScore={handleScore}
                onError={scoreError}
              />
            )}
          {step === 2 && isConnected && (
            <>
              <p className="mb-2 font-bold text-lg text-center">
                Please follow these instructions:
              </p>
              <ul className="list-disc list-inside">
                <li className="mb-2">
                  Visit{" "}
                  <a
                    href="https://passport.gitcoin.co"
                    className="text-blue-500 underline"
                  >
                    passport.gitcoin.co
                  </a>
                </li>
                <li className="mb-2">
                  Validate your identity up to a{" "}
                  <a
                    href="https://support.gitcoin.co/gitcoin-knowledge-base/misc/explorer-passport-guide"
                    className="text-blue-500 underline"
                  >
                    score
                  </a>{" "}
                  of {minScore}
                </li>
                <li className="mb-2">
                  &quot;
                  <a
                    href="https://support.passport.xyz/passport-knowledge-base/using-passport/onchain-passport"
                    className="text-blue-500 underline"
                  >
                    Bring Passport onchain
                  </a>
                  &quot; to Optimism network
                </li>
              </ul>
            </>
          )}

          {step === 3 && isConnected && !isValidAllocation && !loading && (
            <FileCoinAddressAccept handleClick={handleFilecoinAccept} />
          )}

          {loading && <SimplerSpinner />}
        </div>
      </main>
      {modalMessage != null && (
        <Modal
          message={modalMessage}
          onClose={handleCloseModal}
          error={error}
        />
      )}
    </>
  );
}
