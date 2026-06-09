import React from 'react';
import { motion } from 'framer-motion';
import { BlockMath, InlineMath } from '../components/Math';
import SetTopologyVisualizer from '../components/SetTopologyVisualizer';
import { useLanguage } from '../context/LanguageContext';

const TD1Ex5: React.FC = () => {
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
            <span className="bg-slate-900 text-white px-3 py-1 rounded-lg text-[10px] font-bold uppercase tracking-widest">{t('common.exercice')} 5</span>
            <h2 className="text-xl font-bold text-slate-900">{t('td1.ex5.title')}</h2>
          </div>
          <div className="text-slate-700 leading-relaxed space-y-4">
            <p>
              {t('td1.ex5.stmt').split('.')[0] + ':'}
            </p>
            <BlockMath math="A = \left\{ \frac{1}{k} : k \in \mathbb{N}^* \right\} \cup ]1, 2[ \cup (\mathbb{Q} \cap [2, 3[)" />
            <p>{t('td1.ex5.stmt').split('.')[1]}</p>
            <BlockMath math="A^c, \overline{A}, \mathring{A}, (\overline{A})^c, \overline{(A^c)}, \mathring{\overline{A}}, \overline{\mathring{A}}, (\mathring{A})^c, \mathring{(A^c)}" />
          </div>
        </motion.section>

        {/* Visualizer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.05 }}
        >
          <SetTopologyVisualizer />
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
            1. <InlineMath math="\overline{A}" /> & <InlineMath math="\mathring{A}" />
          </h3>
          
          <div className="space-y-6 text-slate-700">
            <p>{t('td1.ex5.res.adh')}</p>
            <BlockMath math="\overline{A} = \{0\} \cup \left\{ \frac{1}{k} \;\middle| k \ge 2 \right\} \cup [1, 3]" />
            <p>{t('td1.ex5.res.int')}</p>
            <BlockMath math="\mathring{A} = ]1, 2[" />
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
            2. {t('td1.ex7.title')}
          </h3>
          
          <div className="space-y-8 text-slate-700">
            <div className="space-y-4">
              <p><strong><InlineMath math="\mathring{(A^c)} = (\overline{A})^c" /></strong>:</p>
              <BlockMath math="(\overline{A})^c = ]-\infty, 0[ \cup \left( \bigcup_{k=1}^{+\infty} \left] \frac{1}{k+1}, \frac{1}{k} \right[ \right) \cup ]3, +\infty[" />
              <p><strong><InlineMath math="\overline{(A^c)} = (\mathring{A})^c" /></strong>:</p>
              <BlockMath math="(\mathring{A})^c = ]-\infty, 1] \cup [2, +\infty[" />
            </div>
          </div>
        </motion.section>

        {/* Resolution 4 */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-white rounded-3xl border border-slate-200 p-8 shadow-sm"
        >
          <h3 className="text-lg font-bold text-slate-900 mb-6 flex items-center gap-2">
            <div className="w-1.5 h-6 bg-slate-900 rounded-full" />
            {t('nav.metrics.compact').split(' ')[0]}
          </h3>
          
          <div className="space-y-6 text-slate-700">
            <p>{t('td1.ex5.res.comp')}</p>
            <div className="bg-slate-900 text-white rounded-2xl p-8 space-y-4">
              <h4 className="font-bold text-indigo-400 uppercase tracking-widest text-xs">{t('common.conclusion')}</h4>
              <p className="text-slate-300 leading-relaxed">
                <InlineMath math="\overline{A}" /> & <InlineMath math="\overline{\mathring{A}}" />.
              </p>
            </div>
          </div>
        </motion.section>

      </div>
    </main>
  );
};

export default TD1Ex5;
