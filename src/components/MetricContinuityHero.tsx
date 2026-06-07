import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { Activity, ShieldCheck, Zap } from 'lucide-react';

const MetricContinuityHero: React.FC = () => {
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
              <Activity className="w-3 h-3" />
              {t('nav.metrics.continuity')}
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-6xl text-balance">
              {t('metrics.cont.hero.title')}
            </h1>
            <p className="mt-6 text-lg leading-8 text-slate-600 italic">
              "Standard continuity is a point; Uniform continuity is a universe; Lipschitz is a speed limit."
            </p>
            <p className="mt-4 text-lg leading-8 text-slate-600">
              {t('metrics.cont.hero.subtitle')}
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
               
               {/* Hierarchy of Smoothness Visualization */}
               <g>
                 {/* Standard Continuity (Small focus) */}
                 <circle cx="100" cy="150" r="50" fill="rgba(59, 130, 246, 0.03)" stroke="#3b82f6" strokeWidth="1" strokeDasharray="4 4" />
                 <circle cx="100" cy="150" r="3" fill="#3b82f6" />
                 <text x="75" y="220" className="text-[8px] font-bold fill-blue-500 uppercase tracking-widest text-center">Local</text>

                 {/* Uniform (Global margin) */}
                 <circle cx="200" cy="150" r="70" fill="rgba(99, 102, 241, 0.05)" stroke="#6366f1" strokeWidth="1.5" />
                 <ShieldCheck className="w-6 h-6 text-indigo-500 -translate-x-3 -translate-y-3" x="200" y="150" />
                 <text x="175" y="240" className="text-[8px] font-bold fill-indigo-500 uppercase tracking-widest">Uniform</text>

                 {/* Lipschitz (Strict containment) */}
                 <circle cx="300" cy="150" r="40" fill="rgba(16, 185, 129, 0.1)" stroke="#10b981" strokeWidth="3" />
                 <Zap className="w-5 h-5 text-emerald-500 -translate-x-2.5 -translate-y-2.5" x="300" y="150" />
                 <text x="280" y="210" className="text-[8px] font-bold fill-emerald-600 uppercase tracking-widest">Lipschitz</text>

                 <path d="M 150 150 L 170 150 M 230 150 L 250 150" stroke="#cbd5e1" strokeWidth="1" />
               </g>
            </svg>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MetricContinuityHero;
