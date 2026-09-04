'use client';
import { createContext, useState, useContext } from 'react';
import es from '../locales/es';
import en from '../locales/en';

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState('es');

  const toggleLanguage = () => {
    setLanguage(prev => (prev === 'es' ? 'en' : 'es'));
  };

  const translations = language === 'es' ? es : en;

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t: translations }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}