import React from 'react';
import { LucideIcon } from 'lucide-react';

interface AIBoxFeatureProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

const AIBoxFeature: React.FC<AIBoxFeatureProps> = ({ icon: Icon, title, description }) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
      <Icon className="w-12 h-12 text-blue-600 mb-4" />
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default AIBoxFeature;