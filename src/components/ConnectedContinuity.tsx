import React from 'react';
import { Theorem, Proposition } from './MathBlocks';
import { Sparkles, Maximize, Activity } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const ConnectedContinuity: React.FC = () => {
  const { language } = useLanguage();

  const content = {
    EN: {
      title: "5.2 Connectedness and Continuity",
      theorem4: "Theorem 4: Conservation of Connectedness",
      theorem4_desc: "Let E and F be topological spaces, with E connected. If f: E \u2192 F is continuous, then the direct image f(E) is connected.",
      theorem4_sub: "Continuous functions act like stretching a rubber band; they can morph a shape into something weird, but they can never \"tear\" it apart.",
      testTitle: "The {0, 1} Test",
      prop19: "Proposition 19",
      prop19_desc: "A space E is connected if and only if the only continuous applications from E to the discrete space {0, 1} are constant functions.",
      prop19_sub: "If a continuous function could take both values 0 and 1, it would effectively partition the space into two disjoint open sets (the preimages), which contradicts connectedness.",
      ivtTitle: "The Ultimate Goal: IVT",
      theorem5: "Theorem 5: Intermediate Value Theorem",
      theorem5_desc: "Let f be a continuous function from an interval I \u2282 R into R. The image f(I) is an interval.",
      theorem5_sub: "Since I is connected, its image must be connected. And since the connected subsets of R are intervals, f(I) is forced to be one.",
      activity: "If f takes two values, it must take EVERY value in between."
    },
    FR: {
      title: "5.2 Connexité et Continuité",
      theorem4: "Théorème 4 : Conservation de la connexité",
      theorem4_desc: "Soient E et F deux espaces topologiques, avec E connexe. Si f: E \u2192 F est continue, alors l'image directe f(E) est connexe.",
      theorem4_sub: "Les fonctions continues agissent comme l'étirement d'un élastique ; elles peuvent déformer une forme, mais elles ne peuvent jamais la « déchirer ».",
      testTitle: "Le test {0, 1}",
      prop19: "Proposition 19",
      prop19_desc: "Un espace E est connexe si et seulement si les seules applications continues de E vers l'espace discret {0, 1} sont les fonctions constantes.",
      prop19_sub: "Si une fonction continue pouvait prendre les deux valeurs 0 et 1, elle partitionnerait l'espace en deux ouverts disjoints (les images réciproques), ce qui contredit la connexité.",
      ivtTitle: "L'objectif ultime : le T.V.I.",
      theorem5: "Théorème 5 : Théorème des Valeurs Intermédiaires",
      theorem5_desc: "Soit f une fonction continue d'un intervalle I \u2282 R dans R. L'image f(I) est un intervalle.",
      theorem5_sub: "Comme I est connexe, son image doit être connexe. Et puisque les parties connexes de R sont les intervalles, f(I) est forcé d'en être un.",
      activity: "Si f prend deux valeurs, elle doit prendre TOUTE valeur intermédiaire."
    }
  };

  const curr = content[language];

  return (
    <section className="bg-slate-50 py-24 px-6 overflow-hidden">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-3xl font-bold text-slate-900 mb-12 tracking-tight border-b border-slate-200 pb-4">
          {curr.title}
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
           <div className="space-y-8">
              <Theorem title={curr.theorem4}>
                {curr.theorem4_desc}
              </Theorem>
              <div className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-slate-200 flex gap-4">
                 <Sparkles className="text-blue-500 shrink-0 w-6 h-6" />
                 <p className="text-sm text-slate-600 leading-relaxed italic">
                   {curr.theorem4_sub}
                 </p>
              </div>
           </div>

           <div className="bg-white p-10 rounded-[3rem] border border-slate-200 shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                 <div className="h-8 w-1 bg-indigo-500 rounded-full" />
                 <h4 className="text-lg font-bold text-slate-900">{curr.testTitle}</h4>
              </div>
              <Proposition title={curr.prop19}>
                 {curr.prop19_desc}
              </Proposition>
              <p className="text-xs text-slate-500 mt-4 leading-relaxed italic">
                 {curr.prop19_sub}
              </p>
           </div>
        </div>

        <div className="bg-indigo-600 rounded-[4rem] p-12 md:p-20 text-white relative overflow-hidden shadow-2xl">
           <div className="absolute top-0 right-0 p-12 opacity-10">
              <Maximize className="w-64 h-64" />
           </div>
           <div className="relative z-10">
              <h3 className="text-4xl font-extrabold mb-8 tracking-tighter">{curr.ivtTitle}</h3>
              <Theorem title={curr.theorem5}>
                 {curr.theorem5_desc}
              </Theorem>
              <p className="text-lg text-indigo-100 mt-8 leading-relaxed max-w-2xl">
                 {curr.theorem5_sub}
              </p>
              <div className="mt-10 p-6 bg-white/10 rounded-3xl border border-white/20 inline-block backdrop-blur-sm">
                 <p className="text-sm font-bold flex items-center gap-2">
                   <Activity className="w-4 h-4 text-blue-300" />
                   {curr.activity}
                 </p>
              </div>
           </div>
        </div>
      </div>
    </section>
  );
};

export default ConnectedContinuity;
