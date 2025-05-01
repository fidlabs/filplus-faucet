"use client";

import { env } from "@/env";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { Section } from './section';
import { CheckmarkListItem } from './checkmarkListItem';
import { NumberedListItem } from './numberedListItem';
import { ExternalLink } from './externalLink';

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
            <ExternalLink href='https://passport.gitcoin.co/'>
              Obtain a Gitcoin Passport
            </ExternalLink>
            <span> - Create and set up your digital identity passport through Gitcoin</span>
          </NumberedListItem>
          
          <NumberedListItem number={2}>
            Meet the Minimum Score Requirement - Ensure your{' '}
            <ExternalLink href='https://support.gitcoin.co/gitcoin-knowledge-base/misc/explorer-passport-guide'>
              passport score
            </ExternalLink>{' '}
            is at least {scoreThreshold} points
          </NumberedListItem>

          <NumberedListItem number={3}>
            <ExternalLink href='https://support.passport.xyz/passport-knowledge-base/using-passport/onchain-passport'>
              Bring Your Passport to Optimism
            </ExternalLink>
            <span> - Connect your passport to the Optimism network</span>
          </NumberedListItem>

          <NumberedListItem number={4}>
            Verify Ownership - Confirm your ownership of the passport using your connected wallet
          </NumberedListItem>
        </ul>
      </Section>

      <Section header='Understanding Gitcoin Passport' variant="highlight">
        <p>
          <ExternalLink href='https://passport.gitcoin.co/'>Gitcoin Passport</ExternalLink> is a decentralized identity verification system that helps establish trust and prevent fraud in Web3 applications. It works by collecting various <span className='font-medium'>stamps</span> that verify different aspects of your digital identity, creating a comprehensive <span className='font-medium'>trust score</span>.
        </p>

        <p className='mt-6'>
          The <span className='font-medium'>verification process</span> typically takes 5-15 minutes to complete the basic stamps. Some advanced verifications might take longer due to processing times. Your <ExternalLink href='https://support.gitcoin.co/gitcoin-knowledge-base/misc/explorer-passport-guide'>passport score</ExternalLink> is calculated instantly after each stamp is verified.
        </p>

        <p className='mt-4'>
          We utilize the <ExternalLink href='https://support.passport.xyz/passport-knowledge-base/using-passport/onchain-passport'>Optimism network</ExternalLink> for passport verification due to its fast transaction speeds and low costs. This ensures a smooth, efficient verification process while maintaining security through blockchain validation. Your passport data is stored on Optimism&apos;s <span className='font-medium'>L2 network</span>, making it easily accessible while reducing gas fees compared to Ethereum mainnet.
        </p>
      </Section>

      <Section header='Building Your Passport Score' variant="highlight">
        <p className='font-medium'>Key Components for Score Building:</p>
        <ul className='space-y-4 mt-2'>
          <CheckmarkListItem>Connect various accounts (<ExternalLink href='https://github.com'>Github</ExternalLink>, <ExternalLink href='https://x.com'>X (Twitter)</ExternalLink>, etc.) - Each verified account adds to your score</CheckmarkListItem>
          <CheckmarkListItem>Complete identity verifications - Including email, phone, and other KYC methods</CheckmarkListItem>
          <CheckmarkListItem>Demonstrate Web3 activity - Including NFT ownership, DAO participation, and on-chain history</CheckmarkListItem>
          <CheckmarkListItem>Maintain active participation - Scores are regularly updated to reflect current activity</CheckmarkListItem>
        </ul>
      </Section>

      <Section header='Who Can Use the DataCap Faucet' variant="highlight">
        <p>
          This faucet is designed for developers, storage providers, and ecosystem participants who need verified storage for their projects. Whether you&apos;re testing <ExternalLink href='https://docs.filecoin.io/storage-providers/filecoin-deals/storage-deals'>Filecoin storage solutions</ExternalLink> or onboarding new datasets, this tool helps you get started quickly.
        </p>
        <p>The service is particularly valuable for:</p>
        <ul className='grid grid-cols-1 md:grid-cols-2 gap-5'>
          <CheckmarkListItem>Developers building applications</CheckmarkListItem>
          <CheckmarkListItem>Content creators looking to store and distribute digital assets</CheckmarkListItem>
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
          <ExternalLink href='https://docs.filecoin.io/basics/how-storage-works/filecoin-plus/'>
            Filecoin Docs
          </ExternalLink>
          {' '}or join the{' '}
          <ExternalLink href='https://filecoin.io/slack'>
            Filecoin Slack
          </ExternalLink>{' '}
          for assistance from our community.
        </p>
      </Section>
    </div>
  );
};

export default LoginContent;
