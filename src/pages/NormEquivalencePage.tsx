import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { BlockMath } from '../components/Math';
import { Definition, Proposition, Theorem, Example } from '../components/MathBlocks';
import NormEquivalenceHero from '../components/NormEquivalenceHero';
import NormSqueezeVisualizer from '../components/NormSqueezeVisualizer';
import NextLesson from '../components/NextLesson';

const NormEquivalencePage: React.FC = () => {
  const { language } = useLanguage();

  const content = {
    EN: {
      defTitle: "Definition 8: Equivalent Norms",
      defIntro: "Two norms N\u2081 and N\u2082 on a vector space E are equivalent (denoted N\u2081 \u223C N\u2082) if they trap each other within fixed linear scales:",
      defMath: "\u2203 \u03B1, \u03B2 > 0, \forall x \in E, \quad \u03B1 N_1(x) \le N_2(x) \le \u03B2 N_1(x)",
      propTitle: "The Topological Consequences",
      propDesc: "When two norms are equivalent, they describe the exact same 'closeness'. This results in a shared topology:",
      prop1: "Shared Boundedness: A set is bounded for N\u2081 \u21CC it is bounded for N\u2082.",
      prop2: "Shared Convergence: A sequence u\u2099 \u2192 l under N\u2081 \u21CC u\u2099 \u2192 l under N\u2082.",
      prop3: "Shared Open Sets: Every open set in (E, N\u2081) is also an open set in (E, N\u2082).",
      thmTitle: "Theorem 10: The Finite Dimension Power",
      thmDesc: "In a finite-dimensional normed vector space, ALL norms are equivalent.",
      thmHighlight: "Geometry is invariant in finite dimensions.",
      exTitle: "Equivalence vs. Failure",
      ex1Title: "Consensus in \u211D\u207F",
      ex1Desc: "In finite dimensions, canonical norms trap each other perfectly:",
      ex1Math1: "N_\infty \le N_1 \le n N_\infty",
      ex1Math2: "N_\infty \le N_2 \le \sqrt{n} N_\infty",
      ex2Title: "Failure in Infinite Dimensions",
      ex2Desc: "Consider E = \u2103([0, 1], \u211D). We have ||f||_1 \le ||f||_\infty, but NO constant can reverse the bound. As seen with f\u2099(x) = x\u207F, ||f\u2099||_1 \to 0 while ||f\u2099||_\infty = 1.",
      nextTitle: "Course Summary",
      nextDesc: "You have explored the deep relationships between length, alignment, and dimension in Normed Vector Spaces."
    },
    FR: {
      defTitle: "D\u00E9finition 8 : \u00C9quivalence des Normes",
      defIntro: "Deux normes N\u2081 et N\u2082 sur un espace vectoriel E sont dites \u00E9quivalentes (not\u00E9 N\u2081 \u223C N\u2082) s'il existe des constantes r\u00E9elles strictement positives \u03B1 et \u03B2 telles que :",
      defMath: "\u03B1 N_1(x) \le N_2(x) \le \u03B2 N_1(x) \quad \forall x \in E",
      propTitle: "Les Cons\u00E9quences Topologiques",
      propDesc: "Lorsque deux normes sont \u00E9quivalentes, elles d\u00E9crivent exactement la m\u00EAme notion de 'proximit\u00E9'. Cela r\u00E9sulte en une topologie partag\u00E9e :",
      prop1: "Bornitude Partag\u00E9e : Une partie est born\u00E9e pour N\u2081 \u21CC elle l'est pour N\u2082.",
      prop2: "Convergence Partag\u00E9e : Une suite u\u2099 \u2192 l sous N\u2081 \u21CC u\u2099 \u2192 l sous N\u2082.",
      prop3: "Ouverts Partag\u00E9s : Tout ouvert de (E, N\u2081) est strictement un ouvert de (E, N\u2082).",
      thmTitle: "Th\u00E9or\u00E8me 10 : La Puissance de la Dimension Finie",
      thmDesc: "Dans un espace vectoriel norm\u00E9 de dimension finie, TOUTES les normes sont \u00E9quivalentes.",
      thmHighlight: "La g\u00E9om\u00E9trie est invariante en dimension finie.",
      exTitle: "\u00C9quivalence vs. \u00C9chec",
      ex1Title: "Consensus dans \u211D\u207F",
      ex1Desc: "En dimension finie, les normes canoniques se pi\u00E8gent mutuellement parfaitement :",
      ex1Math1: "N_\infty \le N_1 \le n N_\infty",
      ex1Math2: "N_\infty \le N_2 \le \sqrt{n} N_\infty",
      ex2Title: "\u00C9chec en Dimension Infinie",
      ex2Desc: "Consid\u00E9rez E = \u2103([0, 1], \u211D). Nous avons ||f||_1 \le ||f||_\infty, mais AUCUNE constante ne peut inverser le sens. Avec f\u2099(x) = x\u207F, ||f\u2099||_1 \to 0 alors que ||f\u2099||_\infty = 1.",
      nextTitle: "R\u00E9sum\u00E9 du Parcours",
      nextDesc: "Vous avez explor\u00E9 les relations profondes entre longueur, alignement et dimension dans les EVN."
    }
  };

  const curr = content[language];

  return (
    <main className="min-h-screen bg-white">
      <NormEquivalenceHero />

      <section className="py-16 px-6 bg-slate-50">
        <div className="mx-auto max-w-4xl space-y-12">
          <Definition title={curr.defTitle}>
            <p className="mb-6 text-slate-700 text-lg leading-relaxed">{curr.defIntro}</p>
            <div className="bg-white p-6 rounded-2xl border border-blue-100 shadow-sm overflow-x-auto">
               <BlockMath math={curr.defMath} />
            </div>
          </Definition>

          <Proposition title={curr.propTitle}>
            <p className="mb-8 text-slate-700">{curr.propDesc}</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
               <div className="p-4 bg-white rounded-xl border border-slate-100 shadow-sm">
                  <p className="text-xs font-bold text-slate-800 leading-relaxed">{curr.prop1}</p>
               </div>
               <div className="p-4 bg-white rounded-xl border border-slate-100 shadow-sm">
                  <p className="text-xs font-bold text-slate-800 leading-relaxed">{curr.prop2}</p>
               </div>
               <div className="p-4 bg-white rounded-xl border border-slate-100 shadow-sm">
                  <p className="text-xs font-bold text-slate-800 leading-relaxed">{curr.prop3}</p>
               </div>
            </div>
          </Proposition>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="mx-auto max-w-4xl text-center">
          <Theorem title={curr.thmTitle}>
            <div className="mb-10 p-10 bg-indigo-950 text-indigo-100 rounded-[3rem] shadow-2xl relative overflow-hidden">
               <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-transparent pointer-events-none" />
               <p className="text-3xl font-black mb-4 uppercase tracking-tighter">{curr.thmHighlight}</p>
               <p className="text-lg opacity-80">{curr.thmDesc}</p>
            </div>
          </Theorem>
        </div>
      </section>

      <section className="py-16 px-6 bg-slate-50">
        <div className="mx-auto max-w-6xl">
          <div className="flex items-center gap-3 mb-12">
             <div className="h-8 w-1 bg-blue-600 rounded-full" />
             <h2 className="text-3xl font-bold text-slate-900">{curr.exTitle}</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
             <Example title={curr.ex1Title}>
                <p className="mb-6 text-slate-700">{curr.ex1Desc}</p>
                <div className="space-y-4">
                   <div className="p-4 bg-white rounded-xl border border-blue-100">
                      <BlockMath math={curr.ex1Math1} />
                   </div>
                   <div className="p-4 bg-white rounded-xl border border-blue-100">
                      <BlockMath math={curr.ex1Math2} />
                   </div>
                </div>
             </Example>

             <Example title={curr.ex2Title}>
                <p className="mb-6 text-slate-700 leading-relaxed">{curr.ex2Desc}</p>
                <div className="p-4 bg-red-900 text-white rounded-xl text-center font-bold uppercase text-xs tracking-widest border-b-4 border-red-500 shadow-xl">
                   Topology Mismatch in Infinite Dim
                </div>
             </Example>
          </div>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="mx-auto max-w-5xl">
          <NormSqueezeVisualizer />
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-6 mb-20">
        <NextLesson 
          to="/topology"
          chapter={11}
          title={curr.nextTitle}
          description={curr.nextDesc}
        />
      </div>
    </main>
  );
};

export default NormEquivalencePage;
