import React from 'react';
import { MapPin, Phone } from 'lucide-react';

interface OfficeLocationProps {
  country: string;
  name: string;
  address: string;
  phone: string;
}

const OfficeLocation: React.FC<OfficeLocationProps> = ({ country, name, address, phone }) => {
  return (
    <div className="bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
      <h3 className="text-xl font-semibold text-blue-400 mb-2">{country}</h3>
      <h4 className="font-medium text-white mb-4">{name}</h4>
      <div className="space-y-3">
        <div className="flex items-start">
          <MapPin className="w-5 h-5 text-gray-400 mr-3 mt-1" />
          <p className="text-gray-300">{address}</p>
        </div>
        <div className="flex items-center">
          <Phone className="w-5 h-5 text-gray-400 mr-3" />
          <p className="text-gray-300">{phone}</p>
        </div>
      </div>
    </div>
  );
};

export default OfficeLocation;