import React from 'react';
import PageHeader from '../../components/shared/PageHeader';
import PartnerCard from '../../components/partners/PartnerCard';
import { Building, Users, Globe } from 'lucide-react';

const SolutionProviders = () => {
  return (
    <div>
      <PageHeader
        title="Solution Providers"
        description="Build innovative solutions with our AI technology"
        image="https://images.unsplash.com/photo-1600880292203-757bb62b4baf"
      />
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <PartnerCard
              icon={Building}
              title="Enterprise Solutions"
              description="Develop enterprise-grade AI solutions"
              benefits={[
                "Enterprise SDK access",
                "Implementation support",
                "Partner certification",
                "Priority support"
              ]}
            />
            <PartnerCard
              icon={Users}
              title="Industry Solutions"
              description="Create industry-specific AI applications"
              benefits={[
                "Industry frameworks",
                "Vertical solutions",
                "Domain expertise",
                "Market insights"
              ]}
            />
            <PartnerCard
              icon={Globe}
              title="Global Partners"
              description="Expand your reach with our global network"
              benefits={[
                "Global deployment support",
                "Regional expertise",
                "Market access",
                "Localization support"
              ]}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SolutionProviders;