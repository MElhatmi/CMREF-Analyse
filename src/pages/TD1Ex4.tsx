import React from 'react';
import { motion } from 'framer-motion';
import { BlockMath, InlineMath } from '../components/Math';
import SetConvergenceVisualizer from '../components/SetConvergenceVisualizer';
import { useLanguage } from '../context/LanguageContext';

const TD1Ex4: React.FC = () => {
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
            <span className="bg-slate-900 text-white px-3 py-1 rounded-lg text-[10px] font-bold uppercase tracking-widest">{t('common.exercice')} 4</span>
            <h2 className="text-xl font-bold text-slate-900">{t('td1.ex4.title')}</h2>
          </div>
          <div className="text-slate-700 leading-relaxed space-y-4">
            <p>
              {t('td1.ex4.stmt')}
            </p>
            <BlockMath math="A = \left\{ (-1)^n + \frac{1}{n} \;\middle|\; n \in \mathbb{N}^* \right\} \quad \text{et} \quad B = \left\{ \frac{1}{m} + \frac{1}{n} \;\middle|\; (n, m) \in \mathbb{N}^{*2} \right\}" />
          </div>
        </motion.section>

        {/* Visualizer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.05 }}
        >
          <SetConvergenceVisualizer />
        </motion.div>

        {/* Resolution A */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-white rounded-3xl border border-slate-200 p-8 shadow-sm"
        >
          <h3 className="text-lg font-bold text-slate-900 mb-6 flex items-center gap-2">
            <div className="w-1.5 h-6 bg-slate-900 rounded-full" />
            {t('td1.ex4.res.A_title')}
          </h3>
          
          <div className="space-y-6 text-slate-700">
            <p>
              {t('td1.ex4.res.A_desc')}
            </p>
            
            <div className="pl-6 border-l-2 border-slate-100 space-y-4">
              <p>Posons <InlineMath math="u_n = (-1)^n + \frac{1}{n}" /> pour tout <InlineMath math="n \in \mathbb{N}^*" />.</p>
              <p>{t('td1.ex2.res2.desc').split('.')[0]}:</p>
              <BlockMath math="u_{2k} = (-1)^{2k} + \frac{1}{2k} = 1 + \frac{1}{2k}" />
              <BlockMath math="\lim_{k \to +\infty} u_{2k} = 1" />
              
              <div className="space-y-2">
                <p>{t('td1.ex4.res.A_desc').split('.')[1]}</p>
                <ul className="list-disc list-inside pl-4 space-y-1">
                  <li>{t('td1.ex4.case_pair')} : <InlineMath math="1 + 1/n = 1 \implies 1/n = 0" /> ({t('td1.ex4.impossible')}).</li>
                  <li>{t('td1.ex4.case_impair')} : <InlineMath math="-1 + 1/n = 1 \implies 1/n = 2 \implies n = 1/2 \notin \mathbb{N}^*" /> ({t('td1.ex4.impossible')}).</li>
                </ul>
              </div>
            </div>

            <div className="bg-slate-100 border border-slate-200 rounded-2xl p-6 text-slate-900">
              <p className="font-bold">{t('common.conclusion')} :</p>
              <p>
                {t('td1.ex4.res.A_desc')}
              </p>
            </div>
          </div>
        </motion.section>

        {/* Resolution B */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white rounded-3xl border border-slate-200 p-8 shadow-sm"
        >
          <h3 className="text-lg font-bold text-slate-900 mb-6 flex items-center gap-2">
            <div className="w-1.5 h-6 bg-slate-900 rounded-full" />
            {t('td1.ex4.res.B_title')}
          </h3>
          
          <div className="space-y-6 text-slate-700">
            <p>{t('td1.ex4.res.B_desc')}</p>
            
            <div className="pl-6 border-l-2 border-slate-100 space-y-4">
              <p>Posons <InlineMath math="m = n" />. <InlineMath math="v_n = \frac{1}{n} + \frac{1}{n} = \frac{2}{n}" />.</p>
              <BlockMath math="\lim_{n \to +\infty} v_n = 0" />
              <p>{t('td1.ex4.impossible').replace('Impossible', 'But')} <InlineMath math="1/m + 1/n > 0" />.</p>
            </div>

            <div className="bg-slate-900 text-white rounded-2xl p-8 space-y-4">
              <h4 className="font-bold text-indigo-400 uppercase tracking-widest text-xs">{t('common.conclusion')}</h4>
              <p className="text-slate-300 leading-relaxed">
                {t('td1.ex4.res.B_desc')}
              </p>
            </div>
          </div>
        </motion.section>

      </div>
    </main>
  );
};

export default TD1Ex4;
