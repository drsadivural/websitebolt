import React from 'react';
import { Mic, Brain, Image, Layers, Globe, CheckCircle, Code, MessageSquare } from 'lucide-react';
import SolutionLayout from '../../components/solutions/layout/SolutionLayout';
import HeroSection from '../../components/solutions/ui/HeroSection';
import FeatureGrid from '../../components/solutions/ui/FeatureGrid';
import FloatingShapes from '../../components/solutions/ui/FloatingShapes';

const features = [
  {
    icon: Mic,
    title: 'Voice Intelligence',
    description: 'Natural language processing with contextual understanding'
  },
  {
    icon: Brain,
    title: 'Adaptive Learning',
    description: 'Self-improving AI systems that learn from interactions'
  },
  {
    icon: Image,
    title: 'Visual Generation',
    description: 'Create and edit images with AI-powered tools'
  },
  {
    icon: Code,
    title: 'Code Generation',
    description: 'Automated code generation and optimization'
  },
  {
    icon: MessageSquare,
    title: 'Conversational AI',
    description: 'Advanced chatbots and virtual assistants'
  },
  {
    icon: Globe,
    title: 'Multilingual Support',
    description: 'Real-time translation and language processing'
  }
];

const GenerativeAI = () => {
  return (
    <SolutionLayout>
      <div className="relative min-h-screen">
        <FloatingShapes />
        <HeroSection
          title="Generative AI"
          description="Transform your business with next-generation AI technology"
        />
        <FeatureGrid features={features} />
      </div>
    </SolutionLayout>
  );
};

export default GenerativeAI;