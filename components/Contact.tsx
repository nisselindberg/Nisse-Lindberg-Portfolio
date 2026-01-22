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
          className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-xl border border-white/10 px-6 py-4 rounded-full text-white hover:text-brand-400 hover:border-brand-500/50 mb-16 transition-all shadow-xl z-30 relative font-bold tracking-widest uppercase text-xs"
        >
          <ArrowLeft size={18} />
          <span>{t('back_to_home')}</span>
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 mb-40 relative z-20">
          {/* Left Column */}
          <div>
            <h1 className="text-6xl md:text-9xl font-black text-white mb-16 tracking-tighter leading-none">{t('contact_title')}</h1>
            
            <div className="flex flex-col gap-12">
              <div className="w-full aspect-[4/5] rounded-[4rem] overflow-hidden shadow-2xl bg-white/5 border border-white/10">
                 <img 
                   src={profile.avatar} 
                   alt={profile.name} 
                   className="w-full h-full object-cover object-top opacity-80"
                 />
              </div>

              <div className="text-2xl md:text-3xl text-zinc-300 font-light leading-relaxed">
                <p className="mb-8">{t('contact_intro')}</p>
                <p className="text-zinc-500">{t('contact_location')}</p>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="flex flex-col justify-center">
            <div className="grid grid-cols-1 gap-8 mb-20">
              <a 
                href={`mailto:${profile.email}`} 
                className="flex items-center gap-8 p-10 rounded-[3rem] bg-white/5 backdrop-blur-xl border border-white/10 hover:border-brand-500/50 hover:bg-brand-500/10 transition-all group shadow-2xl"
              >
                <div className="bg-white/10 p-6 rounded-full text-white group-hover:text-brand-400 group-hover:bg-white/20 transition-all">
                  <Mail size={36} />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-xs font-black text-brand-400 uppercase tracking-[0.3em] mb-2">{t('contact_email_me')}</p>
                  <p className="text-xl md:text-3xl font-bold text-white break-all">{profile.email}</p>
                </div>
              </a>

              <a 
                href={`tel:${profile.phone}`} 
                className="flex items-center gap-8 p-10 rounded-[3rem] bg-white/5 backdrop-blur-xl border border-white/10 hover:border-brand-500/50 hover:bg-brand-500/10 transition-all group shadow-2xl"
              >
                <div className="bg-white/10 p-6 rounded-full text-white group-hover:text-brand-400 group-hover:bg-white/20 transition-all">
                  <Phone size={36} />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-xs font-black text-brand-400 uppercase tracking-[0.3em] mb-2">{t('contact_call_me')}</p>
                  <p className="text-xl md:text-3xl font-bold text-white">{profile.phone}</p>
                </div>
              </a>
            </div>

            {/* Form */}
            <div className="bg-white/5 backdrop-blur-3xl rounded-[4rem] p-12 md:p-16 border border-white/10 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-500/20 blur-[60px] rounded-full" />
              <h3 className="text-4xl font-bold mb-12 text-white tracking-tight">{t('contact_form_title')}</h3>
              <form className="flex flex-col gap-8">
                <div className="relative">
                  <input type="text" className="w-full bg-transparent border-b-2 border-white/10 py-4 text-white focus:outline-none focus:border-brand-500 transition-all text-xl placeholder:text-zinc-600" placeholder={t('contact_form_name')} />
                </div>
                <div className="relative">
                  <input type="email" className="w-full bg-transparent border-b-2 border-white/10 py-4 text-white focus:outline-none focus:border-brand-500 transition-all text-xl placeholder:text-zinc-600" placeholder={t('contact_form_email')} />
                </div>
                <div className="relative">
                  <textarea rows={3} className="w-full bg-transparent border-b-2 border-white/10 py-4 text-white focus:outline-none focus:border-brand-500 transition-all text-xl placeholder:text-zinc-600 resize-none" placeholder={t('contact_form_message')}></textarea>
                </div>
                <button type="button" className="group bg-brand-600 text-white font-black py-6 rounded-3xl mt-6 hover:bg-brand-500 transition-all flex justify-center items-center gap-4 shadow-[0_20px_40px_-10px_rgba(168,85,247,0.4)] text-xl uppercase tracking-widest">
                  {t('contact_form_send')} <ArrowRight size={24} className="group-hover:translate-x-2 transition-transform" />
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Map */}
        <div className="w-full h-[500px] rounded-[4rem] overflow-hidden shadow-2xl border border-white/10 grayscale opacity-40 hover:opacity-100 hover:grayscale-0 transition-all duration-1000 relative z-20">
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