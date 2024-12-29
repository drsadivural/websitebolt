import React, { useState, useEffect } from 'react';
import { cn } from '../../../utils/styles';

interface NavbarContainerProps {
  children: React.ReactNode;
}

const NavbarContainer: React.FC<NavbarContainerProps> = ({ children }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const threshold = 50;
      setIsScrolled(scrollY > threshold);

      // Calculate scroll progress
      const winScroll = document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (winScroll / height) * 100;
      setScrollProgress(scrolled);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
      "bg-gray-900/80 backdrop-blur-sm", // Initial semi-transparent state
      isScrolled && "bg-gray-900/95 backdrop-blur-md shadow-lg" // More opaque when scrolled
    )}>
      {/* Progress bar */}
      <div 
        className="absolute bottom-0 left-0 h-[1px] bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-300"
        style={{ width: `${scrollProgress}%` }}
      />
      {children}
    </div>
  );
};

export default NavbarContainer;