import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Target, Maximize, AlertCircle } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const SetSeparationVisualizer: React.FC = () => {
  const { t } = useLanguage();
  const [separation, setSeparation] = useState(0.4);

  return (
    <div className="my-12 bg-slate-900 rounded-[2.5rem] p-8 text-white relative shadow-2xl border border-slate-800 overflow-hidden">
      <div className="relative z-10 space-y-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h4 className="text-xl font-bold flex items-center gap-2">
              <Target className="w-5 h-5 text-indigo-400" />
              {t('td1.viz.sep.title')}
            </h4>
            <p className="text-slate-400 text-sm mt-1">
              {t('td1.viz.sep.subtitle')}
            </p>
          </div>
          <div className="flex flex-col gap-2">
             <span className="text-[8px] font-black text-slate-500 uppercase tracking-widest text-right">{t('td1.viz.sep.adjust')}</span>
             <input 
               type="range" min="0.1" max="0.8" step="0.05" value={separation} 
               onChange={(e) => setSeparation(parseFloat(e.target.value))}
               className="w-32 accent-indigo-500 h-1 bg-slate-800 rounded-lg appearance-none cursor-pointer"
             />
          </div>
        </div>

        {/* 2D Separation Visual */}
        <div className="relative h-64 bg-slate-950 rounded-3xl border border-slate-800 flex items-center justify-center overflow-hidden">
           <svg viewBox="0 0 400 200" className="w-full h-full max-w-lg overflow-visible">
              {/* Region U (Open) */}
              <motion.rect 
                animate={{ width: 200 - (separation * 100) }}
                x="0" y="0" height="200" fill="rgba(99, 102, 241, 0.1)" stroke="rgba(99, 102, 241, 0.3)" strokeDasharray="4 2" 
              />
              {/* Region V (Open) */}
              <motion.rect 
                animate={{ x: 200 + (separation * 100), width: 200 - (separation * 100) }}
                y="0" height="200" fill="rgba(16, 185, 129, 0.1)" stroke="rgba(16, 185, 129, 0.3)" strokeDasharray="4 2" 
              />

              {/* Set F (Closed) */}
              <motion.g animate={{ x: -separation * 40 }}>
                 <circle cx="100" cy="100" r="40" fill="#6366f1" />
                 <text x="100" y="105" textAnchor="middle" className="fill-white text-[12px] font-black italic">F</text>
              </motion.g>

              {/* Set G (Closed) */}
              <motion.g animate={{ x: separation * 40 }}>
                 <rect x="260" y="60" width="80" height="80" rx="10" fill="#10b981" />
                 <text x="300" y="105" textAnchor="middle" className="fill-white text-[12px] font-black italic">G</text>
              </motion.g>

              {/* Boundary / Neutral zone */}
              <rect x="199" y="0" width="2" height="200" fill="rgba(255,255,255,0.05)" />
              <text x="200" y="190" textAnchor="middle" className="fill-slate-700 text-[8px] font-bold uppercase tracking-widest italic">{t('td1.viz.sep.decision')}</text>
           </svg>

           {/* Distance Labels */}
           <div className="absolute top-6 left-1/2 -translate-x-1/2 bg-slate-900/90 border border-slate-700 px-4 py-2 rounded-2xl flex items-center gap-6 shadow-2xl">
              <div className="flex flex-col items-center">
                 <span className="text-[8px] font-bold text-indigo-400 uppercase">d(x, F) &lt; d(x, G)</span>
                 <span className="text-[10px] font-black text-white">{t('td1.viz.sep.zone_u')}</span>
              </div>
              <div className="h-6 w-px bg-slate-700" />
              <div className="flex flex-col items-center">
                 <span className="text-[8px] font-bold text-emerald-400 uppercase">d(x, G) &lt; d(x, F)</span>
                 <span className="text-[10px] font-black text-white">{t('td1.viz.sep.zone_v')}</span>
              </div>
           </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
           <div className="space-y-3">
              <div className="flex items-center gap-2 text-indigo-400">
                 <Maximize className="w-4 h-4" />
                 <span className="text-[10px] font-black uppercase tracking-widest">{t('td1.viz.sep.buffer_title')}</span>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                {t('td1.viz.sep.buffer_desc')}
              </p>
           </div>
           <div className="space-y-3">
              <div className="flex items-center gap-2 text-red-400">
                 <AlertCircle className="w-4 h-4" />
                 <span className="text-[10px] font-black uppercase tracking-widest">{t('td1.viz.sep.normal_title')}</span>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                {t('td1.viz.sep.normal_desc')}
              </p>
           </div>
        </div>
      </div>
    </div>
  );
};

export default SetSeparationVisualizer;
