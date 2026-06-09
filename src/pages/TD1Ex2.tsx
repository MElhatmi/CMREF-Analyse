import React from 'react';
import { motion } from 'framer-motion';
import { BlockMath, InlineMath } from '../components/Math';
import CauchySequenceVisualizer from '../components/CauchySequenceVisualizer';
import { useLanguage } from '../context/LanguageContext';

const TD1Ex2: React.FC = () => {
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
            <span className="bg-slate-900 text-white px-3 py-1 rounded-lg text-[10px] font-bold uppercase tracking-widest">{t('common.exercice')} 2</span>
            <h2 className="text-xl font-bold text-slate-900">{t('td1.ex2.title')}</h2>
          </div>
          <div className="text-slate-700 leading-relaxed space-y-4">
            <p>
              {t('td1.ex2.stmt')}
            </p>
            <BlockMath math="\delta(x, y) = \left| \frac{x}{1+|x|} - \frac{y}{1+|y|} \right| \quad (x, y) \in \mathbb{R}^2" />
            <ol className="list-decimal list-inside space-y-2 font-medium">
              <li>{t('td1.ex2.q1')}</li>
              <li>{t('td1.ex2.q2_1')} <InlineMath math="x_n = n" />. {t('td1.ex2.q2_2')} <InlineMath math="(x_n)" /> {t('td1.ex2.q2_3')} <InlineMath math="\delta" />.</li>
              <li>{t('td1.ex2.q3_1')} <InlineMath math="(x_n)" /> {t('td1.ex2.q3_2')} <InlineMath math="(\mathbb{R}, \delta)" />? {t('td1.ex2.q3_3')} <InlineMath math="(\mathbb{R}, \delta)" />?</li>
            </ol>
          </div>
        </motion.section>

        {/* Visualizer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.05 }}
        >
          <CauchySequenceVisualizer />
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
            {t('td1.ex2.res1.title')}
          </h3>
          
          <div className="space-y-8 text-slate-700">
            <p>
              {t('td1.ex2.res1.intro')}
            </p>
            
            <div className="space-y-4">
              <h4 className="font-bold text-slate-900 flex items-center gap-2">
                <span className="text-slate-900 text-xs">●</span> {t('td1.ex1.res1.sep')}
              </h4>
              <div className="pl-6 border-l-2 border-slate-100 space-y-2">
                <p><InlineMath math="\delta(x, y) = 0 \iff |f(x) - f(y)| = 0 \iff f(x) = f(y)" />.</p>
                <p>{t('td1.ex2.res1.sep')}</p>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-bold text-slate-900 flex items-center gap-2">
                <span className="text-slate-900 text-xs">●</span> {t('td1.ex1.res1.sym')}
              </h4>
              <p className="pl-6 border-l-2 border-slate-100">
                <InlineMath math="\delta(x, y) = |f(x) - f(y)| = |f(y) - f(x)| = \delta(y, x)" />.
              </p>
            </div>

            <div className="space-y-4">
              <h4 className="font-bold text-slate-900 flex items-center gap-2">
                <span className="text-slate-900 text-xs">●</span> {t('td1.ex1.res1.tri')}
              </h4>
              <div className="pl-6 border-l-2 border-slate-100 space-y-2">
                <p>{t('td1.ex2.res1.tri')}</p>
                <BlockMath math="\delta(x, z) = |f(x) - f(z)| = |(f(x) - f(y)) + (f(y) - f(z))|" />
                <BlockMath math="\delta(x, z) \le |f(x) - f(y)| + |f(y) - f(z)| = \delta(x, y) + \delta(y, z)" />
              </div>
            </div>

            <div className="bg-slate-100 border border-slate-200 rounded-2xl p-6 text-slate-900">
              <p className="font-bold">{t('common.conclusion')} :</p>
              <p><InlineMath math="\delta" /> {t('td1.ex1.res1.conc').split(':')[1] || t('td1.ex1.res1.conc')}</p>
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
            {t('td1.ex2.res2.title')}
          </h3>
          
          <div className="space-y-6 text-slate-700">
            <p>{t('td1.ex2.q2_1')} <InlineMath math="x_n = n" />. {t('td1.ex2.res2.desc')}</p>
            <BlockMath math="\lim_{n \to +\infty} f(x_n) = \lim_{n \to +\infty} \frac{n}{1+n} = 1" />
            <p>{t('td1.ex1.res1.intro').replace('axiomes d\'une distance', 'caractérisation')}</p>
            <BlockMath math="\forall \epsilon > 0, \exists N \in \mathbb{N}, \forall p, q \ge N, \quad |f(x_p) - f(x_q)| < \epsilon" />
            <p>{t('td1.ex2.q2_3').replace('is a', 'Equivalently:')}</p>
            <BlockMath math="\delta(x_p, x_q) < \epsilon" />
            
            <div className="bg-slate-100 border border-slate-200 rounded-2xl p-6 text-slate-900">
              <p className="font-bold">{t('common.conclusion')} :</p>
              <p>{t('td1.ex2.q2_2')} <InlineMath math="(x_n)" /> {t('td1.ex2.q2_3')} <InlineMath math="(\mathbb{R}, \delta)" />.</p>
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
            {t('td1.ex2.res3.title')}
          </h3>
          
          <div className="space-y-8 text-slate-700">
            <div className="space-y-4">
              <p>
                {t('td1.ex2.res3.abs')}
              </p>
              <BlockMath math="\lim_{n \to +\infty} |f(x_n) - f(l)| = 0 \implies f(l) = \lim_{n \to +\infty} f(x_n) = 1" />
              <p>{t('td1.ex2.res3.abs2').split(':')[0] + ':'}</p>
              <BlockMath math="\frac{l}{1+|l|} = 1" />
              
              <div className="pl-6 border-l-2 border-slate-100 space-y-4">
                <p>
                  <span className="font-bold">● Case 1 :</span> <InlineMath math="l \ge 0 \implies \frac{l}{1+l} = 1 \implies 0=1" /> ({t('td1.ex4.impossible')}).
                </p>
                <p>
                  <span className="font-bold">● Case 2 :</span> <InlineMath math="l < 0 \implies \frac{l}{1-l} = 1 \implies 2l=1 \implies l=1/2" />. ({t('td1.ex4.impossible')}).
                </p>
              </div>
            </div>

            <p>
              {t('td1.ex2.res3.abs2').split('.')[1] || ''}
            </p>

            <div className="bg-slate-900 text-white rounded-2xl p-8 space-y-4">
              <h4 className="font-bold text-indigo-400 uppercase tracking-widest text-xs">{t('common.conclusion_gen')}</h4>
              <p className="text-slate-300 leading-relaxed">
                {t('td1.ex2.res3.conc')}
              </p>
            </div>
          </div>
        </motion.section>

      </div>
    </main>
  );
};

export default TD1Ex2;
