import React from 'react';
import HeroSection from '../components/home/sections/HeroSection';
import FeaturesSection from '../components/home/sections/FeaturesSection';
import ProductsSection from '../components/home/sections/ProductsSection';
import WhyChooseUsSection from '../components/home/sections/WhyChooseUsSection';
import NewsSection from '../components/home/sections/NewsSection';
import StatsSection from '../components/home/sections/StatsSection';
import CTASection from '../components/home/sections/CTASection';

const HomePage = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <FeaturesSection />
      <ProductsSection />
      <WhyChooseUsSection />
      <NewsSection />
      <StatsSection />
      <CTASection />
    </div>
  );
};

export default HomePage;