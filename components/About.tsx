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
      className="w-full"
    >
      <div className="w-full max-w-[1800px] mx-auto px-6 md:px-12 pt-12 pb-24 relative">
        
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 px-5 py-3 rounded-full text-zinc-600 dark:text-zinc-400 hover:text-brand-600 dark:hover:text-brand-400 hover:border-brand-200 dark:hover:border-brand-800 hover:bg-brand-50 dark:hover:bg-brand-900/20 mb-12 transition-all shadow-sm z-30 relative font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 w-fit"
        >
          <ArrowLeft size={20} />
          <span>{t('back_to_home')}</span>
        </Link>

        {/* Intro Section - Text Left, Image Right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center mb-32 relative z-20">
          <div className="order-2 lg:order-1">
             <h1 className="text-5xl md:text-8xl font-bold text-zinc-900 dark:text-white mb-10">{t('about_title')}</h1>
             <p className="text-xl md:text-3xl text-zinc-600 dark:text-zinc-300 leading-relaxed mb-8 font-medium">
               {profile.bio}
             </p>
             <p className="text-lg md:text-xl text-zinc-600 dark:text-zinc-400 leading-relaxed mb-10 max-w-2xl">
               {t('about_bio_extended')}
             </p>
             
             <div className="flex flex-wrap gap-3 mt-8">
               {profile.skills.map(skill => (
                 <span key={skill} className="bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 px-6 py-3 rounded-xl font-medium text-zinc-700 dark:text-zinc-300 text-base md:text-lg">
                   {skill}
                 </span>
               ))}
             </div>
          </div>
          
          <div className="order-1 lg:order-2">
             <div className="relative aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-white/5 group">
               <img 
                 src={profile.sideProfile} 
                 alt={profile.name} 
                 className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 ease-in-out"
                 onError={(e) => {
                   // Fallback to the main avatar if the local file hasn't been uploaded yet
                   e.currentTarget.src = profile.avatar;
                 }}
               />
               {/* Overlay gradient for text readability if needed later, or just aesthetic */}
               <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
             </div>
          </div>
        </div>

        {/* Gallery Section */}
        <div className="mb-24 relative z-20">
          <div className="max-w-4xl mb-12">
            <h2 className="text-4xl font-bold text-zinc-900 dark:text-white mb-6">{t('about_more')}</h2>
            <p className="text-xl text-zinc-600 dark:text-zinc-400 leading-relaxed mb-6">
              {t('about_hobbies')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {profile.galleryImages.map((imgUrl, index) => (
              <motion.div 
                key={index}
                whileHover={{ y: -5 }}
                className="aspect-square rounded-3xl overflow-hidden shadow-lg bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-white/5"
              >
                <img 
                  src={imgUrl} 
                  alt={`Gallery image ${index + 1}`} 
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
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