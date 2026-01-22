import React, { useEffect, useState } from 'react';
import { HashRouter as Router, Routes, Route, useLocation, Link } from 'react-router-dom';
import Home from './components/Home';
import ProjectDetail from './components/ProjectDetail';
import About from './components/About';
import Contact from './components/Contact';
import AIAssistant from './components/AIAssistant';
import Footer from './components/Footer';
import { motion, AnimatePresence } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';
import { LanguageProvider, useLanguage } from './contexts/LanguageContext';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const Navigation = ({ isDark, toggleTheme }: { isDark: boolean; toggleTheme: () => void }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { t, toggleLanguage, profile } = useLanguage();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-700 flex items-center justify-between px-6 md:px-12 py-8 ${isScrolled ? 'backdrop-blur-2xl bg-black/60 py-4 border-b border-white/5 shadow-2xl' : ''}`}>
      <Link to="/" className="flex items-center gap-4 group">
        <div className="relative">
          <img src={profile.logo} alt="Logo" className="h-8 md:h-10 w-auto invert brightness-200" />
          <div className="absolute inset-0 bg-brand-500 blur-lg opacity-0 group-hover:opacity-40 transition-opacity" />
        </div>
        <span className="text-[10px] font-bold tracking-[0.5em] uppercase opacity-20 group-hover:opacity-100 group-hover:text-brand-400 transition-all hidden md:block text-white">{profile.name}</span>
      </Link>

      <div className="flex items-center gap-8">
        <div className="hidden md:flex items-center gap-8">
          <Link to="/" className="text-[10px] font-bold tracking-[0.2em] uppercase opacity-40 hover:opacity-100 hover:text-brand-400 transition-all text-white">{t('nav_start')}</Link>
          <Link to="/about" className="text-[10px] font-bold tracking-[0.2em] uppercase opacity-40 hover:opacity-100 hover:text-brand-400 transition-all text-white">{t('nav_about')}</Link>
          <Link to="/contact" className="text-[10px] font-bold tracking-[0.2em] uppercase opacity-40 hover:opacity-100 hover:text-brand-400 transition-all text-white">{t('nav_contact')}</Link>
        </div>
        
        <div className="h-4 w-px bg-white/10 hidden md:block" />
        
        <div className="flex items-center gap-4">
          <button onClick={toggleLanguage} className="text-[10px] font-bold tracking-widest opacity-40 hover:opacity-100 hover:text-brand-400 transition-all text-white">
            EN / SV
          </button>
          <button onClick={toggleTheme} className="p-2 opacity-40 hover:opacity-100 hover:text-brand-400 transition-all text-white">
            {isDark ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </div>
      </div>
    </nav>
  );
};

const FuturisticBackground = () => (
  <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none bg-[#020202]">
    {/* Trendy AI Iridescent Blobs */}
    <motion.div 
      animate={{ 
        x: [0, 200, -150, 0], 
        y: [0, -150, 200, 0],
        scale: [1, 1.2, 0.9, 1],
      }}
      transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
      className="absolute -top-1/4 -left-1/4 w-[80%] h-[80%] bg-indigo-600/15 blur-[120px] rounded-full" 
    />
    <motion.div 
      animate={{ 
        x: [0, -250, 180, 0], 
        y: [0, 200, -200, 0],
        scale: [1, 0.8, 1.1, 1],
      }}
      transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
      className="absolute -bottom-1/4 -right-1/4 w-[75%] h-[75%] bg-fuchsia-900/15 blur-[150px] rounded-full" 
    />
    <motion.div 
      animate={{ 
        x: [100, -100, 100], 
        y: [-100, 100, -100],
        scale: [0.8, 1.2, 0.8],
      }}
      transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      className="absolute top-1/4 left-1/3 w-[50%] h-[50%] bg-cyan-500/10 blur-[130px] rounded-full" 
    />
    
    {/* Subtle central depth */}
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.8)_100%)]" />
  </div>
);

const AppContent: React.FC = () => {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    document.documentElement.classList.add('dark');
  }, []);

  const toggleTheme = () => {
    // Mantains the dark futuristic theme
    console.log("Maintaining dark mode for futuristic aesthetic.");
  };

  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen selection:bg-brand-500 selection:text-white font-sans relative overflow-x-hidden bg-black text-white">
        <FuturisticBackground />
        <Navigation isDark={isDark} toggleTheme={toggleTheme} />
        
        <main className="relative z-10">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/project/:id" element={<ProjectDetail />} /> 
          </Routes>
        </main>
        
        <Footer />
        <AIAssistant />
      </div>
    </Router>
  );
};

const App: React.FC = () => (
  <LanguageProvider>
    <AppContent />
  </LanguageProvider>
);

export default App;