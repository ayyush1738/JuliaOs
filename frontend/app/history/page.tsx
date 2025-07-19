'use client';

import { useState } from 'react';
import { Calendar, ExternalLink, Users, Mail, TrendingUp } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Campaign } from '@/types';

export default function History() {
  const [campaigns] = useState<Campaign[]>([
    {
      id: '1',
      name: 'Q1 2024 HealthTech Outreach',
      timestamp: '2024-01-15T10:30:00Z',
      leadCount: 45,
      status: 'completed',
      onchainTxId: '5J7K8L9M0N1P2Q3R4S5T6U7V8W9X0Y1Z',
    },
    {
      id: '2',
      name: 'Fintech Startup Campaign',
      timestamp: '2024-01-10T14:22:00Z',
      leadCount: 32,
      status: 'completed',
      onchainTxId: '3R4S5T6U7V8W9X0Y1Z2A3B4C5D6E7F8G',
    },
    {
      id: '3',
      name: 'SaaS Enterprise Outreach',
      timestamp: '2024-01-08T09:15:00Z',
      leadCount: 67,
      status: 'completed',
      onchainTxId: '8W9X0Y1Z2A3B4C5D6E7F8G9H0I1J2K3L',
    },
    {
      id: '4',
      name: 'EdTech Decision Makers',
      timestamp: '2024-01-05T16:45:00Z',
      leadCount: 28,
      status: 'pending',
    },
  ]);

  const totalLeads = campaigns.reduce((sum, campaign) => sum + campaign.leadCount, 0);
  const completedCampaigns = campaigns.filter(c => c.status === 'completed').length;

  const getStatusBadge = (status: Campaign['status']) => {
    switch (status) {
      case 'completed':
        return <Badge className="bg-green-100 text-green-800">Completed</Badge>;
      case 'pending':
        return <Badge className="bg-yellow-100 text-yellow-800">Pending</Badge>;
      case 'failed':
        return <Badge className="bg-red-100 text-red-800">Failed</Badge>;
      default:
        return <Badge variant="secondary">{status}</Badge>;
    }
  };

  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold text-gray-900">Campaign History</h1>
        <p className="text-gray-600">
          View your previous lead generation campaigns stored on Solana blockchain
        </p>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Campaigns</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{campaigns.length}</div>
            <p className="text-xs text-muted-foreground">
              All time campaigns
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Completed</CardTitle>
            <Calendar className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{completedCampaigns}</div>
            <p className="text-xs text-muted-foreground">
              Successfully completed
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Leads</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{totalLeads}</div>
            <p className="text-xs text-muted-foreground">
              Across all campaigns
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Avg. Campaign Size</CardTitle>
            <Mail className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{Math.round(totalLeads / campaigns.length)}</div>
            <p className="text-xs text-muted-foreground">
              Leads per campaign
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Campaign List */}
      <Card>
        <CardHeader>
          <CardTitle>Campaign History</CardTitle>
          <CardDescription>
            All campaigns with their blockchain verification details
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {campaigns.map((campaign) => (
              <div
                key={campaign.id}
                className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50 transition-colors"
              >
                <div className="space-y-2">
                  <div className="flex items-center space-x-3">
                    <h3 className="font-medium text-gray-900">{campaign.name}</h3>
                    {getStatusBadge(campaign.status)}
                  </div>
                  <div className="flex items-center space-x-6 text-sm text-gray-600">
                    <div className="flex items-center space-x-1">
                      <Calendar className="h-4 w-4" />
                      <span>{new Date(campaign.timestamp).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Users className="h-4 w-4" />
                      <span>{campaign.leadCount} leads</span>
                    </div>
                  </div>
                  {campaign.onchainTxId && (
                    <div className="text-xs text-gray-500">
                      Tx: {campaign.onchainTxId.substring(0, 20)}...
                    </div>
                  )}
                </div>
                
                <div className="flex items-center space-x-2">
                  {campaign.onchainTxId && (
                    <Button variant="outline" size="sm" asChild>
                      <a
                        href={`https://solscan.io/tx/${campaign.onchainTxId}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="h-4 w-4 mr-1" />
                        View on Solscan
                      </a>
                    </Button>
                  )}
                  <Button variant="ghost" size="sm">
                    View Details
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}