import React from 'react';
import { motion } from 'framer-motion';
import { BlockMath, InlineMath } from '../components/Math';
import DistanceFunctionVisualizer from '../components/DistanceFunctionVisualizer';
import { useLanguage } from '../context/LanguageContext';

const TD1Ex3: React.FC = () => {
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
            <span className="bg-slate-900 text-white px-3 py-1 rounded-lg text-[10px] font-bold uppercase tracking-widest">{t('common.exercice')} 3</span>
            <h2 className="text-xl font-bold text-slate-900">{t('td1.ex3.title')}</h2>
          </div>
          <div className="text-slate-700 leading-relaxed space-y-4">
            <p>
              {t('td1.ex3.stmt')}
            </p>
            <BlockMath math="d(x, y) = \left| \frac{1}{x} - \frac{1}{y} \right|" />
            <ol className="list-decimal list-inside space-y-2 font-medium">
              <li>{t('td1.ex3.q1')}</li>
              <li>
                <span className="block pl-5 mt-1">{t('td1.ex3.q2a')}</span>
                <span className="block pl-5 mt-1">{t('td1.ex3.q2b')}</span>
              </li>
              <li>
                <span className="block pl-5 mt-1">{t('td1.ex3.q3a')}</span>
                <span className="block pl-5 mt-1">{t('td1.ex3.q3b')}</span>
              </li>
              <li>{t('td1.ex3.q4')}</li>
            </ol>
          </div>
        </motion.section>

        {/* Visualizer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.05 }}
        >
          <DistanceFunctionVisualizer />
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
            {t('td1.ex3.res1.title')}
          </h3>
          
          <div className="space-y-4 text-slate-700">
            <p>{t('td1.ex2.res1.intro')}</p>
            <ul className="space-y-4 pl-6">
              <li>
                <span className="font-bold text-slate-900">● {t('td1.ex1.res1.sep')}</span> <InlineMath math="d(x, y) = 0 \iff 1/x = 1/y \iff x = y" />.
              </li>
              <li>
                <span className="font-bold text-slate-900">● {t('td1.ex1.res1.sym')}</span> <InlineMath math="d(x, y) = |1/x - 1/y| = |1/y - 1/x| = d(y, x)" />.
              </li>
              <li>
                <span className="font-bold text-slate-900">● {t('td1.ex1.res1.tri')}</span> 
                <div className="mt-2 pl-4 border-l-2 border-slate-100">
                  <InlineMath math="d(x, z) \le |1/x - 1/y| + |1/y - 1/z| = d(x, y) + d(y, z)" />.
                </div>
              </li>
            </ul>
            <div className="bg-slate-100 border border-slate-200 rounded-2xl p-6 text-slate-900">
              <p className="font-bold">{t('common.conclusion')} :</p>
              <p><InlineMath math="d" /> {t('td1.ex1.res1.conc').split(':')[1] || t('td1.ex1.res1.conc')}</p>
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
            {t('td1.ex3.res2.title')}
          </h3>
          
          <div className="space-y-8 text-slate-700">
            <div>
              <h4 className="font-bold text-slate-900 mb-4 underline underline-offset-4 decoration-slate-300">{t('td1.ex3.res2.a_title')}</h4>
              <div className="space-y-4 pl-4 border-l-2 border-slate-100">
                <p>{t('td1.ex3.res2.a_desc')}</p>
                <BlockMath math="\lim_{n \to +\infty} \frac{1}{x_n} = \frac{1}{l} \implies \frac{1}{l} \ge \frac{1}{2} \implies l \le 2" />
                <p className="font-bold text-slate-900">{t('common.conclusion')} : <InlineMath math="F" /> {t('nav.metrics.closed').split('&')[0].toLowerCase()}.</p>
              </div>
            </div>

            <div>
              <h4 className="font-bold text-slate-900 mb-4 underline underline-offset-4 decoration-slate-300">{t('td1.ex3.res2.b_title')}</h4>
              <div className="space-y-4 pl-4 border-l-2 border-slate-100">
                <p>{t('td1.ex3.res2.b_desc')}</p>
                <BlockMath math="d(v_n, 1) = n - 1 \xrightarrow[n \to +\infty]{} +\infty" />
                <p className="font-bold text-slate-900">{t('common.conclusion')} : <InlineMath math="F" /> {t('td1.ex3.q2b').split('Show that')[1] || t('td1.ex3.q2b')}.</p>
              </div>
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
            {t('td1.ex3.res3.title')}
          </h3>
          
          <div className="space-y-8 text-slate-700">
            <div>
              <h4 className="font-bold text-slate-900 mb-4 underline underline-offset-4 decoration-slate-300">{t('td1.ex3.q3a_title')}</h4>
              <div className="space-y-4 pl-4 border-l-2 border-slate-100">
                <BlockMath math="d(u_n, u_{n+p}) = \frac{p}{n(n+p)} = \frac{1}{n} \left( \frac{p}{n+p} \right) \le \frac{1}{n}" />
              </div>
            </div>

            <div>
              <h4 className="font-bold text-slate-900 mb-4 underline underline-offset-4 decoration-slate-300">{t('td1.ex3.q3b_title')}</h4>
              <div className="space-y-4 pl-4 border-l-2 border-slate-100">
                <p>{t('td1.ex3.q3b')}</p>
                <BlockMath math="\forall \epsilon > 0, \exists N \ge 1/\epsilon, \forall q \ge n \ge N, d(u_n, u_q) \le 1/n \le \epsilon" />
              </div>
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
            {t('td1.ex3.res4.title')}
          </h3>
          
          <div className="space-y-6 text-slate-700">
            <p>{t('td1.ex3.res4.desc')}</p>
            <BlockMath math="\frac{1}{l} = \lim_{n \to +\infty} \frac{1}{n} = 0" />
            
            <div className="bg-slate-900 text-white rounded-2xl p-8 space-y-4">
              <h4 className="font-bold text-indigo-400 uppercase tracking-widest text-xs">{t('common.conclusion_gen')}</h4>
              <p className="text-slate-300 leading-relaxed">
                {t('td1.ex3.res4.desc').split('.')[0]}. {t('td1.ex2.res3.conc')}
              </p>
            </div>
          </div>
        </motion.section>

      </div>
    </main>
  );
};

export default TD1Ex3;
