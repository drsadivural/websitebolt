import React from 'react';
import { Shield, Zap, Users, Globe, Award, HeartHandshake } from 'lucide-react';
import FadeInSection from '../../animations/FadeInSection';

const features = [
  {
    icon: Shield,
    title: 'Enterprise Security',
    description: 'Advanced security protocols and compliance with international standards'
  },
  {
    icon: Zap,
    title: 'High Performance',
    description: 'Lightning-fast processing with industry-leading accuracy rates'
  },
  {
    icon: Users,
    title: 'Expert Support',
    description: '24/7 dedicated technical support and consultation'
  },
  {
    icon: Globe,
    title: 'Global Presence',
    description: 'Serving clients in over 30 countries with local support'
  },
  {
    icon: Award,
    title: 'Industry Recognition',
    description: 'Multiple awards for innovation and excellence in AI technology'
  },
  {
    icon: HeartHandshake,
    title: 'Trusted Partner',
    description: 'Long-term partnerships with leading enterprises worldwide'
  }
];

const WhyChooseUsSection = () => {
  return (
    <section className="py-24 bg-gray-900">
      <div className="container mx-auto px-4">
        <FadeInSection>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-white">
              Why Choose Ayonix
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Experience the difference with our cutting-edge AI solutions and unmatched expertise
            </p>
          </div>
        </FadeInSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FadeInSection key={feature.title} direction="up" delay={index * 200}>
              <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-lg border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 group">
                <feature.icon className="w-12 h-12 text-blue-400 mb-6 transform group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-xl font-semibold mb-4 text-white group-hover:text-blue-400 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            </FadeInSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;