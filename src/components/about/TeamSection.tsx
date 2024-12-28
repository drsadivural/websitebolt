import React from 'react';
import { Linkedin, Mail } from 'lucide-react';
import FadeInSection from '../animations/FadeInSection';

const teamMembers = [
  {
    name: 'Dr. Sadi Vural',
    role: 'Chief Executive Director',
    bio: 'AI Scientist and Ayonix\'s Founder. Former Visiting Associate Professor at Osaka University, leading the development of cutting-edge AI technologies.',
    image: 'https://images.unsplash.com/photo-1735181094336-7fa757df9622?q=80&w=3000',
    linkedin: 'https://linkedin.com/in/sadivural'
  },
  {
    name: 'Michael Rodriguez',
    role: 'Chief Technology Officer',
    bio: '20+ years experience in AI and machine learning. Leading technical innovation and development of our core AI platforms.',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e',
    linkedin: '#'
  },
  {
    name: 'Emily Watson',
    role: 'Chief Innovation Officer',
    bio: 'Pioneer in AI research with multiple patents. Leading breakthrough developments in facial recognition technology.',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956',
    linkedin: '#'
  }
];

const TeamSection = () => {
  return (
    <section className="py-24 bg-gray-950">
      <div className="container mx-auto px-4">
        <FadeInSection>
          <h2 className="text-3xl font-bold mb-12 text-white text-center">Leadership Team</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <FadeInSection key={member.name} delay={index * 200}>
                <div className="bg-gray-800 rounded-lg overflow-hidden group">
                  <div className="relative h-64">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/60 to-transparent"></div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-white mb-1">{member.name}</h3>
                    <p className="text-blue-400 mb-3">{member.role}</p>
                    <p className="text-gray-300 mb-4">{member.bio}</p>
                    
                    <div className="flex space-x-4">
                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-blue-400 transition-colors"
                      >
                        <Linkedin className="w-5 h-5" />
                      </a>
                      <a
                        href={`mailto:${member.name.toLowerCase().replace(' ', '.')}@ayonix.com`}
                        className="text-gray-400 hover:text-blue-400 transition-colors"
                      >
                        <Mail className="w-5 h-5" />
                      </a>
                    </div>
                  </div>
                </div>
              </FadeInSection>
            ))}
          </div>
        </FadeInSection>
      </div>
    </section>
  );
};

export default TeamSection;