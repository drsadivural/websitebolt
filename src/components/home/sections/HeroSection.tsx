import React from 'react';
import { ArrowRight } from 'lucide-react';
import FadeInSection from '../../animations/FadeInSection';

const HeroSection = () => {
  return (
    <div className="relative min-h-screen flex items-center bg-gray-950">
      {/* Video Background */}
      <div className="absolute inset-0 overflow-hidden">
        <video
          className="w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
          poster="https://images.unsplash.com/photo-1677442136019-21780ecad995"
        >
          {/* Primary Video */}
          <source
            src="https://cdn.coverr.co/videos/coverr-neural-network-visualization-1573/1080p.mp4"
            type="video/mp4"
          />
          {/* Fallback Video */}
          <source
            src="https://cdn.coverr.co/videos/coverr-artificial-intelligence-visualization-2741/1080p.mp4"
            type="video/mp4"
          />
          {/* Captions */}
          <track
            kind="captions"
            src="captions.vtt"
            srcLang="en"
            label="English"
          />
        </video>
        <div className="absolute inset-0 bg-gradient-to-r from-gray-950 via-gray-900/95 to-gray-950"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-float-delayed"></div>
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-4">
        <FadeInSection direction="up">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-600">
              Transform Your Business with Generative AI
            </h1>
            <p className="text-xl text-gray-400 mb-8">
              Leverage cutting-edge Ayonix's generative AI solutions to increase productivity,
              enhance security, boost profitability, and accelerate business growth.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-300 flex items-center group">
                Get Started
                <ArrowRight className="ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="px-8 py-4 bg-white/5 text-white rounded-lg hover:bg-white/10 transition-all duration-300 backdrop-blur-sm border border-white/10 hover:border-blue-500/50">
                Learn More
              </button>
            </div>
          </div>
        </FadeInSection>
      </div>
    </div>
  );
};

export default HeroSection;