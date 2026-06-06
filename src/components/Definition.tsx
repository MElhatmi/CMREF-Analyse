import React from 'react';
import { InlineMath, BlockMath } from './Math';
import { Info, CheckCircle2 } from 'lucide-react';
import GlossaryTerm from './GlossaryTerm';
import { useLanguage } from '../context/LanguageContext';

const Definition: React.FC = () => {
  const { language } = useLanguage();

  const content = {
    EN: {
      title: "Formal Definition",
      intro: "Let E be a set. A topology on E is a collection T of subsets of E (i.e.,",
      powerSetTerm: "Power Set",
      powerSetDef: "The set of all possible subsets of E, denoted P(E).",
      introEnd: ") that satisfies three strict axioms:",
      axiom1: {
        title: "Axiom 1: The Extremes",
        desc: "The empty set and the entire space are in the topology."
      },
      axiom2: {
        title: "Axiom 2: Finite Intersections",
        desc: "The intersection of a finite number of sets from T is also in T."
      },
      axiom3: {
        title: "Axiom 3: Arbitrary Unions",
        desc: "The union of any collection (finite or infinite) of sets from T is also in T."
      },
      note: "Crucial Note:",
      noteDesc: "The elements that belong to T are officially called the open sets of E."
    },
    FR: {
      title: "Définition Formelle",
      intro: "Soit E un ensemble. Une topologie sur E est une collection T de parties de E (c'est-à-dire,",
      powerSetTerm: "Ensemble des parties",
      powerSetDef: "L'ensemble de tous les sous-ensembles possibles de E, noté P(E).",
      introEnd: ") qui satisfait trois axiomes stricts :",
      axiom1: {
        title: "Axiome 1 : Les Extrêmes",
        desc: "L'ensemble vide et l'espace entier sont dans la topologie."
      },
      axiom2: {
        title: "Axiome 2 : Intersections Finies",
        desc: "L'intersection d'un nombre fini d'ensembles de T est aussi dans T."
      },
      axiom3: {
        title: "Axiome 3 : Réunions Quelconques",
        desc: "La réunion de n'importe quelle collection (finie ou infinie) d'ensembles de T est aussi dans T."
      },
      note: "Note Cruciale :",
      noteDesc: "Les éléments qui appartiennent à T sont officiellement appelés les ouverts de E."
    }
  };

  const curr = content[language];

  return (
    <section className="bg-slate-50 py-16 px-6">
      <div className="mx-auto max-w-4xl">
        <div className="rounded-3xl bg-white p-8 shadow-sm border border-slate-200">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-8 w-1 bg-blue-600 rounded-full" />
            <h2 className="text-2xl font-bold text-slate-900 uppercase tracking-wider">{curr.title}</h2>
          </div>

          <div className="prose prose-slate max-w-none">
            <p className="text-lg text-slate-700 mb-6 leading-relaxed">
              {curr.intro} <GlossaryTerm term={curr.powerSetTerm} definition={curr.powerSetDef}><InlineMath math="\mathcal{T} \subset \mathcal{P}(E)" /></GlossaryTerm>{curr.introEnd}
            </p>

            <div className="space-y-6">
              <div className="bg-slate-50 p-6 rounded-xl border-l-4 border-blue-500 relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-10 transition-opacity">
                   <CheckCircle2 className="w-12 h-12 text-blue-600" />
                </div>
                <h3 className="text-lg font-bold text-blue-900 mb-2">{curr.axiom1.title}</h3>
                <p className="text-slate-700">{curr.axiom1.desc}</p>
                <BlockMath math="\emptyset \in \mathcal{T} \quad \text{and} \quad E \in \mathcal{T}" />
              </div>

              <div className="bg-slate-50 p-6 rounded-xl border-l-4 border-blue-500 relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-10 transition-opacity">
                   <CheckCircle2 className="w-12 h-12 text-blue-600" />
                </div>
                <h3 className="text-lg font-bold text-blue-900 mb-2">{curr.axiom2.title}</h3>
                <p className="text-slate-700">{curr.axiom2.desc}</p>
                <BlockMath math="\forall U, V \in \mathcal{T} \implies U \cap V \in \mathcal{T}" />
              </div>

              <div className="bg-slate-50 p-6 rounded-xl border-l-4 border-blue-500 relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-10 transition-opacity">
                   <CheckCircle2 className="w-12 h-12 text-blue-600" />
                </div>
                <h3 className="text-lg font-bold text-blue-900 mb-2">{curr.axiom3.title}</h3>
                <p className="text-slate-700">{curr.axiom3.desc}</p>
                <BlockMath math="\forall (U_i)_{i \in I} \text{ where } U_i \in \mathcal{T} \implies \bigcup_{i \in I} U_i \in \mathcal{T}" />
              </div>
            </div>

            <div className="mt-8 flex items-start gap-3 bg-blue-50 p-4 rounded-lg border border-blue-100">
              <Info className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
              <p className="text-blue-800 text-sm italic">
                <strong>{curr.note}</strong> {curr.noteDesc}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Definition;
