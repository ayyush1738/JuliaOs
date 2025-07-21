import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles, Bot, Zap, Target, TrendingUp, Shield, Rocket } from 'lucide-react';
import FloatingElement from '@/components/ui/FloatingElement';
import AIAgentIllustration from '@/components/ui/AiAgentIllustration';

export function HeroSection() {
  return (
    <section className="relative overflow-hidden py-12 sm:py-28 min-h-screen">
      {/* Background Elements */}
      <div className="absolute inset-0 hero-gradient opacity-20"></div>
      
      {/* Background Text */}
      <div className="absolute inset-0 flex items-center justify-center opacity-5">
        <span className="text-9xl font-black text-gray-900 select-none">AI AGENTS</span>
      </div>

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 animate-slide-up">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left max-w-4xl mx-auto lg:mx-0">


            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-5xl font-black text-gray-900 mb-8 tracking-tight leading-none mt-10">
              <span className="gradient-text block">
                AI-Powered Lead
              </span>
              <span className="text-gray-900 block">Generation</span>
              <span className="gradient-text block">
                Revolution
              </span>
            </h1>

            {/* Subtext */}
            <p className="text-md sm:text-xl text-gray-700 mb-16 max-w-4xl mx-auto lg:mx-0 leading-relaxed font-medium">
              Deploy <span className="gradient-text font-bold">autonomous AI agents</span> that discover, enrich, and convert your ideal customers using cutting-edge Web3 technology.
            </p>

            {/* CTA Button */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start items-center mb-20">
              <a href="/dashboard">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 hover:from-purple-700 hover:via-blue-700 hover:to-indigo-700 text-white px-12 py-6 text-xl font-bold rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-500 animate-glow transform hover:scale-105 neon-border"
                >
                  Launch AI Agents
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </a>
              <Button
                variant="outline"
                size="lg"
                className="px-12 py-6 text-xl font-bold rounded-2xl border-2 border-purple-300 hover:border-purple-400 hover:bg-purple-50 backdrop-blur-sm bg-white/80 shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                🎥 Watch Demo
              </Button>
            </div>
          </div>
          
          {/* Right Content - AI Illustration with Floating Elements */}
          <div className="relative mb-24">
            {/* Main AI Agent Illustration */}
            <div className="flex justify-center">
              <AIAgentIllustration />
            </div>
            
            {/* Floating Elements */}
            <FloatingElement className="top-10 left-20" delay={0}>
              <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-xl shadow-lg flex items-center justify-center">
                <Bot className="w-6 h-6 text-white" />
              </div>
            </FloatingElement>
            
            <FloatingElement className="top-10 right-12" animate={false}>
              <div className="w-10 h-10 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full shadow-lg flex items-center justify-center">
                <Target className="w-5 h-5 text-white" />
              </div>
            </FloatingElement>
            
            <FloatingElement className="bottom-32 left-8" delay={1}>
              <div className="w-14 h-14 bg-gradient-to-br from-pink-400 to-rose-500 rounded-2xl shadow-lg flex items-center justify-center">
                <Zap className="w-7 h-7 text-white" />
              </div>
            </FloatingElement>
            
            <FloatingElement className="bottom-20 right-12" delay={0.5}>
              <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-full shadow-lg flex items-center justify-center">
                <Shield className="w-5 h-5 text-white" />
              </div>
            </FloatingElement>
            
            <FloatingElement className="top-32 right-4" delay={1.5}>
              <div className="w-8 h-8 bg-gradient-to-br from-purple-400 to-violet-500 rounded-lg shadow-lg flex items-center justify-center">
                <Rocket className="w-4 h-4 text-white" />
              </div>
            </FloatingElement>
            
            {/* Floating Emojis */}
            <FloatingElement className="top-20 left-20" delay={2}>
              <div className="text-2xl">🤖</div>
            </FloatingElement>
            
            <FloatingElement className="bottom-20 left-16" delay={0.8}>
              <div className="text-2xl">⚡</div>
            </FloatingElement>
            
            <FloatingElement className="top-40 right-8" delay={1.2}>
              <div className="text-2xl">🎯</div>
            </FloatingElement>
          </div>
        </div>
        
        {/* AI Performance Stats - Floating */}
        <div className="absolute top-8 right-10 hidden lg:block">
          <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-purple-100">
            <div className="flex items-center space-x-3">
              <TrendingUp className="w-8 h-8 text-purple-500" />
              <div>
                <div className="text-3xl font-bold gradient-text">98.7%</div>
                <div className="text-sm text-gray-500">AI ACCURACY</div>
              </div>
            </div>
            <p className="text-xs text-gray-400 mt-3 max-w-[200px]">
              Our AI agents achieve unprecedented accuracy in lead qualification and conversion.
            </p>
          </div>
        </div>
        
        {/* Stats Grid */}
        <div className="mt-20">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center stats-counter rounded-2xl p-6 card-hover bg-white/50 backdrop-blur-sm border border-purple-100">
              <div className="text-4xl sm:text-5xl font-black gradient-text mb-2">1M+</div>
              <div className="text-gray-700 font-semibold text-lg">Leads Generated</div>
              <div className="text-sm text-gray-500 mt-1">Across 50+ Industries</div>
            </div>
            <div className="text-center stats-counter rounded-2xl p-6 card-hover bg-white/50 backdrop-blur-sm border border-blue-100">
              <div className="text-4xl sm:text-5xl font-black gradient-text mb-2">98.7%</div>
              <div className="text-gray-700 font-semibold text-lg">AI Accuracy</div>
              <div className="text-sm text-gray-500 mt-1">Verified by Blockchain</div>
            </div>
            <div className="text-center stats-counter rounded-2xl p-6 card-hover bg-white/50 backdrop-blur-sm border border-green-100">
              <div className="text-4xl sm:text-5xl font-black gradient-text mb-2">24/7</div>
              <div className="text-gray-700 font-semibold text-lg">Agent Uptime</div>
              <div className="text-sm text-gray-500 mt-1">Never Sleep, Always Hunt</div>
            </div>
          </div>
        </div>

        {/* Social Proof */}
        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-6 text-lg font-medium">Trusted by innovative companies worldwide</p>
          <div className="flex justify-center items-center space-x-8 opacity-60">
            <div className="text-2xl font-bold text-gray-400">TechCorp</div>
            <div className="text-2xl font-bold text-gray-400">InnovateLabs</div>
            <div className="text-2xl font-bold text-gray-400">DataFlow</div>
            <div className="text-2xl font-bold text-gray-400">StartupX</div>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center">
          <p className="text-xs text-gray-400 mb-2">Scroll to explore AI capabilities</p>
          <div className="w-px h-12 bg-gradient-to-b from-purple-300 to-transparent mx-auto"></div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;