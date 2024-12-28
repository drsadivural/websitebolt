import React from 'react';
import { LucideIcon } from 'lucide-react';

interface VideoAnalyticsFeatureProps {
  icon: LucideIcon;
  title: string;
  description: string;
  image: string;
}

const VideoAnalyticsFeature: React.FC<VideoAnalyticsFeatureProps> = ({ 
  icon: Icon, 
  title, 
  description, 
  image 
}) => {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden">
      <div className="md:flex">
        <div className="md:w-1/2">
          <img src={image} alt={title} className="w-full h-64 object-cover" />
        </div>
        <div className="p-6 md:w-1/2">
          <div className="flex items-center mb-4">
            <Icon className="w-6 h-6 text-blue-600 mr-2" />
            <h3 className="text-xl font-semibold">{title}</h3>
          </div>
          <p className="text-gray-600">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default VideoAnalyticsFeature;