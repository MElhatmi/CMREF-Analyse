import React from 'react';
import { motion } from 'framer-motion';
import { BlockMath } from './Math';
import { Box, Layers } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const BaseDefinition: React.FC = () => {
  const { language } = useLanguage();

  const content = {
    EN: {
      title: "The Lego Bricks of Topology",
      desc: "Topologies are massive—often containing an uncountably infinite number of open sets. To make them manageable, mathematicians use Bases, which act as the fundamental \"building blocks\" of the space.",
      globalTitle: "Base of Open Sets (Global)",
      globalDesc: "Every open set is a union of base elements.",
      localTitle: "Base of Neighborhoods (Local)",
      localDesc: "Every neighborhood contains a base element.",
      exampleHeader: "Standard Examples in R",
      example1Title: "Standard Global Base",
      example1Desc: "The collection of all open intervals ]a, b[ forms a base. Any weird open set is just a union of intervals.",
      example2Title: "Countable Local Base",
      example2Desc: "For x, the shrinking family ]x - 1/n, x + 1/n[ acts as a perfect countable base."
    },
    FR: {
      title: "Les briques Lego de la Topologie",
      desc: "Les topologies sont vastes — elles contiennent souvent un nombre infini non dénombrable d'ouverts. Pour les rendre maniables, les mathématiciens utilisent des Bases, qui agissent comme les « briques élémentaires » de l'espace.",
      globalTitle: "Base d'ouverts (Global)",
      globalDesc: "Chaque ouvert est une réunion d'éléments de la base.",
      localTitle: "Base de voisinages (Local)",
      localDesc: "Chaque voisinage contient un élément de la base.",
      exampleHeader: "Exemples standards dans R",
      example1Title: "Base globale usuelle",
      example1Desc: "La collection de tous les intervalles ouverts ]a, b[ forme une base. Tout ouvert complexe est une simple réunion d'intervalles.",
      example2Title: "Base locale dénombrable",
      example2Desc: "Pour x, la famille d'intervalles ]x - 1/n, x + 1/n[ constitue une base locale dénombrable parfaite."
    }
  };

  const curr = content[language];

  return (
    <section className="bg-white py-24 px-6 overflow-hidden">
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-indigo-50 px-3 py-1 rounded-full text-indigo-600 font-bold text-xs uppercase tracking-widest mb-6">
              <Box className="w-3 h-3" />
              1.4 Bases
            </div>
            <h2 className="text-4xl font-bold text-slate-900 mb-8 tracking-tight">{curr.title}</h2>
            <p className="text-slate-600 text-lg leading-relaxed mb-8">
              {curr.desc}
            </p>

            <div className="space-y-6">
               <div className="p-6 bg-slate-50 rounded-3xl border border-slate-100">
                  <h4 className="text-sm font-bold text-slate-900 mb-3 flex items-center gap-2">
                    <Layers className="w-4 h-4 text-indigo-500" /> {curr.globalTitle}
                  </h4>
                  <p className="text-sm text-slate-600 mb-4 italic">{curr.globalDesc}</p>
                  <BlockMath math="\mathcal{B} \subset \mathcal{T} \text{ est une base } \iff \forall U \in \mathcal{T}, \exists (B_i)_{i \in I} \subset \mathcal{B}, U = \bigcup_{i \in I} B_i" />
               </div>

               <div className="p-6 bg-slate-50 rounded-3xl border border-slate-100">
                  <h4 className="text-sm font-bold text-slate-900 mb-3 flex items-center gap-2">
                    <Layers className="w-4 h-4 text-indigo-500" /> {curr.localTitle}
                  </h4>
                  <p className="text-sm text-slate-600 mb-4 italic">{curr.localDesc}</p>
                  <BlockMath math="\mathcal{B}_x \text{ est une base en } x \iff \forall V \in \mathcal{V}(x), \exists B \in \mathcal{B}_x, x \in B \subset V" />
               </div>
            </div>
          </div>

          <div className="relative">
             <div className="absolute inset-0 bg-indigo-100/50 rounded-[4rem] -rotate-3 -z-10" />
             <div className="bg-white rounded-[4rem] p-12 shadow-xl border border-indigo-50">
                <h4 className="text-xs font-bold text-indigo-400 uppercase tracking-widest mb-8 text-center">{curr.exampleHeader}</h4>
                <div className="space-y-8">
                   <div className="flex gap-6">
                      <div className="h-10 w-10 shrink-0 bg-indigo-600 text-white rounded-xl flex items-center justify-center font-bold">1</div>
                      <div>
                        <p className="font-bold text-slate-900 text-sm mb-1">{curr.example1Title}</p>
                        <p className="text-xs text-slate-500 leading-relaxed">
                          {curr.example1Desc}
                        </p>
                      </div>
                   </div>
                   <div className="flex gap-6">
                      <div className="h-10 w-10 shrink-0 bg-indigo-600 text-white rounded-xl flex items-center justify-center font-bold">2</div>
                      <div>
                        <p className="font-bold text-slate-900 text-sm mb-1">{curr.example2Title}</p>
                        <p className="text-xs text-slate-500 leading-relaxed">
                          {curr.example2Desc}
                        </p>
                      </div>
                   </div>
                </div>

                <div className="mt-12 flex justify-center">
                   <svg viewBox="0 0 200 100" className="w-full max-w-[240px]">
                      <rect x="0" y="45" width="200" height="2" fill="#e2e8f0" />
                      {[0.5, 0.4, 0.3, 0.2].map((r, i) => (
                        <motion.rect 
                          key={i}
                          x={100 - (r * 100)} y={40} width={r * 200} height={12}
                          fill="none" stroke="#6366f1" strokeWidth="1" strokeDasharray="4 2"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 - (i * 0.2) }}
                          transition={{ delay: i * 0.3 }}
                        />
                      ))}
                      <circle cx="100" cy="46" r="3" fill="#312e81" />
                      <text x="95" y="65" className="text-[10px] font-bold fill-indigo-600">x</text>
                   </svg>
                </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BaseDefinition;
