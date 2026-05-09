import React, { useEffect, useState } from 'react';
import { Project, ContentBlock } from '../types';
import { ArrowLeft, Clock, Users, Wrench, ExternalLink, Type, Link as LinkIcon, Play, MousePointerClick } from 'lucide-react';
import { motion } from 'framer-motion';
import { useParams, useNavigate, Link } from 'react-router-dom';
import ContactCTA from './ContactCTA';
import Footer from './Footer';
import { useLanguage } from '../contexts/LanguageContext';

const StandardWrapper = ({ children }: { children?: React.ReactNode }) => (
  <div className="max-w-5xl mx-auto px-6 mb-16">{children}</div>
);

const WideWrapper = ({ children }: { children?: React.ReactNode }) => (
  <div className="w-full max-w-7xl mx-auto px-6 mb-24">{children}</div>
);

const InteractiveFrame = ({ src, title, type }: { src: string, title: string, type: 'web' | 'figma' }) => {
  const [isInteracting, setIsInteracting] = useState(false);
  const { t } = useLanguage();

  return (
    <div 
      className="relative w-full h-[70vh] min-h-[500px] rounded-3xl overflow-hidden shadow-xl border border-white/5 bg-zinc-900/40 group backdrop-blur-md"
      onMouseLeave={() => setIsInteracting(false)}
    >
      {!isInteracting && (
        <div 
          onClick={() => setIsInteracting(true)}
          className="absolute inset-0 z-20 bg-black/40 hover:bg-black/50 transition-colors cursor-pointer flex items-center justify-center backdrop-blur-[2px]"
        >
          <div className="bg-zinc-800 px-6 py-4 rounded-full shadow-2xl flex items-center gap-3">
            <MousePointerClick className="text-brand-400" />
            <span className="font-bold text-white">
              {type === 'web' ? t('interact_web') : t('interact_figma')}
            </span>
          </div>
        </div>
      )}

      {type === 'web' && (
        <div className="absolute top-0 left-0 right-0 h-10 bg-zinc-900/80 flex items-center px-6 gap-2 border-b border-white/5 z-10">
          <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
          <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
          <div className="ml-4 text-[10px] text-zinc-500 font-mono bg-black/40 px-3 py-1 rounded-md flex-1 text-center truncate">
            {src}
          </div>
        </div>
      )}

      <iframe
        src={src}
        className={`w-full h-full ${type === 'web' ? 'pt-10' : 'border-0'} transition-opacity duration-300 ${isInteracting ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-40'}`}
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
            {block.title && <h3 className="text-2xl font-bold mb-6 text-white">{block.title}</h3>}
            <p className="text-lg text-zinc-400 leading-relaxed whitespace-pre-wrap">{block.content}</p>
          </div>
        </StandardWrapper>
      );
    case 'image':
      return (
        <StandardWrapper>
          <div className="w-full">
            <img src={block.content} alt={block.caption || 'Project image'} className="w-full rounded-3xl shadow-2xl border border-white/5" />
            {block.caption && <p className="text-sm text-zinc-500 mt-4 text-center italic">{block.caption}</p>}
          </div>
        </StandardWrapper>
      );
    case 'video':
      const youtubeId = block.content.includes('youtube') ? block.content.split('v=')[1]?.split('&')[0] : block.content.split('/').pop();
      return (
        <StandardWrapper>
          <div className="w-full">
            {block.title && <h3 className="text-2xl font-bold mb-6 text-white">{block.title}</h3>}
            <div className="aspect-video rounded-3xl overflow-hidden shadow-2xl bg-black border border-white/5">
              {block.content.includes('youtube') || block.content.includes('youtu.be') ? (
                <iframe className="w-full h-full" src={`https://www.youtube.com/embed/${youtubeId}`} title={block.title} allowFullScreen />
              ) : (
                <video autoPlay loop muted playsInline controls className="w-full h-full object-cover" src={block.content} />
              )}
            </div>
            {block.caption && <p className="text-sm text-zinc-500 mt-4 text-center italic">{block.caption}</p>}
          </div>
        </StandardWrapper>
      );
    case 'web':
      return (
        <WideWrapper>
          {block.title && <h3 className="text-2xl font-bold text-white mb-6">{block.title}</h3>}
          <InteractiveFrame src={block.content} title={block.title || "Web Preview"} type="web" />
        </WideWrapper>
      );
    case 'figma':
      const figmaEmbedUrl = `https://www.figma.com/embed?embed_host=share&url=${encodeURIComponent(block.content)}`;
      return (
        <WideWrapper>
           {block.title && <h3 className="text-2xl font-bold text-white mb-6">{block.title}</h3>}
           <InteractiveFrame src={figmaEmbedUrl} title={block.title || "Figma Prototype"} type="figma" />
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
    window.scrollTo(0, 0);
  }, [id]);

  if (!project) return null;

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen bg-transparent pt-32 pb-24"
    >
      <div className="max-w-5xl mx-auto px-6 mb-12">
        <Link to="/" className="inline-flex items-center gap-2 text-zinc-500 hover:text-white transition-colors">
          <ArrowLeft size={20} /> {t('back_to_home')}
        </Link>
      </div>

      <div className="max-w-5xl mx-auto px-6 text-center mb-16">
        <span className="text-brand-400 font-bold tracking-widest uppercase text-xs mb-4 block">{project.category}</span>
        <h1 className="text-4xl md:text-7xl font-bold text-white mb-6 tracking-tight">{project.title}</h1>
        <p className="text-xl md:text-2xl text-zinc-400 font-light max-w-3xl mx-auto">{project.summary}</p>
      </div>

      <div className="w-full max-w-7xl mx-auto px-6 mb-24">
        <div className="aspect-[16/9] rounded-[3rem] overflow-hidden shadow-2xl border border-white/5 bg-zinc-900/50">
          <img src={project.thumbnail} alt={project.title} className="w-full h-full object-cover" />
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12 mb-24 py-12 border-y border-white/5">
        <div>
          <h4 className="text-xs font-bold uppercase tracking-widest text-zinc-500 mb-2">{t('project_role')}</h4>
          <p className="text-white text-lg">{project.role}</p>
        </div>
        <div>
          <h4 className="text-xs font-bold uppercase tracking-widest text-zinc-500 mb-2">{t('project_timeline')}</h4>
          <p className="text-white text-lg">{project.timeline}</p>
        </div>
        <div>
          <h4 className="text-xs font-bold uppercase tracking-widest text-zinc-500 mb-2">{t('project_tools')}</h4>
          <div className="flex flex-wrap gap-2">
            {project.tools.map(tool => (
              <span key={tool} className="text-xs bg-white/5 px-2 py-1 rounded border border-white/5 text-zinc-400">{tool}</span>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 mb-32 grid grid-cols-1 md:grid-cols-2 gap-16">
        <section>
          <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
            <span className="w-6 h-[1px] bg-brand-500"></span> {t('project_challenge')}
          </h2>
          <p className="text-zinc-400 leading-relaxed text-lg">{project.challenge}</p>
        </section>
        <section>
          <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
            <span className="w-6 h-[1px] bg-brand-500"></span> {t('project_solution')}
          </h2>
          <p className="text-zinc-400 leading-relaxed text-lg">{project.solution}</p>
        </section>
      </div>

      {project.contentBlocks?.map((block, idx) => (
        <ContentRenderer key={idx} block={block} />
      ))}

      <ContactCTA />
      <Footer />
    </motion.div>
  );
};

export default ProjectDetail;