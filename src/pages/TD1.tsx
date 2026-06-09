import React from 'react';
import { motion } from 'framer-motion';
import { BlockMath, InlineMath } from '../components/Math';
import DiscreteDistanceVisualizer from '../components/DiscreteDistanceVisualizer';
import { useLanguage } from '../context/LanguageContext';

const TD1: React.FC = () => {
  const { t } = useLanguage();

  return (
    <main className="min-h-screen bg-slate-50 py-20 px-6">
      <div className="max-w-4xl mx-auto space-y-12">
        
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-black text-slate-900 tracking-tight">{t('td1.title')}</h1>
          <p className="text-slate-500 font-medium uppercase tracking-[0.2em] text-sm">{t('td1.subtitle')}</p>
          <div className="h-1 w-20 bg-indigo-600 mx-auto rounded-full" />
        </div>

        {/* Exercise Statement */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-3xl border border-slate-200 p-8 shadow-sm"
        >
          <div className="flex items-center gap-3 mb-6">
            <span className="bg-slate-900 text-white px-3 py-1 rounded-lg text-[10px] font-bold uppercase tracking-widest">Exercice 1</span>
            <h2 className="text-xl font-bold text-slate-900">{t('td1.ex1.title')}</h2>
          </div>
          <div className="text-slate-700 leading-relaxed space-y-4">
            <p>
              {t('td1.ex1.stmt')}
            </p>
            <BlockMath math="d(x, y) = \begin{cases} 1 & \text{si } x \neq y \\ 0 & \text{si } x = y \end{cases}" />
            <ol className="list-decimal list-inside space-y-2 font-medium">
              <li>{t('td1.ex1.q1')}</li>
              <li>{t('td1.ex1.q2')}</li>
            </ol>
          </div>
        </motion.section>

        {/* Visualizer */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.05 }}
        >
          <DiscreteDistanceVisualizer />
        </motion.div>

        {/* Resolution 1 */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-white rounded-3xl border border-slate-200 p-8 shadow-sm"
        >
          <h3 className="text-lg font-bold text-slate-900 mb-6 flex items-center gap-2">
            <div className="w-1.5 h-6 bg-indigo-600 rounded-full" />
            {t('td1.ex1.res1.title')}
          </h3>
          
          <div className="space-y-8 text-slate-700">
            <p>{t('td1.ex1.res1.intro')}</p>
            
            <div className="space-y-4">
              <h4 className="font-bold text-slate-900 flex items-center gap-2">
                <span className="text-indigo-600 text-xs">●</span> {t('td1.ex1.res1.sep')}
              </h4>
              <p className="pl-6 border-l-2 border-slate-100">
                {t('td1.ex1.res1.sep_desc')}
              </p>
            </div>

            <div className="space-y-4">
              <h4 className="font-bold text-slate-900 flex items-center gap-2">
                <span className="text-indigo-600 text-xs">●</span> {t('td1.ex1.res1.sym')}
              </h4>
              <div className="pl-6 border-l-2 border-slate-100 space-y-2">
                <p>{t('td1.ex1.res1.sym_desc1')}</p>
                <p>{t('td1.ex1.res1.sym_desc2')}</p>
                <p>Donc, <InlineMath math="d(x, y) = d(y, x)" />.</p>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-bold text-slate-900 flex items-center gap-2">
                <span className="text-indigo-600 text-xs">●</span> {t('td1.ex1.res1.tri')} <InlineMath math="d(x, z) \le d(x, y) + d(y, z)" />
              </h4>
              <div className="pl-6 border-l-2 border-slate-100 space-y-4">
                <div>
                  <p className="italic mb-2 text-slate-500 underline decoration-indigo-200 underline-offset-4">{t('td1.ex1.res1.tri_cas1')}</p>
                  <p>{t('td1.ex1.res1.tri_cas1_desc')} L'inégalité est vérifiée.</p>
                </div>
                <div>
                  <p className="italic mb-2 text-slate-500 underline decoration-indigo-200 underline-offset-4">{t('td1.ex1.res1.tri_cas2')}</p>
                  <p className="mb-2">{t('td1.ex1.res1.tri_cas2_desc1')}</p>
                  <p className="mb-2">{t('td1.ex1.res1.tri_cas2_desc2')}</p>
                  <p>{t('td1.ex1.res1.tri_cas2_desc3')} L'inégalité est vérifiée.</p>
                </div>
              </div>
            </div>

            <div className="bg-indigo-50 border border-indigo-100 rounded-2xl p-6">
              <p className="font-bold text-indigo-900">{t('td1.ex1.res1.conc')}</p>
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
            <div className="w-1.5 h-6 bg-indigo-600 rounded-full" />
            {t('td1.ex1.res2.title')}
          </h3>
          
          <div className="space-y-8 text-slate-700">
            <div className="space-y-4">
              <h4 className="font-bold text-slate-900 flex items-center gap-2 underline decoration-indigo-500 underline-offset-4 decoration-2">
                {t('td1.ex1.res2.open')}
              </h4>
              <div className="space-y-4">
                <p>{t('td1.ex1.res2.open_desc1')}</p>
                <BlockMath math="B(x, 1/2) = \{ y \in E \mid d(x, y) < 1/2 \}" />
                <p>{t('td1.ex1.res2.open_desc2')}</p>
                <BlockMath math="B(x, 1/2) = \{ x \}" />
                <p>{t('td1.ex1.res2.open_desc3')}</p>
                <BlockMath math="A = \bigcup_{x \in A} \{ x \}" />
                <p className="font-bold text-slate-900">{t('td1.ex1.res2.open_conc')}</p>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-bold text-slate-900 flex items-center gap-2 underline decoration-indigo-500 underline-offset-4 decoration-2">
                {t('td1.ex1.res2.closed')}
              </h4>
              <div className="space-y-4">
                <p>{t('td1.ex1.res2.closed_desc')}</p>
                <p className="font-bold text-slate-900">{t('td1.ex1.res2.closed_conc')}</p>
              </div>
            </div>

            <div className="bg-slate-900 text-white rounded-2xl p-8 space-y-4">
              <h4 className="font-bold text-indigo-400 uppercase tracking-widest text-xs">Conclusion Générale</h4>
              <p className="text-slate-300 leading-relaxed">
                {t('td1.ex1.res2.final')}
              </p>
            </div>
          </div>
        </motion.section>

      </div>
    </main>
  );
};

export default TD1;
