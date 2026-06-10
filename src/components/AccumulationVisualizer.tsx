import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sliders, Target, AlertCircle, CheckCircle2 } from 'lucide-react';
import { InlineMath } from './Math';
import { useLanguage } from '../context/LanguageContext';

type TargetPoint = 0 | 1;

const AccumulationVisualizer: React.FC = () => {
  const [epsilon, setEpsilon] = useState(0.8);
  const [target, setTarget] = useState<TargetPoint>(0);
  const { language } = useLanguage();

  const isIsolated = target === 0 && epsilon < 1;

  const content = {
    EN: {
      title: "Isolated vs. Accumulation Points",
      subtitle: "Does a point have \"social distance,\" or is it crowded by its neighbors? Adjust the neighborhood radius ε to find out.",
      targetLabel: "Select Target Point",
      point: "Point",
      radiusLabel: "Radius ε =",
      tiny: "Tiny",
      large: "Large",
      setALabel: "Current Set A",
      legendA: "Set A",
      legendV: "Neighborhood V",
      testing: "Testing Point",
      isolatedSuccess: "Success! We found a neighborhood that isolates 0 from the rest of A. It is an isolated point.",
      isolatedFail: "This neighborhood is too large; it touches the other part of A. Shrink the radius to isolate the point.",
      accumulationDesc: "No matter how small you make the radius, the neighborhood always captures other points of A. Therefore, 1 is an accumulation point.",
      isolatedMath: "Isolated:",
      accumulationMath: "Accumulation:"
    },
    FR: {
      title: "Points isolés vs. Points d'accumulation",
      subtitle: "Un point a-t-il sa « distance sociale » ou est-il entouré par ses voisins ? Ajustez le rayon du voisinage ε pour le savoir.",
      targetLabel: "Sélectionner le point cible",
      point: "Point",
      radiusLabel: "Rayon ε =",
      tiny: "Minuscule",
      large: "Grand",
      setALabel: "Ensemble A actuel",
      legendA: "Ensemble A",
      legendV: "Voisinage V",
      testing: "Test du Point",
      isolatedSuccess: "Succès ! Nous avons trouvé un voisinage qui isole 0 du reste de A. C'est un point isolé.",
      isolatedFail: "Ce voisinage est trop grand ; il touche l'autre partie de A. Réduisez le rayon pour isoler le point.",
      accumulationDesc: "Peu importe la petitesse du rayon, le voisinage capture toujours d'autres points de A. Par conséquent, 1 est un point d'accumulation.",
      isolatedMath: "Isolé :",
      accumulationMath: "Accumulation :"
    }
  };

  const curr = content[language];

  return (
    <section className="bg-slate-50 py-24 px-6">
      <div className="mx-auto max-w-5xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-4 tracking-tight">{curr.title}</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            {curr.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
          <div className="lg:col-span-1 space-y-8 bg-white p-8 rounded-[2.5rem] border border-slate-200 shadow-sm">
            <div>
              <label className="text-xs font-bold text-slate-400 uppercase tracking-widest block mb-4">{curr.targetLabel}</label>
              <div className="grid grid-cols-2 gap-2">
                {[0, 1].map((pt) => (
                  <button
                    key={pt}
                    onClick={() => setTarget(pt as TargetPoint)}
                    className={`py-3 rounded-xl font-bold text-sm transition-all ${target === pt ? 'bg-blue-600 text-white shadow-lg shadow-blue-200' : 'bg-slate-50 text-slate-500 hover:bg-slate-100'}`}
                  >
                    {curr.point} {pt}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <div className="flex justify-between items-center mb-4">
                <label className="text-xs font-bold text-slate-400 uppercase tracking-widest flex items-center gap-2">
                  <Sliders className="w-3 h-3" /> {curr.radiusLabel} {epsilon.toFixed(2)}
                </label>
              </div>
              <input 
                type="range" min="0.1" max="1.5" step="0.05"
                value={epsilon} onChange={(e) => setEpsilon(parseFloat(e.target.value))}
                className="w-full h-2 bg-slate-100 rounded-lg appearance-none cursor-pointer accent-blue-600"
              />
              <div className="flex justify-between mt-2 text-[10px] text-slate-400 font-mono">
                <span>{curr.tiny}</span>
                <span>{curr.large}</span>
              </div>
            </div>

            <div className="pt-6 border-t border-slate-100">
               <h4 className="text-xs font-bold text-slate-900 mb-3 flex items-center gap-2">
                 <Target className="w-3 h-3 text-blue-500" /> {curr.setALabel}
               </h4>
               <div className="text-sm font-mono text-blue-600 bg-blue-50 p-3 rounded-xl">
                 <InlineMath math="A = \{0\} \cup [1, 2[" />
               </div>
            </div>
          </div>

          <div className="lg:col-span-2 bg-slate-900 rounded-[3rem] p-12 min-h-[450px] flex flex-col justify-between relative overflow-hidden shadow-2xl">
            <div className="flex gap-4 mb-12">
               <div className="flex items-center gap-2">
                 <div className="w-3 h-3 bg-blue-500 rounded-full" />
                 <span className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">{curr.legendA}</span>
               </div>
               <div className="flex items-center gap-2">
                 <div className="w-3 h-3 border-2 border-amber-400 rounded-full" />
                 <span className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">{curr.legendV}</span>
               </div>
            </div>

            <div className="relative h-px bg-slate-700 w-full my-auto">
               <div className="absolute left-[20%] w-2 h-2 -translate-x-1/2 -translate-y-1/2 bg-blue-500 rounded-full shadow-[0_0_10px_rgba(59,130,246,0.5)]" />
               <div className="absolute left-[40%] right-[20%] h-2 -translate-y-1/2 bg-blue-500/30 rounded-full border-l-2 border-blue-400" />
               
               {[-1, 0, 1, 2, 3].map((v) => (
                 <div key={v} className="absolute flex flex-col items-center" style={{ left: `${(v + 1) / 4 * 100}%` }}>
                   <div className="h-4 w-px bg-slate-700 -translate-y-1.5" />
                   <span className="text-[10px] text-slate-600 mt-2 font-mono">{v}</span>
                 </div>
               ))}

               <motion.div 
                animate={{ 
                  left: `${(target + 1 - epsilon) / 4 * 100}%`,
                  width: `${(2 * epsilon) / 4 * 100}%`
                }}
                className="absolute h-10 -translate-y-1/2 border-2 border-amber-400 bg-amber-400/10 rounded-2xl transition-all"
               >
                 <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 text-[8px] font-bold text-amber-500 font-bold">V</div>
               </motion.div>

               <div 
                 className="absolute w-1 h-16 bg-white/20 -translate-y-1/2 -translate-x-1/2 pointer-events-none" 
                 style={{ left: `${(target + 1) / 4 * 100}%` }}
               />
            </div>

            <div className="mt-12 bg-white/5 backdrop-blur-md p-6 rounded-3xl border border-white/10">
               <AnimatePresence mode="wait">
                 <motion.div
                  key={`${target}-${epsilon}`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="flex gap-4 items-start"
                 >
                   <div className={`p-2 rounded-xl ${isIsolated ? 'bg-emerald-500/20 text-emerald-400' : 'bg-amber-500/20 text-amber-400'}`}>
                     {isIsolated ? <CheckCircle2 className="w-5 h-5" /> : <AlertCircle className="w-5 h-5" />}
                   </div>
                   <div>
                     <h5 className="font-bold text-white text-sm mb-1 uppercase tracking-widest">
                       {curr.testing} {target}
                     </h5>
                     <p className="text-xs text-slate-300 leading-relaxed">
                       {target === 0 ? (
                         epsilon < 1 
                          ? curr.isolatedSuccess
                          : curr.isolatedFail
                       ) : (
                         curr.accumulationDesc
                       )}
                     </p>
                   </div>
                 </motion.div>
               </AnimatePresence>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-8 bg-white p-6 rounded-3xl border border-slate-100 shadow-inner">
           <div className="flex items-center gap-3">
              <div className="w-4 h-1 bg-emerald-500 rounded-full" />
              <span className="text-[10px] font-bold text-slate-500 uppercase tracking-tight">
                {curr.isolatedMath} <InlineMath math={`\\exists V, V \\cap A = \\{${target}\\}`} />
              </span>
           </div>
           <div className="flex items-center gap-3">
              <div className="w-4 h-1 bg-amber-500 rounded-full" />
              <span className="text-[10px] font-bold text-slate-500 uppercase tracking-tight">
                {curr.accumulationMath} <InlineMath math={`\\forall V, V \\cap (A \\setminus \\{${target}\\}) \\neq \\emptyset`} />
              </span>
           </div>
        </div>
      </div>
    </section>
  );
};

export default AccumulationVisualizer;
