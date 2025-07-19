'use client';

import { useState } from 'react';
import LeadInput from '@/components/dashboard/LeadInput';
import EnrichmentResults from '@/components/dashboard/EnrichmentResults';
import EmailGeneration from '@/components/dashboard/EmailGeneration';
import SwarmSummary from '@/components/dashboard/SwarmSummary';
import BlockchainIntegration from '@/components/dashboard/BlockchainIntegration';
import { Lead } from '@/types';

export default function Dashboard() {
  const [leads, setLeads] = useState<Lead[]>([]);
  const [walletConnected] = useState(false); // This would come from context in a real app

  const handleLeadsGenerated = (newLeads: Lead[]) => {
    setLeads(prev => [...prev, ...newLeads]);
  };

  const handleLeadsEnriched = (enrichedLeads: Lead[]) => {
    setLeads(enrichedLeads);
  };

  const handleEmailsGenerated = (updatedLeads: Lead[]) => {
    setLeads(updatedLeads);
  };

  const handleRunSwarm = async () => {
    // This would orchestrate all agents in sequence
    // For now, we'll just simulate the process
  };

  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
        <p className="text-gray-600">
          Manage your AI agents and lead generation campaigns
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left Column */}
        <div className="space-y-8">
          <LeadInput onLeadsGenerated={handleLeadsGenerated} />
          <EmailGeneration 
            leads={leads} 
            onEmailsGenerated={handleEmailsGenerated} 
          />
        </div>

        {/* Right Column */}
        <div className="space-y-8">
          <EnrichmentResults 
            leads={leads} 
            onLeadsEnriched={handleLeadsEnriched} 
          />
          <BlockchainIntegration 
            leads={leads} 
            walletConnected={walletConnected} 
          />
        </div>
      </div>

      {/* Full Width */}
      <SwarmSummary onRunSwarm={handleRunSwarm} />
    </div>
  );
}