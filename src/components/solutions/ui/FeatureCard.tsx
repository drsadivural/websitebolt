import React from 'react';
import { LucideIcon } from 'lucide-react';
import { cn } from '../../../utils/styles';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  className?: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon: Icon, title, description, className }) => {
  return (
    <div className={cn(
      "group relative p-8 rounded-xl",
      "bg-white/5 backdrop-blur-lg",
      "border border-white/10 hover:border-solution-primary/50",
      "transform transition-all duration-300",
      "hover:translate-y-[-4px] hover:shadow-lg",
      className
    )}>
      <div className="absolute inset-0 bg-gradient-to-br from-solution-primary/10 to-solution-secondary/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity" />
      
      <div className="relative z-10">
        <Icon className="w-12 h-12 text-solution-primary mb-6 transform group-hover:scale-110 transition-transform" />
        <h3 className="text-2xl font-bold text-white mb-4">{title}</h3>
        <p className="text-solution-text-body text-lg">{description}</p>
      </div>
    </div>
  );
};

export default FeatureCard;