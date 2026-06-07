import React from 'react';
import { InlineMath } from './Math';
import { Theorem } from './MathBlocks';
import { useLanguage } from '../context/LanguageContext';
import { Zap, Magnet, Gauge } from 'lucide-react';

const MetricFixedPointTheorem: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="bg-white py-24 px-6 overflow-hidden">
      <div className="mx-auto max-w-4xl">
        <h2 className="text-3xl font-bold text-slate-900 mb-10 tracking-tight">{t('metrics.complete.fixed.title')}</h2>
        
        <Theorem title="Theorem 12: Picard-Banach Fixed-Point Theorem">
           <p className="mb-8 font-medium text-slate-700 leading-relaxed italic">
             "A contractive function in a complete universe is an attractor: all paths lead to a single destination."
           </p>
           <p className="mb-6 text-sm">
             Let <InlineMath math="(E, d)" /> be a <strong>complete</strong> metric space, and <InlineMath math="f: E \to E" /> be a <InlineMath math="k" />-contractive function (ratio <InlineMath math="0 < k < 1" />).
           </p>
           
           <div className="space-y-6">
              <div className="bg-white p-6 rounded-2xl border border-indigo-100 shadow-inner flex gap-6 items-start">
                 <div className="h-10 w-10 bg-indigo-600 text-white rounded-xl flex items-center justify-center shrink-0">1</div>
                 <div>
                    <h5 className="font-bold text-slate-900 mb-1">Existence & Uniqueness</h5>
                    <p className="text-xs text-slate-500">
                      f admits exactly one unique fixed point <InlineMath math="a \in E" /> such that <InlineMath math="f(a) = a" />.
                    </p>
                 </div>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-indigo-100 shadow-inner flex gap-6 items-start">
                 <div className="h-10 w-10 bg-indigo-600 text-white rounded-xl flex items-center justify-center shrink-0">2</div>
                 <div>
                    <h5 className="font-bold text-slate-900 mb-1">Algorithmic Convergence</h5>
                    <p className="text-xs text-slate-500 mb-4">
                      For ANY starting point <InlineMath math="x_0" />, the sequence <InlineMath math="x_{n+1} = f(x_n)" /> will always converge to <InlineMath math="a" />.
                    </p>
                    <div className="bg-indigo-50/50 p-3 rounded-lg border border-indigo-100 flex justify-center">
                       <InlineMath math="x_n \to a" />
                    </div>
                 </div>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-indigo-100 shadow-inner flex gap-6 items-start">
                 <div className="h-10 w-10 bg-indigo-600 text-white rounded-xl flex items-center justify-center shrink-0">3</div>
                 <div>
                    <h5 className="font-bold text-slate-900 mb-1">Geometric Speed</h5>
                    <p className="text-xs text-slate-500 mb-4">
                       The error drops exponentially fast.
                    </p>
                    <div className="bg-emerald-50/50 p-3 rounded-lg border border-emerald-100 flex justify-center">
                       <InlineMath math="d(x_n, a) \le \frac{k^n}{1-k} d(x_1, x_0)" />
                    </div>
                 </div>
              </div>
           </div>
        </Theorem>

        <div className="mt-12 p-10 bg-slate-900 rounded-[3rem] text-white relative overflow-hidden shadow-2xl">
           <div className="absolute top-0 right-0 p-8 opacity-10">
              <Magnet className="w-48 h-48 text-blue-400" />
           </div>
           <div className="relative z-10">
              <h4 className="text-xl font-bold mb-6 flex items-center gap-3">
                 <Gauge className="w-6 h-6 text-blue-400" />
                 Iterated Power (Theorem 13)
              </h4>
              <p className="text-indigo-100 text-sm leading-relaxed mb-8">
                 The theorem still holds if <InlineMath math="f" /> is not a contraction, but some future iteration <InlineMath math="f^p" /> (applying the function p times) is contractive!
              </p>
              <div className="flex items-center gap-3 text-blue-400 font-mono text-[10px] uppercase tracking-widest">
                 <Zap className="w-4 h-4 animate-pulse" />
                 Fundamental for proving the existence of ODE solutions.
              </div>
           </div>
        </div>
      </div>
    </section>
  );
};

export default MetricFixedPointTheorem;
