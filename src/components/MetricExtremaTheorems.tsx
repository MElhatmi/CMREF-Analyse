import React from 'react';
import { InlineMath, BlockMath } from './Math';
import { Theorem } from './MathBlocks';
import { useLanguage } from '../context/LanguageContext';
import { Maximize2, Zap } from 'lucide-react';

const MetricExtremaTheorems: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="bg-white py-24 px-6 overflow-hidden">
      <div className="mx-auto max-w-5xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div className="space-y-12">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-8 tracking-tight">{t('metrics.compact2.extrema.title')}</h2>
              <Theorem title="Theorem 7: Extreme Value Theorem">
                <p className="text-sm leading-relaxed mb-6">
                  Let A be a non-empty compact subset. A real-valued continuous function <InlineMath math="f: A \to \mathbb{R}" /> is absolutely bounded and achieves its bounds.
                </p>
                <div className="bg-white/50 p-6 rounded-2xl border border-indigo-100 shadow-inner flex flex-col items-center gap-4">
                  <BlockMath math="\inf_{x \in A} f(x) = \min_{x \in A} f(x) \quad \text{and} \quad \sup_{x \in A} f(x) = \max_{x \in A} f(x)" />
                  <div className="flex items-center gap-2 text-indigo-600 font-bold text-[10px] uppercase tracking-widest">
                     <Maximize2 className="w-4 h-4" />
                     Extrema are achieved in A
                  </div>
                </div>
              </Theorem>
            </div>
          </div>

          <div className="space-y-12">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-8 tracking-tight">{t('metrics.compact2.heine.title')}</h2>
              <div className="bg-slate-900 rounded-[3rem] p-10 text-white relative overflow-hidden shadow-2xl">
                <div className="absolute top-0 right-0 p-8 opacity-10">
                   <Zap className="w-48 h-48 text-amber-300" />
                </div>
                <div className="relative z-10">
                   <h4 className="text-xl font-bold mb-6 text-amber-300">Theorem 8: Heine's Theorem</h4>
                   <p className="text-indigo-100 text-sm leading-relaxed mb-8 italic">
                      {t('metrics.compact2.heine.desc')}
                   </p>
                   <div className="bg-white/10 p-6 rounded-2xl border border-white/20">
                      <h5 className="text-[10px] font-bold text-blue-300 uppercase tracking-[0.2em] mb-4">The Universal Rule</h5>
                      <p className="text-sm leading-relaxed text-blue-100">
                        "If the domain is compact, standard continuity implies uniform continuity."
                      </p>
                   </div>
                   <div className="mt-8 flex items-center gap-3 bg-blue-600/20 p-4 rounded-xl border border-blue-500/30">
                      <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
                      <p className="text-[10px] font-bold uppercase tracking-widest text-blue-200">No more slope explosion.</p>
                   </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MetricExtremaTheorems;
