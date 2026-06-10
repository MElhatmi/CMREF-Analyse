import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { Box } from 'lucide-react';

// Simple seeded random to ensure purity during render
const seededRandom = (seed: number) => {
  let s = seed;
  return () => {
    s = (s * 16807) % 2147483647;
    return (s - 1) / 2147483646;
  };
};

const MetricCompactHero: React.FC = () => {
  const { t } = useLanguage();

  const points = useMemo(() => {
    const rnd = seededRandom(42);
    return Array.from({ length: 40 }).map(() => ({
      angle: rnd() * Math.PI * 2,
      r: rnd() * 30
    }));
  }, []);

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
              <Box className="w-3 h-3" />
              {t('nav.metrics.compact')}
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-6xl text-balance">
              {t('metrics.compact.hero.title')}
            </h1>
            <p className="mt-6 text-lg leading-8 text-slate-600 italic">
              "A compact space is where infinity is forced to be ordered."
            </p>
            <p className="mt-4 text-lg leading-8 text-slate-600">
              {t('metrics.compact.hero.subtitle')}
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
               
               {/* Compact Trap Illustration */}
               <g>
                 <rect x="100" y="50" width="200" height="200" rx="20" fill="rgba(99, 102, 241, 0.05)" stroke="#6366f1" strokeWidth="2" />
                 
                 {/* Trapped points clumping */}
                 {points.map((p, i) => {
                    return (
                      <motion.circle 
                        key={i}
                        cx={200 + Math.cos(p.angle) * p.r}
                        cy={150 + Math.sin(p.angle) * p.r}
                        r="2"
                        fill="#475569"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: [0, 1, 0.5] }}
                        transition={{ delay: i * 0.05 }}
                      />
                    );
                 })}

                 {/* The Center of Adherence */}
                 <motion.circle 
                   cx="200" cy="150" r="15" 
                   fill="none" stroke="#ef4444" strokeWidth="1" strokeDasharray="4 2"
                   animate={{ scale: [1, 1.2, 1], rotate: 360 }}
                   transition={{ repeat: Infinity, duration: 4 }}
                 />
                 
                 <text x="130" y="270" className="text-[8px] font-bold fill-slate-400 uppercase tracking-[0.3em]">The Clumping Effect</text>
               </g>
            </svg>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MetricCompactHero;
