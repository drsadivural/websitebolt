import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { menuItems } from '../../data/menuItems';
import { useTranslation } from '../../hooks/useTranslation';
import { useTheme } from '../../contexts/ThemeContext';
import SearchBar from '../shared/SearchBar';
import MenuItem from './MenuItem';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useTranslation();
  const { theme } = useTheme();

  return (
    <nav className="bg-gray-900 text-white fixed w-full z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center group">
              <span className="text-2xl font-bold transition-colors duration-300">
                <span className="text-blue-400 group-hover:text-blue-300">ayon</span>
                <span className="text-blue-500 group-hover:text-blue-400">ix</span>
              </span>
              <span className="ml-2 text-sm text-gray-300 hidden sm:block group-hover:text-gray-200">
                GENAI TECHNOLOGIES
              </span>
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-2">
            {menuItems.map((item) => (
              <MenuItem
                key={item.title}
                title={item.title}
                items={item.items}
                t={t}
                isContact={item.title === 'Contact'}
              />
            ))}
            <SearchBar />
          </div>

          <div className="md:hidden flex items-center space-x-4">
            <SearchBar />
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-gray-300 hover:text-blue-400 rounded-lg hover:bg-gray-800 transition-all duration-300"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden bg-gray-800 rounded-b-lg">
            {menuItems.map((item) => (
              <div key={item.title} className="px-2 pt-2 pb-3 space-y-1">
                <div className="text-gray-300 font-medium px-3 py-2">
                  {t(`menu.${item.title.toLowerCase()}`)}
                </div>
                {item.items.map((subItem) => (
                  <Link
                    key={subItem.title}
                    to={subItem.path}
                    className="block px-3 py-2 text-sm text-gray-400 hover:bg-gray-700 hover:text-blue-400 rounded-lg transition-all duration-300"
                    onClick={() => setIsOpen(false)}
                  >
                    {t(`${item.title.toLowerCase()}.${subItem.title.toLowerCase().replace(/\s+/g, '-')}`)}
                  </Link>
                ))}
              </div>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;