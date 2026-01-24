import React, { useEffect, useState } from 'react';
import { HashRouter as Router, Routes, Route, useLocation, Link } from 'react-router-dom';
import Home from './components/Home';
import ProjectDetail from './components/ProjectDetail';
import About from './components/About';
import Contact from './components/Contact';
import AIAssistant from './components/AIAssistant';
import Footer from './components/Footer';
import { motion } from 'framer-motion';
import { LanguageProvider, useLanguage } from './contexts/LanguageContext';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { t, language, toggleLanguage, profile } = useLanguage();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-700 flex items-center justify-between px-6 md:px-12 py-8 ${isScrolled ? 'backdrop-blur-3xl bg-black/60 py-4 border-b border-white/10' : ''}`}>
      <Link to="/" className="flex items-center group h-full">
        <div className="flex items-center">
          <img 
            src={profile.logo} 
            alt="Logo" 
            className="h-20 md:h-28 w-auto invert brightness-200 transition-all duration-500 group-hover:scale-105" 
          />
          <span className="ml-6 text-[10px] md:text-[11px] font-medium tracking-[0.5em] uppercase text-white/50 font-outfit leading-none whitespace-nowrap">
            {profile.name}
          </span>
        </div>
      </Link>

      <div className="flex items-center gap-10">
        <div className="hidden md:flex items-center gap-10">
          {[
            { label: t('nav_start'), path: '/' },
            { label: t('nav_about'), path: '/about' },
            { label: t('nav_contact'), path: '/contact' }
          ].map((item) => (
            <Link 
              key={item.path} 
              to={item.path} 
              className="text-[10px] font-bold tracking-[0.25em] uppercase text-white/30 hover:text-white transition-all duration-300 font-outfit"
            >
              {item.label}
            </Link>
          ))}
        </div>
        
        <button 
          onClick={toggleLanguage} 
          className="w-12 h-12 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 hover:border-brand-500/50 transition-all duration-300 flex items-center justify-center overflow-hidden shadow-lg text-lg leading-none"
          title={language === 'sv' ? 'Switch to English' : 'Byt till Svenska'}
        >
          {language === 'sv' ? '🇸🇪' : '🇬🇧'}
        </button>
      </div>
    </nav>
  );
};

const FuturisticBackground = () => (
  <div className="fixed inset-0 z-[-10] overflow-hidden bg-[#010409] pointer-events-none">
    <motion.div 
      animate={{ 
        x: ['-20%', '30%', '-20%'],
        y: ['-10%', '15%', '-10%'],
      }}
      transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
      className="absolute top-[-5%] left-[-10%] w-[100%] h-[100%] bg-blue-600 opacity-60 blur-[150px] rounded-full mix-blend-screen" 
    />
    <motion.div 
      animate={{ 
        x: ['40%', '-20%', '40%'],
        y: ['30%', '-10%', '30%'],
      }}
      transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
      className="absolute bottom-[-10%] right-[-10%] w-[80%] h-[80%] bg-amber-500 opacity-40 blur-[180px] rounded-full mix-blend-overlay" 
    />
    <motion.div 
      animate={{ 
        scale: [1, 1.4, 1],
        opacity: [0.3, 0.6, 0.3],
        x: ['-10%', '10%', '-10%']
      }}
      transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      className="absolute top-[10%] right-[10%] w-[60%] h-[60%] bg-emerald-500 opacity-30 blur-[140px] rounded-full mix-blend-screen" 
    />
    <motion.div 
      animate={{ 
        x: ['-30%', '20%', '-30%'],
        y: ['40%', '60%', '40%'],
      }}
      transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
      className="absolute bottom-[5%] left-[5%] w-[70%] h-[70%] bg-rose-700 opacity-40 blur-[160px] rounded-full mix-blend-screen" 
    />
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.5)_100%)] pointer-events-none" />
  </div>
);

const AppContent: React.FC = () => {
  useEffect(() => {
    document.documentElement.classList.add('dark');
  }, []);

  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen selection:bg-brand-500 selection:text-white font-sans relative text-white bg-transparent">
        <FuturisticBackground />
        <Navigation />
        
        <main className="relative z-10 bg-transparent">
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