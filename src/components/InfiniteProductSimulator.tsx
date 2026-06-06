import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShieldCheck, AlertCircle, Info, ZapOff } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const InfiniteProductSimulator: React.FC = () => {
  const [restrictions, setRestrictions] = useState<boolean[]>(new Array(10).fill(false));
  const { language } = useLanguage();

  const content = {
    EN: {
      title: "The Infinite Trap (R^N)",
      subtitle: "In infinite products, the Product Topology is very strict. Only a finite number of dimensions are allowed to be restricted!",
      dashLabel: "Dimension Dashboard",
      dim: "Dimension",
      restricted: "Restricted to ]0, 1[",
      unrestricted: "Equal to R",
      btnRestrict: "Restrict all dimensions",
      btnReset: "Reset",
      validBadge: "Valid Open Set",
      invalidBadge: "Non-Open (Product Topology)",
      trapTitle: "The Box Topology Trap",
      trapDesc: "\"If you restrict an infinite number of dimensions, you've created a set that is too 'small' for the standard product topology.\"",
      info1: "The Standard Product Topology requires that all but a finite number of component sets are equal to the whole space Ei.",
      info2: "A set where every dimension is restricted (like \u220F ]0, 1[) is open in the Box Topology, but NOT here!"
    },
    FR: {
      title: "Le piège de l'infini (R^N)",
      subtitle: "Dans les produits infinis, la topologie produit est très stricte. Seul un nombre fini de dimensions peut être restreint !",
      dashLabel: "Tableau de bord des dimensions",
      dim: "Dimension",
      restricted: "Restreint à ]0, 1[",
      unrestricted: "Égal à R",
      btnRestrict: "Restreindre toutes les dimensions",
      btnReset: "Réinitialiser",
      validBadge: "Ouvert Valide",
      invalidBadge: "Non-Ouvert (Topologie Produit)",
      trapTitle: "Le piège de la Box Topology",
      trapDesc: "« Si vous restreignez une infinité de dimensions, vous créez un ensemble trop « petit » pour la topologie produit standard. »",
      info1: "La Topologie Produit Standard exige que presque tous les ensembles composants soient égaux à l'espace entier Ei.",
      info2: "Un ensemble où chaque dimension est restreinte (comme \u220F ]0, 1[) est ouvert dans la Box Topology, mais PAS ici !"
    }
  };

  const curr = content[language];

  const toggle = (i: number) => {
    const next = [...restrictions];
    next[i] = !next[i];
    setRestrictions(next);
  };

  const restrictAll = () => setRestrictions(new Array(10).fill(true));
  const reset = () => setRestrictions(new Array(10).fill(false));

  const restrictedCount = restrictions.filter(r => r).length;
  const isValid = restrictedCount <= 5; 
  
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
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              
              <div className="space-y-8">
                 <div>
                    <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-6">{curr.dashLabel}</h3>
                    <div className="space-y-3">
                       {restrictions.map((isRestricted, i) => (
                         <div key={i} className="flex items-center justify-between p-4 bg-slate-50 rounded-2xl border border-slate-100 transition-all">
                            <span className="text-xs font-bold text-slate-500 uppercase tracking-tighter">{curr.dim} {i+1}</span>
                            <button 
                              onClick={() => toggle(i)}
                              className={`px-4 py-2 rounded-xl text-[10px] font-bold uppercase tracking-widest transition-all ${isRestricted ? 'bg-blue-600 text-white shadow-lg shadow-blue-100' : 'bg-white border border-slate-200 text-slate-400'}`}
                            >
                              {isRestricted ? curr.restricted : curr.unrestricted}
                            </button>
                         </div>
                       ))}
                       <div className="p-4 bg-slate-900 rounded-2xl border border-slate-800 flex items-center justify-center italic text-[10px] text-slate-500 uppercase font-bold tracking-[0.3em]">
                          Dim n ... Dim ∞
                       </div>
                    </div>
                 </div>

                 <div className="flex gap-4">
                    <button onClick={restrictAll} className="flex-grow bg-slate-100 hover:bg-red-50 hover:text-red-600 text-slate-500 py-3 rounded-2xl text-[10px] font-bold uppercase transition-all">
                       {curr.btnRestrict}
                    </button>
                    <button onClick={reset} className="px-6 bg-slate-100 text-slate-500 py-3 rounded-2xl text-[10px] font-bold uppercase transition-all">
                       {curr.btnReset}
                    </button>
                 </div>
              </div>

              <div className="flex flex-col justify-between">
                 <div className="bg-slate-900 rounded-[2.5rem] p-10 text-white h-full flex flex-col justify-center relative overflow-hidden shadow-2xl">
                    <AnimatePresence mode="wait">
                       {isValid ? (
                         <motion.div 
                          key="valid" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
                          className="bg-emerald-500/20 border border-emerald-500/40 rounded-full px-6 py-2 inline-flex items-center gap-2 self-center mb-10"
                         >
                            <ShieldCheck className="w-4 h-4 text-emerald-400" />
                            <span className="text-[10px] font-bold text-emerald-400 uppercase tracking-widest">{curr.validBadge}</span>
                         </motion.div>
                       ) : (
                         <motion.div 
                          key="invalid" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
                          className="bg-red-500/20 border border-red-500/40 rounded-full px-6 py-2 inline-flex items-center gap-2 self-center mb-10"
                         >
                            <AlertCircle className="w-4 h-4 text-red-400" />
                            <span className="text-[10px] font-bold text-red-400 uppercase tracking-widest">{curr.invalidBadge}</span>
                         </motion.div>
                       )}
                    </AnimatePresence>

                    <div className="space-y-6">
                       <h4 className="text-xl font-bold tracking-tight text-center">
                         {curr.trapTitle}
                       </h4>
                       <p className="text-slate-400 text-sm leading-relaxed text-center italic">
                         {curr.trapDesc}
                       </p>
                       
                       <div className="p-6 bg-white/5 rounded-3xl border border-white/10 space-y-4">
                          <div className="flex gap-4">
                             <Info className="w-5 h-5 text-blue-400 shrink-0" />
                             <p className="text-xs text-slate-300 leading-relaxed">
                               {curr.info1}
                             </p>
                          </div>
                          <div className="flex gap-4">
                             <ZapOff className="w-5 h-5 text-amber-400 shrink-0" />
                             <p className="text-xs text-slate-300 leading-relaxed">
                               {curr.info2}
                             </p>
                          </div>
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

export default InfiniteProductSimulator;
