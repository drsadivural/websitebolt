import React, { useState } from 'react';
import { assistants } from '../../../../data/aiAssistants';
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
            <h2>Our ready-to-use AI Products</h2>
            <p className="text-xl text-gray-300">
              Explore our comprehensive suite of AI assistants designed for various industries and use cases
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
          {assistants.map((assistant, index) => (
            <div key={assistant.title} className="relative">
              <ProductCard {...assistant} layout={view} />
              {assistant.showChatButton && (
                <button className="mt-4 w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center">
                  Try Demo
                </button>
              )}
            </div>
          ))}
        </div>
      </FadeInSection>
    </div>
  );
};

export default FeaturesTab;