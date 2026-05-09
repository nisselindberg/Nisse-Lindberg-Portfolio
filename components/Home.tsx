import React from "react";
import ProjectCard from "./ProjectCard";
import { motion } from "framer-motion";
import { ArrowDown, Mail, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "../contexts/LanguageContext";

const Home: React.FC = () => {
  const { t, projects, profile } = useLanguage();

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="min-h-[75vh] flex flex-col justify-center px-6 md:px-12 w-full max-w-[1800px] mx-auto pt-16 md:pt-24 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center text-center relative z-10"
        >
          {/* Avatar */}
          <div className="w-48 h-48 md:w-64 md:h-64 mb-10 rounded-full overflow-hidden border-4 border-white dark:border-white/10 shadow-2xl relative z-10">
            <img
              src={profile.avatar}
              alt={profile.name}
              className="w-full h-full object-cover object-top"
            />
          </div>

          <h1 className="font-display text-5xl md:text-7xl lg:text-9xl font-bold text-zinc-900 dark:text-white leading-[1.1] tracking-tight mb-8">
            {t("hero_title")} <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-500 via-fuchsia-500 to-orange-400 dark:from-brand-400 dark:via-fuchsia-400 dark:to-orange-400 bg-[length:200%_auto] animate-gradient">
              {t("hero_subtitle")}
            </span>
          </h1>

          <p className="text-xl md:text-3xl text-zinc-600 dark:text-zinc-400 max-w-3xl leading-relaxed mb-10 font-normal tracking-wide">
            {t("hero_greeting")}{" "}
            <span className="text-zinc-900 dark:text-white font-semibold">
              {profile.name}
            </span>
            <span className="ml-2">{profile.bio}</span>
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap justify-center gap-6 mb-16">
            <button
              onClick={() => {
                const element = document.getElementById("work");
                element?.scrollIntoView({ behavior: "smooth" });
              }}
              className="group bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 px-10 py-5 rounded-full font-bold text-lg hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 flex items-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500"
              aria-label="Scroll to work section"
            >
              {t("hero_btn_work")}
              <ArrowDown
                size={20}
                className="group-hover:translate-y-1 transition-transform"
              />
            </button>
            <Link
              to="/contact"
              className="group bg-white dark:bg-transparent text-zinc-900 dark:text-white border border-zinc-200 dark:border-white/20 px-10 py-5 rounded-full font-bold text-lg hover:bg-zinc-50 dark:hover:bg-white/5 transition-all shadow-sm hover:shadow-md hover:-translate-y-1 flex items-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500"
              aria-label="Contact page"
            >
              <Mail
                size={20}
                className="group-hover:rotate-12 transition-transform"
              />
              {t("hero_btn_contact")}
            </Link>
          </div>
        </motion.div>
      </section>

      {/* Projects Grid */}
      <section id="work" className="py-32 px-6 md:px-12">
        <div className="w-full max-w-[1800px] mx-auto">
          <div className="flex items-end justify-between mb-16">
            <div>
              <h2 className="font-display text-4xl md:text-6xl font-bold text-zinc-900 dark:text-white mb-4 tracking-tight">
                {t("home_selected_work")}
              </h2>
              <div className="h-2 w-24 bg-brand-500 rounded-full"></div>
            </div>
            <div className="hidden md:flex items-center gap-2 text-zinc-500 dark:text-zinc-500 font-medium text-lg">
              <Sparkles size={20} />
              <span>{t("home_latest")}</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  delay: index * 0.1,
                  duration: 0.6,
                  ease: "easeOut",
                }}
                className="h-full"
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
