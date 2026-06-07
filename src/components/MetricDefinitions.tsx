import React from 'react';
import { InlineMath, BlockMath } from './Math';
import { Definition } from './MathBlocks';
import { useLanguage } from '../context/LanguageContext';

const MetricDefinitions: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="bg-slate-50 py-16 px-6">
      <div className="mx-auto max-w-4xl">
        <h2 className="text-3xl font-bold text-slate-900 mb-10 tracking-tight">{t('metrics.def.title')}</h2>
        
        <Definition title={t('metrics.def.title')}>
          <p className="mb-6">{t('metrics.def.intro')}</p>
          
          <div className="space-y-8">
            <div className="bg-white/50 p-6 rounded-2xl border border-slate-100 shadow-inner">
              <h5 className="text-sm font-bold text-slate-900 mb-2">{t('metrics.def.ax1')}</h5>
              <p className="text-xs text-slate-500 mb-4 italic">{t('metrics.def.ax1_sub')}</p>
              <BlockMath math="d(x, y) = 0 \iff x = y" />
            </div>

            <div className="bg-white/50 p-6 rounded-2xl border border-slate-100 shadow-inner">
              <h5 className="text-sm font-bold text-slate-900 mb-2">{t('metrics.def.ax2')}</h5>
              <p className="text-xs text-slate-500 mb-4 italic">{t('metrics.def.ax2_sub')}</p>
              <BlockMath math="d(x, y) = d(y, x)" />
            </div>

            <div className="bg-white/50 p-6 rounded-2xl border border-slate-100 shadow-inner">
              <h5 className="text-sm font-bold text-slate-900 mb-2">{t('metrics.def.ax3')}</h5>
              <p className="text-xs text-slate-500 mb-4 italic">{t('metrics.def.ax3_sub')}</p>
              <BlockMath math="d(x, z) \le d(x, y) + d(y, z)" />
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-blue-100 flex gap-4 items-center">
            <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse" />
            <p className="text-sm text-slate-600">
              If <InlineMath math="d" /> is a distance on <InlineMath math="E" />, the pair <InlineMath math="(E, d)" /> is called a <strong>metric space</strong>.
            </p>
          </div>
        </Definition>
      </div>
    </section>
  );
};

export default MetricDefinitions;
