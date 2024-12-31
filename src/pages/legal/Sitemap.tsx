import React from 'react';
import { Link } from 'react-router-dom';
import PageHeader from '../../components/shared/PageHeader';
import { menuItems } from '../../data/menuItems';

const Sitemap = () => {
  return (
    <div className="min-h-screen bg-gray-900">
      <PageHeader
        title="Sitemap"
        description="Complete overview of our website structure"
        image="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d"
      />
      
      <div className="py-16">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            {menuItems.map((section) => (
              <div key={section.title} className="space-y-4">
                <h2 className="text-2xl font-bold text-white border-b border-gray-800 pb-2">
                  {section.title}
                </h2>
                <ul className="space-y-2">
                  {section.items.map((item) => (
                    <li key={item.title}>
                      <Link
                        to={item.path}
                        className="text-gray-300 hover:text-blue-400 transition-colors"
                      >
                        {item.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            {/* Legal Section */}
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-white border-b border-gray-800 pb-2">
                Legal
              </h2>
              <ul className="space-y-2">
                <li>
                  <Link
                    to="/privacy-policy"
                    className="text-gray-300 hover:text-blue-400 transition-colors"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    to="/sitemap"
                    className="text-gray-300 hover:text-blue-400 transition-colors"
                  >
                    Sitemap
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sitemap;