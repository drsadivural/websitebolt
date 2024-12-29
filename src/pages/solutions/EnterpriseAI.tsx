import React from 'react';
import { Building2, BarChart3, Shield, Cpu, Network, Lock } from 'lucide-react';
import SolutionLayout from '../../components/solutions/layout/SolutionLayout';
import FeatureCard from '../../components/solutions/ui/FeatureCard';
import FloatingShapes from '../../components/solutions/ui/FloatingShapes';
import FadeInSection from '../../components/animations/FadeInSection';

const features = [
  {
    icon: Building2,
    title: 'Business Intelligence',
    description: 'Transform raw data into actionable insights with AI-powered analytics'
  },
  {
    icon: BarChart3,
    title: 'Process Optimization',
    description: 'Streamline operations with intelligent automation and predictive analytics'
  },
  {
    icon: Shield,
    title: 'Enterprise Security',
    description: 'Advanced threat detection and prevention powered by machine learning'
  },
  {
    icon: Cpu,
    title: 'Edge Computing',
    description: 'Deploy AI models at the edge for real-time processing and insights'
  },
  {
    icon: Network,
    title: 'Scalable Infrastructure',
    description: 'Cloud-native architecture that grows with your business needs'
  },
  {
    icon: Lock,
    title: 'Data Privacy',
    description: 'Enterprise-grade security with built-in compliance frameworks'
  }
];

const EnterpriseAI = () => {
  return (
    <SolutionLayout>
      <div className="relative min-h-screen">
        <FloatingShapes />
        
        {/* Hero Section */}
        <div className="relative pt-32 pb-20 px-4">
          <div className="container mx-auto text-center max-w-4xl">
            <FadeInSection>
              <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Enterprise AI Solutions
              </h1>
              <p className="text-xl md:text-2xl text-solution-text-body mb-12">
                Transform your business with powerful AI solutions that drive growth, efficiency, and innovation
              </p>
              <button className="px-8 py-4 bg-solution-primary text-white rounded-lg hover:bg-solution-primary/90 transition-colors">
                Get Started
              </button>
            </FadeInSection>
          </div>
        </div>

        {/* Features Grid */}
        <div className="relative py-20 px-4">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <FadeInSection key={feature.title} delay={index * 100}>
                  <FeatureCard {...feature} />
                </FadeInSection>
              ))}
            </div>
          </div>
        </div>
      </div>
    </SolutionLayout>
  );
};

export default EnterpriseAI;