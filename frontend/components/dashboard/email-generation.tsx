'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Mail, Loader2, Eye } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { toast } from 'sonner';

const emailPreviews = [
  {
    id: 1,
    recipient: 'Sarah Chen',
    subject: 'Quick question about TechCorp\'s engineering challenges',
    preview: 'Hi Sarah, I noticed your recent work on scaling TechCorp\'s infrastructure...',
    tone: 'professional'
  },
  {
    id: 2,
    recipient: 'Marcus Johnson',
    subject: 'Loved your insights on the CTO roundtable',
    preview: 'Hey Marcus! Just caught your interview on scaling tech teams...',
    tone: 'friendly'
  }
];

export function EmailGeneration() {
  const [isGenerating, setIsGenerating] = useState(false);
  const [selectedTone, setSelectedTone] = useState('professional');
  const [generated, setGenerated] = useState(false);

  const generateEmails = async () => {
    setIsGenerating(true);
    toast.info('LLM Email Agent started...');
    
    await new Promise(resolve => setTimeout(resolve, 4000));
    
    setIsGenerating(false);
    setGenerated(true);
    toast.success('Personalized emails generated for all 47 leads!');
  };

  return (
    <Card className="shadow-lg border-0">
      <CardHeader className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-t-lg">
        <CardTitle className="flex items-center">
          <Mail className="w-5 h-5 mr-2" />
          Email Generation
        </CardTitle>
      </CardHeader>
      <CardContent className="p-6">
        <div className="flex flex-col sm:flex-row gap-4 mb-6">
          <div className="flex-1">
            <label className="text-sm font-medium text-gray-700 mb-2 block">
              Email Tone
            </label>
            <Select value={selectedTone} onValueChange={setSelectedTone}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="friendly">🙂 Friendly</SelectItem>
                <SelectItem value="professional">💼 Professional</SelectItem>
                <SelectItem value="bold">⚡ Bold</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div className="flex items-end">
            <Button 
              onClick={generateEmails}
              disabled={isGenerating}
              className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white"
            >
              {isGenerating ? (
                <>
                  <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                  Generating...
                </>
              ) : (
                'Generate Emails using LLM Agent'
              )}
            </Button>
          </div>
        </div>

        {generated && (
          <div className="space-y-4">
            <div className="p-4 bg-purple-50 border border-purple-200 rounded-lg">
              <p className="text-purple-800 font-medium mb-2">
                ✨ Email Generation Complete
              </p>
              <p className="text-purple-700 text-sm">
                Personalized cold emails created using {selectedTone} tone for all leads
              </p>
            </div>

            <div className="grid gap-4">
              {emailPreviews.map((email) => (
                <div key={email.id} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h4 className="font-medium text-gray-900">To: {email.recipient}</h4>
                      <p className="text-sm font-medium text-gray-700">{email.subject}</p>
                    </div>
                    <Badge variant="outline" className="text-xs">
                      {email.tone}
                    </Badge>
                  </div>
                  <p className="text-gray-600 text-sm mb-3">{email.preview}</p>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button variant="outline" size="sm">
                        <Eye className="w-3 h-3 mr-1" />
                        Preview Full Email
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-2xl">
                      <DialogHeader>
                        <DialogTitle>Email Preview - {email.recipient}</DialogTitle>
                      </DialogHeader>
                      <div className="space-y-4">
                        <div className="border-b pb-4">
                          <p><strong>To:</strong> {email.recipient}</p>
                          <p><strong>Subject:</strong> {email.subject}</p>
                        </div>
                        <div className="bg-gray-50 p-4 rounded-lg">
                          <p className="whitespace-pre-line">
                            {email.preview}
                            
                            I've been following TechCorp's growth and was impressed by your recent achievements in scaling the engineering team. 

                            I'd love to share how our platform has helped similar companies reduce their lead generation costs by 60% while increasing quality leads by 3x.

                            Would you be open to a quick 15-minute call this week to explore how this could benefit TechCorp?

                            Best regards,
                            Alex Thompson
                          </p>
                        </div>
                      </div>
                    </DialogContent>
                  </Dialog>
                </div>
              ))}
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}