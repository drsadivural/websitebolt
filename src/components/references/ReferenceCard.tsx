import React from 'react';
import { Building } from 'lucide-react';

interface ReferenceCardProps {
  name: string;
  country: string;
  description?: string;
  logo?: string;
}

const ReferenceCard: React.FC<ReferenceCardProps> = ({ name, country, description, logo }) => {
  return (
    <div className="bg-gray-800 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
      <div className="flex items-start space-x-4">
        {logo ? (
          <img src={logo} alt={name} className="w-12 h-12 object-contain" />
        ) : (
          <Building className="w-12 h-12 text-blue-400" />
        )}
        <div>
          <h3 className="text-lg font-semibold text-white">{name}</h3>
          <p className="text-sm text-blue-400">{country}</p>
          {description && (
            <p className="mt-2 text-sm text-gray-300">{description}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ReferenceCard;