import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { Footprints } from 'lucide-react';

const MetricSequencesHero: React.FC = () => {
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
            <div className="inline-flex items-center gap-2 bg-amber-50 px-3 py-1 rounded-full text-amber-600 font-bold text-xs uppercase tracking-widest mb-6 border border-amber-100">
              <Footprints className="w-3 h-3" />
              {t('nav.metrics.seq')}
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-6xl text-balance">
              {t('metrics.seq.hero.title')}
            </h1>
            <p className="mt-6 text-lg leading-8 text-slate-600 italic">
              "Convergence is a destination; Adherence is a recurring visit."
            </p>
            <p className="mt-4 text-lg leading-8 text-slate-600">
              {t('metrics.seq.hero.subtitle')}
            </p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="relative flex justify-center"
          >
            <div className="absolute inset-0 bg-amber-100/20 blur-3xl -z-10 rounded-full" />
            <svg viewBox="0 0 400 300" className="w-full max-w-md drop-shadow-2xl">
               <rect width="400" height="300" rx="40" fill="#f8fafc" />
               
               {/* Journey Path */}
               <path d="M 50 250 Q 100 50 200 150 T 350 100" fill="none" stroke="#e2e8f0" strokeWidth="2" strokeDasharray="6 4" />
               
               {/* Destination (Convergence) */}
               <circle cx="350" cy="100" r="10" fill="rgba(34, 197, 94, 0.1)" stroke="#22c55e" strokeWidth="2" strokeDasharray="4 2" />
               <circle cx="350" cy="100" r="3" fill="#15803d" />
               <text x="310" y="80" className="text-[10px] font-bold fill-green-600 uppercase tracking-widest">Convergence l</text>

               {/* Recurrent Point (Adherence) */}
               <circle cx="200" cy="150" r="10" fill="rgba(59, 130, 246, 0.1)" stroke="#3b82f6" strokeWidth="2" strokeDasharray="4 2" />
               <circle cx="200" cy="150" r="3" fill="#1d4ed8" />
               <text x="160" y="180" className="text-[10px] font-bold fill-blue-600 uppercase tracking-widest">Adherence a</text>

               {/* Moving Points */}
               {[0, 0.2, 0.4, 0.6, 0.8, 1].map((_, i) => (
                  <motion.circle 
                    key={i}
                    r="4"
                    fill="#94a3b8"
                    animate={{
                       offsetDistance: ["0%", "100%"]
                    }}
                    transition={{
                       repeat: Infinity,
                       duration: 4,
                       delay: i * 0.5,
                       ease: "easeInOut"
                    }}
                    style={{ offsetPath: "path('M 50 250 Q 100 50 200 150 T 350 100')" }}
                  />
               ))}

               <text x="50" y="270" className="text-[8px] font-bold fill-slate-400 uppercase tracking-[0.3em]">The Infinite Sequence (x_n)</text>
            </svg>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MetricSequencesHero;
