import React from 'react';

const ComputerIllustration = () => {
  return (
    <div className="relative w-96 h-96 mx-auto">
      {/* Main Computer Body */}
      <div className="absolute inset-0 transform rotate-12">
        {/* Computer Screen */}
        <div className="w-64 h-48 bg-gradient-to-br from-orange-500 to-red-600 rounded-t-3xl shadow-2xl relative">
          <div className="w-56 h-40 bg-gray-100 rounded-2xl absolute top-4 left-4">
            <div className="w-48 h-32 bg-white rounded-xl absolute top-4 left-4 shadow-inner">
              <div className="w-full h-6 bg-gray-200 rounded-t-xl"></div>
              <div className="p-3 space-y-2">
                <div className="w-3/4 h-2 bg-gray-300 rounded"></div>
                <div className="w-1/2 h-2 bg-gray-300 rounded"></div>
                <div className="w-5/6 h-2 bg-gray-300 rounded"></div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Computer Base */}
        <div className="w-64 h-16 bg-gradient-to-br from-orange-600 to-red-700 shadow-2xl relative">
          <div className="absolute bottom-0 w-full h-4 bg-gradient-to-r from-orange-700 to-red-800 rounded-b-3xl"></div>
        </div>
        
        {/* Keyboard */}
        <div className="w-72 h-20 bg-gradient-to-br from-orange-400 to-red-500 rounded-2xl shadow-xl absolute -bottom-8 -left-4">
          <div className="grid grid-cols-12 gap-1 p-3">
            {Array.from({ length: 36 }).map((_, i) => (
              <div key={i} className="w-3 h-3 bg-orange-300 rounded-sm shadow-sm"></div>
            ))}
          </div>
        </div>
        
        {/* Side Details */}
        <div className="absolute right-0 top-12 w-4 h-24 bg-gradient-to-b from-red-600 to-red-700 rounded-r-xl"></div>
        <div className="absolute left-0 top-16 w-2 h-16 bg-gradient-to-b from-orange-600 to-red-600 rounded-l-lg"></div>
      </div>
    </div>
  );
};

export default ComputerIllustration;