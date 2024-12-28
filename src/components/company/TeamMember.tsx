import React from 'react';

interface TeamMemberProps {
  name: string;
  role: string;
  image: string;
  bio: string;
}

const TeamMember: React.FC<TeamMemberProps> = ({ name, role, image, bio }) => {
  return (
    <div className="bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
      <div className="relative">
        <img src={image} alt={name} className="w-full h-64 object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent"></div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-white mb-1">{name}</h3>
        <p className="text-blue-400 mb-3">{role}</p>
        <p className="text-gray-300">{bio}</p>
      </div>
    </div>
  );
};

export default TeamMember;