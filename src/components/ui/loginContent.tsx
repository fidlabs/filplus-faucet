"use client";

import { env } from "@/env";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { Section } from './section';
import { CheckmarkListItem } from './checkmarkListItem';
import { NumberedListItem } from './numberedListItem';

const LoginContent = () => {
  const scoreThreshold = env.NEXT_PUBLIC_SCORE_THRESHOLD;

  return (
    <div className='max-w-4xl mx-auto space-y-16'>
      <Section header='What is the Filecoin Plus DataCap Faucet' variant="highlight">
          <p>
            The Filecoin Plus DataCap Faucet is an automated service that provides 1 TiB of free DataCap to users looking to store verified data on the Filecoin network. It simplifies the allocation process, making it easy to receive and use DataCap instantly without the traditional manual approval process.
          </p>
          <p>
            DataCap represents storage allocation rights on the Filecoin network, allowing users to prioritize their data storage with enhanced incentives for storage providers.
          </p>
      </Section>

      <Section header='How to Receive Your 1 TiB of DataCap' variant="highlight">
        <ul className='space-y-6'>
          <NumberedListItem number={1}>
            <a href='https://passport.gitcoin.co/' className='text-blue-600 hover:underline font-medium'>
              Obtain a Gitcoin Passport
            </a>
            <span> - Create and set up your digital identity passport through Gitcoin</span>
          </NumberedListItem>
          
          <NumberedListItem number={2}>
            Meet the Minimum Score Requirement - Ensure your{' '}
            <a href='https://support.gitcoin.co/gitcoin-knowledge-base/misc/explorer-passport-guide' className='text-blue-600 hover:underline font-medium'>
              passport score
            </a>{' '}
            is at least {scoreThreshold} points
          </NumberedListItem>

          <NumberedListItem number={3}>
            <a href='https://support.passport.xyz/passport-knowledge-base/using-passport/onchain-passport' className='text-blue-600 hover:underline font-medium'>
              Bring Your Passport to Optimism
            </a>
            <span> - Connect your passport to the Optimism network</span>
          </NumberedListItem>

          <NumberedListItem number={4}>
            Verify Ownership - Confirm your ownership of the passport using your connected wallet
          </NumberedListItem>
        </ul>
      </Section>

      <Section header='Who Can Use the DataCap Faucet' variant="highlight">
        <p>
          This faucet is designed for developers, storage providers, and ecosystem participants who need verified storage for their projects. Whether you&apos;re testing Filecoin storage solutions or onboarding new datasets, this tool helps you get started quickly.
        </p>
        <p>The service is particularly valuable for:</p>
        <ul className='grid grid-cols-1 md:grid-cols-2 gap-5'>
          <CheckmarkListItem>Developers building applications</CheckmarkListItem>
          <CheckmarkListItem>Content creators looking to store and distribute digital assets</CheckmarkListItem>
          <CheckmarkListItem>Researchers working with large datasets</CheckmarkListItem>
          <CheckmarkListItem>Organizations exploring decentralized storage options</CheckmarkListItem>
        </ul>
      </Section>

      <Section header='Get Started Today' variant="cta">
        <p>
          Maximize your Filecoin storage capabilities with ease. Connect your wallet below to begin the process and request your 1 TiB of free DataCap now!
        </p>
        <ConnectButton.Custom>
          {({ openConnectModal }) => (
            <button
              onClick={openConnectModal}
              className='inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200'
            >
              Connect Wallet
            </button>
          )}
        </ConnectButton.Custom>
      </Section>
      
      <div className='border-t'></div>

      <Section header='Need Help?'>
        <p>
          If you encounter any issues during the DataCap allocation process or have questions about using your allocation, please visit{' '}
          <a href='https://docs.filecoin.io/basics/how-storage-works/filecoin-plus/' className='text-blue-600 hover:underline font-medium'>
            Filecoin Docs
          </a>
          {' '}or join the{' '}
          <a href='https://filecoin.io/slack' className='text-blue-600 hover:underline font-medium'>
            Filecoin Slack
          </a>{' '}
          for assistance from our community.
        </p>
      </Section>
    </div>
  );
};

export default LoginContent;
