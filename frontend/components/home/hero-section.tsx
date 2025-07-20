'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles } from 'lucide-react';

export function HeroSection() {
  return (
    <section className="relative overflow-hidden py-24 sm:py-40">
      {/* Background Elements */}
      <div className="absolute inset-0 hero-gradient opacity-20"></div>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl">
        <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-float"></div>
        <div className="absolute top-40 right-10 w-96 h-96 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-20 left-1/2 w-80 h-80 bg-gradient-to-r from-indigo-400 to-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-float" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 animate-slide-up">
        <div className="text-center max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center rounded-full px-6 py-3 text-sm font-semibold bg-white/80 backdrop-blur-md border border-purple-200/50 text-purple-700 mb-10 shadow-xl animate-pulse-slow">
            <Sparkles className="w-4 h-4 mr-2" />
            🚀 Powered by JuliaOS & Solana Blockchain
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black text-gray-900 mb-8 tracking-tight leading-none">
            <span className="gradient-text block">
              AI-Powered Lead
            </span>
            <span className="text-gray-900 block">Generation</span>
            <span className="gradient-text block">
              Revolution
            </span>
          </h1>

          {/* Subtext */}
          <p className="text-xl sm:text-3xl text-gray-700 mb-16 max-w-4xl mx-auto leading-relaxed font-medium">
            Deploy <span className="gradient-text font-bold">autonomous AI agents</span> that discover, enrich, and convert your ideal customers using cutting-edge Web3 technology.
          </p>

          {/* CTA Button */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-20">
            <Link href="/dashboard">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 hover:from-purple-700 hover:via-blue-700 hover:to-indigo-700 text-white px-12 py-6 text-xl font-bold rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-500 animate-glow transform hover:scale-105 neon-border"
              >
                Launch AI Agents
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
            <Button 
              variant="outline" 
              size="lg"
              className="px-12 py-6 text-xl font-bold rounded-2xl border-2 border-purple-300 hover:border-purple-400 hover:bg-purple-50 backdrop-blur-sm bg-white/80 shadow-xl hover:shadow-2xl transition-all duration-300"
            >
              🎥 Watch Demo
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center stats-counter rounded-2xl p-6 card-hover">
              <div className="text-4xl sm:text-5xl font-black gradient-text mb-2">1M+</div>
              <div className="text-gray-700 font-semibold text-lg">Leads Generated</div>
              <div className="text-sm text-gray-500 mt-1">Across 50+ Industries</div>
            </div>
            <div className="text-center stats-counter rounded-2xl p-6 card-hover">
              <div className="text-4xl sm:text-5xl font-black gradient-text mb-2">98.7%</div>
              <div className="text-gray-700 font-semibold text-lg">AI Accuracy</div>
              <div className="text-sm text-gray-500 mt-1">Verified by Blockchain</div>
            </div>
            <div className="text-center stats-counter rounded-2xl p-6 card-hover">
              <div className="text-4xl sm:text-5xl font-black gradient-text mb-2">24/7</div>
              <div className="text-gray-700 font-semibold text-lg">Agent Uptime</div>
              <div className="text-sm text-gray-500 mt-1">Never Sleep, Always Hunt</div>
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
        </div>
      </div>
    </section>
  );
}