import React from 'react';
import { InlineMath, BlockMath } from './Math';
import { Theorem, Warning } from './MathBlocks';
import { useLanguage } from '../context/LanguageContext';
import { MoveRight, RefreshCcw } from 'lucide-react';

const MetricCompactImages: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="bg-slate-50 py-16 px-6">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-3xl font-bold text-slate-900 mb-10 tracking-tight">{t('metrics.compact2.img.title')}</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-8">
            <Theorem title="Theorem 6: Continuous Image">
              <p className="mb-6">{t('metrics.compact2.img.desc')}</p>
              <div className="bg-white/50 p-6 rounded-2xl border border-blue-100 flex flex-col items-center gap-4 shadow-inner">
                <BlockMath math="A \subset E \text{ compact, } f \in \mathcal{C}(A, F) \implies f(A) \text{ compact in } F" />
                <div className="flex items-center gap-2 text-blue-600 font-bold text-[10px] uppercase tracking-widest">
                   <MoveRight className="w-4 h-4" />
                   Compactness is invariant under continuity
                </div>
              </div>
            </Theorem>
          </div>

          <div className="space-y-8">
            <Warning title={t('metrics.compact2.trap.title')}>
               <p className="mb-4 text-sm leading-relaxed">{t('metrics.compact2.trap.desc')}</p>
               <div className="bg-white/50 p-4 rounded-xl border border-red-100">
                  <h5 className="text-[10px] font-bold text-red-600 uppercase mb-2">Classic Counter-Example</h5>
                  <p className="text-xs text-slate-600 leading-relaxed italic mb-4">
                    Consider <InlineMath math="f: \mathbb{R} \to \mathbb{R}, x \mapsto \sin(x)" />.
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                     <div className="bg-emerald-50 p-2 rounded border border-emerald-100 text-center">
                        <span className="text-[8px] block text-emerald-600 font-bold uppercase">Compact Target</span>
                        <InlineMath math="K = [-1, 1]" />
                     </div>
                     <div className="bg-red-50 p-2 rounded border border-red-100 text-center">
                        <span className="text-[8px] block text-red-600 font-bold uppercase">Infinite Inverse</span>
                        <InlineMath math="f^{-1}(K) = \mathbb{R}" />
                     </div>
                  </div>
                  <p className="mt-4 text-[10px] text-red-800 font-bold flex items-center gap-2">
                     <RefreshCcw className="w-3 h-3" /> Inverse mapping fails preservation.
                  </p>
               </div>
            </Warning>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MetricCompactImages;
