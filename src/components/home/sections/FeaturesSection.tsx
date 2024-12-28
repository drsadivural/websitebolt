import React from 'react';
import { Brain, Shield, Cpu } from 'lucide-react';

const features = [
  {
    icon: Brain,
    title: 'Ready-built products',
    description: 'AI Products, Face recognition and Video analytics'
  },
  {
    icon: Shield,
    title: '20 years of AI experience',
    description: 'Delivering solutions and services more than 20 years in the market'
  },
  {
    icon: Cpu,
    title: 'Good Support program',
    description: '7/24 Customer support in various languages in 7 continents'
  }
];

const FeaturesSection = () => {
  return (
    <section className="py-24 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-white">Why Choose Us</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            We deliver innovative AI solutions that help businesses stay ahead in the digital age.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div key={feature.title} className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-lg border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300">
              <feature.icon className="w-12 h-12 text-blue-400 mb-6" />
              <h3 className="text-xl font-semibold mb-4 text-white">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;