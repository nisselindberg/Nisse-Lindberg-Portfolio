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
      <section className="min-h-[100vh] flex flex-col items-center justify-center relative px-6 overflow-hidden pt-32 pb-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="relative mb-16"
        >
          {/* Subtle Halo */}
          <div className="absolute -inset-10 bg-brand-500/10 blur-[80px] rounded-full" />
          
          <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-[1px] border-white/20 shadow-2xl bg-zinc-900/50 backdrop-blur-sm p-1">
             <div className="w-full h-full rounded-full overflow-hidden border border-white/10">
               <img 
                 src={profile.avatar} 
                 alt={profile.name} 
                 className="w-full h-full object-cover object-[center_20%] grayscale hover:grayscale-0 transition-all duration-700" 
               />
             </div>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1, type: 'spring' }}
            className="absolute -bottom-4 -right-4 bg-zinc-900 border border-white/20 text-white p-4 rounded-3xl shadow-2xl backdrop-blur-xl z-20 flex items-center gap-3"
          >
            <div className="bg-brand-500/20 p-2 rounded-xl">
              <Sparkles size={16} className="text-brand-400" />
            </div>
            <span className="text-[10px] font-black uppercase tracking-[0.3em] font-outfit">{profile.role}</span>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="text-center max-w-7xl relative z-10 px-4"
        >
          <h1 className="text-6xl md:text-[10rem] font-bricolage tracking-tighter leading-[0.8] mb-12 text-white font-extrabold uppercase">
            <span className="block opacity-60 mb-2 font-light lowercase normal-case tracking-normal">{t('hero_title')}</span>
            <span className="block bg-clip-text text-transparent bg-gradient-to-br from-white via-white to-brand-400 py-4 drop-shadow-sm">
              {t('hero_subtitle')}
            </span>
          </h1>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 mt-12">
            <a href="#work" className="group relative px-12 py-5 overflow-hidden rounded-2xl font-bold text-base transition-all shadow-2xl shadow-brand-600/20">
              <div className="absolute inset-0 bg-brand-600 group-hover:bg-brand-500 transition-colors" />
              <span className="relative z-10 flex items-center gap-3 text-white font-outfit tracking-widest uppercase text-[11px]">
                {t('hero_btn_work')} <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
              </span>
            </a>
            <Link to="/contact" className="px-12 py-5 border border-white/20 hover:bg-white/5 backdrop-blur-md rounded-2xl font-bold text-base transition-all text-white font-outfit tracking-widest uppercase text-[11px]">
              {t('hero_btn_contact')}
            </Link>
          </div>
        </motion.div>

        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-12 opacity-30"
        >
          <ChevronDown size={32} strokeWidth={1} className="text-white" />
        </motion.div>
      </section>

      {/* PROJECT GRID */}
      <section id="work" className="py-40 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="mb-32 border-b border-white/10 pb-20">
           <span className="text-[11px] font-black tracking-[0.7em] uppercase text-brand-400 mb-6 block font-outfit">{t('home_latest')}</span>
           <h2 className="text-7xl md:text-[8rem] font-bricolage font-extrabold tracking-tighter leading-none text-white uppercase">
             {t('home_selected_work').split(' ')[0]} <br/>
             <span className="opacity-20 ml-12 md:ml-32 font-light normal-case tracking-normal">{t('home_selected_work').split(' ')[1]}</span>
           </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-48">
          {projects.map((project, idx) => (
            <div key={project.id} className={idx % 2 !== 0 ? 'md:mt-64' : ''}>
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-60 px-6 relative overflow-hidden bg-transparent">
        <div className="max-w-5xl mx-auto text-center">
          <span className="text-[11px] font-bold tracking-[1.2em] uppercase text-brand-400 mb-16 block font-outfit">{t('cta_title')}</span>
          <Link to="/contact" className="group inline-flex flex-col items-center gap-14">
            <h2 className="text-7xl md:text-[8vw] font-bricolage font-extrabold tracking-tighter leading-none text-white hover:text-brand-400 transition-all duration-700 uppercase">
              {t('cta_btn')}
            </h2>
            <div className="w-24 h-24 md:w-32 md:h-32 rounded-full border border-white/10 flex items-center justify-center group-hover:border-brand-500 group-hover:bg-brand-500 transition-all duration-700 shadow-2xl">
              <ArrowRight size={48} strokeWidth={1} className="text-white group-hover:translate-x-3 transition-transform" />
            </div>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;