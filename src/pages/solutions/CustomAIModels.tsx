import React from 'react';
import { Brain, Settings, Layers, Database, Cloud, Shield } from 'lucide-react';
import SolutionLayout from '../../components/solutions/layout/SolutionLayout';
import HeroSection from '../../components/solutions/ui/HeroSection';
import FeatureGrid from '../../components/solutions/ui/FeatureGrid';
import FloatingShapes from '../../components/solutions/ui/FloatingShapes';

const features = [
  {
    icon: Brain,
    title: 'Custom Training',
    description: 'AI models trained specifically for your unique requirements'
  },
  {
    icon: Settings,
    title: 'Model Optimization',
    description: 'Fine-tuning and performance optimization for efficiency'
  },
  {
    icon: Layers,
    title: 'Architecture Design',
    description: 'Custom neural network architectures for your needs'
  },
  {
    icon: Database,
    title: 'Data Processing',
    description: 'Advanced data preprocessing and augmentation pipelines'
  },
  {
    icon: Cloud,
    title: 'Deployment Options',
    description: 'Flexible deployment for cloud or edge computing'
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
      <div className="relative min-h-screen">
        <FloatingShapes />
        <HeroSection
          title="Custom AI Models"
          description="Tailored artificial intelligence solutions for your specific needs"
        />
        <FeatureGrid features={features} />
      </div>
    </SolutionLayout>
  );
};

export default CustomAIModels;