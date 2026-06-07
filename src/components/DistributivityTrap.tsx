import React from 'react';
import { BlockMath } from './Math';
import { AlertTriangle, Info } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const DistributivityTrap: React.FC = () => {
  const { language } = useLanguage();

  const content = {
    EN: {
      title: "The Distributivity Trap",
      propSubtitle: "Proposition 5 & Warnings",
      intro: "Topological operations do not always play nice with unions and intersections, especially when dealing with infinite families. The axioms of topology create a strict asymmetry.",
      interiorRules: "Interior Rules",
      closureRules: "Closure Rules",
      finiteWarning: "Equality holds only if the family is FINITE.",
      proofTitle: "Proof of Inequality (Infinite Unions)",
      pointLabel: "Each point:",
      unionOfInt: "Union of interiors:",
      intOfUnion: "Interior of union:",
      waitLabel: "Wait, try Closure of Q:",
      closureVerdict: "The union of individual closures is just Q, but the closure of the union is R!"
    },
    FR: {
      title: "Le Piège de la Distributivité",
      propSubtitle: "Proposition 5 & Avertissements",
      intro: "Les opérations topologiques ne se comportent pas toujours bien avec les réunions et les intersections, surtout avec des familles infinies. Les axiomes créent une asymétrie stricte.",
      interiorRules: "Règles de l'Intérieur",
      closureRules: "Règles de l'Adhérence",
      finiteWarning: "L'égalité n'est vraie que si la famille est FINIE.",
      proofTitle: "Preuve de l'Inégalité (Réunions Infinies)",
      pointLabel: "Chaque point :",
      unionOfInt: "Réunion des intérieurs :",
      intOfUnion: "Intérieur de la réunion :",
      waitLabel: "Attendez, testons l'Adhérence de Q :",
      closureVerdict: "La réunion des adhérences individuelles est simplement Q, mais l'adhérence de la réunion est R !"
    }
  };

  const curr = content[language];

  return (
    <section className="bg-slate-50 py-24 px-6">
      <div className="mx-auto max-w-5xl">
        <div className="bg-white rounded-[3rem] p-10 md:p-16 shadow-xl border border-red-100">
          <div className="flex items-center gap-4 mb-8">
            <div className="h-14 w-14 bg-red-100 rounded-2xl flex items-center justify-center text-red-600">
              <AlertTriangle className="w-8 h-8" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-slate-900">{curr.title}</h2>
              <p className="text-sm font-bold text-red-600 uppercase tracking-widest">{curr.propSubtitle}</p>
            </div>
          </div>

          <p className="text-slate-600 text-lg leading-relaxed mb-12">
            {curr.intro}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            <div className="space-y-6">
              <h4 className="font-bold text-blue-600 border-b border-blue-100 pb-2 uppercase tracking-widest text-xs">{curr.interiorRules}</h4>
              <div className="p-6 bg-blue-50/30 rounded-2xl border border-blue-100">
                <BlockMath math="\mathring{\bigcap_{i \in I} A_i} \subset \bigcap_{i \in I} \mathring{A}_i" />
                <div className="flex items-start gap-2 mt-4 text-[10px] text-blue-700 font-bold bg-blue-100/50 p-2 rounded">
                  <Info className="w-3 h-3 flex-shrink-0" />
                  {curr.finiteWarning}
                </div>
              </div>
              <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                <BlockMath math="\bigcup_{i \in I} \mathring{A}_i \subset \mathring{\bigcup_{i \in I} A_i}" />
              </div>
            </div>

            <div className="space-y-6">
              <h4 className="font-bold text-orange-600 border-b border-orange-100 pb-2 uppercase tracking-widest text-xs">{curr.closureRules}</h4>
              <div className="p-6 bg-orange-50/30 rounded-2xl border border-orange-100">
                <BlockMath math="\bigcup_{i \in I} \overline{A}_i \subset \overline{\bigcup_{i \in I} A_i}" />
                <div className="flex items-start gap-2 mt-4 text-[10px] text-orange-700 font-bold bg-orange-100/50 p-2 rounded">
                  <Info className="w-3 h-3 flex-shrink-0" />
                  {curr.finiteWarning}
                </div>
              </div>
              <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                <BlockMath math="\overline{\bigcap_{i \in I} A_i} \subset \bigcap_{i \in I} \overline{A}_i" />
              </div>
            </div>
          </div>

          <div className="bg-slate-900 rounded-[2.5rem] p-10 text-white relative overflow-hidden text-sm">
             <div className="absolute top-0 right-0 p-8 opacity-10">
                <AlertTriangle className="w-32 h-32" />
             </div>
             <h4 className="text-xl font-bold mb-6 text-red-400">{curr.proofTitle}</h4>
             <p className="text-slate-400 leading-relaxed mb-8 italic">
                Soit <InlineMath math="A_q = \{q\}" /> pour chaque rationnel <InlineMath math="q \in \mathbb{Q}" />.
             </p>
             <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div className="space-y-4">
                   <div className="bg-white/5 p-4 rounded-xl border border-white/10">
                      <p className="text-[10px] uppercase font-bold text-slate-500 mb-2">{curr.pointLabel}</p>
                      <InlineMath math="\mathring{A}_q = \emptyset" />
                   </div>
                   <div className="bg-white/5 p-4 rounded-xl border border-white/10">
                      <p className="text-[10px] uppercase font-bold text-slate-500 mb-2">{curr.unionOfInt}</p>
                      <InlineMath math="\bigcup_{q \in \mathbb{Q}} \mathring{A}_q = \emptyset" />
                   </div>
                </div>
                <div className="space-y-4">
                   <div className="bg-white/5 p-4 rounded-xl border border-white/10">
                      <p className="text-[10px] uppercase font-bold text-slate-500 mb-2">{curr.intOfUnion}</p>
                      <InlineMath math="\mathring{\bigcup_{q \in \mathbb{Q}} A_q} = \mathring{\mathbb{Q}} = \emptyset" />
                   </div>
                   <div className="bg-amber-900/20 p-4 rounded-xl border border-amber-500/20">
                      <p className="text-[10px] uppercase font-bold text-amber-500 mb-2">{curr.waitLabel}</p>
                      <InlineMath math="\overline{\mathbb{Q}} = \mathbb{R}" />
                      <p className="text-[10px] text-slate-500 mt-2">{curr.closureVerdict}</p>
                   </div>
                </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Internal InlineMath for local strings
const InlineMath: React.FC<{ math: string }> = ({ math }) => {
  const containerRef = React.useRef<HTMLSpanElement>(null);
  React.useEffect(() => {
    if (containerRef.current) {
      import('katex').then(katex => {
        katex.default.render(math, containerRef.current!, { throwOnError: false });
      });
    }
  }, [math]);
  return <span ref={containerRef} />;
};

export default DistributivityTrap;
