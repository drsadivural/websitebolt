import React from 'react';
import { Shield, Camera, Lock, AlertTriangle, Users, Cpu } from 'lucide-react';
import SolutionLayout from '../../components/solutions/layout/SolutionLayout';
import HeroSection from '../../components/solutions/ui/HeroSection';
import FeatureGrid from '../../components/solutions/ui/FeatureGrid';
import FloatingShapes from '../../components/solutions/ui/FloatingShapes';

const features = [
  {
    icon: Shield,
    title: 'Threat Detection',
    description: 'AI-powered threat detection and prevention with real-time alerts'
  },
  {
    icon: Camera,
    title: 'Smart Surveillance',
    description: 'Intelligent video surveillance with advanced analytics'
  },
  {
    icon: Lock,
    title: 'Access Control',
    description: 'Advanced biometric access control with multi-factor authentication'
  },
  {
    icon: AlertTriangle,
    title: 'Incident Response',
    description: 'Automated incident detection and rapid response protocols'
  },
  {
    icon: Users,
    title: 'Identity Management',
    description: 'Centralized identity and access management system'
  },
  {
    icon: Cpu,
    title: 'Edge Processing',
    description: 'Real-time security processing at the network edge'
  }
];

const SmartSecurity = () => {
  return (
    <SolutionLayout>
      <div className="relative min-h-screen">
        <FloatingShapes />
        <HeroSection
          title="Smart Security Solutions"
          description="Next-generation security powered by advanced AI technology"
        />
        <FeatureGrid features={features} />
      </div>
    </SolutionLayout>
  );
};

export default SmartSecurity;