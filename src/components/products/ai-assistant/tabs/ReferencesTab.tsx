import React from 'react';
import { Star } from 'lucide-react';
import FadeInSection from '../../../animations/FadeInSection';

const references = [
  {
    company: 'TechCorp International',
    industry: 'Technology',
    quote: 'The AI Assistant has transformed how we handle customer support, reducing response times by 60%.',
    author: 'Sarah Chen',
    role: 'CTO'
  },
  {
    company: 'Global Finance Ltd',
    industry: 'Financial Services',
    quote: 'Implementing this AI solution has significantly improved our operational efficiency and customer satisfaction.',
    author: 'Michael Rodriguez',
    role: 'Head of Innovation'
  },
  {
    company: 'HealthCare Plus',
    industry: 'Healthcare',
    quote: 'The AI Assistant has helped us streamline patient communications and administrative tasks.',
    author: 'Dr. Emily Watson',
    role: 'Director of Digital Transformation'
  }
];

const ReferencesTab = () => {
  return (
    <div className="space-y-16">
      <FadeInSection>
        <div className="prose prose-invert max-w-none">
          <h2>Customer Success Stories</h2>
          <p className="text-xl text-gray-300">
            See how leading organizations are transforming their operations with our AI Assistant
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
}

export default ReferencesTab;