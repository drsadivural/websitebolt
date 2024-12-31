import React from 'react';
import { Star } from 'lucide-react';
import FadeInSection from '../../../animations/FadeInSection';

const references = [
  {
    company: 'DataEdge Solutions',
    industry: 'Data Centers',
    quote: 'AIBOX has revolutionized our edge computing capabilities with its powerful AI processing and reliability.',
    author: 'David Kim',
    role: 'Infrastructure Director'
  },
  {
    company: 'SmartCity Technologies',
    industry: 'Smart Infrastructure',
    quote: 'The performance and versatility of AIBOX have significantly improved our city-wide surveillance system.',
    author: 'Lisa Chen',
    role: 'Technical Director'
  },
  {
    company: 'SecureNet Systems',
    industry: 'Security',
    quote: 'AIBOX\'s edge processing capabilities have enhanced our security operations with real-time analytics.',
    author: 'Mark Thompson',
    role: 'Operations Manager'
  }
];

const ReferencesTab = () => {
  return (
    <div className="space-y-16">
      <FadeInSection>
        <div className="prose prose-invert max-w-none">
          <h2>Customer Success Stories</h2>
          <p className="text-xl text-gray-300">
            See how organizations are leveraging AIBOX for edge computing and AI processing
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