import React from 'react';
import { Check } from 'lucide-react';
import FadeInSection from '../../../animations/FadeInSection';

const plans = [
  {
    name: 'Basic',
    price: '$299',
    period: 'per month',
    description: 'Essential face recognition features',
    features: [
      'Up to 1,000 faces',
      'Basic face detection',
      'Identity verification',
      'Email support',
      '30-day data retention'
    ]
  },
  {
    name: 'Professional',
    price: '$799',
    period: 'per month',
    description: 'Advanced features and capabilities',
    features: [
      'Up to 10,000 faces',
      'Advanced face detection',
      'Liveness detection',
      'Priority support',
      'API access',
      '90-day data retention'
    ]
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: 'contact sales',
    description: 'Full-featured enterprise solution',
    features: [
      'Unlimited faces',
      'Custom model training',
      'Advanced analytics',
      'Dedicated support',
      'Full API access',
      'Custom retention period'
    ]
  }
];

const PricingTab = () => {
  return (
    <div className="space-y-16">
      <FadeInSection>
        <div className="prose prose-invert max-w-none text-center">
          <h2>Flexible Pricing Plans</h2>
          <p className="text-xl text-gray-300">
            Choose the plan that best fits your face recognition needs
          </p>
        </div>
      </FadeInSection>

      <FadeInSection>
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <div key={plan.name} className="bg-gray-800 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
              <div className="mb-4">
                <span className="text-4xl font-bold text-white">{plan.price}</span>
                <span className="text-gray-400 ml-2">{plan.period}</span>
              </div>
              <p className="text-gray-300 mb-6">{plan.description}</p>
              <ul className="space-y-4">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start">
                    <Check className="w-5 h-5 text-blue-400 mr-2 mt-0.5" />
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>
              <button className="w-full mt-8 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                Get Started
              </button>
            </div>
          ))}
        </div>
      </FadeInSection>
    </div>
  );
};

export default PricingTab;