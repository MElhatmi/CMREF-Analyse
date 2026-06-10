import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { BlockMath } from '../components/Math';
import { Definition, Proposition, Example } from '../components/MathBlocks';
import { Sparkles } from 'lucide-react';
import LimitsHero from '../components/LimitsHero';
import DirectionalLimitVisualizer from '../components/DirectionalLimitVisualizer';
import NextLesson from '../components/NextLesson';

const LimitsEVNPage: React.FC = () => {
  const { language } = useLanguage();

  const content = {
    EN: {
      defTitle: "Definition 4: The Topological Limit",
      defIntro: "Let A \u2282 E, a \u2208 \u0100, l \u2208 F and f: A \u2192 F. f admits l as a limit at a if:",
      propTitle: "Proposition 3: Sequential Characterization",
      propDesc: "A function has a limit if and only if EVERY sequence approaching the target point produces the same result. This is the ultimate tool for proving a limit DOES NOT exist.",
      propMath: "f(x) \u2192 l \iff (\forall (u_n) \in A^{\mathbb{N}}, u_n \to a \implies f(u_n) \to l)",
      exGoodTitle: "Example 4: The \"Good\" Limit",
      exGoodMath: "f(x, y) = \frac{x^3 + y^3}{x^2 + y^2}",
      exGoodDesc: "Even though (0,0) is a hole, the numerator shrinks faster than the denominator. In polar coordinates:",
      exGoodBound: "|f(r, \theta)| = r |\cos^3\theta + \sin^3\theta| \le 2r \to 0",
      exBadTitle: "Example 6: The \"Bad\" Limit (Failure)",
      exBadMath: "h(x, y) = \frac{xy}{x^2 + y^2}",
      exBadDesc: "If we approach along lines y = mx, the result depends on the slope m! Different paths, different limits.",
      exBadResult: "h(x, mx) = \frac{m}{1 + m^2} \quad \text{(Depends on m!)}",
      contTitle: "Continuity and The Rigid Skeleton",
      contDefTitle: "Definition 5: Continuity",
      contDefDesc: "f is continuous at a if the limit at a is exactly f(a).",
      denseTitle: "Theorem 5: The Extension Theorem",
      denseDesc: "If two continuous functions agree on a dense subset, they must agree everywhere. Continuity locks the function's values across the entire space.",
      nextTitle: "Coming Soon",
      nextDesc: "The final frontier: Norm Equivalence and the unique geometry of finite dimensions."
    },
    FR: {
      defTitle: "Définition 4 : La Limite Topologique",
      defIntro: "Soit A \u2282 E, a \u2208 \u0100, l \u2208 F et f: A \u2192 F. f admet l comme limite en a si :",
      propTitle: "Proposition 3 : Caractérisation Séquentielle",
      propDesc: "Une fonction a une limite si et seulement si TOUTE suite s'approchant du point cible produit le même résultat. C'est l'outil ultime pour prouver qu'une limite N'EXISTE PAS.",
      propMath: "f(x) \u2192 l \iff (\forall (u_n) \in A^{\mathbb{N}}, u_n \to a \implies f(u_n) \to l)",
      exGoodTitle: "Exemple 4 : La \"Bonne\" Limite",
      exGoodMath: "f(x, y) = \frac{x^3 + y^3}{x^2 + y^2}",
      exGoodDesc: "Bien que (0,0) soit un trou, le numérateur décroît plus vite que le dénominateur. En coordonnées polaires :",
      exGoodBound: "|f(r, \theta)| = r |\cos^3\theta + \sin^3\theta| \le 2r \to 0",
      exBadTitle: "Exemple 6 : La \"Mauvaise\" Limite (Échec)",
      exBadMath: "h(x, y) = \frac{xy}{x^2 + y^2}",
      exBadDesc: "Si l'on s'approche le long des droites y = mx, le résultat dépend de la pente m ! Chemins différents, limites différentes.",
      exBadResult: "h(x, mx) = \frac{m}{1 + m^2} \quad \text{(Dépend de m !)}",
      contTitle: "Continuité et le Squelette Rigide",
      contDefTitle: "Définition 5 : Continuité",
      contDefDesc: "f est continue en a si la limite en a est exactement f(a).",
      denseTitle: "Théorème 5 : Prolongement par Continuité",
      denseDesc: "Si deux fonctions continues coïncident sur une partie dense, elles coïncident partout. La continuité verrouille les valeurs de la fonction sur tout l'espace.",
      nextTitle: "À Venir",
      nextDesc: "L'ultime frontière : L'Équivalence des Normes et la géométrie unique de la dimension finie."
    }
  };

  const curr = content[language];

  return (
    <main className="min-h-screen bg-white">
      <LimitsHero />

      <section className="py-16 px-6 bg-slate-50">
        <div className="mx-auto max-w-4xl space-y-12">
          <Definition title={curr.defTitle}>
            <p className="mb-6 text-slate-700">{curr.defIntro}</p>
            <div className="bg-white p-6 rounded-2xl border border-blue-100 shadow-sm overflow-x-auto">
               <BlockMath math="\forall \epsilon > 0, \exists \alpha > 0, \forall x \in A, \quad ||x - a||_E < \alpha \implies ||f(x) - l||_F < \epsilon" />
            </div>
          </Definition>

          <Proposition title={curr.propTitle}>
            <p className="mb-6 text-slate-700 leading-relaxed">{curr.propDesc}</p>
            <div className="bg-purple-950 p-6 rounded-2xl shadow-xl text-indigo-200 overflow-x-auto">
               <BlockMath math={curr.propMath} />
            </div>
          </Proposition>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <Example title={curr.exGoodTitle}>
               <div className="bg-slate-900 p-6 rounded-2xl mb-6 shadow-inner">
                  <BlockMath math={curr.exGoodMath} />
               </div>
               <p className="text-slate-600 text-sm mb-6 leading-relaxed italic">{curr.exGoodDesc}</p>
               <div className="p-4 bg-emerald-50 rounded-xl border border-emerald-100">
                  <BlockMath math={curr.exGoodBound} />
                  <p className="text-[10px] font-black text-emerald-600 uppercase mt-4 text-center">Converges to 0 independent of angle</p>
               </div>
            </Example>

            <Example title={curr.exBadTitle}>
               <div className="bg-slate-900 p-6 rounded-2xl mb-6 shadow-inner">
                  <BlockMath math={curr.exBadMath} />
               </div>
               <p className="text-slate-600 text-sm mb-6 leading-relaxed italic">{curr.exBadDesc}</p>
               <div className="p-4 bg-pink-50 rounded-xl border border-pink-100">
                  <BlockMath math={curr.exBadResult} />
                  <p className="text-[10px] font-black text-pink-600 uppercase mt-4 text-center">Failure: Result depends on slope m</p>
               </div>
            </Example>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-slate-900 text-white overflow-hidden relative">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent" />
        <div className="mx-auto max-w-4xl relative">
          <div className="flex items-center gap-4 mb-12">
             <Sparkles className="w-8 h-8 text-purple-400" />
             <h2 className="text-3xl font-bold tracking-tight">{curr.contTitle}</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
             <div className="bg-white/5 backdrop-blur-sm p-8 rounded-[2rem] border border-white/10">
                <h4 className="text-xl font-bold text-purple-300 mb-4">{curr.contDefTitle}</h4>
                <p className="text-slate-400 text-sm leading-relaxed mb-6">{curr.contDefDesc}</p>
                <div className="bg-black/20 p-4 rounded-xl">
                   <BlockMath math="\lim_{x \to a} f(x) = f(a)" />
                </div>
             </div>

             <div className="bg-white/5 backdrop-blur-sm p-8 rounded-[2rem] border border-white/10">
                <h4 className="text-xl font-bold text-emerald-300 mb-4">{curr.denseTitle}</h4>
                <p className="text-slate-400 text-sm leading-relaxed mb-6">{curr.denseDesc}</p>
                <div className="bg-black/20 p-4 rounded-xl">
                   <BlockMath math="f_{|B} = g_{|B} \implies f = g" />
                </div>
             </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 bg-slate-50">
        <div className="mx-auto max-w-5xl">
           <DirectionalLimitVisualizer />
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-6 mb-20">
        <NextLesson 
          to="/normed/equivalence"
          chapter={6}
          title={curr.nextTitle}
          description={curr.nextDesc}
        />
      </div>
    </main>
  );
};

export default LimitsEVNPage;
