import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PageHeader from '../../components/shared/PageHeader';
import FeatureCard from '../../components/products/shared/FeatureCard';
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
                  className="block group"
                >
                  {view === 'grid' ? (
                    <FeatureCard {...feature} />
                  ) : (
                    <div className="bg-gray-800 rounded-lg overflow-hidden hover:bg-gray-700 transition-colors">
                      <div className="flex">
                        <div className="w-48 h-48 flex-shrink-0">
                          <img
                            src={feature.image}
                            alt={feature.title}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="flex-1 p-6">
                          <div className="flex items-center mb-2">
                            <feature.icon className="w-6 h-6 text-blue-400 mr-2" />
                            <h3 className="text-xl font-semibold text-white">
                              {feature.title}
                            </h3>
                          </div>
                          <p className="text-gray-300 mb-4">{feature.description}</p>
                          <div className="flex items-center text-sm text-blue-400">
                            Learn more
                            <svg
                              className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M9 5l7 7-7 7"
                              />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
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