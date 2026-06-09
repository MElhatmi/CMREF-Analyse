import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Target, Layers, Circle } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { InlineMath } from './Math';

const SetTopologyVisualizer: React.FC = () => {
  const { t } = useLanguage();
  const [showClosure, setShowClosure] = useState(false);
  const [showInterior, setShowInterior] = useState(false);

  // A1: {1/k}
  const a1Points = Array.from({ length: 15 }, (_, i) => 1 / (i + 1));
  
  return (
    <div className="my-12 bg-slate-900 rounded-[2.5rem] p-8 text-white relative shadow-2xl border border-slate-800">
      <div className="relative z-10 space-y-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h4 className="text-xl font-bold flex items-center gap-2">
              <Target className="w-5 h-5 text-indigo-400" />
              {t('td1.viz.set_topo.title')}
            </h4>
            <p className="text-slate-400 text-sm mt-1">
              {t('td1.viz.set_topo.subtitle')}
            </p>
          </div>
          <div className="flex gap-2 bg-slate-800 p-1 rounded-xl">
             <button 
               onClick={() => { setShowInterior(!showInterior); setShowClosure(false); }}
               className={`px-3 py-1.5 rounded-lg text-[10px] font-bold uppercase tracking-widest transition-all ${showInterior ? 'bg-blue-600 text-white shadow-lg' : 'text-slate-400 hover:text-white'}`}
             >
               {t('td1.viz.set_topo.interior')}
             </button>
             <button 
               onClick={() => { setShowClosure(!showClosure); setShowInterior(false); }}
               className={`px-3 py-1.5 rounded-lg text-[10px] font-bold uppercase tracking-widest transition-all ${showClosure ? 'bg-indigo-600 text-white shadow-lg' : 'text-slate-400 hover:text-white'}`}
             >
               {t('td1.viz.set_topo.adherence')}
             </button>
          </div>
        </div>

        {/* Real Line Visualization */}
        <div className="relative h-48 bg-slate-950 rounded-3xl border border-slate-800 flex items-center px-12 overflow-hidden">
           <div className="absolute h-px bg-slate-800 left-12 right-12" />
           
           {/* Axis labels */}
           {[0, 1, 2, 3].map(val => (
             <div key={val} className="absolute flex flex-col items-center" style={{ left: `${(val / 3.5) * 100}%`, transform: 'translateX(-50%)' }}>
               <div className="h-2 w-px bg-slate-700" />
               <span className="text-[10px] text-slate-500 mt-2 font-bold">{val}</span>
             </div>
           ))}

           {/* A1: Discrete points {1/k} */}
           {a1Points.map((val, i) => (
             <div 
               key={i} 
               className="absolute w-2 h-2 bg-slate-400 rounded-full shadow-sm z-20"
               style={{ left: `${(val / 3.5) * 100}%`, transform: 'translateX(-50%)' }}
             />
           ))}

           {/* A2: Open interval ]1, 2[ */}
           <div 
             className="absolute h-4 bg-indigo-500/30 border-y border-indigo-400/50 z-10 flex justify-between px-0.5"
             style={{ left: `${(1 / 3.5) * 100}%`, width: `${(1 / 3.5) * 100}%` }}
           >
              <div className="h-full w-px bg-indigo-400" />
              <div className="h-full w-px bg-indigo-400" />
           </div>

           {/* A3: Rational points Q ∩ [2, 3[ */}
           <div 
             className="absolute h-4 bg-emerald-500/10 border-l border-emerald-400 z-10 overflow-hidden"
             style={{ left: `${(2 / 3.5) * 100}%`, width: `${(1 / 3.5) * 100}%` }}
           >
              <div className="w-full h-full" style={{ backgroundImage: 'radial-gradient(#10b981 0.5px, transparent 0.5px)', backgroundSize: '4px 4px' }} />
           </div>

           {/* OVERLAYS */}
           
           {/* Interior Overlay */}
           {showInterior && (
             <motion.div 
               initial={{ opacity: 0 }} animate={{ opacity: 1 }}
               className="absolute h-10 bg-blue-500/40 border-y-2 border-blue-400 z-30"
               style={{ left: `${(1 / 3.5) * 100}%`, width: `${(1 / 3.5) * 100}%` }}
             >
                <span className="absolute -top-6 left-1/2 -translate-x-1/2 text-[8px] font-bold text-blue-400 uppercase tracking-widest whitespace-nowrap">{t('td1.viz.set_topo.int_desc')}</span>
             </motion.div>
           )}

           {/* Closure Overlay */}
           {showClosure && (
             <>
               {/* 0 and 1/k points */}
               <motion.div 
                 initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                 className="absolute w-3 h-3 bg-indigo-500 rounded-full border border-white z-40"
                 style={{ left: `0%`, transform: 'translateX(-50%)' }}
               >
                  <span className="absolute -top-6 left-1/2 -translate-x-1/2 text-[8px] font-bold text-indigo-400 uppercase tracking-widest">0 ∈ adh(A)</span>
               </motion.div>
               {/* [1, 3] segment */}
               <motion.div 
                 initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                 className="absolute h-10 bg-indigo-500/40 border-x-2 border-indigo-400 z-30"
                 style={{ left: `${(1 / 3.5) * 100}%`, width: `${(2 / 3.5) * 100}%` }}
               >
                  <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-[8px] font-bold text-indigo-300 uppercase tracking-widest whitespace-nowrap">{t('td1.viz.set_topo.adh_desc')}</span>
               </motion.div>
             </>
           )}
        </div>

        <div className="grid md:grid-cols-3 gap-4">
           <div className="bg-slate-800/30 p-4 rounded-2xl border border-slate-800 space-y-2">
              <div className="flex items-center gap-2 text-slate-400">
                 <Circle className="w-3 h-3" />
                 <span className="text-[10px] font-bold uppercase tracking-widest">{t('td1.viz.set_topo.isolated')}</span>
              </div>
              <p className="text-[10px] text-slate-500 leading-tight">
                {t('td1.viz.set_topo.isolated_desc')}
              </p>
           </div>
           <div className="bg-slate-800/30 p-4 rounded-2xl border border-slate-800 space-y-2">
              <div className="flex items-center gap-2 text-indigo-400">
                 <Layers className="w-3 h-3" />
                 <span className="text-[10px] font-bold uppercase tracking-widest">{t('td1.viz.set_topo.density')}</span>
              </div>
              <p className="text-[10px] text-slate-500 leading-tight">
                {t('td1.viz.set_topo.density_desc')}
              </p>
           </div>
           <div className="bg-slate-800/30 p-4 rounded-2xl border border-slate-800 space-y-2">
              <div className="flex items-center gap-2 text-emerald-400">
                 <Target className="w-3 h-3" />
                 <span className="text-[10px] font-bold uppercase tracking-widest">{t('td1.viz.set_topo.accumulation')}</span>
              </div>
              <p className="text-[10px] text-slate-500 leading-tight">
                {t('td1.viz.set_topo.accumulation_desc')}
              </p>
           </div>
        </div>
      </div>
    </div>
  );
};

export default SetTopologyVisualizer;
