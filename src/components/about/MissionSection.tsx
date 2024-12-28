import React from 'react';
import { Brain, Shield, Target } from 'lucide-react';
import FadeInSection from '../animations/FadeInSection';

const values = [
  {
    icon: Brain,
    title: 'Innovation',
    description: 'Pushing the boundaries of AI technology to create groundbreaking solutions'
  },
  {
    icon: Shield,
    title: 'Security',
    description: 'Ensuring the highest standards of data protection and privacy'
  },
  {
    icon: Target,
    title: 'Excellence',
    description: 'Delivering exceptional quality and performance in everything we do'
  }
];

const MissionSection = () => {
  return (
    <div className="py-24 bg-gray-900">
      <div className="container mx-auto px-4">
        <FadeInSection>
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-white">Our Mission</h2>
            <p className="text-xl text-gray-400">
              To revolutionize industries through innovative AI solutions that empower 
              businesses to achieve unprecedented levels of efficiency, security, and growth.
            </p>
          </div>
        </FadeInSection>

        <div className="grid md:grid-cols-3 gap-8 mt-16">
          {values.map((value, index) => (
            <FadeInSection key={value.title} delay={index * 200}>
              <div className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-lg border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300">
                <value.icon className="w-12 h-12 text-blue-400 mb-6" />
                <h3 className="text-xl font-semibold mb-4 text-white">{value.title}</h3>
                <p className="text-gray-400">{value.description}</p>
              </div>
            </FadeInSection>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MissionSection;