import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sliders, Compass } from 'lucide-react';
import { InlineMath } from './Math';
import { useLanguage } from '../context/LanguageContext';

const PI = Math.PI;

const RationalDensityVisualizer: React.FC = () => {
  const [epsilon, setEpsilon] = useState(0.1);
  const { language } = useLanguage();

  const content = {
    EN: {
      title: "Interactive: The Density of Rationals",
      subtitle: "The most famous dense set is the rational numbers Q inside R. Can we find a fraction near an irrational number like π?",
      radiusLabel: "Neighborhood Radius ε",
      tight: "Tight",
      wide: "Wide",
      targetLabel: "Target irrational:",
      foundLabel: "Found rational in window:",
      windowLabel: "Neighborhood Window",
      verdict: "No matter how incredibly small you make the neighborhood radius ε around π, you will always trap a fraction inside it. Because every real number has rationals infinitely close to it, Q is dense in R."
    },
    FR: {
      title: "Interactif : La densité des rationnels",
      subtitle: "L'ensemble dense le plus célèbre est celui des nombres rationnels Q dans R. Pouvons-nous trouver une fraction proche d'un nombre irrationnel comme π ?",
      radiusLabel: "Rayon du voisinage ε",
      tight: "Étroit",
      wide: "Large",
      targetLabel: "Irrationnel cible :",
      foundLabel: "Rationnel trouvé :",
      windowLabel: "Fenêtre du voisinage",
      verdict: "Peu importe la petitesse du rayon ε autour de π, vous capturerez toujours une fraction à l'intérieur. Comme chaque nombre réel a des rationnels infiniment proches de lui, Q est dense dans R."
    }
  };

  const curr = content[language];

  const rational = useMemo(() => {
    const low = PI - epsilon;
    const high = PI + epsilon;
    for (let q = 1; q < 5000; q++) {
      const p = Math.floor(low * q) + 1;
      if (p / q < high) {
        return { p, q, val: p / q };
      }
    }
    return { p: 355, q: 113, val: 355/113 };
  }, [epsilon]);

  return (
    <section className="bg-slate-50 py-24 px-6">
      <div className="mx-auto max-w-5xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-4 tracking-tight">{curr.title}</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            {curr.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-stretch">
          <div className="lg:col-span-1 bg-white p-8 rounded-[2.5rem] border border-slate-200 shadow-sm flex flex-col justify-between">
            <div>
              <label className="text-xs font-bold text-slate-400 uppercase tracking-widest flex items-center gap-2 mb-6">
                <Sliders className="w-4 h-4 text-blue-500" /> {curr.radiusLabel}
              </label>
              <input 
                type="range" min="0.001" max="0.5" step="0.001"
                value={epsilon} onChange={(e) => setEpsilon(parseFloat(e.target.value))}
                className="w-full h-2 bg-slate-100 rounded-lg appearance-none cursor-pointer accent-blue-600"
              />
              <div className="flex justify-between mt-3 text-[10px] font-mono text-slate-400 font-bold">
                <span>0.001 ({curr.tight})</span>
                <span>0.5 ({curr.wide})</span>
              </div>
            </div>

            <div className="mt-12 space-y-6">
               <div className="p-5 bg-blue-50 rounded-2xl border border-blue-100">
                  <p className="text-[10px] text-blue-400 font-bold uppercase mb-2">{curr.targetLabel}</p>
                  <div className="flex justify-between items-baseline">
                    <InlineMath math="\\pi \\approx" />
                    <span className="font-mono text-lg text-blue-900">3.141592...</span>
                  </div>
               </div>

               <div className="p-5 bg-slate-900 rounded-2xl border border-slate-800 shadow-xl">
                  <p className="text-[10px] text-slate-500 font-bold uppercase mb-2">{curr.foundLabel}</p>
                  <AnimatePresence mode="wait">
                    <motion.div 
                      key={`${rational.p}/${rational.q}`}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="flex justify-between items-center text-white"
                    >
                      <InlineMath math={`\\frac{${rational.p}}{${rational.q}}`} />
                      <span className="font-mono text-sm text-emerald-400">≈ {rational.val.toFixed(5)}</span>
                    </motion.div>
                  </AnimatePresence>
               </div>
            </div>
          </div>

          <div className="lg:col-span-2 bg-slate-900 rounded-[3rem] p-12 min-h-[450px] flex flex-col justify-center relative overflow-hidden shadow-2xl">
            <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

            <div className="relative z-10 w-full space-y-20">
               <div className="relative h-px bg-slate-700 w-full">
                  <div className="absolute left-1/2 top-0 -translate-x-1/2 flex flex-col items-center">
                    <div className="h-20 w-px bg-blue-500/50 -translate-y-10" />
                    <div className="w-4 h-4 bg-blue-500 rounded-full shadow-[0_0_15px_rgba(59,130,246,0.8)] -translate-y-2" />
                    <span className="mt-4 text-xl font-serif italic text-blue-400"><InlineMath math="\\pi" /></span>
                  </div>

                  <motion.div
                    animate={{ 
                      width: `${(epsilon / 0.6) * 100}%` 
                    }}
                    className="absolute left-1/2 top-0 h-12 -translate-y-1/2 -translate-x-1/2 bg-blue-500/10 border-x border-blue-400/40 rounded-sm"
                  >
                    <div className="absolute top-full left-1/2 -translate-x-1/2 mt-1 text-[8px] font-bold text-blue-400/60 uppercase">{curr.windowLabel}</div>
                  </motion.div>

                  <motion.div
                    key={`${rational.p}-${rational.q}`}
                    animate={{ 
                      left: `${50 + ((rational.val - PI) / 0.6) * 100}%`
                    }}
                    className="absolute top-0 flex flex-col items-center"
                  >
                    <div className="h-10 w-px bg-emerald-500/40" />
                    <div className="w-2 h-2 bg-emerald-400 rounded-full shadow-[0_0_10px_rgba(52,211,153,0.5)]" />
                    <span className="mt-2 text-[10px] font-mono text-emerald-300"><InlineMath math={`q=${rational.q}`} /></span>
                  </motion.div>
               </div>

               <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 max-w-xl mx-auto">
                  <div className="flex gap-4">
                    <Compass className="w-6 h-6 text-emerald-400 shrink-0 mt-1" />
                    <p className="text-slate-300 text-sm leading-relaxed">
                      {curr.verdict}
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

export default RationalDensityVisualizer;
