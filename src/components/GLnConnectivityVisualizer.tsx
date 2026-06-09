import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Target, Search, ShieldAlert } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { InlineMath } from './Math';

const GLnConnectivityVisualizer: React.FC = () => {
  const { t } = useLanguage();
  const [detSign, setDetSign] = useState<'pos' | 'neg'>('pos');

  return (
    <div className="my-12 bg-slate-900 rounded-[2.5rem] p-8 text-white relative shadow-2xl border border-slate-800 overflow-hidden">
      <div className="relative z-10 space-y-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h4 className="text-xl font-bold flex items-center gap-2">
              <Target className="w-5 h-5 text-indigo-400" />
              {t('td1.viz.gln.title')}
            </h4>
            <p className="text-slate-400 text-sm mt-1">
              {t('td1.viz.gln.subtitle')}
            </p>
          </div>
          <div className="flex bg-slate-800 p-1 rounded-xl">
             <button 
               onClick={() => setDetSign('pos')}
               className={`px-4 py-2 rounded-lg text-[10px] font-bold uppercase tracking-widest transition-all ${detSign === 'pos' ? 'bg-indigo-600 text-white shadow-lg' : 'text-slate-400 hover:text-white'}`}
             >
               {t('td1.viz.gln.mat_a')}
             </button>
             <button 
               onClick={() => setDetSign('neg')}
               className={`px-4 py-2 rounded-lg text-[10px] font-bold uppercase tracking-widest transition-all ${detSign === 'neg' ? 'bg-indigo-600 text-white shadow-lg' : 'text-slate-400 hover:text-white'}`}
             >
               {t('td1.viz.gln.mat_b')}
             </button>
          </div>
        </div>

        {/* Determinant Axis Visualization */}
        <div className="relative h-48 bg-slate-950 rounded-3xl border border-slate-800 flex items-center px-12 overflow-hidden">
           {/* The Axis of Determinant Values */}
           <div className="absolute h-px bg-slate-800 left-12 right-12" />
           
           {/* The "Forbidden" Zone (det = 0) */}
           <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-8 bg-red-500/10 border-x border-red-500/20 z-10 flex flex-col items-center justify-center">
              <ShieldAlert className="w-4 h-4 text-red-500 mb-2 opacity-50" />
              <span className="[writing-mode:vertical-lr] text-[8px] font-black text-red-500 uppercase tracking-widest">{t('td1.viz.gln.forbidden')}</span>
           </div>

           {/* Components of GLn */}
           <div className="absolute left-12 right-1/2 mr-4 top-12 bottom-12 rounded-2xl bg-indigo-500/5 border border-indigo-500/10 flex items-center justify-center">
              <span className="text-[10px] font-bold text-indigo-400/30 uppercase tracking-widest">GLₙ⁺(ℝ)</span>
           </div>
           <div className="absolute left-1/2 ml-4 right-12 top-12 bottom-12 rounded-2xl bg-emerald-500/5 border border-emerald-500/10 flex items-center justify-center">
              <span className="text-[10px] font-bold text-emerald-400/30 uppercase tracking-widest">GLₙ⁻(ℝ)</span>
           </div>

           {/* The Matrices */}
           <motion.g animate={{ x: detSign === 'pos' ? -100 : 100 }} transition={{ type: 'spring', damping: 20 }}>
              <motion.circle 
                animate={{ 
                  cx: 200, cy: 100, 
                  fill: detSign === 'pos' ? '#6366f1' : '#10b981'
                }}
                r="8" className="shadow-2xl shadow-white/20" 
              />
              <text x="215" y="105" className="fill-white text-[10px] font-bold uppercase tracking-widest">
                {detSign === 'pos' ? t('td1.viz.gln.mat_label') + ' A' : t('td1.viz.gln.mat_label') + ' B'}
              </text>
           </motion.g>

           {/* Theoretical Path */}
           <AnimatePresence>
             {detSign === 'neg' && (
               <motion.path 
                 initial={{ pathLength: 0, opacity: 0 }}
                 animate={{ pathLength: 1, opacity: 1 }}
                 d="M 100 100 L 300 100" 
                 stroke="#fff" strokeWidth="1" strokeDasharray="4 4"
                 className="opacity-20"
               />
             )}
           </AnimatePresence>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
           <div className="bg-slate-800/30 p-6 rounded-2xl border border-slate-800 space-y-3">
              <div className="flex items-center gap-2 text-indigo-400">
                 <Search className="w-4 h-4" />
                 <span className="text-[10px] font-black uppercase tracking-widest">{t('td1.viz.gln.tvi_title')}</span>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed uppercase tracking-wide">
                {t('td1.viz.gln.tvi_desc')}
              </p>
           </div>
           <div className="bg-slate-800/30 p-6 rounded-2xl border border-slate-800 space-y-3">
              <div className="flex items-center gap-2 text-red-400">
                 <ShieldAlert className="w-4 h-4" />
                 <span className="text-[10px] font-black uppercase tracking-widest">{t('td1.viz.gln.fracture_title')}</span>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed uppercase tracking-wide">
                {t('td1.viz.gln.fracture_desc')}
              </p>
           </div>
        </div>
      </div>
    </div>
  );
};

export default GLnConnectivityVisualizer;
