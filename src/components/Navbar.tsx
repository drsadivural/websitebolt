import React, { useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { title: 'Products', items: ['AI Solutions', 'LLM Platform', 'Video Analytics', 'Face Recognition'] },
    { title: 'Solutions', items: ['Enterprise AI', 'Smart Security', 'Data Analytics', 'Custom AI Models'] },
    { title: 'Partners', items: ['Technology Partners', 'Solution Providers', 'System Integrators'] },
    { title: 'Company', items: ['About Us', 'Leadership', 'Innovation', 'Careers'] },
    { title: 'Contact', items: ['Sales', 'Support', 'Offices'] },
  ];

  return (
    <nav className="bg-white shadow-lg fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <span className="text-2xl font-bold text-blue-600">TechAI</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <div key={item.title} className="relative group">
                <button className="flex items-center space-x-1 text-gray-700 hover:text-blue-600">
                  <span>{item.title}</span>
                  <ChevronDown size={16} />
                </button>
                <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                  {item.items.map((subItem) => (
                    <a
                      key={subItem}
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50"
                    >
                      {subItem}
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-blue-600"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          {menuItems.map((item) => (
            <div key={item.title} className="px-2 pt-2 pb-3 space-y-1">
              <div className="text-gray-700 font-medium px-3 py-2">{item.title}</div>
              {item.items.map((subItem) => (
                <a
                  key={subItem}
                  href="#"
                  className="block px-3 py-2 text-sm text-gray-600 hover:bg-blue-50"
                >
                  {subItem}
                </a>
              ))}
            </div>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;