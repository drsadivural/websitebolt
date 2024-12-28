import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';

interface MenuItemProps {
  title: string;
  items: Array<{
    title: string;
    path: string;
  }>;
  t: (key: string) => string;
  isContact?: boolean;
}

const MenuItem: React.FC<MenuItemProps> = ({ title, items, t, isContact }) => {
  if (isContact) {
    return (
      <Link
        to="/contact/sales"
        className="px-4 py-2 bg-blue-600/20 hover:bg-blue-600/30 text-blue-400 rounded-lg transition-all duration-300 backdrop-blur-sm border border-blue-500/20 hover:border-blue-500/40"
      >
        {t(`menu.${title.toLowerCase()}`)}
      </Link>
    );
  }

  return (
    <div className="relative group">
      <button className="flex items-center space-x-1 text-gray-300 py-2 px-4 rounded-lg transition-all duration-300 hover:bg-gray-800 group-hover:text-blue-400">
        <span>{t(`menu.${title.toLowerCase()}`)}</span>
        <ChevronDown className="w-4 h-4 transition-transform duration-300 group-hover:rotate-180" />
      </button>
      <div className="absolute left-0 mt-2 w-48 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
        <div className="py-2 bg-gray-800 rounded-lg shadow-xl border border-gray-700">
          {items.map((item) => (
            <Link
              key={item.title}
              to={item.path}
              className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 hover:text-blue-400 transition-all duration-300 first:rounded-t-lg last:rounded-b-lg"
            >
              {t(`${title.toLowerCase()}.${item.title.toLowerCase().replace(/\s+/g, '-')}`)}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MenuItem;