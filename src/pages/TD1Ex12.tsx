import React from 'react';
import { motion } from 'framer-motion';
import { BlockMath, InlineMath } from '../components/Math';
import GLnConnectivityVisualizer from '../components/GLnConnectivityVisualizer';
import { useLanguage } from '../context/LanguageContext';

const TD1Ex12: React.FC = () => {
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
            <span className="bg-slate-900 text-white px-3 py-1 rounded-lg text-[10px] font-bold uppercase tracking-widest">{t('common.exercice')} 12</span>
            <h2 className="text-xl font-bold text-slate-900">{t('td1.ex12.title')}</h2>
          </div>
          <div className="text-slate-700 leading-relaxed space-y-4 font-medium">
            <p>
              {t('td1.ex12.res').split(':')[0]}: <InlineMath math="GL_n(\mathbb{R})" /> {t('nav.pathConnected').toLowerCase()} {t('landing.start').split(' ')[0].toLowerCase()} <InlineMath math="\mathcal{M}_n(\mathbb{R})" />.
            </p>
          </div>
        </motion.section>

        {/* Visualizer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.05 }}
        >
          <GLnConnectivityVisualizer />
        </motion.div>

        {/* Resolution */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-white rounded-3xl border border-slate-200 p-8 shadow-sm"
        >
          <h3 className="text-lg font-bold text-slate-900 mb-6 flex items-center gap-2">
            <div className="w-1.5 h-6 bg-slate-900 rounded-full" />
            {t('common.solution')}
          </h3>
          
          <div className="space-y-8 text-slate-700">
            <p>{t('td1.ex12.res')}</p>
            <div className="bg-slate-900 text-white rounded-2xl p-8 space-y-4">
              <h4 className="font-bold text-indigo-400 uppercase tracking-widest text-xs">{t('common.conclusion')}</h4>
              <p className="text-slate-300 leading-relaxed">
                {t('td1.ex12.res')}
              </p>
            </div>
          </div>
        </motion.section>

      </div>
    </main>
  );
};

export default TD1Ex12;
