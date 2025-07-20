'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Upload, Search, Loader2 } from 'lucide-react';
import { toast } from 'sonner';

export function LeadInput() {
  const [isRunning, setIsRunning] = useState(false);
  const [keywords, setKeywords] = useState('');

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      toast.success(`CSV file "${file.name}" uploaded successfully`);
    }
  };

  const runLeadScraper = async () => {
    setIsRunning(true);
    toast.info('LeadScraper Agent started...');
    
    // Simulate agent execution
    await new Promise(resolve => setTimeout(resolve, 3000));
    
    setIsRunning(false);
    toast.success('LeadScraper Agent completed! Found 47 potential leads');
  };

  return (
    <Card className="shadow-2xl border-0 overflow-hidden">
      <CardHeader className="bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 text-white">
        <CardTitle className="flex items-center text-xl">
          <Search className="w-6 h-6 mr-3" />
          🎯 Lead Discovery Engine
        </CardTitle>
        <p className="text-purple-100 mt-2">Deploy AI agents to discover your ideal prospects</p>
      </CardHeader>
      <CardContent className="p-8 bg-gradient-to-br from-white to-purple-50/30">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* CSV Upload */}
          <div className="space-y-4">
            <Label htmlFor="csv-upload" className="text-lg font-semibold text-gray-800 flex items-center">
              📊 Upload Lead Database
            </Label>
            <div className="border-2 border-dashed border-purple-300 rounded-xl p-8 text-center hover:border-purple-500 transition-all duration-300 bg-white/50 backdrop-blur-sm">
              <Upload className="w-12 h-12 text-purple-400 mx-auto mb-4" />
              <Label htmlFor="csv-upload" className="cursor-pointer">
                <span className="text-lg text-gray-700 font-medium">
                  Drop your CSV file here or <span className="text-purple-600 font-bold hover:text-purple-700">browse files</span>
                </span>
                <Input
                  id="csv-upload"
                  type="file"
                  accept=".csv"
                  className="hidden"
                  onChange={handleFileUpload}
                />
              </Label>
              <p className="text-sm text-gray-500 mt-3 font-medium">
                📋 Expected: name, email, company, title
              </p>
            </div>
          </div>

          {/* Keyword Input */}
          <div className="space-y-4">
            <Label htmlFor="keywords" className="text-lg font-semibold text-gray-800 flex items-center">
              🎯 AI Target Parameters
            </Label>
            <Textarea
              id="keywords"
              placeholder="e.g., CTOs at Series B+ healthtech startups with 50-500 employees, Marketing directors at B2B SaaS companies in North America"
              value={keywords}
              onChange={(e) => setKeywords(e.target.value)}
              className="min-h-[120px] resize-none text-lg border-purple-200 focus:border-purple-500 bg-white/70 backdrop-blur-sm"
            />
            <p className="text-sm text-gray-600 font-medium">
              🤖 Describe your ideal customer profile for AI-powered discovery
            </p>
          </div>
        </div>

        <div className="mt-8 flex justify-center">
          <Button 
            onClick={runLeadScraper}
            disabled={isRunning}
            className="bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 hover:from-purple-700 hover:via-blue-700 hover:to-indigo-700 text-white px-12 py-4 text-lg font-bold rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 neon-border"
          >
            {isRunning ? (
              <>
                <Loader2 className="w-5 h-5 mr-3 animate-spin" />
                🚀 AI Agents Hunting Leads...
              </>
            ) : (
              <>
                <Search className="w-5 h-5 mr-3" />
                🚀 Deploy LeadScraper Agents
              </>
            )}
          </Button>
        </div>

        {/* Stats Preview */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="text-center p-4 bg-white/60 backdrop-blur-sm rounded-xl border border-purple-200">
            <div className="text-2xl font-black gradient-text">1M+</div>
            <div className="text-sm text-gray-600 font-medium">Prospect Database</div>
          </div>
          <div className="text-center p-4 bg-white/60 backdrop-blur-sm rounded-xl border border-purple-200">
            <div className="text-2xl font-black gradient-text">50+</div>
            <div className="text-sm text-gray-600 font-medium">Data Sources</div>
          </div>
          <div className="text-center p-4 bg-white/60 backdrop-blur-sm rounded-xl border border-purple-200">
            <div className="text-2xl font-black gradient-text">98.7%</div>
            <div className="text-sm text-gray-600 font-medium">Accuracy Rate</div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}