import React from 'react';
import { Camera, Shield, Brain } from 'lucide-react';
import FadeInSection from '../../../animations/FadeInSection';

const OverviewTab = () => {
  return (
    <div className="space-y-16">
      <FadeInSection>
        <div className="prose prose-invert max-w-none">
          <h2>Intelligent Video Analytics</h2>
          <p className="text-xl text-gray-300">
            Transform your video surveillance into an intelligent security and business analytics system
            with our advanced AI-powered solutions.
          </p>
        </div>
      </FadeInSection>

      <FadeInSection>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: Camera,
              title: 'Smart Surveillance',
              description: 'Advanced video monitoring with real-time threat detection'
            },
            {
              icon: Shield,
              title: 'Proactive Security',
              description: 'Prevent incidents before they occur with predictive analytics'
            },
            {
              icon: Brain,
              title: 'AI-Powered Analysis',
              description: 'Deep learning algorithms for accurate object and behavior detection'
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