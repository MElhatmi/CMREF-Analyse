import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Target, Search, ArrowRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { InlineMath } from './Math';

const PathConnectedVisualizer: React.FC = () => {
  const { t } = useLanguage();
  const [targetPoint, setTargetType] = useState<'A' | 'B'>('A');

  return (
    <div className="my-12 bg-slate-900 rounded-[2.5rem] p-8 text-white relative shadow-2xl border border-slate-800 overflow-hidden">
      <div className="relative z-10 space-y-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h4 className="text-xl font-bold flex items-center gap-2">
              <Target className="w-5 h-5 text-indigo-400" />
              {t('td1.viz.path.title')}
            </h4>
            <p className="text-slate-400 text-sm mt-1">
              {t('td1.viz.path.subtitle')}
            </p>
          </div>
          <div className="flex bg-slate-800 p-1 rounded-xl">
             <button 
               onClick={() => setTargetType('A')}
               className={`px-4 py-2 rounded-lg text-[10px] font-bold uppercase tracking-widest transition-all ${targetPoint === 'A' ? 'bg-indigo-600 text-white shadow-lg' : 'text-slate-400 hover:text-white'}`}
             >
               {t('td1.viz.path.initial')}
             </button>
             <button 
               onClick={() => setTargetType('B')}
               className={`px-4 py-2 rounded-lg text-[10px] font-bold uppercase tracking-widest transition-all ${targetPoint === 'B' ? 'bg-indigo-600 text-white shadow-lg' : 'text-slate-400 hover:text-white'}`}
             >
               {t('td1.viz.path.final')}
             </button>
          </div>
        </div>

        {/* Path Visualization */}
        <div className="relative h-64 bg-slate-950 rounded-3xl border border-slate-800 flex items-center justify-center overflow-hidden">
           <svg viewBox="0 0 400 200" className="w-full h-full max-w-lg">
              {/* Discrete Space {0, 1} */}
              <g transform="translate(300, 0)">
                 <rect x="0" y="40" width="40" height="40" rx="8" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.1)" />
                 <text x="20" y="65" textAnchor="middle" className="fill-white font-black">0</text>
                 
                 <rect x="0" y="120" width="40" height="40" rx="8" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.1)" />
                 <text x="20" y="145" textAnchor="middle" className="fill-white font-black">1</text>
                 
                 <text x="20" y="25" textAnchor="middle" className="fill-slate-500 text-[8px] font-bold uppercase tracking-widest">{t('td1.viz.path.discrete_space')}</text>
              </g>

              {/* Set A (Connected by arcs) */}
              <g>
                 <path d="M 40 100 Q 100 20 180 100 T 260 100" fill="none" stroke="rgba(99, 102, 241, 0.2)" strokeWidth="40" strokeLinecap="round" />
                 <text x="50" y="50" className="fill-indigo-400 text-[10px] font-black italic uppercase">{t('td1.viz.path.part_a')}</text>
              </g>

              {/* The Path gamma */}
              <motion.path 
                d="M 60 100 Q 100 40 160 100 T 240 100"
                fill="none" stroke="#6366f1" strokeWidth="2" strokeDasharray="4 2"
                initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
              />

              {/* Mapping f */}
              <motion.g 
                animate={{ 
                  y: 0, // Always constant in reality
                  opacity: 1
                }}
              >
                 <motion.path 
                    d="M 240 100 L 300 60" 
                    stroke="rgba(16, 185, 129, 0.4)" 
                    strokeWidth="1" 
                    strokeDasharray="4 4"
                    animate={{ d: targetPoint === 'A' ? "M 60 100 L 300 60" : "M 240 100 L 300 60" }}
                 />
                 <motion.circle 
                   animate={{ 
                     cx: targetPoint === 'A' ? 60 : 240,
                     cy: 100
                   }}
                   r="4" fill="#fff" 
                 />
                 <circle cx="320" cy="60" r="6" fill="#10b981" />
              </motion.g>

              {/* Failed jump visualization */}
              <AnimatePresence>
                 {targetPoint === 'B' && (
                    <motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                       <line x1="320" y1="65" x2="320" y2="115" stroke="#ef4444" strokeWidth="2" strokeDasharray="4 2" />
                       <text x="330" y="95" className="fill-red-400 text-[8px] font-black uppercase tracking-tighter">{t('td1.viz.path.jump_impossible')}</text>
                    </motion.g>
                 )}
              </AnimatePresence>
           </svg>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
           <div className="bg-slate-800/30 p-6 rounded-2xl border border-slate-800 space-y-3">
              <div className="flex items-center gap-2 text-indigo-400">
                 <ArrowRight className="w-4 h-4" />
                 <span className="text-[10px] font-black uppercase tracking-widest">{t('td1.viz.path.arc_title')}</span>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed uppercase tracking-wide">
                {t('td1.viz.path.arc_desc')}
              </p>
           </div>
           <div className="bg-slate-800/30 p-6 rounded-2xl border border-slate-800 space-y-3">
              <div className="flex items-center gap-2 text-emerald-400">
                 <Search className="w-4 h-4" />
                 <span className="text-[10px] font-black uppercase tracking-widest">{t('td1.viz.path.bridge_title')}</span>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed uppercase tracking-wide">
                {t('td1.viz.path.bridge_desc')}
              </p>
           </div>
        </div>
      </div>
    </div>
  );
};

export default PathConnectedVisualizer;
