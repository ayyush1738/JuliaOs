import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Toaster } from '@/components/ui/sonner';
import { WalletProvider } from '@/components/providers/wallet-provider';

const inter = Inter({ subsets: ['latin'] });

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
      <body className={inter.className}>
        <WalletProvider>
          {children}
          <Toaster />
        </WalletProvider>
      </body>
    </html>
  );
}