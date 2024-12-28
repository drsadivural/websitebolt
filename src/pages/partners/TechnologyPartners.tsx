import React from 'react';
import PageHeader from '../../components/shared/PageHeader';
import PartnerProgram from '../../components/partners/PartnerProgram';
import PartnerCTA from '../../components/partners/PartnerCTA';
import { Cpu, Cloud, Lock } from 'lucide-react';

const TechnologyPartners = () => {
  const programs = [
    {
      icon: Cpu,
      title: 'Hardware Integration',
      description: 'Partner with us to optimize AI solutions for your hardware platforms.',
      benefits: [
        'SDK and API access',
        'Technical documentation',
        'Integration support',
        'Performance optimization',
        'Joint certification program',
        'Co-marketing opportunities'
      ]
    },
    {
      icon: Cloud,
      title: 'Cloud Solutions',
      description: 'Integrate our AI solutions with your cloud infrastructure.',
      benefits: [
        'Cloud deployment support',
        'Scalability solutions',
        'Performance testing',
        'Security compliance',
        'Technical consultation',
        'Cloud marketplace listing'
      ]
    },
    {
      icon: Lock,
      title: 'Security Solutions',
      description: 'Enhance security platforms with our AI technology.',
      benefits: [
        'Security framework access',
        'Compliance documentation',
        'Integration guidelines',
        'Testing environments',
        'Security certifications',
        'Joint solution development'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900">
      <PageHeader
        title="Technology Partners"
        description="Innovate together with cutting-edge AI technology"
        image="https://images.unsplash.com/photo-1451187580459-43490279c0fa"
      />
      <div className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">
            Technology Partnership Programs
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {programs.map((program) => (
              <PartnerProgram key={program.title} {...program} />
            ))}
          </div>
        </div>
      </div>
      <PartnerCTA type="technology" />
    </div>
  );
};

export default TechnologyPartners;