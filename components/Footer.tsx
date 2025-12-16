import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const Footer: React.FC = () => {
  const { profile } = useLanguage();
  return (
    <footer className="relative z-10 bg-zinc-50 dark:bg-black/50 border-t border-zinc-200 dark:border-white/5 py-12 px-6 text-center backdrop-blur-sm transition-colors duration-300">
      <div className="flex justify-center items-center gap-4 mb-4">
         <img src={profile.logo} className="h-12 opacity-50 dark:opacity-30 dark:invert dark:brightness-200 hover:opacity-100 transition-all" alt="Logo" />
      </div>
      <p className="text-zinc-500 dark:text-zinc-600 text-sm font-medium">© {new Date().getFullYear()} {profile.name}. Crafted with focus.</p>
    </footer>
  );
};

export default Footer;