import React, { useState } from 'react';
import PageHeader from '../../components/shared/PageHeader';
import ProductCard from '../../components/products/shared/ProductCard';
import ViewToggle from '../../components/video-analytics/ViewToggle';
import { faceRecognitionFeatures } from '../../data/faceRecognitionFeatures';
import FadeInSection from '../../components/animations/FadeInSection';

const FaceRecognition = () => {
  const [view, setView] = useState<'grid' | 'list'>('grid');

  return (
    <div className="min-h-screen bg-gray-900">
      <PageHeader
        title="Face Recognition"
        description="Next-generation biometric security powered by advanced AI"
        image="https://images.unsplash.com/photo-1517913451214-e22ce660e086?q=80&w=2896"
      />

      <div className="py-16 px-4">
        <div className="container mx-auto">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-white">
              Advanced Face Recognition Features
            </h2>
            <ViewToggle view={view} onViewChange={setView} />
          </div>

          <div className={`${
            view === 'grid'
              ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'
              : 'space-y-6'
          }`}>
            {faceRecognitionFeatures.map((feature, index) => (
              <FadeInSection key={feature.title} delay={index * 100}>
                <ProductCard {...feature} layout={view} />
              </FadeInSection>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FaceRecognition;