import React, { useState } from 'react';
import PageHeader from '../../components/shared/PageHeader';
import TabNavigation from '../../components/products/face-recognition/TabNavigation';
import OverviewTab from '../../components/products/face-recognition/tabs/OverviewTab';
import FeaturesTab from '../../components/products/face-recognition/tabs/FeaturesTab';
import TechnologyTab from '../../components/products/face-recognition/tabs/TechnologyTab';
import PricingTab from '../../components/products/face-recognition/tabs/PricingTab';
import ReferencesTab from '../../components/products/face-recognition/tabs/ReferencesTab';
import DemoTab from '../../components/products/face-recognition/tabs/DemoTab';

const FaceRecognition = () => {
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
        title="Face Recognition"
        description="Next-generation biometric security powered by Ayonix AI"
        image="https://images.unsplash.com/photo-1517913451214-e22ce660e086?q=80&w=2896"
      />

      <div className="relative">
        <TabNavigation activeTab={activeTab} onTabChange={setActiveTab} />
        
        <div className="container mx-auto px-4 py-12">
          {renderTabContent()}
        </div>
      </div>
    </div>
  );
};

export default FaceRecognition;