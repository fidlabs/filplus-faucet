"use client";

import { env } from "@/env";
import { ConnectButton } from "@rainbow-me/rainbowkit";

const LoginContent = () => {
  const scoreThreshold = env.NEXT_PUBLIC_SCORE_THRESHOLD;

  return (
    <>
      <p className="text-base text-center"></p>
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
    </>
  );
};

export default LoginContent;
