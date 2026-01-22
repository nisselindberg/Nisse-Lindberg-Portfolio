import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const About: React.FC = () => {
  const { t, profile } = useLanguage();

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="w-full bg-transparent"
    >
      <div className="w-full max-w-[1800px] mx-auto px-6 md:px-12 pt-12 pb-24 relative">
        
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-xl border border-white/10 px-6 py-4 rounded-full text-white hover:text-brand-400 hover:border-brand-500/50 mb-16 transition-all shadow-xl z-30 relative font-bold tracking-widest uppercase text-xs"
        >
          <ArrowLeft size={18} />
          <span>{t('back_to_home')}</span>
        </Link>

        {/* Intro Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center mb-40 relative z-20">
          <div className="order-2 lg:order-1">
             <h1 className="text-6xl md:text-9xl font-black text-white mb-12 tracking-tighter leading-none">{t('about_title').split(',')[0]}<br/><span className="text-brand-400">{t('about_title').split(',')[1]}</span></h1>
             <p className="text-2xl md:text-4xl text-zinc-100 leading-tight mb-10 font-light italic">
               {profile.bio}
             </p>
             <p className="text-lg md:text-xl text-zinc-400 leading-relaxed mb-12 max-w-2xl font-light">
               {t('about_bio_extended')}
             </p>
             
             <div className="flex flex-wrap gap-4 mt-8">
               {profile.skills.map(skill => (
                 <span key={skill} className="bg-white/5 backdrop-blur-md border border-white/10 px-8 py-4 rounded-2xl font-bold text-white text-sm tracking-widest uppercase hover:bg-brand-500/20 hover:border-brand-500 transition-all">
                   {skill}
                 </span>
               ))}
             </div>
          </div>
          
          <div className="order-1 lg:order-2">
             <div className="relative aspect-[4/5] rounded-[4rem] overflow-hidden shadow-2xl bg-white/5 border border-white/10 group">
               <img 
                 src={profile.sideProfile} 
                 alt={profile.name} 
                 className="w-full h-full object-cover transition-all duration-[2000ms] group-hover:scale-110 opacity-80 group-hover:opacity-100"
                 onError={(e) => { e.currentTarget.src = profile.avatar; }}
               />
               <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-white/5" />
             </div>
          </div>
        </div>

        {/* Gallery Section */}
        <div className="mb-24 relative z-20">
          <div className="max-w-4xl mb-20">
            <h2 className="text-5xl font-bold text-white mb-8 tracking-tighter">{t('about_more')}</h2>
            <p className="text-2xl text-zinc-400 leading-relaxed font-light">
              {t('about_hobbies')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {profile.galleryImages.map((imgUrl, index) => (
              <motion.div 
                key={index}
                whileHover={{ y: -10, scale: 1.02 }}
                className="aspect-square rounded-[3rem] overflow-hidden shadow-2xl bg-white/5 border border-white/10"
              >
                <img 
                  src={imgUrl} 
                  alt={`Gallery image ${index + 1}`} 
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-1000 opacity-70 hover:opacity-100"
                />
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </motion.div>
  );
};

export default About;