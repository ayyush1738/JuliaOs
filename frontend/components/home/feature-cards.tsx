import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Brain, PenTool, Link2, Zap, Target, Shield } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

const features = [
  {
    icon: Brain,
    title: 'Autonomous Lead Discovery',
    description: 'Deploy intelligent AI agents that autonomously discover, qualify, and score your ideal prospects using advanced machine learning algorithms and real-time market data.',
    gradient: 'from-purple-500 to-purple-600',
    badge: 'AI-Powered',
    stats: '10x Faster'
  },
  {
    icon: PenTool,
    title: 'Hyper-Personalized Outreach',
    description: 'Generate compelling, personalized cold emails using advanced LLMs that analyze prospect behavior, company data, and industry trends for maximum conversion rates.',
    gradient: 'from-blue-500 to-blue-600',
    badge: 'LLM-Crafted',
    stats: '15x Higher CTR'
  },
  {
    icon: Link2,
    title: 'Blockchain-Verified Results',
    description: 'Immutable campaign tracking and lead attribution powered by Solana blockchain technology. Every interaction is verified, transparent, and permanently recorded.',
    gradient: 'from-indigo-500 to-indigo-600',
    badge: 'Web3 Native',
    stats: '100% Transparent'
  }
];

const additionalFeatures = [
  {
    icon: Zap,
    title: 'Lightning-Fast Deployment',
    description: 'Launch your AI agent swarm in under 60 seconds',
    color: 'text-yellow-500'
  },
  {
    icon: Target,
    title: 'Precision Targeting',
    description: 'Advanced filtering with 50+ data points per prospect',
    color: 'text-red-500'
  },
  {
    icon: Shield,
    title: 'Enterprise Security',
    description: 'Bank-grade encryption with decentralized data storage',
    color: 'text-green-500'
  }
];

export function FeatureCards() {
  return (
    <section className="py-24 relative bg-gradient-to-b from-transparent to-purple-50/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20 animate-slide-up">
          <div className="inline-flex items-center rounded-full px-4 py-2 text-sm font-medium bg-purple-100 text-purple-700 mb-6">
            🚀 Revolutionary Technology
          </div>
          <h2 className="text-4xl sm:text-6xl font-black text-gray-900 mb-6 gradient-text">
            The Future of Lead Generation
          </h2>
          <p className="text-xl sm:text-2xl text-gray-700 max-w-4xl mx-auto font-medium leading-relaxed">
            Harness the power of <span className="gradient-text font-bold">autonomous AI agents</span> and <span className="gradient-text font-bold">Web3 technology</span> to scale your outreach beyond human limitations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto mb-20">
          {features.map((feature, index) => (
            <Card 
              key={index}
              className="group relative overflow-hidden border-0 shadow-xl hover:shadow-3xl card-hover glass-card neon-border animate-scale-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardHeader className="pb-4">
                <div className="flex justify-between items-start mb-4">
                  <div className={`inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-gradient-to-r ${feature.gradient} shadow-lg group-hover:scale-110 transition-transform duration-500`}>
                    <feature.icon className="w-10 h-10 text-white" />
                  </div>
                  <Badge variant="secondary" className="bg-white/80 text-gray-700 font-semibold">
                    {feature.badge}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="pt-0 text-center">
                <h3 className="text-2xl font-black text-gray-900 mb-4 group-hover:gradient-text transition-all duration-300">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6 text-lg">
                  {feature.description}
                </p>
                <div className="text-center">
                  <span className={`inline-block px-4 py-2 rounded-full bg-gradient-to-r ${feature.gradient} text-white font-bold text-sm`}>
                    {feature.stats}
                  </span>
                </div>
              </CardContent>
              
              {/* Gradient border on hover */}
              <div className={`absolute inset-0 rounded-lg bg-gradient-to-r ${feature.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500 -z-10`} 
                   style={{ padding: '2px' }}>
                <div className="w-full h-full rounded-lg bg-white"></div>
              </div>
            </Card>
          ))}
        </div>

        {/* Additional Features */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto mb-16">
          {additionalFeatures.map((feature, index) => (
            <div key={index} className="text-center p-6 rounded-xl bg-white/60 backdrop-blur-sm border border-white/20 hover:bg-white/80 transition-all duration-300">
              <feature.icon className={`w-8 h-8 ${feature.color} mx-auto mb-3`} />
              <h4 className="font-bold text-gray-900 mb-2">{feature.title}</h4>
              <p className="text-sm text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 rounded-3xl p-12 text-white shadow-2xl max-w-4xl mx-auto">
            <h3 className="text-3xl sm:text-4xl font-black mb-4">
              Ready to 10x Your Lead Generation?
            </h3>
            <p className="text-xl mb-8 opacity-90">
              Join thousands of companies already using AI agents to dominate their markets
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <div className="flex items-center space-x-2 text-lg font-semibold">
                <span>✨</span>
                <span>No setup fees</span>
              </div>
              <div className="hidden sm:block w-px h-6 bg-white/30"></div>
              <div className="flex items-center space-x-2 text-lg font-semibold">
                <span>⚡</span>
                <span>60-second deployment</span>
              </div>
              <div className="hidden sm:block w-px h-6 bg-white/30"></div>
              <div className="flex items-center space-x-2 text-lg font-semibold">
                <span>🔒</span>
                <span>Blockchain secured</span>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonial */}
        <div className="mt-20 text-center max-w-3xl mx-auto">
          <blockquote className="text-2xl font-medium text-gray-700 mb-6 italic">
            "LeadGenius transformed our sales pipeline. We went from 50 leads per month to 2,000+ qualified prospects with 10x better conversion rates."
          </blockquote>
          <div className="flex items-center justify-center space-x-4">
            <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-500 to-blue-500"></div>
            <div className="text-left">
              <div className="font-bold text-gray-900">Sarah Chen</div>
              <div className="text-gray-600">VP of Sales, TechCorp</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}