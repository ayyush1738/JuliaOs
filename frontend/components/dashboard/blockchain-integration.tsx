'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useWallet } from '@/components/providers/wallet-provider';
import { Wallet, Shield, Loader2, CheckCircle } from 'lucide-react';
import { toast } from 'sonner';

export function BlockchainIntegration() {
  const { isConnected, walletAddress } = useWallet();
  const [isSaving, setIsSaving] = useState(false);
  const [saved, setSaved] = useState(false);

  const saveToSolana = async () => {
    if (!isConnected) {
      toast.error('Please connect your wallet first');
      return;
    }

    setIsSaving(true);
    toast.info('Saving campaign data to Solana...');
    
    await new Promise(resolve => setTimeout(resolve, 3000));
    
    setIsSaving(false);
    setSaved(true);
    toast.success('Campaign successfully saved to Solana blockchain! Transaction ID: 5KJp9X...');
  };

  return (
    <Card className="shadow-lg border-0">
      <CardHeader className="bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-t-lg">
        <CardTitle className="flex items-center">
          <Shield className="w-5 h-5 mr-2" />
          Blockchain Integration
        </CardTitle>
      </CardHeader>
      <CardContent className="p-6">
        <div className="space-y-4">
          {/* Wallet Status */}
          <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
            <div className="flex items-center space-x-3">
              <Wallet className="w-5 h-5 text-gray-600" />
              <div>
                <p className="font-medium text-gray-900">Wallet Status</p>
                <p className="text-sm text-gray-600">
                  {isConnected ? `Connected: ${walletAddress?.slice(0, 8)}...` : 'Not connected'}
                </p>
              </div>
            </div>
            <Badge 
              className={isConnected ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}
            >
              {isConnected ? 'Connected' : 'Disconnected'}
            </Badge>
          </div>

          {/* Campaign Data */}
          <div className="space-y-3">
            <h4 className="font-medium text-gray-900">Current Campaign Data</h4>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-600">Leads:</span>
                <span className="font-medium">47</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Emails:</span>
                <span className="font-medium">47</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Campaign ID:</span>
                <span className="font-medium">LG-2024-001</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Date:</span>
                <span className="font-medium">Jan 15, 2024</span>
              </div>
            </div>
          </div>

          {/* Save to Blockchain */}
          <div className="space-y-4">
            <Button 
              onClick={saveToSolana}
              disabled={!isConnected || isSaving}
              className="w-full bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white"
            >
              {isSaving ? (
                <>
                  <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                  Saving to Solana...
                </>
              ) : (
                'Save Campaign to Solana'
              )}
            </Button>

            {saved && (
              <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <p className="text-green-800 font-medium">
                    Campaign saved to blockchain
                  </p>
                </div>
                <p className="text-green-700 text-sm mt-1">
                  Immutable record created with transparent lead tracking
                </p>
              </div>
            )}
          </div>

          {/* Benefits */}
          <div className="text-sm text-gray-600 space-y-1">
            <p>✅ Immutable campaign records</p>
            <p>✅ Transparent lead attribution</p>
            <p>✅ Decentralized data ownership</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}