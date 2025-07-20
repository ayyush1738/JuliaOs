'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Star, Users, TrendingUp, Award } from 'lucide-react';

const metrics = [
  {
    icon: Users,
    value: '10,000+',
    label: 'Active Users',
    description: 'Sales teams worldwide',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    icon: TrendingUp,
    value: '$50M+',
    label: 'Revenue Generated',
    description: 'For our customers',
    color: 'from-green-500 to-emerald-500'
  },
  {
    icon: Star,
    value: '4.9/5',
    label: 'Customer Rating',
    description: 'Based on 2,500+ reviews',
    color: 'from-yellow-500 to-orange-500'
  },
  {
    icon: Award,
    value: '99.9%',
    label: 'Uptime SLA',
    description: 'Blockchain guaranteed',
    color: 'from-purple-500 to-pink-500'
  }
];

const testimonials = [
  {
    quote: "LeadGenius increased our qualified leads by 400% in just 30 days. The AI agents work 24/7 and never miss a prospect.",
    author: "Marcus Johnson",
    title: "CTO, InnovateLabs",
    rating: 5
  },
  {
    quote: "The blockchain verification gives us complete transparency into our lead generation ROI. Game-changing technology.",
    author: "Elena Rodriguez",
    title: "Head of Growth, DataFlow",
    rating: 5
  },
  {
    quote: "We replaced our entire SDR team with LeadGenius agents. Same results, 90% lower cost, and they never take sick days.",
    author: "David Kim",
    title: "Founder, StartupX",
    rating: 5
  }
];

export function TrustSection() {
  return (
    <section className="py-24 bg-gradient-to-b from-purple-50/30 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Trust Metrics */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center rounded-full px-4 py-2 text-sm font-medium bg-green-100 text-green-700 mb-6">
            ✅ Trusted by Industry Leaders
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-gray-900 mb-6 gradient-text">
            Proven Results at Scale
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto font-medium">
            Join thousands of companies that have transformed their sales pipeline with AI-powered lead generation
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {metrics.map((metric, index) => (
            <Card key={index} className="text-center border-0 shadow-xl card-hover bg-white/80 backdrop-blur-sm">
              <CardContent className="p-8">
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${metric.color} mb-4`}>
                  <metric.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-black gradient-text mb-2">{metric.value}</div>
                <div className="text-lg font-bold text-gray-900 mb-1">{metric.label}</div>
                <div className="text-sm text-gray-600">{metric.description}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Testimonials */}
        <div className="text-center mb-12">
          <h3 className="text-3xl sm:text-4xl font-black text-gray-900 mb-4">
            What Our Customers Say
          </h3>
          <p className="text-lg text-gray-600">
            Real results from real companies using LeadGenius
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-0 shadow-xl card-hover bg-white/90 backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <blockquote className="text-gray-700 mb-6 italic leading-relaxed">
                  "{testimonial.quote}"
                </blockquote>
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 mr-4"></div>
                  <div className="text-left">
                    <div className="font-bold text-gray-900">{testimonial.author}</div>
                    <div className="text-sm text-gray-600">{testimonial.title}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Security Badges */}
        <div className="mt-20 text-center">
          <p className="text-lg font-semibold text-gray-700 mb-8">
            Enterprise-grade security and compliance
          </p>
          <div className="flex justify-center items-center space-x-8 flex-wrap gap-4">
            <Badge variant="outline" className="px-4 py-2 text-sm font-semibold border-2">
              🔒 SOC 2 Compliant
            </Badge>
            <Badge variant="outline" className="px-4 py-2 text-sm font-semibold border-2">
              🛡️ GDPR Ready
            </Badge>
            <Badge variant="outline" className="px-4 py-2 text-sm font-semibold border-2">
              ⚡ Solana Verified
            </Badge>
            <Badge variant="outline" className="px-4 py-2 text-sm font-semibold border-2">
              🏆 ISO 27001
            </Badge>
          </div>
        </div>
      </div>
    </section>
  );
}