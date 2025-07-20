import { Navbar } from '@/components/layout/navbar';
import { LeadInput } from '@/components/dashboard/lead-input';
import { EnrichmentResults } from '@/components/dashboard/enrichment-results';
import { EmailGeneration } from '@/components/dashboard/email-generation';
import { SwarmSummary } from '@/components/dashboard/swarm-summary';
import { BlockchainIntegration } from '@/components/dashboard/blockchain-integration';
import { CampaignHistory } from '@/components/dashboard/campaign-history';

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Lead Generation Dashboard
          </h1>
          <p className="text-gray-600">
            Manage your AI agents and track lead generation campaigns
          </p>
        </div>

        <div className="space-y-8">
          <LeadInput />
          <EnrichmentResults />
          <EmailGeneration />
          <SwarmSummary />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <BlockchainIntegration />
            <CampaignHistory />
          </div>
        </div>
      </main>
    </div>
  );
}