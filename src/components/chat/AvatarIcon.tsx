import React from 'react';
import { Brain } from 'lucide-react';

const AvatarIcon: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div className={`relative ${className}`}>
      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
        <Brain className="w-6 h-6 text-white" />
      </div>
      <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-white dark:border-gray-800"></div>
    </div>
  );
};

export default AvatarIcon;