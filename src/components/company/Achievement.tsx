import React from 'react';
import { LucideIcon } from 'lucide-react';

interface AchievementProps {
  icon: LucideIcon;
  title: string;
  value: string;
}

const Achievement: React.FC<AchievementProps> = ({ icon: Icon, title, value }) => {
  return (
    <div className="text-center">
      <Icon className="w-12 h-12 text-blue-400 mx-auto mb-4" />
      <div className="text-3xl font-bold mb-2 text-white">{value}</div>
      <div className="text-gray-300">{title}</div>
    </div>
  );
};

export default Achievement;