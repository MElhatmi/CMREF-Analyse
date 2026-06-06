import React from 'react';
import { BlockMath } from './Math';
import { Target, Zap } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const LocalContinuityDef: React.FC = () => {
  const { language } = useLanguage();

  const content = {
    EN: {
      header: "Point-by-Point Analysis",
      intro: "Instead of looking at the whole space, we can check continuity at a single point using neighborhoods. This is the topological equivalent of the epsilon-delta definition.",
      defTitle: "Definition 13",
      defIntro: "A function f is continuous at a point x if, for every neighborhood V of f(x), there exists a neighborhood U of x such that:",
      prop9: "Proposition 9: A function is globally continuous if and only if it is locally continuous at every point in the domain.",
      visualDesc: "f maps the entire \"blue bubble\" U inside the \"orange bubble\" V."
    },
    FR: {
      header: "Analyse point par point",
      intro: "Au lieu de regarder l'espace entier, nous pouvons vérifier la continuité en un seul point à l'aide des voisinages. C'est l'équivalent topologique de la définition en epsilon-delta.",
      defTitle: "Définition 13",
      defIntro: "Une fonction f est continue en un point x si, pour tout voisinage V de f(x), il existe un voisinage U de x tel que :",
      prop9: "Proposition 9 : Une fonction est globalement continue si et seulement si elle est localement continue en chaque point du domaine.",
      visualDesc: "f envoie toute la « bulle bleue » U à l'intérieur de la « bulle orange » V."
    }
  };

  const curr = content[language];

  return (
    <section className="bg-slate-50 py-24 px-6 overflow-hidden">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2">
            <div className="inline-flex items-center gap-2 bg-indigo-50 px-3 py-1 rounded-full text-indigo-600 font-bold text-xs uppercase tracking-widest mb-6">
              <Target className="w-3 h-3" />
              Local Continuity
            </div>
            <h2 className="text-4xl font-bold text-slate-900 mb-8 tracking-tight">{curr.header}</h2>
            <p className="text-slate-600 text-lg leading-relaxed mb-8">
              {curr.intro}
            </p>

            <div className="bg-white rounded-[2.5rem] p-10 border border-slate-200 shadow-sm relative">
               <div className="absolute -top-4 -right-4 bg-indigo-600 text-white p-3 rounded-2xl shadow-lg">
                  <Zap className="w-6 h-6" />
               </div>
               <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-6">{curr.defTitle}</h3>
               <p className="text-slate-700 leading-relaxed mb-6">
                 {curr.defIntro}
               </p>
               <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 flex items-center justify-center">
                  <BlockMath math="f(U) \subset V" />
               </div>
               <p className="mt-8 text-xs text-slate-400 italic border-t border-slate-100 pt-6">
                 {curr.prop9}
               </p>
            </div>
          </div>

          <div className="lg:w-1/2 w-full">
             <div className="bg-slate-900 rounded-[4rem] p-12 shadow-2xl relative overflow-hidden flex flex-col items-center">
                <div className="absolute inset-0 bg-indigo-500/5 blur-3xl rounded-full" />
                <svg viewBox="0 0 400 300" className="w-full max-w-sm relative z-10">
                   <g>
                      <path d="M 40 150 Q 60 80 120 100 T 120 200 Q 60 220 40 150" fill="rgba(59, 130, 246, 0.05)" stroke="#3b82f6" strokeWidth="1" strokeDasharray="5 5" />
                      <circle cx="80" cy="150" r="3" fill="#3b82f6" />
                      <text x="75" y="140" className="text-xs fill-blue-400 italic">x</text>
                      <circle cx="80" cy="150" r="30" fill="rgba(59, 130, 246, 0.15)" stroke="#3b82f6" strokeWidth="1" />
                      <text x="65" y="200" className="text-[8px] font-bold fill-blue-500 uppercase">U</text>
                   </g>

                   <g>
                      <path d="M 280 150 Q 300 80 360 100 T 360 200 Q 300 220 280 150" fill="rgba(249, 115, 22, 0.05)" stroke="#f97316" strokeWidth="1" strokeDasharray="5 5" />
                      <circle cx="320" cy="150" r="3" fill="#f97316" />
                      <text x="310" y="140" className="text-xs fill-orange-400 italic">f(x)</text>
                      <circle cx="320" cy="150" r="45" fill="rgba(249, 115, 22, 0.15)" stroke="#f97316" strokeWidth="1" />
                      <text x="310" y="215" className="text-[8px] font-bold fill-orange-500 uppercase">V</text>
                   </g>

                   <path d="M 115 150 L 270 150" stroke="#475569" strokeWidth="1" strokeDasharray="4 4" markerEnd="url(#mapping-arrow)" />
                   <defs>
                     <marker id="mapping-arrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="3" markerHeight="3" orient="auto-start-reverse">
                       <path d="M 0 0 L 10 5 L 0 10 z" fill="#475569" />
                     </marker>
                   </defs>
                </svg>
                <div className="mt-8 p-4 bg-white/5 rounded-2xl border border-white/10">
                   <p className="text-[10px] text-slate-400 font-mono text-center">
                     {curr.visualDesc}
                   </p>
                </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocalContinuityDef;
