import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { Link2, ShieldCheck } from 'lucide-react';

const MetricCompactPreservationHero: React.FC = () => {
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
            <div className="inline-flex items-center gap-2 bg-emerald-50 px-3 py-1 rounded-full text-emerald-600 font-bold text-xs uppercase tracking-widest mb-6 border border-emerald-100">
              <Link2 className="w-3 h-3" />
              {t('nav.metrics.compact2')}
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-6xl text-balance">
              {t('metrics.compact2.hero.title')}
            </h1>
            <p className="mt-6 text-lg leading-8 text-slate-600 italic">
              "Continuous functions are the safe bridges of topology."
            </p>
            <p className="mt-4 text-lg leading-8 text-slate-600">
              {t('metrics.compact2.hero.subtitle')}
            </p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="relative flex justify-center"
          >
            <div className="absolute inset-0 bg-emerald-100/20 blur-3xl -z-10 rounded-full" />
            <svg viewBox="0 0 400 300" className="w-full max-w-md drop-shadow-2xl">
               <rect width="400" height="300" rx="40" fill="#f8fafc" />
               
               {/* Preservation Visualization */}
               <g>
                 {/* Source Compact Set */}
                 <rect x="50" y="100" width="80" height="80" rx="10" fill="rgba(16, 185, 129, 0.1)" stroke="#10b981" strokeWidth="2" />
                 <text x="65" y="90" className="text-[8px] font-bold fill-emerald-600 uppercase tracking-widest">Compact A</text>
                 
                 {/* Bridge (Continuity) */}
                 <motion.path 
                    d="M 130 140 Q 200 140 270 140"
                    fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="4 4"
                    animate={{ strokeDashoffset: [0, -8] }}
                    transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
                 />
                 <text x="180" y="130" className="text-[8px] font-bold fill-slate-400 uppercase italic">f (Continuous)</text>

                 {/* Target Compact Set (Preserved) */}
                 <motion.circle 
                    cx="310" cy="140" r="40"
                    fill="rgba(59, 130, 246, 0.1)" stroke="#3b82f6" strokeWidth="2"
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ repeat: Infinity, duration: 4 }}
                 />
                 <text x="280" y="90" className="text-[8px] font-bold fill-blue-600 uppercase tracking-widest text-center">Compact f(A)</text>
                 
                 <ShieldCheck className="w-6 h-6 text-blue-500" x="310" y="140" />
               </g>
            </svg>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MetricCompactPreservationHero;
