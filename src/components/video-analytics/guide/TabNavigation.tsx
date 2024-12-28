import React from 'react';
import { Book, Cpu, Image, FileText } from 'lucide-react';

interface TabNavigationProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const TabNavigation: React.FC<TabNavigationProps> = ({ activeTab, onTabChange }) => {
  const tabs = [
    { id: 'overview', label: 'Overview', icon: Book },
    { id: 'technical', label: 'Technical Features', icon: Cpu },
    { id: 'gallery', label: 'Visual Gallery', icon: Image },
    { id: 'resources', label: 'Resources', icon: FileText }
  ];

  return (
    <div className="flex space-x-4 overflow-x-auto">
      {tabs.map(({ id, label, icon: Icon }) => (
        <button
          key={id}
          onClick={() => onTabChange(id)}
          className={`flex items-center px-6 py-3 rounded-lg transition-colors ${
            activeTab === id
              ? 'bg-blue-600 text-white'
              : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
          }`}
        >
          <Icon className="w-5 h-5 mr-2" />
          {label}
        </button>
      ))}
    </div>
  );
};

export default TabNavigation;