import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import PageHeader from '../../components/shared/PageHeader';
import AIBoxCard from '../../components/products/aibox/AIBoxCard';
import ProductDetailsModal from '../../components/products/aibox/ProductDetailsModal';
import ViewToggle from '../../components/video-analytics/ViewToggle';
import { aiboxFeatures } from '../../data/aiboxFeatures';
import FadeInSection from '../../components/animations/FadeInSection';

const AIBOX = () => {
  const [showModal, setShowModal] = useState(false);
  const [view, setView] = useState<'grid' | 'list'>('grid');

  return (
    <div className="min-h-screen bg-gray-900">
      <PageHeader
        title="AIBOX"
        description="All-in-one AI-powered Edge Computing Solution"
        image="https://images.unsplash.com/photo-1558494949-ef010cbdcc31"
      />
      
      {/* Get Started Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 py-8">
        <div className="container mx-auto px-4 text-center">
          <button
            onClick={() => setShowModal(true)}
            className="inline-flex items-center bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Get Started
            <ArrowRight className="ml-2 w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Features Grid */}
      <div className="py-16 px-4">
        <div className="container mx-auto">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-white">
              Comprehensive Server Solutions
            </h2>
            <ViewToggle view={view} onViewChange={setView} />
          </div>

          <div className={`${
            view === 'grid'
              ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'
              : 'space-y-6'
          }`}>
            {aiboxFeatures.map((feature, index) => (
              <FadeInSection key={feature.title} delay={index * 100}>
                {view === 'grid' ? (
                  <AIBoxCard {...feature} />
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
                        <p className="text-gray-300">{feature.description}</p>
                      </div>
                    </div>
                  </div>
                )}
              </FadeInSection>
            ))}
          </div>
        </div>
      </div>

      {showModal && <ProductDetailsModal onClose={() => setShowModal(false)} />}
    </div>
  );
};

export default AIBOX;