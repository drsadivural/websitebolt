import React, { useState } from 'react';
import { Bot } from 'lucide-react';
import ChatDialog from '../../../chat/ChatDialog';
import FadeInSection from '../../../animations/FadeInSection';

const DemoTab = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);

  return (
    <div className="space-y-16">
      <FadeInSection>
        <div className="prose prose-invert max-w-none">
          <h2>Try Our AI Assistant</h2>
          <p className="text-xl text-gray-300">
            Experience the power of our AI Assistant firsthand with an interactive demo
          </p>
        </div>
      </FadeInSection>

      <FadeInSection>
        <div className="flex justify-center">
          <button
            onClick={() => setIsChatOpen(true)}
            className="inline-flex items-center px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            <Bot className="w-6 h-6 mr-2" />
            Start Demo Chat
          </button>
        </div>
      </FadeInSection>

      {isChatOpen && <ChatDialog onClose={() => setIsChatOpen(false)} />}
    </div>
  );
}

export default DemoTab;