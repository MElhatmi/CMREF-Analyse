import React, { useState } from 'react';
import { Target, Search, Maximize } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const R2TopologyVisualizer: React.FC = () => {
  const { t } = useLanguage();
  const [activeSet, setActiveSet] = useState<'A1' | 'A2'>('A1');

  // Visualization logic
  // A1: x^2y^2 > 1 => |xy| > 1 => y > 1/x or y < -1/x
  // A2: x^2 + y^2 = 1 and y >= 0 (Upper semi-circle)

  return (
    <div className="my-12 bg-slate-900 rounded-[2.5rem] p-8 text-white relative shadow-2xl border border-slate-800">
      <div className="relative z-10 space-y-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h4 className="text-xl font-bold flex items-center gap-2">
              <Target className="w-5 h-5 text-indigo-400" />
              {t('td1.viz.r2_topo.title')}
            </h4>
            <p className="text-slate-400 text-sm mt-1">
              {t('td1.viz.r2_topo.subtitle')}
            </p>
          </div>
          <div className="flex bg-slate-800 p-1 rounded-xl">
             <button 
               onClick={() => setActiveSet('A1')}
               className={`px-4 py-2 rounded-lg text-[10px] font-bold uppercase tracking-widest transition-all ${activeSet === 'A1' ? 'bg-indigo-600 text-white shadow-lg' : 'text-slate-400 hover:text-white'}`}
             >
               {t('td1.viz.r2_topo.set_a1')}
             </button>
             <button 
               onClick={() => setActiveSet('A2')}
               className={`px-4 py-2 rounded-lg text-[10px] font-bold uppercase tracking-widest transition-all ${activeSet === 'A2' ? 'bg-indigo-600 text-white shadow-lg' : 'text-slate-400 hover:text-white'}`}
             >
               {t('td1.viz.r2_topo.set_a2')}
             </button>
          </div>
        </div>

        {/* Plan Visualization */}
        <div className="relative aspect-square md:aspect-video bg-slate-950 rounded-3xl border border-slate-800 flex items-center justify-center overflow-hidden">
           {/* Grid */}
           <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'linear-gradient(#4f46e5 1px, transparent 1px), linear-gradient(90deg, #4f46e5 1px, transparent 1px)', backgroundSize: '40px 40px', backgroundPosition: 'center' }} />
           
           {/* Axes */}
           <div className="absolute w-full h-px bg-slate-800" />
           <div className="absolute h-full w-px bg-slate-800" />

           <svg viewBox="-4 -2.5 8 5" className="w-full h-full p-8 overflow-visible">
              {activeSet === 'A1' ? (
                <>
                  {/* A1 regions: |xy| > 1 */}
                  <path d="M 0.5 2.5 L 4 2.5 L 4 0.25 Q 1 1 0.5 2.5 Z" fill="rgba(99, 102, 241, 0.2)" stroke="#6366f1" strokeWidth="0.05" />
                  <path d="M -0.5 2.5 L -4 2.5 L -4 0.25 Q -1 1 -0.5 2.5 Z" fill="rgba(99, 102, 241, 0.2)" stroke="#6366f1" strokeWidth="0.05" />
                  <path d="M -0.5 -2.5 L -4 -2.5 L -4 -0.25 Q -1 -1 -0.5 -2.5 Z" fill="rgba(99, 102, 241, 0.2)" stroke="#6366f1" strokeWidth="0.05" />
                  <path d="M 0.5 -2.5 L 4 -2.5 L 4 -0.25 Q 1 -1 0.5 -2.5 Z" fill="rgba(99, 102, 241, 0.2)" stroke="#6366f1" strokeWidth="0.05" />
                  <path d="M 0.4 2.5 Q 0.4 2.5 0.4 2.5" stroke="#6366f1" strokeWidth="0.05" strokeDasharray="0.1 0.1" />
                </>
              ) : (
                <>
                  <path d="M -1 0 A 1 1 0 0 1 1 0" fill="none" stroke="#10b981" strokeWidth="0.1" strokeLinecap="round" />
                  <circle cx="0" cy="0" r="1" fill="rgba(16, 185, 129, 0.05)" />
                </>
              )}
           </svg>

           {/* Topo Labels */}
           <div className="absolute top-6 left-6 flex flex-col gap-2">
              <div className="bg-slate-900/80 backdrop-blur-md px-3 py-1.5 rounded-xl border border-slate-700 flex items-center gap-2">
                 <Search className="w-3 h-3 text-indigo-400" />
                 <span className="text-[10px] font-bold uppercase tracking-widest">
                   {activeSet === 'A1' ? t('td1.viz.r2_topo.open') : t('td1.viz.r2_topo.closed')}
                 </span>
              </div>
              <div className="bg-slate-900/80 backdrop-blur-md px-3 py-1.5 rounded-xl border border-slate-700 flex items-center gap-2">
                 <Maximize className="w-3 h-3 text-indigo-400" />
                 <span className="text-[10px] font-bold uppercase tracking-widest">
                   {activeSet === 'A1' ? t('td1.viz.r2_topo.unbounded') : t('td1.viz.r2_topo.bounded')}
                 </span>
              </div>
           </div>
        </div>

        <div className="bg-slate-800/30 rounded-3xl p-6 border border-slate-800 grid md:grid-cols-2 gap-8">
           <div>
              <p className="text-[10px] font-black text-indigo-400 uppercase tracking-widest mb-2">{t('td1.viz.r2_topo.analysis_title')}</p>
              <p className="text-xs text-slate-400 leading-relaxed">
                {activeSet === 'A1' ? t('td1.viz.r2_topo.analysis_a1') : t('td1.viz.r2_topo.analysis_a2')}
              </p>
           </div>
           <div>
              <p className="text-[10px] font-black text-emerald-400 uppercase tracking-widest mb-2">{t('td1.viz.r2_topo.verdict_title')}</p>
              <p className="text-xs text-slate-400 leading-relaxed">
                {activeSet === 'A1' ? t('td1.viz.r2_topo.verdict_a1') : t('td1.viz.r2_topo.verdict_a2')}
              </p>
           </div>
        </div>
      </div>
    </div>
  );
};

export default R2TopologyVisualizer;
