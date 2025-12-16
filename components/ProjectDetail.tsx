import React, { useEffect, useState } from 'react';
import { Project, ContentBlock } from '../types';
import { ArrowLeft, Clock, Users, Wrench, ExternalLink, Type, Link as LinkIcon, Play, MousePointerClick } from 'lucide-react';
import { motion } from 'framer-motion';
import { useParams, useNavigate, Link } from 'react-router-dom';
import ContactCTA from './ContactCTA';
import Footer from './Footer';
import { useLanguage } from '../contexts/LanguageContext';

// Defined outside to avoid re-creation and fix type issues
const StandardWrapper = ({ children }: { children?: React.ReactNode }) => (
  <div className="max-w-5xl mx-auto px-6 mb-16">{children}</div>
);

// Reduced width from 95vw to max-w-7xl for better balance
const WideWrapper = ({ children }: { children?: React.ReactNode }) => (
  <div className="w-full max-w-7xl mx-auto px-6 mb-24">{children}</div>
);

// Helper component for interactive iframes to prevent scroll hijacking
const InteractiveFrame = ({ src, title, type }: { src: string, title: string, type: 'web' | 'figma' }) => {
  const [isInteracting, setIsInteracting] = useState(false);
  const { t } = useLanguage();

  return (
    <div 
      className="relative w-full h-[70vh] min-h-[500px] rounded-3xl overflow-hidden shadow-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-100 dark:bg-zinc-900 group"
      onMouseLeave={() => setIsInteracting(false)}
    >
      {/* Overlay that blocks interaction until clicked */}
      {!isInteracting && (
        <div 
          onClick={() => setIsInteracting(true)}
          className="absolute inset-0 z-20 bg-black/5 dark:bg-black/20 hover:bg-black/10 dark:hover:bg-black/30 transition-colors cursor-pointer flex items-center justify-center backdrop-blur-[2px]"
        >
          <div className="bg-white dark:bg-zinc-800 px-6 py-4 rounded-full shadow-2xl transform transition-transform group-hover:scale-105 flex items-center gap-3">
            <MousePointerClick className="text-brand-600 dark:text-brand-400" />
            <span className="font-bold text-zinc-900 dark:text-white">
              {type === 'web' ? t('interact_web') : t('interact_figma')}
            </span>
          </div>
        </div>
      )}

      {/* Header bar for Web types */}
      {type === 'web' && (
        <div className="absolute top-0 left-0 right-0 h-10 bg-zinc-200 dark:bg-zinc-900 flex items-center px-6 gap-2 border-b border-zinc-300 dark:border-zinc-800 z-10">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
          <div className="ml-4 text-xs text-zinc-500 font-mono bg-white dark:bg-zinc-800 px-3 py-1 rounded-md opacity-50 truncate flex-1 text-center">
            {src}
          </div>
        </div>
      )}

      <iframe
        src={src}
        className={`w-full h-full ${type === 'web' ? 'pt-10 bg-white' : 'border-0'} transition-opacity duration-300 ${isInteracting ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-50'}`}
        title={title}
        allowFullScreen
      />
    </div>
  );
};

