import React, { useContext } from 'react';
import { Globe } from 'lucide-react';
import { LanguageContext } from '../../../contexts/LanguageContext';

const LanguageSwitcher = () => {
  const { language, setLanguage } = useContext(LanguageContext);
  
  const languages = [
    { code: 'en', label: 'English' },
    { code: 'ja', label: '日本語' }
  ];

  return (
    <div className="flex items-center space-x-2">
      <Globe className="w-5 h-5 text-gray-400" />
      <select 
        className="bg-transparent text-sm text-gray-400 hover:text-gray-300 cursor-pointer focus:outline-none"
        value={language}
        onChange={(e) => setLanguage(e.target.value as 'en' | 'ja')}
      >
        {languages.map(({ code, label }) => (
          <option key={code} value={code}>{label}</option>
        ))}
      </select>
    </div>
  );
};

export default LanguageSwitcher;