import React from 'react';
import { InlineMath, BlockMath } from './Math';
import { Definition, Remark } from './MathBlocks';
import { useLanguage } from '../context/LanguageContext';
import { ShieldCheck, Ruler } from 'lucide-react';

const MetricCompletenessDefs: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="bg-slate-50 py-16 px-6">
      <div className="mx-auto max-w-5xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-16">
          <div className="space-y-8">
            <Definition title="D\u00E9finition 17: Equivalent Distances">
               <p className="mb-6 text-sm leading-relaxed text-slate-600">
                 You can change the ruler without breaking the universe. Two distances are equivalent if they bound each other:
               </p>
               <div className="bg-white/50 p-6 rounded-2xl border border-slate-200">
                  <BlockMath math="\alpha \cdot d_1(x, y) \le d_2(x, y) \le \beta \cdot d_1(x, y)" />
                  <div className="mt-6 flex items-center gap-3 bg-blue-50 p-3 rounded-xl border border-blue-100">
                     <Ruler className="w-4 h-4 text-blue-600" />
                     <p className="text-[10px] text-blue-800 font-bold uppercase tracking-widest italic">Topologically Identical</p>
                  </div>
               </div>
            </Definition>

            <Definition title={t('metrics.complete.cauchy.title')}>
               <p className="mb-6 text-sm leading-relaxed text-slate-600">{t('metrics.complete.cauchy.desc')}</p>
               <div className="bg-white/50 p-6 rounded-2xl border border-slate-200">
                  <BlockMath math="\forall \epsilon > 0, \exists n, \forall p,q \ge n, \quad d(u_p, u_q) \le \epsilon" />
               </div>
               <Remark title="The Catch">
                 A Cauchy sequence doesn't always converge! In <InlineMath math="\mathbb{Q}" />, a sequence of fractions zooming in on <InlineMath math="\sqrt{2}" /> is Cauchy but has no limit.
               </Remark>
            </Definition>
          </div>

          <div className="space-y-8">
            <Definition title={t('metrics.complete.def.title')}>
               <p className="mb-6 text-sm leading-relaxed text-slate-600">{t('metrics.complete.def.desc')}</p>
               <div className="bg-indigo-600 rounded-[3rem] p-10 text-white shadow-2xl relative overflow-hidden">
                  <div className="absolute top-0 right-0 p-8 opacity-10">
                     <ShieldCheck className="w-48 h-48" />
                  </div>
                  <div className="relative z-10">
                    <p className="text-sm italic mb-6">"A complete space is a closed world where limits cannot escape."</p>
                    <div className="bg-white/10 p-4 rounded-xl border border-white/20">
                       <BlockMath math="(E, d) \text{ complete} \iff \text{All Cauchy sequences converge.}" />
                    </div>
                  </div>
               </div>
            </Definition>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
               <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm">
                  <span className="text-[8px] font-bold text-slate-400 uppercase tracking-widest block mb-2">Theorem 9</span>
                  <p className="text-xs font-bold text-slate-900 leading-relaxed">Complete ⟶ Closed</p>
                  <p className="text-[10px] text-slate-500 italic mt-1">Any complete subset is strictly closed.</p>
               </div>
               <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm">
                  <span className="text-[8px] font-bold text-slate-400 uppercase tracking-widest block mb-2">Theorem 11</span>
                  <p className="text-xs font-bold text-slate-900 leading-relaxed">Compact ⟶ Complete</p>
                  <p className="text-[10px] text-slate-500 italic mt-1">Finiteness prevents missing holes.</p>
               </div>
            </div>
            
            <div className="p-6 bg-emerald-50 rounded-[2.5rem] border border-emerald-100 flex items-center gap-4">
               <div className="h-10 w-10 bg-emerald-600 text-white rounded-2xl flex items-center justify-center font-bold shadow-lg shadow-emerald-100">!</div>
               <p className="text-xs text-emerald-900 font-medium italic">
                 <strong>Theorem 10:</strong> Inside a complete parent, a subset is complete if and only if it is closed.
               </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MetricCompletenessDefs;