const ContentRenderer: React.FC<{ block: ContentBlock }> = ({ block }) => {
  const { t } = useLanguage();
  
  switch (block.type) {
    case 'text':
      return (
        <StandardWrapper>
          <div className="max-w-3xl mx-auto">
            {block.title && <h3 className="text-3xl font-bold mb-6 text-zinc-900 dark:text-white">{block.title}</h3>}
            <p className="text-xl text-zinc-600 dark:text-zinc-300 leading-relaxed whitespace-pre-wrap">{block.content}</p>
          </div>
        </StandardWrapper>
      );
    case 'image':
      return (
        <StandardWrapper>
          <div className="w-full">
            <img src={block.content} alt={block.caption || 'Project image'} className="w-full rounded-3xl shadow-lg border border-zinc-100 dark:border-white/5" />
            {block.caption && <p className="text-base text-zinc-500 mt-4 text-center italic">{block.caption}</p>}
          </div>
        </StandardWrapper>
      );
    case 'video':
      const getYouTubeId = (url: string) => {
        if (!url) return null;
        try {
          const urlObj = new URL(url.trim());
          if (urlObj.hostname === 'youtu.be') {
            return urlObj.pathname.slice(1);
          }
          if (urlObj.hostname.includes('youtube.com')) {
            if (urlObj.searchParams.has('v')) {
              return urlObj.searchParams.get('v');
            }
            if (urlObj.pathname.startsWith('/embed/')) {
              return urlObj.pathname.split('/')[2];
            }
            if (urlObj.pathname.startsWith('/v/')) {
               return urlObj.pathname.split('/')[2];
            }
          }
        } catch (e) {
           if (url.length === 11) return url;
        }
        
        const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
        const match = url.trim().match(regExp);
        return (match && match[2].length === 11) ? match[2] : null;
      };

      const youtubeId = getYouTubeId(block.content);
      const isYoutube = block.content.includes('youtube') || block.content.includes('youtu.be') || (youtubeId !== null);

      if (youtubeId) {
        return (
          <StandardWrapper>
            <div className="w-full max-w-5xl mx-auto">
              {block.title && <h3 className="text-3xl font-bold mb-6 text-zinc-900 dark:text-white">{block.title}</h3>}
              <div className="aspect-video rounded-3xl overflow-hidden shadow-2xl bg-black relative border border-zinc-200 dark:border-white/5">
                <iframe
                  className="absolute top-0 left-0 w-full h-full"
                  src={`https://www.youtube.com/embed/${youtubeId}?autoplay=1&mute=1&loop=1&playlist=${youtubeId}&controls=1&playsinline=1&modestbranding=1&rel=0`}
                  title={block.title || "YouTube video player"}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  referrerPolicy="strict-origin-when-cross-origin"
                ></iframe>
              </div>
              <div className="mt-4 flex justify-center">
                 <a href={`https://www.youtube.com/watch?v=${youtubeId}`} target="_blank" rel="noreferrer" className="text-sm text-zinc-500 hover:text-brand-500 flex items-center gap-1">
                   <ExternalLink size={12} /> {t('video_youtube_fallback')}
                 </a>
              </div>
              {block.caption && <p className="text-base text-zinc-500 mt-2 text-center italic">{block.caption}</p>}
            </div>
          </StandardWrapper>
        );
      } else if (isYoutube) {
         return (
          <StandardWrapper>
            <div className="p-12 bg-zinc-50 dark:bg-zinc-900/50 rounded-[2rem] border border-zinc-200 dark:border-zinc-800 text-center flex flex-col items-center justify-center">
               <div className="w-16 h-16 bg-red-100 dark:bg-red-900/20 text-red-600 dark:text-red-500 rounded-full flex items-center justify-center mb-6">
                 <Play size={32} fill="currentColor" />
               </div>
               <h4 className="text-xl font-bold text-zinc-900 dark:text-white mb-2">{t('video_youtube_title')}</h4>
               <p className="text-zinc-600 dark:text-zinc-400 mb-6 max-w-md">{t('video_youtube_desc')}</p>
               <a href={block.content} target="_blank" rel="noreferrer" className="px-8 py-3 bg-red-600 hover:bg-red-700 text-white font-bold rounded-full transition-colors flex items-center gap-2">
                 {t('video_watch')} <ExternalLink size={18} />
               </a>
            </div>
          </StandardWrapper>
         );
      }

      return (
        <StandardWrapper>
          <div className="w-full">
            {block.title && <h3 className="text-3xl font-bold mb-6 text-zinc-900 dark:text-white">{block.title}</h3>}
            <div className="aspect-video rounded-3xl overflow-hidden shadow-lg bg-black border border-zinc-200 dark:border-white/5">
              <video autoPlay loop muted playsInline controls={false} className="w-full h-full object-cover" src={block.content}>
                Your browser does not support the video tag.
              </video>
            </div>
            {block.caption && <p className="text-base text-zinc-500 mt-4 text-center italic">{block.caption}</p>}
          </div>
        </StandardWrapper>
      );

    case 'design-system':
      const data = JSON.parse(block.content);
      return (
        <StandardWrapper>
           {block.title && <h3 className="text-3xl font-bold mb-8 text-zinc-900 dark:text-white">{block.title}</h3>}
           
           <div className="bg-zinc-50 dark:bg-zinc-900/50 rounded-[2rem] p-6 md:p-10 border border-zinc-200 dark:border-zinc-800">
             {/* Colors */}
             <div className="mb-12">
                <h4 className="text-sm font-bold uppercase tracking-widest text-zinc-500 mb-8 flex items-center gap-2">
                  <span className="w-10 h-[1px] bg-zinc-400"></span> Färgpalett
                </h4>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 md:gap-8">
                  {data.colors.map((color: any, idx: number) => (
                    <div key={idx} className="flex flex-col items-center">
                      <div 
                        className="w-16 h-16 md:w-24 md:h-24 rounded-full shadow-lg border-4 border-white dark:border-zinc-800 mb-4 transition-transform hover:scale-110"
                        style={{ backgroundColor: color.hex }}
                      />
                      <span className="font-bold text-zinc-900 dark:text-white text-sm md:text-base text-center">{color.name}</span>
                      <span className="text-xs md:text-sm text-zinc-500 font-mono mt-1">{color.hex}</span>
                    </div>
                  ))}
                </div>
             </div>

             {/* Typography */}
             <div>
                <h4 className="text-sm font-bold uppercase tracking-widest text-zinc-500 mb-8 flex items-center gap-2">
                  <span className="w-10 h-[1px] bg-zinc-400"></span> Typsnitt
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
                  {data.fonts.map((font: any, idx: number) => {
                    const fontFamilyStyle = font.family === 'Lexend' ? 'font-lexend' : font.family === 'Roboto' ? 'font-roboto' : 'font-sans';
                    
                    return (
                      <div key={idx} className="p-6 md:p-8 bg-white dark:bg-zinc-800 rounded-3xl border border-zinc-100 dark:border-zinc-700 overflow-hidden">
                         <div className="flex justify-between items-start mb-6">
                           <h5 className="text-lg md:text-xl font-bold text-zinc-900 dark:text-white truncate pr-2">{font.name}</h5>
                           <span className="text-xs bg-zinc-100 dark:bg-zinc-700 px-3 py-1 rounded-full text-zinc-500 whitespace-nowrap">{font.usage}</span>
                         </div>
                         <div className={`${fontFamilyStyle}`}>
                            <p className="text-5xl md:text-6xl mb-6 text-zinc-900 dark:text-white">Aa</p>
                            <p className="text-sm md:text-base text-zinc-600 dark:text-white leading-relaxed break-all">
                              ABCDEFGHIJKLMNOPQRSTUVWXYZ<br/>
                              abcdefghijklmnopqrstuvwxyz<br/>
                              1234567890
                            </p>
                         </div>
                      </div>
                    );
                  })}
                </div>
             </div>
           </div>
        </StandardWrapper>
      );

    case 'web':
      return (
        <WideWrapper>
          {block.title && <h3 className="text-3xl font-bold text-zinc-900 dark:text-white mb-6">{block.title}</h3>}
          
          {/* Desktop View: Interactive Iframe */}
          <div className="hidden lg:block">
            <InteractiveFrame src={block.content} title={block.title || "Web Preview"} type="web" />
            <div className="flex justify-center mt-6">
               <a href={block.content} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 bg-zinc-900 dark:bg-white px-8 py-3 rounded-full text-white dark:text-zinc-900 font-bold hover:opacity-90 transition-opacity shadow-lg">
                 {t('open_fullscreen')} <ExternalLink size={18} />
               </a>
            </div>
          </div>

          {/* Mobile/Tablet View: Link Card */}
          <div className="block lg:hidden">
             <a 
              href={block.content} 
              target="_blank" 
              rel="noreferrer" 
              className="group block p-5 md:p-8 bg-zinc-50 dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800 rounded-3xl hover:bg-brand-50 dark:hover:bg-brand-900/10 hover:border-brand-200 dark:hover:border-brand-800 transition-all shadow-sm hover:shadow-xl hover:-translate-y-1"
            >
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-4 md:gap-6 min-w-0">
                  <div className="bg-white dark:bg-zinc-800 p-3 md:p-4 rounded-full shadow-sm text-brand-600 dark:text-brand-400 group-hover:scale-110 transition-transform flex-shrink-0">
                      <LinkIcon size={24} className="md:w-7 md:h-7" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <span className="font-bold text-lg md:text-xl text-zinc-900 dark:text-white block group-hover:text-brand-700 dark:group-hover:text-brand-300 transition-colors leading-tight mb-1 break-words hyphens-auto">
                      {t('open_fullscreen')}
                    </span>
                    <span className="text-xs md:text-sm text-zinc-400 font-mono block truncate">{block.content}</span>
                  </div>
                </div>
                <ExternalLink className="text-zinc-300 group-hover:text-brand-500 transition-colors flex-shrink-0" size={20} />
              </div>
            </a>
          </div>

          {block.caption && <p className="text-base text-zinc-500 mt-4 text-center italic">{block.caption}</p>}
        </WideWrapper>
      );
    
    case 'external-link':
      return (
        <StandardWrapper>
          <div className="max-w-3xl mx-auto">
            {block.title && <h3 className="text-2xl font-bold mb-4 text-zinc-900 dark:text-white">{block.title}</h3>}
            <a 
              href={block.content} 
              target="_blank" 
              rel="noreferrer" 
              className="group block p-5 md:p-8 bg-zinc-50 dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800 rounded-3xl hover:bg-brand-50 dark:hover:bg-brand-900/10 hover:border-brand-200 dark:hover:border-brand-800 transition-all shadow-sm hover:shadow-xl hover:-translate-y-1"
            >
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-4 md:gap-6 min-w-0">
                  <div className="bg-white dark:bg-zinc-800 p-3 md:p-4 rounded-full shadow-sm text-brand-600 dark:text-brand-400 group-hover:scale-110 transition-transform flex-shrink-0">
                      <LinkIcon size={24} className="md:w-7 md:h-7" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <span className="font-bold text-lg md:text-xl text-zinc-900 dark:text-white block group-hover:text-brand-700 dark:group-hover:text-brand-300 transition-colors leading-tight mb-1 break-words hyphens-auto">
                      {block.caption || t('open_link')}
                    </span>
                    <span className="text-xs md:text-sm text-zinc-400 font-mono block truncate">{block.content}</span>
                  </div>
                </div>
                <ExternalLink className="text-zinc-300 group-hover:text-brand-500 transition-colors flex-shrink-0" size={20} />
              </div>
            </a>
          </div>
        </StandardWrapper>
      );

    case 'figma':
      const figmaEmbedUrl = `https://www.figma.com/embed?embed_host=share&url=${encodeURIComponent(block.content)}&scaling=scale-down-width`;
      return (
        <WideWrapper>
           {block.title && <h3 className="text-3xl font-bold text-zinc-900 dark:text-white mb-6">{block.title}</h3>}
           <InteractiveFrame src={figmaEmbedUrl} title={block.title || "Figma Prototype"} type="figma" />
           
           <div className="flex justify-center mt-6">
               <a href={block.content} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 bg-zinc-900 dark:bg-white px-8 py-3 rounded-full text-white dark:text-zinc-900 font-bold hover:opacity-90 transition-opacity shadow-lg">
                 {t('open_figma')} <ExternalLink size={18} />
               </a>
           </div>
           {block.caption && <p className="text-base text-zinc-500 mt-4 text-center italic">{block.caption}</p>}
        </WideWrapper>
      );
    default:
      return null;
  }
};

