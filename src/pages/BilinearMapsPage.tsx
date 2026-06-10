import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { BlockMath } from '../components/Math';
import { Definition, Theorem, Example, Remark } from '../components/MathBlocks';
import BilinearHero from '../components/BilinearHero';
import BilinearScalingVisualizer from '../components/BilinearScalingVisualizer';
import NextLesson from '../components/NextLesson';

const BilinearMapsPage: React.FC = () => {
  const { language } = useLanguage();

  const content = {
    EN: {
      defTitle: "Definition 6: Bilinear Application",
      defIntro: "Let E, F, and G be three \uD835\uDC4E-normed vector spaces. An application f: E \u00D7 F \u2192 G is called bilinear if it is linear with respect to each variable independently:",
      ax1Title: "Linearity in the 1st variable:",
      ax2Title: "Linearity in the 2nd variable:",
      thmTitle: "Theorem 8: Boundedness of Bilinear Maps",
      thmIntro: "Let f: E \u00D7 F \u2192 G be a bilinear application. The following properties are strictly equivalent:",
      thmProp1: "f is continuous on the product space E \u00D7 F.",
      thmProp2: "There exists a constant K > 0 such that for all (x,y) \u2208 E \u00D7 F:",
      thmMath: "||f(x, y)||_G \\le K ||x||_E ||y||_F",
      thmDesc: "Just like linear maps, a bilinear map is continuous if and only if it is 'bounded' by a constant K. However, this bound is proportional to the product of the norms of the two inputs.",
      exTitle: "Fundamental Examples",
      ex1Title: "Scalar Multiplication",
      ex1Math: "\uD835\uDC4E \u00D7 E \u2192 E, (\u03BB, x) \u21A6 \u03BB x",
      ex1Proof: "||\u03BB x||_E = |\u03BB| \u00B7 ||x||_E. Here, K = 1.",
      ex2Title: "The Inner Product",
      ex2Math: "E \u00D7 E \u2192 \uD835\uDC4E, (x, y) \u21A6 \u27E8 x | y \u27E9",
      ex2Proof: "By the Cauchy-Schwarz inequality, |\u27E8 x | y \u27E9| \\le ||x||_E \u00B7 ||y||_E. K = 1.",
      remTitle: "Multilinear Extension",
      remDesc: "This concept scales to p-linear applications (tensors, determinants). f: E\u2081 \u00D7 \u2026 \u00D7 E\u209A \u2192 F is continuous if and only if:",
      remMath: "N(f(x_1, \\dots, x_p)) \\le K \\cdot N_1(x_1) \\dots N_p(x_p)",
      nextTitle: "Coming Soon",
      nextDesc: "Our journey concludes with the topological classification of finite-dimensional spaces."
    },
    FR: {
      defTitle: "Définition 6 : Application Bilinéaire",
      defIntro: "Soient E, F et G trois espaces vectoriels normés. Une application f : E \u00D7 F \u2192 G est dite bilinéaire si elle est linéaire par rapport à chaque variable indépendamment :",
      ax1Title: "Linéarité par rapport à la 1ère variable :",
      ax2Title: "Linéarité par rapport à la 2ème variable :",
      thmTitle: "Théorème 8 : Bornitude des Applications Bilinéaires",
      thmIntro: "Soit f : E \u00D7 F \u2192 G une application bilinéaire. Les propriétés suivantes sont strictement équivalentes :",
      thmProp1: "f est continue sur l'espace produit E \u00D7 F.",
      thmProp2: "Il existe une constante K > 0 telle que pour tout (x,y) \u2208 E \u00D7 F :",
      thmMath: "||f(x, y)||_G \\le K ||x||_E ||y||_F",
      thmDesc: "Tout comme les applications linéaires, une application bilinéaire est continue si et seulement si elle est 'bornée' par une constante K. Cependant, cette borne est proportionnelle au produit des normes des deux entrées.",
      exTitle: "Exemples Fondamentaux",
      ex1Title: "Multiplication par un Scalaire",
      ex1Math: "\uD835\uDC4E \u00D7 E \u2192 E, (\u03BB, x) \u21A6 \u03BB x",
      ex1Proof: "||\u03BB x||_E = |\u03BB| \u00B7 ||x||_E. Ici, K = 1.",
      ex2Title: "Le Produit Scalaire",
      ex2Math: "E \u00D7 E \u2192 \uD835\uDC4E, (x, y) \u21A6 \u27E8 x | y \u27E9",
      ex2Proof: "D'après l'inégalité de Cauchy-Schwarz, |\u27E8 x | y \u27E9| \\le ||x||_E \u00B7 ||y||_E. K = 1.",
      remTitle: "Extension Multilinéaire",
      remDesc: "Ce concept se généralise aux applications p-linéaires (tenseurs, déterminants). f : E\u2081 \u00D7 \u2026 \u00D7 E\u209A \u2192 F est continue si et seulement si :",
      remMath: "N(f(x_1, \\dots, x_p)) \\le K \\cdot N_1(x_1) \\dots N_p(x_p)",
      nextTitle: "À Venir",
      nextDesc: "Notre voyage se termine par la classification topologique des espaces de dimension finie."
    }
  };

  const curr = content[language];

  return (
    <main className="min-h-screen bg-white">
      <BilinearHero />

      <section className="py-16 px-6 bg-slate-50">
        <div className="mx-auto max-w-4xl">
          <Definition title={curr.defTitle}>
            <p className="mb-8 text-slate-700 text-lg leading-relaxed">{curr.defIntro}</p>
            <div className="space-y-6">
               <div className="p-5 bg-white rounded-2xl border border-blue-100 shadow-sm">
                  <h5 className="font-bold text-blue-900 mb-3">{curr.ax1Title}</h5>
                  <BlockMath math="\forall (x_1, x_2) \in E^2, \forall (\alpha, \beta) \in \mathbb{K}^2, \forall y \in F, \quad f(\alpha x_1 + \beta x_2, y) = \alpha f(x_1, y) + \beta f(x_2, y)" />
               </div>
               <div className="p-5 bg-white rounded-2xl border border-blue-100 shadow-sm">
                  <h5 className="font-bold text-blue-900 mb-3">{curr.ax2Title}</h5>
                  <BlockMath math="\forall x \in E, \forall (\alpha, \beta) \in \mathbb{K}^2, \forall (y_1, y_2) \in F^2, \quad f(x, \alpha y_1 + \beta y_2) = \alpha f(x, y_1) + \beta f(x, y_2)" />
               </div>
            </div>
          </Definition>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="mx-auto max-w-4xl">
          <Theorem title={curr.thmTitle}>
            <p className="mb-6 text-slate-700">{curr.thmIntro}</p>
            <ul className="space-y-4 mb-8">
               <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-indigo-600 rounded-full" />
                  <p className="font-bold text-slate-800">{curr.thmProp1}</p>
               </li>
               <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-indigo-600 rounded-full" />
                  <p className="font-bold text-slate-800">{curr.thmProp2}</p>
               </li>
            </ul>
            <div className="bg-indigo-950 p-8 rounded-3xl shadow-2xl text-indigo-100 mb-8 overflow-x-auto text-center">
               <BlockMath math={curr.thmMath} />
            </div>
            <p className="text-sm text-slate-600 italic leading-relaxed">
              {curr.thmDesc}
            </p>
          </Theorem>
        </div>
      </section>

      <section className="py-16 px-6 bg-slate-50">
        <div className="mx-auto max-w-6xl">
          <div className="flex items-center gap-3 mb-12">
            <div className="h-8 w-1 bg-emerald-600 rounded-full" />
            <h2 className="text-3xl font-bold text-slate-900">{curr.exTitle}</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
             <Example title={curr.ex1Title}>
                <div className="bg-white p-4 rounded-xl border border-emerald-100 mb-4">
                   <BlockMath math={curr.ex1Math} />
                </div>
                <p className="text-sm text-slate-600 italic">{curr.ex1Proof}</p>
             </Example>

             <Example title={curr.ex2Title}>
                <div className="bg-white p-4 rounded-xl border border-emerald-100 mb-4">
                   <BlockMath math={curr.ex2Math} />
                </div>
                <p className="text-sm text-slate-600 italic">{curr.ex2Proof}</p>
             </Example>

             <div className="lg:col-span-1">
                <Remark title={curr.remTitle}>
                   <p className="mb-4">{curr.remDesc}</p>
                   <div className="bg-amber-100/50 p-4 rounded-xl">
                      <BlockMath math={curr.remMath} />
                   </div>
                </Remark>
             </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="mx-auto max-w-5xl">
          <BilinearScalingVisualizer />
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-6 mb-20">
        <NextLesson 
          to="/normed/equivalence"
          chapter={8}
          title={curr.nextTitle}
          description={curr.nextDesc}
        />
      </div>
    </main>
  );
};

export default BilinearMapsPage;
