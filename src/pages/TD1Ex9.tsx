import React from 'react';
import { motion } from 'framer-motion';
import { BlockMath, InlineMath } from '../components/Math';
import FunctionNormVisualizer from '../components/FunctionNormVisualizer';
import { useLanguage } from '../context/LanguageContext';

const TD1Ex9: React.FC = () => {
  const { t } = useLanguage();

  return (
    <main className="min-h-screen bg-slate-50 py-20 px-6">
      <div className="max-w-4xl mx-auto space-y-12">
        
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-black text-slate-900 tracking-tight">{t('td1.title')}</h1>
          <p className="text-slate-500 font-medium uppercase tracking-[0.2em] text-sm">{t('td1.subtitle')}</p>
          <div className="h-1 w-20 bg-slate-900 mx-auto rounded-full" />
        </div>

        {/* Exercise Statement */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-3xl border border-slate-200 p-8 shadow-sm"
        >
          <div className="flex items-center gap-3 mb-6">
            <span className="bg-slate-900 text-white px-3 py-1 rounded-lg text-[10px] font-bold uppercase tracking-widest">{t('common.exercice')} 9</span>
            <h2 className="text-xl font-bold text-slate-900">{t('td1.ex9.title')}</h2>
          </div>
          <div className="text-slate-700 leading-relaxed space-y-4">
            <p>
              {t('metrics.hero.subtitle').split('universe')[0]} <InlineMath math="f \in E = C^1([0, 1], \mathbb{R})" />:
            </p>
            <BlockMath math="N(f) = \left[ f^2(0) + \int_0^1 f'^2(t) dt \right]^{\frac{1}{2}}" />
            <ol className="list-decimal list-inside space-y-2 font-medium">
              <li>{t('td1.ex9.q1')}</li>
              <li>{t('td1.ex9.q2')}</li>
              <li>{t('td1.ex9.res3').split(':')[0]}</li>
            </ol>
          </div>
        </motion.section>

        {/* Visualizer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.05 }}
        >
          <FunctionNormVisualizer />
        </motion.div>

        {/* Resolution 3 */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-white rounded-3xl border border-slate-200 p-8 shadow-sm"
        >
          <h3 className="text-lg font-bold text-slate-900 mb-6 flex items-center gap-2">
            <div className="w-1.5 h-6 bg-slate-900 rounded-full" />
            3. {t('td1.ex9.res3').split(':')[0]}
          </h3>
          
          <div className="space-y-6 text-slate-700">
            <p>{t('td1.ex9.res3')}</p>
            <BlockMath math="N^2(x^n) = \frac{n^2}{2n-1} \xrightarrow[n \to +\infty]{} +\infty" />
            <div className="bg-slate-900 text-white rounded-2xl p-8 space-y-4">
              <h4 className="font-bold text-indigo-400 uppercase tracking-widest text-xs">{t('common.conclusion')}</h4>
              <p className="text-slate-300 leading-relaxed">
                {t('td1.ex9.res3')}
              </p>
            </div>
          </div>
        </motion.section>

      </div>
    </main>
  );
};

export default TD1Ex9;
