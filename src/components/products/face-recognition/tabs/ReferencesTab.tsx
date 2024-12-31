import React from 'react';
import { Star } from 'lucide-react';
import FadeInSection from '../../../animations/FadeInSection';

const references = [
  {
    company: 'Global Security Corp',
    industry: 'Security',
    quote: 'Ayonix\'s face recognition system has revolutionized our access control and security operations.',
    author: 'Robert Chen',
    role: 'Security Director'
  },
  {
    company: 'SmartCity Solutions',
    industry: 'Government',
    quote: 'The accuracy and speed of the face recognition system have greatly enhanced our public safety initiatives.',
    author: 'Sarah Johnson',
    role: 'Project Manager'
  },
  {
    company: 'AirportTech International',
    industry: 'Aviation',
    quote: 'Implementation of this system has significantly improved our passenger processing and security measures.',
    author: 'Michael Brown',
    role: 'Operations Director'
  }
];

const ReferencesTab = () => {
  return (
    <div className="space-y-16">
      <FadeInSection>
        <div className="prose prose-invert max-w-none">
          <h2>Success Stories</h2>
          <p className="text-xl text-gray-300">
            See how organizations are transforming their security with our face recognition technology
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