import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const Footer: React.FC = () => {
  const { profile } = useLanguage();
  return (
    <footer className="py-40 px-6 border-t border-white/5 bg-transparent relative z-10">
      <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
        <img src={profile.logo} className="h-10 mb-16 opacity-20 invert brightness-200" alt="Logo" />
        <div className="flex gap-16 text-[10px] font-bold uppercase tracking-[0.5em] opacity-30 mb-20">
           <a href={profile.linkedin} target="_blank" rel="noreferrer" className="hover:opacity-100 transition-opacity text-white">LinkedIn</a>
           <a href={`mailto:${profile.email}`} className="hover:opacity-100 transition-opacity text-white">Email</a>
        </div>
        <p className="text-[9px] font-bold uppercase tracking-[1em] opacity-10 text-white">
          © {new Date().getFullYear()} NISSE LINDBERG • DESIGN ARCHIVE
        </p>
      </div>
    </footer>
  );
};

export default Footer;