import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Sliders, XCircle } from 'lucide-react';
import { InlineMath } from './Math';
import { useLanguage } from '../context/LanguageContext';

const NonCompactVisualizer: React.FC = () => {
  const [n, setN] = useState(5);
  const { language } = useLanguage();

  const content = {
    EN: {
      title: "Interactive: Why ]0, 1] is NOT Compact",
      subtitle: "We prove non-compactness by finding an open cover that admits no finite subcover. Consider the family O\u2099 = ]1/n, 2[ for n \u2208 N*.",
      radiusLabel: "Max Index N in Subcover:",
      currentLabel: "Current Subcover",
      currentDesc: "As N increases, we get closer to 0, but we never reach it.",
      targetLabel: "Target A = ]0, 1]",
      unionLabel: "Union of finite O\u2096",
      gapLabel: "GAP",
      verdictTitle: "Uncovered Points Detected",
      verdictDesc: "For any finite N you choose, the union is just ]1/N, 2[. This completely misses points close to zero, like 1/2N. Because an uncovered gap will ALWAYS exist for any finite N, no finite subcover can exist. Thus, ]0, 1] is NOT compact."
    },
    FR: {
      title: "Interactif : Pourquoi ]0, 1] n'est PAS compact",
      subtitle: "Nous prouvons la non-compacité en trouvant un recouvrement ouvert qui n'admet aucun sous-recouvrement fini. Considérons la famille O\u2099 = ]1/n, 2[ pour n \u2208 N*.",
      radiusLabel: "Indice Max N du sous-recouvrement :",
      currentLabel: "Sous-recouvrement actuel",
      currentDesc: "À mesure que N augmente, on se rapproche de 0, mais sans jamais l'atteindre.",
      targetLabel: "Cible A = ]0, 1]",
      unionLabel: "Réunion des O\u2096 finis",
      gapLabel: "VIDE",
      verdictTitle: "Points non recouverts détectés",
      verdictDesc: "Pour tout N fini choisi, la réunion est simplement ]1/N, 2[. Cela manque complètement les points proches de zéro, comme 1/2N. Puisqu'un vide non recouvert existera TOUJOURS pour tout N fini, aucun sous-recouvrement fini n'existe. Ainsi, ]0, 1] n'est PAS compact."
    }
  };

  const curr = content[language];

  return (
    <section className="bg-white py-24 px-6 overflow-hidden">
      <div className="mx-auto max-w-5xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-4 tracking-tight">{curr.title}</h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-sm">
            {curr.subtitle}
          </p>
        </div>

        <div className="bg-slate-50 rounded-[3rem] p-10 border border-slate-100 shadow-inner">
           <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
              
              <div className="lg:col-span-1 space-y-8">
                 <div>
                    <label className="text-xs font-bold text-slate-400 uppercase tracking-widest block mb-4 flex items-center gap-2">
                      <Sliders className="w-4 h-4 text-blue-500" /> {curr.radiusLabel} {n}
                    </label>
                    <input 
                      type="range" min="1" max="50" step="1"
                      value={n} onChange={(e) => setN(parseInt(e.target.value))}
                      className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
                    />
                 </div>

                 <div className="p-6 bg-white rounded-[2rem] border border-slate-200 shadow-sm space-y-4">
                    <h5 className="text-[10px] font-bold text-indigo-500 uppercase tracking-widest">{curr.currentLabel}</h5>
                    <div className="bg-slate-50 p-3 rounded-xl border border-slate-100 text-xs font-mono text-indigo-600 flex justify-center">
                       <InlineMath math={`\\bigcup_{k=1}^{${n}} O_k = \\left] \\frac{1}{${n}}, 2 \\right[`} />
                    </div>
                    <p className="text-[10px] text-slate-400 italic">
                      {curr.currentDesc}
                    </p>
                 </div>
              </div>

              <div className="lg:col-span-2 space-y-12">
                 <div className="bg-slate-900 rounded-[3rem] p-12 h-48 relative flex items-center shadow-2xl">
                    <div className="relative h-px bg-slate-700 w-full">
                       <div 
                         className="absolute h-4 -translate-y-1/2 bg-blue-500/20 border-r-2 border-blue-400 rounded-sm"
                         style={{ left: '50%', right: '25%' }}
                       >
                          <div className="absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 border-2 border-blue-400 bg-slate-900 rounded-full" />
                          <div className="absolute right-0 top-1/2 translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-blue-400 rounded-sm" />
                          <div className="absolute -top-8 left-1/2 -translate-x-1/2 text-[10px] font-bold text-blue-400 uppercase tracking-widest whitespace-nowrap">{curr.targetLabel}</div>
                       </div>

                       {[-1, 0, 1, 2].map(v => (
                         <div key={v} className="absolute flex flex-col items-center" style={{ left: `${(v + 1) / 3 * 100}%` }}>
                            <div className="h-4 w-px bg-slate-700 -translate-y-1.5" />
                            <span className="text-[10px] text-slate-500 mt-2 font-mono">{v}</span>
                         </div>
                       ))}

                       <motion.div
                         animate={{ 
                           left: `${(1/n + 1) / 3 * 100}%`,
                           right: `${(1 - (2 + 1) / 3) * 100}%`
                         }}
                         className="absolute h-10 -translate-y-1/2 bg-indigo-500/10 border-x border-indigo-400/30"
                       >
                          <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 text-[8px] font-bold text-indigo-500/60 uppercase whitespace-nowrap">{curr.unionLabel}</div>
                       </motion.div>

                       <motion.div 
                         animate={{ 
                           left: '50%', 
                           width: `${(1/n) / 3 * 100}%` 
                         }}
                         className="absolute h-1 -translate-y-1/2 bg-red-500 shadow-[0_0_10px_rgba(239,68,68,0.8)] z-20"
                       />
                       <motion.text 
                         animate={{ x: `${(0.5/n + 1) / 3 * 100}%` }}
                         className="absolute -top-12 text-[10px] font-bold fill-red-500"
                       >
                         {curr.gapLabel}
                       </motion.text>
                    </div>
                 </div>

                 <div className="bg-red-50 rounded-[2.5rem] p-8 border border-red-100">
                    <div className="flex gap-4">
                       <XCircle className="w-8 h-8 text-red-500 shrink-0" />
                       <div>
                          <h4 className="font-bold text-red-900 text-sm mb-2 uppercase tracking-widest">{curr.verdictTitle}</h4>
                          <p className="text-xs text-red-800 leading-relaxed italic">
                            For any finite <InlineMath math="N" /> you choose, the union is just <InlineMath math={`]1/${n}, 2[`} />. {curr.verdictDesc.split('.').slice(1).join('.')}
                          </p>
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

export default NonCompactVisualizer;
