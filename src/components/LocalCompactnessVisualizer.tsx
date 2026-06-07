import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MousePointer2, CheckCircle2, XCircle } from 'lucide-react';

type Space = 'R' | 'Q';

const LocalCompactnessVisualizer: React.FC = () => {
  const [space, setSpace] = useState<Space>('R');
  const [point, setPoint] = useState<number | null>(null);

  return (
    <section className="bg-slate-50 py-24 px-6 overflow-hidden">
      <div className="mx-auto max-w-5xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-4 tracking-tight text-center">Interactive: Locally Compact Test</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Click on the number line to test if a point has a compact neighborhood.
          </p>
        </div>

        <div className="bg-white rounded-[3rem] p-10 shadow-sm border border-slate-200">
           <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
              
              <div className="lg:col-span-1 space-y-8">
                 <div>
                    <label className="text-xs font-bold text-slate-400 uppercase tracking-widest block mb-4">Choose Space</label>
                    <div className="grid grid-cols-2 gap-2">
                       {(['R', 'Q'] as const).map(s => (
                         <button 
                          key={s} onClick={() => { setSpace(s); setPoint(null); }}
                          className={`py-3 rounded-xl font-bold text-sm transition-all ${space === s ? 'bg-indigo-600 text-white shadow-lg' : 'bg-slate-50 text-slate-500'}`}
                         >
                           {s === 'R' ? 'Space: \u211D' : 'Space: \u211A'}
                         </button>
                       ))}
                    </div>
                 </div>

                 <div className="p-6 bg-slate-900 rounded-[2rem] text-white space-y-4">
                    <h5 className="text-[10px] font-bold text-indigo-400 uppercase tracking-widest">Logic Panel</h5>
                    <p className="text-xs text-slate-400 leading-relaxed italic">
                       {space === 'R' 
                        ? "In \u211D, every point sits inside a closed interval [a,b]. These intervals are compact by Borel-Lebesgue."
                        : "In \u211A, intervals like [0, 1] are NOT compact because irrationals leave infinite 'pinholes' in the set."}
                    </p>
                 </div>

                 <div className="flex items-center gap-2 text-xs font-bold text-slate-400 bg-slate-50 p-4 rounded-xl border border-slate-100 italic">
                    <MousePointer2 className="w-4 h-4 shrink-0" />
                    Click anywhere on the line!
                 </div>
              </div>

              <div className="lg:col-span-2 space-y-12">
                 <div className="bg-slate-900 rounded-[3rem] p-12 h-48 relative flex items-center shadow-2xl overflow-hidden">
                    {/* Click Overlay */}
                    <div 
                      className="absolute inset-0 z-10 cursor-crosshair"
                      onClick={(e) => {
                        const rect = e.currentTarget.getBoundingClientRect();
                        // Padding is p-12 = 48px. We want to be relative to the content box.
                        const x = ((e.clientX - rect.left - 48) / (rect.width - 96)) * 100;
                        setPoint(Math.max(0, Math.min(100, x)));
                      }}
                    />

                    {/* Axis */}
                    <div className="relative h-px bg-slate-700 w-full z-0">
                       {/* Set Visual Style */}
                       {space === 'Q' && (
                         <div className="absolute inset-0 flex justify-between px-0 pointer-events-none opacity-20">
                            {Array.from({ length: 40 }).map((_, i) => (
                               <div key={i} className="w-1 h-px bg-white" />
                            ))}
                         </div>
                       )}

                       {/* Ticks */}
                       {[10, 25, 50, 75, 90].map(v => (
                         <div key={v} className="absolute h-4 w-px bg-slate-700 -translate-y-1.5" style={{ left: `${v}%` }} />
                       ))}

                       {/* The Neighborhood */}
                       <AnimatePresence>
                          {point !== null && (
                            <motion.div
                              initial={{ scale: 0, opacity: 0 }}
                              animate={{ scale: 1, opacity: 1 }}
                              className="absolute top-0 h-12 -translate-y-1/2 flex items-center justify-center"
                              style={{ left: `${point - 15}%`, width: '30%' }}
                            >
                               <div className={`w-full h-4 border-2 rounded-lg ${space === 'R' ? 'border-emerald-500 bg-emerald-500/10' : 'border-dashed border-red-500 bg-red-500/5 shadow-[0_0_10px_rgba(239,68,68,0.2)]'}`} />
                               
                               {/* Hole Indicators for Q */}
                               {space === 'Q' && (
                                 <div className="absolute inset-0 flex justify-around items-center px-4">
                                    {[1, 2, 3].map(i => (
                                      <div key={i} className="w-1 h-1 bg-slate-900 rounded-full border border-red-500" />
                                    ))}
                                 </div>
                               )}
                            </motion.div>
                          )}
                       </AnimatePresence>

                       {/* Point Marker */}
                       <AnimatePresence>
                          {point !== null && (
                            <motion.div 
                              initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }}
                              className="absolute top-0 w-2 h-2 bg-white rounded-full shadow-[0_0_10px_white] -translate-x-1/2 -translate-y-1/2"
                              style={{ left: `${point}%` }}
                            />
                          )}
                       </AnimatePresence>
                    </div>
                 </div>

                 <AnimatePresence mode="wait">
                    {point !== null && (
                      <motion.div
                        key={space}
                        initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
                        className={`p-8 rounded-[2.5rem] border ${space === 'R' ? 'bg-emerald-50 border-emerald-100 text-emerald-900' : 'bg-red-50 border-red-100 text-red-900'}`}
                      >
                         <div className="flex gap-4">
                            {space === 'R' ? <CheckCircle2 className="w-6 h-6 shrink-0" /> : <XCircle className="w-6 h-6 shrink-0" />}
                            <div>
                               <h4 className="font-bold text-sm mb-2 uppercase tracking-widest">
                                 {space === 'R' ? 'Verdict: Success' : 'Verdict: Failed'}
                               </h4>
                               <p className="text-xs leading-relaxed opacity-80">
                                 {space === 'R' 
                                  ? "Success. The closed interval is a compact neighborhood in \u211D. Every real number has breathing room that stays within the space."
                                  : "Failed. Any closed interval of fractions contains 'holes' where irrationals like √2 should be. Sequences can escape ℚ through these holes, so no neighborhood is compact."}
                               </p>
                            </div>
                         </div>
                      </motion.div>
                    )}
                 </AnimatePresence>
              </div>
           </div>
        </div>
      </div>
    </section>
  );
};

export default LocalCompactnessVisualizer;
