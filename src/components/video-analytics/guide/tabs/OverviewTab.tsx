import React from 'react';
import { Shield, Brain, Network } from 'lucide-react';
import FadeInSection from '../../../animations/FadeInSection';

const OverviewTab = () => {
  return (
    <div className="space-y-12">
      {/* Introduction */}
      <FadeInSection>
        <div className="prose prose-invert max-w-none">
          <h2>What is an Intrusion Detection System?</h2>
          <p>
            An Intrusion Detection System (IDS) is a sophisticated security technology that monitors 
            network or system activities for malicious behavior or policy violations. It plays a 
            crucial role in identifying potential security breaches and unauthorized access attempts.
          </p>
        </div>
      </FadeInSection>

      {/* Core Components */}
      <FadeInSection>
        <h3 className="text-2xl font-bold text-white mb-6">Core Components</h3>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              icon: Shield,
              title: 'Detection Engine',
              description: 'Analyzes network traffic and system behavior patterns to identify potential threats'
            },
            {
              icon: Brain,
              title: 'Analysis Module',
              description: 'Processes and correlates data to determine the nature and severity of threats'
            },
            {
              icon: Network,
              title: 'Response System',
              description: 'Implements automated responses and alerts security personnel to potential breaches'
            }
          ].map((component) => (
            <div key={component.title} className="bg-gray-800 p-6 rounded-lg">
              <component.icon className="w-12 h-12 text-blue-400 mb-4" />
              <h4 className="text-xl font-semibold text-white mb-2">{component.title}</h4>
              <p className="text-gray-300">{component.description}</p>
            </div>
          ))}
        </div>
      </FadeInSection>

      {/* Implementation Examples */}
      <FadeInSection>
        <h3 className="text-2xl font-bold text-white mb-6">Real-World Implementation</h3>
        <div className="grid md:grid-cols-2 gap-8">
          {[
            {
              title: 'Financial Sector',
              description: 'Protecting sensitive financial data and transactions from cyber threats',
              metrics: ['99.9% Uptime', '< 0.1% False Positives', '24/7 Monitoring']
            },
            {
              title: 'Healthcare Facilities',
              description: 'Securing patient data and medical systems against unauthorized access',
              metrics: ['HIPAA Compliant', 'Real-time Alerts', 'Automated Response']
            }
          ].map((example) => (
            <div key={example.title} className="bg-gray-800 p-6 rounded-lg">
              <h4 className="text-xl font-semibold text-white mb-2">{example.title}</h4>
              <p className="text-gray-300 mb-4">{example.description}</p>
              <div className="flex flex-wrap gap-2">
                {example.metrics.map((metric) => (
                  <span key={metric} className="px-3 py-1 bg-blue-500/10 text-blue-400 rounded-full text-sm">
                    {metric}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </FadeInSection>
    </div>
  );
};

export default OverviewTab;