import React from 'react';
import { Theorem } from './MathBlocks';
import { Sparkles, ArrowRight, Maximize2 } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const CompactContinuity: React.FC = () => {
  const { language } = useLanguage();

  const content = {
    EN: {
      title: "3.2 Properties of Continuous Functions on a Compact",
      theorem2: "Theorem 2: Continuous Image",
      theorem2_desc: "Let (E, TE) be a compact space and (F, TF) a separated space. For any continuous function f: E \u2192 F, the direct image f(E) is compact in F.",
      intuitionTitle: "Intuition",
      intuitionDesc: "A continuous function is like a smooth stretching of a material. If you start with a \"contained\" compact space, no matter how much you stretch or bend it (without tearing), it will remain \"contained\" and closed in the target space.",
      consequenceTitle: "The Fundamental Consequence",
      evtTitle: "Extreme Value Theorem",
      evtDesc: "If f: E \u2192 R is a continuous function on a compact space E, then its image f(E) is a compact subset of R.",
      evtFinal: "By the Borel-Lebesgue theorem in R, f(E) must be closed and bounded. Therefore, the function is bounded and guaranteed to attain its global maximum and global minimum."
    },
    FR: {
      title: "3.2 Propriétés des fonctions continues sur un compact",
      theorem2: "Théorème 2 : Image continue",
      theorem2_desc: "Soient (E, TE) un espace compact et (F, TF) un espace séparé. Pour toute application continue f: E \u2192 F, l'image directe f(E) est un compact de F.",
      intuitionTitle: "Intuition",
      intuitionDesc: "Une fonction continue est comme un étirement fluide d'un matériau. Si vous partez d'un espace compact « contenu », peu importe à quel point vous l'étirez ou le pliez (sans le déchirer), il restera « contenu » et fermé dans l'espace d'arrivée.",
      consequenceTitle: "La conséquence fondamentale",
      evtTitle: "Théorème des bornes (T.V.I. étendu)",
      evtDesc: "Si f: E \u2192 R est une fonction continue sur un espace compact E, alors son image f(E) est un compact de R.",
      evtFinal: "D'après le théorème de Borel-Lebesgue dans R, f(E) est donc un ensemble fermé et borné. Par conséquent, la fonction est bornée et atteint ses bornes (maximum et minimum globaux)."
    }
  };

  const curr = content[language];

  return (
    <section className="bg-white py-24 px-6 overflow-hidden">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-3xl font-bold text-slate-900 mb-12 tracking-tight border-b border-slate-100 pb-4">
          {curr.title}
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
           <div className="space-y-8">
              <Theorem title={curr.theorem2}>
                {curr.theorem2_desc}
              </Theorem>

              <div className="bg-slate-50 p-8 rounded-[2.5rem] border border-slate-100 shadow-inner">
                 <h4 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-4 flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-blue-500" /> {curr.intuitionTitle}
                 </h4>
                 <p className="text-slate-600 text-sm leading-relaxed italic">
                    {curr.intuitionDesc}
                 </p>
              </div>
           </div>

           <div className="bg-indigo-600 rounded-[3rem] p-10 text-white relative overflow-hidden shadow-2xl">
              <div className="absolute top-0 right-0 p-8 opacity-10">
                 <Maximize2 className="w-32 h-32" />
              </div>
              <div className="relative z-10">
                 <h3 className="text-2xl font-bold mb-8">{curr.consequenceTitle}</h3>
                 <div className="space-y-6">
                    <div className="bg-white/10 p-6 rounded-2xl border border-white/20">
                       <h5 className="font-bold text-blue-300 text-sm mb-2 uppercase tracking-tighter">{curr.evtTitle}</h5>
                       <p className="text-sm text-indigo-50 leading-relaxed">
                          {curr.evtDesc}
                       </p>
                    </div>
                    
                    <div className="flex items-center justify-center p-4">
                       <ArrowRight className="text-blue-400 animate-pulse" />
                    </div>

                    <div className="bg-white/10 p-6 rounded-2xl border border-white/20 italic">
                       <p className="text-sm text-indigo-50 leading-relaxed">
                          {curr.evtFinal}
                       </p>
                    </div>
                 </div>
              </div>
           </div>
        </div>
      </div>
    </section>
  );
};

export default CompactContinuity;
