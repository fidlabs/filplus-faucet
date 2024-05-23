"use client";

import { Card } from "@/components/ui/card";
import KycApproval from "@/components/ui/kycApproval";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useSignTypedData, useAccount } from "wagmi";

export default function Home() {
  const { isConnected } = useAccount();
  const [kycParams, setKycParams] = useState({ clientId: "", repoName: "", repoOwner: "" });
  const router = useRouter();
  const { query } = router;

  useEffect(() => {
    if (query.clientId && query.repoName && query.repoOwner) {
      setKycParams({
        clientId: Array.isArray(query.clientId) ? query.clientId[0] : query.clientId,
        repoName: Array.isArray(query.repoName) ? query.repoName[0] : query.repoName,
        repoOwner: Array.isArray(query.repoOwner) ? query.repoOwner[0] : query.repoOwner
      });
    }
  }, [query.clientId, query.repoName, query.repoOwner]);

  return (
    <>
      <Card className="p-2 flex justify-end">
        <ConnectButton showBalance={false} />
      </Card>
      <KycApproval
        isConnected={isConnected}
        clientId={kycParams.clientId}
        repoName={kycParams.repoName}
        repoOwner={kycParams.repoOwner}
        version="1"
      />
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
            <li className="mb-2">Validate your identity up to a score of 30</li>
            <li className="mb-2">"Bring Passport onchain" to Optimism network</li>
          </ul>
        </div>
      </main>
    </>
  );
}
