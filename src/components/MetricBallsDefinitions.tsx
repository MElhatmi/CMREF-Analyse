import React from 'react';
import { InlineMath, BlockMath } from './Math';
import { Definition } from './MathBlocks';
import { useLanguage } from '../context/LanguageContext';

const MetricBallsDefinitions: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="bg-slate-50 py-16 px-6">
      <div className="mx-auto max-w-4xl">
        <h2 className="text-3xl font-bold text-slate-900 mb-10 tracking-tight">{t('metrics.balls.def.title')}</h2>
        
        <Definition title={t('nav.metrics.balls')}>
          <p className="mb-8">{t('metrics.balls.def.intro')}</p>
          
          <div className="space-y-8">
            <div className="bg-white/50 p-6 rounded-2xl border border-slate-100 shadow-inner">
              <h5 className="text-sm font-bold text-slate-900 mb-2">{t('metrics.balls.def.open')}</h5>
              <p className="text-xs text-slate-500 mb-4 italic">{t('metrics.balls.def.open_sub')}</p>
              <BlockMath math="B(a, r) = \{x \in E \mid d(x, a) < r\}" />
            </div>

            <div className="bg-white/50 p-6 rounded-2xl border border-slate-100 shadow-inner">
              <h5 className="text-sm font-bold text-slate-900 mb-2">{t('metrics.balls.def.closed')}</h5>
              <p className="text-xs text-slate-500 mb-4 italic">{t('metrics.balls.def.closed_sub')}</p>
              <BlockMath math="\overline{B}(a, r) = \{x \in E \mid d(x, a) \le r\}" />
            </div>

            <div className="bg-white/50 p-6 rounded-2xl border border-slate-100 shadow-inner">
              <h5 className="text-sm font-bold text-slate-900 mb-2">{t('metrics.balls.def.sphere')}</h5>
              <p className="text-xs text-slate-500 mb-4 italic">{t('metrics.balls.def.sphere_sub')}</p>
              <BlockMath math="S(a, r) = \{x \in E \mid d(x, a) = r\}" />
            </div>
          </div>
        </Definition>

        <div className="mt-12 p-8 bg-blue-50 rounded-[2.5rem] border border-blue-100 flex flex-col md:flex-row gap-6 items-center shadow-sm">
           <div className="shrink-0 h-12 w-12 bg-blue-600 text-white rounded-2xl flex items-center justify-center font-bold shadow-lg shadow-blue-200">!</div>
           <div>
              <h4 className="font-bold text-blue-900 mb-1">{t('metrics.balls.ex.title')}</h4>
              <p className="text-sm text-blue-700 leading-relaxed">
                {t('metrics.balls.ex.desc')} 
                <span className="mx-2 font-mono bg-white/50 px-2 py-0.5 rounded border border-blue-200">
                  <InlineMath math="B(a, r) = \left] a - r, a + r \right[" />
                </span>
              </p>
           </div>
        </div>
      </div>
    </section>
  );
};

export default MetricBallsDefinitions;
