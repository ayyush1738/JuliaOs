import React from "react";
import { Press_Start_2P } from 'next/font/google';
import desktop from '@/public/desktop.png';
import Image from 'next/image';
import { ArrowRight, Sparkles, Bot, Zap, Target, TrendingUp, Shield, Rocket } from 'lucide-react';
import FloatingElement from './floating-element';


const pressStart = Press_Start_2P({
  subsets: ['latin'],
  weight: '400',
  display: 'swap',
});

export function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-gray-100 via-blue-400 to-blue-200 text-gray-900 overflow-hidden h-screen">
      
      {/* Centered Background Image */}
      <div className="absolute inset-0 flex items-center justify-center z-0" style={{
    filter: 'url(#glitch)',
  }}>
        <Image
          src={desktop}
          alt="Desktop Mockup"
          width={400}
          height={400}
          className="object-contain"
        />
        
        <div className="relative">
          <FloatingElement className="top-10 right-96" delay={0}>
            <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-xl shadow-lg flex items-center justify-center">
              <Bot className="w-6 h-6 text-white" />
            </div>
          </FloatingElement>

          <FloatingElement className="bottom-24 right-72" delay={1}>
            <div className="w-14 h-14 bg-gradient-to-br from-pink-400 to-rose-500 rounded-2xl shadow-lg flex items-center justify-center">
              <Zap className="w-7 h-7 text-white" />
            </div>
          </FloatingElement>

          <FloatingElement className="bottom-40 right-12" delay={0.5}>
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
          <FloatingElement className="top-16 right-20" delay={2}>
            <div className="text-2xl">🤖</div>
          </FloatingElement>

          <FloatingElement className="bottom-20" delay={0.8}>
            <div className="text-2xl">⚡</div>
          </FloatingElement>

          <FloatingElement className="top-40 right-72" delay={1.2}>
            <div className="text-2xl">🎯</div>
          </FloatingElement>
        </div>
      </div>

      {/* Main Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 flex flex-col lg:flex-row items-center justify-between gap-10">

        {/* Left Text Section */}
        <div className="max-w-xl">
          <h1 className="text-4xl lg:text-5xl font-bold leading-tight mt-2 ml-10">
            BUILDING <br />
            <span className="text-black ml-20">DIGITAL</span> <br />
            EXPERIENCES <br />
            <span className="text-black ml-20">THAT STICK</span>
          </h1>
          <p className="mt-6 text-base text-gray-700 leading-relaxed">
            We craft brand identities, campaigns, and websites that drive engagement,
            conversions, and long-term growth.
          </p>

          {/* CTA Buttons */}
          <div className="mt-8 flex gap-4">
            <button className="bg-orange-500 hover:bg-orange-600 text-white font-medium py-2 px-6 rounded shadow">
              Get Started
            </button>
            <button className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium py-2 px-6 rounded shadow">
              Contact Us
            </button>
          </div>
        </div>

        {/* Right Info Section */}
        <div className="flex flex-col items-center lg:items-end gap-6">
          {/* Growth */}
          <div className="text-center lg:text-right">
            <p className="text-3xl font-semibold">↑ 132%</p>
            <p className="text-sm text-gray-600 mt-1">
              Our clients see measurable brand growth <br />
              through strategic visuals and digital thinking.
            </p>
          </div>

          {/* Footer Text */}
          <p className="text-sm text-gray-600 text-center lg:text-right">
            From the first spark of an idea to worldwide recognition — we partner with brands
          </p>
        </div>
      </div>

      {/* Pixel Text at Bottom */}
      <div
        className={`${pressStart.className} absolute bottom-10 left-1/2 transform -translate-x-1/2 text-5xl md:text-6xl text-gray-300/40 select-none pointer-events-none`}
        style={{
          imageRendering: 'pixelated',
        
    filter: 'url(#glitch)',
  
        }}
      >
        AI AGENTS
      </div>
    </section>
  );
}
