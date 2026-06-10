import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { BlockMath } from '../components/Math';
import { Definition, Theorem, Exercise } from '../components/MathBlocks';
import { Zap } from 'lucide-react';
import BoundedOperatorsHero from '../components/BoundedOperatorsHero';
import MatrixSqueezerVisualizer from '../components/MatrixSqueezerVisualizer';
import NextLesson from '../components/NextLesson';

const BoundedOperatorsPage: React.FC = () => {
  const { language } = useLanguage();

  const content = {
    EN: {
      defTitle: "Definition 6: Bounded Linear Maps",
      defIntro: "Let E and F be two normed vector spaces. A linear map u \u2208 \u2112(E, F) is said to be bounded if it preserves the 'scale' of the space.",
      thm6Title: "Theorem 6: Continuity \u21CC Boundedness",
      thm6Desc: "For a linear map, topological continuity is perfectly equivalent to geometric boundedness. A linear map is continuous if and only if there exists a constant C > 0 such that:",
      thm6Math: "||u(x)||_F \\le C ||x||_E \\quad \\forall x \\in E",
      thm6Note: "This constant C is the ultimate 'speed limit' of the transformation.",
      thm7Title: "Theorem 7: The Space of Operators",
      thm7Desc: "The set of all continuous linear maps from E to F forms a vector space itself.",
      thm7Math: "\\mathcal{L}_c(E, F) = \\{ u \\in \\mathcal{L}(E, F) \\mid u \\text{ is continuous} \\}",
      ex1Title: "Exercise 1: The 9 Faces of Continuity",
      ex1Intro: "For a linear map f \u2208 \u2112(E, F), the following 9 properties are mathematically strictly equivalent. If you prove one, you get the other eight for free!",
      equivs: [
        "f is continuous on E.",
        "f is continuous at a single arbitrary point in E.",
        "f is continuous at the origin (0\u2091).",
        "f is uniformly continuous on E.",
        "f is Lipschitzian on E.",
        "There exists C > 0 such that ||f(x)||\u2093 \u2264 C ||x||\u2091 for all x.",
        "f is bounded on the closed unit ball B\u2092(0, 1).",
        "f is bounded on the open unit ball B(0, 1).",
        "f is bounded on the unit sphere S(0, 1)."
      ],
      nextTitle: "Coming Soon",
      nextDesc: "The final frontier: Norm Equivalence and the unique geometry of finite dimensions."
    },
    FR: {
      defTitle: "Définition 6 : Applications Linéaires Bornées",
      defIntro: "Soient E et F deux espaces vectoriels normés. Une application linéaire u \u2208 \u2112(E, F) est dite bornée si elle préserve 'l'échelle' de l'espace.",
      thm6Title: "Théorème 6 : Continuité \u21CC Bornitude",
      thm6Desc: "Pour une application linéaire, la continuité topologique est parfaitement équivalente à la bornitude géométrique. Une application linéaire est continue si et seulement s'il existe une constante C > 0 telle que :",
      thm6Math: "||u(x)||_F \\le C ||x||_E \\quad \\forall x \\in E",
      thm6Note: "Cette constante C est la 'limite de vitesse' ultime de la transformation.",
      thm7Title: "Théorème 7 : L'Espace des Opérateurs",
      thm7Desc: "L'ensemble de toutes les applications linéaires continues de E vers F forme lui-même un espace vectoriel.",
      thm7Math: "\\mathcal{L}_c(E, F) = \\{ u \\in \\mathcal{L}(E, F) \\mid u \\text{ est continue} \\}",
      ex1Title: "Exercice 1 : Les 9 Visages de la Continuité",
      ex1Intro: "Pour une application linéaire f \u2208 \u2112(E, F), les 9 propriétés suivantes sont mathématiquement strictement équivalentes. En prouver une seule offre les huit autres gratuitement !",
      equivs: [
        "f est continue sur E.",
        "f est continue en un point arbitraire unique de E.",
        "f est continue à l'origine (0\u2091).",
        "f est uniformément continue sur E.",
        "f est lipschitzienne sur E.",
        "Il existe C > 0 tel que ||f(x)||\u2093 \u2264 C ||x||\u2091 pour tout x.",
        "f est bornée sur la boule unité fermée B\u2092(0, 1).",
        "f est bornée sur la boule unité ouverte B(0, 1).",
        "f est bornée sur la sphère unité S(0, 1)."
      ],
      nextTitle: "À Venir",
      nextDesc: "L'ultime frontière : L'Équivalence des Normes et la géométrie unique de la dimension finie."
    }
  };

  const curr = content[language];

  return (
    <main className="min-h-screen bg-white">
      <BoundedOperatorsHero />

      <section className="py-16 px-6 bg-slate-50">
        <div className="mx-auto max-w-4xl space-y-12">
          <Definition title={curr.defTitle}>
            <p className="text-slate-700 text-lg leading-relaxed">{curr.defIntro}</p>
          </Definition>

          <Theorem title={curr.thm6Title}>
            <p className="mb-6 text-slate-700">{curr.thm6Desc}</p>
            <div className="bg-indigo-950 p-8 rounded-3xl shadow-2xl text-indigo-100 mb-6 overflow-x-auto text-center">
               <BlockMath math={curr.thm6Math} />
            </div>
            <div className="flex items-center gap-3 p-4 bg-white/50 rounded-2xl border border-indigo-100">
               <Zap className="w-5 h-5 text-indigo-600" />
               <p className="text-sm text-indigo-900 font-bold italic">{curr.thm6Note}</p>
            </div>
          </Theorem>

          <Theorem title={curr.thm7Title}>
            <p className="mb-6 text-slate-700">{curr.thm7Desc}</p>
            <div className="bg-slate-900 p-6 rounded-2xl shadow-inner text-white overflow-x-auto">
               <BlockMath math={curr.thm7Math} />
            </div>
          </Theorem>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="mx-auto max-w-5xl">
          <Exercise title={curr.ex1Title}>
            <p className="mb-10 text-slate-700 text-lg">{curr.ex1Intro}</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
               {curr.equivs.map((text, idx) => (
                 <div key={idx} className="p-5 bg-white rounded-2xl border border-purple-100 shadow-sm hover:shadow-md hover:border-purple-200 transition-all group">
                    <div className="flex items-start gap-3">
                       <span className="flex-shrink-0 w-6 h-6 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center text-[10px] font-black group-hover:bg-purple-600 group-hover:text-white transition-colors">{idx + 1}</span>
                       <p className="text-xs font-bold text-slate-700 leading-relaxed">{text}</p>
                    </div>
                 </div>
               ))}
            </div>
          </Exercise>
        </div>
      </section>

      <section className="py-20 px-6 bg-slate-50">
        <div className="mx-auto max-w-5xl">
          <MatrixSqueezerVisualizer />
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-6 mb-20">
        <NextLesson 
          to="/normed/equivalence"
          chapter={7}
          title={curr.nextTitle}
          description={curr.nextDesc}
        />
      </div>
    </main>
  );
};

export default BoundedOperatorsPage;
