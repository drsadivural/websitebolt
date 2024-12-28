import React from 'react';
import { cn } from '../../../utils/styles';

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

const Card: React.FC<CardProps> = ({ children, className }) => {
  return (
    <div className={cn(
      "bg-[#2a2a2a] rounded-lg shadow-lg",
      "hover:shadow-xl transition-all duration-300",
      "border border-[#3d3d3d]",
      className
    )}>
      {children}
    </div>
  );
};

export default Card;