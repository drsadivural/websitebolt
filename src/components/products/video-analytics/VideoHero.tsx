import React from 'react';

interface VideoHeroProps {
  title: string;
  description: string;
  backgroundImage: string;
}

const VideoHero: React.FC<VideoHeroProps> = ({ title, description, backgroundImage }) => {
  return (
    <div className="relative h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-blue-600/20 to-purple-600/20 backdrop-blur-sm" />
      <div className="relative z-10 text-center px-4">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 gradient-text">
          {title}
        </h1>
        <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto">
          {description}
        </p>
        <div className="animate-scroll">
          <div className="w-6 h-10 border-2 border-gray-400 rounded-full mx-auto">
            <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mx-auto mt-2" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoHero;