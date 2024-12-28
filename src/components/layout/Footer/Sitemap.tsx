import React from 'react';
import { Link } from 'react-router-dom';

interface SitemapSection {
  title: string;
  links: Array<{
    label: string;
    path: string;
  }>;
}

const sitemapData: SitemapSection[] = [
];

const Sitemap = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-8 border-t border-gray-700">
      {sitemapData.map((section) => (
        <div key={section.title}>
          <h3 className="text-white font-semibold mb-3">{section.title}</h3>
          <ul className="space-y-2">
            {section.links.map((link) => (
              <li key={link.path}>
                <Link
                  to={link.path}
                  className="text-sm text-gray-400 hover:text-blue-400 transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Sitemap;