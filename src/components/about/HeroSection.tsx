import React from 'react';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';

const HeroSection = () => {
  const { elementRef, isVisible } = useIntersectionObserver();

  return (
    <div className="relative min-h-[80vh] flex items-center bg-gray-950 overflow-hidden">
      {/* Background with parallax effect */}
      <div 
        className="absolute inset-0 transition-transform duration-500"
        style={{ transform: `translateY(${isVisible ? '0' : '100px'})` }}
      >
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=2000')] bg-cover bg-center bg-no-repeat" />
        <div className="absolute inset-0 bg-gradient-to-b from-gray-950/90 via-gray-950/80 to-gray-950" />
      </div>

      {/* Floating shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-float-delayed" />
      </div>

      {/* Content */}
      <div ref={elementRef} className="relative container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent transform transition-all duration-1000 ease-out"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: `translateY(${isVisible ? '0' : '50px'})`
              }}>
            Innovating the Future with AI
          </h1>
          <p className="text-xl text-gray-400 mb-8 transform transition-all duration-1000 delay-300 ease-out"
             style={{
               opacity: isVisible ? 1 : 0,
               transform: `translateY(${isVisible ? '0' : '30px'})`
             }}>
            Leading provider of AI-powered facial recognition and video analytics solutions, 
            transforming how businesses approach security and automation.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;