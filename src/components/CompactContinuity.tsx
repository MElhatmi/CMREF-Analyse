import React from 'react';
import { InlineMath } from './Math';
import { Theorem } from './MathBlocks';
import { Sparkles, ArrowRight, Maximize2 } from 'lucide-react';

const CompactContinuity: React.FC = () => {
  return (
    <section className="bg-white py-24 px-6 overflow-hidden">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-3xl font-bold text-slate-900 mb-12 tracking-tight border-b border-slate-100 pb-4">
          3.2 Properties of Continuous Functions on a Compact
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
           <div className="space-y-8">
              <Theorem title="Theorem 2: Continuous Image">
                Let <InlineMath math="(E, \mathcal{T}_E)" /> be a compact space and <InlineMath math="(F, \mathcal{T}_F)" /> a separated space. For any continuous function <InlineMath math="f: E \to F" />, the direct image <InlineMath math="f(E)" /> is compact in <InlineMath math="F" />.
              </Theorem>

              <div className="bg-slate-50 p-8 rounded-[2.5rem] border border-slate-100 shadow-inner">
                 <h4 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-4 flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-blue-500" /> Intuition
                 </h4>
                 <p className="text-slate-600 text-sm leading-relaxed italic">
                    A continuous function is like a smooth stretching of a material. If you start with a "contained" compact space, no matter how much you stretch or bend it (without tearing), it will remain "contained" and closed in the target space.
                 </p>
              </div>
           </div>

           <div className="bg-indigo-600 rounded-[3rem] p-10 text-white relative overflow-hidden shadow-2xl">
              <div className="absolute top-0 right-0 p-8 opacity-10">
                 <Maximize2 className="w-32 h-32" />
              </div>
              <div className="relative z-10">
                 <h3 className="text-2xl font-bold mb-8">The Fundamental Consequence</h3>
                 <div className="space-y-6">
                    <div className="bg-white/10 p-6 rounded-2xl border border-white/20">
                       <h5 className="font-bold text-blue-300 text-sm mb-2 uppercase tracking-tighter">Extreme Value Theorem</h5>
                       <p className="text-sm text-indigo-50 leading-relaxed">
                          If <InlineMath math="f: E \to \mathbb{R}" /> is a continuous function on a compact space <InlineMath math="E" />, then its image <InlineMath math="f(E)" /> is a compact subset of <InlineMath math="\mathbb{R}" />.
                       </p>
                    </div>
                    
                    <div className="flex items-center justify-center p-4">
                       <ArrowRight className="text-blue-400 animate-pulse" />
                    </div>

                    <div className="bg-white/10 p-6 rounded-2xl border border-white/20 italic">
                       <p className="text-sm text-indigo-50">
                          By the Borel-Lebesgue theorem in R, <InlineMath math="f(E)" /> must be <strong>closed and bounded</strong>. Therefore, the function is guaranteed to attain its global maximum and global minimum.
                       </p>
                    </div>
                 </div>
              </div>
           </div>
        </div>
      </div>
    </section>
  );
};

export default CompactContinuity;
