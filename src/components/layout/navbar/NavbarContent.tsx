import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from '../../../hooks/useTranslation';
import MenuItem from '../MenuItem';
import SearchBar from '../../shared/SearchBar';
import { menuItems } from '../../../data/menuItems';

const NavbarContent = () => {
  const { t } = useTranslation();

  return (
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
      </div>
    </div>
  );
};

export default NavbarContent;