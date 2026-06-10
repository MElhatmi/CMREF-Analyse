import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Target, Maximize, Ruler } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const SubspaceInteriorVisualizer: React.FC = () => {
  const { t } = useLanguage();
  const [hasInterior, setHasInterior] = useState(false);

  return (
    <div className="my-12 bg-slate-900 rounded-[2.5rem] p-8 text-white relative shadow-2xl border border-slate-800 overflow-hidden">
      <div className="relative z-10 space-y-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h4 className="text-xl font-bold flex items-center gap-2">
              <Target className="w-5 h-5 text-indigo-400" />
              {t('td1.viz.sub_int.title')}
            </h4>
            <p className="text-slate-400 text-sm mt-1">
              {t('td1.viz.sub_int.subtitle')}
            </p>
          </div>
          <div className="flex bg-slate-800 p-1 rounded-xl">
             <button 
               onClick={() => setHasInterior(false)}
               className={`px-4 py-2 rounded-lg text-[10px] font-bold uppercase tracking-widest transition-all ${!hasInterior ? 'bg-indigo-600 text-white shadow-lg' : 'text-slate-400 hover:text-white'}`}
             >
               {t('td1.viz.sub_int.proper')}
             </button>
             <button 
               onClick={() => setHasInterior(true)}
               className={`px-4 py-2 rounded-lg text-[10px] font-bold uppercase tracking-widest transition-all ${hasInterior ? 'bg-indigo-600 text-white shadow-lg' : 'text-slate-400 hover:text-white'}`}
             >
               {t('td1.viz.sub_int.interior')}
             </button>
          </div>
        </div>

        {/* 2D Visualization in R3 or R2 */}
        <div className="relative h-64 bg-slate-950 rounded-3xl border border-slate-800 flex items-center justify-center overflow-hidden">
           <svg viewBox="0 0 400 200" className="w-full h-full max-w-lg overflow-visible">
              <rect x="0" y="0" width="400" height="200" fill="rgba(255,255,255,0.02)" />
              
              <motion.g 
                animate={{ 
                  scale: hasInterior ? 5 : 1,
                  opacity: hasInterior ? 0.3 : 1
                }}
                transition={{ type: 'spring', stiffness: 50 }}
              >
                 <line x1="0" y1="100" x2="400" y2="100" stroke="#6366f1" strokeWidth="4" strokeLinecap="round" />
                 <text x="20" y="90" className="fill-indigo-400 text-[10px] font-black italic uppercase">F</text>
              </motion.g>

              <motion.g animate={{ opacity: 1, x: 200, y: 100 }}>
                 <circle cx="0" cy="0" r="4" fill="#fff" />
                 <text x="10" y="5" className="fill-white text-[10px] font-bold">a ∈ F</text>
                 
                 <motion.circle 
                   animate={{ 
                     r: hasInterior ? 40 : 0,
                     opacity: hasInterior ? 0.2 : 0
                   }}
                   cx="0" cy="0" fill="#6366f1" stroke="#6366f1" strokeWidth="1" strokeDasharray="4 2"
                 />
              </motion.g>

              <AnimatePresence>
                {hasInterior && (
                  <motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                     <line x1="200" y1="100" x2="350" y2="50" stroke="#f43f5e" strokeWidth="2" strokeDasharray="4 4" />
                     <circle cx="350" cy="50" r="4" fill="#f43f5e" />
                     <text x="360" y="55" className="fill-red-400 text-[10px] font-bold italic">{t('td1.viz.sub_int.vector_x')}</text>
                  </motion.g>
                )}
              </AnimatePresence>
           </svg>

           {/* Logic Labels */}
           <div className="absolute bottom-6 right-6 flex flex-col gap-2">
              <AnimatePresence mode="wait">
                 {!hasInterior ? (
                   <motion.div key="v1" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="bg-slate-900/80 backdrop-blur-md px-4 py-2 rounded-xl border border-slate-700">
                      <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{t('td1.viz.sub_int.state_empty')}</p>
                      <p className="text-xs text-slate-300">{t('td1.viz.sub_int.state_empty_desc')}</p>
                   </motion.div>
                 ) : (
                   <motion.div key="v2" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="bg-indigo-600/90 backdrop-blur-md px-4 py-2 rounded-xl border border-indigo-500 shadow-2xl">
                      <p className="text-[10px] font-bold text-indigo-100 uppercase tracking-widest">{t('td1.viz.sub_int.state_fill')}</p>
                      <p className="text-xs text-white">{t('td1.viz.sub_int.state_fill_desc')}</p>
                   </motion.div>
                 )}
              </AnimatePresence>
           </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
           <div className="bg-slate-800/30 p-6 rounded-2xl border border-slate-800 space-y-3">
              <div className="flex items-center gap-2 text-indigo-400">
                 <Maximize className="w-4 h-4" />
                 <span className="text-[10px] font-black uppercase tracking-widest">{t('td1.viz.sub_int.homothety_title')}</span>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed uppercase tracking-wide">
                {t('td1.viz.sub_int.homothety_desc')}
              </p>
           </div>
           <div className="bg-slate-800/30 p-6 rounded-2xl border border-slate-800 space-y-3">
              <div className="flex items-center gap-2 text-emerald-400">
                 <Ruler className="w-4 h-4" />
                 <span className="text-[10px] font-black uppercase tracking-widest">{t('td1.viz.sub_int.density_title')}</span>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed uppercase tracking-wide">
                {t('td1.viz.sub_int.density_desc')}
              </p>
           </div>
        </div>
      </div>
    </div>
  );
};

export default SubspaceInteriorVisualizer;
