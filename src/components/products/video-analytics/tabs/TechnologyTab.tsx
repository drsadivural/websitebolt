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
            Our video analytics platform is built on cutting-edge technologies to deliver
            accurate, real-time insights and robust security features.
          </p>
        </div>
      </FadeInSection>

      <FadeInSection>
        <div className="grid gap-8">
          {[
            {
              icon: Cpu,
              title: 'AI & Machine Learning',
              description: 'Advanced computer vision and deep learning algorithms',
              details: [
                'Object Detection & Tracking',
                'Behavior Analysis',
                'Pattern Recognition',
                'Scene Understanding'
              ]
            },
            {
              icon: Network,
              title: 'Processing Pipeline',
              description: 'High-performance video processing infrastructure',
              details: [
                'Real-time Processing',
                'Edge Computing Support',
                'Scalable Architecture',
                'Low Latency Analysis'
              ]
            },
            {
              icon: Lock,
              title: 'Security Features',
              description: 'Enterprise-grade security and privacy controls',
              details: [
                'End-to-end Encryption',
                'Privacy Masking',
                'Access Control',
                'Audit Logging'
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
};

export default TechnologyTab;