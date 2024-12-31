import React, { useState } from 'react';
import { faceRecognitionFeatures } from '../../../../data/faceRecognitionFeatures';
import ProductCard from '../../shared/ProductCard';
import ViewToggle from '../../../video-analytics/ViewToggle';
import FadeInSection from '../../../animations/FadeInSection';

const FeaturesTab = () => {
  const [view, setView] = useState<'grid' | 'list'>('grid');

  return (
    <div className="space-y-16">
      <FadeInSection>
        <div className="flex justify-between items-center">
          <div className="prose prose-invert">
            <h2>Face Recognition Features</h2>
            <p className="text-xl text-gray-300">
              Explore our comprehensive suite of face recognition capabilities
            </p>
          </div>
          <ViewToggle view={view} onViewChange={setView} />
        </div>
      </FadeInSection>

      <FadeInSection>
        <div className={`${
          view === 'grid'
            ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'
            : 'space-y-6'
        }`}>
          {faceRecognitionFeatures.map((feature, index) => (
            <ProductCard key={feature.title} {...feature} layout={view} />
          ))}
        </div>
      </FadeInSection>
    </div>
  );
};

export default FeaturesTab;