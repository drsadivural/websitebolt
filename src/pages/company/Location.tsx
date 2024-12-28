import React from 'react';
import PageHeader from '../../components/shared/PageHeader';
import OfficeLocation from '../../components/company/OfficeLocation';

const Location = () => {
  const offices = [
    {
      country: 'JAPAN',
      name: 'Ayonix Co Ltd',
      address: 'FPG Links Jinnan 5F, 1-11-4 Jinnan, Shibuya, Tokyo, 150-0041 JAPAN',
      phone: '03-6686-3026'
    },
    {
      country: 'AUSTRALIA',
      name: 'Ayonix Pty Ltd',
      address: '470 St kilda rd, Melbourne, VIC 3004 VIC, Australia',
      phone: '(03) 9582 7000'
    },
    {
      country: 'INDIA',
      name: 'Ayonix Security Systems Private Limited',
      address: '6th Floor, JMD Galleria, Sohna Road, Sector -48, Gurugram, Haryana - 122018, India',
      phone: '+91 124 4040111'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900">
      <PageHeader
        title="Global Locations"
        description="Find Ayonix offices around the world"
        image="https://images.unsplash.com/photo-1473186578172-c141e6798cf4"
      />
      <div className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">
            Our Global Presence
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {offices.map((office) => (
              <OfficeLocation key={office.country} {...office} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Location;