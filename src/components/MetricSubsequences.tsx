import React from 'react';
import { InlineMath, BlockMath } from './Math';
import { Definition, Proposition, Theorem } from './MathBlocks';
import { useLanguage } from '../context/LanguageContext';
import { Scissors, Combine } from 'lucide-react';

const MetricSubsequences: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="bg-white py-24 px-6 overflow-hidden">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-3xl font-bold text-slate-900 mb-10 tracking-tight">{t('metrics.seq.sub.title')}</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-16">
          <div className="space-y-8">
            <Definition title="Définition 14: Suite extraite (Subsequence)">
              <p className="mb-6">{t('metrics.seq.sub.desc')}</p>
              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 italic space-y-4">
                 <p className="text-xs text-slate-600 leading-relaxed">
                   Let <InlineMath math="\varphi: \mathbb{N} \to \mathbb{N}" /> be a <strong>strictly increasing</strong> function. The sequence <InlineMath math="(x_{\varphi(n)})" /> is called a subsequence of <InlineMath math="(x_n)" />.
                 </p>
                 <div className="bg-white/80 p-3 rounded-lg border border-slate-200 font-mono text-[10px] text-blue-600">
                    Example: \varphi(n) = 2n \implies (x_0, x_2, x_4, \dots)
                 </div>
              </div>
            </Definition>

            <Theorem title="The Grand Link (Prop 8)">
               <div className="flex gap-4 items-center bg-indigo-50 p-6 rounded-2xl border border-indigo-100">
                  <Combine className="w-10 h-10 text-indigo-600 shrink-0" />
                  <p className="text-sm text-indigo-900 font-medium leading-relaxed italic">
                    A point a is a value of adherence of <InlineMath math="(x_n)" /> if and only if there exists a subsequence that converges to a.
                  </p>
               </div>
            </Theorem>
          </div>

          <div className="space-y-8">
             <Proposition title="Proposition 7: Preservation of Limits">
                <p className="text-slate-600 text-sm leading-relaxed mb-6">
                   If a sequence converges to a limit <InlineMath math="l" />, then <strong>every</strong> subsequence extracted from it also converges to the same limit <InlineMath math="l" />.
                </p>
                <div className="p-4 bg-slate-50 rounded-xl border border-slate-100 flex items-center justify-center">
                   <InlineMath math="(x_n) \to l \implies (x_{\varphi(n)}) \to l" />
                </div>
             </Proposition>

             <div className="bg-slate-900 rounded-[3rem] p-10 text-white relative overflow-hidden shadow-2xl">
                <div className="absolute top-0 right-0 p-8 opacity-10">
                   <Scissors className="w-48 h-48" />
                </div>
                <h4 className="text-xl font-bold mb-6">Sequential Functions</h4>
                <p className="text-indigo-100 text-sm leading-relaxed mb-8">
                   We can define function limits entirely through sequences.
                </p>
                <div className="bg-white/10 p-6 rounded-2xl border border-white/20">
                   <h5 className="text-[10px] font-bold text-blue-300 uppercase tracking-[0.2em] mb-4">Proposition 9</h5>
                   <BlockMath math="\lim_{x \to a} f(x) = l \iff \forall (x_n) \to a, \quad f(x_n) \to l" />
                </div>
                <p className="mt-6 text-[10px] text-slate-400 italic">
                   Note: The sequences <InlineMath math="(x_n)" /> must be strictly inside the domain.
                </p>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MetricSubsequences;
