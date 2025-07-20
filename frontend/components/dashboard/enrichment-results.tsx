'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Users, ExternalLink, Loader2 } from 'lucide-react';
import { toast } from 'sonner';

const mockLeads = [
  { id: 1, name: 'Sarah Chen', email: 'sarah@techcorp.com', title: 'VP Engineering', company: 'TechCorp', linkedin: 'linkedin.com/in/sarahchen', domain: 'techcorp.com' },
  { id: 2, name: 'Marcus Johnson', email: 'm.johnson@innovate.io', title: 'CTO', company: 'Innovate Solutions', linkedin: 'linkedin.com/in/marcusj', domain: 'innovate.io' },
  { id: 3, name: 'Elena Rodriguez', email: 'elena.r@dataflow.co', title: 'Head of Data', company: 'DataFlow Inc', linkedin: 'linkedin.com/in/elenarodriguez', domain: 'dataflow.co' },
  { id: 4, name: 'David Kim', email: 'dkim@startupx.com', title: 'Founder & CEO', company: 'StartupX', linkedin: 'linkedin.com/in/davidkim', domain: 'startupx.com' },
];

export function EnrichmentResults() {
  const [isEnriching, setIsEnriching] = useState(false);
  const [enriched, setEnriched] = useState(false);

  const runEnrichment = async () => {
    setIsEnriching(true);
    toast.info('Enrichment Agent started...');
    
    await new Promise(resolve => setTimeout(resolve, 2500));
    
    setIsEnriching(false);
    setEnriched(true);
    toast.success('Lead enrichment completed! Enhanced 47 profiles');
  };

  return (
    <Card className="shadow-lg border-0">
      <CardHeader className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white rounded-t-lg">
        <CardTitle className="flex items-center justify-between">
          <div className="flex items-center">
            <Users className="w-5 h-5 mr-2" />
            Enrichment Results
          </div>
          <Badge variant="secondary" className="bg-white/20 text-white">
            {mockLeads.length} leads
          </Badge>
        </CardTitle>
      </CardHeader>
      <CardContent className="p-6">
        <div className="mb-4 flex justify-between items-center">
          <p className="text-gray-600">
            AI-enriched lead profiles with contact information and company data
          </p>
          <Button 
            onClick={runEnrichment}
            disabled={isEnriching}
            variant="outline"
            className="border-blue-300 text-blue-600 hover:bg-blue-50"
          >
            {isEnriching ? (
              <>
                <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                Enriching...
              </>
            ) : (
              'Run Enrichment Agent'
            )}
          </Button>
        </div>

        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Title</TableHead>
                <TableHead>Company</TableHead>
                <TableHead>LinkedIn</TableHead>
                <TableHead>Domain</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {mockLeads.map((lead) => (
                <TableRow key={lead.id} className="hover:bg-gray-50">
                  <TableCell className="font-medium">{lead.name}</TableCell>
                  <TableCell>{lead.email}</TableCell>
                  <TableCell>
                    <Badge variant="outline" className="text-xs">
                      {lead.title}
                    </Badge>
                  </TableCell>
                  <TableCell>{lead.company}</TableCell>
                  <TableCell>
                    <a 
                      href={`https://${lead.linkedin}`} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center text-blue-600 hover:text-blue-800 text-sm"
                    >
                      <ExternalLink className="w-3 h-3 mr-1" />
                      Profile
                    </a>
                  </TableCell>
                  <TableCell>
                    <span className="text-sm text-gray-600">{lead.domain}</span>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        {enriched && (
          <div className="mt-4 p-4 bg-green-50 border border-green-200 rounded-lg">
            <p className="text-green-800 font-medium">
              ✅ Enrichment Complete: Added LinkedIn profiles, company domains, and verified email addresses
            </p>
          </div>
        )}
      </CardContent>
    </Card>
  );
}