import React from 'react';
import { InlineMath, BlockMath } from './Math';
import { Definition } from './MathBlocks';
import { useLanguage } from '../context/LanguageContext';

const PathDefinitions: React.FC = () => {
  const { language } = useLanguage();

  const content = {
    EN: {
      title: "Formal Definitions",
      def19: {
        title: "Definition 19: The Arc (Path)",
        quote: "\"The interval [0, 1] represents 'time'. At t=0 you are at the start, and at t=1 you arrive at your destination.\""
      },
      def20: {
        title: "Definition 20: Path-Connectedness",
        quote: "\"Translation: You can continuously travel from any point to any other without ever leaving the space.\""
      }
    },
    FR: {
      title: "Définitions Formelles",
      def19: {
        title: "Définition 19 : L'Arc (Chemin)",
        quote: "« L'intervalle [0, 1] représente le « temps ». À t=0 vous êtes au départ, et à t=1 vous arrivez à destination. »"
      },
      def20: {
        title: "Définition 20 : Connexité par arcs",
        quote: "« Traduction : Vous pouvez voyager continûment de n'importe quel point à un autre sans jamais quitter l'espace. »"
      }
    }
  };

  const curr = content[language];

  return (
    <section className="bg-slate-50 py-16 px-6">
      <div className="mx-auto max-w-4xl">
        <h2 className="text-3xl font-bold text-slate-900 mb-8 tracking-tight">{curr.title}</h2>
        
        <Definition title={curr.def19.title}>
          An <strong>arc</strong> (or path) in a topological space <InlineMath math="E" /> is a continuous function <InlineMath math="\gamma : [0, 1] \to E" />.
          <p className="mt-4 text-slate-500 leading-relaxed italic">
            {curr.def19.quote}
          </p>
        </Definition>

        <Definition title={curr.def20.title}>
          A space <InlineMath math="E" /> is <strong>path-connected</strong> (connexe par arcs) if, for any pair of points <InlineMath math="x, y \in E" />, there exists an arc <InlineMath math="\gamma" /> such that:
          <BlockMath math="\gamma(0) = x \quad \text{and} \quad \gamma(1) = y" />
          <p className="mt-4 text-slate-500 leading-relaxed italic text-center">
            {curr.def20.quote}
          </p>
        </Definition>
      </div>
    </section>
  );
};

export default PathDefinitions;
