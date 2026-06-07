import React from 'react';
import { InlineMath } from './Math';
import { Warning, Example } from './MathBlocks';
import { useLanguage } from '../context/LanguageContext';
import { RefreshCw, AlertTriangle } from 'lucide-react';

const MetricSequencesTraps: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="bg-slate-50 py-16 px-6">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-3xl font-bold text-slate-900 mb-10 tracking-tight">{t('metrics.seq.trap.title')}</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <Warning title={t('metrics.seq.trap.osc')}>
             <div className="flex gap-4 items-start">
                <RefreshCw className="w-6 h-6 text-red-500 shrink-0" />
                <div>
                   <p className="text-sm leading-relaxed mb-4">
                     If a sequence has <strong>two or more</strong> values of adherence, it is impossible for it to converge.
                   </p>
                   <Example title="The Oscillator">
                      <div className="flex justify-between items-center bg-white/50 p-3 rounded-lg border border-red-100">
                         <InlineMath math="u_n = (-1)^n" />
                         <span className="text-[10px] font-bold text-red-600">Adherences: {"{"}-1, 1{"}"}</span>
                      </div>
                   </Example>
                </div>
             </div>
          </Warning>

          <Warning title={t('metrics.seq.trap.single')}>
             <div className="flex gap-4 items-start">
                <AlertTriangle className="w-6 h-6 text-amber-500 shrink-0" />
                <div>
                   <p className="text-sm leading-relaxed mb-4 font-bold">
                     One Value of Adherence \u2260 Convergence!
                   </p>
                   <p className="text-xs text-red-900 leading-relaxed mb-6 italic">
                     A sequence can have only one adherence point but still fail to converge by escaping to infinity.
                   </p>
                   <Example title="The Spike sequence">
                      <div className="bg-white/50 p-4 rounded-xl border border-amber-100 text-[10px] space-y-2">
                         <p>If n is even: <InlineMath math="u_{2k} = 0" /></p>
                         <p>If n is odd: <InlineMath math="u_{2k+1} = k" /></p>
                         <div className="pt-2 border-t border-amber-100 font-bold text-amber-700">
                            The only adherence point is 0, but it diverges.
                         </div>
                      </div>
                   </Example>
                </div>
             </div>
          </Warning>
        </div>
      </div>
    </section>
  );
};

export default MetricSequencesTraps;
