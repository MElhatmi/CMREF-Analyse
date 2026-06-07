import React from 'react';
import { InlineMath, BlockMath } from './Math';
import { Theorem, Remark } from './MathBlocks';
import { useLanguage } from '../context/LanguageContext';
import { ShieldCheck, Layers, Boxes, Sparkles } from 'lucide-react';

const MetricCompactRules: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="bg-white py-24 px-6 overflow-hidden">
      <div className="mx-auto max-w-7xl">
        <h2 className="text-3xl font-bold text-slate-900 mb-16 text-center underline decoration-blue-500 decoration-4 underline-offset-8">{t('metrics.compact.rules.title')}</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="p-8 bg-slate-50 rounded-[3rem] border border-slate-100 flex flex-col shadow-sm">
             <div className="h-12 w-12 rounded-2xl bg-white flex items-center justify-center mb-8 shadow-sm">
                <ShieldCheck className="text-blue-500" />
             </div>
             <Theorem title={t('metrics.compact.rules.cb')}>
                {t('metrics.compact.rules.cb_desc')}
             </Theorem>
             <Remark title="Warning">
                <p>The reverse is generally <strong>FALSE</strong>! In an abstract space, a closed and bounded set might fail to be compact. However, <InlineMath math="\mathbb{R}" /> is closed but not compact because it is unbounded.</p>
             </Remark>
          </div>

          <div className="p-8 bg-slate-50 rounded-[3rem] border border-slate-100 flex flex-col shadow-sm">
             <div className="h-12 w-12 rounded-2xl bg-white flex items-center justify-center mb-8 shadow-sm">
                <Layers className="text-indigo-500" />
             </div>
             <Theorem title={t('metrics.compact.rules.sub')}>
                {t('metrics.compact.rules.sub_desc')}
             </Theorem>
             <p className="mt-4 text-xs text-slate-500 italic leading-relaxed">
               "A closed shape inside a compact universe inherits the property of compactness."
             </p>
          </div>

          <div className="p-8 bg-slate-50 rounded-[3rem] border border-slate-100 flex flex-col shadow-sm">
             <div className="h-12 w-12 rounded-2xl bg-white flex items-center justify-center mb-8 shadow-sm">
                <Boxes className="text-emerald-500" />
             </div>
             <Theorem title="Theorem 4: Products">
                "If A and B are compact, then their Cartesian product <InlineMath math="A \times B" /> is strictly compact in the product topology."
             </Theorem>
          </div>
        </div>

        <div className="bg-indigo-600 rounded-[4rem] p-12 text-white relative overflow-hidden shadow-2xl">
           <div className="absolute top-0 right-0 p-8 opacity-10">
              <Sparkles className="w-64 h-64 text-blue-300" />
           </div>
           <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                 <h3 className="text-3xl font-bold mb-6">{t('metrics.compact.heine.title')}</h3>
                 <p className="text-indigo-100 text-lg leading-relaxed mb-8">
                    {t('metrics.compact.heine.desc')}
                 </p>
                 <div className="bg-white/10 p-6 rounded-2xl border border-white/20 italic">
                    <p className="text-sm">
                      "While weird abstract spaces fail, our standard Euclidean world obeys the ultimate rule: Compactness is exactly Closed + Bounded."
                    </p>
                 </div>
              </div>
              <div className="bg-white p-8 rounded-[3rem] text-slate-900 shadow-xl">
                 <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-6">Theorem 5: Heine-Borel</h4>
                 <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 flex items-center justify-center">
                    <BlockMath math="A \subset \mathbb{R}^n \text{ is compact} \iff A \text{ is closed and bounded.}" />
                 </div>
                 <div className="mt-6 flex items-center gap-3 bg-blue-50 p-4 rounded-xl border border-blue-100">
                    <div className="w-2 h-2 bg-blue-500 rounded-full animate-ping" />
                    <p className="text-[10px] text-blue-800 font-bold uppercase tracking-tight">Fundamental for Multivariable Calculus</p>
                 </div>
              </div>
           </div>
        </div>
      </div>
    </section>
  );
};

export default MetricCompactRules;
