import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Target, Search, ArrowRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { InlineMath } from './Math';

const SetIntersectionVisualizer: React.FC = () => {
  const { t } = useLanguage();
  const [isIntersecting, setIsIntersection] = useState(true);

  return (
    <div className="my-12 bg-slate-900 rounded-[2.5rem] p-8 text-white relative shadow-2xl border border-slate-800 overflow-hidden">
      {/* Background patterns */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(#6366f1 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
      </div>

      <div className="relative z-10 space-y-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h4 className="text-xl font-bold flex items-center gap-2">
              <Target className="w-5 h-5 text-indigo-400" />
              {t('td1.viz.intersect.title')}
            </h4>
            <p className="text-slate-400 text-sm mt-1">
              {t('td1.viz.intersect.subtitle')}
            </p>
          </div>
          <div className="flex bg-slate-800 p-1 rounded-xl">
             <button 
               onClick={() => setIsIntersection(true)}
               className={`px-4 py-2 rounded-lg text-[10px] font-bold uppercase tracking-widest transition-all ${isIntersecting ? 'bg-indigo-600 text-white shadow-lg' : 'text-slate-400 hover:text-white'}`}
             >
               <InlineMath math="A \cap B \neq \emptyset" />
             </button>
             <button 
               onClick={() => setIsIntersection(false)}
               className={`px-4 py-2 rounded-lg text-[10px] font-bold uppercase tracking-widest transition-all ${!isIntersecting ? 'bg-red-600 text-white shadow-lg' : 'text-slate-400 hover:text-white'}`}
             >
               <InlineMath math="A \cap B = \emptyset" />
             </button>
          </div>
        </div>

        {/* Euler Diagram Style Visualization */}
        <div className="relative h-64 bg-slate-950 rounded-3xl border border-slate-800 flex items-center justify-center">
           <svg viewBox="0 0 400 200" className="w-full h-full max-w-lg">
              {/* Set B (Closure) */}
              <g opacity="0.6">
                 <rect x="180" y="40" width="160" height="120" rx="20" fill="rgba(16, 185, 129, 0.1)" stroke="#10b981" strokeWidth="2" />
                 <text x="320" y="60" className="fill-emerald-400 text-[10px] font-bold tracking-widest uppercase">adh(B)</text>
              </g>

              {/* Set A (Open) */}
              <motion.g 
                animate={{ x: isIntersecting ? 0 : -80 }}
                transition={{ type: 'spring', damping: 20 }}
              >
                 <circle cx="150" cy="100" r="70" fill="rgba(99, 102, 241, 0.1)" />
                 <circle cx="150" cy="100" r="70" fill="none" stroke="#6366f1" strokeWidth="2" strokeDasharray="6 4" />
                 <text x="100" y="60" className="fill-indigo-400 text-[10px] font-bold tracking-widest uppercase">A (Ouvert)</text>
              </motion.g>

              {/* Intersection Visuals */}
              <AnimatePresence>
                {isIntersecting ? (
                  <motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                     <path d="M 180 55 A 70 70 0 0 1 180 145 L 180 55" fill="rgba(255, 255, 255, 0.1)" />
                     <circle cx="180" cy="100" r="4" fill="#fff" />
                     <text x="190" y="105" className="fill-white text-[8px] font-bold">x ∈ A ∩ adh(B)</text>
                  </motion.g>
                ) : (
                  <motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                     <line x1="120" y1="100" x2="280" y2="100" stroke="rgba(239, 68, 68, 0.3)" strokeWidth="1" strokeDasharray="4 2" />
                     <text x="200" y="115" textAnchor="middle" className="fill-red-400 text-[8px] font-black uppercase tracking-tighter italic">{t('td1.viz.intersect.sep_neigh')}</text>
                  </motion.g>
                )}
              </AnimatePresence>
           </svg>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
           <div className="bg-slate-800/30 p-6 rounded-2xl border border-slate-800 space-y-3">
              <div className="flex items-center gap-2 text-indigo-400">
                 <Search className="w-4 h-4" />
                 <span className="text-[10px] font-black uppercase tracking-widest">{t('td1.viz.intersect.power_title')}</span>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed uppercase tracking-wide">
                {t('td1.viz.intersect.power_desc')}
              </p>
           </div>
           <div className="bg-slate-800/30 p-6 rounded-2xl border border-slate-800 space-y-3">
              <div className="flex items-center gap-2 text-emerald-400">
                 <ArrowRight className="w-4 h-4" />
                 <span className="text-[10px] font-black uppercase tracking-widest">{t('td1.viz.intersect.cons_title')}</span>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed uppercase tracking-wide">
                {t('td1.viz.intersect.cons_desc')}
              </p>
           </div>
        </div>
      </div>
    </div>
  );
};

export default SetIntersectionVisualizer;
