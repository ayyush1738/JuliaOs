'use client';

import { useState } from 'react';
import { Wallet, ChevronDown, Wifi, WifiOff } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { WalletState } from '@/types';

export default function Header() {
  const [walletState, setWalletState] = useState<WalletState>({
    connected: false,
  });

  const connectWallet = () => {
    // Mock wallet connection
    setTimeout(() => {
      setWalletState({
        connected: true,
        address: 'DsVm...8K2L',
        balance: 2.45,
      });
    }, 1000);
  };

  const disconnectWallet = () => {
    setWalletState({ connected: false });
  };

  return (
    <header className="lg:ml-64 bg-white border-b border-gray-200 px-4 lg:px-6 py-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div className="ml-12 lg:ml-0">
            <h1 className="text-2xl font-bold text-gray-900">
              AI-Powered Lead Generation
            </h1>
            <p className="text-sm text-gray-600">
              Decentralized agents on Solana blockchain
            </p>
          </div>
        </div>

        <div className="flex items-center space-x-4">
          {/* Network Status */}
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <Wifi className="h-4 w-4 text-green-500" />
            <span>Solana Mainnet</span>
          </div>

          {/* Wallet Connection */}
          {walletState.connected ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="flex items-center space-x-2">
                  <Wallet className="h-4 w-4" />
                  <span>{walletState.address}</span>
                  <ChevronDown className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
                <DropdownMenuItem>
                  <div className="flex flex-col">
                    <span className="font-medium">{walletState.address}</span>
                    <span className="text-sm text-gray-500">
                      {walletState.balance} SOL
                    </span>
                  </div>
                </DropdownMenuItem>
                <DropdownMenuItem onClick={disconnectWallet}>
                  Disconnect Wallet
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <Button onClick={connectWallet} className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700">
              <Wallet className="h-4 w-4 mr-2" />
              Connect Wallet
            </Button>
          )}
        </div>
      </div>
    </header>
  );
}