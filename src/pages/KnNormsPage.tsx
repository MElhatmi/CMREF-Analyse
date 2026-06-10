import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { InlineMath, BlockMath } from '../components/Math';
import { Definition, Proposition } from '../components/MathBlocks';
import KnNormsHero from '../components/KnNormsHero';
import UnitSphereVisualizer from '../components/UnitSphereVisualizer';
import NextLesson from '../components/NextLesson';

const KnNormsPage: React.FC = () => {
  const { language } = useLanguage();

  const content = {
    EN: {
      defTitle: "Exemple 1: The Canonical Norms on Kⁿ",
      defIntro: "Let n \u2208 \u2115*. On the vector space E = \uD835\uDC4E\u207F, for a vector X = (x\u2081, x\u2082, \u2026, x\u2099), we define the following fundamental applications:",
      l1Title: "Norm 1 (Manhattan Norm)",
      l1Intuition: "The total absolute sum of all components. It represents the distance a taxi must travel on a perfectly gridded city.",
      l2Title: "Norm 2 (Euclidean Norm)",
      l2Intuition: "The standard 'straight-line' physical distance, derived directly from the canonical inner product.",
      linfTitle: "Infinite Norm (Maximum / Sup Norm)",
      linfIntuition: "The maximum absolute coordinate. It only cares about the single largest deviation from the origin.",
      propTitle: "Comparing the Norms (Inequalities)",
      propDesc: "For any vector X \u2208 \uD835\uDC4E\u207F, these norms are always ordered in a specific hierarchy:",
      exampleTitle: "Numeric Example",
      exampleX: "Let X = (3, 4) \u2208 \u211D\u00B2.",
      exampleResult: "Result: 4 \u2264 5 \u2264 7. The inequalities hold perfectly.",
      nextTitle: "Coming Soon",
      nextDesc: "The next chapter explores Norm Equivalence and why all norms are 'equal' in finite dimensions."
    },
    FR: {
      defTitle: "Exemple 1 : Les Normes Canoniques sur Kⁿ",
      defIntro: "Soit n \u2208 \u2115*. Sur l'espace vectoriel E = \uD835\uDC4E\u207F, pour un vecteur X = (x\u2081, x\u2082, \u2026, x\u2099), on d\u00E9finit les applications fondamentales suivantes :",
      l1Title: "Norme 1 (Norme de Manhattan)",
      l1Intuition: "La somme absolue totale de toutes les composantes. Elle repr\u00E9sente la distance qu'un taxi doit parcourir sur une grille urbaine parfaite.",
      l2Title: "Norme 2 (Norme Euclidienne)",
      l2Intuition: "La distance physique standard en 'ligne droite', d\u00E9riv\u00E9e directement du produit scalaire canonique.",
      linfTitle: "Norme Infinie (Norme du Maximum / Sup)",
      linfIntuition: "La coordonn\u00E9e absolue maximale. Elle ne tient compte que de l'\u00E9cart le plus important par rapport \u00E0 l'origine.",
      propTitle: "Comparaison des Normes (In\u00E9galit\u00E9s)",
      propDesc: "Pour tout vecteur X \u2208 \uD835\uDC4E\u207F, ces normes sont toujours ordonn\u00E9es selon une hi\u00E9rarchie sp\u00E9cifique :",
      exampleTitle: "Exemple Num\u00E9rique",
      exampleX: "Soit X = (3, 4) \u2208 \u211D\u00B2.",
      exampleResult: "R\u00E9sultat : 4 \u2264 5 \u2264 7. Les in\u00E9galit\u00E9s sont parfaitement v\u00E9rifi\u00E9es.",
      nextTitle: "\u00C0 Venir",
      nextDesc: "Le prochain chapitre explore l'\u00C9quivalence des Normes et pourquoi toutes les normes sont '\u00E9gales' en dimension finie."
    }
  };

  const curr = content[language];

  return (
    <main className="min-h-screen bg-white">
      <KnNormsHero />

      <section className="py-16 px-6 bg-slate-50">
        <div className="mx-auto max-w-6xl">
          <div className="flex items-center gap-3 mb-12 justify-center lg:justify-start">
             <div className="h-8 w-1 bg-blue-600 rounded-full" />
             <h2 className="text-3xl font-bold text-slate-900">{curr.defTitle}</h2>
          </div>
          
          <p className="mb-10 text-slate-700 text-lg max-w-3xl leading-relaxed">{curr.defIntro}</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Definition title={curr.l1Title}>
              <div className="bg-white p-6 rounded-2xl border border-blue-100 shadow-sm mb-4">
                <BlockMath math="||X||_1 = \sum_{i=1}^n |x_i|" />
              </div>
              <p className="text-sm text-slate-600 italic">
                <strong className="text-blue-900 block not-italic mb-1 underline decoration-blue-200 underline-offset-4">Intuition:</strong>
                {curr.l1Intuition}
              </p>
            </Definition>

            <Definition title={curr.l2Title}>
              <div className="bg-white p-6 rounded-2xl border border-emerald-100 shadow-sm mb-4">
                <BlockMath math="||X||_2 = \sqrt{\sum_{i=1}^n |x_i|^2}" />
              </div>
              <p className="text-sm text-slate-600 italic">
                <strong className="text-emerald-900 block not-italic mb-1 underline decoration-emerald-200 underline-offset-4">Intuition:</strong>
                {curr.l2Intuition}
              </p>
            </Definition>

            <Definition title={curr.linfTitle}>
              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm mb-4">
                <BlockMath math="||X||_\infty = \max_{1 \le i \le n} |x_i|" />
              </div>
              <p className="text-sm text-slate-600 italic">
                <strong className="text-slate-900 block not-italic mb-1 underline decoration-slate-300 underline-offset-4">Intuition:</strong>
                {curr.linfIntuition}
              </p>
            </Definition>
          </div>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="mx-auto max-w-5xl">
          <Proposition title={curr.propTitle}>
            <p className="mb-8 text-slate-700">{curr.propDesc}</p>
            <div className="bg-indigo-950 p-8 rounded-3xl shadow-2xl mb-12 overflow-x-auto">
               <BlockMath math="||X||_\infty \le ||X||_2 \le ||X||_1" />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="space-y-4">
                <h5 className="font-bold text-slate-900 flex items-center gap-2">
                  <span className="w-2 h-2 bg-indigo-600 rounded-full" />
                  {curr.exampleTitle}
                </h5>
                <p className="text-slate-600">{curr.exampleX}</p>
                <ul className="space-y-3 pl-4 border-l-2 border-slate-100">
                  <li className="flex items-center gap-4">
                    <span className="text-[10px] font-bold text-slate-400 w-12 uppercase">Infty</span>
                    <InlineMath math="||X||_\infty = \max(3, 4) = 4" />
                  </li>
                  <li className="flex items-center gap-4">
                    <span className="text-[10px] font-bold text-emerald-500 w-12 uppercase">L2</span>
                    <InlineMath math="||X||_2 = \sqrt{3^2 + 4^2} = 5" />
                  </li>
                  <li className="flex items-center gap-4">
                    <span className="text-[10px] font-bold text-blue-500 w-12 uppercase">L1</span>
                    <InlineMath math="||X||_1 = |3| + |4| = 7" />
                  </li>
                </ul>
                <div className="p-3 bg-indigo-50 rounded-xl text-indigo-900 text-sm font-bold border border-indigo-100">
                  {curr.exampleResult}
                </div>
              </div>

              <div className="bg-white p-1 rounded-3xl border border-slate-100 shadow-xl overflow-hidden aspect-video relative flex items-center justify-center">
                 <svg viewBox="0 0 200 120" className="w-full h-full opacity-20 absolute top-0 left-0 pointer-events-none">
                    <path d="M 0 100 Q 100 0 200 100" fill="none" stroke="currentColor" strokeWidth="2" className="text-indigo-600" />
                 </svg>
                 <div className="text-center p-8">
                    <p className="text-4xl font-black text-slate-200 uppercase tracking-widest select-none">Hierarchy</p>
                 </div>
              </div>
            </div>
          </Proposition>
        </div>
      </section>

      <section className="py-20 px-6 bg-slate-50">
        <div className="mx-auto max-w-5xl">
          <UnitSphereVisualizer />
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-6 mb-20">
        <NextLesson 
          to="/normed/equivalence"
          chapter={4}
          title={curr.nextTitle}
          description={curr.nextDesc}
        />
      </div>
    </main>
  );
};

export default KnNormsPage;
