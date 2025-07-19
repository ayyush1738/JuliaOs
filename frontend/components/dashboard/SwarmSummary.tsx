'use client';

import { useState, useEffect } from 'react';
import { Zap, CheckCircle, Clock, AlertCircle } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import LoadingButton from '@/components/ui/LoadingButton';
import { AgentExecution } from '@/types';

interface SwarmSummaryProps {
  onRunSwarm: () => Promise<void>;
}

export default function SwarmSummary({ onRunSwarm }: SwarmSummaryProps) {
  const [agents, setAgents] = useState<AgentExecution[]>([
    { id: '1', name: 'LeadScraper Agent', status: 'idle' },
    { id: '2', name: 'Enrichment Agent', status: 'idle' },
    { id: '3', name: 'Email Writer Agent', status: 'idle' },
  ]);

  const runAllAgents = async () => {
    // Reset agents
    setAgents(prev => prev.map(agent => ({ ...agent, status: 'idle' })));
    
    // Run scraper
    setAgents(prev => prev.map(agent => 
      agent.id === '1' ? { ...agent, status: 'running', timestamp: new Date().toISOString() } : agent
    ));
    await new Promise(resolve => setTimeout(resolve, 2000));
    setAgents(prev => prev.map(agent => 
      agent.id === '1' ? { ...agent, status: 'completed', duration: 2000 } : agent
    ));

    // Run enrichment
    setAgents(prev => prev.map(agent => 
      agent.id === '2' ? { ...agent, status: 'running', timestamp: new Date().toISOString() } : agent
    ));
    await new Promise(resolve => setTimeout(resolve, 3000));
    setAgents(prev => prev.map(agent => 
      agent.id === '2' ? { ...agent, status: 'completed', duration: 3000 } : agent
    ));

    // Run email generation
    setAgents(prev => prev.map(agent => 
      agent.id === '3' ? { ...agent, status: 'running', timestamp: new Date().toISOString() } : agent
    ));
    await new Promise(resolve => setTimeout(resolve, 2500));
    setAgents(prev => prev.map(agent => 
      agent.id === '3' ? { ...agent, status: 'completed', duration: 2500 } : agent
    ));

    // Call parent function
    await onRunSwarm();
  };

  const getStatusIcon = (status: AgentExecution['status']) => {
    switch (status) {
      case 'running':
        return <Clock className="h-4 w-4 text-yellow-500 animate-pulse" />;
      case 'completed':
        return <CheckCircle className="h-4 w-4 text-green-500" />;
      case 'failed':
        return <AlertCircle className="h-4 w-4 text-red-500" />;
      default:
        return <div className="h-4 w-4 bg-gray-300 rounded-full" />;
    }
  };

  const getStatusColor = (status: AgentExecution['status']) => {
    switch (status) {
      case 'running':
        return 'bg-yellow-500';
      case 'completed':
        return 'bg-green-500';
      case 'failed':
        return 'bg-red-500';
      default:
        return 'bg-gray-300';
    }
  };

  const completedAgents = agents.filter(agent => agent.status === 'completed').length;
  const progress = (completedAgents / agents.length) * 100;

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Zap className="h-5 w-5" />
            <span>Swarm Summary</span>
          </div>
          <LoadingButton
            onClick={runAllAgents}
            className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
          >
            Run All Agents as Swarm
          </LoadingButton>
        </CardTitle>
        <CardDescription>
          Orchestrated execution of AI agents for complete lead generation workflow
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {/* Progress Bar */}
          <div>
            <div className="flex justify-between text-sm text-gray-600 mb-2">
              <span>Overall Progress</span>
              <span>{completedAgents}/{agents.length} agents completed</span>
            </div>
            <Progress value={progress} className="h-2" />
          </div>

          {/* Agent Timeline */}
          <div className="space-y-4">
            <h4 className="font-medium text-gray-900">Agent Execution Timeline</h4>
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gray-200"></div>
              
              {agents.map((agent, index) => (
                <div key={agent.id} className="relative flex items-center space-x-4 pb-6">
                  {/* Timeline dot */}
                  <div className={`relative z-10 w-3 h-3 rounded-full ${getStatusColor(agent.status)}`}>
                    {agent.status === 'running' && (
                      <div className="absolute inset-0 w-3 h-3 rounded-full bg-yellow-500 animate-ping"></div>
                    )}
                  </div>
                  
                  {/* Agent info */}
                  <div className="flex-1 flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center space-x-3">
                      {getStatusIcon(agent.status)}
                      <div>
                        <h5 className="font-medium text-gray-900">{agent.name}</h5>
                        {agent.timestamp && (
                          <p className="text-xs text-gray-500">
                            {agent.status === 'completed' && agent.duration
                              ? `Completed in ${(agent.duration / 1000).toFixed(1)}s`
                              : agent.status === 'running'
                              ? 'Running...'
                              : new Date(agent.timestamp).toLocaleTimeString()
                            }
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}