import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { BlockMath } from '../components/Math';
import { Definition, Proposition, Theorem, Example } from '../components/MathBlocks';
import BanachHero from '../components/BanachHero';
import BanachVisualizer from '../components/BanachVisualizer';
import NextLesson from '../components/NextLesson';

const BanachPage: React.FC = () => {
  const { language } = useLanguage();

  const content = {
    EN: {
      defTitle: "Definition 7: Banach Space",
      defIntro: "A normed vector space (E, ||\u22C5||) is called a Banach space if it is a complete space. In other words, every Cauchy sequence in E converges to a limit that belongs to E.",
      exTitle: "Examples: The Good and The Bad",
      ex1Title: "Banach Spaces",
      ex1Desc: "\u211D and \u2102\u207F (with their usual norms) are classic Banach spaces.",
      ex2Title: "Non-Complete Space",
      ex2Desc: "The interval ]0, 1] is not complete in \u211D. The sequence u\u2099 = 1/n is Cauchy, but it converges to 0 \u2209 ]0, 1]. The space has a 'hole' at its boundary.",
      thm9Title: "Theorem 9: Completeness and Closure",
      thm9Desc: "Let E be a Banach space and A a subset of E. A is a complete space IF AND ONLY IF A is a closed set (un ferm\u00E9).",
      thm9Intuition: "Closing a shape inside a perfect universe keeps it perfect.",
      prop8Title: "Proposition 8: Finite Dimension Guarantee",
      prop8Desc: "Every finite-dimensional normed vector space is automatically a Banach space.",
      prop8Intuition: "Finite dimensions are unconditionally safe. You do not need to check for Cauchy sequences; completeness is granted simply by having a finite basis.",
      nextTitle: "Normed Course Complete",
      nextDesc: "You have mastered the foundations of Normed Vector Spaces and Banach theory."
    },
    FR: {
      defTitle: "D\u00E9finition 7 : Espace de Banach",
      defIntro: "Un espace vectoriel norm\u00E9 (E, ||\u22C5||) est appel\u00E9 espace de Banach si c'est un espace complet. Autrement dit, toute suite de Cauchy d'\u00E9l\u00E9ments de E converge vers une limite qui appartient \u00E0 E.",
      exTitle: "Exemples : Le Bien et le Mal",
      ex1Title: "Espaces de Banach",
      ex1Desc: "\u211D et \u2102\u207F (munis de leurs normes usuelles) sont des espaces de Banach.",
      ex2Title: "Espace non complet",
      ex2Desc: "L'intervalle ]0, 1] n'est pas complet dans \u211D. La suite u\u2099 = 1/n est de Cauchy, mais elle converge vers 0 \u2209 ]0, 1]. L'espace poss\u00E8de un 'trou' \u00E0 sa fronti\u00E8re.",
      thm9Title: "Th\u00E9or\u00E8me 9 : Compl\u00E9tude et Fermeture",
      thm9Desc: "Soit E un espace de Banach et A une partie de E. A est un espace complet SI ET SEULEMENT SI A est un ferm\u00E9.",
      thm9Intuition: "Fermer une forme dans un univers parfait la garde parfaite.",
      prop8Title: "Proposition 8 : La Garantie de Dimension Finie",
      prop8Desc: "Tout espace vectoriel norm\u00E9 de dimension finie est automatiquement un espace de Banach.",
      prop8Intuition: "Les dimensions finies sont inconditionnellement s\u00F9res. Vous n'avez pas besoin de v\u00E9rifier les suites de Cauchy ; la compl\u00E9tude est offerte simplement par l'existence d'une base finie.",
      nextTitle: "Parcours EVN Termin\u00E9",
      nextDesc: "Vous avez ma\u00EEtris\u00E9 les fondements des Espaces Vectoriels Norm\u00E9s et de la th\u00E9orie de Banach."
    }
  };

  const curr = content[language];

  return (
    <main className="min-h-screen bg-white">
      <BanachHero />

      <section className="py-16 px-6 bg-slate-50">
        <div className="mx-auto max-w-4xl space-y-12">
          <Definition title={curr.defTitle}>
            <p className="text-slate-700 text-lg leading-relaxed">{curr.defIntro}</p>
          </Definition>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
             <Example title={curr.ex1Title}>
                <p className="text-slate-600 italic">{curr.ex1Desc}</p>
                <div className="mt-4 p-3 bg-indigo-50 rounded-xl border border-indigo-100 text-center">
                   <BlockMath math="\forall (x_n) \in E^{\mathbb{N}} \text{ Cauchy} \implies \exists l \in E, x_n \to l" />
                </div>
             </Example>

             <Example title={curr.ex2Title}>
                <p className="text-slate-600 italic">{curr.ex2Desc}</p>
                <div className="mt-4 p-3 bg-red-50 rounded-xl border border-red-100 text-center">
                   <BlockMath math="1/n \to 0 \notin ]0, 1]" />
                </div>
             </Example>
          </div>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <Theorem title={curr.thm9Title}>
              <p className="mb-6 text-slate-700">{curr.thm9Desc}</p>
              <div className="p-4 bg-indigo-950 text-indigo-100 rounded-2xl shadow-xl text-center mb-4">
                 <BlockMath math="A \text{ complet} \iff A \text{ ferm\u00E9}" />
              </div>
              <p className="text-xs text-slate-500 italic">{curr.thm9Intuition}</p>
            </Theorem>

            <Proposition title={curr.prop8Title}>
              <p className="mb-6 text-slate-700">{curr.prop8Desc}</p>
              <div className="p-4 bg-slate-900 text-emerald-400 rounded-2xl shadow-xl text-center mb-4 font-bold uppercase tracking-widest text-sm">
                 Automatic Completeness
              </div>
              <p className="text-xs text-slate-500 italic">{curr.prop8Intuition}</p>
            </Proposition>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-slate-50">
        <div className="mx-auto max-w-5xl">
          <BanachVisualizer />
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-6 mb-20">
        <NextLesson 
          to="/topology"
          chapter={10}
          title={curr.nextTitle}
          description={curr.nextDesc}
        />
      </div>
    </main>
  );
};

export default BanachPage;
