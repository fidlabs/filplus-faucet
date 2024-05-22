"use client";

import { Card } from "@/components/ui/card";
import { ConnectButton } from "@rainbow-me/rainbowkit";

export default function Home() {
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
                passport.gitcoin.co-
              </a>
            </li>
            <li className="mb-2">Validate your identity up to a score of 30</li>
            <li className="mb-2">"Bring Passport onchain" to optimism</li>
          </ul>
        </div>
      </main>
    </>
  );
}
