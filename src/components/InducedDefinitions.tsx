import React from 'react';
import { InlineMath, BlockMath } from './Math';
import { Book, CheckCircle2 } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const InducedDefinitions: React.FC = () => {
  const { language } = useLanguage();

  const content = {
    EN: {
      title: "Formal Definitions",
      intro: "Let (E, T) be a topological space and A subset E. The induced topology on A is defined as:",
      inheritance: "Property Inheritance",
      openA: "Open in A",
      openDesc: "\"Intersection with parent open set\"",
      closedA: "Closed in A",
      closedDesc: "\"Intersection with parent closed set\"",
      neighA: "Neighborhoods",
      neighDesc: "\"Local property inheritance\"",
      finalVerdict: "Every property in the subspace is just the intersection of the parent's property with the subspace."
    },
    FR: {
      title: "Définitions Formelles",
      intro: "Soit (E, T) un espace topologique et A une partie de E. La topologie induite sur A est définie par :",
      inheritance: "Héritage des propriétés",
      openA: "Ouvert dans A",
      openDesc: "« Intersection avec un ouvert parent »",
      closedA: "Fermé dans A",
      closedDesc: "« Intersection avec un fermé parent »",
      neighA: "Voisinages",
      neighDesc: "« Héritage local des propriétés »",
      finalVerdict: "Chaque propriété dans le sous-espace est simplement l'intersection de la propriété parente avec le sous-espace."
    }
  };

  const curr = content[language];

  return (
    <section className="bg-slate-50 py-16 px-6">
      <div className="mx-auto max-w-4xl">
        <div className="rounded-[2.5rem] bg-white p-10 shadow-sm border border-slate-200">
          <div className="flex items-center gap-4 mb-10">
            <div className="h-12 w-12 bg-blue-100 rounded-2xl flex items-center justify-center text-blue-600">
              <Book className="w-6 h-6" />
            </div>
            <h2 className="text-3xl font-bold text-slate-900 tracking-tight">{curr.title}</h2>
          </div>

          <p className="text-lg text-slate-700 mb-8 leading-relaxed">
            {curr.intro}
          </p>

          <div className="bg-slate-50 p-6 rounded-3xl border border-slate-100 mb-12 shadow-inner">
             <BlockMath math="\mathcal{T}_A = \{O \cap A \mid O \in \mathcal{T}\}" />
          </div>

          <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-6">{curr.inheritance}</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
             <div className="p-6 bg-blue-50/30 rounded-3xl border border-blue-100 flex flex-col">
                <p className="font-bold text-blue-900 text-sm mb-3 uppercase tracking-tighter">{curr.openA}</p>
                <p className="text-xs text-slate-600 leading-relaxed italic mb-4">{curr.openDesc}</p>
                <div className="mt-auto">
                   <InlineMath math="O' \in \mathcal{T}_A \iff \exists O \in \mathcal{T}, \quad O' = O \cap A" />
                </div>
             </div>
             <div className="p-6 bg-slate-50 rounded-3xl border border-slate-200 flex flex-col">
                <p className="font-bold text-slate-900 text-sm mb-3 uppercase tracking-tighter">{curr.closedA}</p>
                <p className="text-xs text-slate-500 leading-relaxed italic mb-4">{curr.closedDesc}</p>
                <div className="mt-auto">
                   <InlineMath math="F' \text{ fermé dans } A \iff \exists F \text{ fermé dans } E, \quad F' = F \cap A" />
                </div>
             </div>
             <div className="p-6 bg-indigo-50/30 rounded-3xl border border-indigo-100 flex flex-col">
                <p className="font-bold text-indigo-900 text-sm mb-3 uppercase tracking-tighter">{curr.neighA}</p>
                <p className="text-xs text-slate-600 leading-relaxed italic mb-4">{curr.neighDesc}</p>
                <div className="mt-auto">
                   <InlineMath math="V' \in \mathcal{V}_A(x) \iff \exists V \in \mathcal{V}_E(x), \quad V' = V \cap A" />
                </div>
             </div>
          </div>

          <div className="mt-12 flex items-center gap-3 bg-emerald-50 px-6 py-3 rounded-2xl border border-emerald-100 shadow-sm">
             <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
             <p className="text-xs text-emerald-800 font-bold uppercase tracking-tight">
               {curr.finalVerdict}
             </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InducedDefinitions;
