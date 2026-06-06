import React from 'react';
import { Proposition, Theorem, Remark } from './MathBlocks';
import { useLanguage } from '../context/LanguageContext';
import { Layers, GitCommit, Split } from 'lucide-react';

const ConnectedStability: React.FC = () => {
  const { language } = useLanguage();

  const content = {
    EN: {
      header: "Stability & Structural Rules",
      prop16Title: "Proposition 16: Squeezing Property",
      prop16Desc: "If A is connected, any set B such that A \u2282 B \u2282 \u0100 is also connected.",
      remark6Title: "Remark 6: Dense Connectivity",
      remark6Desc: "If E contains a dense connected subset, then E itself is connected. (The closure \u0100 is always connected if A is).",
      prop17Title: "Proposition 17: Union Stability",
      prop17Desc: "Let (Ci) be a family of connected sets. If their intersection is not empty, then their union is connected.",
      remark7Title: "Remark 7: The Gap Problem",
      remark7Desc: "Disjoint connected sets stay disjoint. [0, 1] \u222A [2, 3] is NOT connected because there is a gap that acts like a \"cut.\"",
      theorem3Title: "Theorem 3: Geometry of R",
      theorem3Desc: "The connected subsets of the real line R are exactly the intervals (e.g., [a, b], ]a, +\u221E[).",
      theorem3Sub: "This theorem bridges abstract topology with the intuitive geometry of the 1D line.",
      prop18Title: "Proposition 18: Products",
      prop18Desc: "An arbitrary product of connected spaces, equipped with the product topology, is connected.",
      prop18Sub: "Stability across dimensions"
    },
    FR: {
      header: "Stabilité et règles structurelles",
      prop16Title: "Proposition 16 : Propriété d'intercalage",
      prop16Desc: "Si A est connexe, toute partie B telle que A \u2282 B \u2282 \u0100 est aussi connexe.",
      remark6Title: "Remarque 6 : Connectivité dense",
      remark6Desc: "Si E contient une partie connexe dense, alors E lui-même est connexe. (L'adhérence \u0100 est toujours connexe si A l'est).",
      prop17Title: "Proposition 17 : Stabilité par réunion",
      prop17Desc: "Soit (Ci) une famille de parties connexes. Si leur intersection est non vide, alors leur réunion est connexe.",
      remark7Title: "Remarque 7 : Le problème du vide",
      remark7Desc: "Des connexes disjoints restent disjoints. [0, 1] \u222A [2, 3] n'est PAS connexe à cause du vide qui agit comme une « coupure ».",
      theorem3Title: "Théorème 3 : Géométrie de R",
      theorem3Desc: "Les parties connexes de R sont exactement les intervalles (ex : [a, b], ]a, +\u221E[).",
      theorem3Sub: "Ce théorème fait le pont entre la topologie abstraite et la géométrie intuitive de la droite 1D.",
      prop18Title: "Proposition 18 : Produits",
      prop18Desc: "Un produit quelconque d'espaces connexes, muni de la topologie produit, est connexe.",
      prop18Sub: "Stabilité à travers les dimensions"
    }
  };

  const curr = content[language];

  return (
    <section className="bg-white py-24 px-6 overflow-hidden">
      <div className="mx-auto max-w-7xl">
        <h2 className="text-3xl font-bold text-slate-900 mb-16 text-center underline decoration-indigo-500 decoration-4 underline-offset-8">
          {curr.header}
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="bg-slate-50 rounded-[3rem] p-10 shadow-sm border border-slate-200 flex flex-col">
             <div className="h-10 w-10 bg-indigo-100 rounded-xl flex items-center justify-center mb-6">
                <Layers className="text-indigo-600 w-5 h-5" />
             </div>
             <Proposition title={curr.prop16Title}>
                {curr.prop16Desc}
             </Proposition>
             <Remark title={curr.remark6Title}>
                {curr.remark6Desc}
             </Remark>
          </div>

          <div className="bg-slate-50 rounded-[3rem] p-10 shadow-sm border border-slate-200 flex flex-col">
             <div className="h-10 w-10 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                <GitCommit className="text-blue-600 w-5 h-5" />
             </div>
             <Proposition title={curr.prop17Title}>
                {curr.prop17Desc}
             </Proposition>
             <Remark title={curr.remark7Title}>
                {curr.remark7Desc}
             </Remark>
          </div>

          <div className="bg-slate-900 rounded-[3rem] p-10 text-white shadow-xl relative overflow-hidden group">
             <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:scale-110 transition-transform">
                <Split className="w-32 h-32" />
             </div>
             <Theorem title={curr.theorem3Title}>
                {curr.theorem3Desc}
             </Theorem>
             <p className="mt-6 text-xs text-slate-400 italic">
               {curr.theorem3Sub}
             </p>
          </div>

          <div className="bg-indigo-600 rounded-[3rem] p-10 text-white shadow-xl flex flex-col justify-center">
             <Proposition title={curr.prop18Title}>
                {curr.prop18Desc}
             </Proposition>
             <div className="mt-6 flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-indigo-200">
                <div className="w-1 h-1 bg-white rounded-full animate-pulse" />
                {curr.prop18Sub}
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConnectedStability;
