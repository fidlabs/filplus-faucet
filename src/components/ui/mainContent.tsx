import { env } from "@/env";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { Address, Chain } from "viem";
import ValidatePassportScore from "../validatePassportScore";

type MainContentProps = {
  searchParamsProvided: boolean;
  showConnectWalletMsg: boolean;
  address?: Address;
  chain?: Chain;
  setScore: (score: number) => void;
};

export default function MainContent({
  searchParamsProvided,
  showConnectWalletMsg,
  address,
  chain,
  setScore,
}: MainContentProps) {
  const scoreThreshold = env.NEXT_PUBLIC_SCORE_THRESHOLD;
  if (!searchParamsProvided)
    return (
      <h1 className="block text-gray-700 font-bold mb-2 text-xl text-center">
        Please use a link from relevant Github Issue to proceed with KYC.
      </h1>
    );

  if (showConnectWalletMsg)
    return (
      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col items-center">
        <h1 className="block text-gray-700 font-bold mb-2 text-xl text-center">
          Welcome to Fil+ Client KYC Portal.
        </h1>
        <br />
        <p className="text-base text-center">
          As part of your DataCap Request Application, you are required to
          complete KYC verification.
        </p>
        <p>To do so, you&apos;ll have to follow these steps:</p>
        <br />
        <ul className="list-disc list-inside">
          <li className="mb-2">
            Obtain a{" "}
            <a
              href="https://passport.gitcoin.co/"
              className="text-blue-500 underline"
            >
              Gitcoin Passport
            </a>
          </li>
          <li className="mb-2">
            Ensure your{" "}
            <a
              href="https://support.gitcoin.co/gitcoin-knowledge-base/misc/explorer-passport-guide"
              className="text-blue-500 underline"
            >
              passport score
            </a>{" "}
            meets the minimum requirement of {scoreThreshold}
          </li>
          <li className="mb-2">
            <a
              href="https://support.passport.xyz/passport-knowledge-base/using-passport/onchain-passport"
              className="text-blue-500 underline"
            >
              Bring the passport
            </a>{" "}
            to Optimism
          </li>
          <li className="mb-2">
            Confirm your ownership of the passport using your wallet.
          </li>
        </ul>
        <br />
        <p>
          To proceed, please connect your wallet and follow the detailed
          instructions.
        </p>
        <br />
        <ConnectButton showBalance={false} />
      </div>
    );

  return (
    <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <>
        <h1 className="block text-gray-700 font-bold mb-2 text-xl text-center">
          User Information
        </h1>
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
            of {scoreThreshold}
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
        <ValidatePassportScore
          address={address}
          chain={chain}
          onScoreChange={setScore}
        />
      </>
    </div>
  );
}
