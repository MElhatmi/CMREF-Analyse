import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Target, Layers } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { InlineMath } from './Math';

const SetConvergenceVisualizer: React.FC = () => {
  const { t } = useLanguage();
  const [limitType, setLimitType] = useState<'A' | 'B'>('A');
  
  // Set A: u_n = (-1)^n + 1/n
  // Set B: v_n = 2/n
  
  const terms = Array.from({ length: 40 }, (_, i) => {
    const n = i + 1;
    if (limitType === 'A') {
      return { n, val: Math.pow(-1, n) + 1/n };
    } else {
      return { n, val: 2/n };
    }
  });

  const limit = limitType === 'A' ? 1 : 0; // Using sub-sequence limit for A (u_2k -> 1)

  return (
    <div className="my-12 bg-slate-900 rounded-[2.5rem] p-8 text-white relative shadow-2xl border border-slate-800">
      <div className="relative z-10 space-y-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h4 className="text-xl font-bold flex items-center gap-2">
              <Target className="w-5 h-5 text-indigo-400" />
              {t('td1.viz.set_conv.title')}
            </h4>
            <p className="text-slate-400 text-sm mt-1">
              {t('td1.viz.set_conv.subtitle')}
            </p>
          </div>
          <div className="flex bg-slate-800 p-1 rounded-xl">
             <button 
               onClick={() => setLimitType('A')}
               className={`px-4 py-2 rounded-lg text-[10px] font-bold uppercase tracking-widest transition-all ${limitType === 'A' ? 'bg-indigo-600 text-white shadow-lg' : 'text-slate-400 hover:text-white'}`}
             >
               {t('td1.viz.set_conv.set_a')}
             </button>
             <button 
               onClick={() => setLimitType('B')}
               className={`px-4 py-2 rounded-lg text-[10px] font-bold uppercase tracking-widest transition-all ${limitType === 'B' ? 'bg-indigo-600 text-white shadow-lg' : 'text-slate-400 hover:text-white'}`}
             >
               {t('td1.viz.set_conv.set_b')}
             </button>
          </div>
        </div>

        {/* Real Line Visualization */}
        <div className="relative h-32 bg-slate-950 rounded-3xl border border-slate-800 flex items-center px-12 overflow-hidden">
           {/* Axis */}
           <div className="absolute h-px bg-slate-800 left-12 right-12" />
           
           {/* Limit Line */}
           <motion.div 
             initial={false}
             animate={{ left: `${((limit + 1) / 3) * 100}%` }}
             className="absolute top-0 bottom-0 w-px border-l border-dashed border-red-500/50 z-10"
           >
              <span className="absolute -top-6 left-1/2 -translate-x-1/2 text-[8px] font-bold text-red-400 uppercase whitespace-nowrap">{t('td1.viz.set_conv.limit')} l = {limit}</span>
              <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-3 h-3 bg-red-500 rounded-full blur-[4px]" />
           </motion.div>

           {/* Terms */}
           {terms.map((t_item) => {
             const pos = ((t_item.val + 1) / 3) * 100;
             if (pos < 0 || pos > 100) return null;
             
             // Color logic: for A, distinguish odd/even
             const color = limitType === 'A' 
                ? (t_item.n % 2 === 0 ? 'bg-indigo-400' : 'bg-slate-700')
                : 'bg-emerald-400';

             return (
               <motion.div
                 key={t_item.n}
                 initial={{ opacity: 0, y: 10 }}
                 animate={{ opacity: 1, y: 0, left: `${pos}%` }}
                 transition={{ delay: t_item.n * 0.01 }}
                 className={`absolute w-1.5 h-1.5 rounded-full ${color} shadow-sm group`}
               >
                 <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-white text-slate-900 text-[8px] px-1.5 py-0.5 rounded font-bold scale-0 group-hover:scale-100 transition-transform whitespace-nowrap z-30">
                   u_{t_item.n} = {t_item.val.toFixed(3)}
                 </div>
               </motion.div>
             );
           })}
        </div>

        <div className="bg-slate-800/30 rounded-3xl p-6 border border-slate-800 flex gap-6 items-start">
           <Layers className="w-6 h-6 text-indigo-400 shrink-0" />
           <div className="space-y-4">
              <div>
                 <p className="text-[10px] font-black text-indigo-400 uppercase tracking-widest mb-2">{t('td1.viz.set_conv.argument')}</p>
                 <p className="text-xs text-slate-400 leading-relaxed">
                   {limitType === 'A' ? t('td1.viz.set_conv.arg_a') : t('td1.viz.set_conv.arg_b')}
                 </p>
              </div>
              <div className="pt-4 border-t border-slate-800 grid grid-cols-2 gap-4">
                 <div>
                    <span className="text-[8px] font-bold text-slate-500 uppercase tracking-widest block mb-1">{t('td1.viz.set_conv.adherence')}</span>
                    <p className="text-[10px] text-slate-300 font-mono">
                      {limitType === 'A' ? "A ∪ {-1, 1}" : "B ∪ {0}"}
                    </p>
                 </div>
                 <div>
                    <span className="text-[8px] font-bold text-slate-500 uppercase tracking-widest block mb-1">{t('td1.viz.set_conv.verdict')}</span>
                    <p className="text-[10px] text-red-400 font-bold uppercase tracking-wider">{t('td1.viz.set_conv.not_closed')}</p>
                 </div>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
};

export default SetConvergenceVisualizer;
