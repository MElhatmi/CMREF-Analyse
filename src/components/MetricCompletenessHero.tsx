import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { Network } from 'lucide-react';

const MetricCompletenessHero: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="relative overflow-hidden bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:items-center lg:gap-x-12">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 bg-slate-50 px-3 py-1 rounded-full text-slate-600 font-bold text-xs uppercase tracking-widest mb-6 border border-slate-100">
              <Network className="w-3 h-3" />
              {t('nav.metrics.complete')}
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-6xl text-balance">
              {t('metrics.complete.hero.title')}
            </h1>
            <p className="mt-6 text-lg leading-8 text-slate-600 italic">
              "In a complete space, every consistent journey has a destination."
            </p>
            <p className="mt-4 text-lg leading-8 text-slate-600">
              {t('metrics.complete.hero.subtitle')}
            </p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="relative flex justify-center"
          >
            <div className="absolute inset-0 bg-blue-100/20 blur-3xl -z-10 rounded-full" />
            <svg viewBox="0 0 400 300" className="w-full max-w-md drop-shadow-2xl">
               <rect width="400" height="300" rx="40" fill="#f8fafc" />
               
               {/* Completeness Visualization */}
               <g>
                 {/* Seamless background */}
                 <rect x="50" y="50" width="300" height="200" rx="20" fill="white" stroke="#e2e8f0" strokeWidth="1" />
                 
                 {/* Converging Cauchy sequence */}
                 {Array.from({ length: 15 }).map((_, i) => {
                    const r = 100 * Math.pow(0.7, i);
                    const angle = i * 1.5;
                    return (
                      <motion.circle 
                        key={i}
                        cx={200 + Math.cos(angle) * r}
                        cy={150 + Math.sin(angle) * r}
                        r="3"
                        fill="#3b82f6"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: i * 0.2 }}
                      />
                    );
                 })}

                 {/* The guaranteed limit point */}
                 <motion.circle 
                    cx="200" cy="150" r="6"
                    fill="#1e293b"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 3 }}
                 />
                 <text x="215" y="155" className="text-[10px] font-bold fill-slate-900 uppercase tracking-widest">Limit Point exists</text>
                 
                 <text x="60" y="270" className="text-[8px] font-bold fill-slate-400 uppercase tracking-[0.3em]">A Perfect, Seamless Universe</text>
               </g>
            </svg>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MetricCompletenessHero;
