import React from 'react';
import ProjectCard from './ProjectCard';
import { motion } from 'framer-motion';
import { ChevronDown, ArrowRight, Sparkles } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  const { projects, profile, t } = useLanguage();

  return (
    <div className="w-full bg-transparent">
      {/* HERO SECTION */}
      <section className="min-h-[100vh] flex flex-col items-center justify-center relative px-6 overflow-hidden pt-24 pb-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="relative mb-12"
        >
          {/* Subtle Halo */}
          <div className="absolute -inset-10 bg-brand-500/15 blur-[60px] rounded-full" />
          
          <div className="relative w-44 h-44 md:w-60 md:h-60 rounded-full overflow-hidden border-[3px] border-white/20 shadow-2xl bg-zinc-900/50 backdrop-blur-sm">
             <img 
               src={profile.avatar} 
               alt={profile.name} 
               className="w-full h-full object-cover object-[center_20%]" 
             />
          </div>
          
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8 }}
            className="absolute bottom-2 right-2 md:bottom-3 md:right-3 bg-zinc-900/90 text-white p-2 md:p-3 rounded-2xl shadow-xl flex items-center gap-2 border border-white/20 backdrop-blur-xl z-20"
          >
            <Sparkles size={12} className="text-brand-400" />
            <span className="text-[9px] font-bold uppercase tracking-widest font-outfit">{profile.role}</span>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="text-center max-w-4xl relative z-10 px-4"
        >
          <h1 className="text-4xl md:text-7xl font-black tracking-tighter leading-[1.2] mb-8 font-outfit text-white">
            <span className="block opacity-90">{t('hero_title')}</span>
            <span className="block bg-clip-text text-transparent bg-gradient-to-r from-white via-brand-400 to-emerald-400 drop-shadow-[0_0_20px_rgba(34,211,238,0.15)] py-2">
              {t('hero_subtitle')}
            </span>
          </h1>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-5 mt-10">
            <a href="#work" className="group relative px-10 py-4 overflow-hidden rounded-full font-bold text-base transition-all shadow-2xl shadow-brand-600/10">
              <div className="absolute inset-0 bg-brand-600 group-hover:bg-brand-500 transition-colors" />
              <span className="relative z-10 flex items-center gap-2 text-white font-outfit tracking-wide">
                {t('hero_btn_work')} <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </span>
            </a>
            <Link to="/contact" className="px-10 py-4 border border-white/10 hover:bg-white/5 backdrop-blur-md rounded-full font-bold text-base transition-all text-white font-outfit tracking-wide">
              {t('hero_btn_contact')}
            </Link>
          </div>
        </motion.div>

        <motion.div 
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-12 opacity-20"
        >
          <ChevronDown size={28} className="text-white" />
        </motion.div>
      </section>

      {/* PROJECT GRID */}
      <section id="work" className="py-40 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="mb-32 border-b border-white/10 pb-16">
           <span className="text-[10px] font-black tracking-[0.6em] uppercase text-brand-400 mb-4 block font-outfit">{t('home_latest')}</span>
           <h2 className="text-5xl md:text-7xl font-bold tracking-tighter leading-none text-white font-outfit">
             {t('home_selected_work').split(' ')[0]} <br/>
             <span className="opacity-20 italic font-light">{t('home_selected_work').split(' ')[1]}</span>
           </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-40">
          {projects.map((project, idx) => (
            <div key={project.id} className={idx % 2 !== 0 ? 'md:mt-48' : ''}>
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-60 px-6 relative overflow-hidden bg-transparent">
        <div className="max-w-5xl mx-auto text-center">
          <span className="text-[10px] font-bold tracking-[1em] uppercase text-brand-400 mb-12 block font-outfit">{t('cta_title')}</span>
          <Link to="/contact" className="group inline-flex flex-col items-center gap-10">
            <h2 className="text-5xl md:text-[7vw] font-black tracking-tighter leading-none text-white hover:text-brand-400 transition-all duration-500 font-outfit">
              {t('cta_btn')}
            </h2>
            <div className="w-20 h-20 md:w-28 md:h-28 rounded-full border border-white/20 flex items-center justify-center group-hover:border-brand-500 group-hover:bg-brand-500 transition-all duration-500">
              <ArrowRight size={36} className="text-white group-hover:translate-x-2 transition-transform" />
            </div>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;