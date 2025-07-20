'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { History, Eye, ExternalLink } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';

const campaigns = [
  {
    id: 'LG-2024-001',
    date: 'Jan 15, 2024',
    leads: 47,
    status: 'completed',
    conversionRate: '12.8%',
    txHash: '5KJp9X2mN...'
  },
  {
    id: 'LG-2024-002', 
    date: 'Jan 10, 2024',
    leads: 32,
    status: 'completed',
    conversionRate: '15.6%',
    txHash: '7Lm8Y3nP...'
  },
  {
    id: 'LG-2024-003',
    date: 'Jan 5, 2024', 
    leads: 28,
    status: 'completed',
    conversionRate: '9.7%',
    txHash: '9Qr4Z5sT...'
  }
];

export function CampaignHistory() {
  return (
    <Card className="shadow-lg border-0">
      <CardHeader className="bg-gradient-to-r from-gray-700 to-gray-900 text-white rounded-t-lg">
        <CardTitle className="flex items-center">
          <History className="w-5 h-5 mr-2" />
          Campaign History
        </CardTitle>
      </CardHeader>
      <CardContent className="p-6">
        <div className="space-y-4">
          {campaigns.map((campaign) => (
            <div key={campaign.id} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
              <div className="flex justify-between items-start mb-3">
                <div>
                  <h4 className="font-medium text-gray-900">{campaign.id}</h4>
                  <p className="text-sm text-gray-600">{campaign.date}</p>
                </div>
                <Badge className="bg-green-100 text-green-800">
                  {campaign.status}
                </Badge>
              </div>

              <div className="grid grid-cols-2 gap-4 text-sm mb-4">
                <div className="flex justify-between">
                  <span className="text-gray-600">Leads:</span>
                  <span className="font-medium">{campaign.leads}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Conversion:</span>
                  <span className="font-medium text-green-600">{campaign.conversionRate}</span>
                </div>
              </div>

              <div className="flex space-x-2">
                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant="outline" size="sm">
                      <Eye className="w-3 h-3 mr-1" />
                      View Details
                    </Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Campaign Details - {campaign.id}</DialogTitle>
                    </DialogHeader>
                    <div className="space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="text-sm font-medium text-gray-700">Campaign ID</label>
                          <p className="text-gray-900">{campaign.id}</p>
                        </div>
                        <div>
                          <label className="text-sm font-medium text-gray-700">Date</label>
                          <p className="text-gray-900">{campaign.date}</p>
                        </div>
                        <div>
                          <label className="text-sm font-medium text-gray-700">Total Leads</label>
                          <p className="text-gray-900">{campaign.leads}</p>
                        </div>
                        <div>
                          <label className="text-sm font-medium text-gray-700">Conversion Rate</label>
                          <p className="text-green-600 font-medium">{campaign.conversionRate}</p>
                        </div>
                      </div>
                      <div>
                        <label className="text-sm font-medium text-gray-700">Blockchain Transaction</label>
                        <p className="text-gray-900 font-mono text-sm">{campaign.txHash}</p>
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>

                <Button variant="outline" size="sm">
                  <ExternalLink className="w-3 h-3 mr-1" />
                  View on Solscan
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 text-center">
          <Button variant="outline" className="text-gray-600">
            Load More Campaigns
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}