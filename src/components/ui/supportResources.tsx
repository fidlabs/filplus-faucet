import { ExternalLink } from './externalLink';
import { Section } from './section';

export function SupportResources() {
  return (
    <Section header='Need Help?'>
      <div className="space-y-6">
        <p>
          If you encounter any issues during the DataCap allocation process or have questions about using your allocation, we have multiple resources available to assist you:
        </p>

        <div className="space-y-4">
          <h3 className="font-medium">Official Documentation & Support</h3>
          <ul className="space-y-2">
            <li>
              <ExternalLink href='https://docs.filecoin.io/basics/how-storage-works/filecoin-plus/'>
                Filecoin Plus Documentation
              </ExternalLink>
              {' '}- Comprehensive guide to Filecoin Plus and DataCap
            </li>
            <li>
              <ExternalLink href='https://filecoin.io/'>
                Filecoin Website
              </ExternalLink>
              {' '}- Official Filecoin resources and updates
            </li>
            <li>
              <ExternalLink href='https://fil.org/'>
                Filecoin Foundation
              </ExternalLink>
              {' '}- Governance and ecosystem information
            </li>
          </ul>
        </div>

        <div className="space-y-4">
          <h3 className="font-medium">Development & Testing Resources</h3>
          <ul className="space-y-2">
            <li>
              <ExternalLink href='https://faucet.calibnet.chainsafe-fil.io/'>
                Calibnet Faucet
              </ExternalLink>
              {' '}- For testing and development purposes
            </li>
            <li>
              <ExternalLink href='https://forest-explorer.chainsafe.dev/'>
                Forest Explorer
              </ExternalLink>
              {' '}- Explore and test Filecoin network
            </li>
          </ul>
        </div>

        <div className="space-y-4">
          <h3 className="font-medium">Community Support</h3>
          <ul className="space-y-2">
            <li>
              <ExternalLink href='https://filecoin.io/slack'>
                Filecoin Slack
              </ExternalLink>
              {' '}- Join our community for real-time support
            </li>
            <li>
              <ExternalLink href='https://github.com/filecoin-project'>
                Filecoin GitHub
              </ExternalLink>
              {' '}- Technical discussions and issue tracking
            </li>
          </ul>
        </div>
      </div>
    </Section>
  );
};
