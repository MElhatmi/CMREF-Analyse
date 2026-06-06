import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { InlineMath, BlockMath } from './Math';
import { AlertCircle, Sliders } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

type Mode = 'intersection' | 'union';

const InteractiveVisualizer: React.FC = () => {
  const [n, setN] = useState(1);
  const [mode, setMode] = useState<Mode>('intersection');
  const { language } = useLanguage();

  const isInfinity = n >= 20;

  const content = {
    EN: {
      title: "The Danger of Infinite Operations",
      subtitle: "Topology treats unions and intersections differently. While any union of open sets is open, only finite intersections are guaranteed to stay open.",
      modeLabel: "Choose Mode",
      modeIntersection: "Infinite Intersection of Opens",
      modeUnion: "Infinite Union of Closeds",
      stepLabel: "Step n =",
      finite: "Finite",
      limits: "Limits to Infinity",
      currentSet: "Current Set:",
      observationTitle: "Observation at the Limit",
      finiteTitle: "Finite Behavior",
      intersectionInfinity: "The infinite intersection collapsed into a single point {0}. A single point is a CLOSED set, not open! This shows why Axiom 2 restricts us to finite intersections.",
      intersectionFinite: "As n increases, the open interval shrinks but remains open. There's always 'room' around zero.",
      unionInfinity: "The infinite union resulted in a half-open interval ]0, 1], which is neither strictly open nor closed in the standard topology.",
      unionFinite: "We are summing up closed blocks. They stay within [0, 1] but never quite touch 0.",
      result: "Result:"
    },
    FR: {
      title: "Le Danger des Opérations Infinies",
      subtitle: "La topologie traite différemment les réunions et les intersections. Alors que toute réunion d'ouverts est ouverte, seules les intersections finies sont garanties rester ouvertes.",
      modeLabel: "Choisir le Mode",
      modeIntersection: "Intersection Infinie d'Ouverts",
      modeUnion: "Réunion Infinie de Fermés",
      stepLabel: "Étape n =",
      finite: "Fini",
      limits: "Limite à l'Infini",
      currentSet: "Ensemble Actuel :",
      observationTitle: "Observation à la Limite",
      finiteTitle: "Comportement Fini",
      intersectionInfinity: "L'intersection infinie s'est contractée en un seul point {0}. Un point unique est un ensemble FERMÉ, pas ouvert ! Cela montre pourquoi l'Axiome 2 se limite aux intersections finies.",
      intersectionFinite: "À mesure que n augmente, l'intervalle ouvert rétrécit mais reste ouvert. Il y a toujours de l'« espace » autour de zéro.",
      unionInfinity: "La réunion infinie a abouti à un intervalle semi-ouvert ]0, 1], qui n'est ni strictement ouvert ni fermé dans la topologie usuelle.",
      unionFinite: "Nous additionnons des blocs fermés. Ils restent dans [0, 1] mais ne touchent jamais tout à fait 0.",
      result: "Résultat :"
    }
  };

  const curr = content[language];

  return (
    <section className="bg-white py-20 px-6">
      <div className="mx-auto max-w-5xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900">{curr.title}</h2>
          <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
            {curr.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          {/* Controls */}
          <div className="lg:col-span-1 space-y-6 bg-slate-50 p-6 rounded-2xl border border-slate-200">
            <div>
              <label className="text-sm font-semibold text-slate-500 uppercase tracking-wider block mb-3">{curr.modeLabel}</label>
              <div className="flex flex-col gap-2">
                <button 
                  onClick={() => { setMode('intersection'); setN(1); }}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${mode === 'intersection' ? 'bg-blue-600 text-white shadow-md' : 'bg-white text-slate-600 hover:bg-slate-100'}`}
                >
                  {curr.modeIntersection}
                </button>
                <button 
                  onClick={() => { setMode('union'); setN(1); }}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${mode === 'union' ? 'bg-blue-600 text-white shadow-md' : 'bg-white text-slate-600 hover:bg-slate-100'}`}
                >
                  {curr.modeUnion}
                </button>
              </div>
            </div>

            <div>
              <label className="text-sm font-semibold text-slate-500 uppercase tracking-wider flex items-center gap-2 mb-3">
                <Sliders className="w-4 h-4" />
                {curr.stepLabel} {isInfinity ? '∞' : n}
              </label>
              <input 
                type="range" 
                min="1" 
                max="20" 
                value={n} 
                onChange={(e) => setN(parseInt(e.target.value))}
                className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
              />
              <div className="flex justify-between text-[10px] text-slate-400 mt-1 uppercase font-bold">
                <span>{curr.finite}</span>
                <span>{curr.limits}</span>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-200">
              <h4 className="font-bold text-slate-900 text-sm mb-2">{curr.currentSet}</h4>
              {mode === 'intersection' ? (
                <BlockMath math={`I_n = \\left] -\\frac{1}{n}, \\frac{1}{n} \\right[`} />
              ) : (
                <BlockMath math={`F_n = \\left[ \\frac{1}{n}, 1 \\right]`} />
              )}
            </div>
          </div>

          {/* Visualization Area */}
          <div className="lg:col-span-2 bg-slate-900 rounded-3xl p-8 min-h-[400px] flex flex-col justify-between relative overflow-hidden shadow-2xl">
            {/* Number Line */}
            <div className="relative h-2 bg-slate-700 w-full rounded-full my-auto">
               {/* Ticks */}
               {[-1, -0.5, 0, 0.5, 1].map((tick) => (
                 <div key={tick} className="absolute top-0 flex flex-col items-center" style={{ left: `${(tick + 1.5) / 3 * 100}%` }}>
                   <div className="h-4 w-0.5 bg-slate-600 -translate-y-1.5" />
                   <span className="text-[10px] text-slate-500 mt-2 font-mono">{tick}</span>
                 </div>
               ))}

               {/* The Set Visualization */}
               <AnimatePresence mode="wait">
                 {mode === 'intersection' ? (
                   <motion.div 
                    key={`int-${n}`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="absolute top-1/2 -translate-y-1/2 h-4 bg-blue-500/30 border-x-2 border-blue-400 transition-all duration-300 rounded-sm"
                    style={{ 
                      left: `${(-1/n + 1.5) / 3 * 100}%`,
                      right: `${100 - (1/n + 1.5) / 3 * 100}%`,
                    }}
                   >
                     {/* Open Boundary Indicators */}
                     <div className="absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 border-2 border-blue-400 bg-slate-900 rounded-full" />
                     <div className="absolute right-0 top-1/2 translate-x-1/2 -translate-y-1/2 w-3 h-3 border-2 border-blue-400 bg-slate-900 rounded-full" />
                   </motion.div>
                 ) : (
                   <motion.div 
                    key={`uni-${n}`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="absolute top-1/2 -translate-y-1/2 h-4 bg-emerald-500/30 transition-all duration-300"
                    style={{ 
                      left: `${(1/20 + 1.5) / 3 * 100}%`, 
                      width: `${(1 - 1/n) / 3 * 100}%`,
                      marginLeft: `${(1/n - 1/20) / 3 * 100}%`
                    }}
                   >
                     {/* Closed Boundary Indicators */}
                     <div className="absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-emerald-400 rounded-sm" />
                     <div className="absolute right-0 top-1/2 translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-emerald-400 rounded-sm" />
                   </motion.div>
                 )}
               </AnimatePresence>

               {/* Origin marker */}
               <div className="absolute top-1/2 left-[50%] -translate-x-1/2 -translate-y-1/2 w-1 h-8 bg-slate-500/20" />
            </div>

            {/* Conclusion Overlay */}
            <div className="mt-8 bg-white/5 backdrop-blur-md p-6 rounded-2xl border border-white/10">
              <div className="flex gap-4 items-start">
                <AlertCircle className={`w-6 h-6 flex-shrink-0 ${isInfinity ? 'text-amber-400' : 'text-blue-400'}`} />
                <div>
                  <h5 className="font-bold text-white mb-1">
                    {isInfinity ? curr.observationTitle : curr.finiteTitle}
                  </h5>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    {mode === 'intersection' ? (
                      isInfinity 
                        ? curr.intersectionInfinity
                        : curr.intersectionFinite
                    ) : (
                      isInfinity
                        ? curr.unionInfinity
                        : curr.unionFinite
                    )}
                  </p>
                  {isInfinity && (
                    <div className="mt-4 text-xs font-mono text-amber-300/80 bg-amber-900/20 p-2 rounded">
                      {curr.result} {mode === 'intersection' ? <InlineMath math="\bigcap_{n=1}^\infty I_n = \{0\}" /> : <InlineMath math="\bigcup_{n=1}^\infty F_n = ]0, 1]" />}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InteractiveVisualizer;
