import React from 'react';
import { InlineMath, BlockMath } from './Math';
import { RefreshCw, Layout } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Duality: React.FC = () => {
  const { language } = useLanguage();

  const content = {
    EN: {
      title: "Core Identities & Duality",
      prop3Title: "Open vs. Closed Equivalence",
      prop4Title: "Topological Duality",
      dualityDesc: "Complement of closure = Interior of complement",
      important: "Important:",
      boundaryLogic: "A set and its complement always share the exact same boundary."
    },
    FR: {
      title: "Identités Fondamentales & Dualité",
      prop3Title: "Équivalence Ouvert/Fermé",
      prop4Title: "Dualité Topologique",
      dualityDesc: "Complémentaire de l'adhérence = Intérieur du complémentaire",
      important: "Important :",
      boundaryLogic: "Un ensemble et son complémentaire ont toujours exactement la même frontière."
    }
  };

  const curr = content[language];

  return (
    <section className="bg-white py-24 px-6">
      <div className="mx-auto max-w-5xl">
        <div className="flex items-center gap-4 mb-12">
          <div className="h-12 w-12 bg-slate-100 rounded-2xl flex items-center justify-center text-slate-600">
            <RefreshCw className="w-6 h-6" />
          </div>
          <h2 className="text-3xl font-bold text-slate-900">{curr.title}</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-slate-50 p-8 rounded-[2.5rem] border border-slate-100 shadow-sm transition-all hover:shadow-md">
            <div className="flex items-center gap-2 mb-6">
              <Layout className="w-4 h-4 text-indigo-500" />
              <span className="text-xs font-bold uppercase tracking-widest text-slate-400">Proposition 3</span>
            </div>
            <h4 className="text-xl font-bold text-slate-900 mb-6">{curr.prop3Title}</h4>
            <div className="space-y-4 text-sm">
               <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-100 flex items-center justify-center">
                  <InlineMath math="A \text{ est ouvert} \iff A = \mathring{A}" />
               </div>
               <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-100 flex items-center justify-center">
                  <InlineMath math="A \text{ est fermé} \iff A = \overline{A}" />
               </div>
            </div>
          </div>

          <div className="bg-slate-900 p-8 rounded-[2.5rem] text-white shadow-2xl">
            <div className="flex items-center gap-2 mb-6 text-slate-500">
              <RefreshCw className="w-4 h-4" />
              <span className="text-xs font-bold uppercase tracking-widest">Proposition 4</span>
            </div>
            <h4 className="text-xl font-bold mb-6">{curr.prop4Title}</h4>
            <div className="space-y-4">
               <div className="bg-white/5 p-4 rounded-xl border border-white/10 text-sm">
                  <BlockMath math="\mathcal{C}_E(\overline{A}) = \mathring{\mathcal{C}_E(A)}" />
                  <p className="text-center text-[10px] text-slate-400 mt-2 uppercase tracking-widest font-bold">{curr.dualityDesc}</p>
               </div>
               <div className="bg-white/5 p-4 rounded-xl border border-white/10 text-sm">
                  <BlockMath math="\mathcal{C}_E(\mathring{A}) = \overline{\mathcal{C}_E(A)}" />
               </div>
            </div>
          </div>
        </div>

        <div className="bg-red-50 p-6 rounded-2xl border border-red-100 flex items-center justify-center">
           <p className="text-red-900 font-bold text-sm">
             <strong>{curr.important}</strong> <InlineMath math="\text{Fr}(A) = \text{Fr}(\mathcal{C}_E(A))" />. {curr.boundaryLogic}
           </p>
        </div>
      </div>
    </section>
  );
};

export default Duality;
