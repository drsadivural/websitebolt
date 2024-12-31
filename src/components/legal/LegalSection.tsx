import React from 'react';
import { cn } from '../../utils/styles';

interface LegalSectionProps {
  title: string;
  children: React.ReactNode;
  className?: string;
}

const LegalSection: React.FC<LegalSectionProps> = ({ title, children, className }) => {
  return (
    <section className={cn("mb-12", className)}>
      <h2 className="text-2xl font-semibold text-white mb-4">{title}</h2>
      <div className="prose prose-invert max-w-none">
        {children}
      </div>
    </section>
  );
};

export default LegalSection;