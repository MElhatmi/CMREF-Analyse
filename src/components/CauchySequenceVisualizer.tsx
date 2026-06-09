import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Activity, Ruler } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { InlineMath } from './Math';

const CauchySequenceVisualizer: React.FC = () => {
  const { t } = useLanguage();
  const [nTerms, setNTerms] = useState(20);
  
  // f(x) = x / (1+|x|)
  const f = (x: number) => x / (1 + Math.abs(x));
  
  const points = Array.from({ length: nTerms }, (_, i) => ({
    n: i + 1,
    x: i + 1,
    y: f(i + 1)
  }));

  return (
    <div className="my-12 bg-slate-900 rounded-[2.5rem] p-8 text-white relative shadow-2xl border border-slate-800">
      <div className="relative z-10 space-y-6">
        <div>
          <h4 className="text-xl font-bold flex items-center gap-2">
            <Activity className="w-5 h-5 text-emerald-400" />
            {t('td1.ex2.viz.title')}
          </h4>
          <p className="text-slate-400 text-sm mt-1">
            {t('td1.ex2.viz.subtitle_1')} <InlineMath math="x_n = n" /> {t('td1.ex2.viz.subtitle_2')} <InlineMath math="\delta" />.
          </p>
        </div>

        <div className="bg-slate-950 rounded-3xl p-6 border border-slate-800">
          <div className="relative h-64 w-full flex items-end justify-between px-4 pb-8 overflow-hidden">
            {/* Axis */}
            <div className="absolute left-0 bottom-8 w-full h-px bg-slate-800" />
            <div className="absolute left-0 bottom-8 h-full w-px bg-slate-800" />
            
            {/* Target line f(x) = 1 */}
            <div className="absolute left-0 w-full border-t border-dashed border-emerald-500/30" style={{ bottom: 'calc(32px + 80%)' }}>
               <span className="absolute -top-6 right-0 text-[10px] font-bold text-emerald-500 uppercase tracking-widest text-sm">{t('td1.ex2.viz.limit')}</span>
            </div>

            {/* Bars representing f(n) */}
            <div className="flex w-full items-end justify-between h-full relative z-20">
              {points.map((p, i) => (
                <div key={p.n} className="flex flex-col items-center group relative h-full justify-end pb-8" style={{ width: `${100/nTerms}%` }}>
                  <motion.div 
                    initial={{ height: 0 }}
                    animate={{ height: `${p.y * 80}%` }}
                    className="w-1 md:w-3 bg-gradient-to-t from-indigo-600 to-indigo-400 rounded-t-sm"
                  />
                  <span className="absolute bottom-2 text-[8px] text-slate-600 font-bold">{p.n}</span>
                  
                  {/* Tooltip */}
                  <div className="absolute -top-10 scale-0 group-hover:scale-100 transition-transform bg-white text-slate-900 text-[10px] px-2 py-1 rounded font-bold whitespace-nowrap z-30 shadow-xl pointer-events-none border border-slate-200">
                    f({p.n}) = {p.y.toFixed(4)}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-slate-800/30 p-6 rounded-2xl border border-slate-800 space-y-3">
             <div className="flex items-center gap-2 text-indigo-400">
                <Ruler className="w-4 h-4" />
                <span className="text-xs font-bold uppercase tracking-widest">{t('td1.ex2.viz.paradox')}</span>
             </div>
             <p className="text-xs text-slate-400 leading-relaxed uppercase tracking-wide">
               {t('td1.ex2.viz.paradox_desc_1')} <InlineMath math="x_n = n" /> {t('td1.ex2.viz.paradox_desc_2')} <InlineMath math="f(x_n)" /> {t('td1.ex2.viz.paradox_desc_3')}
             </p>
          </div>
          <div className="bg-slate-800/30 p-6 rounded-2xl border border-slate-800 space-y-3">
             <div className="flex items-center gap-2 text-red-400">
                <Activity className="w-4 h-4" />
                <span className="text-xs font-bold uppercase tracking-widest">{t('td1.ex2.viz.noncomp')}</span>
             </div>
             <p className="text-xs text-slate-400 leading-relaxed uppercase tracking-wide">
               {t('td1.ex2.viz.noncomp_desc_1')} <InlineMath math="l" /> {t('td1.ex2.viz.noncomp_desc_2')} <InlineMath math="f(l)=1" />. {t('td1.ex2.viz.noncomp_desc_3')}
             </p>
          </div>
        </div>
        
        <div className="flex justify-center pt-4">
           <input 
             type="range" min="5" max="50" value={nTerms} 
             onChange={(e) => setNTerms(parseInt(e.target.value))}
             className="w-full max-w-xs accent-indigo-500 h-1 bg-slate-800 rounded-lg appearance-none cursor-pointer"
           />
           <span className="ml-4 text-[10px] font-bold text-slate-500 uppercase tracking-widest">{t('td1.ex2.viz.terms')} {nTerms}</span>
        </div>
      </div>
    </div>
  );
};

export default CauchySequenceVisualizer;
