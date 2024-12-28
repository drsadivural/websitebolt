import React from 'react';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';

const stats = [
  { number: '500+', label: 'Global Clients' },
  { number: '30+', label: 'Countries' },
  { number: '50+', label: 'Industry Awards' },
  { number: '10+', label: 'Years Experience' }
];

const StatsSection = () => {
  const { elementRef, isVisible } = useIntersectionObserver();

  return (
    <div className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
      <div ref={elementRef} className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={stat.label}
              className="text-center transform transition-all duration-1000 ease-out"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: `translateY(${isVisible ? '0' : '30px'})`,
                transitionDelay: `${index * 200}ms`
              }}
            >
              <div className="text-4xl font-bold text-white mb-2">
                {isVisible ? stat.number : '0'}
              </div>
              <div className="text-blue-100">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StatsSection;