import React from 'react';
import { cn } from '../../../utils/styles';

interface SolutionLayoutProps {
  children: React.ReactNode;
  className?: string;
}

const SolutionLayout: React.FC<SolutionLayoutProps> = ({ children, className }) => {
  return (
    <div className={cn(
      "min-h-screen bg-gradient-to-br from-[#1a1a1a] to-[#2d2d2d] animate-gradient",
      "text-[#e0e0e0] antialiased",
      className
    )}>
      {children}
    </div>
  );
};

export default SolutionLayout;