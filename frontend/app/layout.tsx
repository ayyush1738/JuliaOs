// app/layout.tsx
import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google'; // ✅ Use Inter
import { Toaster } from '@/components/ui/sonner';
import { WalletProvider } from '@/components/providers/wallet-provider';

const inter = Inter({ subsets: ['latin'] }); // ✅ Inter font setup

export const metadata: Metadata = {
  title: 'LeadGenius - AI-Powered Lead Generation on Web3',
  description: 'Run decentralized agents that find, enrich, and write to your ideal customers using JuliaOS and Solana.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}> {/* ✅ Apply Inter globally */}
        <WalletProvider>
          {children}
          <Toaster />

          {/* Glitch Filter SVG */}
          <svg style={{ display: 'none' }}>
            <filter id="glitch">
              <feColorMatrix type="matrix" values="1 0 0 0 0  
                                                    0 1 0 0 0  
                                                    0 0 1 0 0  
                                                    0 0 0 1 0" result="r"/>
              <feOffset in="r" dx="2" dy="0" result="r1"/>
              <feOffset in="r" dx="-2" dy="0" result="r2"/>
              <feBlend in="r1" in2="r2" mode="screen"/>
            </filter>
          </svg>
        </WalletProvider>
      </body>
    </html>
  );
}
