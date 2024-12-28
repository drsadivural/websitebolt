import React from 'react';
import { Brain, Video, Scan } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative h-screen">
      {/* Background Video */}
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

      {/* Content */}
      <div className="relative h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-8">
            Transforming Tomorrow with
            <span className="text-blue-400"> AI Innovation</span>
          </h1>
          <p className="text-xl text-gray-200 mb-12 max-w-3xl mx-auto">
            Leading the future with advanced AI solutions in Language Processing,
            Video Analytics, and Facial Recognition Technology
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white/10 backdrop-blur-lg p-6 rounded-xl">
              <div className="flex justify-center mb-4">
                <Brain className="w-12 h-12 text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                LLM Technology
              </h3>
              <p className="text-gray-200">
                State-of-the-art language models for enterprise solutions
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-lg p-6 rounded-xl">
              <div className="flex justify-center mb-4">
                <Video className="w-12 h-12 text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                Video Analytics
              </h3>
              <p className="text-gray-200">
                Real-time video processing and intelligent analysis
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-lg p-6 rounded-xl">
              <div className="flex justify-center mb-4">
                <Scan className="w-12 h-12 text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                Face Recognition
              </h3>
              <p className="text-gray-200">
                Advanced biometric security and authentication systems
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;