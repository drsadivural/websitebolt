import React from 'react';
import { Server, Shield, Cpu } from 'lucide-react';
import FadeInSection from '../../../animations/FadeInSection';

const OverviewTab = () => {
  return (
    <div className="space-y-16">
      <FadeInSection>
        <div className="prose prose-invert max-w-none">
          <h2>Edge Computing Solution</h2>
          <p className="text-xl text-gray-300">
            AIBOX is an all-in-one AI-powered edge computing solution that brings advanced
            processing capabilities closer to your data sources.
          </p>
        </div>
      </FadeInSection>

      <FadeInSection>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: Server,
              title: 'Edge Processing',
              description: 'Process data locally with powerful edge computing capabilities'
            },
            {
              icon: Shield,
              title: 'Secure Computing',
              description: 'Enhanced security with local data processing and storage'
            },
            {
              icon: Cpu,
              title: 'AI Acceleration',
              description: 'Hardware-accelerated AI processing for optimal performance'
            }
          ].map((feature) => (
            <div key={feature.title} className="bg-gray-800 p-6 rounded-lg">
              <feature.icon className="w-12 h-12 text-blue-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
              <p className="text-gray-300">{feature.description}</p>
            </div>
          ))}
        </div>
      </FadeInSection>
    </div>
  );
};

export default OverviewTab;