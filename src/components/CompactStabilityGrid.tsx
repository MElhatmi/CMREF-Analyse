import React from 'react';
import { InlineMath } from './Math';
import { Proposition, Theorem, Remark } from './MathBlocks';
import { ShieldCheck, Box, Zap } from 'lucide-react';

const CompactStabilityGrid: React.FC = () => {
  return (
    <section className="bg-slate-50 py-24 px-6 overflow-hidden">
      <div className="mx-auto max-w-7xl">
        <h2 className="text-3xl font-bold text-slate-900 mb-16 text-center">Stability & Structural Rules</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Prop 10 */}
          <div className="bg-white rounded-[3rem] p-10 shadow-sm border border-slate-200">
             <Proposition title="Proposition 10: Finite Intersection Property">
               A separated space <InlineMath math="E" /> is compact if and only if, for any family of closed sets in <InlineMath math="E" /> with an empty intersection, there exists a finite sub-family that also has an empty intersection.
             </Proposition>
             <p className="mt-4 text-xs text-slate-500 italic">This is the "dual" definition of compactness using closed sets instead of open covers.</p>
          </div>

          {/* Prop 11 */}
          <div className="bg-white rounded-[3rem] p-10 shadow-sm border border-slate-200">
             <Proposition title="Proposition 11: Compact implies Closed">
               Let <InlineMath math="E" /> be a separated space. If <InlineMath math="A" /> is a compact subset of <InlineMath math="E" />, then <InlineMath math="A" /> is strictly <strong>closed</strong> in <InlineMath math="E" />.
             </Proposition>
             <div className="mt-6 flex items-center gap-3 bg-blue-50 p-4 rounded-2xl border border-blue-100">
                <ShieldCheck className="w-5 h-5 text-blue-500" />
                <p className="text-[10px] text-blue-700 font-bold uppercase tracking-tight">Compactness is stronger than Closedness</p>
             </div>
          </div>

          {/* Prop 12 */}
          <div className="bg-white rounded-[3rem] p-10 shadow-sm border border-slate-200">
             <Proposition title="Proposition 12: Closed implies Compact">
               If the parent space <InlineMath math="E" /> is compact, then every closed subset <InlineMath math="F" /> of <InlineMath math="E" /> is strictly <strong>compact</strong>.
             </Proposition>
             <div className="mt-6 p-4 bg-slate-50 rounded-2xl border border-slate-100 italic text-[10px] text-slate-500">
                In a compact universe, being closed is enough to guarantee compactness.
             </div>
          </div>

          {/* Prop 13 */}
          <div className="bg-white rounded-[3rem] p-10 shadow-sm border border-slate-200">
             <Proposition title="Proposition 13: Unions and Intersections">
               <ol className="list-decimal pl-5 space-y-2">
                  <li>A finite union of compact subsets is compact.</li>
                  <li>An arbitrary (non-empty) intersection of compact subsets is compact.</li>
               </ol>
             </Proposition>
          </div>
        </div>

        {/* Tychonoff Theorem */}
        <div className="mt-12 bg-slate-900 rounded-[4rem] p-12 text-white relative overflow-hidden shadow-2xl">
           <div className="absolute top-0 right-0 p-8 opacity-10">
              <Box className="w-64 h-64 text-blue-400" />
           </div>
           <div className="relative z-10">
              <Theorem title="Theorem 1: Tychonoff's Theorem">
                An arbitrary product of compact spaces, equipped with the product topology, is compact.
              </Theorem>
              <div className="h-px bg-white/10 w-full my-8" />
              <Remark title="Remark 5: Closed Products">
                Similarly, an arbitrary product of closed sets, equipped with the product topology, is closed.
              </Remark>
              <div className="mt-8 flex items-center gap-3 text-blue-400 font-mono text-[10px] uppercase tracking-widest">
                 <Zap className="w-4 h-4 animate-pulse" />
                 One of the most fundamental results in all of Topology.
              </div>
           </div>
        </div>
      </div>
    </section>
  );
};

export default CompactStabilityGrid;
