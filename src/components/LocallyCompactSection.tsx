import React from 'react';
import { Definition, Proposition, Remark } from './MathBlocks';
import { useLanguage } from '../context/LanguageContext';

const LocallyCompactSection: React.FC = () => {
  const { language } = useLanguage();

  const content = {
    EN: {
      title: "Section 4: Locally Compact Spaces",
      def17: "Definition 17",
      def17Rule1: "A separated (Hausdorff) topological space (E, T) is locally compact if every point of E possesses at least one compact neighborhood.",
      def17Rule2: "A subset A of a separated topological space is locally compact if A, equipped with the induced topology, is locally compact.",
      ex1Title: "Example 1",
      ex1Main: "Every compact space is locally compact.",
      ex1Proof: "Proof: The whole space E is a compact neighborhood for every point.",
      ex2Title: "Example 2",
      ex2Main: "The real line R is locally compact.",
      ex2Proof: "Proof: For any x, [x-1, x+1] is a compact neighborhood.",
      ex3Title: "Counter-Example",
      ex3Main: "The rationals Q are NOT locally compact.",
      ex3Proof: "There are \"holes\" at every irrational, preventing compactness.",
      prop14: "Proposition 14 (Finite Products)",
      prop14Desc: "A finite product of locally compact spaces is locally compact.",
      remarkTitle: "Separation Requirement",
      remarkDesc: "Notice the definition explicitly requires the space to be separated. This is crucial for local properties to behave predictably under the compact operation."
    },
    FR: {
      title: "Section 4 : Espaces localement compacts",
      def17: "Définition 17",
      def17Rule1: "Un espace topologique séparé (Hausdorff) (E, T) est dit localement compact si tout point de E possède au moins un voisinage compact.",
      def17Rule2: "Une partie A d'un espace séparé est localement compacte si A, muni de la topologie induite, est un espace localement compact.",
      ex1Title: "Exemple 1",
      ex1Main: "Tout espace compact est localement compact.",
      ex1Proof: "Preuve : L'espace E entier est un voisinage compact pour chaque point.",
      ex2Title: "Exemple 2",
      ex2Main: "La droite réelle R est localement compacte.",
      ex2Proof: "Preuve : Pour tout x, [x-1, x+1] est un voisinage compact.",
      ex3Title: "Contre-Exemple",
      ex3Main: "Les rationnels Q ne sont PAS localement compacts.",
      ex3Proof: "Il y a des « trous » à chaque irrationnel, empêchant la compacité.",
      prop14: "Proposition 14 (Produits Finis)",
      prop14Desc: "Un produit fini d'espaces localement compacts est localement compact.",
      remarkTitle: "Exigence de Séparation",
      remarkDesc: "Notez que la définition exige explicitement que l'espace soit séparé. C'est crucial pour que les propriétés locales se comportent de manière prévisible."
    }
  };

  const curr = content[language];

  return (
    <section className="bg-white py-24 px-6">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-4xl font-bold text-slate-900 mb-12 tracking-tight border-b-2 border-slate-100 pb-4">
          {curr.title}
        </h2>

        <Definition title={curr.def17}>
          <ol className="list-decimal pl-5 space-y-4">
            <li>{curr.def17Rule1}</li>
            <li>{curr.def17Rule2}</li>
          </ol>
        </Definition>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-12 text-sm leading-relaxed">
           <div className="bg-slate-50 p-6 rounded-3xl border border-slate-100">
              <p className="text-slate-400 font-bold uppercase text-[10px] mb-2">{curr.ex1Title}</p>
              <p className="text-slate-700 font-bold">{curr.ex1Main}</p>
              <p className="text-slate-500 mt-2 italic">{curr.ex1Proof}</p>
           </div>
           
           <div className="bg-slate-50 p-6 rounded-3xl border border-slate-100">
              <p className="text-slate-400 font-bold uppercase text-[10px] mb-2">{curr.ex2Title}</p>
              <p className="text-slate-700 font-bold">{curr.ex2Main}</p>
              <p className="text-slate-500 mt-2 italic">{curr.ex2Proof}</p>
           </div>

           <div className="bg-red-50 p-6 rounded-3xl border border-red-100">
              <p className="text-red-400 font-bold uppercase text-[10px] mb-2">{curr.ex3Title}</p>
              <p className="text-red-900 font-bold">{curr.ex3Main}</p>
              <p className="text-red-700 mt-2 italic">{curr.ex3Proof}</p>
           </div>
        </div>

        <Proposition title={curr.prop14}>
          {curr.prop14Desc}
        </Proposition>

        <Remark title={curr.remarkTitle}>
          {curr.remarkDesc}
        </Remark>
      </div>
    </section>
  );
};

export default LocallyCompactSection;
