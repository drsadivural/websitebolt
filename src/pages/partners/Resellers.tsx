import React from 'react';
import PageHeader from '../../components/shared/PageHeader';
import PartnerProgram from '../../components/partners/PartnerProgram';
import PartnerCTA from '../../components/partners/PartnerCTA';
import { Store, Building2, Globe } from 'lucide-react';

const Resellers = () => {
  const programs = [
    {
      icon: Store,
      title: 'Authorized Reseller',
      description: 'Join our network of authorized resellers and offer cutting-edge AI solutions to your customers.',
      benefits: [
        'Access to complete product portfolio',
        'Sales and marketing support',
        'Technical training and certification',
        'Competitive pricing and margins',
        'Lead generation and referrals',
        'Partner portal access'
      ]
    },
    {
      icon: Building2,
      title: 'Solution Provider',
      description: 'Become a certified solution provider and deliver comprehensive AI-powered security solutions.',
      benefits: [
        'Advanced technical training',
        'Project implementation support',
        'Custom solution development',
        'Priority technical support',
        'Joint marketing initiatives',
        'Demo equipment program'
      ]
    },
    {
      icon: Globe,
      title: 'Global Partner',
      description: 'Expand your reach as a global partner and access international markets with our support.',
      benefits: [
        'Exclusive territory rights',
        'International market support',
        'Multi-language resources',
        'Global project coordination',
        'Regional marketing support',
        'International training programs'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900">
      <PageHeader
        title="Reseller Program"
        description="Partner with us to deliver cutting-edge AI solutions"
        image="https://images.unsplash.com/photo-1552664730-d307ca884978"
      />
      <div className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">
            Partner Programs
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {programs.map((program) => (
              <PartnerProgram key={program.title} {...program} />
            ))}
          </div>
        </div>
      </div>
      <PartnerCTA type="reseller" />
    </div>
  );
};

export default Resellers;