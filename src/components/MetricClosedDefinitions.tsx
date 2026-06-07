import React from 'react';
import { InlineMath, BlockMath } from './Math';
import { Definition, Property, Warning } from './MathBlocks';
import { useLanguage } from '../context/LanguageContext';
import { AlertCircle, Square, Circle } from 'lucide-react';

const MetricClosedDefinitions: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="bg-slate-50 py-16 px-6">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-3xl font-bold text-slate-900 mb-10 tracking-tight">{t('metrics.closed.def.title')}</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <Definition title="Définition 7: Espace fermé">
              <p className="mb-4">{t('metrics.closed.def.intro')}</p>
              <div className="bg-white/50 p-4 rounded-xl border border-slate-200">
                <BlockMath math="F \subset E \text{ is closed } \iff \mathcal{C}_E F \text{ is open.}" />
              </div>
            </Definition>

            <Property title="Propriétés 3: Stability">
               <ul className="list-decimal pl-5 space-y-3 text-sm text-slate-600">
                 <li><InlineMath math="\emptyset" /> and <InlineMath math="E" /> are closed sets.</li>
                 <li>A <strong>finite union</strong> of closed sets is closed.</li>
                 <li>An <strong>arbitrary intersection</strong> of closed sets is closed.</li>
               </ul>
            </Property>
          </div>

          <div className="space-y-8">
            <Warning title={t('metrics.closed.warn.title')}>
              <p className="mb-4">{t('metrics.closed.warn.desc')}</p>
              <div className="bg-white p-4 rounded-xl border border-red-100 flex items-center justify-center">
                 <BlockMath math="\bigcup_{n=1}^{\infty} [1/n, 1] = ]0, 1] \quad \text{(Not closed!)}" />
              </div>
            </Warning>

            <div className="bg-white p-8 rounded-[2.5rem] border border-slate-200 shadow-sm">
               <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-6">Shapes & Anomalies</h3>
               <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100">
                     <div className="flex items-center gap-2 mb-2 text-indigo-600">
                        <Square className="w-4 h-4" />
                        <span className="text-[10px] font-bold uppercase">Closed Ball</span>
                     </div>
                     <p className="text-[10px] text-slate-500 italic">Always closed in any metric space.</p>
                  </div>
                  <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100">
                     <div className="flex items-center gap-2 mb-2 text-blue-600">
                        <Circle className="w-4 h-4" />
                        <span className="text-[10px] font-bold uppercase">Sphere</span>
                     </div>
                     <p className="text-[10px] text-slate-500 italic">Exactly distance r. Always closed.</p>
                  </div>
               </div>
               <div className="mt-6 p-4 bg-amber-50 rounded-2xl border border-amber-100 flex items-start gap-3">
                  <AlertCircle className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                  <p className="text-[10px] text-amber-800 leading-relaxed italic">
                    "Open" and "Closed" are not like doors. Some sets are both (Clopen: \u2205, E) and some are neither ([0, 1[).
                  </p>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MetricClosedDefinitions;
