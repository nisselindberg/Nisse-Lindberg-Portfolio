import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';

const ContactCTA: React.FC = () => {
  const { t } = useLanguage();
  
  return (
    <section className="py-32 px-6 md:px-12 bg-transparent border-t border-white/5">
      <div className="max-w-4xl mx-auto text-center bg-white/5 backdrop-blur-2xl rounded-[3rem] p-16 md:p-24 border border-white/10 shadow-2xl">
        <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 tracking-tighter">
          {t('cta_title')}
        </h2>
        <p className="text-xl text-zinc-400 mb-12 max-w-xl mx-auto leading-relaxed">
          {t('cta_text')}
        </p>
        <Link 
          to="/contact" 
          className="inline-flex items-center gap-3 bg-brand-600 text-white px-12 py-5 rounded-full font-bold text-lg hover:bg-brand-500 transition-all shadow-2xl shadow-brand-500/20"
        >
          {t('cta_btn')} <ArrowRight size={22} />
        </Link>
      </div>
    </section>
  );
};

export default ContactCTA;