import React from 'react';
import { Proposition, Theorem, Remark } from './MathBlocks';
import { ShieldCheck, Box, Zap } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const CompactStabilityGrid: React.FC = () => {
  const { language } = useLanguage();

  const content = {
    EN: {
      header: "Stability & Structural Rules",
      prop10: "Proposition 10: Finite Intersection Property",
      prop10_desc: "A separated space E is compact if and only if, for any family of closed sets in E with an empty intersection, there exists a finite sub-family that also has an empty intersection.",
      prop10_sub: "This is the \"dual\" definition of compactness using closed sets instead of open covers.",
      prop11: "Proposition 11: Compact implies Closed",
      prop11_desc: "Let E be a separated space. If A is a compact subset of E, then A is strictly closed in E.",
      prop11_badge: "Compactness is stronger than Closedness",
      prop12: "Proposition 12: Closed implies Compact",
      prop12_desc: "If the parent space E is compact, then every closed subset F of E is strictly compact.",
      prop12_sub: "In a compact universe, being closed is enough to guarantee compactness.",
      prop13: "Proposition 13: Unions and Intersections",
      prop13_1: "A finite union of compact subsets is compact.",
      prop13_2: "An arbitrary (non-empty) intersection of compact subsets is compact.",
      tychTitle: "Theorem 1: Tychonoff's Theorem",
      tychDesc: "An arbitrary product of compact spaces, equipped with the product topology, is compact.",
      rem5Title: "Remark 5: Closed Products",
      rem5Desc: "Similarly, an arbitrary product of closed sets, equipped with the product topology, is closed.",
      zap: "One of the most fundamental results in all of Topology."
    },
    FR: {
      header: "Stabilité et règles structurelles",
      prop10: "Proposition 10 : Propriété des intersections finies",
      prop10_desc: "Un espace séparé E est compact si et seulement si, pour toute famille de fermés de E d'intersection vide, il existe une sous-famille finie dont l'intersection est vide.",
      prop10_sub: "C'est la définition « duale » de la compacité utilisant des fermés au lieu de recouvrements ouverts.",
      prop11: "Proposition 11 : Compact implique Fermé",
      prop11_desc: "Soit E un espace séparé. Si A est une partie compacte de E, alors A est fermée dans E.",
      prop11_badge: "La compacité est plus forte que la fermeture",
      prop12: "Proposition 12 : Fermé implique Compact",
      prop12_desc: "Si l'espace parent E est compact, alors toute partie fermée F de E est compacte.",
      prop12_sub: "Dans un univers compact, être fermé suffit à garantir la compacité.",
      prop13: "Proposition 13 : Réunions et Intersections",
      prop13_1: "Une réunion finie de parties compactes est compacte.",
      prop13_2: "Une intersection quelconque (non vide) de parties compactes est compacte.",
      tychTitle: "Théorème 1 : Théorème de Tychonoff",
      tychDesc: "Un produit quelconque d'espaces compacts, muni de la topologie produit, est compact.",
      rem5Title: "Remarque 5 : Produits de fermés",
      rem5Desc: "De même, un produit quelconque de fermés, muni de la topologie produit, est fermé.",
      zap: "L'un des résultats les plus fondamentaux de toute la Topologie."
    }
  };

  const curr = content[language];

  return (
    <section className="bg-slate-50 py-24 px-6 overflow-hidden">
      <div className="mx-auto max-w-7xl">
        <h2 className="text-3xl font-bold text-slate-900 mb-16 text-center">{curr.header}</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-sm leading-relaxed">
          <div className="bg-white rounded-[3rem] p-10 shadow-sm border border-slate-200">
             <Proposition title={curr.prop10}>
               {curr.prop10_desc}
             </Proposition>
             <p className="mt-4 text-xs text-slate-500 italic">{curr.prop10_sub}</p>
          </div>

          <div className="bg-white rounded-[3rem] p-10 shadow-sm border border-slate-200">
             <Proposition title={curr.prop11}>
               {curr.prop11_desc}
             </Proposition>
             <div className="mt-6 flex items-center gap-3 bg-blue-50 p-4 rounded-2xl border border-blue-100">
                <ShieldCheck className="w-5 h-5 text-blue-500" />
                <p className="text-[10px] text-blue-700 font-bold uppercase tracking-tight">{curr.prop11_badge}</p>
             </div>
          </div>

          <div className="bg-white rounded-[3rem] p-10 shadow-sm border border-slate-200">
             <Proposition title={curr.prop12}>
               {curr.prop12_desc}
             </Proposition>
             <div className="mt-6 p-4 bg-slate-50 rounded-2xl border border-slate-100 italic text-[10px] text-slate-500">
                {curr.prop12_sub}
             </div>
          </div>

          <div className="bg-white rounded-[3rem] p-10 shadow-sm border border-slate-200">
             <Proposition title={curr.prop13}>
               <ol className="list-decimal pl-5 space-y-2">
                  <li>{curr.prop13_1}</li>
                  <li>{curr.prop13_2}</li>
               </ol>
             </Proposition>
          </div>
        </div>

        <div className="mt-12 bg-slate-900 rounded-[4rem] p-12 text-white relative overflow-hidden shadow-2xl">
           <div className="absolute top-0 right-0 p-8 opacity-10">
              <Box className="w-64 h-64 text-blue-400" />
           </div>
           <div className="relative z-10">
              <Theorem title={curr.tychTitle}>
                {curr.tychDesc}
              </Theorem>
              <div className="h-px bg-white/10 w-full my-8" />
              <Remark title={curr.rem5Title}>
                {curr.rem5Desc}
              </Remark>
              <div className="mt-8 flex items-center gap-3 text-blue-400 font-mono text-[10px] uppercase tracking-widest">
                 <Zap className="w-4 h-4 animate-pulse" />
                 {curr.zap}
              </div>
           </div>
        </div>
      </div>
    </section>
  );
};

export default CompactStabilityGrid;
