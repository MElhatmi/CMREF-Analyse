import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { InlineMath, BlockMath } from '../components/Math';
import { Definition, Theorem, Remark } from '../components/MathBlocks';
import { Zap } from 'lucide-react';
import InnerProductHero from '../components/InnerProductHero';
import CauchySchwarzVisualizer from '../components/CauchySchwarzVisualizer';
import NextLesson from '../components/NextLesson';

const InnerProductPage: React.FC = () => {
  const { language } = useLanguage();

  const content = {
    EN: {
      defTitle: "Definition 2: Inner Product",
      defIntro: "Let E be a vector space over \uD835\uDC4E (where \uD835\uDC4E is \u211D or \u2102). An inner product on E is an application \u03C6 : E \u00D7 E \u2192 \u211D that satisfies three strict axioms:",
      ax1Title: "Hermitian Symmetry",
      ax1Desc: "The order of vectors matters only up to conjugation. For real spaces, this is simple symmetry.",
      ax2Title: "Linearity in the 2nd Argument",
      ax2Desc: "The inner product is linear with respect to the second vector, playing perfectly with addition and scaling.",
      ax3Title: "Positive Definite",
      ax3Desc: "The inner product of a vector with itself is always positive, and zero only for the zero vector.",
      remarkTitle: "Pre-Hilbert Space",
      remarkDesc: "A real or complex vector space equipped with an inner product is called a Pre-Hilbert Space (Espace pr\u00E9hilbertien).",
      thm1Title: "Cauchy-Schwarz Inequality",
      thm1Desc: "This fundamental inequality bounds the inner product by the product of the lengths. It is the heart of geometric analysis.",
      thm1Equality: "Equality Condition:",
      thm1EqualityDesc: "Equality holds IF AND ONLY IF (x, y) is linearly dependent (collinear).",
      thm2Title: "The Associated Norm",
      thm2Desc: "Every inner product naturally gives birth to a norm. This canonical norm inherits all the geometric properties of the product.",
      nextTitle: "Coming Soon",
      nextDesc: "Our journey continues with Orthogonality, Pythagoras, and the Parallelogram Law."
    },
    FR: {
      defTitle: "D\u00E9finition 2 : Produit Scalaire",
      defIntro: "Soit E un espace vectoriel sur \uD835\uDC4E (o\u00F9 \uD835\uDC4E est \u211D ou \u2102). Un produit scalaire sur E est une application \u03C6 : E \u00D7 E \u2192 \u211D qui satisfait trois axiomes stricts :",
      ax1Title: "Sym\u00E9trie Hermitienne",
      ax1Desc: "L'ordre des vecteurs n'importe que par conjugaison. Pour les espaces r\u00E9els, c'est la sym\u00E9trie simple.",
      ax2Title: "Lin\u00E9arit\u00E9 par rapport au 2\u00E8me Argument",
      ax2Desc: "Le produit scalaire est lin\u00E9aire par rapport au second vecteur, s'accordant parfaitement avec l'addition et la mise \u00E0 l'\u00E9chelle.",
      ax3Title: "D\u00E9finie Positive",
      ax3Desc: "Le produit scalaire d'un vecteur avec lui-m\u00EAme est toujours positif, et nul seulement pour le vecteur nul.",
      remarkTitle: "Espace Pr\u00E9hilbertien",
      remarkDesc: "Un espace vectoriel r\u00E9el ou complexe muni d'un produit scalaire est appel\u00E9 un Espace Pr\u00E9hilbertien.",
      thm1Title: "In\u00E9galit\u00E9 de Cauchy-Schwarz",
      thm1Desc: "Cette in\u00E9galit\u00E9 fondamentale borne le produit scalaire par le produit des longueurs. C'est le c\u0153ur de l'analyse g\u00E9om\u00E9trique.",
      thm1Equality: "Condition d'\u00C9galit\u00E9 :",
      thm1EqualityDesc: "L'\u00E9galit\u00E9 est v\u00E9rifi\u00E9e SI ET SEULEMENT SI (x, y) est li\u00E9e (collin\u00E9aire).",
      thm2Title: "La Norme Associ\u00E9e",
      thm2Desc: "Tout produit scalaire donne naturellement naissance \u00E0 une norme. Cette norme canonique h\u00E9rite de toutes les propri\u00E9t\u00E9s g\u00E9om\u00E9triques du produit.",
      nextTitle: "\u00C0 Venir",
      nextDesc: "Notre voyage continue avec l'Orthogonalit\u00E9, Pythagore et l'Identit\u00E9 du Parall\u00E9logramme."
    }
  };

  const curr = content[language];

  return (
    <main className="min-h-screen bg-white pb-20">
      <InnerProductHero />

      <section className="py-16 px-6 bg-slate-50">
        <div className="mx-auto max-w-4xl">
          <Definition title={curr.defTitle}>
            <p className="mb-6 text-slate-700">{curr.defIntro}</p>
            <div className="grid grid-cols-1 gap-6">
              <div className="p-5 bg-white rounded-2xl border border-purple-100 shadow-sm hover:shadow-md transition-shadow">
                <h5 className="font-bold text-purple-900 mb-2 flex items-center gap-2">
                  <span className="flex items-center justify-center w-6 h-6 bg-purple-600 text-white text-[10px] rounded-full">1</span>
                  {curr.ax1Title}
                </h5>
                <p className="text-slate-600 text-sm mb-4">{curr.ax1Desc}</p>
                <BlockMath math="\forall (x,y) \in E^2, \quad \varphi(x, y) = \overline{\varphi(y, x)}" />
              </div>

              <div className="p-5 bg-white rounded-2xl border border-purple-100 shadow-sm hover:shadow-md transition-shadow">
                <h5 className="font-bold text-purple-900 mb-2 flex items-center gap-2">
                  <span className="flex items-center justify-center w-6 h-6 bg-purple-600 text-white text-[10px] rounded-full">2</span>
                  {curr.ax2Title}
                </h5>
                <p className="text-slate-600 text-sm mb-4">{curr.ax2Desc}</p>
                <BlockMath math="\forall (x, y_1, y_2) \in E^3, \forall (\lambda, \mu) \in \mathbb{K}^2, \quad \varphi(x, \lambda y_1 + \mu y_2) = \lambda \varphi(x, y_1) + \mu \varphi(x, y_2)" />
              </div>

              <div className="p-5 bg-white rounded-2xl border border-purple-100 shadow-sm hover:shadow-md transition-shadow">
                <h5 className="font-bold text-purple-900 mb-2 flex items-center gap-2">
                  <span className="flex items-center justify-center w-6 h-6 bg-purple-600 text-white text-[10px] rounded-full">3</span>
                  {curr.ax3Title}
                </h5>
                <p className="text-slate-600 text-sm mb-4">{curr.ax3Desc}</p>
                <BlockMath math="\forall x \in E, \quad \varphi(x, x) \ge 0 \quad \text{AND} \quad (\varphi(x, x) = 0 \implies x = 0_E)" />
              </div>
            </div>

            <div className="mt-10">
              <Remark title={curr.remarkTitle}>
                {curr.remarkDesc}
              </Remark>
            </div>
          </Definition>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <Theorem title={curr.thm1Title}>
              <p className="mb-6 text-slate-700">{curr.thm1Desc}</p>
              <div className="bg-purple-950 p-6 rounded-2xl shadow-inner mb-6">
                <BlockMath math="|\varphi(x, y)|^2 \le \varphi(x, x) \cdot \varphi(y, y)" />
              </div>
              <div className="flex items-start gap-3 p-4 bg-amber-50 rounded-xl border border-amber-100">
                <Zap className="w-5 h-5 text-amber-600 mt-1 flex-shrink-0" />
                <div>
                  <span className="font-bold text-amber-900 text-sm block mb-1">{curr.thm1Equality}</span>
                  <p className="text-amber-800 text-sm italic">{curr.thm1EqualityDesc}</p>
                </div>
              </div>
            </Theorem>

            <Theorem title={curr.thm2Title}>
              <p className="mb-6 text-slate-700">{curr.thm2Desc}</p>
              <div className="bg-slate-900 p-6 rounded-2xl shadow-inner mb-6 text-indigo-400">
                <BlockMath math="\|x\| = \sqrt{\varphi(x, x)}" />
              </div>
              <p className="text-sm text-slate-500 leading-relaxed italic">
                Using this associated norm, the Cauchy-Schwarz inequality takes its most famous form:
                <span className="block mt-2 font-mono text-center text-slate-900 bg-slate-50 p-2 rounded-lg">
                  <InlineMath math="|\langle x, y \rangle| \le \|x\| \cdot \|y\|" />
                </span>
              </p>
            </Theorem>
          </div>
        </div>
      </section>

      <section className="py-16 px-6 bg-slate-50">
        <div className="mx-auto max-w-5xl">
          <CauchySchwarzVisualizer />
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-6">
        <NextLesson 
          to="/normed/inner-product"
          chapter={3}
          title={curr.nextTitle}
          description={curr.nextDesc}
        />
      </div>
    </main>
  );
};

export default InnerProductPage;