const ProjectDetail: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { projects, t } = useLanguage();
  const project = projects.find(p => p.id === id);

  useEffect(() => {
    // Ensure the modal content starts at top when opened
    const modalContent = document.getElementById('project-detail-content');
    if (modalContent) {
      modalContent.scrollIntoView({ behavior: 'auto', block: 'start' });
    }
  }, [id]);

  if (!project) {
    return <div className="p-12 text-center text-zinc-900 dark:text-white">Project not found <button onClick={() => navigate('/')}>Go Back</button></div>;
  }

  return (
    <motion.div 
      id="project-detail-content"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      className="bg-white dark:bg-black min-h-screen mt-4 md:mt-8 rounded-t-[3rem] shadow-2xl overflow-hidden relative"
    >
      <div className="w-full pb-24 pt-20 md:pt-24">
        
        {/* Simple Inline Back Link - Positioned with high z-index and pointer-events */}
        <div className="max-w-5xl mx-auto px-6 mb-8 relative z-50">
            <Link 
              to="/" 
              className="inline-flex items-center gap-2 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 px-5 py-3 rounded-full text-zinc-600 dark:text-zinc-400 hover:text-brand-600 dark:hover:text-brand-400 hover:border-brand-200 dark:hover:border-brand-800 hover:bg-brand-50 dark:hover:bg-brand-900/20 transition-all shadow-sm group font-medium"
            >
              <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
              <span>{t('back_to_home')}</span>
            </Link>
        </div>

        {/* Header Section (Centered) */}
        <div className="max-w-5xl mx-auto px-6 text-center mb-16 pt-4">
          <span className="text-brand-600 dark:text-brand-400 font-bold tracking-widest uppercase text-xs md:text-sm mb-6 block">{project.category}</span>
          <h1 className="text-4xl md:text-7xl font-bold text-zinc-900 dark:text-white mb-8 tracking-tight">{project.title}</h1>
          <p className="text-xl md:text-3xl text-zinc-500 dark:text-zinc-400 leading-relaxed font-light">{project.summary}</p>
        </div>

        {/* Hero Image (Wide) */}
        <div className="w-full max-w-[95vw] mx-auto h-[50vh] md:h-[70vh] mb-20 rounded-[3rem] overflow-hidden shadow-2xl bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-white/5 relative group">
          <img 
            src={project.thumbnail} 
            alt={project.title} 
            className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-[2s]" 
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/30"></div>
        </div>

        {/* Meta Data Grid */}
        <div className="max-w-6xl mx-auto px-6 mb-24">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 border-y border-zinc-200 dark:border-white/10 py-12">
            <div className="text-center">
              <div className="flex items-center justify-center text-zinc-900 dark:text-white font-bold mb-3 text-lg">
                <Users size={20} className="mr-3 text-brand-500" /> {t('project_role')}
              </div>
              <p className="text-zinc-600 dark:text-zinc-300 text-lg">{project.role}</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center text-zinc-900 dark:text-white font-bold mb-3 text-lg">
                <Clock size={20} className="mr-3 text-brand-500" /> {t('project_timeline')}
              </div>
              <p className="text-zinc-600 dark:text-zinc-300 text-lg">{project.timeline}</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center text-zinc-900 dark:text-white font-bold mb-3 text-lg">
                <Wrench size={20} className="mr-3 text-brand-500" /> {t('project_tools')}
              </div>
              <div className="flex flex-wrap justify-center gap-2">
                {project.tools.map(tool => (
                  <span key={tool} className="bg-zinc-100 dark:bg-zinc-900 text-zinc-700 dark:text-zinc-300 px-4 py-1.5 rounded-full text-sm font-medium border border-zinc-200 dark:border-zinc-800">{tool}</span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Text Content (Two Columns) */}
        <div className="max-w-6xl mx-auto px-6 mb-32">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
            <section>
              <h2 className="text-2xl font-bold text-zinc-900 dark:text-white mb-6 uppercase tracking-wide flex items-center gap-3">
                <span className="w-8 h-[2px] bg-brand-500"></span> {t('project_challenge')}
              </h2>
              <div className="text-zinc-600 dark:text-zinc-300 leading-relaxed text-xl">
                <p>{project.challenge}</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-zinc-900 dark:text-white mb-6 uppercase tracking-wide flex items-center gap-3">
                <span className="w-8 h-[2px] bg-brand-500"></span> {t('project_solution')}
              </h2>
              <div className="text-zinc-600 dark:text-zinc-300 leading-relaxed text-xl">
                <p>{project.solution}</p>
              </div>
            </section>
          </div>
          
          <div className="mt-16 bg-brand-50 dark:bg-brand-900/10 rounded-3xl p-10 border border-brand-100 dark:border-brand-900/30 text-center max-w-4xl mx-auto">
             <h2 className="text-xl font-bold text-brand-900 dark:text-brand-300 mb-4">{t('project_result')}</h2>
             <p className="text-brand-800 dark:text-brand-100 leading-relaxed text-xl italic">"{project.impact}"</p>
          </div>
        </div>

        {/* Deep Dive Content Blocks - Full Width Layout */}
        <div className="w-full">
            {project.contentBlocks && project.contentBlocks.length > 0 ? (
              <div className="flex flex-col">
                {project.contentBlocks.map((block, idx) => (
                  <ContentRenderer key={idx} block={block} />
                ))}
              </div>
            ) : (
              <div className="max-w-4xl mx-auto bg-zinc-50 dark:bg-zinc-900 p-12 rounded-3xl text-center border border-zinc-200 dark:border-zinc-800">
                <p className="text-zinc-500 italic text-lg">{t('project_more_coming')}</p>
              </div>
            )}
        </div>

      </div>
      
      <ContactCTA />
      <Footer />
    </motion.div>
  );
};

export default ProjectDetail;