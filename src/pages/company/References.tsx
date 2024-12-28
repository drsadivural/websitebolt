import React from 'react';
import PageHeader from '../../components/shared/PageHeader';
import ReferenceCard from '../../components/references/ReferenceCard';

const References = () => {
  const japaneseReferences = [
    { name: 'CTC Techno Solutions', country: 'Japan' },
    { name: 'Panasonic', country: 'Japan' },
    { name: 'Fujitsu', country: 'Japan' },
    { name: 'Fujitelecom', country: 'Japan' },
    { name: 'Tosco', country: 'Japan' },
    { name: 'Toyota', country: 'Japan' }
  ];

  const internationalReferences = [
    { name: 'United Nations', country: 'International' },
    { name: 'Vietnam Police', country: 'Vietnam' },
    { name: 'Turkish Police', country: 'Turkey' },
    { name: 'UK Chubbs Insurance', country: 'United Kingdom' },
    { name: 'Ipsidy Inc.', country: 'USA' },
    { name: 'Sri Lanka International Airport', country: 'Sri Lanka' },
    { name: 'Argentina Federal Intelligence', country: 'Argentina' },
    { name: 'Asghabat city Municipality', country: 'Turkmenistan' },
    { name: 'Pt. Lax Teknologi Indonesia ', country: 'Indonesia' },
    { name: 'LexisNexis Inc.', country: 'USA' }
  ];

  return (
    <div className="min-h-screen bg-gray-900">
      <PageHeader
        title="References"
        description="Trusted by leading organizations worldwide"
        image="https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=3174"
      />

      <div className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          {/* Japanese References */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-8 text-white">
              References in Japan
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {japaneseReferences.map((reference) => (
                <ReferenceCard
                  key={reference.name}
                  name={reference.name}
                  country={reference.country}
                />
              ))}
            </div>
          </div>

          {/* International References */}
          <div>
            <h2 className="text-2xl font-bold mb-8 text-white">
              International References
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {internationalReferences.map((reference) => (
                <ReferenceCard
                  key={reference.name}
                  name={reference.name}
                  country={reference.country}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default References;