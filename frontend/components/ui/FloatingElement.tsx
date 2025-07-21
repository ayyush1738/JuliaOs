import React from 'react';

interface FloatingElementProps {
  children: React.ReactNode;
  className?: string;
  animate?: boolean;
  delay?: number;
}

const FloatingElement: React.FC<FloatingElementProps> = ({ 
  children, 
  className = '', 
  animate = true,
  delay = 0 
}) => {
  const animationClass = animate ? 'animate-float' : '';
  const delayStyle = delay ? { animationDelay: `${delay}s` } : {};
  
  return (
    <div 
      className={`absolute ${animationClass} ${className}`}
      style={delayStyle}
    >
      {children}
    </div>
  );
};

export default FloatingElement;