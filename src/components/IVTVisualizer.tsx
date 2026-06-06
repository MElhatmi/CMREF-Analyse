import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Scissors, Info } from 'lucide-react';

const IVTVisualizer: React.FC = () => {
  const [isContinuous, setIsContinuous] = useState(true);

  return (
    <section className="bg-white py-24 px-6 overflow-hidden">
      <div className="mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-4 tracking-tight">Interactive: IVT & The Fabric of Spaces</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Observe how a continuous function maps a connected domain to a connected range, while a jump discontinuity shatters it.
          </p>
        </div>

        <div className="bg-slate-50 rounded-[3rem] p-10 border border-slate-100 shadow-inner">
           <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
              
              <div className="lg:col-span-1 space-y-8">
                 <div>
                    <label className="text-xs font-bold text-slate-400 uppercase tracking-widest block mb-4">Toggle Function Type</label>
                    <div className="flex flex-col gap-2">
                       <button 
                        onClick={() => setIsContinuous(true)}
                        className={`py-4 rounded-2xl font-bold text-sm transition-all border-2 flex items-center justify-center gap-3 ${isContinuous ? 'bg-indigo-600 text-white border-indigo-600 shadow-xl shadow-indigo-100' : 'bg-white text-slate-500 border-slate-100 hover:border-indigo-200'}`}
                       >
                         <Sparkles className="w-5 h-5" /> Continuous (f(x) = x²)
                       </button>
                       <button 
                        onClick={() => setIsContinuous(false)}
                        className={`py-4 rounded-2xl font-bold text-sm transition-all border-2 flex items-center justify-center gap-3 ${!isContinuous ? 'bg-red-600 text-white border-red-600 shadow-xl shadow-red-100' : 'bg-white text-slate-500 border-slate-100 hover:border-red-200'}`}
                       >
                         <Scissors className="w-5 h-5" /> Discontinuous (Jump)
                       </button>
                    </div>
                 </div>

                 <div className={`p-6 rounded-[2rem] border transition-all ${isContinuous ? 'bg-indigo-50 border-indigo-100 text-indigo-900' : 'bg-red-50 border-red-100 text-red-900'}`}>
                    <div className="flex gap-4 items-start">
                       <Info className="w-6 h-6 shrink-0 opacity-60" />
                       <p className="text-[11px] leading-relaxed italic">
                          {isContinuous 
                           ? "Because the function is continuous, the connected domain [1, 4] maps perfectly to a connected interval on the Y-axis. No values are skipped."
                           : "The discontinuity acts like scissors, tearing the connected domain. The resulting image on the Y-axis is no longer an interval; it is disconnected."}
                       </p>
                    </div>
                 </div>
              </div>

              <div className="lg:col-span-2 flex justify-center">
                 <div className="w-full max-w-lg aspect-square bg-white rounded-[4rem] border border-slate-100 shadow-2xl relative overflow-hidden p-8">
                    <svg viewBox="0 0 400 400" className="w-full h-full">
                       {/* Grid */}
                       <defs>
                          <pattern id="ivt-grid" width="40" height="40" patternUnits="userSpaceOnUse">
                             <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#f1f5f9" strokeWidth="1"/>
                          </pattern>
                       </defs>
                       <rect width="100%" height="100%" fill="url(#ivt-grid)" />

                       {/* Axes */}
                       <line x1="40" y1="360" x2="360" y2="360" stroke="#94a3b8" strokeWidth="2" />
                       <line x1="40" y1="40" x2="40" y2="360" stroke="#94a3b8" strokeWidth="2" />

                       {/* X-Interval: Domain [1, 4] (mapped to px) */}
                       <rect x="80" y="358" width="160" height="4" fill="#6366f1" rx="2" />
                       <text x="80" y="380" className="text-[10px] font-bold fill-indigo-500 uppercase">Domain [1, 4]</text>

                       {/* Graph plotting */}
                       <AnimatePresence mode="wait">
                          {isContinuous ? (
                             <motion.path 
                                key="cont"
                                initial={{ pathLength: 0, opacity: 0 }}
                                animate={{ pathLength: 1, opacity: 1 }}
                                d="M 80 320 Q 160 200 240 80"
                                fill="none" stroke="#6366f1" strokeWidth="3"
                             />
                          ) : (
                             <motion.g key="disc" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                                <line x1="80" y1="320" x2="160" y2="280" stroke="#ef4444" strokeWidth="3" />
                                <line x1="160" y1="120" x2="240" y2="80" stroke="#ef4444" strokeWidth="3" />
                                <circle cx="160" cy="280" r="4" fill="white" stroke="#ef4444" strokeWidth="2" />
                                <circle cx="160" cy="120" r="4" fill="#ef4444" />
                             </motion.g>
                          )}
                       </AnimatePresence>

                       {/* Projections to Y-Axis */}
                       <AnimatePresence>
                          {isContinuous ? (
                             <motion.rect 
                                key="proj-cont" initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 240 }}
                                x="38" y="80" width="4" fill="#10b981" rx="2"
                             />
                          ) : (
                             <motion.g key="proj-disc" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                                <rect x="38" y="280" width="4" height="40" fill="#ef4444" rx="2" />
                                <rect x="38" y="80" width="4" height="40" fill="#ef4444" rx="2" />
                                <text x="10" y="200" className="text-[8px] font-bold fill-red-500 uppercase [writing-mode:vertical-lr] rotate-180">Disconnected Image</text>
                             </motion.g>
                          )}
                       </AnimatePresence>

                       <text x="50" y="60" className="text-[10px] font-bold fill-emerald-600 uppercase tracking-widest">Image f(I)</text>
                    </svg>
                 </div>
              </div>
           </div>
        </div>
      </div>
    </section>
  );
};

export default IVTVisualizer;
