import React from 'react';
import { motion } from 'framer-motion';
import { InlineMath } from '../components/Math';
import SetSeparationVisualizer from '../components/SetSeparationVisualizer';
import { useLanguage } from '../context/LanguageContext';

const TD1Ex8: React.FC = () => {
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
            <span className="bg-slate-900 text-white px-3 py-1 rounded-lg text-[10px] font-bold uppercase tracking-widest">{t('common.exercice')} 8</span>
            <h2 className="text-xl font-bold text-slate-900">{t('td1.ex8.title')}</h2>
          </div>
          <div className="text-slate-700 leading-relaxed space-y-4">
            <p>
              {t('metrics.hero.subtitle').split('universe')[0]} <InlineMath math="E" />.
            </p>
            <ol className="list-decimal list-inside space-y-2 font-medium">
              <li>{t('td1.ex8.q1')}</li>
              <li>{t('td1.ex8.q2')}</li>
            </ol>
          </div>
        </motion.section>

        {/* Visualizer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.05 }}
        >
          <SetSeparationVisualizer />
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
            1. {t('td1.ex8.q1')}
          </h3>
          
          <div className="space-y-6 text-slate-700">
            <p><InlineMath math="d(x, F) = \inf_{y \in F} d(x, y)" />. {t('td1.ex1.res1.intro')}:</p>
            <div className="pl-6 border-l-2 border-slate-100 space-y-4">
               <p>{t('td1.ex8.q1')}</p>
            </div>
            <div className="bg-slate-100 border border-slate-200 rounded-2xl p-6 text-slate-900">
              <p className="font-bold">{t('common.conclusion')} :</p>
              <p><InlineMath math="d(x, F) = 0 \iff x \in F" />.</p>
            </div>
          </div>
        </motion.section>

        {/* Resolution 2 */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white rounded-3xl border border-slate-200 p-8 shadow-sm"
        >
          <h3 className="text-lg font-bold text-slate-900 mb-6 flex items-center gap-2">
            <div className="w-1.5 h-6 bg-slate-900 rounded-full" />
            2. {t('td1.ex8.q2')}
          </h3>
          
          <div className="space-y-6 text-slate-700">
            <p>{t('td1.ex8.res2.desc')}</p>
            <div className="bg-slate-900 text-white rounded-2xl p-8 space-y-4">
              <h4 className="font-bold text-indigo-400 uppercase tracking-widest text-xs">{t('common.conclusion')}</h4>
              <p className="text-slate-300 leading-relaxed">
                {t('td1.viz.sep.normal_desc')}
              </p>
            </div>
          </div>
        </motion.section>

      </div>
    </main>
  );
};

export default TD1Ex8;
