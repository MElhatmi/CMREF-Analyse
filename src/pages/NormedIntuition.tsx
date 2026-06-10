import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { InlineMath, BlockMath } from '../components/Math';
import { Definition, Proposition, Property } from '../components/MathBlocks';
import NormedHero from '../components/NormedHero';
import NormTriangleVisualizer from '../components/NormTriangleVisualizer';
import NextLesson from '../components/NextLesson';

const NormedIntuition: React.FC = () => {
  const { language } = useLanguage();

  const content = {
    EN: {
      defTitle: "Definition 1: Norm and Normed Vector Space",
      defIntro: "Let E be a vector space over the field \uD835\uDC4E (where \uD835\uDC4E is \u211D or \u2102). A norm on E is a function N: E \u2192 \u211D\u207A that satisfies three strict axioms:",
      ax1Title: "Homogeneity (N\u2081)",
      ax1Desc: "If you stretch a vector by a factor of \u03BB, its length scales exactly by the absolute value of \u03BB.",
      ax2Title: "Triangle Inequality (N\u2082)",
      ax2Desc: "The length of the combined vector x+y can never exceed the sum of their individual lengths. A detour is never a shortcut.",
      ax3Title: "Separation (N\u2083)",
      ax3Desc: "The only vector with zero length is the zero vector itself.",
      extraTitle: "Additional Definitions",
      extraNVS: "Normed Vector Space (Espace vectoriel norm\u00E9):",
      extraNVSDesc: "A vector space equipped with a norm, denoted (E, N).",
      extraSemi: "Semi-norm:",
      extraSemiDesc: "If a function verifies (N\u2081) and (N\u2082) but FAILS (N\u2083), it is a semi-norm. (Meaning a non-zero vector could have a 'length' of zero).",
      extraUnit: "Unit Vector:",
      extraUnitDesc: "A vector x is unitary if N(x) = 1.",
      propTitle: "Properties and The Induced Metric",
      prop1Title: "Reverse Triangle Inequality",
      prop1Desc: "This proves that the norm itself is a continuous function. A small change in the vector results in a predictably small change in its length.",
      prop2Title: "Generalized Triangle Inequality",
      prop3Title: "The Induced Metric",
      prop3Highlight: "Every normed vector space is automatically a metric space. But NOT every metric space is a normed vector space!",
      nextTitle: "Coming Soon",
      nextDesc: "The journey into Normed Vector Spaces continues with specific examples like Lp spaces and Convergence."
    },
    FR: {
      defTitle: "D\u00E9finition 1 : Norme et espace vectoriel norm\u00E9",
      defIntro: "Soit E un espace vectoriel sur le corps \uD835\uDC4E (o\u00F9 \uD835\uDC4E est \u211D ou \u2102). Une norme sur E est une fonction N : E \u2192 \u211D\u207A qui satisfait trois axiomes stricts :",
      ax1Title: "Homog\u00E9n\u00E9it\u00E9 (N\u2081)",
      ax1Desc: "Si vous \u00E9tirez un vecteur d'un facteur \u03BB, sa longueur est multipli\u00E9e exactement par la valeur absolue de \u03BB.",
      ax2Title: "In\u00E9galit\u00E9 triangulaire (N\u2082)",
      ax2Desc: "La longueur du vecteur combin\u00E9 x+y ne peut jamais d\u00E9passer la somme de leurs longueurs individuelles. Un d\u00E9tour n'est jamais un raccourci.",
      ax3Title: "S\u00E9paration (N\u2083)",
      ax3Desc: "Le seul vecteur de longueur nulle est le vecteur nul lui-m\u00EAme.",
      extraTitle: "D\u00E9finitions Suppl\u00E9mentaires",
      extraNVS: "Espace vectoriel norm\u00E9 :",
      extraNVSDesc: "Un espace vectoriel muni d'une norme, not\u00E9 (E, N).",
      extraSemi: "Semi-norme :",
      extraSemiDesc: "Si une fonction v\u00E9rifie (N\u2081) and (N\u2082) mais \u00C9CHOUE \u00E0 (N\u2083), c'est une semi-norme. (Signifie qu'un vecteur non nul pourrait avoir une 'longueur' de z\u00E9ro).",
      extraUnit: "Vecteur Unitaire :",
      extraUnitDesc: "Un vecteur x est unitaire si N(x) = 1.",
      propTitle: "Propri\u00E9t\u00E9s et M\u00E9trique Induite",
      prop1Title: "In\u00E9galit\u00E9 triangulaire renvers\u00E9e",
      prop1Desc: "Cela prouve que la norme elle-m\u00EAme est une fonction continue. Un petit changement dans le vecteur entra\u00EEne un changement pr\u00E9visiblement petit de sa longueur.",
      prop2Title: "In\u00E9galit\u00E9 triangulaire g\u00E9n\u00E9ralis\u00E9e",
      prop3Title: "La M\u00E9trique Induite",
      prop3Highlight: "Tout espace vectoriel norm\u00E9 est automatiquement un espace m\u00E9trique. Mais TOUT espace m\u00E9trique n'est pas forc\u00E9ment un espace vectoriel norm\u00E9 !",
      nextTitle: "\u00C0 venir",
      nextDesc: "Le voyage dans les espaces vectoriels norm\u00E9s continue avec des exemples sp\u00E9cifiques comme les espaces Lp et la convergence."
    }
  };

  const curr = content[language];

  return (
    <main className="min-h-screen bg-white">
      <NormedHero />

      <section className="py-16 px-6 bg-slate-50">
        <div className="mx-auto max-w-4xl">
          <Definition title={curr.defTitle}>
            <p className="mb-4">{curr.defIntro}</p>
            <div className="space-y-4">
              <div className="p-4 bg-white rounded-xl border border-blue-100 shadow-sm">
                <h5 className="font-bold text-blue-900 mb-1">{curr.ax1Title}:</h5>
                <p className="text-slate-600 mb-2">{curr.ax1Desc}</p>
                <BlockMath math="\forall x \in E, \forall \lambda \in \mathbb{K}, \quad N(\lambda x) = |\lambda| N(x)" />
              </div>
              <div className="p-4 bg-white rounded-xl border border-blue-100 shadow-sm">
                <h5 className="font-bold text-blue-900 mb-1">{curr.ax2Title}:</h5>
                <p className="text-slate-600 mb-2">{curr.ax2Desc}</p>
                <BlockMath math="\forall (x,y) \in E^2, \quad N(x+y) \le N(x) + N(y)" />
              </div>
              <div className="p-4 bg-white rounded-xl border border-blue-100 shadow-sm">
                <h5 className="font-bold text-blue-900 mb-1">{curr.ax3Title}:</h5>
                <p className="text-slate-600 mb-2">{curr.ax3Desc}</p>
                <BlockMath math="\forall x \in E, \quad N(x) = 0 \iff x = 0_E" />
              </div>
            </div>

            <div className="mt-8 border-t border-blue-100 pt-6">
              <h5 className="font-bold text-blue-900 mb-4">{curr.extraTitle}</h5>
              <ul className="space-y-4">
                <li>
                  <span className="font-bold">{curr.extraNVS}</span> {curr.extraNVSDesc}
                </li>
                <li>
                  <span className="font-bold">{curr.extraSemi}</span> {curr.extraSemiDesc}
                </li>
                <li>
                  <span className="font-bold">{curr.extraUnit}</span> {curr.extraUnitDesc} <InlineMath math="N(x) = 1" />.
                </li>
              </ul>
            </div>
          </Definition>
        </div>
      </section>

      <section className="py-16 px-6">
        <div className="mx-auto max-w-6xl">
          <div className="flex items-center gap-3 mb-8">
            <div className="h-8 w-1 bg-emerald-600 rounded-full" />
            <h2 className="text-3xl font-bold text-slate-900">{curr.propTitle}</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
             <Property title={curr.prop1Title}>
               <p className="mb-4">{curr.prop1Desc}</p>
               <BlockMath math="\forall (x,y) \in E^2, \quad |N(x) - N(y)| \le N(x-y)" />
             </Property>

             <Property title={curr.prop2Title}>
               <BlockMath math="N\left(\sum_{i=1}^n \lambda_i x_i\right) \le \sum_{i=1}^n |\lambda_i| N(x_i)" />
             </Property>

             <Proposition title={curr.prop3Title}>
               <p className="mb-4">Every norm naturally creates a perfect metric! The distance between two vectors is simply the norm of their difference:</p>
               <BlockMath math="d(x,y) = N(x-y)" />
               <div className="mt-4 p-3 bg-slate-900 text-white rounded-xl text-xs font-bold uppercase tracking-widest text-center">
                 {curr.prop3Highlight}
               </div>
             </Proposition>
          </div>
        </div>
      </section>

      <section className="py-16 px-6 bg-slate-50">
        <div className="mx-auto max-w-5xl">
          <NormTriangleVisualizer />
        </div>
      </section>

      <NextLesson 
        to="/normed"
        chapter={2}
        title={curr.nextTitle}
        description={curr.nextDesc}
      />
    </main>
  );
};

export default NormedIntuition;
