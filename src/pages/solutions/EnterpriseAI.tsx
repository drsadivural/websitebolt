import React from 'react';
import { Building2, BarChart3, Shield } from 'lucide-react';
import PageHeader from '../../components/shared/PageHeader';
import SolutionLayout from '../../components/solutions/layout/SolutionLayout';
import Card from '../../components/solutions/ui/Card';
import FadeInSection from '../../components/animations/FadeInSection';

const features = [
  {
    icon: Building2,
    title: 'Business Intelligence',
    description: 'AI-powered analytics for better business decisions'
  },
  {
    icon: BarChart3,
    title: 'Process Optimization',
    description: 'Streamline operations with intelligent automation'
  },
  {
    icon: Shield,
    title: 'Enterprise Security',
    description: 'Advanced security solutions for enterprise data'
  }
];

const EnterpriseAI = () => {
  return (
    <SolutionLayout>
      <PageHeader
        title="Enterprise AI Solutions"
        description="Transform your business with enterprise-grade AI solutions"
        image="https://images.unsplash.com/photo-1451187580459-43490279c0fa"
      />
      
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FadeInSection key={feature.title} delay={index * 100}>
              <Card className="p-6 hover:translate-y-[-4px]">
                <feature.icon className="w-12 h-12 text-[#3d84ff] mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-[#e0e0e0]">{feature.description}</p>
              </Card>
            </FadeInSection>
          ))}
        </div>
      </div>
    </SolutionLayout>
  );
};

export default EnterpriseAI;