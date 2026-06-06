import React from 'react';
import { BlockMath } from './Math';
import { Layers, Maximize, Minimize } from 'lucide-react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

const ExtremeTopologies: React.FC = () => {
  const { language } = useLanguage();

  const content = {
    EN: {
      title: "1. The Extremes",
      desc: "For any set E, there are always two \"extreme\" topologies that can be defined. They represent the minimum and maximum possible structures you can give to a space.",
      trivialTitle: "Trivial (Indiscrete):",
      trivialDesc: "The \"coarsest\" topology. We distinguish nothing.",
      discreteTitle: "Discrete:",
      discreteDesc: "The \"finest\" topology. We distinguish everything.",
      trivialLabel: "Trivial",
      discreteLabel: "Discrete",
      setE: "Set E",
      trivialFinal: "In this topology, the only non-empty open set is the entire space itself. You cannot \"isolate\" points.",
      discreteFinal: "Every point is an open set. This is the \"maximum\" information; every subset is distinguishable."
    },
    FR: {
      title: "1. Les Extrêmes",
      desc: "Pour tout ensemble E, il existe toujours deux topologies « extrêmes ». Elles représentent les structures minimale et maximale possibles pour un espace.",
      trivialTitle: "Grossière (Indiscrète) :",
      trivialDesc: "La topologie la plus « pauvre ». On ne distingue rien.",
      discreteTitle: "Discrète :",
      discreteDesc: "La topologie la plus « riche ». On distingue tout.",
      trivialLabel: "Grossière",
      discreteLabel: "Discrète",
      setE: "Ensemble E",
      trivialFinal: "Dans cette topologie, le seul ouvert non vide est l'espace entier. On ne peut pas « isoler » les points.",
      discreteFinal: "Chaque point est un ouvert. C'est le maximum d'information ; chaque partie est distinguable."
    }
  };

  const curr = content[language];

  return (
    <div className="bg-white rounded-[3rem] p-8 md:p-12 shadow-sm border border-slate-200 mb-12">
      <div className="flex flex-col lg:flex-row gap-12">
        <div className="lg:w-1/3">
          <div className="flex items-center gap-4 mb-6">
            <div className="h-12 w-12 bg-blue-100 rounded-2xl flex items-center justify-center text-blue-600">
              <Layers className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900">{curr.title}</h3>
          </div>
          <p className="text-slate-600 leading-relaxed mb-6">
            {curr.desc}
          </p>
          <div className="space-y-4">
             <div className="p-4 bg-slate-50 rounded-xl border border-slate-100">
                <p className="font-bold text-slate-900 text-sm mb-1">{curr.trivialTitle}</p>
                <p className="text-xs text-slate-500 italic">{curr.trivialDesc}</p>
             </div>
             <div className="p-4 bg-slate-50 rounded-xl border border-slate-100">
                <p className="font-bold text-slate-900 text-sm mb-1">{curr.discreteTitle}</p>
                <p className="text-xs text-slate-500 italic">{curr.discreteDesc}</p>
             </div>
          </div>
        </div>

        <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-slate-50 rounded-3xl p-6 border border-slate-100 flex flex-col">
            <div className="flex justify-between items-center mb-6">
              <span className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                <Minimize className="w-3 h-3" /> {curr.trivialLabel}
              </span>
              <BlockMath math="\mathcal{T}_g = \{\emptyset, E\}" />
            </div>
            
            <div className="flex-grow flex items-center justify-center p-8">
              <div className="relative w-full aspect-square max-w-[200px]">
                <div className="absolute inset-0 border-4 border-blue-500 bg-blue-500/5 rounded-[2rem] flex items-center justify-center">
                  <div className="flex gap-4">
                    <motion.div animate={{ scale: [1, 1.1, 1] }} transition={{ repeat: Infinity, duration: 3 }} className="w-4 h-4 bg-blue-600 rounded-full" />
                    <motion.div animate={{ scale: [1, 1.1, 1] }} transition={{ repeat: Infinity, duration: 3, delay: 1.5 }} className="w-4 h-4 bg-blue-600 rounded-full" />
                  </div>
                </div>
                <div className="absolute -top-4 -left-4 text-[10px] font-mono text-blue-400 font-bold bg-white px-2 py-1 rounded border border-blue-100 shadow-sm">{curr.setE}</div>
              </div>
            </div>
            <p className="text-xs text-slate-500 text-center mt-4">
              {curr.trivialFinal}
            </p>
          </div>

          <div className="bg-slate-50 rounded-3xl p-6 border border-slate-100 flex flex-col">
            <div className="flex justify-between items-center mb-6">
              <span className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full">
                <Maximize className="w-3 h-3" /> {curr.discreteLabel}
              </span>
              <BlockMath math="\mathcal{T}_d = \mathcal{P}(E)" />
            </div>

            <div className="flex-grow flex items-center justify-center p-8">
              <div className="grid grid-cols-2 gap-4">
                {[1, 2, 3, 4].map(i => (
                  <motion.div 
                    key={i}
                    whileHover={{ scale: 1.05 }}
                    className="w-16 h-16 border-2 border-dashed border-indigo-400 bg-indigo-50 rounded-2xl flex items-center justify-center relative"
                  >
                    <div className="w-3 h-3 bg-indigo-600 rounded-full" />
                    <div className="absolute -top-2 -right-2 w-4 h-4 bg-white border border-indigo-200 rounded-full flex items-center justify-center text-[8px] text-indigo-500 font-bold">
                      {i}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
            <p className="text-xs text-slate-500 text-center mt-4">
              {curr.discreteFinal}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExtremeTopologies;
