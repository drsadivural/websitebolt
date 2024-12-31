import React from 'react';
import { Brain, Zap, Globe } from 'lucide-react';
import FadeInSection from '../../../animations/FadeInSection';

const OverviewTab = () => {
  return (
    <div className="space-y-16">
      <FadeInSection>
        <div className="prose prose-invert max-w-none">
          <h2>Next-Generation AI Assistant</h2>
          <p className="text-xl text-gray-300">
            Harness the power of advanced artificial intelligence to transform your business operations,
            enhance customer experiences, and drive innovation across your organization.
          </p>
        </div>
      </FadeInSection>

      <FadeInSection>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: Brain,
              title: 'Advanced Intelligence',
              description: 'Powered by state-of-the-art language models and neural networks'
            },
            {
              icon: Zap,
              title: 'Real-time Processing',
              description: 'Instant responses and real-time data analysis capabilities'
            },
            {
              icon: Globe,
              title: 'Global Support',
              description: 'Multilingual support with understanding of cultural context'
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
}

export default OverviewTab;