import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Linkedin, Mail, ArrowUpRight } from 'lucide-react';

const Footer: React.FC = () => {
  const { profile } = useLanguage();
  
  return (
    <footer className="py-40 px-6 border-t border-white/5 bg-transparent relative z-10 overflow-hidden">
      {/* Decorative glow behind footer */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-brand-500/10 blur-[120px] rounded-full -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
        {/* Larger, clearer Logo */}
        <div className="mb-20 group">
          <img 
            src={profile.logo} 
            className="h-20 md:h-24 w-auto invert brightness-200 opacity-80 group-hover:opacity-100 transition-all duration-700 group-hover:scale-105" 
            alt="Logo" 
          />
        </div>

        {/* Improved Social/Contact Links */}
        <div className="flex flex-col md:flex-row gap-6 md:gap-12 mb-24">
           <a 
             href={profile.linkedin} 
             target="_blank" 
             rel="noreferrer" 
             className="flex items-center gap-3 px-8 py-4 rounded-full bg-white/5 border border-white/10 text-white hover:text-brand-400 hover:border-brand-500/50 hover:bg-white/10 transition-all duration-300 backdrop-blur-xl group shadow-xl"
           >
             <Linkedin size={18} strokeWidth={1.5} />
             <span className="text-[11px] font-bold uppercase tracking-[0.3em] font-outfit">LinkedIn</span>
             <ArrowUpRight size={14} className="opacity-30 group-hover:opacity-100 transition-opacity" />
           </a>

           <a 
             href={`mailto:${profile.email}`} 
             className="flex items-center gap-3 px-8 py-4 rounded-full bg-white/5 border border-white/10 text-white hover:text-brand-400 hover:border-brand-500/50 hover:bg-white/10 transition-all duration-300 backdrop-blur-xl group shadow-xl"
           >
             <Mail size={18} strokeWidth={1.5} />
             <span className="text-[11px] font-bold uppercase tracking-[0.3em] font-outfit">Email</span>
             <ArrowUpRight size={14} className="opacity-30 group-hover:opacity-100 transition-opacity" />
           </a>
        </div>

        {/* Updated Copyright Text */}
        <div className="space-y-4">
          <p className="text-[10px] font-black uppercase tracking-[1em] opacity-30 text-white font-outfit">
            © {new Date().getFullYear()} NISSE LINDBERG
          </p>
          <p className="text-[9px] font-medium uppercase tracking-[0.6em] opacity-10 text-white font-outfit">
            NISSE LINDBERG DESIGN
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;