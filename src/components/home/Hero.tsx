import React from 'react';
import { Brain, Video, Scan } from 'lucide-react';
import FeatureCard from '../shared/FeatureCard';

const features = [
  {
    icon: Brain,
    title: 'LLM Technology',
    description: 'State-of-the-art language models for enterprise solutions'
  },
  {
    icon: Video,
    title: 'Video Analytics',
    description: 'Real-time video processing and intelligent analysis'
  },
  {
    icon: Scan,
    title: 'Face Recognition',
    description: 'Advanced biometric security and authentication systems'
  }
];

const Hero: React.FC = () => {
  return (
    <div className="relative h-screen">
      <div className="absolute inset-0 overflow-hidden">
        <video
          className="w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
          poster="https://images.unsplash.com/photo-1639803938107-1566950d0004"
        >
          <source
            src="https://cdn.coverr.co/videos/coverr-artificial-intelligence-visualization-2741/1080p.mp4"
            type="video/mp4"
          />
        </video>
        <div className="absolute inset-0 bg-black opacity-60"></div>
      </div>

      <div className="relative h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-8">
            Welcome to <span className="text-blue-400">Ayonix AI Technologies</span>
          </h1>
          <p className="text-xl text-gray-200 mb-12 max-w-3xl mx-auto">
            Leading the future with advanced AI solutions in Language Processing,
            Video Analytics, and Facial Recognition Technology
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {features.map((feature, index) => (
              <FeatureCard key={index} {...feature} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;