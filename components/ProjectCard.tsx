import React from 'react';
import { Project } from '../types';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

interface ProjectCardProps { project: Project; }

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
      className="group"
    >
      <Link to={`/project/${project.id}`} className="block">
        <div className="relative">
          <div className="absolute inset-0 bg-brand-500/20 blur-[100px] rounded-[4rem] opacity-0 group-hover:opacity-100 transition-opacity duration-1000 -z-10" />
          
          <div className="aspect-[4/5] overflow-hidden rounded-[3.5rem] bg-white/5 backdrop-blur-md relative mb-10 border border-white/10 shadow-2xl transition-all duration-700 hover:shadow-[0_40px_120px_-20px_rgba(0,0,0,0.9)] group-hover:-translate-y-6">
            <img 
              src={project.thumbnail} 
              alt={project.title} 
              className="w-full h-full object-cover transition-transform duration-[3000ms] group-hover:scale-110 opacity-80 group-hover:opacity-100"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-white/5 opacity-50 group-hover:opacity-20 transition-opacity duration-700" />
          </div>
        </div>
        
        <div className="px-6">
          <div className="flex items-baseline justify-between mb-4">
            <h3 className="text-4xl md:text-5xl font-bold tracking-tighter text-white transition-all group-hover:text-brand-400 font-outfit">
              {project.title}
            </h3>
          </div>
          <div className="flex items-center gap-4">
             <div className="h-[2px] w-12 bg-brand-500 group-hover:w-20 transition-all duration-700" />
             <p className="text-xs font-bold uppercase tracking-[0.5em] text-zinc-400 group-hover:text-white transition-colors font-outfit">
               {project.category}
             </p>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default ProjectCard;