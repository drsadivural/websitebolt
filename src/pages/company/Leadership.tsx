import React from 'react';
import PageHeader from '../../components/shared/PageHeader';
import TeamMember from '../../components/company/TeamMember';

const Leadership = () => {
  const team = [
    {
      name: "Dr. Sadi Vural",
      role: "Chief Executive Director",
      image: "https://images.unsplash.com/photo-1735181094336-7fa757df9622?q=80&w=3000",
      bio: "AI Scientist and Ayonix's Founder. Former Visiting Associate Professor at Osaka University, Dr. Vural leads the development of cutting-edge AI and facial recognition technologies that are transforming the industry."
    },
    {
      name: "Michael Rodriguez",
      role: "Chief Technology Officer",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e",
      bio: "20+ years experience in AI and machine learning, leading our technical innovation and development."
    },
    {
      name: "Emily Watson",
      role: "Chief Innovation Officer",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956",
      bio: "Pioneer in AI research, leading breakthrough developments in facial recognition technology."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900">
      <PageHeader
        title="Leadership Team"
        description="Meet the visionaries leading our innovation"
        image="https://images.unsplash.com/photo-1521737711867-e3b97375f902"
      />
      <div className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">
            Our Leadership Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member) => (
              <TeamMember key={member.name} {...member} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Leadership;