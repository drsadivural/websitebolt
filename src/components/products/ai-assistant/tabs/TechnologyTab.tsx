import React from 'react';
import { Cpu, Network, Lock } from 'lucide-react';
import FadeInSection from '../../../animations/FadeInSection';

const TechnologyTab = () => {
  return (
    <div className="space-y-16">
      <FadeInSection>
        <div className="prose prose-invert max-w-none">
          <h2>Technology Stack</h2>
          <p className="text-xl text-gray-300">
            Built on cutting-edge AI technologies and robust infrastructure to deliver
            reliable, scalable, and secure AI solutions.
          </p>
        </div>
      </FadeInSection>

      <FadeInSection>
        <div className="grid gap-8">
          {[
            {
              icon: Cpu,
              title: 'Advanced AI Models',
              description: 'Utilizing state-of-the-art language models and neural networks',
              details: [
                'Large Language Models',
                'Neural Network Architecture',
                'Natural Language Processing',
                'Machine Learning Algorithms'
              ]
            },
            {
              icon: Network,
              title: 'Infrastructure',
              description: 'Enterprise-grade infrastructure for reliable performance',
              details: [
                'Cloud-native Architecture',
                'Edge Computing Support',
                'High Availability',
                'Auto-scaling Capabilities'
              ]
            },
            {
              icon: Lock,
              title: 'Security & Compliance',
              description: 'Comprehensive security measures and compliance frameworks',
              details: [
                'End-to-end Encryption',
                'Data Privacy Controls',
                'Regulatory Compliance',
                'Access Management'
              ]
            }
          ].map((section) => (
            <div key={section.title} className="bg-gray-800 p-8 rounded-lg">
              <div className="flex items-start">
                <section.icon className="w-8 h-8 text-blue-400 mr-4 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">{section.title}</h3>
                  <p className="text-gray-300 mb-4">{section.description}</p>
                  <ul className="grid md:grid-cols-2 gap-4">
                    {section.details.map((detail) => (
                      <li key={detail} className="flex items-center text-gray-300">
                        <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </FadeInSection>
    </div>
  );
}

export default TechnologyTab;