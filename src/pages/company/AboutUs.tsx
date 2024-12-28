import React from 'react';
import HeroSection from '../../components/about/HeroSection';
import CompanyOverview from '../../components/about/CompanyOverview';
import StatsSection from '../../components/about/StatsSection';
import TeamSection from '../../components/about/TeamSection';
import CTASection from '../../components/about/CTASection';

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-gray-950">
      <HeroSection />
      <CompanyOverview />
      <StatsSection />
      <TeamSection />
      <CTASection />
    </div>
  );
};

export default AboutUs;