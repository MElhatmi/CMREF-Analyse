import React from 'react';
import { InlineMath, BlockMath } from './Math';
import { Definition, Property, Proposition } from './MathBlocks';
import { useLanguage } from '../context/LanguageContext';
import { Target, Zap } from 'lucide-react';

const MetricAdherence: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="bg-white py-24 px-6 overflow-hidden">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-3xl font-bold text-slate-900 mb-10 tracking-tight">{t('metrics.closed.adh.title')}</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-16">
          <div className="space-y-8">
            <Definition title="Définition 8: Point adhérent">
              <p className="mb-6">{t('metrics.closed.adh.intro')}</p>
              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 flex flex-col items-center gap-4">
                 <BlockMath math="\forall V \in \mathcal{V}(a), \quad V \cap A \neq \emptyset" />
                 <p className="text-[10px] text-slate-400 font-bold uppercase">The definition of Adherence</p>
              </div>
            </Definition>

            <Property title="Propriétés 4: Structural Rules">
               <ul className="list-decimal pl-5 space-y-3 text-sm text-slate-600">
                 <li><InlineMath math="a \in \overline{A} \iff \forall r > 0, B(a, r) \cap A \neq \emptyset" />.</li>
                 <li><InlineMath math="A \subset \overline{A}" />.</li>
                 <li><InlineMath math="\overline{A}" /> is always a <strong>closed set</strong>.</li>
                 <li>If <InlineMath math="A \subset B" />, then <InlineMath math="\overline{A} \subset \overline{B}" />.</li>
               </ul>
            </Property>
          </div>

          <div className="space-y-8">
             <div className="bg-indigo-600 rounded-[3rem] p-10 text-white shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 p-8 opacity-10">
                   <Target className="w-48 h-48" />
                </div>
                <h4 className="text-xl font-bold mb-6 flex items-center gap-2">
                   <Zap className="w-5 h-5 text-amber-300" />
                   {t('metrics.closed.seq.title')}
                </h4>
                <p className="text-indigo-100 text-sm leading-relaxed mb-8">
                   {t('metrics.closed.seq.desc')}
                </p>
                <div className="bg-white/10 p-6 rounded-2xl border border-white/20">
                   <h5 className="text-[10px] font-bold text-blue-300 uppercase tracking-[0.2em] mb-4">Proposition 5</h5>
                   <BlockMath math="a \in \overline{A} \iff \exists (x_n) \in A^\mathbb{N} \text{ s.t. } x_n \to a" />
                </div>
             </div>

             <div className="p-8 bg-slate-900 rounded-[2.5rem] text-white">
                <h4 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-6">Examples</h4>
                <div className="space-y-6">
                   <div className="flex justify-between items-center border-b border-white/10 pb-4">
                      <span className="text-sm">Closure of <InlineMath math="[0, 1[" /></span>
                      <span className="text-sm font-mono text-blue-400 font-bold"><InlineMath math="[0, 1]" /></span>
                   </div>
                   <div className="flex justify-between items-center">
                      <span className="text-sm">Closure of <InlineMath math="\mathbb{Q}" /></span>
                      <span className="text-sm font-mono text-blue-400 font-bold"><InlineMath math="\mathbb{R}" /></span>
                   </div>
                </div>
             </div>
          </div>
        </div>

        <Proposition title="Proposition 4: Characterization of Closedness">
           <div className="space-y-6 text-slate-600 leading-relaxed">
              <p>A subset <InlineMath math="A" /> is closed if and only if it is equal to its closure (<InlineMath math="A = \overline{A}" />).</p>
              <div className="h-px bg-slate-100 w-full" />
              <p className="italic text-sm">
                <strong>Crucial for limits:</strong> A set <InlineMath math="A" /> is closed if every sequence in <InlineMath math="A" /> that converges in <InlineMath math="E" /> has its limit inside <InlineMath math="A" />. (The set is "stable" under sequential limits).
              </p>
           </div>
        </Proposition>
      </div>
    </section>
  );
};

export default MetricAdherence;
