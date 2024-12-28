import React from 'react';
import PageHeader from '../../components/shared/PageHeader';
import PartnerProgram from '../../components/partners/PartnerProgram';
import PartnerCTA from '../../components/partners/PartnerCTA';
import { Building, Truck, Network } from 'lucide-react';

const Distributors = () => {
  const programs = [
    {
      icon: Building,
      title: 'Regional Distributor',
      description: 'Become a regional distributor and grow your business with our AI technology solutions.',
      benefits: [
        'Exclusive regional distribution rights',
        'Volume-based pricing benefits',
        'Regional market development fund',
        'Local marketing support',
        'Technical training program',
        'Dedicated account management'
      ]
    },
    {
      icon: Truck,
      title: 'Value-Added Distributor',
      description: 'Add value to your distribution network with our comprehensive AI solutions.',
      benefits: [
        'Pre and post-sales support',
        'Solution bundling opportunities',
        'Technical certification program',
        'Marketing development funds',
        'Partner enablement resources',
        'Priority inventory access'
      ]
    },
    {
      icon: Network,
      title: 'Master Distributor',
      description: 'Lead distribution networks as our master distributor in your territory.',
      benefits: [
        'Territory exclusivity rights',
        'Sub-distributor management',
        'Advanced business planning',
        'Executive-level support',
        'Custom pricing programs',
        'Strategic partnership status'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900">
      <PageHeader
        title="Distributor Program"
        description="Expand your portfolio with leading AI technology"
        image="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40"
      />
      <div className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">
            Distribution Programs
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {programs.map((program) => (
              <PartnerProgram key={program.title} {...program} />
            ))}
          </div>
        </div>
      </div>
      <PartnerCTA type="distributor" />
    </div>
  );
};

export default Distributors;