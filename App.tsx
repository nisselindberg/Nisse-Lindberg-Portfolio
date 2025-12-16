import React, { useEffect, useState } from 'react';
import { HashRouter as Router, Routes, Route, useLocation, Link } from 'react-router-dom';
import Home from './components/Home';
import ProjectDetail from './components/ProjectDetail';
import About from './components/About';
import Contact from './components/Contact';
import AIAssistant from './components/AIAssistant';
import ContactCTA from './components/ContactCTA';
import Footer from './components/Footer';
import { motion, AnimatePresence } from 'framer-motion';
import { Sun, Moon, Menu, X } from 'lucide-react';
import { LanguageProvider, useLanguage } from './contexts/LanguageContext';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

// Fixed: Made children optional to resolve 'Property children is missing' error
const NavLink = ({ to, children, onClick }: { to: string; children?: React.ReactNode; onClick?: () => void }) => {
  const location = useLocation();
  const isActive = location.pathname === to || (to !== '/' && location.pathname.startsWith(to));
  
  const handleClick = () => {
    if (onClick) onClick();
    if (location.pathname === to) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <Link 
      to={to} 
      onClick={handleClick}
      className={`relative px-5 py-3 rounded-full text-2xl md:text-lg font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 ${
        isActive 
          ? 'text-zinc-900 dark:text-white' 
          : 'text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-200'
      }`}
    >
      {isActive && (
        <motion.span
          layoutId="nav-pill"
          className="absolute -bottom-1 left-4 right-4 h-0.5 bg-zinc-900 dark:bg-white rounded-full hidden md:block"
          initial={false}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        />
      )}
      <span className="relative z-10">{children}</span>
    </Link>
  );
};

const Navigation = ({ isDark, toggleTheme }: { isDark: boolean; toggleTheme: () => void }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { t, language, toggleLanguage, profile } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Ensure menu closes on route change and scroll is restored
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
      document.documentElement.style.overflow = 'hidden'; // Ensure html is also locked on some mobile browsers
    } else {
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
    }
    
    // Cleanup function to ensure scroll is restored if component unmounts
    return () => {
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/80 dark:bg-black/80 backdrop-blur-md py-4 md:py-6 shadow-sm' 
          : 'bg-transparent py-6 md:py-8'
      }`}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="w-full px-6 md:px-16 flex items-center justify-between">
        <Link 
          to="/" 
          className="flex items-center gap-2 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 rounded-lg relative z-50"
          aria-label="Go to Home"
          onClick={() => {
            setIsMobileMenuOpen(false);
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
        >
          <img 
            src={profile.logo} 
            alt="Logo" 
            className="h-12 md:h-20 w-auto object-contain transition-transform group-hover:scale-105 dark:invert dark:brightness-200" 
          />
        </Link>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <div className="flex items-center gap-4">
            <NavLink to="/">{t('nav_start')}</NavLink>
            <NavLink to="/about">{t('nav_about')}</NavLink>
            <NavLink to="/contact">{t('nav_contact')}</NavLink>
          </div>

          <div className="h-8 w-px bg-zinc-300 dark:bg-white/10 mx-2"></div>

          <button 
             onClick={toggleLanguage}
             className="text-sm font-bold text-zinc-600 dark:text-zinc-400 hover:text-brand-600 dark:hover:text-brand-400 transition-colors w-8"
          >
             {language === 'sv' ? 'EN' : 'SV'}
          </button>

          <button 
            onClick={toggleTheme}
            className="p-3 rounded-full hover:bg-zinc-100 dark:hover:bg-white/10 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500"
            aria-label={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
          >
            {isDark ? <Sun size={28} /> : <Moon size={28} />}
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="flex items-center gap-4 md:hidden relative z-50">
           <button 
             onClick={toggleLanguage}
             className="text-sm font-bold text-zinc-600 dark:text-zinc-400"
          >
             {language === 'sv' ? 'EN' : 'SV'}
          </button>
          <button 
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-zinc-100 dark:hover:bg-white/10 text-zinc-600 dark:text-zinc-400 transition-colors"
          >
            {isDark ? <Sun size={24} /> : <Moon size={24} />}
          </button>
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 text-zinc-900 dark:text-white focus:outline-none"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={32} /> : <Menu size={32} />}
          </button>
        </div>

        {/* Mobile Fullscreen Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="fixed inset-0 bg-white dark:bg-black z-40 flex flex-col items-center justify-center space-y-8 md:hidden touch-none"
            >
              <NavLink to="/" onClick={() => setIsMobileMenuOpen(false)}>{t('nav_start')}</NavLink>
              <NavLink to="/about" onClick={() => setIsMobileMenuOpen(false)}>{t('nav_about')}</NavLink>
              <NavLink to="/contact" onClick={() => setIsMobileMenuOpen(false)}>{t('nav_contact')}</NavLink>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

const BackgroundBlobs = () => (
  <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none bg-white dark:bg-black transition-colors duration-300">
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[1200px] bg-purple-100 dark:bg-purple-900/20 rounded-full blur-[120px] opacity-60 dark:opacity-40 mix-blend-multiply dark:mix-blend-screen animate-pulse" style={{ animationDuration: '10s' }} />
    <div className="absolute top-[20%] right-[-10%] w-[800px] h-[800px] bg-fuchsia-100 dark:bg-fuchsia-900/10 rounded-full blur-[100px] opacity-60 dark:opacity-30 mix-blend-multiply dark:mix-blend-screen" />
    <div className="absolute bottom-[-10%] left-[-10%] w-[900px] h-[900px] bg-pink-100 dark:bg-pink-900/10 rounded-full blur-[120px] opacity-60 dark:opacity-30 mix-blend-multiply dark:mix-blend-screen" />
    {/* Noise overlay for texture */}
    <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}></div>
  </div>
);

const AppContent: React.FC = () => {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    // Check local storage or system preference
    const storedTheme = localStorage.getItem('theme');
    
    if (storedTheme === 'light') {
      setIsDark(false);
      document.documentElement.classList.remove('dark');
    } else {
      setIsDark(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleTheme = () => {
    if (isDark) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
      setIsDark(false);
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
      setIsDark(true);
    }
  };

  return (
    <Router>
      <ScrollToTop />
      {/* Decreased mobile top padding slightly to prevent excessive whitespace on small screens */}
      <div className="min-h-screen flex flex-col pt-32 md:pt-48 font-sans relative selection:bg-brand-200 dark:selection:bg-brand-900 selection:text-brand-900 dark:selection:text-brand-100 transition-colors duration-300 overflow-x-hidden">
        <BackgroundBlobs />
        <Navigation isDark={isDark} toggleTheme={toggleTheme} />
        
        <main className="flex-grow relative z-10 w-full">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/project/:id" element={
              <React.Fragment>
                <Home />
                {/* 
                  Project Modal Wrapper 
                  - z-[100] ensures it is above standard content (z-10, z-50)
                  - overflow-y-auto enables scrolling within the modal
                  - -webkit-overflow-scrolling: touch ensures smooth scrolling on iOS
                */}
                <div className="fixed inset-0 bg-white/50 dark:bg-black/50 z-[100] overflow-y-auto backdrop-blur-sm overscroll-contain" style={{ WebkitOverflowScrolling: 'touch' }}>
                  <ProjectDetail />
                </div>
              </React.Fragment>
            } /> 
          </Routes>
        </main>
        
        <ContactCTA />
        <Footer />
        <AIAssistant />
      </div>
    </Router>
  );
};

const App: React.FC = () => {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
};

export default App;