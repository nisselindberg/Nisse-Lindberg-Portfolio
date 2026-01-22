import React from 'react';
import ProjectCard from './ProjectCard';
import { motion } from 'framer-motion';
import { ChevronDown, ArrowRight, Sparkles } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  const { projects, profile, t } = useLanguage();

  return (
    <div className="w-full">
      {/* PROFESSIONAL FUTURISTIC HERO */}
      <section className="min-h-[100vh] flex flex-col items-center justify-center relative px-6 overflow-hidden pt-20">
        
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          className="relative mb-12"
        >
          {/* Subtle Glow Halo */}
          <motion.div 
            animate={{ 
              scale: [1, 1.05, 1],
              opacity: [0.15, 0.3, 0.15]
            }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -inset-8 bg-brand-500/20 blur-[50px] rounded-full" 
          />
          
          {/* Sophisticated Small Circular Profile Image */}
          <div className="relative w-48 h-48 md:w-72 md:h-72 rounded-full overflow-hidden border-[4px] border-white/5 shadow-[0_0_60px_rgba(168,85,247,0.1)] bg-zinc-900 group">
             <img 
               src={profile.avatar} 
               alt={profile.name} 
               className="w-full h-full object-cover object-[center_10%] scale-110 transition-transform duration-[3s] group-hover:scale-105" 
             />
             {/* Subtle internal glow overlay */}
             <div className="absolute inset-0 shadow-[inner_0_0_20px_rgba(0,0,0,0.4)] pointer-events-none" />
          </div>
          
          {/* Floating Badge - Smaller and more subtle */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.2 }}
            className="absolute bottom-2 right-2 md:bottom-4 md:right-4 bg-brand-600/90 text-white p-2 md:p-4 rounded-2xl shadow-2xl flex items-center gap-2 border border-brand-400/30 backdrop-blur-xl z-20"
          >
            <Sparkles size={14} className="text-brand-200" />
            <span className="text-[9px] md:text-[10px] font-bold uppercase tracking-[0.2em]">{profile.role}</span>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 1.2 }}
          className="text-center max-w-4xl relative z-10"
        >
          <h1 className="text-4xl md:text-7xl font-extrabold tracking-tighter leading-[0.9] mb-10 font-lexend text-white">
            <span className="block opacity-90 mb-2">{t('hero_title')}</span>
            <span className="block text-brand-400 italic font-light drop-shadow-[0_0_30px_rgba(168,85,247,0.2)]">{t('hero_subtitle')}</span>
          </h1>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-5 mt-8">
            <a href="#work" className="group relative px-10 py-5 overflow-hidden rounded-full font-bold text-base transition-all shadow-xl shadow-brand-500/20">
              <div className="absolute inset-0 bg-brand-600 group-hover:bg-brand-500 transition-colors" />
              <span className="relative z-10 flex items-center gap-2 text-white">
                {t('hero_btn_work')} <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </span>
            </a>
            <Link to="/contact" className="px-10 py-5 border border-white/10 hover:border-brand-500/40 hover:bg-white/5 backdrop-blur-md rounded-full font-bold text-base transition-all text-white/60 hover:text-white">
              {t('hero_btn_contact')}
            </Link>
          </div>
        </motion.div>

        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-12 opacity-20 hover:opacity-100 transition-opacity"
        >
          <a href="#work" className="p-4 rounded-full border border-white/5 block text-brand-400">
             <ChevronDown size={24} />
          </a>
        </motion.div>
      </section>

      {/* AMBERITE STAGGERED GRID */}
      <section id="work" className="py-40 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end gap-12 mb-32 border-b border-white/5 pb-16">
          <div className="max-w-2xl">
             <span className="text-[9px] font-bold tracking-[0.6em] uppercase text-brand-400/60 mb-4 block">{t('home_latest')}</span>
             <h2 className="text-4xl md:text-7xl font-bold tracking-tighter leading-none text-white">
               {t('home_selected_work').split(' ')[0]} <br/>
               <span className="italic font-light opacity-30">{t('home_selected_work').split(' ')[1]}</span>
             </h2>
          </div>
          <p className="text-zinc-500 text-base md:text-lg font-light max-w-sm italic leading-relaxed">
            "Combining strategic thinking with visual excellence to solve complex problems."
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-32 md:gap-y-80">
          {projects.map((project, idx) => (
            <div key={project.id} className={idx % 2 !== 0 ? 'md:mt-64' : ''}>
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </section>

      {/* FUTURISTIC CTA */}
      <section className="py-60 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-brand-900/10 backdrop-blur-3xl -z-10" />
        <div className="max-w-5xl mx-auto text-center relative">
          <span className="text-[10px] font-bold tracking-[1em] uppercase text-brand-400/50 mb-16 block">{t('cta_title')}</span>
          <Link 
            to="/contact"
            className="group inline-flex flex-col items-center gap-12"
          >
            <h2 className="text-4xl md:text-[6vw] font-bold tracking-tighter leading-none text-white hover:text-brand-400 transition-colors duration-500">
              {t('cta_btn')}
            </h2>
            <div className="w-20 h-20 md:w-32 md:h-32 rounded-full border border-white/10 flex items-center justify-center group-hover:border-brand-500 group-hover:bg-brand-500 group-hover:shadow-[0_0_40px_rgba(168,85,247,0.4)] transition-all duration-700 text-white">
              <ArrowRight size={40} className="group-hover:translate-x-2 transition-transform" />
            </div>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;