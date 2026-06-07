import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { Wind } from 'lucide-react';

const MetricOpenHero: React.FC = () => {
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
            <div className="inline-flex items-center gap-2 bg-blue-50 px-3 py-1 rounded-full text-blue-600 font-bold text-xs uppercase tracking-widest mb-6 border border-blue-100">
              <Wind className="w-3 h-3" />
              {t('nav.metrics.open')}
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-6xl text-balance">
              {t('metrics.open.hero.title')}
            </h1>
            <p className="mt-6 text-lg leading-8 text-slate-600 italic">
              "An open set is a set where every inhabitant has room to grow."
            </p>
            <p className="mt-4 text-lg leading-8 text-slate-600">
              {t('metrics.open.hero.subtitle')}
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
               
               {/* Open Set visualization (Dashed skin) */}
               <motion.path 
                 d="M 100 150 Q 150 50 250 80 T 300 200 Q 250 250 150 220 Z"
                 fill="rgba(59, 130, 246, 0.05)"
                 stroke="#3b82f6"
                 strokeWidth="2"
                 strokeDasharray="8 4"
                 animate={{ scale: [1, 1.02, 1] }}
                 transition={{ repeat: Infinity, duration: 6 }}
               />

               {/* Breathing Room points */}
               {[
                 { x: 180, y: 140, r: 30 },
                 { x: 240, y: 170, r: 20 },
                 { x: 150, y: 180, r: 25 }
               ].map((p, i) => (
                 <g key={i}>
                    <motion.circle 
                      cx={p.x} cy={p.y} r={p.r} 
                      fill="rgba(59, 130, 246, 0.1)" stroke="#3b82f6" strokeWidth="1"
                      animate={{ opacity: [0.3, 0.6, 0.3] }}
                      transition={{ delay: i * 0.5, repeat: Infinity, duration: 3 }}
                    />
                    <circle cx={p.x} cy={p.y} r="3" fill="#1e293b" />
                 </g>
               ))}
               
               <text x="50" y="270" className="text-[8px] font-bold fill-slate-400 uppercase tracking-[0.3em]">No Hard Boundary detected</text>
            </svg>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MetricOpenHero;
