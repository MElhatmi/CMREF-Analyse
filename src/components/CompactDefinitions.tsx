import React from 'react';
import { InlineMath } from './Math';
import { Definition } from './MathBlocks';
import { useLanguage } from '../context/LanguageContext';

const CompactDefinitions: React.FC = () => {
  const { language } = useLanguage();

  const content = {
    EN: {
      title: "3.1 Definitions & First Properties",
      def15: {
        title: "Cover (Recouvrement)",
        rules: [
          "A cover of A is a family (Oi) of subsets of E such that A is contained in their union.",
          "The cover is an open cover if all Oi are open sets.",
          "A subcover is a sub-family that still covers A. If it is finite, it is a finite subcover."
        ]
      },
      def16: {
        title: "Compactness (Borel-Lebesgue)",
        rules: [
          "A topological space E is compact if it is separated (Hausdorff) AND if every open cover has a finite subcover.",
          "A subset A is compact if it is a compact space under the induced topology."
        ]
      },
      quote: "\"Intuitively, a compact space is 'contained' enough that you can't run away to infinity or fall through a hole without being caught by one of your finite open covers.\""
    },
    FR: {
      title: "3.1 Définitions et premières propriétés",
      def15: {
        title: "Recouvrement",
        rules: [
          "Un recouvrement de A est une famille (Oi) de parties de E dont la réunion contient A.",
          "Le recouvrement est dit ouvert si tous les Oi sont des ouverts.",
          "Un sous-recouvrement est une sous-famille qui recouvre encore A. S'il est fini, c'est un sous-recouvrement fini."
        ]
      },
      def16: {
        title: "Compacité (Borel-Lebesgue)",
        rules: [
          "Un espace topologique E est compact s'il est séparé (Hausdorff) ET si de tout recouvrement ouvert de E on peut extraire un sous-recouvrement fini.",
          "Une partie A est compacte si elle est compacte pour la topologie induite."
        ]
      },
      quote: "« Intuitivement, un espace compact est assez « contenu » pour qu'on ne puisse pas s'échapper à l'infini ou tomber dans un trou sans être rattrapé par l'un de vos sous-recouvrements finis. »"
    }
  };

  const curr = content[language];

  return (
    <section className="bg-slate-50 py-16 px-6">
      <div className="mx-auto max-w-4xl">
        <h2 className="text-3xl font-bold text-slate-900 mb-8 tracking-tight">{curr.title}</h2>
        
        <Definition title={curr.def15.title}>
          Soit <InlineMath math="(E, \mathcal{T})" /> un espace topologique et <InlineMath math="A \subset E" />.
          <ol className="list-decimal pl-5 mt-4 space-y-4">
            {curr.def15.rules.map((r, i) => (
              <li key={i}>{r}</li>
            ))}
          </ol>
        </Definition>

        <Definition title={curr.def16.title}>
          <ol className="list-decimal pl-5 mt-4 space-y-4">
            {curr.def16.rules.map((r, i) => (
              <li key={i}>{r}</li>
            ))}
          </ol>
        </Definition>

        <div className="mt-12 bg-white p-8 rounded-3xl border border-slate-200 shadow-sm italic text-slate-600 text-sm leading-relaxed">
          {curr.quote}
        </div>
      </div>
    </section>
  );
};

export default CompactDefinitions;
