import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { BlockMath } from '../components/Math';
import { Proposition, Corollary, Example, Warning } from '../components/MathBlocks';
import FiniteDimensionsHero from '../components/FiniteDimensionsHero';
import InfiniteEscapeVisualizer from '../components/InfiniteEscapeVisualizer';
import NextLesson from '../components/NextLesson';

const FiniteDimensionsPage: React.FC = () => {
  const { language } = useLanguage();

  const content = {
    EN: {
      prop4Title: "Proposition 4: Bolzano-Weierstrass in Finite Dim",
      prop4Desc: "In a finite-dimensional normed vector space, EVERY bounded sequence admits at least one adherence value (a convergent subsequence).",
      cor1Title: "Corollary 1: Compactness Simplified",
      cor1Desc: "In a finite-dimensional space, the compact sets are exactly the closed and bounded sets. This is a massive simplification compared to abstract spaces!",
      prop5Title: "Proposition 5: Closed Subspaces",
      prop5Desc: "Every finite-dimensional vector subspace of an EVN is automatically a closed set. A plane inside 3D space, or a line inside 2D space, has no missing boundaries.",
      prop6Title: "Proposition 6: Automatic Continuity",
      prop6Desc: "Every linear application from a finite-dimensional EVN (E, ||\u22C5||\u2091) to ANY normed vector space (F, ||\u22C5||\u2093) is strictly continuous.",
      ex2Title: "Examples of Automatic Continuity",
      ex2List: [
        "Coordinate projections: \u03C0\u1D62 : \u2211 x\u1D69 e\u1D69 \u21A6 x\u1D62.",
        "The trace of a matrix: tr: \u2133\u2091(\uD835\uDC4E) \u2192 \uD835\uDC4E.",
        "The transpose: A \u21A6 A\u1D40 from \u2133\u209A,\u2090(\uD835\uDC4E) to \u2133\u2090,\u209A(\uD835\uDC4E)."
      ],
      ex2Note: "Because the domain spaces are finite-dimensional, we do not even need to calculate a bounding constant C. Continuity is granted instantly by the dimension.",
      warnTitle: "The Critical Counter-Example: Infinite Dimensions Break",
      warnMath: "Let E = \u211D[X] be the infinite-dimensional space of polynomials with ||P||\u221E = max |a\u1D62|.",
      warnOp: "Consider the derivative operator D: P \u21A6 P'.",
      warnCalc: "Let P\u2099(X) = X\u207F. Then ||P\u2099||\u221E = 1, but ||P'\u2099||\u221E = ||nX\u207F\u207B\u00B9||\u221E = n.",
      warnConclusion: "As n \u2192 +\u221E, the output norm explodes while the input remains 1. No constant C exists. The operator is NOT continuous!",
      nextTitle: "Final Chapter",
      nextDesc: "Congratulations! You have completed the core journey of Normed Vector Spaces."
    },
    FR: {
      prop4Title: "Proposition 4 : Bolzano-Weierstrass en Dim Finie",
      prop4Desc: "Dans un espace vectoriel normé de dimension finie, TOUTE suite bornée admet au moins une valeur d'adhérence (une sous-suite convergente).",
      cor1Title: "Corollaire 1 : La Compacité Simplifiée",
      cor1Desc: "En dimension finie, les parties compactes sont exactement les parties fermées et bornées. C'est une simplification massive par rapport aux espaces abstraits !",
      prop5Title: "Proposition 5 : Sous-espaces Fermés",
      prop5Desc: "Tout sous-espace vectoriel de dimension finie d'un EVN est automatiquement un ensemble fermé. Un plan dans l'espace 3D n'a pas de bords manquants.",
      prop6Title: "Proposition 6 : Continuité Automatique",
      prop6Desc: "Toute application linéaire d'un EVN de dimension finie (E, ||\u22C5||\u2091) vers N'IMPORTE QUEL EVN (F, ||\u22C5||\u2093) est strictement continue.",
      ex2Title: "Exemples de Continuité Automatique",
      ex2List: [
        "Projections de coordonnées : \u03C0\u1D62 : \u2211 x\u1D69 e\u1D69 \u21A6 x\u1D62.",
        "La trace d'une matrice : tr : \u2133\u2091(\uD835\uDC4E) \u2192 \uD835\uDC4E.",
        "La transposée : A \u21A6 A\u1D40 de \u2133\u209A,\u2090(\uD835\uDC4E) vers \u2133\u2090,\u209A(\uD835\uDC4E)."
      ],
      ex2Note: "Parce que les espaces de départ sont de dimension finie, nous n'avons même pas besoin de calculer une constante de bornitude C. La continuité est offerte par la dimension.",
      warnTitle: "Contre-Exemple Critique : Rupture en Dimension Infinie",
      warnMath: "Soit E = \u211D[X] l'espace de dimension infinie des polynômes avec ||P||\u221E = max |a\u1D62|.",
      warnOp: "Considérons l'opérateur de dérivation D : P \u21A6 P'.",
      warnCalc: "Soit P\u2099(X) = X\u207F. Alors ||P\u2099||\u221E = 1, mais ||P'\u2099||\u221E = ||nX\u207F\u207B\u00B9||\u221E = n.",
      warnConclusion: "Quand n \u2192 +\u221E, la norme de sortie explose alors que l'entrée reste à 1. Aucune constante C n'existe. L'opérateur n'est PAS continu !",
      nextTitle: "Chapitre Final",
      nextDesc: "Félicitations ! Vous avez terminé le parcours de base des Espaces Vectoriels Normés."
    }
  };

  const curr = content[language];

  return (
    <main className="min-h-screen bg-white">
      <FiniteDimensionsHero />

      <section className="py-16 px-6 bg-slate-50">
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Proposition title={curr.prop4Title}>
              {curr.prop4Desc}
            </Proposition>
            <Corollary title={curr.cor1Title}>
              {curr.cor1Desc}
            </Corollary>
            <Proposition title={curr.prop5Title}>
              {curr.prop5Desc}
            </Proposition>
          </div>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="mx-auto max-w-4xl">
          <Proposition title={curr.prop6Title}>
            <p className="mb-6 text-slate-700 leading-relaxed">{curr.prop6Desc}</p>
            <Example title={curr.ex2Title}>
              <ul className="space-y-4 mb-6">
                 {curr.ex2List.map((item, i) => (
                   <li key={i} className="flex items-start gap-3 p-3 bg-white rounded-xl border border-blue-100 shadow-sm">
                      <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2" />
                      <span className="text-sm font-bold text-slate-800">{item}</span>
                   </li>
                 ))}
              </ul>
              <p className="text-xs text-slate-500 italic">{curr.ex2Note}</p>
            </Example>
          </Proposition>
        </div>
      </section>

      <section className="py-20 px-6 bg-red-50/20">
        <div className="mx-auto max-w-4xl">
          <Warning title={curr.warnTitle}>
            <div className="space-y-6">
              <div className="p-5 bg-white rounded-2xl border border-red-100 shadow-sm">
                <p className="text-sm font-bold text-slate-900 mb-2">{curr.warnMath}</p>
                <p className="text-sm text-slate-600 mb-4">{curr.warnOp}</p>
                <div className="bg-slate-900 p-4 rounded-xl text-center">
                   <BlockMath math="P_n(X) = X^n \implies ||P_n||_\infty = 1" />
                   <BlockMath math="D(P_n) = nX^{n-1} \implies ||D(P_n)||_\infty = n" />
                </div>
              </div>
              <div className="p-4 bg-red-600 text-white rounded-xl text-sm font-bold uppercase tracking-widest text-center shadow-lg shadow-red-100">
                {curr.warnConclusion}
              </div>
            </div>
          </Warning>
        </div>
      </section>

      <section className="py-20 px-6 bg-slate-50">
        <div className="mx-auto max-w-5xl">
          <InfiniteEscapeVisualizer />
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-6 mb-20">
        <NextLesson 
          to="/topology"
          chapter={9}
          title={curr.nextTitle}
          description={curr.nextDesc}
        />
      </div>
    </main>
  );
};

export default FiniteDimensionsPage;
