import React from 'react';
import { motion } from 'framer-motion';
import { BlockMath, InlineMath } from '../components/Math';
import R2TopologyVisualizer from '../components/R2TopologyVisualizer';
import { useLanguage } from '../context/LanguageContext';

const TD1Ex6: React.FC = () => {
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
            <span className="bg-slate-900 text-white px-3 py-1 rounded-lg text-[10px] font-bold uppercase tracking-widest">{t('common.exercice')} 6</span>
            <h2 className="text-xl font-bold text-slate-900">{t('td1.ex6.title')}</h2>
          </div>
          <div className="text-slate-700 leading-relaxed space-y-4">
            <p>
              {t('td1.ex6.stmt').split('.')[0] + ':'}
            </p>
            <BlockMath math="A_1 = \{(x, y) \in \mathbb{R}^2 : x^2y^2 > 1\} \quad \text{et} \quad A_2 = \{(x, y) \in \mathbb{R}^2 : x^2 + y^2 = 1 \text{ et } y \ge 0\}" />
            <ol className="list-decimal list-inside space-y-2 font-medium">
              <li>{t('td1.ex6.stmt').split('?')[0].split('.')[1]}?</li>
              <li>{t('td1.ex6.stmt').split('?')[1].split('.')[0]}.</li>
              <li>{t('td1.ex1.res1.tri').replace('Inégalité triangulaire :', 'Est-ce compact ?')}</li>
            </ol>
          </div>
        </motion.section>

        {/* Visualizer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.05 }}
        >
          <R2TopologyVisualizer />
        </motion.div>

        {/* Resolution 1 */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-white rounded-3xl border border-slate-200 p-8 shadow-sm"
        >
          <h3 className="text-lg font-bold text-slate-900 mb-6 flex items-center gap-2">
            <div className="w-1.5 h-6 bg-slate-900 rounded-full" />
            1. {t('td1.ex6.res.A1').split('(')[0]} & {t('td1.ex6.res.A2').split('(')[0]}
          </h3>
          
          <div className="space-y-8 text-slate-700">
            <div className="space-y-4">
              <h4 className="font-bold text-slate-900 flex items-center gap-2 underline decoration-slate-300 underline-offset-4">{t('td1.viz.r2_topo.set_a1')}:</h4>
              <p>{t('td1.ex6.res.A1')}</p>
            </div>

            <div className="space-y-4">
              <h4 className="font-bold text-slate-900 flex items-center gap-2 underline decoration-slate-300 underline-offset-4">{t('td1.viz.r2_topo.set_a2')}:</h4>
              <p>{t('td1.ex6.res.A2')}</p>
            </div>
          </div>
        </motion.section>

        {/* Resolution 3 */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-white rounded-3xl border border-slate-200 p-8 shadow-sm"
        >
          <h3 className="text-lg font-bold text-slate-900 mb-6 flex items-center gap-2">
            <div className="w-1.5 h-6 bg-slate-900 rounded-full" />
            {t('nav.metrics.compact').split(' ')[0]}
          </h3>
          
          <div className="bg-slate-900 text-white rounded-2xl p-8 space-y-4">
            <h4 className="font-bold text-indigo-400 uppercase tracking-widest text-xs">{t('common.conclusion')}</h4>
            <p className="text-slate-300 leading-relaxed">
              <InlineMath math="A_1" /> : {t('td1.viz.r2_topo.verdict_a1')}<br/>
              <InlineMath math="A_2" /> : {t('td1.viz.r2_topo.verdict_a2')}
            </p>
          </div>
        </motion.section>

      </div>
    </main>
  );
};

export default TD1Ex6;
