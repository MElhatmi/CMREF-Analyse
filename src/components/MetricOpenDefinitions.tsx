import React from 'react';
import { InlineMath, BlockMath } from './Math';
import { Definition, Property, Warning, Proposition } from './MathBlocks';
import { useLanguage } from '../context/LanguageContext';
import { Cloud, ShieldCheck } from 'lucide-react';

const MetricOpenDefinitions: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="bg-slate-50 py-16 px-6">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-3xl font-bold text-slate-900 mb-10 tracking-tight">{t('metrics.open.def.title')}</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <Definition title="Définition 5: Espace ouvert">
              <p className="mb-4">{t('metrics.open.def.intro')}</p>
              <div className="bg-white/50 p-4 rounded-xl border border-slate-200">
                <BlockMath math="\forall a \in A, \exists r > 0 \text{ such that } B(a, r) \subset A" />
              </div>
              <p className="mt-4 text-xs text-slate-500 italic">
                Note: In a metric space, the open sets are formed by the arbitrary unions of open balls.
              </p>
            </Definition>

            <Proposition title="Proposition 1: Open Balls">
               <div className="flex gap-4 items-center">
                  <div className="h-10 w-10 rounded-xl bg-blue-600 flex items-center justify-center text-white shadow-lg shadow-blue-200">
                     <Cloud className="w-6 h-6" />
                  </div>
                  <p className="text-sm text-slate-600 font-medium italic">
                    "In a metric space, every open ball is mathematically an open set."
                  </p>
               </div>
            </Proposition>
          </div>

          <div className="space-y-8">
            <Property title="Propriétés 1: Stability">
               <ul className="list-decimal pl-5 space-y-3 text-sm text-slate-600">
                 <li><InlineMath math="\emptyset" /> and <InlineMath math="E" /> are open.</li>
                 <li>A <strong>finite intersection</strong> of open sets is open.</li>
                 <li>An <strong>arbitrary union</strong> of open sets is open.</li>
               </ul>
            </Property>

            <Warning title={t('metrics.open.warn.title')}>
               <p className="mb-4 text-sm leading-relaxed">{t('metrics.open.warn.desc')}</p>
               <div className="bg-white/50 p-4 rounded-xl border border-red-100 flex items-center justify-center">
                  <BlockMath math="\bigcap_{n=1}^{\infty} ]-1/n, 1/n[ = \{0\} \quad \text{(Not open!)}" />
               </div>
            </Warning>
          </div>
        </div>

        <div className="mt-12 bg-white p-8 rounded-[2.5rem] border border-slate-200 shadow-sm">
           <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="md:w-1/2">
                 <h3 className="text-xl font-bold text-slate-900 mb-4">{t('metrics.open.interior.title')}</h3>
                 <p className="text-sm text-slate-600 leading-relaxed mb-6">
                    {t('metrics.open.interior.desc')}
                 </p>
                 <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100 italic text-[10px] text-slate-500">
                    Propriétés 2: The interior <InlineMath math="\mathring{A}" /> is the largest open set contained in A. A set is open if and only if <InlineMath math="A = \mathring{A}" />.
                 </div>
              </div>
              <div className="md:w-1/2 bg-blue-600 rounded-3xl p-8 text-white relative overflow-hidden">
                 <div className="absolute top-0 right-0 p-4 opacity-10">
                    <ShieldCheck className="w-32 h-32" />
                 </div>
                 <h4 className="text-[10px] font-bold text-blue-200 uppercase tracking-widest mb-4">Interior Notation</h4>
                 <div className="bg-white/10 p-4 rounded-xl border border-white/20 text-center text-xl font-serif italic">
                    <InlineMath math="\mathring{A} = \{ a \in A \mid \exists r > 0, B(a, r) \subset A \}" />
                 </div>
              </div>
           </div>
        </div>
      </div>
    </section>
  );
};

export default MetricOpenDefinitions;
