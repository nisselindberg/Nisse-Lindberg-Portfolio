import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { CONTENT, UI } from '../constants';

type Language = 'sv' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: keyof typeof UI['sv']) => string;
  projects: typeof CONTENT['sv']['projects'];
  profile: typeof CONTENT['sv']['profile'];
  toggleLanguage: () => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('sv');

  useEffect(() => {
    // Detect browser language
    const browserLang = navigator.language.toLowerCase();
    if (browserLang.startsWith('sv')) {
      setLanguage('sv');
    } else {
      setLanguage('en');
    }
  }, []);

  const t = (key: keyof typeof UI['sv']) => {
    return UI[language][key] || key;
  };

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'sv' ? 'en' : 'sv');
  };

  const value = {
    language,
    setLanguage,
    t,
    projects: CONTENT[language].projects,
    profile: CONTENT[language].profile,
    toggleLanguage
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};