import React from 'react';
import { Shield, Zap, Bell, Search, Lock, Cloud } from 'lucide-react';
import FadeInSection from '../../../animations/FadeInSection';

const TechnicalTab = () => {
  return (
    <div className="space-y-12">
      {/* Detection Mechanisms */}
      <FadeInSection>
        <h3 className="text-2xl font-bold text-white mb-6">Detection Mechanisms</h3>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              icon: Shield,
              title: 'Signature-based',
              description: 'Matches patterns against known threat signatures'
            },
            {
              icon: Zap,
              title: 'Anomaly-based',
              description: 'Detects deviations from normal behavior patterns'
            },
            {
              icon: Search,
              title: 'Hybrid Detection',
              description: 'Combines multiple detection methods for comprehensive coverage'
            }
          ].map((mechanism) => (
            <div key={mechanism.title} className="bg-gray-800 p-6 rounded-lg">
              <mechanism.icon className="w-12 h-12 text-blue-400 mb-4" />
              <h4 className="text-xl font-semibold text-white mb-2">{mechanism.title}</h4>
              <p className="text-gray-300">{mechanism.description}</p>
            </div>
          ))}
        </div>
      </FadeInSection>

      {/* Monitoring Capabilities */}
      <FadeInSection>
        <h3 className="text-2xl font-bold text-white mb-6">Monitoring Capabilities</h3>
        <div className="bg-gray-800 rounded-lg p-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="text-xl font-semibold text-white mb-4">Real-time Monitoring</h4>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-center">
                  <Bell className="w-5 h-5 text-blue-400 mr-2" />
                  Instant threat detection and alerts
                </li>
                <li className="flex items-center">
                  <Lock className="w-5 h-5 text-blue-400 mr-2" />
                  Continuous security assessment
                </li>
                <li className="flex items-center">
                  <Cloud className="w-5 h-5 text-blue-400 mr-2" />
                  Cloud-based monitoring options
                </li>
              </ul>
            </div>
            <div className="bg-gray-700 rounded-lg p-4">
              <div className="text-sm text-gray-300">
                <div className="mb-2">Performance Metrics</div>
                <div className="space-y-2">
                  <div>
                    <div className="flex justify-between mb-1">
                      <span>Detection Rate</span>
                      <span>99.9%</span>
                    </div>
                    <div className="w-full bg-gray-600 rounded-full h-2">
                      <div className="bg-blue-500 rounded-full h-2" style={{ width: '99.9%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span>False Positive Rate</span>
                      <span>0.1%</span>
                    </div>
                    <div className="w-full bg-gray-600 rounded-full h-2">
                      <div className="bg-green-500 rounded-full h-2" style={{ width: '0.1%' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </FadeInSection>

      {/* Integration Matrix */}
      <FadeInSection>
        <h3 className="text-2xl font-bold text-white mb-6">Integration Capabilities</h3>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-800">
                <th className="px-6 py-3 text-left text-sm font-semibold text-white">Feature</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-white">Basic</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-white">Advanced</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-white">Enterprise</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-800">
              {[
                {
                  feature: 'SIEM Integration',
                  basic: '✓',
                  advanced: '✓',
                  enterprise: '✓'
                },
                {
                  feature: 'Firewall Integration',
                  basic: '✓',
                  advanced: '✓',
                  enterprise: '✓'
                },
                {
                  feature: 'Cloud Security',
                  basic: '-',
                  advanced: '✓',
                  enterprise: '✓'
                },
                {
                  feature: 'API Access',
                  basic: '-',
                  advanced: 'Limited',
                  enterprise: 'Full'
                }
              ].map((row) => (
                <tr key={row.feature} className="bg-gray-900">
                  <td className="px-6 py-4 text-sm text-gray-300">{row.feature}</td>
                  <td className="px-6 py-4 text-sm text-gray-300">{row.basic}</td>
                  <td className="px-6 py-4 text-sm text-gray-300">{row.advanced}</td>
                  <td className="px-6 py-4 text-sm text-gray-300">{row.enterprise}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </FadeInSection>
    </div>
  );
};

export default TechnicalTab;