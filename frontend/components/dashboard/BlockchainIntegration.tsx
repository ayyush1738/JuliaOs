'use client';

import { useState } from 'react';
import { Wallet, Save, ExternalLink, CheckCircle } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import LoadingButton from '@/components/ui/LoadingButton';
import { Lead } from '@/types';
import { toast } from 'sonner';

interface BlockchainIntegrationProps {
  leads: Lead[];
  walletConnected: boolean;
}

export default function BlockchainIntegration({ leads, walletConnected }: BlockchainIntegrationProps) {
  const [campaignName, setCampaignName] = useState('');
  const [lastTxId, setLastTxId] = useState<string | null>(null);

  const saveToSolana = async () => {
    if (!campaignName.trim()) {
      toast.error('Please enter a campaign name');
      return;
    }

    // Mock Solana transaction
    await new Promise(resolve => setTimeout(resolve, 3000));
    
    const mockTxId = `5J7K8L9M0N1P2Q3R4S5T6U7V8W9X0Y1Z2A3B4C5D6E7F8G9H0I1J2K3L4M5N6O7P8Q9R0S1T2U3V4W5X6Y7Z8A9B0C1D2E3F4G5H6I7J8K9L0M1N2O3P4Q5R6S7T8U9V0W1X2Y3Z4A5B6C7D8E9F0G1H2I3J4K5L6M7N8O9P0Q1R2S3T4U5V6W7X8Y9Z0A1B2C3D4E5F6G7H8I9J0K1L2M3N4O5P6Q7R8S9T0U1V2W3X4Y5Z6A7B8C9D0E1F2G3H4I5J6K7L8M9N0O1P2Q3R4S5T6U7V8W9X0Y1Z2A3B4C5D6E7F8G9H0I1J2K3L4M5N6O7P8`;
    
    setLastTxId(mockTxId);
    toast.success('Campaign data saved to Solana blockchain!');
  };

  const processedLeads = leads.filter(lead => lead.emailGenerated).length;

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <Wallet className="h-5 w-5" />
          <span>Blockchain Integration</span>
        </CardTitle>
        <CardDescription>
          Store campaign data on Solana blockchain for permanent record and verification
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {!walletConnected ? (
            <div className="text-center py-8 text-gray-500">
              <Wallet className="mx-auto h-12 w-12 text-gray-400 mb-4" />
              <p>Connect your wallet to save campaigns on Solana</p>
            </div>
          ) : (
            <>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4 bg-gradient-to-r from-purple-50 to-blue-50 rounded-lg">
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-600">{leads.length}</div>
                  <div className="text-sm text-gray-600">Total Leads</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">{leads.filter(l => l.enriched).length}</div>
                  <div className="text-sm text-gray-600">Enriched</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600">{processedLeads}</div>
                  <div className="text-sm text-gray-600">Emails Generated</div>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Campaign Name
                  </label>
                  <Input
                    placeholder="e.g., Q1 2024 HealthTech Outreach"
                    value={campaignName}
                    onChange={(e) => setCampaignName(e.target.value)}
                  />
                </div>

                <LoadingButton
                  onClick={saveToSolana}
                  className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
                  disabled={processedLeads === 0}
                >
                  <Save className="mr-2 h-4 w-4" />
                  Save to Solana
                </LoadingButton>

                {lastTxId && (
                  <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                    <div className="flex items-center space-x-2 text-green-800">
                      <CheckCircle className="h-5 w-5" />
                      <span className="font-medium">Campaign saved successfully!</span>
                    </div>
                    <div className="mt-2 text-sm text-green-700">
                      <p>Transaction ID: {lastTxId.substring(0, 20)}...</p>
                      <a
                        href={`https://solscan.io/tx/${lastTxId}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center space-x-1 text-green-600 hover:text-green-800 mt-1"
                      >
                        <span>View on Solscan</span>
                        <ExternalLink className="h-3 w-3" />
                      </a>
                    </div>
                  </div>
                )}
              </div>
            </>
          )}
        </div>
      </CardContent>
    </Card>
  );
}