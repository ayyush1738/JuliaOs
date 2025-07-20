import Link from 'next/link';
import { Zap, Twitter, Github, Linkedin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-purple-500 via-blue-600 to-indigo-600 flex items-center justify-center">
                <Zap className="h-5 w-5 text-white" />
              </div>
              <span className="text-2xl font-bold gradient-text">
                LeadGenius
              </span>
            </div>
            <p className="text-gray-300 text-lg leading-relaxed max-w-md">
              The future of lead generation is here. Deploy autonomous AI agents that work 24/7 to discover, enrich, and convert your ideal customers using cutting-edge Web3 technology.
            </p>
            <div className="flex space-x-4 mt-6">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Github className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Product</h3>
            <ul className="space-y-3">
              <li><Link href="/dashboard" className="text-gray-300 hover:text-white transition-colors">Dashboard</Link></li>
              <li><Link href="#" className="text-gray-300 hover:text-white transition-colors">AI Agents</Link></li>
              <li><Link href="#" className="text-gray-300 hover:text-white transition-colors">Analytics</Link></li>
              <li><Link href="#" className="text-gray-300 hover:text-white transition-colors">Integrations</Link></li>
              <li><Link href="#" className="text-gray-300 hover:text-white transition-colors">API</Link></li>
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Company</h3>
            <ul className="space-y-3">
              <li><Link href="#" className="text-gray-300 hover:text-white transition-colors">About</Link></li>
              <li><Link href="#" className="text-gray-300 hover:text-white transition-colors">Blog</Link></li>
              <li><Link href="#" className="text-gray-300 hover:text-white transition-colors">Careers</Link></li>
              <li><Link href="#" className="text-gray-300 hover:text-white transition-colors">Contact</Link></li>
              <li><Link href="#" className="text-gray-300 hover:text-white transition-colors">Privacy</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2024 LeadGenius. All rights reserved. Built on Solana blockchain.
          </p>
          <div className="flex items-center space-x-4 mt-4 md:mt-0">
            <span className="text-sm text-gray-400">Powered by</span>
            <div className="flex items-center space-x-2">
              <span className="text-sm font-semibold text-purple-400">JuliaOS</span>
              <span className="text-gray-600">•</span>
              <span className="text-sm font-semibold text-blue-400">Solana</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}