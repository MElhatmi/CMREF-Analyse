import React from 'react';
import { InlineMath, BlockMath } from './Math';
import { Definition } from './MathBlocks';
import { useLanguage } from '../context/LanguageContext';
import { Target, Flag } from 'lucide-react';

const MetricSequencesDefinitions: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="bg-slate-50 py-16 px-6">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-3xl font-bold text-slate-900 mb-10 tracking-tight">{t('metrics.seq.def.title')}</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <Definition title={t('metrics.seq.def.conv')}>
              <p className="mb-6">{t('metrics.seq.def.conv_desc')}</p>
              <div className="bg-white/50 p-6 rounded-2xl border border-slate-100 shadow-inner">
                <BlockMath math="\forall \epsilon > 0, \exists n_0 \in \mathbb{N}, \forall n \ge n_0, \quad d(x_n, l) < \epsilon" />
                <div className="mt-6 flex items-center gap-3 text-emerald-600 font-bold bg-emerald-50 p-3 rounded-xl border border-emerald-100 text-[10px] uppercase">
                   <Flag className="w-4 h-4" />
                   Quantifier: FOR ALL n {" >= "} n0
                </div>
              </div>
            </Definition>
          </div>

          <div className="space-y-8">
            <Definition title={t('metrics.seq.def.adh')}>
              <p className="mb-6">{t('metrics.seq.def.adh_desc')}</p>
              <div className="bg-white/50 p-6 rounded-2xl border border-slate-100 shadow-inner">
                <BlockMath math="\forall \epsilon > 0, \forall N \in \mathbb{N}, \exists n > N, \quad d(x_n, a) < \epsilon" />
                <div className="mt-6 flex items-center gap-3 text-blue-600 font-bold bg-blue-50 p-3 rounded-xl border border-blue-100 text-[10px] uppercase">
                   <Target className="w-4 h-4" />
                   Quantifier: THERE EXISTS some n {" > "} N
                </div>
              </div>
            </Definition>
          </div>
        </div>

        <div className="mt-12 p-8 bg-white rounded-[3rem] border border-slate-200 shadow-sm flex flex-col md:flex-row gap-8 items-center">
           <div className="shrink-0 h-16 w-16 bg-slate-900 text-white rounded-2xl flex items-center justify-center text-2xl font-serif italic">!</div>
           <p className="text-sm text-slate-600 leading-relaxed">
             <strong>Intuition:</strong> In convergence, you stay close <em>forever</em>. In adherence, you come back close <em>at least once more</em>, no matter how far out you are. Since you can repeat this for any <InlineMath math="N" />, it implies you come back infinitely many times.
           </p>
        </div>
      </div>
    </section>
  );
};

export default MetricSequencesDefinitions;
