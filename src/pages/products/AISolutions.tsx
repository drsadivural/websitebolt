import React, { useState } from 'react';
import PageHeader from '../../components/shared/PageHeader';
import AIAssistantCard from '../../components/products/AIAssistantCard';
import ChatDialog from '../../components/chat/ChatDialog';
import { Bot, Heart, Car, Stethoscope, Scale, Users, ShoppingBag, Radio } from 'lucide-react';

const assistants = [
  {
    icon: Bot,
    title: 'Personal Assistant & AI Chatbot',
    description: 'Your intelligent personal companion for daily tasks and organization. Try our AI Chatbot!',
    image: 'https://images.unsplash.com/1/iphone-4-closeup.jpg?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    showChatButton: true
  },
  {
    icon: Heart,
    title: 'AI Companion',
    description: 'Emotional support and engaging conversations powered by advanced AI',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158'
  },
  {
    icon: Car,
    title: 'AI Driver Assistant',
    description: 'Enhanced driver assistant with real-time AI responses to keep driver awake',
    image: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2'
  },
  {
    icon: Stethoscope,
    title: 'AI Healthcare',
    description: 'Intelligent healthcare support and medical information assistance',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d'
  },
  {
    icon: Scale,
    title: 'AI Lawyer Assistant',
    description: 'Legal information and documentation assistance powered by AI',
    image: 'https://images.unsplash.com/photo-1528747008803-f9f5cc8f1a64?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    icon: Users,
    title: 'AI Meeting Assistant',
    description: 'Smart meeting management and note-taking automation',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=3600&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    icon: ShoppingBag,
    title: 'AI Shop Assistant',
    description: 'Shopping Assistant and AI helpdesk to answer any question in the supermarket',
    image: 'https://images.unsplash.com/photo-1540340061722-9293d5163008?q=80&w=3871&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    icon: Radio,
    title: 'AI Cast Assistant',
    description: 'Assist actors in practicing their lines, preparing for their roles, and providing an AI companion for role-playing',
    image: 'https://images.unsplash.com/photo-1594909122845-11baa439b7bf?q=80&w=3456&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  }
];

const AISolutions = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-900">
      <PageHeader
        title="AI Assistant"
        description="Advanced AI assistants for every need"
        image="https://images.unsplash.com/photo-1677442136019-21780ecad995"
      />
      <div className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">
            Intelligent AI Solutions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {assistants.map((assistant) => (
              <div key={assistant.title} className="relative">
                <AIAssistantCard {...assistant} />
                {assistant.showChatButton && (
                  <button
                    onClick={() => setIsChatOpen(true)}
                    className="mt-4 w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center"
                  >
                    <Bot className="w-5 h-5 mr-2" />
                    Open AI Chatbot
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {isChatOpen && <ChatDialog onClose={() => setIsChatOpen(false)} />}
    </div>
  );
};

export default AISolutions;