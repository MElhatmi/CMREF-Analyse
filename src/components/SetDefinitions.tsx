import React from 'react';
import { InlineMath, BlockMath } from './Math';
import { useLanguage } from '../context/LanguageContext';

const SetDefinitions: React.FC = () => {
  const { language } = useLanguage();

  const content = {
    EN: {
      title: "Formal Definitions",
      intro: "Let (E, T) be a topological space and A subset E. We define the three fundamental topological regions of A as follows:",
      labels: ["Interior", "Closure", "Boundary"],
      interiorDesc: "The largest open set contained within A.",
      closureDesc: "The smallest closed set containing A.",
      boundaryDesc: "The set of points in the closure but not in the interior."
    },
    FR: {
      title: "Définitions Formelles",
      intro: "Soit (E, T) un espace topologique et A une partie de E. Nous définissons les trois régions topologiques fondamentales de A comme suit :",
      labels: ["Intérieur", "Adhérence", "Frontière"],
      interiorDesc: "Le plus grand ensemble ouvert contenu dans A.",
      closureDesc: "Le plus petit ensemble fermé contenant A.",
      boundaryDesc: "L'ensemble des points de l'adhérence qui ne sont pas dans l'intérieur."
    }
  };

  const curr = content[language];

  return (
    <section className="bg-slate-50 py-16 px-6">
      <div className="mx-auto max-w-5xl">
        <div className="rounded-[2.5rem] bg-white p-10 shadow-sm border border-slate-200">
          <div className="flex items-center gap-3 mb-8">
            <div className="h-8 w-1.5 bg-indigo-600 rounded-full" />
            <h2 className="text-3xl font-bold text-slate-900 tracking-tight">{curr.title}</h2>
          </div>

          <p className="text-lg text-slate-700 mb-10 leading-relaxed">
            {curr.intro}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-blue-50/50 p-6 rounded-3xl border border-blue-100 flex flex-col">
              <h3 className="text-xl font-bold text-blue-900 mb-4 flex items-center gap-2">
                <span className="bg-blue-600 text-white w-6 h-6 rounded-lg flex items-center justify-center text-xs">1</span>
                {curr.labels[0]}
              </h3>
              <div className="bg-white p-4 rounded-xl shadow-sm mb-4 border border-blue-100">
                <BlockMath math="\mathring{A} \quad \text{ou} \quad \text{Int}(A)" />
              </div>
              <p className="text-sm text-slate-600 italic leading-relaxed flex-grow">
                {curr.interiorDesc}
              </p>
            </div>

            <div className="bg-orange-50/50 p-6 rounded-3xl border border-orange-100 flex flex-col">
              <h3 className="text-xl font-bold text-orange-900 mb-4 flex items-center gap-2">
                <span className="bg-orange-600 text-white w-6 h-6 rounded-lg flex items-center justify-center text-xs">2</span>
                {curr.labels[1]}
              </h3>
              <div className="bg-white p-4 rounded-xl shadow-sm mb-4 border border-orange-100">
                <BlockMath math="\overline{A} \quad \text{ou} \quad \text{Adh}(A)" />
              </div>
              <p className="text-sm text-slate-600 italic leading-relaxed flex-grow">
                {curr.closureDesc}
              </p>
            </div>

            <div className="bg-red-50/50 p-6 rounded-3xl border border-red-100 flex flex-col">
              <h3 className="text-xl font-bold text-red-900 mb-4 flex items-center gap-2">
                <span className="bg-red-600 text-white w-6 h-6 rounded-lg flex items-center justify-center text-xs">3</span>
                {curr.labels[2]}
              </h3>
              <div className="bg-white p-4 rounded-xl shadow-sm mb-4 border border-red-100">
                <BlockMath math="\text{Fr}(A) \quad \text{ou} \quad \partial A" />
              </div>
              <p className="text-sm text-slate-600 italic leading-relaxed mb-4">
                {curr.boundaryDesc}
              </p>
              <div className="mt-auto pt-4 border-t border-red-100 text-center">
                <InlineMath math="\partial A = \overline{A} \setminus \mathring{A}" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SetDefinitions;
