import React, { useState } from 'react';
import PageHeader from '../../../components/shared/PageHeader';
import TabNavigation from '../../../components/video-analytics/guide/TabNavigation';
import OverviewTab from '../../../components/video-analytics/guide/tabs/OverviewTab';
import TechnicalTab from '../../../components/video-analytics/guide/tabs/TechnicalTab';
import GalleryTab from '../../../components/video-analytics/guide/tabs/GalleryTab';
import ResourcesTab from '../../../components/video-analytics/guide/tabs/ResourcesTab';

type Tab = 'overview' | 'technical' | 'gallery' | 'resources';

const IntrusionDetectionGuide = () => {
  const [activeTab, setActiveTab] = useState<Tab>('overview');

  return (
    <div className="min-h-screen bg-gray-900">
      <PageHeader
        title="Understanding Intrusion Detection Systems"
        description="A comprehensive guide to modern IDS technology"
        image="https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&q=80"
      />
      
      <div className="container mx-auto px-4 py-12">
        <TabNavigation activeTab={activeTab} onTabChange={setActiveTab} />
        
        <div className="mt-8">
          {activeTab === 'overview' && <OverviewTab />}
          {activeTab === 'technical' && <TechnicalTab />}
          {activeTab === 'gallery' && <GalleryTab />}
          {activeTab === 'resources' && <ResourcesTab />}
        </div>
      </div>
    </div>
  );
};

export default IntrusionDetectionGuide;