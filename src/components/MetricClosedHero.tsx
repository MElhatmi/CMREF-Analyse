import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { ShieldAlert } from 'lucide-react';

const MetricClosedHero: React.FC = () => {
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
            <div className="inline-flex items-center gap-2 bg-red-50 px-3 py-1 rounded-full text-red-600 font-bold text-xs uppercase tracking-widest mb-6 border border-red-100">
              <ShieldAlert className="w-3 h-3" />
              {t('nav.metrics.closed')}
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-6xl text-balance">
              {t('metrics.closed.hero.title')}
            </h1>
            <p className="mt-6 text-lg leading-8 text-slate-600 italic">
              "Closed sets are sets that have captured all their limit points."
            </p>
            <p className="mt-4 text-lg leading-8 text-slate-600">
              {t('metrics.closed.hero.subtitle')}
            </p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="relative flex justify-center"
          >
            <div className="absolute inset-0 bg-red-100/20 blur-3xl -z-10 rounded-full" />
            <svg viewBox="0 0 400 300" className="w-full max-w-md drop-shadow-2xl">
               <rect width="400" height="300" rx="40" fill="#f8fafc" />
               
               {/* Closed Set Illustration */}
               <motion.g
                 animate={{ scale: [1, 1.02, 1] }}
                 transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
               >
                 <circle cx="200" cy="150" r="80" fill="rgba(239, 68, 68, 0.05)" stroke="#ef4444" strokeWidth="4" />
                 <circle cx="200" cy="150" r="4" fill="#1e293b" />
                 
                 {/* Trapped points */}
                 {[0, 60, 120, 180, 240, 300].map(angle => (
                    <motion.circle 
                      key={angle}
                      cx={200 + Math.cos(angle * Math.PI / 180) * 80}
                      cy={150 + Math.sin(angle * Math.PI / 180) * 80}
                      r="3"
                      fill="#ef4444"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: angle / 300, repeat: Infinity, repeatType: "reverse", duration: 2 }}
                    />
                 ))}
                 
                 <text x="180" y="250" className="text-[10px] font-bold fill-red-600 text-center uppercase tracking-widest italic">Boundary is Included</text>
               </motion.g>
            </svg>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MetricClosedHero;
