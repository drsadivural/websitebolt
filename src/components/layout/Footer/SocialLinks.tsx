import React from 'react';
import { Twitter, Linkedin, Facebook, Youtube } from 'lucide-react';

const SocialLinks = () => {
  const socialLinks = [
    { icon: Twitter, href: 'https://twitter.com/ayonixjp' },
    { icon: Linkedin, href: 'https://au.linkedin.com/company/ayonix-inc.' },
    { icon: Facebook, href: 'https://facebook.com/ayonix' },
    { icon: Youtube, href: 'https://www.youtube.com/@Ayonixcorporation' }
  ];

  return (
    <div className="flex space-x-4">
      {socialLinks.map(({ icon: Icon, href }) => (
        <a
          key={href}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-blue-500 transition-colors"
        >
          <Icon className="w-5 h-5" />
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;