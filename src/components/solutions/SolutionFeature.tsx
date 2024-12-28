import React from 'react';
import { LucideIcon } from 'lucide-react';

interface SolutionFeatureProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

const SolutionFeature: React.FC<SolutionFeatureProps> = ({ icon: Icon, title, description }) => {
  return (
    <div className="p-6 bg-gray-50 rounded-xl hover:shadow-lg transition-shadow">
      <Icon className="w-12 h-12 text-blue-600 mb-4" />
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default SolutionFeature;