import React from 'react';
import { InlineMath, BlockMath } from './Math';
import { Definition, Proposition, Remark } from './MathBlocks';
import { MoveUpRight } from 'lucide-react';

const PathConnectednessSection: React.FC = () => {
  return (
    <section className="bg-white py-24 px-6 overflow-hidden">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-4xl font-bold text-slate-900 mb-12 tracking-tight border-b-2 border-slate-100 pb-4">
          Section 6: Connexité par arcs
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
           <div className="space-y-6">
              <Definition title="The Arc (Path)">
                An <strong>arc</strong> with values in <InlineMath math="E" /> is any continuous application <InlineMath math="\gamma: [0, 1] \to E" />.
              </Definition>

              <Definition title="Path-Connectedness">
                A space <InlineMath math="E" /> is <strong>path-connected</strong> if, for any pair of points <InlineMath math="(x, y)" /> in <InlineMath math="E" />, there exists an arc <InlineMath math="\gamma" /> such that:
                <BlockMath math="\gamma(0) = x \quad \text{and} \quad \gamma(1) = y" />
              </Definition>
           </div>

           <div className="bg-slate-50 rounded-[3rem] p-12 border border-slate-100 flex flex-col items-center justify-center relative overflow-hidden">
              <div className="absolute top-0 right-0 p-8 opacity-5">
                 <MoveUpRight className="w-32 h-32" />
              </div>
              <svg viewBox="0 0 200 150" className="w-full max-w-[240px] drop-shadow-sm">
                 <path d="M 30 120 Q 50 20 100 70 T 170 30" fill="none" stroke="#6366f1" strokeWidth="2" strokeDasharray="4 2" />
                 <circle cx="30" cy="120" r="4" fill="#1e293b" />
                 <text x="20" y="140" className="text-[10px] font-bold fill-slate-900 italic">x</text>
                 <circle cx="170" cy="30" r="4" fill="#1e293b" />
                 <text x="175" y="25" className="text-[10px] font-bold fill-slate-900 italic">y</text>
                 <text x="80" y="45" className="text-[10px] font-bold fill-indigo-500 italic uppercase tracking-widest">&gamma;(t)</text>
              </svg>
              <p className="mt-8 text-xs text-slate-500 text-center italic leading-relaxed">
                "Two points are path-connected if you can travel from one to the other without leaving the space."
              </p>
           </div>
        </div>

        <div className="space-y-4 mt-12">
           <Proposition title="Hierarchy of Connectedness">
             Every path-connected space is connected.
           </Proposition>

           <Remark title="The Converse Exception">
             A connected space is <strong>NOT</strong> generally path-connected. This is one of the most subtle distinctions in topology (e.g., the Topologist's Sine Curve).
           </Remark>

           <Proposition title="Finite Products">
             A finite product of path-connected spaces is path-connected.
           </Proposition>
        </div>
      </div>
    </section>
  );
};

export default PathConnectednessSection;
