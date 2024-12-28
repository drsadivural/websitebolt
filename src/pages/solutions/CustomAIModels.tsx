import React from 'react';
import { Brain, Settings, Layers, Database, Cloud, Shield } from 'lucide-react';
import PageHeader from '../../components/shared/PageHeader';
import SolutionLayout from '../../components/solutions/layout/SolutionLayout';
import Card from '../../components/solutions/ui/Card';
import FadeInSection from '../../components/animations/FadeInSection';

const features = [
  {
    icon: Brain,
    title: 'Custom Training',
    description: 'AI models trained specifically for your unique data and requirements'
  },
  {
    icon: Settings,
    title: 'Model Optimization',
    description: 'Fine-tuning and performance optimization for maximum efficiency'
  },
  {
    icon: Layers,
    title: 'Architecture Design',
    description: 'Custom neural network architectures tailored to your needs'
  },
  {
    icon: Database,
    title: 'Data Processing',
    description: 'Advanced data preprocessing and augmentation pipelines'
  },
  {
    icon: Cloud,
    title: 'Deployment Options',
    description: 'Flexible deployment solutions for cloud or edge computing'
  },
  {
    icon: Shield,
    title: 'Security Integration',
    description: 'Built-in security measures and compliance frameworks'
  }
];

const CustomAIModels = () => {
  return (
    <SolutionLayout>
      <PageHeader
        title="Custom AI Models"
        description="Tailored AI solutions for your specific needs"
        image="https://images.unsplash.com/photo-1501526029524-a8ea952b15be"
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

export default CustomAIModels;