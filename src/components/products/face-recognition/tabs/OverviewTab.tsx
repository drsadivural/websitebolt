import React from 'react';
import { Scan, Shield, Brain } from 'lucide-react';
import FadeInSection from '../../../animations/FadeInSection';

const OverviewTab = () => {
  return (
    <div className="space-y-16">
      <FadeInSection>
        <div className="prose prose-invert max-w-none">
          <h2>Advanced Face Recognition</h2>
          <p className="text-xl text-gray-300">
            Industry-leading face recognition technology powered by advanced AI algorithms,
            delivering unmatched accuracy and performance for enterprise security needs.
          </p>
        </div>
      </FadeInSection>

      <FadeInSection>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: Scan,
              title: 'High Accuracy',
              description: 'Industry-leading recognition accuracy with low false positive rates'
            },
            {
              icon: Shield,
              title: 'Enterprise Security',
              description: 'Advanced security features for enterprise-grade deployments'
            },
            {
              icon: Brain,
              title: 'AI-Powered',
              description: 'Deep learning algorithms for superior recognition performance'
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