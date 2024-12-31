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
            Built on cutting-edge hardware and software technologies to deliver optimal performance
            and reliability at the edge.
          </p>
        </div>
      </FadeInSection>

      <FadeInSection>
        <div className="grid gap-8">
          {[
            {
              icon: Cpu,
              title: 'Hardware Architecture',
              description: 'High-performance computing platform',
              details: [
                'ARM A76 Processor',
                'Mali-G610 GPU',
                'Neural Processing Unit',
                'Hardware Acceleration'
              ]
            },
            {
              icon: Network,
              title: 'Network Infrastructure',
              description: 'Advanced networking capabilities',
              details: [
                'Multi-gigabit Ethernet',
                'Wireless Connectivity',
                'Load Balancing',
                'Failover Support'
              ]
            },
            {
              icon: Lock,
              title: 'Security Features',
              description: 'Enterprise-grade security measures',
              details: [
                'Hardware Encryption',
                'Secure Boot',
                'Access Control',
                'Security Monitoring'
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