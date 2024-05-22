"use client";

import { Card } from "@/components/ui/card";
import KycApproval from "@/components/ui/kycApproval";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useEffect } from "react";
import { useSignTypedData, useAccount } from "wagmi";

export default function Home() {
  const { address, isConnecting, isDisconnected, isConnected } = useAccount();
  console.log(address);
  return (
    <>
      <Card className="p-2 flex justify-end">
        <ConnectButton showBalance={false} />
      </Card>
      {/* fixme: replace mocked */}
      <KycApproval isConnected={isConnected} clientId="test" repoName="test" repoOwner="test" chainId={1} version="1" />
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
