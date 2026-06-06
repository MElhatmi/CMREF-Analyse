import React from 'react';
import { InlineMath } from './Math';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

const SierpinskiSpace: React.FC = () => {
  const { language } = useLanguage();

  const content = {
    EN: {
      title: "2. Sierpiński Space",
      desc: "On a simple set E = {a, b}, we can define a topology that isn't trivial or discrete. This is the Sierpiński Space.",
      collection: "The Collection:",
      rule1: "Point 'a' is an open set by itself. It is \"isolated\" from 'b'.",
      rule2: "Point 'b' is NOT open. Any open set containing 'b' must also contain 'a'.",
      spaceLabel: "Entire Space (E)",
      openALabel: "Open Set {a}",
      pointALabel: "a",
      pointBLabel: "b",
      pointBNote: "b is NOT open",
      openSetsLabel: "OPEN SETS:",
      verdict: "\"In Sierpiński space, topology isn't just about groupings; it's about separation. You can separate 'a' from 'b' using an open set, but not vice versa.\""
    },
    FR: {
      title: "2. Espace de Sierpiński",
      desc: "Sur un ensemble simple E = {a, b}, nous pouvons définir une topologie qui n'est ni grossière ni discrète. C'est l'Espace de Sierpiński.",
      collection: "La Collection :",
      rule1: "Le point « a » est un ouvert à lui seul. Il est « isolé » de « b ».",
      rule2: "Le point « b » n'est PAS ouvert. Tout ouvert contenant « b » doit aussi contenir « a ».",
      spaceLabel: "Espace Entier (E)",
      openALabel: "Ouvert {a}",
      pointALabel: "a",
      pointBLabel: "b",
      pointBNote: "b n'est PAS ouvert",
      openSetsLabel: "OUVERTS :",
      verdict: "« Dans l'espace de Sierpiński, la topologie n'est pas seulement une affaire de groupements ; c'est une question de séparation. On peut séparer 'a' de 'b', mais pas l'inverse. »"
    }
  };

  const curr = content[language];

  return (
    <div className="bg-white rounded-[3rem] p-8 md:p-12 shadow-sm border border-slate-200 mb-12">
      <div className="flex flex-col lg:flex-row-reverse gap-12">
        <div className="lg:w-1/3">
          <div className="flex items-center gap-4 mb-6">
            <div className="h-12 w-12 bg-indigo-100 rounded-2xl flex items-center justify-center text-indigo-600">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900">{curr.title}</h3>
          </div>
          <p className="text-slate-600 leading-relaxed mb-6">
            {curr.desc}
          </p>
          
          <div className="bg-indigo-50/50 p-6 rounded-2xl border border-indigo-100 mb-6">
            <h4 className="text-sm font-bold text-indigo-900 mb-4 uppercase tracking-wider">{curr.collection}</h4>
            <div className="text-lg font-mono text-indigo-600 text-center">
              <InlineMath math="\mathcal{T} = \{\emptyset, \{a\}, \{a, b\}\}" />
            </div>
          </div>

          <ul className="space-y-4">
            <li className="flex gap-3 text-sm text-slate-600">
              <ArrowRight className="w-4 h-4 text-indigo-400 mt-0.5 flex-shrink-0" />
              <span>{curr.rule1}</span>
            </li>
            <li className="flex gap-3 text-sm text-slate-600">
              <ArrowRight className="w-4 h-4 text-indigo-400 mt-0.5 flex-shrink-0" />
              <span>{curr.rule2}</span>
            </li>
          </ul>
        </div>

        <div className="lg:w-2/3 bg-slate-50 rounded-3xl p-8 border border-slate-100 flex flex-col items-center justify-center min-h-[400px]">
          <div className="w-full max-w-lg aspect-[4/3] relative">
            <svg viewBox="0 0 400 300" className="w-full h-full drop-shadow-sm">
              <motion.rect 
                x="20" y="20" width="360" height="260" rx="30" 
                fill="none" stroke="#6366f1" strokeWidth="2" strokeDasharray="8 8"
                initial={{ opacity: 0.3 }}
                animate={{ opacity: 0.6 }}
                transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
              />
              <text x="40" y="55" className="text-xs font-bold fill-indigo-400 uppercase tracking-widest">{curr.spaceLabel}</text>

              <motion.circle 
                cx="130" cy="150" r="80" 
                fill="#6366f115" stroke="#6366f1" strokeWidth="3"
                initial={{ scale: 0.9, opacity: 0.5 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
              />
              <text x="80" y="260" className="text-sm font-bold fill-indigo-600 italic">{curr.openALabel}</text>

              <g>
                <circle cx="130" cy="150" r="6" fill="#312e81" />
                <text x="125" y="130" className="text-xl font-serif italic fill-slate-900 font-bold">{curr.pointALabel}</text>
                <motion.circle 
                  cx="130" cy="150" r="12" 
                  fill="none" stroke="#6366f1" strokeWidth="1"
                  initial={{ scale: 1, opacity: 1 }}
                  animate={{ scale: 2, opacity: 0 }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                />
              </g>

              <g>
                <circle cx="280" cy="150" r="6" fill="#312e81" />
                <text x="275" y="130" className="text-xl font-serif italic fill-slate-900 font-bold">{curr.pointBLabel}</text>
                <text x="240" y="260" className="text-[10px] fill-slate-400 italic">{curr.pointBNote}</text>
              </g>

              <rect x="250" y="40" width="120" height="60" rx="10" fill="white" stroke="#e2e8f0" />
              <text x="260" y="65" className="text-[10px] font-bold fill-slate-400">{curr.openSetsLabel}</text>
              <text x="260" y="85" className="text-[10px] font-mono fill-indigo-600 italic">{"\u2205, {a}, {a,b}"}</text>
            </svg>
          </div>
          <div className="mt-8 text-center max-w-md">
            <p className="text-sm text-slate-500 leading-relaxed italic">
              {curr.verdict}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SierpinskiSpace;
