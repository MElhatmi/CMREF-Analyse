import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Target, AlertTriangle } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

type DomainType = 'open' | 'compact';

const MetricExtremaVisualizer: React.FC = () => {
  const { t } = useLanguage();
  const [domain, setDomain] = useState<DomainType>('open');

  // f(x) = 1/x
  const getX = (val: number) => 40 + (val * 160); // 0..2 maps to 40..360
  const getY = (val: number) => 260 - (val * 40); // 0..6 maps to 260..20

  const generatePath = (start: number) => {
    const points = [];
    for (let x = start; x <= 2.01; x += 0.05) {
      const y = 1 / x;
      points.push(`${getX(x)},${getY(y)}`);
    }
    return points.join(' ');
  };

  const domainInterval = domain === 'open' ? ']0, 2]' : '[0.2, 2]';

  return (
    <section className="bg-slate-50 py-24 px-6 overflow-hidden">
      <div className="mx-auto max-w-5xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-4 tracking-tight">{t('metrics.compact2.viz.title')}</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            {t('metrics.compact2.viz.subtitle')}
          </p>
        </div>

        <div className="bg-white rounded-[3rem] p-10 shadow-sm border border-slate-200 shadow-inner">
           <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
              
              <div className="lg:col-span-1 space-y-8">
                 <div>
                    <label className="text-xs font-bold text-slate-400 uppercase tracking-widest block mb-4">Set Domain A</label>
                    <div className="flex flex-col gap-2">
                       <button 
                         onClick={() => setDomain('open')}
                         className={`py-4 rounded-2xl font-bold transition-all border-2 flex items-center justify-center gap-2 ${domain === 'open' ? 'bg-red-600 text-white border-red-600 shadow-lg shadow-red-100' : 'bg-white text-slate-500 border-slate-100'}`}
                       >
                         Open Interval ]0, 2]
                       </button>
                       <button 
                         onClick={() => setDomain('compact')}
                         className={`py-4 rounded-2xl font-bold transition-all border-2 flex items-center justify-center gap-2 ${domain === 'compact' ? 'bg-emerald-600 text-white border-emerald-600 shadow-lg shadow-emerald-100' : 'bg-white text-slate-500 border-slate-100'}`}
                       >
                         Compact Interval [0.2, 2]
                       </button>
                    </div>
                 </div>

                 <div className={`p-6 rounded-[2rem] border transition-all ${domain === 'open' ? 'bg-red-50 border-red-100' : 'bg-emerald-50 border-emerald-100'}`}>
                    <div className="flex gap-4">
                       {domain === 'open' ? <AlertTriangle className="w-6 h-6 text-red-500 shrink-0" /> : <Target className="w-6 h-6 text-emerald-600 shrink-0" />}
                       <div>
                          <h5 className={`font-bold text-xs uppercase tracking-widest mb-1 ${domain === 'open' ? 'text-red-900' : 'text-emerald-900'}`}>
                             {domain === 'open' ? "No Maximum Found" : "Bounds Achieved"}
                          </h5>
                          <p className="text-[10px] leading-relaxed opacity-80 italic">
                             {domain === 'open' 
                               ? "The interval is missing its boundary at 0. As x \u2192 0, f(x) explodes to infinity. It never hits a maximum value." 
                               : "The domain is closed and bounded. The function is forced to have a maximum (5) and a minimum (0.5)."}
                          </p>
                       </div>
                    </div>
                 </div>
                 
                 <div className="bg-slate-900 rounded-[2.5rem] p-8 text-white">
                    <h5 className="text-[10px] font-bold text-blue-400 uppercase tracking-widest mb-4 italic">Mathematical Logic</h5>
                    <div className="space-y-4">
                       <div className="flex justify-between items-center text-xs">
                          <span>Domain A:</span>
                          <span className={`font-bold ${domain === 'open' ? 'text-red-400' : 'text-emerald-400'}`}>{domainInterval}</span>
                       </div>
                       <div className="flex justify-between items-center text-xs">
                          <span>Status:</span>
                          <span className="uppercase text-[10px] opacity-60">{domain === 'open' ? 'Not Compact' : 'Compact'}</span>
                       </div>
                    </div>
                 </div>
              </div>

              <div className="lg:col-span-2 flex justify-center">
                 <div className="w-full max-w-lg aspect-[16/12] bg-slate-900 rounded-[3rem] border border-slate-800 shadow-2xl relative overflow-hidden flex flex-col justify-center">
                    <svg viewBox="0 0 400 300" className="w-full h-full">
                       {/* Grid */}
                       <defs>
                          <pattern id="extrema-grid" width="40" height="40" patternUnits="userSpaceOnUse">
                             <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#1e293b" strokeWidth="0.5"/>
                          </pattern>
                       </defs>
                       <rect width="100%" height="100%" fill="url(#extrema-grid)" />
                       
                       {/* Axes */}
                       <line x1="40" y1="260" x2="380" y2="260" stroke="#475569" strokeWidth="1" />
                       <line x1="40" y1="20" x2="40" y2="280" stroke="#475569" strokeWidth="1" />

                       {/* The Curve */}
                       <AnimatePresence mode="wait">
                          <motion.path 
                            key={domain}
                            initial={{ pathLength: 0, opacity: 0 }}
                            animate={{ pathLength: 1, opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 1 }}
                            d={`M ${generatePath(domain === 'open' ? 0.15 : 0.2)}`}
                            fill="none" stroke={domain === 'open' ? "#ef4444" : "#10b981"} strokeWidth="3"
                          />
                       </AnimatePresence>

                       {/* Exploding Arrow in Open Mode */}
                       {domain === 'open' && (
                          <motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                             <path d="M 64 80 L 64 30" stroke="#ef4444" strokeWidth="2" markerEnd="url(#arrowhead)" />
                             <text x="70" y="50" className="text-[10px] font-bold fill-red-500 uppercase tracking-tighter">Explodes \u2192 \u221E</text>
                          </motion.g>
                       )}

                       {/* Min/Max indicators in Compact Mode */}
                       {domain === 'compact' && (
                          <motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                             {/* Max */}
                             <circle cx={getX(0.2)} cy={getY(5)} r="5" fill="#10b981" className="shadow-[0_0_10px_#10b981]" />
                             <text x={getX(0.2) + 10} y={getY(5)} className="text-[10px] font-bold fill-emerald-400">MAX = 5</text>
                             
                             {/* Min */}
                             <circle cx={getX(2)} cy={getY(0.5)} r="5" fill="#3b82f6" className="shadow-[0_0_10px_#3b82f6]" />
                             <text x={getX(2) - 50} y={getY(0.5) + 15} className="text-[10px] font-bold fill-blue-400">MIN = 0.5</text>
                          </motion.g>
                       )}

                       <defs>
                          <marker id="arrowhead" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="4" markerHeight="4" orient="auto">
                             <path d="M 0 0 L 10 5 L 0 10 z" fill="#ef4444" />
                          </marker>
                       </defs>

                       <text x="350" y="280" className="text-[10px] font-bold fill-slate-500 font-mono italic">x</text>
                       <text x="20" y="40" className="text-[10px] font-bold fill-slate-500 font-mono italic">f(x)=1/x</text>
                    </svg>
                 </div>
              </div>
           </div>
        </div>
      </div>
    </section>
  );
};

export default MetricExtremaVisualizer;
