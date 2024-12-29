import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import NavbarContainer from './navbar/NavbarContainer';
import NavbarContent from './navbar/NavbarContent';
import { menuItems } from '../../data/menuItems';
import { useTranslation } from '../../hooks/useTranslation';
import SearchBar from '../shared/SearchBar';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useTranslation();

  return (
    <NavbarContainer>
      <NavbarContent />

      {/* Mobile menu button */}
      <div className="md:hidden absolute right-4 top-4 flex items-center">
        <SearchBar />
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="p-2 text-gray-300 hover:text-blue-400 rounded-lg hover:bg-gray-800 transition-all duration-300 ml-2"
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-800/95 backdrop-blur-xl">
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
    </NavbarContainer>
  );
};

export default Navbar;