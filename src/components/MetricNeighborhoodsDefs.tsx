import React from 'react';
import { InlineMath, BlockMath } from './Math';
import { Definition, Property, Remark, Proposition } from './MathBlocks';
import { useLanguage } from '../context/LanguageContext';
import { HelpCircle, Layers, Grid } from 'lucide-react';

const MetricNeighborhoodsDefs: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="bg-slate-50 py-16 px-6">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-3xl font-bold text-slate-900 mb-10 tracking-tight">{t('metrics.neigh.def.title')}</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <Definition title="Définition 6: Voisinage">
              <p className="mb-4">{t('metrics.neigh.def.intro')}</p>
              <div className="bg-white/50 p-4 rounded-xl border border-slate-200">
                <BlockMath math="V \in \mathcal{V}(a) \iff \exists r > 0, \quad B(a, r) \subset V" />
              </div>
              <p className="mt-4 text-xs text-slate-500 italic">
                Note: An open set is a neighborhood to all of its points.
              </p>
            </Definition>

            <Property title="Propriétés 2: The Interior">
               <ul className="list-decimal pl-5 space-y-3 text-sm text-slate-600">
                 <li>The interior <InlineMath math="\mathring{A}" /> is always an <strong>open set</strong>.</li>
                 <li>A set <InlineMath math="A" /> is open <InlineMath math="\iff A = \mathring{A}" />.</li>
                 <li>If <InlineMath math="A \subset B" />, then <InlineMath math="\mathring{A} \subset \mathring{B}" />.</li>
               </ul>
            </Property>
          </div>

          <div className="space-y-8">
             <Remark title={t('metrics.neigh.q.title')}>
                <div className="flex gap-4 items-start">
                   <HelpCircle className="w-6 h-6 text-amber-500 shrink-0" />
                   <div>
                      <p className="mb-4">{t('metrics.neigh.q.desc')}</p>
                      <div className="bg-amber-50/50 p-4 rounded-xl border border-amber-100 flex items-center justify-center">
                         <BlockMath math="\mathring{\mathbb{Q}} = \emptyset, \quad \mathring{\mathbb{R} \setminus \mathbb{Q}} = \emptyset" />
                      </div>
                   </div>
                </div>
             </Remark>

             <div className="bg-white p-8 rounded-[2.5rem] border border-slate-200 shadow-sm">
                <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-6 flex items-center gap-2">
                   <Grid className="w-4 h-4 text-indigo-500" />
                   Global & Local Bases
                </h3>
                <div className="space-y-6">
                   <div className="p-4 bg-indigo-50/30 rounded-2xl border border-indigo-100">
                      <h5 className="text-[10px] font-bold text-indigo-700 uppercase mb-2">Base of Open Sets</h5>
                      <p className="text-xs text-slate-600 leading-relaxed mb-4">
                        Every open set can be built by unions of basic sets.
                      </p>
                      <div className="bg-white/60 p-2 rounded text-[10px] font-mono text-center border border-indigo-100">
                        <InlineMath math="U = \bigcup B_i, \quad B_i \in \mathcal{B}" />
                      </div>
                   </div>
                   <div className="p-4 bg-blue-50/30 rounded-2xl border border-blue-100">
                      <h5 className="text-[10px] font-bold text-blue-700 uppercase mb-2">Base of Neighborhoods</h5>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        Shrinking balls form a perfect local base:
                      </p>
                      <div className="mt-2 bg-white/60 p-2 rounded text-[10px] font-mono text-center border border-blue-100">
                        <InlineMath math="\mathcal{B}_x = \{ B(x, 1/n) \mid n \in \mathbb{N}^* \}" />
                      </div>
                   </div>
                </div>
             </div>
          </div>
        </div>

        <div className="mt-12">
          <Proposition title="Proposition 6: The Basic Set Sandwich">
             <div className="flex flex-col md:flex-row gap-8 items-center text-slate-600 leading-relaxed">
                <div className="md:w-2/3">
                  <p className="mb-4">
                    <InlineMath math="\mathcal{B}" /> is a base if and only if for every open set <InlineMath math="U" /> and every <InlineMath math="x \in U" />, there is a basic set <InlineMath math="V \in \mathcal{B}" /> that sneaks perfectly in between:
                  </p>
                  <div className="bg-slate-900 text-blue-400 p-4 rounded-xl border border-slate-800 text-center font-mono text-sm">
                    <InlineMath math="x \in V \subset U" />
                  </div>
                </div>
                <div className="md:w-1/3 bg-blue-600 rounded-3xl p-6 text-white shadow-xl flex items-center justify-center">
                   <div className="text-center">
                      <Layers className="w-10 h-10 mx-auto mb-4" />
                      <p className="text-[10px] font-bold uppercase tracking-widest">Theorem</p>
                      <p className="font-bold text-sm">Open balls form a base of E.</p>
                   </div>
                </div>
             </div>
          </Proposition>
        </div>
      </div>
    </section>
  );
};

export default MetricNeighborhoodsDefs;
