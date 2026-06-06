import React from 'react';
import { InlineMath } from './Math';
import { Definition, Proposition } from './MathBlocks';

const ConnectedDefinitions: React.FC = () => {
  return (
    <section className="bg-slate-50 py-16 px-6">
      <div className="mx-auto max-w-4xl">
        <h2 className="text-3xl font-bold text-slate-900 mb-8 tracking-tight">5.1 Définitions et premières propriétés</h2>
        
        <Definition title="Définition 18: Connectedness">
          <ol className="list-decimal pl-5 mt-4 space-y-4 text-sm">
            <li>
              A topological space <InlineMath math="(E, \mathcal{T})" /> is <strong>connected</strong> if the only cover of <InlineMath math="E" /> by two disjoint open sets is <InlineMath math="\{\emptyset, E\}" />. 
              <p className="mt-2 text-slate-500 italic">"In other words, you cannot partition E into two non-empty open sets."</p>
            </li>
            <li>
              A subset <InlineMath math="A" /> of <InlineMath math="E" /> is connected if <InlineMath math="A" />, equipped with the induced topology, is a connected topological space.
            </li>
          </ol>
        </Definition>

        <Proposition title="Proposition 15: The 3 Equivalences">
          The following three assertions are strictly equivalent:
          <ol className="list-decimal pl-5 mt-4 space-y-4 italic text-sm">
            <li>The topological space <InlineMath math="E" /> is connected.</li>
            <li>The only cover of <InlineMath math="E" /> by two disjoint <strong>closed</strong> sets is <InlineMath math="\{\emptyset, E\}" />.</li>
            <li>
              <strong>The Clopen Test:</strong> The only subsets of <InlineMath math="E" /> that are simultaneously open and closed (clopen) are <InlineMath math="\emptyset" /> and <InlineMath math="E" />.
            </li>
          </ol>
          <div className="mt-6 p-4 bg-white rounded-2xl border border-slate-200 text-[11px] text-slate-500 shadow-inner">
             <span className="font-bold text-slate-900 uppercase tracking-tighter mr-2">Pro-Tip:</span>
             If you ever find a non-empty, proper subset that is both open and closed, the space is definitely <strong>disconnected</strong>.
          </div>
        </Proposition>
      </div>
    </section>
  );
};

export default ConnectedDefinitions;
