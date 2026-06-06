import React from 'react';
import { Proposition, Remark } from './MathBlocks';
import { AlertTriangle, ShieldCheck, Zap } from 'lucide-react';

const PathRelations: React.FC = () => {
  return (
    <section className="bg-slate-50 py-24 px-6 overflow-hidden">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-3xl font-bold text-slate-900 mb-16 text-center">Relationship & Exceptions</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Prop 20 */}
          <div className="bg-white rounded-[3rem] p-10 shadow-sm border border-slate-200 relative overflow-hidden">
             <div className="absolute top-0 right-0 p-6 opacity-5">
                <ShieldCheck className="w-24 h-24 text-emerald-600" />
             </div>
             <Proposition title="Proposition 20: The Hierarchy">
                Every path-connected space is necessarily connected.
             </Proposition>
             <p className="mt-6 text-sm text-slate-600 leading-relaxed">
                If you can draw a path between any two points, it's impossible to partition the space into two disjoint open sets. The path "holds" the pieces together.
             </p>
             <div className="mt-8 pt-8 border-t border-slate-100 flex items-center gap-2 text-[10px] font-bold text-emerald-600 uppercase tracking-widest">
                <Zap className="w-4 h-4" /> Path-Connected &rArr; Connected
             </div>
          </div>

          {/* Remark 8 */}
          <div className="bg-white rounded-[3rem] p-10 shadow-sm border border-amber-100 relative overflow-hidden border-2">
             <div className="absolute top-0 right-0 p-6 opacity-10">
                <AlertTriangle className="w-24 h-24 text-amber-500" />
             </div>
             <Remark title="Remark 8: The Converse Exception">
                The converse is <strong>FALSE</strong>! A space can be connected mathematically, but NOT path-connected.
             </Remark>
             <p className="mt-6 text-sm text-slate-600 leading-relaxed">
                These are often highly pathological spaces where points are "close enough" to never be separated, but the route between them is "too complex" to traverse continuously.
             </p>
          </div>
        </div>

        <div className="mt-12">
           <Proposition title="Proposition 21: Finite Products">
              A finite product of path-connected spaces is path-connected.
           </Proposition>
        </div>
      </div>
    </section>
  );
};

export default PathRelations;
