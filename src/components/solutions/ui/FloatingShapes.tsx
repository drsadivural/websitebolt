import React from 'react';

const FloatingShapes = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Geometric shapes with glass morphism */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-solution-primary/10 backdrop-blur-3xl animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-solution-secondary/10 backdrop-blur-3xl animate-float delay-1000" />
      
      {/* Grid pattern */}
      <div className="absolute inset-0" style={{
        backgroundImage: `linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px),
                         linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px)`,
        backgroundSize: '32px 32px',
        opacity: 0.05
      }} />
    </div>
  );
};

export default FloatingShapes;