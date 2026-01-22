import React from 'react';
import { Project } from '../types';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
      className="group"
    >
      <Link to={`/project/${project.id}`} className="block">
        <div className="relative">
          {/* Glass Card Shadow Depth */}
          <div className="absolute inset-0 bg-brand-500/20 blur-[80px] rounded-[4rem] opacity-0 group-hover:opacity-100 transition-opacity duration-700 -z-10" />
          
          <div className="aspect-[4/5] overflow-hidden rounded-[3.5rem] bg-zinc-900 relative mb-10 border border-white/5 shadow-2xl transition-all duration-700 hover:shadow-[0_40px_100px_-20px_rgba(0,0,0,0.8)] group-hover:-translate-y-4">
            <img 
              src={project.thumbnail} 
              alt={project.title} 
              className="w-full h-full object-cover transition-transform duration-[2000ms] group-hover:scale-105"
            />
            {/* Subtle Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
          </div>
        </div>
        
        <div className="px-6">
          <div className="flex items-baseline justify-between mb-4">
            <h3 className="text-3xl md:text-5xl font-bold tracking-tighter text-white transition-all group-hover:text-brand-400">
              {project.title}
            </h3>
          </div>
          <div className="flex items-center gap-3">
             <div className="h-[1px] w-8 bg-brand-500/50" />
             <p className="text-xs font-bold uppercase tracking-[0.4em] text-zinc-500 group-hover:text-brand-400/70 transition-colors">
               {project.category}
             </p>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default ProjectCard;