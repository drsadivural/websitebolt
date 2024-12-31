import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import PageHeader from '../../components/shared/PageHeader';
import TabNavigation from '../../components/products/aibox/TabNavigation';
import OverviewTab from '../../components/products/aibox/tabs/OverviewTab';
import FeaturesTab from '../../components/products/aibox/tabs/FeaturesTab';
import TechnologyTab from '../../components/products/aibox/tabs/TechnologyTab';
import PricingTab from '../../components/products/aibox/tabs/PricingTab';
import ReferencesTab from '../../components/products/aibox/tabs/ReferencesTab';
import DemoTab from '../../components/products/aibox/tabs/DemoTab';
import ProductDetailsModal from '../../components/products/aibox/ProductDetailsModal';

const AIBOX = () => {
  const [showModal, setShowModal] = useState(false);
  const [activeTab, setActiveTab] = useState('features');

  const renderTabContent = () => {
    switch (activeTab) {
      case 'overview':
        return <OverviewTab />;
      case 'features':
        return <FeaturesTab />;
      case 'technology':
        return <TechnologyTab />;
      case 'pricing':
        return <PricingTab />;
      case 'references':
        return <ReferencesTab />;
      case 'demo':
        return <DemoTab />;
      default:
        return null;
    }
  };

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

      <div className="relative">
        <TabNavigation activeTab={activeTab} onTabChange={setActiveTab} />
        
        <div className="container mx-auto px-4 py-12">
          {renderTabContent()}
        </div>
      </div>

      {showModal && <ProductDetailsModal onClose={() => setShowModal(false)} />}
    </div>
  );
};

export default AIBOX;