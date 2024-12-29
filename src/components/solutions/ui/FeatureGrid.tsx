import React from 'react';
import { LucideIcon } from 'lucide-react';
import FadeInSection from '../../animations/FadeInSection';
import FeatureCard from './FeatureCard';

interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
}

interface FeatureGridProps {
  features: Feature[];
  columns?: 2 | 3;
}

const FeatureGrid: React.FC<FeatureGridProps> = ({ features, columns = 3 }) => {
  return (
    <div className="relative py-20 px-4">
      <div className="container mx-auto">
        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-${columns} gap-8`}>
          {features.map((feature, index) => (
            <FadeInSection key={feature.title} delay={index * 100}>
              <FeatureCard {...feature} />
            </FadeInSection>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeatureGrid;