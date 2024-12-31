import React, { useState } from 'react';
import { Bot } from 'lucide-react';
import PageHeader from '../../components/shared/PageHeader';
import TabNavigation from '../../components/products/ai-assistant/TabNavigation';
import OverviewTab from '../../components/products/ai-assistant/tabs/OverviewTab';
import FeaturesTab from '../../components/products/ai-assistant/tabs/FeaturesTab';
import TechnologyTab from '../../components/products/ai-assistant/tabs/TechnologyTab';
import PricingTab from '../../components/products/ai-assistant/tabs/PricingTab';
import ReferencesTab from '../../components/products/ai-assistant/tabs/ReferencesTab';
import DemoTab from '../../components/products/ai-assistant/tabs/DemoTab';
import ChatDialog from '../../components/chat/ChatDialog';

const AISolutions = () => {
  const [activeTab, setActiveTab] = useState('features');
  const [isChatOpen, setIsChatOpen] = useState(false);

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
        title="AI Assistant"
        description="Advanced AI assistants for every need"
        image="https://images.unsplash.com/photo-1677442136019-21780ecad995"
      />

      <div className="relative">
        {/* Background image with overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://drive.google.com/uc?export=view&id=1vEkrlClnWC4s1eVrIeKX-47O-z-Er6XJ"
            alt="Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gray-900/80 backdrop-blur-[2px]" />
        </div>

        {/* Content */}
        <div className="relative z-10">
          <TabNavigation activeTab={activeTab} onTabChange={setActiveTab} />
          
          <div className="container mx-auto px-4 py-12">
            {renderTabContent()}
          </div>
        </div>
      </div>

      {isChatOpen && <ChatDialog onClose={() => setIsChatOpen(false)} />}
    </div>
  );
};

export default AISolutions;