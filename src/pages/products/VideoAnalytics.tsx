import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PageHeader from '../../components/shared/PageHeader';
import ProductCard from '../../components/products/shared/ProductCard';
import ViewToggle from '../../components/video-analytics/ViewToggle';
import { videoAnalyticsFeatures } from '../../data/videoAnalyticsFeatures';
import FadeInSection from '../../components/animations/FadeInSection';

const VideoAnalytics = () => {
  const [view, setView] = useState<'grid' | 'list'>('grid');

  return (
    <div className="min-h-screen bg-gray-900">
      <PageHeader
        title="Video Analytics"
        description="Advanced AI-powered video analysis for security and business intelligence"
        image="https://images.unsplash.com/photo-1471991750293-5fc0e377b550?q=80&w=3792"
      />

      <div className="py-16 px-4">
        <div className="container mx-auto">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-white">
              Video Analytics Solutions
            </h2>
            <ViewToggle view={view} onViewChange={setView} />
          </div>

          <div className={`${
            view === 'grid'
              ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'
              : 'space-y-6'
          }`}>
            {videoAnalyticsFeatures.map((feature, index) => (
              <FadeInSection key={feature.title} delay={index * 100}>
                <Link
                  to={feature.title === 'Intrusion Detection' ? '/products/video-analytics/intrusion-detection' : '#'}
                  className="block"
                >
                  <ProductCard {...feature} layout={view} />
                </Link>
              </FadeInSection>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoAnalytics;