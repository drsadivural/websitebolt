import React from 'react';
import { Check } from 'lucide-react';

interface PartnerBenefitProps {
  benefits: string[];
}

const PartnerBenefits: React.FC<PartnerBenefitProps> = ({ benefits }) => {
  return (
    <ul className="space-y-3">
      {benefits.map((benefit, index) => (
        <li key={index} className="flex items-start">
          <Check className="w-5 h-5 text-green-400 mt-0.5 mr-3 flex-shrink-0" />
          <span className="text-gray-300">{benefit}</span>
        </li>
      ))}
    </ul>
  );
};

export default PartnerBenefits;