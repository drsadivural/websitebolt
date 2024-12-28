import React from 'react';
import PageHeader from '../../components/shared/PageHeader';
import PartnerCard from '../../components/partners/PartnerCard';
import { Settings, Network, Shield } from 'lucide-react';

const SystemIntegrators = () => {
  return (
    <div>
      <PageHeader
        title="System Integrators"
        description="Integrate AI solutions seamlessly into existing systems"
        image="https://images.unsplash.com/photo-1451187580459-43490279c0fa"
      />
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <PartnerCard
              icon={Settings}
              title="Integration Services"
              description="Comprehensive integration support and tools"
              benefits={[
                "Integration frameworks",
                "Technical documentation",
                "API access",
                "Developer support"
              ]}
            />
            <PartnerCard
              icon={Network}
              title="System Architecture"
              description="Design and implement AI-powered architectures"
              benefits={[
                "Architecture blueprints",
                "Best practices",
                "Performance optimization",
                "Scalability patterns"
              ]}
            />
            <PartnerCard
              icon={Shield}
              title="Security Integration"
              description="Secure integration solutions and practices"
              benefits={[
                "Security guidelines",
                "Compliance frameworks",
                "Risk assessment",
                "Security testing"
              ]}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SystemIntegrators;