import React from 'react';
import { Shield, Camera, Lock } from 'lucide-react';
import PageHeader from '../../components/shared/PageHeader';
import SolutionLayout from '../../components/solutions/layout/SolutionLayout';
import Card from '../../components/solutions/ui/Card';
import FadeInSection from '../../components/animations/FadeInSection';

const features = [
  {
    icon: Shield,
    title: 'Threat Detection',
    description: 'AI-powered threat detection and prevention with real-time alerts'
  },
  {
    icon: Camera,
    title: 'Surveillance',
    description: 'Intelligent video surveillance systems with advanced analytics'
  },
  {
    icon: Lock,
    title: 'Access Control',
    description: 'Advanced biometric access control with multi-factor authentication'
  }
];

const SmartSecurity = () => {
  return (
    <SolutionLayout>
      <PageHeader
        title="Smart Security Solutions"
        description="Next-generation security powered by AI"
        image="https://images.unsplash.com/photo-1558002038-1055907df827"
      />
      
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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

export default SmartSecurity;