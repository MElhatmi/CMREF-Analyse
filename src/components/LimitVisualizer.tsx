import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Sliders, HelpCircle, ArrowDown, Scissors } from 'lucide-react';
import { InlineMath, BlockMath } from './Math';
import { useLanguage } from '../context/LanguageContext';

const LimitVisualizer: React.FC = () => {
  const [epsilon, setEpsilon] = useState(0.4);
  const { language } = useLanguage();

  const content = {
    EN: {
      title: "Interactive: The Limit at a \"Hole\"",
      subtitle: "Discover the superpower of limits: finding a value at a point where the function is undefined.",
      problemTitle: "The Problem Function",
      problemDesc: "\"Notice the hole at x = 1. We cannot calculate f(1), but we can find its limit by looking at its neighbors.\"",
      controlLabel: "Target Window Size (ε)",
      strict: "Strict",
      loose: "Loose",
      limitLabel: "Limit l = 2",
      holeLabel: "Hole a = 1",
      insight: "Even though point 1 is missing, it is in the closure of the domain. As you trap the output around 2, we can always find a tight neighborhood around the hole that maps inside.",
      superpowerTitle: "The Superpower",
      superpowerDesc: "The limit point a does not have to belong to the domain A. It only needs to be an adherent point (a \u2208 \u0100)."
    },
    FR: {
      title: "Interactif : La limite en un « Trou »",
      subtitle: "Découvrez le super-pouvoir des limites : trouver une valeur en un point où la fonction n'est pas définie.",
      problemTitle: "La fonction problème",
      problemDesc: "« Notez le trou en x = 1. Nous ne pouvons pas calculer f(1), mais nous pouvons trouver sa limite en regardant ses voisins. »",
      controlLabel: "Taille de la fenêtre cible (ε)",
      strict: "Strict",
      loose: "Large",
      limitLabel: "Limite l = 2",
      holeLabel: "Trou a = 1",
      insight: "Même si le point 1 est manquant, il est dans l'adhérence du domaine. En resserrant la sortie autour de 2, nous pouvons toujours trouver un voisinage du trou qui s'envoie à l'intérieur.",
      superpowerTitle: "Le Super-Pouvoir",
      superpowerDesc: "Le point limite a n'a pas besoin d'appartenir au domaine A. Il suffit qu'il soit un point adhérent (a \u2208 \u0100)."
    }
  };

  const curr = content[language];

  return (
    <section className="bg-white py-24 px-6 overflow-hidden">
      <div className="mx-auto max-w-5xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-4 tracking-tight">{curr.title}</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            {curr.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
           <div className="space-y-8">
              <div className="bg-slate-900 rounded-[2.5rem] p-10 text-white relative overflow-hidden shadow-xl">
                 <div className="absolute top-0 right-0 p-6 opacity-10">
                    <Scissors className="w-24 h-24" />
                 </div>
                 <h4 className="text-xl font-bold mb-6 text-blue-400">{curr.problemTitle}</h4>
                 <div className="bg-white/5 p-6 rounded-2xl border border-white/10 mb-8">
                    <BlockMath math="f(x) = \frac{x^2 - 1}{x - 1} \quad \text{sur } \mathbb{R} \setminus \{1\}" />
                 </div>
                 <p className="text-sm text-slate-400 leading-relaxed italic">
                   {curr.problemDesc}
                 </p>
              </div>

              <div className="p-8 bg-blue-50 rounded-[2.5rem] border border-blue-100 shadow-inner">
                 <label className="text-xs font-bold text-blue-400 uppercase tracking-widest block mb-6 flex items-center gap-2">
                   <Sliders className="w-4 h-4" /> {curr.controlLabel}
                 </label>
                 <input 
                   type="range" min="0.05" max="0.8" step="0.05"
                   value={epsilon} onChange={(e) => setEpsilon(parseFloat(e.target.value))}
                   className="w-full h-2 bg-blue-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
                 />
                 <div className="flex justify-between mt-3 text-[10px] font-mono text-blue-400 font-bold">
                    <span>0.05 ({curr.strict})</span>
                    <span>0.8 ({curr.loose})</span>
                 </div>
              </div>
           </div>

           <div className="bg-slate-50 rounded-[3rem] p-10 border border-slate-200 shadow-inner flex flex-col items-center">
              <div className="w-full max-w-sm space-y-16">
                 <div className="relative h-2 bg-slate-200 w-full rounded-full">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 flex flex-col items-center">
                       <div className="w-4 h-4 bg-orange-500 rounded-full shadow-[0_0_10px_rgba(249,115,22,0.5)] -translate-y-1.5" />
                       <span className="mt-4 text-xs font-bold text-orange-600 uppercase">{curr.limitLabel}</span>
                    </div>
                    <motion.div 
                      animate={{ width: `${(epsilon * 2 / 2.5) * 100}%` }}
                      className="absolute top-0 left-1/2 h-8 -translate-x-1/2 -translate-y-1/2 border-2 border-orange-400 bg-orange-400/10 rounded-xl"
                    >
                       <div className="absolute -top-6 left-1/2 -translate-x-1/2 text-[8px] font-bold text-orange-500 whitespace-nowrap">V = ]2-ε, 2+ε[</div>
                    </motion.div>
                 </div>

                 <div className="flex justify-center">
                    <ArrowDown className="w-6 h-6 text-slate-300 animate-bounce" />
                 </div>

                 <div className="relative h-2 bg-slate-200 w-full rounded-full">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 flex flex-col items-center">
                       <div className="w-4 h-4 bg-white border-2 border-red-500 rounded-full shadow-sm -translate-y-1.5" />
                       <span className="mt-4 text-xs font-bold text-slate-500 uppercase">{curr.holeLabel}</span>
                    </div>
                    <motion.div 
                      animate={{ width: `${(epsilon * 2 / 2.5) * 100}%` }}
                      className="absolute top-0 left-1/2 h-8 -translate-x-1/2 -translate-y-1/2 border-2 border-blue-400 bg-blue-400/10 rounded-xl"
                    >
                       <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 text-[8px] font-bold text-blue-500 whitespace-nowrap">U = ]1-δ, 1+δ[</div>
                    </motion.div>
                 </div>
              </div>

              <div className="mt-20 p-6 bg-white rounded-3xl border border-slate-100 shadow-sm max-w-sm">
                 <p className="text-xs text-slate-500 leading-relaxed text-center">
                   {curr.insight}
                 </p>
              </div>
           </div>
        </div>

        <div className="bg-indigo-600 rounded-[2.5rem] p-10 text-white relative overflow-hidden shadow-xl">
           <div className="absolute top-0 right-0 p-8 opacity-10">
              <HelpCircle className="w-48 h-48" />
           </div>
           <h4 className="text-2xl font-bold mb-6 flex items-center gap-3">
             <span className="bg-white/20 p-2 rounded-xl">!</span>
             {curr.superpowerTitle}
           </h4>
           <p className="text-indigo-100 text-lg leading-relaxed mb-8 max-w-3xl">
             {curr.superpowerDesc}
           </p>
           <div className="p-6 bg-white/10 rounded-2xl border border-white/20 inline-block">
              <InlineMath math="\lim_{x \to a} f(x) = l \iff \forall V \in \mathcal{V}(l), \exists U \in \mathcal{V}(a) \text{ t.q. } f(A \cap U) \subset V" />
           </div>
        </div>
      </div>
    </section>
  );
};

export default LimitVisualizer;
