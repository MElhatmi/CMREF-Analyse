import React from 'react';
import { InlineMath, BlockMath } from './Math';
import { Target, Zap } from 'lucide-react';

const LocalContinuityDef: React.FC = () => {
  return (
    <section className="bg-slate-50 py-24 px-6 overflow-hidden">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2">
            <div className="inline-flex items-center gap-2 bg-indigo-50 px-3 py-1 rounded-full text-indigo-600 font-bold text-xs uppercase tracking-widest mb-6">
              <Target className="w-3 h-3" />
              Local Continuity
            </div>
            <h2 className="text-4xl font-bold text-slate-900 mb-8 tracking-tight">Point-by-Point Analysis</h2>
            <p className="text-slate-600 text-lg leading-relaxed mb-8">
              Instead of looking at the whole space, we can check continuity at a single point using neighborhoods. This is the topological equivalent of the epsilon-delta definition.
            </p>

            <div className="bg-white rounded-[2.5rem] p-10 border border-slate-200 shadow-sm relative">
               <div className="absolute -top-4 -right-4 bg-indigo-600 text-white p-3 rounded-2xl shadow-lg">
                  <Zap className="w-6 h-6" />
               </div>
               <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-6">Definition 13</h3>
               <p className="text-slate-700 leading-relaxed mb-6">
                 A function <InlineMath math="f" /> is <strong>continuous at a point x</strong> if, for every neighborhood <InlineMath math="V" /> of <InlineMath math="f(x)" />, there exists a neighborhood <InlineMath math="U" /> of <InlineMath math="x" /> such that:
               </p>
               <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 flex items-center justify-center">
                  <BlockMath math="f(U) \subset V" />
               </div>
               <p className="mt-8 text-xs text-slate-400 italic border-t border-slate-100 pt-6">
                 <strong>Proposition 9:</strong> A function is globally continuous if and only if it is locally continuous at every point in the domain.
               </p>
            </div>
          </div>

          <div className="lg:w-1/2 w-full">
             <div className="bg-slate-900 rounded-[4rem] p-12 shadow-2xl relative overflow-hidden flex flex-col items-center">
                <div className="absolute inset-0 bg-indigo-500/5 blur-3xl rounded-full" />
                <svg viewBox="0 0 400 300" className="w-full max-w-sm relative z-10">
                   {/* Domain Side */}
                   <g>
                      <path d="M 40 150 Q 60 80 120 100 T 120 200 Q 60 220 40 150" fill="rgba(59, 130, 246, 0.05)" stroke="#3b82f6" strokeWidth="1" strokeDasharray="5 5" />
                      <circle cx="80" cy="150" r="3" fill="#3b82f6" />
                      <text x="75" y="140" className="text-xs fill-blue-400 italic">x</text>
                      
                      {/* Neighborhood U */}
                      <circle cx="80" cy="150" r="30" fill="rgba(59, 130, 246, 0.15)" stroke="#3b82f6" strokeWidth="1" />
                      <text x="65" y="200" className="text-[8px] font-bold fill-blue-500 uppercase">U</text>
                   </g>

                   {/* Target Side */}
                   <g>
                      <path d="M 280 150 Q 300 80 360 100 T 360 200 Q 300 220 280 150" fill="rgba(249, 115, 22, 0.05)" stroke="#f97316" strokeWidth="1" strokeDasharray="5 5" />
                      <circle cx="320" cy="150" r="3" fill="#f97316" />
                      <text x="310" y="140" className="text-xs fill-orange-400 italic">f(x)</text>
                      
                      {/* Neighborhood V */}
                      <circle cx="320" cy="150" r="45" fill="rgba(249, 115, 22, 0.15)" stroke="#f97316" strokeWidth="1" />
                      <text x="310" y="215" className="text-[8px] font-bold fill-orange-500 uppercase">V</text>
                   </g>

                   {/* Mapping Line */}
                   <path d="M 115 150 L 270 150" stroke="#475569" strokeWidth="1" strokeDasharray="4 4" markerEnd="url(#mapping-arrow)" />
                   <defs>
                     <marker id="mapping-arrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="3" markerHeight="3" orient="auto-start-reverse">
                       <path d="M 0 0 L 10 5 L 0 10 z" fill="#475569" />
                     </marker>
                   </defs>
                </svg>
                <div className="mt-8 p-4 bg-white/5 rounded-2xl border border-white/10">
                   <p className="text-[10px] text-slate-400 font-mono text-center">
                     f maps the entire "blue bubble" U inside the "orange bubble" V.
                   </p>
                </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocalContinuityDef;
