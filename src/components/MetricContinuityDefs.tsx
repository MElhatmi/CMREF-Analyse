import React from 'react';
import { InlineMath, BlockMath } from './Math';
import { Definition, Proposition } from './MathBlocks';
import { useLanguage } from '../context/LanguageContext';
import { Gauge, ShieldCheck } from 'lucide-react';

const MetricContinuityDefs: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="bg-slate-50 py-16 px-6">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-3xl font-bold text-slate-900 mb-10 tracking-tight">{t('metrics.cont.def.title')}</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <Proposition title={t('metrics.cont.def.local')}>
              <p className="text-xs text-slate-600 mb-6 leading-relaxed">
                Let <InlineMath math="(E, d_E)" /> and <InlineMath math="(F, d_F)" /> be two metric spaces. <InlineMath math="f: E \to F" /> is continuous at <InlineMath math="x" /> if:
              </p>
              <div className="bg-white/50 p-4 rounded-xl border border-slate-200">
                <BlockMath math="\forall \epsilon > 0, \exists \alpha > 0, \forall y \in E, \quad d_E(x, y) < \alpha \implies d_F(f(x), f(y)) < \epsilon" />
              </div>
              <p className="mt-4 text-[10px] text-blue-600 font-bold italic">
                 Note: <InlineMath math="\alpha" /> depends on both <InlineMath math="\epsilon" /> and the position <InlineMath math="x" />.
              </p>
            </Proposition>

            <Definition title={t('metrics.cont.def.uniform')}>
               <p className="mb-6">{t('metrics.cont.def.uniform_desc')}</p>
               <div className="bg-indigo-50/50 p-6 rounded-2xl border border-indigo-100 flex flex-col items-center gap-4">
                  <div className="bg-white p-4 rounded-xl shadow-inner w-full text-center">
                    <BlockMath math="\forall \epsilon > 0, \exists \alpha > 0, \forall (x,y) \in E^2, \quad d_E(x, y) < \alpha \implies d_F(f(x), f(y)) < \epsilon" />
                  </div>
                  <div className="flex items-center gap-2 text-indigo-600 font-bold text-[10px] uppercase tracking-widest">
                     <ShieldCheck className="w-4 h-4" />
                     Universal Safety Margin: <InlineMath math="\alpha(\epsilon)" /> only
                  </div>
               </div>
            </Definition>
          </div>

          <div className="space-y-8">
            <Definition title={t('metrics.cont.def.lipschitz')}>
               <p className="mb-6">{t('metrics.cont.def.lipschitz_desc')}</p>
               <div className="bg-emerald-50/50 p-6 rounded-2xl border border-emerald-100 relative overflow-hidden">
                  <div className="absolute top-0 right-0 p-4 opacity-10">
                     <Gauge className="w-12 h-12 text-emerald-600" />
                  </div>
                  <BlockMath math="d_F(f(x), f(y)) \le \lambda \cdot d_E(x, y)" />
                  <div className="mt-4 flex flex-col gap-2">
                     <div className="flex justify-between items-center bg-white/60 p-2 rounded-lg text-[10px] font-mono border border-emerald-100">
                        <span>Ratio <InlineMath math="\lambda \in \mathbb{R}_+" /></span>
                        <span className="text-emerald-700 font-bold">Lipschitz</span>
                     </div>
                     <div className="flex justify-between items-center bg-white/60 p-2 rounded-lg text-[10px] font-mono border border-emerald-100">
                        <span>Ratio <InlineMath math="\lambda \in ]0, 1[" /></span>
                        <span className="text-indigo-700 font-bold uppercase">Contraction</span>
                     </div>
                  </div>
               </div>
            </Definition>

            <div className="bg-slate-900 rounded-[2.5rem] p-10 text-white">
               <h4 className="text-xs font-bold text-slate-500 uppercase tracking-[0.2em] mb-6">Examples & Anomalies</h4>
               <div className="space-y-6">
                  <div className="flex flex-col gap-2 border-b border-white/5 pb-4">
                     <div className="flex justify-between items-center">
                        <span className="text-sm font-bold"><InlineMath math="f(x) = \sqrt{x}" /></span>
                        <span className="text-[10px] font-bold text-indigo-400 uppercase">Uniformly Continuous</span>
                     </div>
                     <p className="text-[10px] text-slate-400 italic">But NOT Lipschitz! Near 0, the slope explodes to infinity.</p>
                  </div>
                  <div className="flex flex-col gap-2">
                     <div className="flex justify-between items-center">
                        <span className="text-sm font-bold">Distance function <InlineMath math="\delta(x, A)" /></span>
                        <span className="text-[10px] font-bold text-emerald-400 uppercase">1-Lipschitz</span>
                     </div>
                     <p className="text-[10px] text-slate-400 italic">Distance to a set is incredibly well-behaved everywhere.</p>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MetricContinuityDefs;
