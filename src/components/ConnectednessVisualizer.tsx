import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Scissors, RefreshCcw } from 'lucide-react';

const ConnectednessVisualizer: React.FC = () => {
  const [state, setState] = useState<'initial' | 'continuous' | 'discontinuous'>('initial');

  return (
    <section className="bg-white py-24 px-6 overflow-hidden">
      <div className="mx-auto max-w-5xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-4 tracking-tight">Interactive: The Continuous Rubber Band</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Visualizing how functions preserve or destroy connectedness.
          </p>
        </div>

        <div className="bg-slate-50 rounded-[3rem] p-10 border border-slate-100 shadow-inner">
           <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
              
              <div className="lg:col-span-1 space-y-6">
                 <button 
                  onClick={() => setState('continuous')}
                  className={`w-full flex items-center justify-center gap-3 py-4 rounded-2xl font-bold transition-all shadow-lg ${state === 'continuous' ? 'bg-indigo-600 text-white shadow-indigo-200' : 'bg-white text-slate-600 border border-slate-200'}`}
                 >
                    <Sparkles className="w-5 h-5" /> Apply Continuous
                 </button>
                 <button 
                  onClick={() => setState('discontinuous')}
                  className={`w-full flex items-center justify-center gap-3 py-4 rounded-2xl font-bold transition-all shadow-lg ${state === 'discontinuous' ? 'bg-red-600 text-white shadow-red-200' : 'bg-white text-slate-600 border border-slate-200'}`}
                 >
                    <Scissors className="w-5 h-5" /> Apply Discontinuous
                 </button>
                 <button 
                  onClick={() => setState('initial')}
                  className="w-full flex items-center justify-center gap-2 py-3 text-slate-400 font-bold uppercase text-[10px] tracking-widest hover:text-slate-600 transition-colors"
                 >
                    <RefreshCcw className="w-3 h-3" /> Reset View
                 </button>
              </div>

              <div className="lg:col-span-2 flex justify-center">
                 <div className="w-full max-w-lg aspect-square bg-slate-900 rounded-[4rem] border border-white/5 shadow-2xl relative overflow-hidden flex items-center justify-center p-12">
                    <div className="grid grid-cols-2 w-full gap-8 relative z-10">
                       {/* Left: Domain E */}
                       <div className="flex flex-col items-center gap-4">
                          <p className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.2em]">Domain E</p>
                          <div className="w-32 h-32 bg-white/5 rounded-3xl border border-white/10 flex items-center justify-center relative">
                             <motion.div 
                                animate={{ 
                                  scale: state === 'discontinuous' ? 0.8 : 1,
                                  rotate: state === 'continuous' ? 45 : 0
                                }}
                                className="w-16 h-16 bg-indigo-500 rounded-xl shadow-[0_0_20px_rgba(99,102,241,0.5)]"
                             />
                          </div>
                       </div>

                       {/* Right: Target F */}
                       <div className="flex flex-col items-center gap-4">
                          <p className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.2em]">Image f(E)</p>
                          <div className="w-32 h-32 bg-white/5 rounded-3xl border border-white/10 flex items-center justify-center relative">
                             <AnimatePresence mode="wait">
                                {state === 'initial' && (
                                   <motion.div key="ini" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="text-slate-700 font-bold italic tracking-tighter text-sm">Waiting...</motion.div>
                                )}
                                {state === 'continuous' && (
                                   <motion.div 
                                      key="cont" initial={{ scale: 0, borderRadius: '100%' }} animate={{ scale: 1, borderRadius: '40% 60% 70% 30% / 40% 50% 60% 40%' }}
                                      className="w-24 h-16 bg-blue-400 shadow-[0_0_30px_rgba(96,165,250,0.5)]"
                                   />
                                )}
                                {state === 'discontinuous' && (
                                   <motion.div key="disc" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex gap-4">
                                      <div className="w-8 h-8 bg-red-400 rounded-full" />
                                      <div className="w-8 h-8 bg-red-400 rounded-full translate-y-8" />
                                   </motion.div>
                                )}
                             </AnimatePresence>
                          </div>
                       </div>

                       {/* Middle Arrow */}
                       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center pointer-events-none">
                          <div className="w-12 h-0.5 bg-slate-700" />
                          <div className="w-2 h-2 border-t-2 border-r-2 border-slate-700 rotate-45 -translate-x-1" />
                       </div>
                    </div>

                    {/* Verdict Background Text */}
                    <AnimatePresence>
                       {state !== 'initial' && (
                         <motion.div 
                            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
                            className="absolute bottom-8 left-8 right-8 bg-white/5 backdrop-blur-md p-6 rounded-3xl border border-white/10"
                         >
                            <p className="text-xs text-slate-300 leading-relaxed text-center italic">
                               {state === 'continuous' 
                                ? "A continuous function can stretch and bend the space, but it cannot tear it. The image remains connected."
                                : "A discontinuity tears the space apart, breaking the connectedness into disjoint pieces."}
                            </p>
                         </motion.div>
                       )}
                    </AnimatePresence>
                 </div>
              </div>
           </div>
        </div>
      </div>
    </section>
  );
};

export default ConnectednessVisualizer;
