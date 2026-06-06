import React from 'react';
import { motion } from 'framer-motion';
import { InlineMath, BlockMath } from './Math';
import { ShieldCheck } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const SeparationDefinition: React.FC = () => {
  const { language, t } = useLanguage();

  const content = {
    EN: {
      header: "Separated Spaces",
      intro: "Not all topologies are equal. Some are so \"weak\" that the open sets can't tell two distinct points apart. A separated space (or Hausdorff space) has enough open sets to isolate any two points into their own protective bubbles.",
      critTitle: "The Hausdorff Criterion",
      critIntro: "A space (E, T) is separated if, for any two distinct points x \u2260 y, there exist neighborhoods Vx and Vy such that:",
      satisfied: "Condition Satisfied"
    },
    FR: {
      header: "Espaces séparés",
      intro: "Toutes les topologies ne se valent pas. Certaines sont si « pauvres » que les ouverts ne permettent pas de distinguer deux points distincts. Un espace séparé (ou espace de Hausdorff) possède suffisamment d'ouverts pour isoler n'importe quel couple de points dans leurs propres « bulles » de protection.",
      critTitle: "Le critère de Hausdorff",
      critIntro: "Un espace (E, T) est dit séparé si, pour tout couple de points distincts x \u2260 y, il existe des voisinages Vx et Vy tels que :",
      satisfied: "Condition satisfaite"
    }
  };

  const curr = content[language];

  return (
    <section className="bg-white py-24 px-6 overflow-hidden">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2">
            <div className="inline-flex items-center gap-2 bg-indigo-50 px-3 py-1 rounded-full text-indigo-600 font-bold text-xs uppercase tracking-widest mb-6">
              <ShieldCheck className="w-3 h-3" />
              {t('nav.density')}
            </div>
            <h2 className="text-4xl font-bold text-slate-900 mb-8 tracking-tight">{curr.header}</h2>
            <p className="text-slate-600 text-lg leading-relaxed mb-8">
              {curr.intro}
            </p>

            <div className="bg-slate-50 rounded-[2.5rem] p-10 border border-slate-100 shadow-inner">
               <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-6 text-center">{curr.critTitle}</h3>
               <p className="text-slate-700 leading-relaxed mb-6">
                 {curr.critIntro}
               </p>
               <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex items-center justify-center">
                  <BlockMath math="V_x \cap V_y = \emptyset" />
               </div>
            </div>
          </div>

          <div className="lg:w-1/2 relative">
             <div className="absolute inset-0 bg-indigo-100/30 rounded-full blur-3xl -z-10" />
             <div className="bg-white rounded-[4rem] p-12 shadow-2xl border border-indigo-50 flex flex-col items-center">
                <svg viewBox="0 0 400 300" className="w-full max-w-sm drop-shadow-xl">
                   <g>
                      <motion.circle 
                        cx="120" cy="150" r="60" 
                        fill="rgba(59, 130, 246, 0.1)" stroke="#3b82f6" strokeWidth="2" strokeDasharray="5 5"
                        animate={{ scale: [1, 1.05, 1] }} transition={{ repeat: Infinity, duration: 4 }}
                      />
                      <circle cx="120" cy="150" r="4" fill="#1e293b" />
                      <text x="115" y="130" className="text-xl font-serif italic fill-slate-900">x</text>
                      <foreignObject x="100" y="215" width="40" height="40">
                         <div className="text-[10px] font-bold text-blue-500 uppercase"><InlineMath math="V_x" /></div>
                      </foreignObject>
                   </g>

                   <g>
                      <motion.circle 
                        cx="280" cy="150" r="60" 
                        fill="rgba(147, 51, 234, 0.1)" stroke="#9333ea" strokeWidth="2" strokeDasharray="5 5"
                        animate={{ scale: [1, 1.05, 1] }} transition={{ repeat: Infinity, duration: 4, delay: 2 }}
                      />
                      <circle cx="280" cy="150" r="4" fill="#1e293b" />
                      <text x="275" y="130" className="text-xl font-serif italic fill-slate-900">y</text>
                      <foreignObject x="260" y="215" width="40" height="40">
                         <div className="text-[10px] font-bold text-purple-500 uppercase"><InlineMath math="V_y" /></div>
                      </foreignObject>
                   </g>

                   <text x="185" y="155" className="text-2xl font-bold fill-slate-200">{"\u2229"}</text>
                   <foreignObject x="175" y="180" width="60" height="40">
                      <div className="text-sm font-bold text-emerald-500 font-mono"><InlineMath math="= \emptyset" /></div>
                   </foreignObject>
                </svg>
                <div className="mt-8 text-center bg-emerald-50 px-6 py-2 rounded-full border border-emerald-100">
                   <p className="text-xs text-emerald-700 font-bold uppercase tracking-widest flex items-center gap-2">
                     <ShieldCheck className="w-4 h-4" /> {curr.satisfied}
                   </p>
                </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SeparationDefinition;
