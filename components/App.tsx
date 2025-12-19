
import React, { useEffect, useState } from 'react';
import { HashRouter as Router, Routes, Route, useLocation, Link } from 'react-router-dom';
import Home from './Home';
import ProjectDetail from './ProjectDetail';
import About from './About';
import Contact from './Contact';
import AIAssistant from './AIAssistant';
// Added missing WorkListing import
import WorkListing from './WorkListing';
import { motion, AnimatePresence } from 'framer-motion';
import { Sun, Moon, Menu, X } from 'lucide-react';
import { LanguageProvider, useLanguage } from '../contexts/LanguageContext';
import Footer from './Footer';
import CustomCursor from './CustomCursor';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const Navigation = ({ isDark, toggleTheme }: { isDark: boolean; toggleTheme: () => void }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t, language, toggleLanguage, profile } = useLanguage();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => { setIsMenuOpen(false); }, [location.pathname]);

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-700 flex items-center justify-between px-6 md:px-12 py-10 ${isScrolled ? 'bg-white/70 dark:bg-black/70 backdrop-blur-xl py-6 border-b border-black/5 dark:border-white/5' : ''}`}>
        <Link to="/" className="relative z-[110] flex items-center gap-4 group">
          <img src={profile.logo} alt="Logo" className="h-10 md:h-12 w-auto dark:invert transition-transform group-hover:scale-105" />
          <span className="text-[10px] font-bold tracking-[0.4em] uppercase opacity-0 group-hover:opacity-100 transition-opacity hidden md:block">Nisse Lindberg</span>
        </Link>

        <div className="flex items-center gap-8 relative z-[110]">
          <button onClick={toggleLanguage} className="text-[10px] font-bold tracking-widest opacity-40 hover:opacity-100 transition-opacity">
            {language === 'sv' ? 'EN' : 'SV'}
          </button>
          <button onClick={toggleTheme} className="p-2 opacity-40 hover:opacity-100 transition-opacity">
            {isDark ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="flex items-center gap-4 group">
            <span className="text-[10px] font-bold tracking-[0.4em] uppercase hidden md:block opacity-40 group-hover:opacity-100 transition-opacity">Menu</span>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-white/95 dark:bg-black/95 backdrop-blur-2xl z-[105] flex flex-col items-center justify-center"
          >
            <div className="flex flex-col items-center gap-10">
              <Link to="/" className="text-5xl md:text-8xl font-bold tracking-tighter hover:italic transition-all">{t('nav_start')}</Link>
              <Link to="/work" className="text-5xl md:text-8xl font-bold tracking-tighter hover:italic transition-all">Work</Link>
              <Link to="/about" className="text-5xl md:text-8xl font-bold tracking-tighter hover:italic transition-all">{t('nav_about')}</Link>
              <Link to="/contact" className="text-5xl md:text-8xl font-bold tracking-tighter hover:italic transition-all">{t('nav_contact')}</Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

// Subtle, High-End Background Video Component
const BackgroundVideo = () => (
  <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none opacity-20 dark:opacity-30">
    <video
      autoPlay
      loop
      muted
      playsInline
      className="w-full h-full object-cover grayscale"
    >
      {/* High-quality abstract muted video */}
      <source src="https://assets.