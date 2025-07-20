'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useWallet } from '@/components/providers/wallet-provider';
import { Wallet, Zap } from 'lucide-react';

export function Navbar() {
  const pathname = usePathname();
  const { isConnected, walletAddress, connectWallet, disconnectWallet } = useWallet();

  const truncateAddress = (address: string) => {
    return `${address.slice(0, 4)}...${address.slice(-4)}`;
  };

  return (
    <nav className="absolute z-50 top-0 w-full">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-purple-500 via-blue-600 to-indigo-600 flex items-center justify-center shadow-lg">
              <Zap className="h-5 w-5 text-white" />
            </div>
            <span className="text-2xl font-bold gradient-text">
              LeadGenius
            </span>
            <div className="hidden sm:flex items-center ml-2">
              <span className="text-xs font-semibold bg-gradient-to-r from-purple-600 to-blue-600 text-white px-2 py-1 rounded-full">
                AI
              </span>
            </div>
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              href="/" 
              className={`text-sm font-medium transition-colors hover:text-purple-600 ${
                pathname === '/' ? 'text-purple-600' : 'text-gray-600'
              }`}
            >
              Home
            </Link>
            <Link 
              href="/dashboard" 
              className={`text-sm font-medium transition-colors hover:text-purple-600 ${
                pathname === '/dashboard' ? 'text-purple-600' : 'text-gray-600'
              }`}
            >
              Dashboard
            </Link>
          </div>

          {/* Wallet Connection */}
          <div className="flex items-center space-x-4">
            {isConnected ? (
              <div className="flex items-center space-x-2">
                <Badge variant="secondary" className="bg-gradient-to-r from-green-400 to-emerald-500 text-white shadow-lg">
                  <div className="w-2 h-2 rounded-full bg-green-500 mr-2"></div>
                  {truncateAddress(walletAddress!)}
                </Badge>
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={disconnectWallet}
                  className="hidden sm:flex"
                >
                  Disconnect
                </Button>
              </div>
            ) : (
              <Button 
                onClick={connectWallet}
                className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 neon-border"
              >
                <Wallet className="w-4 h-4 mr-2" />
                Connect Wallet
              </Button>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}