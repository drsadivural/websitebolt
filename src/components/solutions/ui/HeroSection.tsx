import React from 'react';
import FadeInSection from '../../animations/FadeInSection';

interface HeroSectionProps {
  title: string;
  description: string;
  ctaText?: string;
  onCtaClick?: () => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  title,
  description,
  ctaText = "Get Started",
  onCtaClick
}) => {
  return (
    <div className="relative pt-32 pb-20 px-4">
      <div className="container mx-auto text-center max-w-4xl">
        <FadeInSection>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            {title}
          </h1>
          <p className="text-xl md:text-2xl text-solution-text-body mb-12">
            {description}
          </p>
          {ctaText && (
            <button
              onClick={onCtaClick}
              className="px-8 py-4 bg-solution-primary text-white rounded-lg hover:bg-solution-primary/90 transition-colors"
            >
              {ctaText}
            </button>
          )}
        </FadeInSection>
      </div>
    </div>
  );
};

export default HeroSection;