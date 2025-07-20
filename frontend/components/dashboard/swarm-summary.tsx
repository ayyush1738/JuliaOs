'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { GitBranch, Loader2, CheckCircle, Clock } from 'lucide-react';
import { toast } from 'sonner';

const agents = [
  { id: 1, name: 'LeadScraper', status: 'completed', progress: 100 },
  { id: 2, name: 'Enricher', status: 'running', progress: 65 },
  { id: 3, name: 'EmailWriter', status: 'pending', progress: 0 }
];

export function SwarmSummary() {
  const [isRunning, setIsRunning] = useState(false);
  const [swarmProgress, setSwarmProgress] = useState(0);

  const runSwarm = async () => {
    setIsRunning(true);
    toast.info('Swarm workflow initiated...');
    
    // Simulate progressive execution
    for (let i = 0; i <= 100; i += 10) {
      setSwarmProgress(i);
      await new Promise(resolve => setTimeout(resolve, 300));
    }
    
    setIsRunning(false);
    toast.success('Swarm execution completed! All agents finished successfully');
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed':
        return <CheckCircle className="w-4 h-4 text-green-500" />;
      case 'running':
        return <Loader2 className="w-4 h-4 text-blue-500 animate-spin" />;
      default:
        return <Clock className="w-4 h-4 text-gray-400" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'bg-green-100 text-green-800';
      case 'running':
        return 'bg-blue-100 text-blue-800';
      default:
        return 'bg-gray-100 text-gray-600';
    }
  };

  return (
    <Card className="shadow-lg border-0">
      <CardHeader className="bg-gradient-to-r from-green-500 to-teal-500 text-white rounded-t-lg">
        <CardTitle className="flex items-center">
          <GitBranch className="w-5 h-5 mr-2" />
          Swarm Workflow Summary
        </CardTitle>
      </CardHeader>
      <CardContent className="p-6">
        <div className="mb-6">
          <div className="flex justify-between items-center mb-4">
            <h4 className="font-medium text-gray-900">Agent Pipeline</h4>
            <Button 
              onClick={runSwarm}
              disabled={isRunning}
              className="bg-gradient-to-r from-green-600 to-teal-600 hover:from-green-700 hover:to-teal-700 text-white"
            >
              {isRunning ? (
                <>
                  <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                  Running Swarm...
                </>
              ) : (
                'Run All Agents as Swarm'
              )}
            </Button>
          </div>

          {/* Visual Timeline */}
          <div className="space-y-4">
            {agents.map((agent, index) => (
              <div key={agent.id} className="flex items-center space-x-4">
                <div className="flex items-center space-x-2 w-40">
                  {getStatusIcon(agent.status)}
                  <span className="font-medium text-gray-900">{agent.name}</span>
                </div>
                
                <div className="flex-1">
                  <Progress value={agent.progress} className="h-2" />
                </div>
                
                <Badge className={getStatusColor(agent.status)}>
                  {agent.status}
                </Badge>

                {index < agents.length - 1 && (
                  <div className="absolute left-6 mt-6 w-px h-4 bg-gray-300"></div>
                )}
              </div>
            ))}
          </div>

          {isRunning && (
            <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
              <div className="flex items-center justify-between mb-2">
                <span className="font-medium text-blue-900">Overall Progress</span>
                <span className="text-blue-700">{swarmProgress}%</span>
              </div>
              <Progress value={swarmProgress} className="h-3" />
            </div>
          )}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
          <div className="p-4 bg-gray-50 rounded-lg">
            <div className="text-2xl font-bold text-gray-900">47</div>
            <div className="text-sm text-gray-600">Leads Processed</div>
          </div>
          <div className="p-4 bg-gray-50 rounded-lg">
            <div className="text-2xl font-bold text-green-600">92%</div>
            <div className="text-sm text-gray-600">Success Rate</div>
          </div>
          <div className="p-4 bg-gray-50 rounded-lg">
            <div className="text-2xl font-bold text-blue-600">2.3min</div>
            <div className="text-sm text-gray-600">Avg Processing</div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}