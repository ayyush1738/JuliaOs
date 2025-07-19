export interface Lead {
  id: string;
  name: string;
  email: string;
  company: string;
  title?: string;
  linkedinUrl?: string;
  companyDomain?: string;
  enriched?: boolean;
  emailGenerated?: boolean;
  generatedEmail?: string;
}

export interface Campaign {
  id: string;
  name: string;
  timestamp: string;
  leadCount: number;
  status: 'completed' | 'pending' | 'failed';
  onchainTxId?: string;
}

export interface AgentExecution {
  id: string;
  name: string;
  status: 'idle' | 'running' | 'completed' | 'failed';
  timestamp?: string;
  duration?: number;
}

export interface WalletState {
  connected: boolean;
  address?: string;
  balance?: number;
}