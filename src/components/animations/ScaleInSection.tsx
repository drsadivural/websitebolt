import React from 'react';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';

interface ScaleInSectionProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}

const ScaleInSection: React.FC<ScaleInSectionProps> = ({
  children,
  delay = 0,
  className = ''
}) => {
  const { elementRef, isVisible } = useIntersectionObserver();

  return (
    <div
      ref={elementRef}
      className={`transition-all duration-1000 ${className}`}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'scale(1)' : 'scale(0.8)',
        transitionDelay: `${delay}ms`
      }}
    >
      {children}
    </div>
  );
};

export default ScaleInSection;