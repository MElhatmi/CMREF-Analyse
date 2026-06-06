import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, ChevronDown, CheckCircle2, XCircle } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

type Topology = 'metric' | 'trivial' | 'sierpinski';

const SeparationTestVisualizer: React.FC = () => {
  const [topology, setTopology] = useState<Topology>('metric');
  const [attempted, setAttempted] = useState(false);
  const { language } = useLanguage();

  const content = {
    EN: {
      title: "Interactive: The Separation Test",
      subtitle: "Test if two distinct points can be isolated under different topological rules.",
      selectLabel: "Select Topology",
      options: {
        metric: "Metric Space",
        trivial: "Trivial Space",
        sierpinski: "Sierpiński Space"
      },
      btnAttempt: "Attempt to Separate",
      verdictLabel: "Verdict",
      ready: "Ready for test",
      success: "Separation Successful: Distinct non-overlapping neighborhoods found.",
      failTrivial: "Separation Failed: The only open set is the entire space.",
      failSierpinski: "Separation Failed: x has its own open set, but y's only open set includes x."
    },
    FR: {
      title: "Interactif : Le test de séparation",
      subtitle: "Testez si deux points distincts peuvent être isolés selon différentes règles topologiques.",
      selectLabel: "Sélectionner la topologie",
      options: {
        metric: "Espace métrique",
        trivial: "Espace grossier",
        sierpinski: "Espace de Sierpiński"
      },
      btnAttempt: "Tenter de séparer",
      verdictLabel: "Verdict",
      ready: "Prêt pour le test",
      success: "Séparation réussie : Des voisinages disjoints ont été trouvés.",
      failTrivial: "Échec de la séparation : Le seul ouvert est l'espace entier.",
      failSierpinski: "Échec de la séparation : x a son propre ouvert, mais le seul ouvert de y inclut x."
    }
  };

  const curr = content[language];

  const getStatus = () => {
    switch(topology) {
      case 'metric': return { success: true, text: curr.success };
      case 'trivial': return { success: false, text: curr.failTrivial };
      case 'sierpinski': return { success: false, text: curr.failSierpinski };
    }
  };

  const status = getStatus();

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
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
            
            <div className="lg:col-span-1 space-y-8">
               <div>
                  <label className="text-xs font-bold text-slate-400 uppercase tracking-widest block mb-4">{curr.selectLabel}</label>
                  <div className="relative">
                    <select 
                      value={topology}
                      onChange={(e) => { setTopology(e.target.value as Topology); setAttempted(false); }}
                      className="w-full appearance-none bg-white border border-slate-200 rounded-2xl px-6 py-4 font-bold text-slate-900 cursor-pointer focus:ring-2 focus:ring-blue-500 outline-none shadow-sm transition-all"
                    >
                      <option value="metric">{curr.options.metric}</option>
                      <option value="trivial">{curr.options.trivial}</option>
                      <option value="sierpinski">{curr.options.sierpinski}</option>
                    </select>
                    <ChevronDown className="absolute right-6 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 pointer-events-none" />
                  </div>
               </div>

               <button 
                onClick={() => setAttempted(true)}
                className="w-full flex items-center justify-center gap-2 bg-slate-900 hover:bg-slate-800 text-white py-4 rounded-2xl font-bold transition-all shadow-xl shadow-slate-200"
               >
                 <Play className="w-4 h-4" /> {curr.btnAttempt}
               </button>

               <AnimatePresence>
                 {attempted && (
                   <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`p-6 rounded-[2rem] border ${status.success ? 'bg-emerald-50 border-emerald-100 text-emerald-900' : 'bg-red-50 border-red-100 text-red-900'}`}
                   >
                     <div className="flex gap-4 items-start">
                        {status.success ? <CheckCircle2 className="w-6 h-6 shrink-0 text-emerald-500" /> : <XCircle className="w-6 h-6 shrink-0 text-red-500" />}
                        <div>
                           <h5 className="font-bold text-sm mb-1 uppercase tracking-tight">{curr.verdictLabel}</h5>
                           <p className="text-xs leading-relaxed opacity-80">{status.text}</p>
                        </div>
                     </div>
                   </motion.div>
                 )}
               </AnimatePresence>
            </div>

            <div className="lg:col-span-2 flex justify-center">
               <div className="w-full max-w-lg aspect-square bg-white rounded-[4rem] border border-slate-100 shadow-2xl relative overflow-hidden flex items-center justify-center">
                  <svg viewBox="0 0 400 400" className="w-full h-full">
                     <g>
                        <circle cx="150" cy="200" r="5" fill="#1e293b" />
                        <text x="140" y="185" className="text-xl font-serif italic fill-slate-900">x</text>
                     </g>
                     <g>
                        <circle cx="250" cy="200" r="5" fill="#1e293b" />
                        <text x="245" y="185" className="text-xl font-serif italic fill-slate-900">y</text>
                     </g>

                     <AnimatePresence>
                        {attempted && (
                           <>
                              {topology === 'metric' && (
                                 <g>
                                    <motion.circle 
                                       initial={{ scale: 0 }} animate={{ scale: 1 }}
                                       cx="150" cy="200" r="40" fill="rgba(59, 130, 246, 0.1)" stroke="#3b82f6" strokeDasharray="4 2"
                                    />
                                    <motion.circle 
                                       initial={{ scale: 0 }} animate={{ scale: 1 }}
                                       cx="250" cy="200" r="40" fill="rgba(147, 51, 234, 0.1)" stroke="#9333ea" strokeDasharray="4 2"
                                    />
                                 </g>
                              )}
                              {topology === 'trivial' && (
                                 <motion.rect 
                                    initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                                    x="0" y="0" width="400" height="400" fill="rgba(239, 68, 68, 0.05)" stroke="#ef4444" strokeWidth="4" strokeDasharray="8 8"
                                 />
                              )}
                              {topology === 'sierpinski' && (
                                 <g>
                                    <motion.circle 
                                       initial={{ scale: 0 }} animate={{ scale: 1 }}
                                       cx="150" cy="200" r="30" fill="rgba(59, 130, 246, 0.2)" stroke="#3b82f6"
                                    />
                                    <motion.rect 
                                       initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                                       x="0" y="0" width="400" height="400" fill="rgba(239, 68, 68, 0.05)" stroke="#ef4444" strokeWidth="4" strokeDasharray="8 8"
                                 />
                                 </g>
                              )}
                           </>
                        )}
                     </AnimatePresence>
                  </svg>
                  
                  <div className="absolute top-8 left-8 flex items-center gap-2">
                     <div className={`w-3 h-3 rounded-full animate-pulse ${attempted ? (status.success ? 'bg-emerald-500' : 'bg-red-500') : 'bg-slate-300'}`} />
                     <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{attempted ? status.text.split(':')[0] : curr.ready}</span>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SeparationTestVisualizer;
