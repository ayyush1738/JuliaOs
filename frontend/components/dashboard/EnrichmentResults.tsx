'use client';

import { useState } from 'react';
import { Users, ExternalLink, CheckCircle, Clock } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import LoadingButton from '@/components/ui/LoadingButton';
import { Lead } from '@/types';

interface EnrichmentResultsProps {
  leads: Lead[];
  onLeadsEnriched: (leads: Lead[]) => void;
}

export default function EnrichmentResults({ leads, onLeadsEnriched }: EnrichmentResultsProps) {
  const runEnrichment = async () => {
    // Mock enrichment process
    await new Promise(resolve => setTimeout(resolve, 3000));
    
    const enrichedLeads = leads.map(lead => ({
      ...lead,
      title: lead.title || ['CTO', 'VP Engineering', 'Head of Technology', 'Technical Director'][Math.floor(Math.random() * 4)],
      linkedinUrl: `https://linkedin.com/in/${lead.name.toLowerCase().replace(' ', '-')}`,
      companyDomain: `${lead.company.toLowerCase().replace(/\s+/g, '')}.com`,
      enriched: true,
    }));
    
    onLeadsEnriched(enrichedLeads);
  };

  if (leads.length === 0) {
    return (
      <Card className="opacity-50">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Users className="h-5 w-5" />
            <span>Enrichment Results</span>
          </CardTitle>
          <CardDescription>
            Lead enrichment results will appear here after running the scraper
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="text-center py-8 text-gray-500">
            No leads to enrich yet
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Users className="h-5 w-5" />
            <span>Enrichment Results</span>
            <Badge variant="secondary">{leads.length} leads</Badge>
          </div>
          <LoadingButton
            onClick={runEnrichment}
            variant="outline"
            disabled={leads.every(lead => lead.enriched)}
          >
            Run Enrichment Agent
          </LoadingButton>
        </CardTitle>
        <CardDescription>
          Enhanced lead data with LinkedIn profiles, company domains, and titles
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {leads.map((lead) => (
            <div
              key={lead.id}
              className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50 transition-colors"
            >
              <div className="flex-1">
                <div className="flex items-center space-x-3">
                  <div>
                    <h4 className="font-medium text-gray-900">{lead.name}</h4>
                    <p className="text-sm text-gray-600">{lead.email}</p>
                  </div>
                  {lead.enriched && (
                    <CheckCircle className="h-5 w-5 text-green-500" />
                  )}
                </div>
                <div className="mt-2 grid grid-cols-1 md:grid-cols-3 gap-2 text-sm">
                  <div>
                    <span className="font-medium">Company:</span> {lead.company}
                  </div>
                  {lead.title && (
                    <div>
                      <span className="font-medium">Title:</span> {lead.title}
                    </div>
                  )}
                  {lead.companyDomain && (
                    <div className="flex items-center space-x-1">
                      <span className="font-medium">Website:</span>
                      <a
                        href={`https://${lead.companyDomain}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:text-blue-800 flex items-center space-x-1"
                      >
                        <span>{lead.companyDomain}</span>
                        <ExternalLink className="h-3 w-3" />
                      </a>
                    </div>
                  )}
                </div>
              </div>
              <div className="flex items-center space-x-2">
                {lead.linkedinUrl && (
                  <a
                    href={lead.linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800"
                  >
                    <ExternalLink className="h-4 w-4" />
                  </a>
                )}
                {!lead.enriched && (
                  <Clock className="h-4 w-4 text-yellow-500" />
                )}
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}