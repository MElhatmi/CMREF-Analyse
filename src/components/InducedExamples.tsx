import React from 'react';
import { InlineMath } from './Math';
import { Sparkles, ShieldAlert, Zap } from 'lucide-react';

const InducedExamples: React.FC = () => {
  return (
    <section className="bg-slate-50 py-24 px-6">
      <div className="mx-auto max-w-7xl">
        <h2 className="text-3xl font-bold text-slate-900 mb-16 text-center">Case Studies in Relative Topology</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Card 1: Open Anomaly */}
          <div className="bg-white rounded-[3rem] p-10 border border-slate-200 shadow-sm flex flex-col hover:shadow-md transition-shadow">
            <div className="h-12 w-12 bg-blue-100 rounded-2xl flex items-center justify-center text-blue-600 mb-8">
              <Sparkles className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-4 tracking-tight">Open in A, but NOT in E</h3>
            <p className="text-sm text-slate-600 leading-relaxed mb-6">
              Let <InlineMath math="A = [0, +\infty[" />. Consider the set <InlineMath math="O' = [0, 5[" />.
            </p>
            <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100 mb-8 text-xs italic text-slate-500">
               "Even though it's half-open in R, it's perfectly open in A."
            </div>
            <div className="mt-auto pt-6 border-t border-slate-100">
               <p className="text-[10px] font-bold text-blue-500 uppercase mb-3">Mathematical Proof:</p>
               <div className="text-[10px] font-mono text-slate-600 space-y-2">
                 <p><InlineMath math="]-1, 5[" /> is open in <InlineMath math="\mathbb{R}" />.</p>
                 <p><InlineMath math="[0, 5[ = ]-1, 5[ \cap A" />.</p>
                 <p className="font-bold text-emerald-600">Conclusion: O' is open in A.</p>
               </div>
            </div>
          </div>

          {/* Card 2: Closed Anomaly */}
          <div className="bg-white rounded-[3rem] p-10 border border-slate-200 shadow-sm flex flex-col hover:shadow-md transition-shadow">
            <div className="h-12 w-12 bg-indigo-100 rounded-2xl flex items-center justify-center text-indigo-600 mb-8">
              <ShieldAlert className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-4 tracking-tight">Closed in A, but NOT in E</h3>
            <p className="text-sm text-slate-600 leading-relaxed mb-6">
              Let <InlineMath math="A = ]0, 10[" />. Consider the set <InlineMath math="F' = ]0, 5]" />.
            </p>
            <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100 mb-8 text-xs italic text-slate-500">
               "Relative to A, the missing point 0 doesn't prevent closedness."
            </div>
            <div className="mt-auto pt-6 border-t border-slate-100">
               <p className="text-[10px] font-bold text-indigo-500 uppercase mb-3">Mathematical Proof:</p>
               <div className="text-[10px] font-mono text-slate-600 space-y-2">
                 <p><InlineMath math="[-5, 5]" /> is closed in <InlineMath math="\mathbb{R}" />.</p>
                 <p><InlineMath math="]0, 5] = [-5, 5] \cap A" />.</p>
                 <p className="font-bold text-emerald-600">Conclusion: F' is closed in A.</p>
               </div>
            </div>
          </div>

          {/* Card 3: Global Property Transfer */}
          <div className="bg-slate-900 rounded-[3rem] p-10 text-white flex flex-col shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 p-6 opacity-10">
               <Zap className="w-24 h-24" />
            </div>
            <h3 className="text-xl font-bold mb-8 tracking-tight">The Transfer Rule</h3>
            <p className="text-sm text-slate-400 leading-relaxed mb-10">
              When is a property "absolute"? Only when the subspace itself is well-behaved within the parent.
            </p>
            
            <div className="space-y-6">
               <div className="p-5 bg-white/5 rounded-2xl border border-white/10">
                  <p className="font-bold text-sm text-blue-400 mb-2 underline decoration-blue-500 underline-offset-4 tracking-tighter">Theorem: Openness</p>
                  <p className="text-xs text-slate-300">If <InlineMath math="U" /> is open in <InlineMath math="A" /> AND <InlineMath math="A" /> is open in <InlineMath math="E" />, then <InlineMath math="U" /> is open in <InlineMath math="E" />.</p>
               </div>
               <div className="p-5 bg-white/5 rounded-2xl border border-white/10">
                  <p className="font-bold text-sm text-indigo-400 mb-2 underline decoration-indigo-500 underline-offset-4 tracking-tighter">Theorem: Closedness</p>
                  <p className="text-xs text-slate-300">If <InlineMath math="F" /> is closed in <InlineMath math="A" /> AND <InlineMath math="A" /> is closed in <InlineMath math="E" />, then <InlineMath math="F" /> is closed in <InlineMath math="E" />.</p>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InducedExamples;
