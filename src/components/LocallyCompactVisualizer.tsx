import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { XCircle, CheckCircle2, Box } from 'lucide-react';
import { InlineMath } from './Math';
import { useLanguage } from '../context/LanguageContext';

type Space = 'R' | 'Q';

const LocallyCompactVisualizer: React.FC = () => {
  const [space, setSpace] = useState<Space>('R');
  const [active, setActive] = useState(false);
  const { language } = useLanguage();

  const content = {
    EN: {
      title: "Interactive: R vs. Q (The Missing Limit Points)",
      subtitle: "Visually demonstrate why the real line succeeds at local compactness while the rational numbers fail.",
      selectLabel: "Select Universe",
      spaceR: "Space: ℝ (Reals)",
      spaceQ: "Space: ℚ (Rationals)",
      btnAction: "Draw Neighborhood around x=1",
      successLabel: "Success",
      failLabel: "Failed",
      successDesc: "Success. The closed interval [0, 2] has no holes. It is closed and bounded, making it a perfectly compact neighborhood in ℝ.",
      failDesc: "Failed. The neighborhood tries to act like a closed interval, but irrational numbers like √2 are missing! This allows infinite covers to exploit the gaps.",
      missing: "Missing:",
      focus: "Focus x=1"
    },
    FR: {
      title: "Interactif : R vs. Q (Les points limites manquants)",
      subtitle: "Démontrez visuellement pourquoi la droite réelle réussit le test de compacité locale alors que les rationnels échouent.",
      selectLabel: "Sélectionner l'univers",
      spaceR: "Espace : ℝ (Réels)",
      spaceQ: "Espace : ℚ (Rationnels)",
      btnAction: "Tracer le voisinage autour de x=1",
      successLabel: "Succès",
      failLabel: "Échec",
      successDesc: "Succès. L'intervalle fermé [0, 2] n'a pas de trous. Il est fermé et borné, ce qui en fait un voisinage parfaitement compact dans ℝ.",
      failDesc: "Échec. Le voisinage tente de se comporter comme un intervalle fermé, mais les irrationnels comme √2 manquent à l'appel ! Cela permet aux recouvrements infinis d'exploiter les vides.",
      missing: "Manquant :",
      focus: "Cible x=1"
    }
  };

  const curr = content[language];

  return (
    <section className="bg-slate-50 py-24 px-6 overflow-hidden">
      <div className="mx-auto max-w-5xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-4 tracking-tight">{curr.title}</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            {curr.subtitle}
          </p>
        </div>

        <div className="bg-white rounded-[3rem] p-10 shadow-sm border border-slate-200">
           <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
              
              <div className="lg:col-span-1 space-y-8">
                 <div>
                    <label className="text-xs font-bold text-slate-400 uppercase tracking-widest block mb-4">{curr.selectLabel}</label>
                    <div className="flex flex-col gap-2">
                       <button 
                        onClick={() => { setSpace('R'); setActive(false); }}
                        className={`py-4 rounded-2xl font-bold text-sm transition-all border-2 flex items-center justify-center gap-2 ${space === 'R' ? 'bg-indigo-600 text-white border-indigo-600 shadow-xl shadow-indigo-100' : 'bg-white text-slate-500 border-slate-100 hover:border-indigo-200'}`}
                       >
                         {curr.spaceR}
                       </button>
                       <button 
                        onClick={() => { setSpace('Q'); setActive(false); }}
                        className={`py-4 rounded-2xl font-bold text-sm transition-all border-2 flex items-center justify-center gap-2 ${space === 'Q' ? 'bg-red-600 text-white border-red-600 shadow-xl shadow-red-100' : 'bg-white text-slate-500 border-slate-100 hover:border-red-200'}`}
                       >
                         {curr.spaceQ}
                       </button>
                    </div>
                 </div>

                 <button 
                  onClick={() => setActive(true)}
                  className="w-full bg-slate-900 hover:bg-slate-800 text-white py-4 rounded-2xl font-bold transition-all shadow-lg flex items-center justify-center gap-3"
                 >
                   <Box className="w-5 h-5" /> {curr.btnAction}
                 </button>

                 <AnimatePresence>
                    {active && (
                       <motion.div 
                        initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
                        className={`p-6 rounded-[2rem] border ${space === 'R' ? 'bg-emerald-50 border-emerald-100 text-emerald-900' : 'bg-red-50 border-red-100 text-red-900'}`}
                       >
                          <div className="flex gap-4">
                             {space === 'R' ? <CheckCircle2 className="w-6 h-6 shrink-0" /> : <XCircle className="w-6 h-6 shrink-0" />}
                             <div>
                                <h5 className="font-bold text-xs uppercase tracking-widest mb-1">{space === 'R' ? curr.successLabel : curr.failLabel}</h5>
                                <p className="text-[10px] leading-relaxed opacity-80 italic">
                                   {space === 'R' ? curr.successDesc : curr.failDesc}
                                </p>
                             </div>
                          </div>
                       </motion.div>
                    )}
                 </AnimatePresence>
              </div>

              <div className="lg:col-span-2 flex justify-center">
                 <div className="w-full max-w-lg aspect-[16/9] bg-slate-900 rounded-[3rem] border border-slate-800 shadow-2xl relative overflow-hidden flex flex-col justify-center p-12">
                    <div className="relative h-px bg-slate-700 w-full">
                       {[0, 1, 2].map(v => (
                         <div key={v} className="absolute flex flex-col items-center" style={{ left: `${(v / 2) * 100}%` }}>
                            <div className="h-4 w-px bg-slate-700 -translate-y-1.5" />
                            <span className="text-[10px] text-slate-500 mt-2 font-mono">{v}</span>
                         </div>
                       ))}

                       <AnimatePresence>
                          {active && (
                            <motion.div 
                              initial={{ scaleX: 0 }} animate={{ scaleX: 1 }}
                              className="absolute top-0 inset-x-0 h-8 -translate-y-1/2 flex items-center justify-center"
                            >
                               {space === 'R' ? (
                                 <div className="w-full h-4 bg-emerald-500/20 border-2 border-emerald-500 rounded-lg shadow-[0_0_20px_rgba(16,185,129,0.2)]" />
                               ) : (
                                 <div className="w-full h-4 bg-red-500/5 border-2 border-dashed border-red-500 rounded-lg flex justify-center items-center gap-1 overflow-hidden">
                                    {Array.from({ length: 15 }).map((_, i) => (
                                      <div key={i} className="w-1 h-px bg-red-400 opacity-40 shrink-0" />
                                    ))}
                                 </div>
                               )}

                               {space === 'Q' && (
                                 <motion.div 
                                    initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.5 }}
                                    className="absolute flex flex-col items-center"
                                    style={{ left: `${(Math.sqrt(2) / 2) * 100}%` }}
                                 >
                                    <div className="h-10 w-0.5 bg-red-500 -translate-y-5" />
                                    <div className="w-2 h-2 bg-red-600 rounded-full shadow-[0_0_10px_rgba(239,68,68,0.8)]" />
                                    <div className="absolute top-full mt-2 text-[8px] font-bold text-red-500 uppercase whitespace-nowrap bg-slate-900 px-1 italic">
                                       {curr.missing} <InlineMath math="\sqrt{2}" />
                                    </div>
                                 </motion.div>
                               )}
                            </motion.div>
                          )}
                       </AnimatePresence>

                       <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center z-10 pointer-events-none">
                          <div className="w-3 h-3 bg-white rounded-full border-2 border-slate-900 shadow-[0_0_10px_white]" />
                          <span className="mt-6 text-[10px] font-bold text-slate-400 uppercase tracking-[0.3em]">{curr.focus}</span>
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

export default LocallyCompactVisualizer;
