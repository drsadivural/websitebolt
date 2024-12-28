import React from 'react';
import { LucideIcon } from 'lucide-react';
import PartnerBenefits from './PartnerBenefits';

interface PartnerProgramProps {
  icon: LucideIcon;
  title: string;
  description: string;
  benefits: string[];
}

const PartnerProgram: React.FC<PartnerProgramProps> = ({
  icon: Icon,
  title,
  description,
  benefits
}) => {
  return (
    <div className="bg-gradient-to-br from-gray-900 via-rose-900/20 to-gray-900 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-rose-900/20">
      <div className="flex items-center mb-6">
        <Icon className="w-8 h-8 text-rose-400 mr-3" />
        <h3 className="text-2xl font-semibold text-rose-100">{title}</h3>
      </div>
      <p className="text-rose-200 mb-6">{description}</p>
      <PartnerBenefits benefits={benefits} />
    </div>
  );
};

export default PartnerProgram;