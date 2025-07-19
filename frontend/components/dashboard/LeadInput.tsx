'use client';

import { useState } from 'react';
import { Upload, Search, Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import LoadingButton from '@/components/ui/LoadingButton';
import { Lead } from '@/types';

interface LeadInputProps {
  onLeadsGenerated: (leads: Lead[]) => void;
}

export default function LeadInput({ onLeadsGenerated }: LeadInputProps) {
  const [keywords, setKeywords] = useState('');
  const [csvData, setCsvData] = useState('');

  const runLeadScraper = async () => {
    // Mock lead generation
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    const mockLeads: Lead[] = [
      {
        id: '1',
        name: 'Sarah Chen',
        email: 'sarah.chen@healthtech.io',
        company: 'HealthTech Solutions',
        title: 'CTO',
      },
      {
        id: '2',
        name: 'Michael Rodriguez',
        email: 'm.rodriguez@medflow.com',
        company: 'MedFlow',
        title: 'VP Engineering',
      },
      {
        id: '3',
        name: 'Emily Watson',
        email: 'emily@carebridge.com',
        company: 'CareBridge',
        title: 'Head of Technology',
      },
    ];
    
    onLeadsGenerated(mockLeads);
  };

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      // Mock CSV processing
      const mockLeads: Lead[] = [
        {
          id: '4',
          name: 'John Smith',
          email: 'john@company.com',
          company: 'Tech Corp',
        },
        {
          id: '5',
          name: 'Jane Doe',
          email: 'jane@startup.io',
          company: 'AI Startup',
        },
      ];
      onLeadsGenerated(mockLeads);
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <Search className="h-5 w-5" />
          <span>Lead Input</span>
        </CardTitle>
        <CardDescription>
          Upload a CSV file or specify search criteria for AI agents to find leads
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="keywords" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="keywords">Search Keywords</TabsTrigger>
            <TabsTrigger value="upload">Upload CSV</TabsTrigger>
          </TabsList>
          
          <TabsContent value="keywords" className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Search Criteria
              </label>
              <Textarea
                placeholder="e.g., CTOs in healthtech, VPs at SaaS companies, founders in fintech..."
                value={keywords}
                onChange={(e) => setKeywords(e.target.value)}
                rows={3}
              />
            </div>
            <LoadingButton
              onClick={runLeadScraper}
              className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
              disabled={!keywords.trim()}
            >
              <Search className="mr-2 h-4 w-4" />
              Run LeadScraper Agent
            </LoadingButton>
          </TabsContent>
          
          <TabsContent value="upload" className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Upload CSV File
              </label>
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-gray-400 transition-colors">
                <Upload className="mx-auto h-12 w-12 text-gray-400" />
                <div className="mt-4">
                  <label htmlFor="file-upload" className="cursor-pointer">
                    <span className="mt-2 block text-sm font-medium text-gray-900">
                      Click to upload or drag and drop
                    </span>
                    <span className="mt-1 block text-xs text-gray-500">
                      CSV files with name, email, company columns
                    </span>
                  </label>
                  <input
                    id="file-upload"
                    name="file-upload"
                    type="file"
                    accept=".csv"
                    className="sr-only"
                    onChange={handleFileUpload}
                  />
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
}