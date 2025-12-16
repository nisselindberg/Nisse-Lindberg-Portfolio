import React from 'react';
import { Project } from '../types';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <motion.div
      whileHover={{ y: -8, scale: 1.01 }}
      className="group relative bg-white dark:bg-[#160824] rounded-[2rem] overflow-hidden shadow-sm hover:shadow-2xl hover:shadow-purple-900/10 dark:hover:shadow-purple-700/30 transition-all duration-500 h-full border border-zinc-200 dark:border-purple-900/30"
    >
      <Link to={`/project/${project.id}`} className="flex flex-col h-full text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 rounded-[2rem]">
        {/* Image Container */}
        <div className="relative overflow-hidden h-72 flex-shrink-0 bg-zinc-100 dark:bg-[#240f3e]">
          <div className="absolute inset-0 bg-purple-900/0 group-hover:bg-purple-900/10 transition-colors z-10 duration-500" />
          <img 
            src={project.thumbnail} 
            alt={project.title} 
            className="w-full h-full object-cover object-top transform group-hover:scale-105 transition-transform duration-700 ease-in-out"
          />
          <div className="absolute top-5 left-5 z-20">
            <span className="bg-white/95 dark:bg-[#2e1065]/90 backdrop-blur-md px-4 py-2 rounded-full text-xs font-bold text-zinc-900 dark:text-purple-100 uppercase tracking-widest shadow-lg border border-zinc-100 dark:border-purple-800">
              {project.category}
            </span>
          </div>
        </div>
        
        {/* Content */}
        <div className="p-8 flex flex-col flex-1 justify-between bg-white dark:bg-[#160824] group-hover:bg-purple-50/30 dark:group-hover:bg-[#1e0b30] relative z-20 transition-colors duration-300">
          <div className="w-full">
            <h3 className="text-2xl font-bold text-zinc-900 dark:text-white mb-3 group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors tracking-tight">
              {project.title}
            </h3>
            <p className="text-zinc-600 dark:text-zinc-400 mb-8 line-clamp-3 leading-relaxed font-medium group-hover:text-zinc-700 dark:group-hover:text-zinc-300 transition-colors">
              {project.summary}
            </p>
          </div>
          
          <span 
            className="inline-flex items-center font-bold text-sm text-zinc-900 dark:text-white group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors self-end uppercase tracking-wide"
          >
            View Case Study 
            <span className="bg-zinc-100 dark:bg-[#2e1065] group-hover:bg-brand-100 dark:group-hover:bg-brand-900/50 p-1.5 rounded-full ml-3 transition-colors text-zinc-900 dark:text-white group-hover:text-brand-600 dark:group-hover:text-brand-300">
              <ArrowRight size={16} className="transform group-hover:translate-x-0.5 transition-transform" />
            </span>
          </span>
        </div>
      </Link>
    </motion.div>
  );
};

export default ProjectCard;