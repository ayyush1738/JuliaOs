'use client';

import React, { createContext, useContext, useState } from 'react';

interface WalletContextType {
  isConnected: boolean;
  walletAddress: string | null;
  connectWallet: () => Promise<void>;
  disconnectWallet: () => void;
}

const WalletContext = createContext<WalletContextType | undefined>(undefined);

export function WalletProvider({ children }: { children: React.ReactNode }) {
  const [isConnected, setIsConnected] = useState(false);
  const [walletAddress, setWalletAddress] = useState<string | null>(null);

  const connectWallet = async () => {
    try {
      // Simulate wallet connection
      await new Promise(resolve => setTimeout(resolve, 1500));
      const mockAddress = "7xKXtg2CW87d97TXJSDpbD5jBkheTqA83TZRuJosgAsU";
      setWalletAddress(mockAddress);
      setIsConnected(true);
    } catch (error) {
      console.error('Failed to connect wallet:', error);
    }
  };

  const disconnectWallet = () => {
    setIsConnected(false);
    setWalletAddress(null);
  };

  return (
    <WalletContext.Provider value={{
      isConnected,
      walletAddress,
      connectWallet,
      disconnectWallet
    }}>
      {children}
    </WalletContext.Provider>
  );
}

export function useWallet() {
  const context = useContext(WalletContext);
  if (context === undefined) {
    throw new Error('useWallet must be used within a WalletProvider');
  }
  return context;
}