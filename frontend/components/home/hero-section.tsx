import React from "react";
import { Press_Start_2P } from 'next/font/google';

const pressStart = Press_Start_2P({ weight: '400', subsets: ['latin'] });


export function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-gray-100 via-blue-400 to-blue-200 text-gray-900 overflow-hidden">
      {/* Container */}
      <div className="max-w-7xl mx-auto px-6 py-20 flex flex-col lg:flex-row items-center justify-between gap-10">

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
          {/* Placeholder for 3D desktop */}
          <div className="w-[280px] h-[280px] bg-transparent border border-dashed border-gray-400 flex items-center justify-center rounded-xl">
            {/* Replace with 3D object */}
            <span className="text-gray-500 text-sm">[Insert 3D Desktop Object Here]</span>
          </div>

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

      {/* Pixel Rise Text at Bottom */}
      <div
        className={`${pressStart.className} absolute bottom-10 left-1/2 transform -translate-x-1/2 text-7xl lg:text-8xl font-bold tracking-widest text-gray-300/40 select-none pointer-events-none`}
      >
        PIXEL RISE
      </div>


    </section>
  );
}
