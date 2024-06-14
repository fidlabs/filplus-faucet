"use client";

import { Modal } from "@/components/modals/modal";
import { Card } from "@/components/ui/card";
import KycApproval from "@/components/ui/kycApproval";
import MainContent from "@/components/ui/mainContent";
import { env } from "@/env";
import useIsClient from "@/lib/hooks/useIsClient";
import { useLoading } from "@/lib/providers/loading.provider.client";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useSearchParams } from "next/navigation";
import { useState } from "react";
import { useAccount } from "wagmi";

export default function Home() {
  const [modalMessage, setModalMessage] = useState<string | null>(null);
  const isClient = useIsClient();
  const [score, setScore] = useState(0);
  const [error, setError] = useState(false);
  const { loading } = useLoading();
  const { isConnected, address, chain, connector } = useAccount();
  const searchParams = useSearchParams();
  const clientId = searchParams.get("client") || "";
  const repoName = searchParams.get("repo") || "";
  const repoOwner = searchParams.get("owner") || "";
  const repoIssue = searchParams.get("issue") || "";
  const handleCloseModal = (): void => {
    setError(false);
    setModalMessage(null);
  };
  const handleError = (message: string): void => {
    console.log("error", message);
    setError(true);
    setModalMessage(message);
  };

  const searchParamsProvided =
    clientId !== "" && repoName !== "" && repoOwner !== "" && repoIssue !== "";
  const showConnectWalletMsg = !isConnected && isClient;
  return (
    <>
      <Card className="p-2 flex justify-end">
        <ConnectButton showBalance={false} />
      </Card>

      <main className="flex flex-col items-center justify-between p-24">
        <MainContent
          address={address}
          chain={chain}
          searchParamsProvided={searchParamsProvided}
          setScore={setScore}
          showConnectWalletMsg={showConnectWalletMsg}
        />
        {score >= env.NEXT_PUBLIC_SCORE_THRESHOLD && !loading && (
          <KycApproval
            account={address}
            connector={connector}
            isConnected={isConnected}
            clientId={clientId}
            repoName={repoName}
            repoOwner={repoOwner}
            repoIssue={repoIssue}
            version="1"
            onError={handleError}
            chainId={chain?.id}
          />
        )}
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
