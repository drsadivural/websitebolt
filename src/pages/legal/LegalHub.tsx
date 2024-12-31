import React from 'react';
import { Link } from 'react-router-dom';
import { FileText, Shield, Book, CreditCard, Scale, Copyright, Hash } from 'lucide-react';
import PageHeader from '../../components/shared/PageHeader';
import FadeInSection from '../../components/animations/FadeInSection';

const legalSections = [
  {
    icon: FileText,
    title: 'Terms of Service',
    description: 'Terms and conditions for using Ayonix products and services',
    path: '/legal/terms'
  },
  {
    icon: Shield,
    title: 'Privacy Policy',
    description: 'How we collect, use, and protect your data',
    path: '/privacy-policy'
  },
  {
    icon: Book,
    title: 'Software License Agreements',
    description: 'License terms for Ayonix software products',
    path: '/legal/licenses'
  },
  {
    icon: CreditCard,
    title: 'Sales & Refund Policy',
    description: 'Information about purchases, returns, and refunds',
    path: '/legal/sales'
  },
  {
    icon: Scale,
    title: 'Legal Notices',
    description: 'Important legal information and disclaimers',
    path: '/legal/notices'
  },
  {
    icon: Copyright,
    title: 'Copyright Information',
    description: 'Copyright policies and intellectual property rights',
    path: '/legal/copyright'
  },
  {
    icon: Hash,
    title: 'Trademark Guidelines',
    description: 'Guidelines for using Ayonix trademarks and logos',
    path: '/legal/trademarks'
  }
];

const LegalHub = () => {
  return (
    <div className="min-h-screen bg-gray-900">
      <PageHeader
        title="Legal Information"
        description="Important legal documents and policies"
        image="https://images.unsplash.com/photo-1589829545856-d10d557cf95f"
      />

      <div className="py-16">
        <div className="container mx-auto px-4">
          <FadeInSection>
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">Legal Documents</h2>
              <p className="text-gray-300">
                Access important legal information about our products, services, and policies
              </p>
            </div>
          </FadeInSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {legalSections.map((section) => (
              <FadeInSection key={section.title}>
                <Link
                  to={section.path}
                  className="block bg-gray-800 rounded-lg p-6 hover:bg-gray-700 transition-colors"
                >
                  <section.icon className="w-8 h-8 text-blue-400 mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-2">{section.title}</h3>
                  <p className="text-gray-300">{section.description}</p>
                </Link>
              </FadeInSection>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LegalHub;