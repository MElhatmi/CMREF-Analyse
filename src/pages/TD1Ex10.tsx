import React from 'react';
import { motion } from 'framer-motion';
import { BlockMath, InlineMath } from '../components/Math';
import SubspaceInteriorVisualizer from '../components/SubspaceInteriorVisualizer';
import { useLanguage } from '../context/LanguageContext';

const TD1Ex10: React.FC = () => {
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
            <span className="bg-slate-900 text-white px-3 py-1 rounded-lg text-[10px] font-bold uppercase tracking-widest">{t('common.exercice')} 10</span>
            <h2 className="text-xl font-bold text-slate-900">{t('td1.ex10.title')}</h2>
          </div>
          <div className="text-slate-700 leading-relaxed space-y-4">
            <p>
              {t('td1.ex2.res1.intro').replace('Verify', 'Let')} <InlineMath math="E" /> {t('metrics.hero.subtitle').split('universe')[0]} <InlineMath math="F" /> {t('td1.ex10.q1').split('of')[1] || 'subspace'}.
            </p>
            <ol className="list-decimal list-inside space-y-2 font-medium">
              <li>{t('td1.ex10.q1')}</li>
              <li>{t('td1.ex8.q2').replace('Prove that disjoint closed sets', 'Let H be a hyperplane. Show it is closed or dense')}</li>
              <li>{t('td1.ex10.q3')}</li>
              <li>{t('td1.ex10.res4')}</li>
            </ol>
          </div>
        </motion.section>

        {/* Visualizer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.05 }}
        >
          <SubspaceInteriorVisualizer />
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
            1. {t('td1.ex10.q1')}
          </h3>
          
          <div className="space-y-6 text-slate-700">
            <p><InlineMath math="0_E \in F \subset \overline{F}" />. {t('td1.ex2.res1.intro').replace('We must verify the three axioms', 'Using sequential characterization')}:</p>
            <div className="pl-6 border-l-2 border-slate-100 space-y-4">
              <BlockMath math="\lambda x_n + y_n \in F \xrightarrow[n \to +\infty]{} \lambda x + y \in \overline{F}" />
            </div>
            <div className="bg-slate-100 border border-slate-200 rounded-2xl p-6 text-slate-900">
              <p className="font-bold">{t('common.conclusion')} :</p>
              <p>{t('td1.ex10.q1')}.</p>
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
            3. {t('td1.ex10.q3')}
          </h3>
          
          <div className="space-y-6 text-slate-700">
            <p>{t('td1.ex10.q3')}. {t('td1.ex2.res3.abs').split('.')[0]}: <InlineMath math="B(a, r) \subset F" />.</p>
            <div className="pl-6 border-l-2 border-slate-100 space-y-4">
              <BlockMath math="x = \frac{2\|x\|}{r} (y - a) \in F" />
            </div>
            <div className="bg-slate-100 border border-slate-200 rounded-2xl p-6 text-slate-900">
              <p className="font-bold">{t('common.conclusion')} :</p>
              <p><InlineMath math="F = E" />.</p>
            </div>
          </div>
        </motion.section>

      </div>
    </main>
  );
};

export default TD1Ex10;
