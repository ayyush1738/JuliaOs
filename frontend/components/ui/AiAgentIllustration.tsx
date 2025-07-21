import React from 'react';
import { Bot, Brain, Zap, Target } from 'lucide-react';

const AIAgentIllustration = () => {
  return (
    <div className="relative w-80 h-80 mx-auto">
      {/* Central AI Brain */}
      <div className="absolute inset-0 transform rotate-12">
        <div className="w-48 h-48 bg-gradient-to-br from-purple-500 via-blue-500 to-indigo-600 rounded-3xl shadow-2xl relative mx-auto mt-16">
          {/* Brain Icon */}
          <div className="absolute inset-0 flex items-center justify-center">
            <Brain className="w-20 h-20 text-white" />
          </div>
          
          {/* Glowing Effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-purple-400 to-blue-400 rounded-3xl opacity-50 animate-pulse"></div>
          
          {/* Neural Network Lines */}
          <div className="absolute -top-4 -left-4 w-4 h-4 bg-yellow-400 rounded-full shadow-lg"></div>
          <div className="absolute -top-2 -right-6 w-3 h-3 bg-green-400 rounded-full shadow-lg"></div>
          <div className="absolute -bottom-6 -left-2 w-5 h-5 bg-pink-400 rounded-full shadow-lg"></div>
          <div className="absolute -bottom-4 -right-4 w-4 h-4 bg-orange-400 rounded-full shadow-lg"></div>
        </div>
        
        {/* Data Streams */}
        <div className="absolute top-8 left-12 w-32 h-2 bg-gradient-to-r from-purple-400 to-transparent rounded-full opacity-70"></div>
        <div className="absolute top-20 right-8 w-24 h-2 bg-gradient-to-l from-blue-400 to-transparent rounded-full opacity-70"></div>
        <div className="absolute bottom-16 left-16 w-28 h-2 bg-gradient-to-r from-indigo-400 to-transparent rounded-full opacity-70"></div>
      </div>
    </div>
  );
};

export default AIAgentIllustration;