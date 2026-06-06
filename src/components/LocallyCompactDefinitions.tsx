import React from 'react';
import { Definition, Proposition } from './MathBlocks';
import { useLanguage } from '../context/LanguageContext';

const LocallyCompactDefinitions: React.FC = () => {
  const { language } = useLanguage();

  const content = {
    EN: {
      header: "Formal Definitions & Structure",
      def17: "Definition 17",
      def17_1: "A separated (Hausdorff) topological space (E, T) is locally compact if every point x \u2208 E possesses at least one compact neighborhood.",
      def17_2: "A subset A of a separated topological space is locally compact if A, equipped with the induced topology, is locally compact.",
      prop14Title: "Proposition 14 (Products)",
      prop14Desc: "A finite product of locally compact spaces is locally compact.",
      prop14Sub: "Because R is locally compact, this proposition instantly proves that 2D planes R\u00B2 and 3D spaces R\u00B3 are also locally compact.",
      recall: "Recall: A neighborhood V is compact if every open cover of V has a finite subcover. Locally compact spaces essentially \"smuggle\" the finiteness of compact spaces into every single point of a much larger, potentially infinite universe."
    },
    FR: {
      header: "Définitions formelles & Structure",
      def17: "Définition 17",
      def17_1: "Un espace topologique séparé (Hausdorff) (E, T) est dit localement compact si tout point x \u2208 E possède au moins un voisinage compact.",
      def17_2: "Une partie A d'un espace séparé est localement compacte si A, munie de la topologie induite, est un espace localement compact.",
      prop14Title: "Proposition 14 (Produits)",
      prop14Desc: "Un produit fini d'espaces localement compacts est localement compact.",
      prop14Sub: "Puisque R est localement compact, cette proposition prouve instantanément que les plans 2D R\u00B2 et les espaces 3D R\u00B3 sont aussi localement compacts.",
      recall: "Rappel : Un voisinage V est compact si de tout recouvrement ouvert de V on peut extraire un sous-recouvrement fini. Les espaces localement compacts « injectent » la finitude des compacts en chaque point d'un univers bien plus grand et potentiellement infini."
    }
  };

  const curr = content[language];

  return (
    <section className="bg-slate-50 py-16 px-6">
      <div className="mx-auto max-w-4xl">
        <h2 className="text-3xl font-bold text-slate-900 mb-10 tracking-tight">{curr.header}</h2>
        
        <Definition title={curr.def17}>
          <ol className="list-decimal pl-5 space-y-6">
            <li>{curr.def17_1}</li>
            <li>{curr.def17_2}</li>
          </ol>
        </Definition>

        <div className="my-12 p-8 bg-emerald-50/50 rounded-3xl border border-emerald-100 shadow-sm relative overflow-hidden">
          <Proposition title={curr.prop14Title}>
             {curr.prop14Desc}
          </Proposition>
          <div className="mt-6 flex gap-4">
             <div className="w-1 bg-emerald-400 rounded-full" />
             <p className="text-sm text-slate-600 italic">
               {curr.prop14Sub}
             </p>
          </div>
        </div>

        <div className="bg-white p-8 rounded-3xl border border-slate-200 text-sm text-slate-500 leading-relaxed shadow-inner italic">
           <p>
             {curr.recall}
           </p>
        </div>
      </div>
    </section>
  );
};

export default LocallyCompactDefinitions;
