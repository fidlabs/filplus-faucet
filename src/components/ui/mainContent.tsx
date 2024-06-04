import { Address, Chain } from "viem";
import ValidatePassportScore from "../validatePassportScore";

type MainContentProps = {
  searchParamsProvided: boolean;
  showConnectWalletMsg: boolean;
  address?: Address;
  chain?: Chain;
  setScore: (score: number) => void;
};

export default function MainContent({ searchParamsProvided, showConnectWalletMsg, address, chain, setScore }: MainContentProps) {
  if (!searchParamsProvided)
    return (
      <h1 className="block text-gray-700 font-bold mb-2 text-xl text-center">
        Please use a link from relevant Github Issue to proceed with KYC.
      </h1>
    );

  if (showConnectWalletMsg)
    return <h1 className="block text-gray-700 font-bold mb-2 text-xl text-center">Please Connect Wallet to proceed.</h1>;

  return (
    <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <>
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
        <ValidatePassportScore address={address} chain={chain} onScoreChange={setScore} />
      </>
    </div>
  );
}
