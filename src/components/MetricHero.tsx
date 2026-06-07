import React from 'react';
import { motion } from 'framer-motion';
import { RulerIcon } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const MetricHero: React.FC = () => {
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
              <RulerIcon className="w-3 h-3" />
              Metric Spaces: Foundations
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-6xl text-balance">
              {t('metrics.hero.title')}
            </h1>
            <p className="mt-6 text-lg leading-8 text-slate-600 italic">
              "Topology describes closeness; Metrics define distance."
            </p>
            <p className="mt-4 text-lg leading-8 text-slate-600">
              {t('metrics.hero.subtitle')}
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
               
               {/* Measurement Illustration */}
               <motion.g
                 animate={{ x: [0, 50, 0] }}
                 transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
               >
                 {/* Ruler */}
                 <rect x="50" y="140" width="300" height="20" fill="white" stroke="#3b82f6" strokeWidth="2" rx="4" />
                 {Array.from({ length: 30 }).map((_, i) => (
                   <line 
                     key={i} 
                     x1={60 + i * 10} y1="140" 
                     x2={60 + i * 10} y2={i % 5 === 0 ? "152" : "145"} 
                     stroke="#3b82f6" strokeWidth="1" 
                   />
                 ))}
                 
                 {/* Points being measured */}
                 <circle cx="100" cy="110" r="4" fill="#1e293b" />
                 <circle cx="280" cy="110" r="4" fill="#1e293b" />
                 <path d="M 100 110 L 280 110" stroke="#3b82f6" strokeWidth="2" strokeDasharray="4 2" />
                 
                 <text x="180" y="100" className="text-[10px] font-bold fill-blue-600 text-center uppercase tracking-widest">Distance d(x, y)</text>
               </motion.g>

               {/* Background Grid */}
               <defs>
                 <pattern id="small-grid" width="20" height="20" patternUnits="userSpaceOnUse">
                   <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#e2e8f0" strokeWidth="0.5" />
                 </pattern>
               </defs>
               <rect x="40" y="40" width="320" height="220" fill="url(#small-grid)" rx="20" />
            </svg>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MetricHero;
