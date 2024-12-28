import React from 'react';
import { LucideIcon } from 'lucide-react';

interface AIAssistantCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  image: string;
}

const AIAssistantCard: React.FC<AIAssistantCardProps> = ({ icon: Icon, title, description, image }) => {
  return (
    <div className="group relative overflow-hidden rounded-xl bg-gray-800 transition-all duration-300 hover:scale-105">
      <div className="aspect-video w-full overflow-hidden">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 p-6">
        <div className="flex items-center space-x-3 text-white">
          <Icon className="h-6 w-6" />
          <h3 className="text-lg font-semibold">{title}</h3>
        </div>
        
        <div className="mt-2 transform opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
          <p className="text-gray-300">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default AIAssistantCard;