"use client";

import { Modal } from "@/components/modals/modal";
import { Card } from "@/components/ui/card";
import KycApproval from "@/components/ui/kycApproval";
import ValidatePassportScore from "@/components/validatePassportScore";
import useIsClient from "@/lib/hooks/useIsClient";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { useAccount } from "wagmi";

export default function Home() {
  const [modalMessage, setModalMessage] = useState<string | null>(null);
  const isClient = useIsClient();
  const [score, setScore] = useState(0);
  const [error, setError] = useState(false);
  const { isConnected, address, chain } = useAccount();
  const [kycParams, setKycParams] = useState({ clientId: "", repoName: "", repoOwner: "" });
  const searchParams = useSearchParams();
  const clientId = searchParams.get("clientId");
  const repoName = searchParams.get("repoName");
  const repoOwner = searchParams.get("repoOwner");

  useEffect(() => {
    if (clientId && repoName && repoOwner) {
      setKycParams({
        clientId,
        repoName,
        repoOwner
      });
    }
  }, [clientId, repoName, repoOwner]);

  const handleCloseModal = (): void => {
    setError(false);
    setModalMessage(null);
  };
  const handleError = (message: string): void => {
    console.log("error", message);
    setError(true);
    setModalMessage(message);
  };

  return (
    <>
      <Card className="p-2 flex justify-end">
        <ConnectButton showBalance={false} />
      </Card>

      <main className="flex flex-col items-center justify-between p-24">
        <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <h1 className="block text-gray-700 font-bold mb-2 text-xl text-center">User Information</h1>
          <ul className="list-disc list-inside">
            <li className="mb-2">
              Visit{" "}
              <a href="https://passport.gitcoin.co" className="text-blue-500 underline">
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
              of 30
            </li>
            <li className="mb-2">
              "
              <a
                href="https://support.passport.xyz/passport-knowledge-base/using-passport/onchain-passport"
                className="text-blue-500 underline"
              >
                Bring Passport onchain
              </a>
              " to Optimism network
            </li>
          </ul>
          {isConnected && isClient ? (
            <ValidatePassportScore address={address} chain={chain} onError={handleError} onScoreChange={setScore} />
          ) : null}
        </div>
        {score > 30 && (
          <KycApproval
            isConnected={isConnected}
            clientId={kycParams.clientId}
            repoName={kycParams.repoName}
            repoOwner={kycParams.repoOwner}
            version="1"
            onError={handleError}
          />
        )}
      </main>
      {modalMessage != null && <Modal message={modalMessage} onClose={handleCloseModal} error={error} />}
    </>
  );
}
