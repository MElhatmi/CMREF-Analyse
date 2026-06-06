import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sliders, Scan } from 'lucide-react';
import { InlineMath } from './Math';
import { useLanguage } from '../context/LanguageContext';

const SubspaceSlicer: React.FC = () => {
  const [center, setCenter] = useState(0); // position of open interval
  const { language } = useLanguage();

  const A = [0, 2];
  const O = [center - 1, center + 1];

  // Calculate intersection [max(0, O[0]), min(2, O[1])]
  const intersection = [Math.max(A[0], O[0]), Math.min(A[1], O[1])];
  const isValid = intersection[0] < intersection[1];

  const content = {
    EN: {
      title: "Interactive: The 1D Subspace Slicer",
      subtitle: "Drag the sliding open set O across the subspace A to see how \"relatively open\" sets are formed.",
      controlLabel: "Position of Parent Set O",
      universeLabel: "Universe A",
      parentLabel: "Parent Open Set O",
      subspaceLabel: "Subspace A",
      intersectionLabel: "Intersection O \u2229 A",
      verdictTitle: "Relativity Verdict",
      resultPrefix: "Result:",
      verdicts: {
        empty: "The open set doesn't touch the subspace A. The intersection is the empty set, which is always open in A.",
        all: "The intersection covers the entire subspace A. The entire space is always open in its own topology!",
        left: "Notice the hard bracket! [0, 1[ is NOT open in R. But because it is created by slicing A with an open set from R, it is PERFECTLY OPEN in A. Point 0 isn't a hard boundary, it's just the edge of the A universe!",
        right: "Similarly, ]1, 2] is OPEN in the subspace A, even though it looks half-closed in R. In the universe of A, point 2 is just the frontier.",
        inside: "The intersection doesn't touch the boundaries of A. It is open in both R and A."
      }
    },
    FR: {
      title: "Interactif : Le découpeur de sous-espace 1D",
      subtitle: "Faites glisser l'ouvert O sur le sous-espace A pour voir comment se forment les ensembles « relativement ouverts ».",
      controlLabel: "Position de l'ensemble parent O",
      universeLabel: "Univers A",
      parentLabel: "Ouvert Parent O",
      subspaceLabel: "Sous-espace A",
      intersectionLabel: "Intersection O \u2229 A",
      verdictTitle: "Verdict de Relativité",
      resultPrefix: "Résultat :",
      verdicts: {
        empty: "L'ouvert ne touche pas le sous-espace A. L'intersection est l'ensemble vide, qui est toujours ouvert dans A.",
        all: "L'intersection couvre tout le sous-espace A. L'espace entier est toujours ouvert dans sa propre topologie !",
        left: "Remarquez le crochet fermé ! [0, 1[ n'est PAS ouvert dans R. Mais comme il est créé en découpant A avec un ouvert de R, il est PARFAITEMENT OUVERT dans A. Le point 0 n'est pas une frontière rigide, c'est juste le bord de l'univers A !",
        right: "De même, ]1, 2] est OUVERT dans le sous-espace A, même s'il semble semi-fermé dans R. Dans l'univers de A, le point 2 est juste la frontière.",
        inside: "L'intersection ne touche pas les bords de A. Il est ouvert à la fois dans R et dans A."
      }
    }
  };

  const curr = content[language];

  const getVerdict = () => {
    if (!isValid) return { type: 'empty', text: curr.verdicts.empty };
    const touchesLeft = O[0] <= A[0];
    const touchesRight = O[1] >= A[1];
    if (touchesLeft && touchesRight) return { type: 'all', text: curr.verdicts.all };
    if (touchesLeft) return { type: 'left', text: curr.verdicts.left };
    if (touchesRight) return { type: 'right', text: curr.verdicts.right };
    return { type: 'inside', text: curr.verdicts.inside };
  };

  const verdict = getVerdict();

  return (
    <section className="bg-white py-24 px-6 overflow-hidden">
      <div className="mx-auto max-w-5xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-4 tracking-tight">{curr.title}</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            {curr.subtitle}
          </p>
        </div>

        <div className="bg-slate-50 rounded-[3rem] p-10 border border-slate-100 shadow-inner">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
            <div className="lg:col-span-1 space-y-8">
               <div>
                  <label className="text-xs font-bold text-slate-400 uppercase tracking-widest flex items-center gap-2 mb-6">
                    <Sliders className="w-4 h-4 text-blue-500" /> {curr.controlLabel}
                  </label>
                  <input 
                    type="range" min="-2.5" max="2.5" step="0.1"
                    value={center} onChange={(e) => setCenter(parseFloat(e.target.value))}
                    className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
                  />
               </div>
               <div className="space-y-4">
                  <div className="p-5 bg-white rounded-[2rem] border border-slate-200 shadow-sm flex flex-col items-center">
                     <p className="text-[10px] text-slate-400 font-bold uppercase mb-2">{curr.universeLabel}</p>
                     <InlineMath math="A = [0, 2]" />
                  </div>
                  <div className="p-5 bg-blue-600 rounded-[2rem] text-white shadow-xl shadow-blue-100 flex flex-col items-center">
                     <p className="text-[10px] text-blue-200 font-bold uppercase mb-2">{curr.parentLabel}</p>
                     <InlineMath math={`O = \\left] ${O[0].toFixed(1)}, ${O[1].toFixed(1)} \\right[`} />
                  </div>
               </div>
            </div>

            <div className="lg:col-span-2 space-y-12">
               <div className="bg-slate-900 rounded-[3rem] p-12 h-64 relative flex flex-col justify-center shadow-2xl">
                  <div className="relative h-px bg-slate-700 w-full">
                     {[-2, -1, 0, 1, 2].map(v => (
                       <div key={v} className="absolute flex flex-col items-center" style={{ left: `${(v + 3) / 6 * 100}%` }}>
                          <div className="h-4 w-px bg-slate-700 -translate-y-1.5" />
                          <span className="text-[8px] text-slate-500 mt-2 font-mono">{v}</span>
                       </div>
                     ))}
                     <div className="absolute h-4 -translate-y-1/2 border-2 border-slate-400 bg-white rounded-sm"
                      style={{ left: `${(0 + 3) / 6 * 100}%`, right: `${(1 - (2 + 3) / 6) * 100}%` }}>
                       <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 text-[8px] font-bold text-slate-500 uppercase">{curr.subspaceLabel}</div>
                     </div>
                     <motion.div animate={{ left: `${(O[0] + 3) / 6 * 100}%`, width: `${(2 / 6) * 100}%` }}
                       className="absolute h-10 -translate-y-1/2 bg-blue-500/20 border-x-2 border-blue-400/50 flex justify-between px-1">
                        <div className="w-2 h-2 border-2 border-blue-400 rounded-full bg-slate-900 self-center" />
                        <div className="w-2 h-2 border-2 border-blue-400 rounded-full bg-slate-900 self-center" />
                     </motion.div>
                     <AnimatePresence>
                        {isValid && (
                          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                            className="absolute h-1 -translate-y-1/2 bg-emerald-400 shadow-[0_0_15px_rgba(52,211,153,1)]"
                            style={{ left: `${(intersection[0] + 3) / 6 * 100}%`, right: `${(1 - (intersection[1] + 3) / 6) * 100}%` }}>
                             <div className={`absolute left-0 -translate-x-1/2 -translate-y-1/2 w-4 h-4 font-bold text-xs text-emerald-400`}>
                               {O[0] <= 0 ? '[' : ']'}
                             </div>
                             <div className={`absolute right-0 translate-x-1/2 -translate-y-1/2 w-4 h-4 font-bold text-xs text-emerald-400`}>
                               {O[1] >= 2 ? ']' : '['}
                             </div>
                          </motion.div>
                        )}
                     </AnimatePresence>
                  </div>
                  <div className="mt-20 flex justify-center">
                     <span className="text-[10px] font-bold text-emerald-400/60 uppercase tracking-[0.3em]">{curr.intersectionLabel}</span>
                  </div>
               </div>

               <div className="bg-white rounded-[2.5rem] p-8 shadow-sm border border-slate-200">
                  <div className="flex gap-4">
                     <div className={`h-12 w-12 rounded-2xl flex items-center justify-center shrink-0 ${verdict.type === 'inside' ? 'bg-blue-100 text-blue-600' : 'bg-emerald-100 text-emerald-600'}`}>
                        <Scan className="w-6 h-6" />
                     </div>
                     <div>
                        <h4 className="font-bold text-slate-900 uppercase tracking-widest text-xs mb-2">{curr.verdictTitle}</h4>
                        <p className="text-slate-600 text-sm leading-relaxed italic">{verdict.text}</p>
                        {isValid && (
                           <div className="mt-4 p-2 bg-slate-50 rounded-xl inline-block text-xs font-mono text-emerald-600 border border-slate-100">
                             {curr.resultPrefix} {O[0] <= 0 ? '[' : ']'}{intersection[0].toFixed(1)}, {intersection[1].toFixed(1)}{O[1] >= 2 ? ']' : '['}
                           </div>
                        )}
                     </div>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SubspaceSlicer;
