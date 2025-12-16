import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, ArrowRight, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';

const Contact: React.FC = () => {
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
          className="inline-flex items-center gap-2 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 px-5 py-3 rounded-full text-zinc-600 dark:text-zinc-400 hover:text-brand-600 dark:hover:text-brand-400 hover:border-brand-200 dark:hover:border-brand-800 hover:bg-brand-50 dark:hover:bg-brand-900/20 mb-12 transition-all shadow-sm z-30 relative font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 w-fit"
        >
          <ArrowLeft size={20} />
          <span>{t('back_to_home')}</span>
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 mb-24 relative z-20">
          {/* Left Column: Image & Personal Info */}
          <div>
            <h1 className="text-5xl md:text-8xl font-bold text-zinc-900 dark:text-white mb-12">{t('contact_title')}</h1>
            
            <div className="flex flex-col gap-8">
              <div className="w-full aspect-[3/4] md:aspect-[4/5] rounded-[3rem] overflow-hidden shadow-xl bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-white/5">
                 <img 
                   src={profile.avatar} 
                   alt={profile.name} 
                   className="w-full h-full object-cover object-top"
                 />
              </div>

              <div className="prose prose-xl text-zinc-600 dark:text-zinc-400">
                <p>{t('contact_intro')}</p>
                <p>{t('contact_location')}</p>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Details & Form */}
          <div className="flex flex-col justify-center">
            
            {/* Contact Details Cards */}
            <div className="grid grid-cols-1 gap-6 mb-16">
              <a 
                href={`mailto:${profile.email}`} 
                className="flex items-center gap-4 md:gap-6 p-6 md:p-8 rounded-3xl bg-white dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 hover:border-brand-200 dark:hover:border-brand-800 hover:bg-zinc-50 dark:hover:bg-zinc-800/80 transition-colors group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500"
              >
                <div className="bg-zinc-100 dark:bg-zinc-800 p-4 rounded-full shadow-sm text-zinc-900 dark:text-white group-hover:text-brand-600 dark:group-hover:text-brand-400 flex-shrink-0">
                  <Mail size={32} />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-sm font-bold text-zinc-400 dark:text-zinc-500 uppercase tracking-wide mb-1">{t('contact_email_me')}</p>
                  <p className="text-lg md:text-2xl font-semibold text-zinc-900 dark:text-white break-all">{profile.email}</p>
                </div>
              </a>

              <a 
                href={`tel:${profile.phone}`} 
                className="flex items-center gap-4 md:gap-6 p-6 md:p-8 rounded-3xl bg-white dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 hover:border-brand-200 dark:hover:border-brand-800 hover:bg-zinc-50 dark:hover:bg-zinc-800/80 transition-colors group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500"
              >
                <div className="bg-zinc-100 dark:bg-zinc-800 p-4 rounded-full shadow-sm text-zinc-900 dark:text-white group-hover:text-brand-600 dark:group-hover:text-brand-400 flex-shrink-0">
                  <Phone size={32} />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-sm font-bold text-zinc-400 dark:text-zinc-500 uppercase tracking-wide mb-1">{t('contact_call_me')}</p>
                  <p className="text-lg md:text-2xl font-semibold text-zinc-900 dark:text-white">{profile.phone}</p>
                </div>
              </a>

              <div className="flex items-center gap-4 md:gap-6 p-6 md:p-8 rounded-3xl bg-white dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800">
                <div className="bg-zinc-100 dark:bg-zinc-800 p-4 rounded-full shadow-sm text-zinc-900 dark:text-white flex-shrink-0">
                  <MapPin size={32} />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-sm font-bold text-zinc-400 dark:text-zinc-500 uppercase tracking-wide mb-1">{t('contact_place')}</p>
                  <p className="text-lg md:text-2xl font-semibold text-zinc-900 dark:text-white">Göteborg, Sverige</p>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="bg-white dark:bg-zinc-900 rounded-[2.5rem] p-8 md:p-10 border border-zinc-200 dark:border-zinc-800 shadow-xl">
              <h3 className="text-3xl font-bold mb-8 text-zinc-900 dark:text-white">{t('contact_form_title')}</h3>
              <form className="flex flex-col gap-6 text-left">
                <div>
                  <label className="block text-base font-medium text-zinc-500 dark:text-zinc-400 mb-2">{t('contact_form_name')}</label>
                  <input type="text" className="w-full bg-zinc-50 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-2xl px-6 py-4 text-zinc-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-brand-500 transition-all placeholder:text-zinc-400 dark:placeholder:text-zinc-500 text-lg" placeholder="" />
                </div>
                <div>
                  <label className="block text-base font-medium text-zinc-500 dark:text-zinc-400 mb-2">{t('contact_form_email')}</label>
                  <input type="email" className="w-full bg-zinc-50 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-2xl px-6 py-4 text-zinc-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-brand-500 transition-all placeholder:text-zinc-400 dark:placeholder:text-zinc-500 text-lg" placeholder="" />
                </div>
                <div>
                  <label className="block text-base font-medium text-zinc-500 dark:text-zinc-400 mb-2">{t('contact_form_message')}</label>
                  <textarea rows={4} className="w-full bg-zinc-50 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-2xl px-6 py-4 text-zinc-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-brand-500 transition-all placeholder:text-zinc-400 dark:placeholder:text-zinc-500 text-lg" placeholder=""></textarea>
                </div>
                <button type="button" className="bg-zinc-900 dark:bg-brand-600 text-white font-bold py-5 rounded-2xl mt-4 hover:bg-zinc-800 dark:hover:bg-brand-500 transition-colors flex justify-center items-center gap-2 shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2 text-lg">
                  {t('contact_form_send')} <ArrowRight size={22} />
                </button>
              </form>
            </div>

          </div>
        </div>

        {/* Map Section */}
        <div className="w-full h-96 rounded-[3rem] overflow-hidden shadow-lg border border-zinc-200 dark:border-zinc-800 grayscale hover:grayscale-0 transition-all duration-700 relative z-20">
           <iframe 
             src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13620.166946788648!2d11.974560000000001!3d57.708870000000006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x464ff363c9612969%3A0x26442c8d28751852!2sG%C3%B6teborg!5e0!3m2!1sv!2sse!4v1710000000000!5m2!1sv!2sse" 
             width="100%" 
             height="100%" 
             style={{ border: 0 }} 
             allowFullScreen 
             loading="lazy" 
             referrerPolicy="no-referrer-when-downgrade"
             title="Karta över Göteborg"
           ></iframe>
        </div>

      </div>
    </motion.div>
  );
};

export default Contact;