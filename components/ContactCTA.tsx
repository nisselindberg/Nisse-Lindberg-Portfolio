import React from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "../contexts/LanguageContext";

const ContactCTA: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="py-24 px-6 md:px-12 bg-purple-50 dark:bg-purple-950/20 border-t border-purple-100 dark:border-purple-900/30 transition-colors duration-300">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="font-display text-3xl md:text-5xl font-bold text-zinc-900 dark:text-purple-100 mb-6">
          {t("cta_title")}
        </h2>
        <p className="text-xl text-zinc-600 dark:text-purple-200/70 mb-10 max-w-xl mx-auto leading-relaxed">
          {t("cta_text")}
        </p>
        <Link
          to="/contact"
          className="inline-flex items-center gap-2 bg-brand-600 dark:bg-brand-500 text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-brand-700 dark:hover:bg-brand-400 transition-all hover:scale-105 shadow-xl hover:shadow-brand-500/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500"
        >
          {t("cta_btn")} <ArrowRight size={20} />
        </Link>
      </div>
    </section>
  );
};

export default ContactCTA;
