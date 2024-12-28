import React from 'react';
import { Mic, Brain, Image, Layers, Globe, CheckCircle } from 'lucide-react';
import PageHeader from '../../components/shared/PageHeader';
import SolutionLayout from '../../components/solutions/layout/SolutionLayout';
import Card from '../../components/solutions/ui/Card';
import FadeInSection from '../../components/animations/FadeInSection';

const features = [
  {
    icon: Mic,
    title: 'Live Voice Communication',
    description: 'Engage in real-time voice conversations with natural language understanding'
  },
  {
    icon: Brain,
    title: 'Adaptive Learning',
    description: 'AI that learns and adapts from each interaction for personalized experiences'
  },
  {
    icon: Image,
    title: 'Multimodal Analysis',
    description: 'Process and analyze text, images, and voice inputs simultaneously'
  },
  {
    icon: Layers,
    title: 'Emotion Recognition',
    description: 'Analyze tone and sentiment for emotionally intelligent responses'
  },
  {
    icon: Globe,
    title: 'RAG Integration',
    description: 'Access and process real-time information for up-to-date responses'
  },
  {
    icon: CheckCircle,
    title: 'High-Accuracy Outputs',
    description: 'Deliver precise responses using multiple data sources and analysis'
  }
];

const GenerativeAI = () => {
  return (
    <SolutionLayout>
      <PageHeader
        title="Generative AI"
        description="Next-generation AI technology for intelligent interaction"
        image="https://images.unsplash.com/photo-1677442136019-21780ecad995"
      />
      
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FadeInSection key={feature.title} delay={index * 100}>
              <Card className="p-6 hover:translate-y-[-4px]">
                <feature.icon className="w-12 h-12 text-solution-primary mb-4" />
                <h3 className="text-xl font-semibold text-solution-text-primary mb-3">
                  {feature.title}
                </h3>
                <p className="text-solution-text-body">{feature.description}</p>
              </Card>
            </FadeInSection>
          ))}
        </div>
      </div>
    </SolutionLayout>
  );
};

export default GenerativeAI;