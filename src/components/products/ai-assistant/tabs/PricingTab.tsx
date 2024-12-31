import React from 'react';
import { Check } from 'lucide-react';
import FadeInSection from '../../../animations/FadeInSection';

const plans = [
  {
    name: 'Starter',
    price: '$99',
    period: 'per month',
    description: 'Perfect for small businesses and startups',
    features: [
      'Up to 1,000 AI interactions',
      'Basic analytics',
      'Email support',
      'Standard API access',
      '99.9% uptime SLA'
    ]
  },
  {
    name: 'Professional',
    price: '$299',
    period: 'per month',
    description: 'Ideal for growing companies',
    features: [
      'Up to 10,000 AI interactions',
      'Advanced analytics',
      'Priority support',
      'Full API access',
      'Custom integrations',
      '99.99% uptime SLA'
    ]
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: 'contact sales',
    description: 'For large organizations',
    features: [
      'Unlimited AI interactions',
      'Enterprise analytics',
      '24/7 dedicated support',
      'Custom model training',
      'On-premise deployment',
      'Custom SLA'
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
            Choose the plan that best fits your needs
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
}

export default PricingTab;