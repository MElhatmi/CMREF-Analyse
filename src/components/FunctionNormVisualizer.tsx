import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Target, Activity, Ruler } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { InlineMath } from './Math';

const FunctionNormVisualizer: React.FC = () => {
  const { t } = useLanguage();
  const [n, setN] = useState(2);

  const generatePath = () => {
    let path = "M 0 150";
    for (let i = 0; i <= 100; i++) {
      const x = i / 100;
      const y = 150 - Math.pow(x, n) * 100;
      path += ` L ${i * 3} ${y}`;
    }
    return path;
  };

  const euclideanNorm = Math.sqrt(Math.pow(n, 2) / (2 * n - 1));

  return (
    <div className="my-12 bg-slate-900 rounded-[2.5rem] p-8 text-white relative shadow-2xl border border-slate-800 overflow-hidden">
      <div className="relative z-10 space-y-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h4 className="text-xl font-bold flex items-center gap-2">
              <Target className="w-5 h-5 text-indigo-400" />
              {t('td1.viz.norm.title')}
            </h4>
            <p className="text-slate-400 text-sm mt-1">
              {t('td1.viz.norm.subtitle')}
            </p>
          </div>
          <div className="flex flex-col gap-2">
             <span className="text-[8px] font-black text-slate-500 uppercase tracking-widest text-right">{t('td1.viz.norm.adjust')}</span>
             <input 
               type="range" min="1" max="50" step="1" value={n} 
               onChange={(e) => setN(parseInt(e.target.value))}
               className="w-32 md:w-48 accent-indigo-500 h-1 bg-slate-800 rounded-lg appearance-none cursor-pointer"
             />
          </div>
        </div>

        {/* Function Graph */}
        <div className="bg-slate-950 rounded-3xl p-6 border border-slate-800 relative">
          <div className="flex justify-between items-start mb-4 px-2">
             <div className="space-y-1">
                <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest block">{t('td1.viz.norm.function')}</span>
                <span className="text-sm font-mono text-white italic">f_n(x) = x^{n}</span>
             </div>
             <div className="flex gap-4">
                <div className="text-right">
                   <span className="text-[10px] font-bold text-emerald-400 uppercase tracking-widest block">||f_n||∞</span>
                   <span className="text-sm font-mono text-white">1.00</span>
                </div>
                <div className="text-right">
                   <span className="text-[10px] font-bold text-indigo-400 uppercase tracking-widest block">N(f_n)</span>
                   <motion.span animate={{ scale: [1, 1.1, 1] }} key={n} className="text-sm font-mono text-white">{euclideanNorm.toFixed(2)}</motion.span>
                </div>
             </div>
          </div>

          <div className="relative h-40 w-full">
            <svg viewBox="0 0 300 150" className="w-full h-full overflow-visible">
               {/* Axes */}
               <line x1="0" y1="150" x2="300" y2="150" stroke="#1e293b" strokeWidth="2" />
               <line x1="0" y1="150" x2="0" y2="0" stroke="#1e293b" strokeWidth="2" />
               
               {/* Grid line at y=1 */}
               <line x1="0" y1="50" x2="300" y2="50" stroke="#1e293b" strokeWidth="1" strokeDasharray="4 4" />
               
               {/* Function Path */}
               <motion.path 
                 d={generatePath()} 
                 fill="none" 
                 stroke={n > 20 ? "#6366f1" : "#10b981"} 
                 strokeWidth="3" 
                 transition={{ type: 'spring', damping: 20 }}
               />

               {/* Derivative Visual (Slope at x=1) */}
               <motion.line 
                 initial={false}
                 animate={{ 
                   x1: 270, y1: 50 + (n * 10), 
                   x2: 300, y2: 50 
                 }}
                 stroke="rgba(244, 63, 94, 0.4)"
                 strokeWidth="2"
                 strokeDasharray="2 2"
               />
            </svg>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
           <div className="bg-slate-800/30 p-6 rounded-2xl border border-slate-800 space-y-3">
              <div className="flex items-center gap-2 text-emerald-400">
                 <Ruler className="w-4 h-4" />
                 <span className="text-[10px] font-black uppercase tracking-widest">{t('td1.viz.norm.stable_title')}</span>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed uppercase tracking-wide">
                {t('td1.viz.norm.stable_desc')}
              </p>
           </div>
           <div className="bg-slate-800/30 p-6 rounded-2xl border border-slate-800 space-y-3">
              <div className="flex items-center gap-2 text-red-400">
                 <Activity className="w-4 h-4" />
                 <span className="text-[10px] font-black uppercase tracking-widest">{t('td1.viz.norm.energy_title')}</span>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed uppercase tracking-wide">
                {t('td1.viz.norm.energy_desc')}
              </p>
           </div>
        </div>
      </div>
    </div>
  );
};

export default FunctionNormVisualizer;
