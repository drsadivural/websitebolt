import React from 'react';
import { cn } from '../../utils/styles';

interface LegalLayoutProps {
  children: React.ReactNode;
  className?: string;
}

const LegalLayout: React.FC<LegalLayoutProps> = ({ children, className }) => {
  return (
    <div className={cn(
      "min-h-screen bg-[#1A1A1A] text-gray-100",
      "antialiased leading-relaxed",
      className
    )}>
      {children}
    </div>
  );
};

export default LegalLayout;