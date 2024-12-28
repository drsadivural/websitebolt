import { useContext } from 'react';
import { LanguageContext } from '../contexts/LanguageContext';
import { translations } from '../i18n/translations';

export const useTranslation = () => {
  const { language } = useContext(LanguageContext);
  
  const t = (key: string) => {
    const keys = key.split('.');
    let value = translations[language];
    
    for (const k of keys) {
      if (value?.[k]) {
        value = value[k];
      } else {
        return key;
      }
    }
    
    return value;
  };

  return { t };
};