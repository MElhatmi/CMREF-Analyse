import React from 'react';
import { InlineMath } from './Math';
import { Proposition, Theorem } from './MathBlocks';

const ConnectednessContinuitySection: React.FC = () => {
  return (
    <section className="bg-slate-50 py-24 px-6 overflow-hidden">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-4xl font-bold text-slate-900 mb-12 tracking-tight border-b-2 border-slate-200 pb-4">
          Section 5.2: Connectedness and Continuity
        </h2>

        <Theorem title="Conservation of Connectedness">
          Let <InlineMath math="E" /> and <InlineMath math="F" /> be topological spaces with <InlineMath math="E" /> connected. If <InlineMath math="f: E \to F" /> is continuous, the direct image <InlineMath math="f(E)" /> is connected.
        </Theorem>

        <div className="bg-white p-10 rounded-[3rem] shadow-sm border border-slate-200 my-12">
           <h4 className="text-xl font-bold text-indigo-900 mb-6 flex items-center gap-3">
              <div className="w-2 h-2 bg-indigo-500 rounded-full" />
              The Intermediate Value Theorem
           </h4>
           <Theorem title="General IVT">
             Let <InlineMath math="f" /> be a continuous function from an interval <InlineMath math="I \subset \mathbb{R}" /> into <InlineMath math="\mathbb{R}" />. If <InlineMath math="\alpha" /> and <InlineMath math="\beta" /> are in <InlineMath math="f(I)" />, then the interval <InlineMath math="[\alpha, \beta]" /> is contained in <InlineMath math="f(I)" />.
           </Theorem>
           <p className="text-sm text-slate-500 italic mt-6 leading-relaxed">
             Equivalently, the image of an interval under a continuous function is itself an interval.
           </p>
        </div>

        <Proposition title="Testing Connectedness via Constants">
          A space <InlineMath math="(E, \mathcal{T})" /> is connected if and only if the only continuous applications from <InlineMath math="E" /> to the discrete space <InlineMath math="\{0, 1\}" /> are constants.
        </Proposition>
      </div>
    </section>
  );
};

export default ConnectednessContinuitySection;
