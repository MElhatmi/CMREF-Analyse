import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { BlockMath } from '../components/Math';
import { Definition } from '../components/MathBlocks';
import { AlertCircle } from 'lucide-react';
import FunctionNormsHero from '../components/FunctionNormsHero';
import FunctionNormVisualizer from '../components/FunctionNormVisualizer';
import NextLesson from '../components/NextLesson';

// Specialized Warning component for this page
const Warning: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
  <div className="my-8 bg-amber-50 rounded-3xl border border-amber-100 p-8 shadow-sm">
    <div className="flex items-center gap-3 mb-4">
      <AlertCircle className="w-6 h-6 text-amber-600" />
      <h4 className="text-xl font-bold text-amber-900">{title}</h4>
    </div>
    <div className="text-slate-700 leading-relaxed">{children}</div>
  </div>
);

const FunctionNormsPage: React.FC = () => {
  const { language } = useLanguage();

  const content = {
    EN: {
      defTitle: "Exemple 2: Norms on Continuous Functions",
      defIntro: "Let [a, b] be a segment in \u211D and E = \u2103([a,b], \uD835\uDC4E) be the vector space of continuous applications on [a, b]. We define three fundamental norms on E:",
      l1Title: "The Area Norm (L1)",
      l2Title: "The Energy Norm (L2)",
      linfTitle: "The Supremum Norm (L\u221E)",
      l1Desc: "Measures the total accumulated volume under the curve.",
      linfDesc: "Measures the absolute highest peak, ignoring the rest of the function.",
      warnTitle: "The Critical Counter-Example: When Norms Disagree",
      warnIntro: "In finite dimensions, all norms are equivalent. In infinite dimensions, this mathematical safety net breaks entirely!",
      warnMath: "Consider the sequence of continuous functions f\u2099(x) = x\u207F on the interval [0, 1].",
      warnL1: "In the 1-Norm: The total area vanishes.",
      warnLinf: "In the Infinity-Norm: The peak remains stubbornly at 1.",
      warnConclusion: "Conclusion: The sequence converges to 0 under ||\u22C5||\u2081, but NOT under ||\u22C5||\u221E. Therefore, these two norms are fundamentally not equivalent on \u2103([0,1], \u211D).",
      nextTitle: "Coming Soon",
      nextDesc: "The next chapter explores Norm Equivalence and why all norms are 'equal' in finite dimensions."
    },
    FR: {
      defTitle: "Exemple 2 : Normes sur les fonctions continues",
      defIntro: "Soit [a, b] un segment de \u211D et E = \u2103([a,b], \uD835\uDC4E) l'espace vectoriel des applications continues sur [a, b]. On d\u00E9finit trois normes fondamentales sur E :",
      l1Title: "La Norme Aire (L1)",
      l2Title: "La Norme Energie (L2)",
      linfTitle: "La Norme Supremum (L\u221E)",
      l1Desc: "Mesure le volume total accumul\u00E9 sous la courbe.",
      linfDesc: "Mesure le sommet absolu, ignorant le reste de la fonction.",
      warnTitle: "Le Contre-Exemple Critique : Quand les Normes Divergent",
      warnIntro: "En dimension finie, toutes les normes sont \u00E9quivalentes. En dimension infinie, ce filet de s\u00E9curit\u00E9 math\u00E9matique se rompt totalement !",
      warnMath: "Consid\u00E9rez la suite de fonctions continues f\u2099(x) = x\u207F sur l'intervalle [0, 1].",
      warnL1: "Dans la Norme 1 : L'aire totale s'\u00E9vanouit.",
      warnLinf: "Dans la Norme Infinie : Le pic reste obstin\u00E9ment \u00E0 1.",
      warnConclusion: "Conclusion : La suite converge vers 0 sous ||\u22C5||\u2081, mais PAS sous ||\u22C5||\u221E. Par cons\u00E9quent, ces deux normes ne sont fondamentalement pas \u00E9quivalentes sur \u2103([0,1], \u211D).",
      nextTitle: "\u00C0 Venir",
      nextDesc: "Le prochain chapitre explore l'\u00C9quivalence des Normes et pourquoi toutes les normes sont '\u00E9gales' en dimension finie."
    }
  };

  const curr = content[language];

  return (
    <main className="min-h-screen bg-white">
      <FunctionNormsHero />

      <section className="py-16 px-6 bg-slate-50">
        <div className="mx-auto max-w-6xl">
          <Definition title={curr.defTitle}>
            <p className="mb-8 text-slate-700 text-lg">{curr.defIntro}</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
               <div className="p-6 bg-white rounded-2xl border border-blue-100 shadow-sm">
                  <h5 className="font-bold text-blue-900 mb-3">{curr.l1Title}</h5>
                  <BlockMath math="||f||_1 = \int_a^b |f(t)| dt" />
                  <p className="mt-4 text-xs text-slate-500 italic">{curr.l1Desc}</p>
               </div>
               <div className="p-6 bg-white rounded-2xl border border-blue-100 shadow-sm">
                  <h5 className="font-bold text-blue-900 mb-3">{curr.l2Title}</h5>
                  <BlockMath math="||f||_2 = \sqrt{\int_a^b |f(t)|^2 dt}" />
               </div>
               <div className="p-6 bg-white rounded-2xl border border-blue-100 shadow-sm">
                  <h5 className="font-bold text-blue-900 mb-3">{curr.linfTitle}</h5>
                  <BlockMath math="||f||_\infty = \sup_{t \in [a,b]} |f(t)|" />
                  <p className="mt-4 text-xs text-slate-500 italic">{curr.linfDesc}</p>
               </div>
            </div>
          </Definition>
        </div>
      </section>

      <section className="py-16 px-6">
        <div className="mx-auto max-w-4xl">
          <Warning title={curr.warnTitle}>
            <p className="mb-4">{curr.warnIntro}</p>
            <div className="p-4 bg-white rounded-xl border border-amber-200 mb-6">
               <p className="mb-2 font-bold text-slate-900">{curr.warnMath}</p>
               <div className="space-y-4 mt-4">
                  <div>
                    <p className="text-sm font-bold text-blue-600 mb-2">{curr.warnL1}</p>
                    <BlockMath math="||f_n||_1 = \int_0^1 x^n dx = \frac{1}{n+1} \xrightarrow[n \to \infty]{} 0" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-red-600 mb-2">{curr.warnLinf}</p>
                    <BlockMath math="||f_n||_\infty = \sup_{x \in [0,1]} |x^n| = 1 \xrightarrow[n \to \infty]{} 1" />
                  </div>
               </div>
            </div>
            <div className="p-4 bg-slate-900 text-white rounded-xl text-sm font-bold uppercase tracking-widest text-center border-b-4 border-amber-500">
               {curr.warnConclusion}
            </div>
          </Warning>
        </div>
      </section>

      <section className="py-20 px-6 bg-slate-50">
        <div className="mx-auto max-w-5xl">
          <FunctionNormVisualizer />
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-6 mb-20">
        <NextLesson 
          to="/normed/equivalence"
          chapter={5}
          title={curr.nextTitle}
          description={curr.nextDesc}
        />
      </div>
    </main>
  );
};

export default FunctionNormsPage;
