import React from 'react';
import { InlineMath, BlockMath } from './Math';
import { Theorem } from './MathBlocks';
import { useLanguage } from '../context/LanguageContext';
import { Combine } from 'lucide-react';

const MetricCompactSequential: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="bg-slate-50 py-16 px-6">
      <div className="mx-auto max-w-4xl">
        <h2 className="text-3xl font-bold text-slate-900 mb-10 tracking-tight">{t('metrics.compact.seq.title')}</h2>
        
        <Theorem title={t('metrics.compact.seq.bw')}>
           <p className="mb-6">{t('metrics.compact.seq.desc')}</p>
           <div className="bg-white/50 p-6 rounded-2xl border border-indigo-100 flex flex-col items-center gap-4">
              <BlockMath math="A \text{ is compact} \iff \forall (x_n) \in A^\mathbb{N}, \quad \text{Adh}(x_n) \cap A \neq \emptyset" />
           </div>
        </Theorem>

        <div className="mt-8 p-8 bg-white rounded-[3rem] border border-slate-200 shadow-sm flex flex-col md:flex-row gap-8 items-center">
           <div className="shrink-0 h-16 w-16 bg-indigo-600 text-white rounded-2xl flex items-center justify-center shadow-lg shadow-indigo-100">
              <Combine className="w-8 h-8" />
           </div>
           <p className="text-sm text-slate-600 leading-relaxed italic">
             <strong>The Subsequence Language:</strong> "In other words, from any infinite sequence trapped inside <InlineMath math="A" />, you can ALWAYS extract a subsequence that successfully converges to a limit that is strictly inside <InlineMath math="A" />."
           </p>
        </div>
      </div>
    </section>
  );
};

export default MetricCompactSequential;
