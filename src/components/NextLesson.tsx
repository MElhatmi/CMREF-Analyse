import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

interface NextLessonProps {
  to: string;
  title: string;
  chapter: number;
  description: string;
}

const NextLesson: React.FC<NextLessonProps> = ({ to, title, chapter, description }) => {
  const { t } = useLanguage();

  return (
    <section className="bg-white py-24 px-6 border-t border-slate-100">
      <div className="mx-auto max-w-4xl">
        <Link to={to} className="group block">
          <motion.div 
            whileHover={{ y: -5 }}
            className="bg-slate-900 rounded-[3rem] p-10 md:p-16 text-white shadow-2xl shadow-indigo-100 relative overflow-hidden"
          >
            {/* Background Glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/10 blur-3xl -z-0" />
            
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6">
                <span className="bg-indigo-600 text-white px-3 py-1 rounded-lg text-[10px] font-bold uppercase tracking-[0.2em]">{t('common.next')}</span>
                <span className="text-slate-500 text-[10px] font-bold uppercase tracking-widest">{t('common.chapter')} {chapter}</span>
              </div>
              
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
                <div>
                  <h3 className="text-4xl font-bold mb-4 tracking-tight group-hover:text-indigo-400 transition-colors">
                    {title}
                  </h3>
                  <p className="text-slate-400 text-lg max-w-xl leading-relaxed">
                    {description}
                  </p>
                </div>
                
                <div className="shrink-0">
                  <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center group-hover:bg-indigo-600 transition-all duration-300">
                    <ArrowRight className="w-8 h-8 text-white" />
                  </div>
                </div>
              </div>
              
              <div className="mt-12 flex items-center gap-2 text-indigo-400 font-bold text-xs uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                {t('common.continue')} <ChevronRight className="w-3 h-3" />
              </div>
            </div>
          </motion.div>
        </Link>
      </div>
    </section>
  );
};

export default NextLesson;
