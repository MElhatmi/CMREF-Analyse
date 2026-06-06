import React from 'react';
import { Definition, Proposition, Theorem, Remark } from './MathBlocks';
import { useLanguage } from '../context/LanguageContext';

const ConnectednessSection: React.FC = () => {
  const { language } = useLanguage();

  const content = {
    EN: {
      title: "Section 5.1: Connected Spaces",
      def18: "Definition 18: Connectedness",
      def18_1: "A space (E, T) is connected if the only cover of E by two disjoint open sets is {\u2205, E}.",
      def18_1_sub: "\"In other words, you cannot partition E into two non-empty open sets.\"",
      def18_2: "A subset A is connected if it is connected under the induced topology.",
      prop15: "Proposition 15: The 3 Equivalences",
      prop15_1: "E is connected.",
      prop15_2: "The only cover of E by two disjoint closed sets is {\u2205, E}.",
      prop15_3: "The Clopen Test: The only subsets of E that are simultaneously open and closed (clopen) are \u2205 and E.",
      proTip: "If you ever find a non-empty, proper subset that is both open and closed, the space is disconnected.",
      prop16: "Proposition 16: Closures and Dense Sets",
      prop16_desc: "If A is connected, any subset B such that A \u2282 B \u2282 \u0100 is also connected. In particular, the closure \u0100 is connected.",
      remark6: "Remark 6: Dense Connected Subsets",
      remark6_desc: "If E contains a dense connected subset, then E itself is connected.",
      prop17: "Proposition 17: Unions of Connected Sets",
      prop17_desc: "Let (Ci) be a family of connected sets. If their intersection is not empty, then their union is connected.",
      remark7: "Remark 7: Disjoint Unions",
      remark7_desc: "The union of two disjoint connected sets is NOT connected (e.g. [0, 1] \u222A [2, 3]).",
      theorem3: "Theorem 3: Connected Subsets of R",
      theorem3_desc: "The connected subsets of R are exactly the intervals.",
      foundation: "This is a foundational result connecting topology to the geometry of the real line.",
      prop18: "Proposition 18: Products of Connected Spaces",
      prop18_desc: "An arbitrary product of connected spaces, equipped with the product topology, is connected."
    },
    FR: {
      title: "Section 5.1 : Espaces connexes",
      def18: "Définition 18 : Connexité",
      def18_1: "Un espace (E, T) est connexe si le seul recouvrement de E par deux ouverts disjoints est {\u2205, E}.",
      def18_1_sub: "« En d'autres termes, on ne peut pas partitionner E en deux ouverts non vides. »",
      def18_2: "Une partie A est connexe si elle est connexe pour la topologie induite.",
      prop15: "Proposition 15 : Les 3 équivalences",
      prop15_1: "E est connexe.",
      prop15_2: "Le seul recouvrement de E par deux fermés disjoints est {\u2205, E}.",
      prop15_3: "Le test des parties « ouvertes-fermées » : les seules parties de E à la fois ouvertes et fermées sont \u2205 et E.",
      proTip: "Si vous trouvez une partie propre non vide qui est à la fois ouverte et fermée, l'espace est déconnecté.",
      prop16: "Proposition 16 : Adhérence et densité",
      prop16_desc: "Si A est connexe, toute partie B telle que A \u2282 B \u2282 \u0100 est aussi connexe. En particulier, \u0100 est connexe.",
      remark6: "Remarque 6 : Parties denses connexes",
      remark6_desc: "Si E contient une partie connexe dense, alors E est lui-même connexe.",
      prop17: "Proposition 17 : Réunion de connexes",
      prop17_desc: "Soit (Ci) une famille de parties connexes. Si leur intersection est non vide, alors leur réunion est connexe.",
      remark7: "Remarque 7 : Réunions disjointes",
      remark7_desc: "La réunion de deux connexes disjoints n'est PAS connexe (ex: [0, 1] \u222A [2, 3]).",
      theorem3: "Théorème 3 : Parties connexes de R",
      theorem3_desc: "Les parties connexes de R sont exactement les intervalles.",
      foundation: "C'est un résultat fondamental reliant la topologie à la géométrie de la droite réelle.",
      prop18: "Proposition 18 : Produits d'espaces connexes",
      prop18_desc: "Un produit quelconque d'espaces connexes, muni de la topologie produit, est connexe."
    }
  };

  const curr = content[language];

  return (
    <section className="bg-white py-24 px-6 overflow-hidden">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-4xl font-bold text-slate-900 mb-12 tracking-tight border-b-2 border-slate-100 pb-4">
          {curr.title}
        </h2>

        <Definition title={curr.def18}>
          <ol className="list-decimal pl-5 space-y-4">
            <li>
              {curr.def18_1}
              <p className="mt-2 text-slate-500 italic text-xs">{curr.def18_1_sub}</p>
            </li>
            <li>{curr.def18_2}</li>
          </ol>
        </Definition>

        <Proposition title={curr.prop15}>
          {curr.prop15}
          <ol className="list-decimal pl-5 mt-4 space-y-2 italic">
            <li>{curr.prop15_1}</li>
            <li>{curr.prop15_2}</li>
            <li>{curr.prop15_3}</li>
          </ol>
          <div className="mt-6 p-4 bg-white rounded-2xl border border-slate-200 text-[11px] text-slate-500 shadow-inner">
             <span className="font-bold text-slate-900 uppercase tracking-tighter mr-2">Tip:</span>
             {curr.proTip}
          </div>
        </Proposition>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
           <div>
              <Proposition title={curr.prop16}>
                {curr.prop16_desc}
              </Proposition>
              <Remark title={curr.remark6}>
                {curr.remark6_desc}
              </Remark>
           </div>
           <div>
              <Proposition title={curr.prop17}>
                {curr.prop17_desc}
              </Proposition>
              <Remark title={curr.remark7}>
                {curr.remark7_desc}
              </Remark>
           </div>
        </div>

        <div className="my-12 p-1 bg-gradient-to-r from-indigo-500 to-blue-500 rounded-[2.5rem] shadow-xl">
           <div className="bg-white rounded-[2.4rem] p-10">
              <Theorem title={curr.theorem3}>
                {curr.theorem3_desc}
              </Theorem>
              <p className="text-xs text-slate-500 mt-4 text-center italic">
                {curr.foundation}
              </p>
           </div>
        </div>

        <Proposition title={curr.prop18}>
          {curr.prop18_desc}
        </Proposition>
      </div>
    </section>
  );
};

export default ConnectednessSection;
