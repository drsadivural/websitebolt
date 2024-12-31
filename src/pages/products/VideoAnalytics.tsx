import React, { useState } from 'react';
import PageHeader from '../../components/shared/PageHeader';
import TabNavigation from '../../components/products/video-analytics/TabNavigation';
import OverviewTab from '../../components/products/video-analytics/tabs/OverviewTab';
import FeaturesTab from '../../components/products/video-analytics/tabs/FeaturesTab';
import TechnologyTab from '../../components/products/video-analytics/tabs/TechnologyTab';
import PricingTab from '../../components/products/video-analytics/tabs/PricingTab';
import ReferencesTab from '../../components/products/video-analytics/tabs/ReferencesTab';
import DemoTab from '../../components/products/video-analytics/tabs/DemoTab';

const VideoAnalytics = () => {
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
        title="Video Analytics"
        description="Advanced AI-powered video analysis for security and business intelligence"
        image="https://images.unsplash.com/photo-1471991750293-5fc0e377b550?q=80&w=3792"
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

export default VideoAnalytics;