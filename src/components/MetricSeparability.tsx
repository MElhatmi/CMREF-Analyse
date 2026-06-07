import React from 'react';
import { InlineMath } from './Math';
import { Definition, Example } from './MathBlocks';
import { useLanguage } from '../context/LanguageContext';
import { Network, Sparkles } from 'lucide-react';

const MetricSeparability: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="bg-white py-24 px-6 overflow-hidden">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-3xl font-bold text-slate-900 mb-10 tracking-tight">{t('metrics.neigh.sep.title')}</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-16">
          <div className="space-y-8">
            <Definition title="Définition 11: Espace séparable">
              <p className="mb-6">{t('metrics.neigh.sep.desc')}</p>
              <div className="bg-indigo-50/50 p-6 rounded-2xl border border-indigo-100 space-y-4">
                  <p className="text-xs text-indigo-700 leading-relaxed font-medium">
                    (E, d) is <strong>separable</strong> if there exists <InlineMath math="D \subset E" /> such that:
                  </p>
                  <ol className="list-decimal pl-5 space-y-2 text-sm text-indigo-900">
                     <li><InlineMath math="D" /> is <strong>countable</strong> (can be listed).</li>
                     <li><InlineMath math="D" /> is <strong>dense</strong> in E (<InlineMath math="\overline{D} = E" />).</li>
                  </ol>
              </div>
            </Definition>

            <Example title="Example 3: Separability of ℝ">
                <div className="flex gap-4 items-center">
                   <div className="h-10 w-10 rounded-xl bg-blue-600 flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-blue-200">ℚ</div>
                   <p className="text-sm text-slate-600 leading-relaxed">
                      <InlineMath math="\mathbb{R}" /> is separable because the rational numbers <InlineMath math="\mathbb{Q}" /> are <strong>countable</strong> and <strong>dense</strong> in <InlineMath math="\mathbb{R}" />.
                   </p>
                </div>
            </Example>
          </div>

          <div className="bg-slate-900 rounded-[3rem] p-10 text-white relative overflow-hidden shadow-2xl">
             <div className="absolute top-0 right-0 p-8 opacity-10">
                <Network className="w-48 h-48" />
             </div>
             <div className="relative z-10">
                <h4 className="text-xl font-bold mb-6 flex items-center gap-2">
                   <Sparkles className="w-5 h-5 text-amber-300" />
                   The Compact Link
                </h4>
                <p className="text-indigo-100 text-sm leading-relaxed mb-8">
                   Separability is a vital structural property that prevents a space from being "too massive" to explore with sequences.
                </p>
                <div className="bg-white/10 p-6 rounded-2xl border border-white/20 italic">
                   <p className="text-sm text-blue-300">
                     <strong>Theorem:</strong> Every compact metric space is separable.
                   </p>
                </div>
                <div className="mt-8 flex items-center gap-3 bg-blue-600/20 p-4 rounded-xl border border-blue-500/30">
                   <div className="w-2 h-2 bg-blue-400 rounded-full animate-ping" />
                   <p className="text-[10px] font-bold uppercase tracking-widest text-blue-200">Key intuition for Functional Analysis</p>
                </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MetricSeparability;
