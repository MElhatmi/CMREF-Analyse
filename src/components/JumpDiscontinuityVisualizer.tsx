import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Target, Search, XCircle, CheckCircle2 } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const JumpDiscontinuityVisualizer: React.FC = () => {
  const [targetY, setTargetY] = useState(1);
  const [targetHeight, setTargetHeight] = useState(0.5);
  const [showPullback, setShowPullback] = useState(false);
  const { language } = useLanguage();

  const windowLow = targetY - targetHeight;
  const windowHigh = targetY + targetHeight;

  const isDiscontinuousDetected = windowLow > 0 && windowLow < 1 && windowHigh > 1;

  const content = {
    EN: {
      title: "Interactive: Catching a \"Jump\" Discontinuity",
      subtitle: "Drag the \"Target Window\" (Open Set O) on the Y-axis. If the function is continuous, its inverse image f⁻¹(O) must always be open.",
      controlTarget: "Target Set O (Y-Axis)",
      controlHeight: "Set Height",
      low: "Low",
      high: "High",
      btnCompute: "Compute Inverse Image",
      verdictTitle: "Topological Verdict",
      successText: "Detected! The preimage is [0, +∞[, which is NOT open in R. The function fails the continuity test.",
      failText: "For this specific set, the preimage is open (either empty, R, or ]-∞, 0[). Continuity not yet disproven.",
      openSetLabel: "Open Set O",
      preimageLabel: "Inverse Image f⁻¹(O)"
    },
    FR: {
      title: "Interactif : Détecter une discontinuité de « Saut »",
      subtitle: "Faites glisser la « Fenêtre Cible » (Ouvert O) sur l'axe Y. Si la fonction est continue, son image réciproque f⁻¹(O) doit toujours être ouverte.",
      controlTarget: "Ensemble Cible O (Axe Y)",
      controlHeight: "Hauteur de l'ensemble",
      low: "Bas",
      high: "Haut",
      btnCompute: "Calculer l'image réciproque",
      verdictTitle: "Verdict Topologique",
      successText: "Détecté ! La pré-image est [0, +∞[, ce qui n'est PAS un ouvert de R. La fonction échoue au test de continuité.",
      failText: "Pour cet ensemble spécifique, la pré-image est ouverte (soit vide, R, ou ]-∞, 0[). La continuité n'est pas encore infirmée.",
      openSetLabel: "Ensemble Ouvert O",
      preimageLabel: "Image Réciproque f⁻¹(O)"
    }
  };

  const curr = content[language];

  return (
    <section className="bg-white py-24 px-6 overflow-hidden">
      <div className="mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-4 tracking-tight">{curr.title}</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            {curr.subtitle}
          </p>
        </div>

        <div className="bg-slate-50 rounded-[3rem] p-10 border border-slate-100 shadow-inner">
           <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
              
              <div className="lg:col-span-1 space-y-8">
                 <div className="space-y-6">
                    <div>
                       <label className="text-xs font-bold text-slate-400 uppercase tracking-widest block mb-4 flex items-center gap-2">
                         <Target className="w-3 h-3 text-orange-500" /> {curr.controlTarget}
                       </label>
                       <input 
                         type="range" min="0" max="1.5" step="0.05"
                         value={targetY} onChange={(e) => { setTargetY(parseFloat(e.target.value)); setShowPullback(false); }}
                         className="w-full h-1 bg-slate-200 rounded-lg appearance-none accent-orange-500"
                       />
                       <div className="flex justify-between mt-2 text-[10px] text-slate-400 font-mono">
                          <span>{curr.low}</span>
                          <span>{curr.high}</span>
                       </div>
                    </div>
                    <div>
                       <label className="text-xs font-bold text-slate-400 uppercase tracking-widest block mb-4">{curr.controlHeight}</label>
                       <input 
                         type="range" min="0.1" max="0.5" step="0.05"
                         value={targetHeight} onChange={(e) => { setTargetHeight(parseFloat(e.target.value)); setShowPullback(false); }}
                         className="w-full h-1 bg-slate-200 rounded-lg appearance-none accent-orange-500"
                       />
                    </div>
                 </div>

                 <button 
                  onClick={() => setShowPullback(true)}
                  className="w-full flex items-center justify-center gap-2 bg-slate-900 hover:bg-slate-800 text-white py-4 rounded-2xl font-bold transition-all shadow-xl shadow-slate-200"
                 >
                   <Search className="w-4 h-4" /> {curr.btnCompute}
                 </button>

                 <AnimatePresence>
                    {showPullback && (
                      <motion.div 
                        initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
                        className={`p-6 rounded-[2rem] border ${isDiscontinuousDetected ? 'bg-red-50 border-red-100 text-red-900' : 'bg-emerald-50 border-emerald-100 text-emerald-900'}`}
                      >
                         <div className="flex gap-4 items-start">
                            {isDiscontinuousDetected ? <XCircle className="w-6 h-6 shrink-0 text-red-500" /> : <CheckCircle2 className="w-6 h-6 shrink-0 text-emerald-500" />}
                            <div>
                               <h5 className="font-bold text-sm mb-1 uppercase tracking-tight">{curr.verdictTitle}</h5>
                               <p className="text-xs leading-relaxed opacity-80">
                                  {isDiscontinuousDetected ? curr.successText : curr.failText}
                               </p>
                            </div>
                         </div>
                      </motion.div>
                    )}
                 </AnimatePresence>
              </div>

              <div className="lg:col-span-2 flex justify-center">
                 <div className="w-full max-w-lg aspect-square bg-white rounded-[4rem] border border-slate-100 shadow-2xl relative overflow-hidden">
                    <svg viewBox="0 0 400 400" className="w-full h-full p-8">
                       <defs>
                          <pattern id="graph-grid" width="40" height="40" patternUnits="userSpaceOnUse">
                             <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#f1f5f9" strokeWidth="1"/>
                          </pattern>
                       </defs>
                       <rect width="100%" height="100%" fill="url(#graph-grid)" />

                       <line x1="200" y1="0" x2="200" y2="400" stroke="#cbd5e1" strokeWidth="1" />
                       <line x1="0" y1="200" x2="400" y2="200" stroke="#cbd5e1" strokeWidth="1" />

                       <line x1="0" y1="200" x2="200" y2="200" stroke="#3b82f6" strokeWidth="3" />
                       <line x1="200" y1="120" x2="400" y2="120" stroke="#3b82f6" strokeWidth="3" />
                       <circle cx="200" cy="200" r="4" fill="white" stroke="#3b82f6" strokeWidth="2" />
                       <circle cx="200" cy="120" r="4" fill="#3b82f6" />

                       <motion.rect 
                          animate={{ 
                            y: 200 - (windowHigh * 80),
                            height: (windowHigh - windowLow) * 80
                          }}
                          x="0" width="400"
                          fill="rgba(249, 115, 22, 0.1)"
                          stroke="#f97316"
                          strokeDasharray="4 2"
                       />
                       <text x="10" y="30" className="text-[8px] font-bold fill-orange-500 uppercase tracking-widest">{curr.openSetLabel}</text>

                       <AnimatePresence>
                          {showPullback && (
                            <motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                               {windowLow > 0 && windowLow < 1 && windowHigh > 1 && (
                                 <>
                                    <rect x="200" y="198" width="200" height="4" fill="#ef4444" rx="2" />
                                    <circle cx="200" cy="200" r="4" fill="#ef4444" />
                                    <text x="210" y="220" className="text-[10px] font-bold fill-red-500">f⁻¹(O) = [0, +∞[</text>
                                 </>
                               )}
                               {windowLow < 0 && windowHigh > 0 && windowHigh < 1 && (
                                 <>
                                    <rect x="0" y="198" width="200" height="4" fill="#10b981" rx="2" />
                                    <circle cx="200" cy="200" r="4" fill="white" stroke="#10b981" strokeWidth="2" />
                                    <text x="20" y="220" className="text-[10px] font-bold fill-emerald-500">f⁻¹(O) = ]-∞, 0[</text>
                                 </>
                               )}
                            </motion.g>
                          )}
                       </AnimatePresence>
                    </svg>
                 </div>
              </div>
           </div>
        </div>
      </div>
    </section>
  );
};

export default JumpDiscontinuityVisualizer;
