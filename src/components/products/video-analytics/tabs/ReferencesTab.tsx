import React from 'react';
import { Star } from 'lucide-react';
import FadeInSection from '../../../animations/FadeInSection';

const references = [
  {
    company: 'SecureNet Solutions',
    industry: 'Security',
    quote: 'The video analytics system has dramatically improved our threat detection capabilities and response times.',
    author: 'James Wilson',
    role: 'Head of Security'
  },
  {
    company: 'Metro Transit Authority',
    industry: 'Transportation',
    quote: 'Implementation of this system has enhanced our surveillance efficiency and passenger safety.',
    author: 'Maria Garcia',
    role: 'Operations Director'
  },
  {
    company: 'RetailTech Corp',
    industry: 'Retail',
    quote: 'The analytics insights have helped us optimize store layouts and improve customer experience.',
    author: 'David Chen',
    role: 'Innovation Manager'
  }
];

const ReferencesTab = () => {
  return (
    <div className="space-y-16">
      <FadeInSection>
        <div className="prose prose-invert max-w-none">
          <h2>Client Success Stories</h2>
          <p className="text-xl text-gray-300">
            See how organizations are transforming their operations with our video analytics solutions
          </p>
        </div>
      </FadeInSection>

      <FadeInSection>
        <div className="grid gap-8">
          {references.map((reference) => (
            <div key={reference.company} className="bg-gray-800 p-8 rounded-lg">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" />
                ))}
              </div>
              <blockquote className="text-xl text-gray-300 mb-6">
                "{reference.quote}"
              </blockquote>
              <div>
                <div className="font-semibold text-white">{reference.author}</div>
                <div className="text-gray-400">{reference.role}</div>
                <div className="text-sm text-gray-500 mt-1">
                  {reference.company} • {reference.industry}
                </div>
              </div>
            </div>
          ))}
        </div>
      </FadeInSection>
    </div>
  );
};

export default ReferencesTab;