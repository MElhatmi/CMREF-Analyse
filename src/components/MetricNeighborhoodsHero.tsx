import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { Combine } from 'lucide-react';

const MetricNeighborhoodsHero: React.FC = () => {
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
            <div className="inline-flex items-center gap-2 bg-indigo-50 px-3 py-1 rounded-full text-indigo-600 font-bold text-xs uppercase tracking-widest mb-6 border border-indigo-100">
              <Combine className="w-3 h-3" />
              {t('nav.metrics.neigh')}
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-6xl text-balance">
              {t('metrics.neigh.hero.title')}
            </h1>
            <p className="mt-6 text-lg leading-8 text-slate-600 italic">
              "The micro-environment determines the macro-structure."
            </p>
            <p className="mt-4 text-lg leading-8 text-slate-600">
              {t('metrics.neigh.hero.subtitle')}
            </p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="relative flex justify-center"
          >
            <div className="absolute inset-0 bg-indigo-100/20 blur-3xl -z-10 rounded-full" />
            <svg viewBox="0 0 400 300" className="w-full max-w-md drop-shadow-2xl">
               <rect width="400" height="300" rx="40" fill="#f8fafc" />
               
               {/* Neighborhood Visualization */}
               <g>
                 <motion.path 
                    d="M 50 150 Q 80 50 200 80 T 350 150 Q 320 250 200 220 T 50 150"
                    fill="rgba(99, 102, 241, 0.05)"
                    stroke="#6366f1"
                    strokeWidth="1"
                    strokeDasharray="5 5"
                    animate={{ scale: [1, 1.02, 1] }}
                    transition={{ repeat: Infinity, duration: 5 }}
                 />
                 
                 {/* Internal Ball */}
                 <circle cx="150" cy="140" r="40" fill="rgba(59, 130, 246, 0.1)" stroke="#3b82f6" strokeWidth="2" />
                 <circle cx="150" cy="140" r="3" fill="#1e293b" />
                 
                 <text x="145" y="120" className="text-[10px] font-bold fill-blue-600">B(a, r)</text>
                 <text x="250" y="200" className="text-xs font-bold fill-indigo-600 italic">Neighborhood V</text>
                 
                 {/* Countable Skeletons (Dots) */}
                 {Array.from({ length: 20 }).map((_, i) => (
                    <motion.circle 
                      key={i}
                      cx={100 + Math.random() * 200}
                      cy={80 + Math.random() * 140}
                      r="1.5"
                      fill="#94a3b8"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: [0, 1, 0] }}
                      transition={{ delay: i * 0.2, repeat: Infinity, duration: 3 }}
                    />
                 ))}
                 
                 <text x="50" y="270" className="text-[8px] font-bold fill-slate-400 uppercase tracking-[0.3em]">Skeleton of the Space</text>
               </g>
            </svg>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MetricNeighborhoodsHero;
