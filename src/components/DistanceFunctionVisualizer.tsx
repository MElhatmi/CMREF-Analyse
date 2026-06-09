import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Target, Ruler } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { InlineMath } from './Math';

const DistanceFunctionVisualizer: React.FC = () => {
  const { t } = useLanguage();
  const [x, setX] = useState(2);
  
  // d(x, y) = |1/x - 1/y|
  const inverse = (val: number) => 1 / val;
  
  const points = [0.1, 0.2, 0.5, 1, 2, 5, 10];
  
  return (
    <div className="my-12 bg-slate-900 rounded-[2.5rem] p-8 text-white relative shadow-2xl border border-slate-800">
      <div className="relative z-10 space-y-8">
        <div>
          <h4 className="text-xl font-bold flex items-center gap-2">
            <Target className="w-5 h-5 text-indigo-400" />
            {t('td1.viz.dist_func.title')} : <InlineMath math="d(x, y) = |1/x - 1/y|" />
          </h4>
          <p className="text-slate-400 text-sm mt-1">
            {t('td1.viz.dist_func.subtitle')}
          </p>
        </div>

        {/* Visual Mapping */}
        <div className="space-y-12">
          {/* Real Line (Reference) */}
          <div className="space-y-4">
             <div className="flex justify-between items-center">
                <span className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em]">{t('td1.viz.dist_func.standard')}</span>
                <span className="text-[10px] font-bold text-slate-400">{t('td1.viz.dist_func.pos')} x = {x.toFixed(1)}</span>
             </div>
             <div className="relative h-12 bg-slate-950 rounded-2xl border border-slate-800 flex items-center px-8">
                <div className="absolute h-px bg-slate-800 left-8 right-8" />
                {points.map(p => (
                  <div key={p} className="absolute flex flex-col items-center" style={{ left: `${(p/10)*100}%`, transform: 'translateX(-50%)' }}>
                    <div className="h-2 w-px bg-slate-700" />
                    <span className="text-[8px] text-slate-600 mt-1 font-bold">{p}</span>
                  </div>
                ))}
                {/* Draggable Point */}
                <motion.div 
                  className="absolute z-20 cursor-grab active:cursor-grabbing group"
                  style={{ left: `${(x/10)*100}%` }}
                  drag="x"
                  dragConstraints={{ left: 0, right: 300 }} // Approximative
                  onDrag={(_, info) => {
                    const newVal = Math.max(0.1, Math.min(10, (info.point.x / 400) * 10)); // Simplified mapping
                    setX(newVal);
                  }}
                >
                   <div className="w-4 h-4 bg-indigo-500 rounded-full shadow-[0_0_15px_rgba(99,102,241,0.5)] border-2 border-white" />
                   <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-white text-slate-900 text-[10px] px-2 py-1 rounded font-bold opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                     x = {x.toFixed(2)}
                   </div>
                </motion.div>
             </div>
          </div>

          {/* Metric Distance (Inverse Space) */}
          <div className="space-y-4">
             <div className="flex justify-between items-center">
                <span className="text-[10px] font-black text-indigo-400 uppercase tracking-[0.2em]">{t('td1.viz.dist_func.inverse')}</span>
                <span className="text-[10px] font-bold text-indigo-300">1/x = {inverse(x).toFixed(2)}</span>
             </div>
             <div className="relative h-12 bg-slate-950 rounded-2xl border border-indigo-900/30 flex items-center px-8">
                <div className="absolute h-px bg-indigo-900/20 left-8 right-8" />
                {points.map(p => {
                  const invP = inverse(p);
                  const pos = (invP / 10) * 100;
                  if (pos > 100) return null;
                  return (
                    <div key={p} className="absolute flex flex-col items-center" style={{ left: `${pos}%`, transform: 'translateX(-50%)' }}>
                      <div className="h-2 w-px bg-indigo-500/30" />
                      <span className="text-[8px] text-indigo-400/50 mt-1 font-bold">{p}</span>
                    </div>
                  );
                })}
                {/* Result Point in Metric Space */}
                <motion.div 
                  animate={{ left: `${(inverse(x)/10)*100}%` }}
                  className="absolute z-20"
                >
                   <div className="w-4 h-4 bg-emerald-500 rounded-full shadow-[0_0_15px_rgba(16,185,129,0.5)] border-2 border-white" />
                </motion.div>
             </div>
          </div>
        </div>

        <div className="bg-indigo-500/5 rounded-3xl p-6 border border-indigo-500/10 grid md:grid-cols-2 gap-8">
           <div className="space-y-2">
              <div className="flex items-center gap-2 text-indigo-400">
                 <Ruler className="w-4 h-4" />
                 <span className="text-[10px] font-black uppercase tracking-widest">{t('td1.viz.dist_func.neigh_0')}</span>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                {t('td1.viz.dist_func.neigh_0_desc')}
              </p>
           </div>
           <div className="space-y-2">
              <div className="flex items-center gap-2 text-emerald-400">
                 <Ruler className="w-4 h-4" />
                 <span className="text-[10px] font-black uppercase tracking-widest">{t('td1.viz.dist_func.inf_crush')}</span>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                {t('td1.viz.dist_func.inf_crush_desc')}
              </p>
           </div>
        </div>
      </div>
    </div>
  );
};

export default DistanceFunctionVisualizer;
