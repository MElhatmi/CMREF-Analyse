import React from 'react';
import { InlineMath, BlockMath } from './Math';
import { Book, CheckCircle2, Repeat } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const GlobalContinuityDef: React.FC = () => {
  const { language } = useLanguage();

  const content = {
    EN: {
      title: "Global Continuity",
      intro: "Let (E, TE) and (F, TF) be topological spaces. A function f: E \u2192 F is globally continuous if it respects the open structures of both spaces:",
      defTitle: "The Topologist's Definition",
      defQuote: "\"The inverse image of every open set in the target is open in the source.\"",
      equivTitle: "Equivalent Characterizations",
      rule1Title: "1. The Closed Set Rule",
      rule1Quote: "\"Closed sets pull back to closed sets.\"",
      rule1Math: "f\u207B\u00B9(F) closed in E for every closed F \u2282 F",
      rule2Title: "2. The Adherent Point Rule",
      rule2Quote: "\"Points on the edge stay on the edge.\"",
      crucialTitle: "Crucial Direction",
      crucialDesc: "Notice that we use the inverse image (f\u207B\u00B9) for open sets. Continuous functions are not required to map open sets to open sets! A function that does that is called an open map, which is a different property."
    },
    FR: {
      title: "Continuité Globale",
      intro: "Soient (E, TE) et (F, TF) deux espaces topologiques. Une fonction f: E \u2192 F est globalement continue si elle respecte les structures ouvertes des deux espaces :",
      defTitle: "La Définition du Topologue",
      defQuote: "« L'image réciproque de tout ouvert de l'ensemble d'arrivée est un ouvert de l'ensemble de départ. »",
      equivTitle: "Caractérisations Équivalentes",
      rule1Title: "1. Règle des ensembles fermés",
      rule1Quote: "« Les fermés se tirent en arrière en fermés. »",
      rule1Math: "f\u207B\u00B9(F) ferm\u00E9 dans E pour tout ferm\u00E9 F \u2282 F",
      rule2Title: "2. Règle des points adhérents",
      rule2Quote: "« Les points au bord restent au bord. »",
      crucialTitle: "Direction Cruciale",
      crucialDesc: "Notez que nous utilisons l'image réciproque (f\u207B\u00B9) pour les ouverts. Les fonctions continues ne sont pas tenues d'envoyer des ouverts sur des ouverts ! Une fonction qui fait cela est appelée une application ouverte, ce qui est une propriété différente."
    }
  };

  const curr = content[language];

  return (
    <section className="bg-slate-50 py-16 px-6">
      <div className="mx-auto max-w-4xl">
        <div className="rounded-[2.5rem] bg-white p-10 shadow-sm border border-slate-200">
          <div className="flex items-center gap-4 mb-10">
            <div className="h-12 w-12 bg-blue-100 rounded-2xl flex items-center justify-center text-blue-600">
              <Book className="w-6 h-6" />
            </div>
            <h2 className="text-3xl font-bold text-slate-900 tracking-tight">{curr.title}</h2>
          </div>

          <p className="text-lg text-slate-700 mb-8 leading-relaxed">
            {curr.intro}
          </p>

          <div className="bg-blue-50/50 p-8 rounded-3xl border border-blue-100 mb-12 shadow-inner">
             <h4 className="text-xs font-bold text-blue-400 uppercase tracking-widest mb-4">{curr.defTitle}</h4>
             <BlockMath math="\forall O \in \mathcal{T}_F, \quad f^{-1}(O) \in \mathcal{T}_E" />
             <p className="mt-4 text-sm text-slate-600 italic text-center">
               {curr.defQuote}
             </p>
          </div>

          <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-6 flex items-center gap-2">
            <Repeat className="w-4 h-4" /> {curr.equivTitle}
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
             <div className="p-6 bg-slate-50 rounded-3xl border border-slate-100 relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                   <CheckCircle2 className="w-12 h-12" />
                </div>
                <p className="font-bold text-slate-900 text-sm mb-3">{curr.rule1Title}</p>
                <p className="text-xs text-slate-600 leading-relaxed mb-4 italic">{curr.rule1Quote}</p>
                <div className="bg-white p-3 rounded-xl border border-slate-200 text-center">
                  <InlineMath math={curr.rule1Math} />
                </div>
             </div>

             <div className="p-6 bg-slate-50 rounded-3xl border border-slate-100 relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                   <CheckCircle2 className="w-12 h-12" />
                </div>
                <p className="font-bold text-slate-900 text-sm mb-3">{curr.rule2Title}</p>
                <p className="text-xs text-slate-600 leading-relaxed mb-4 italic">{curr.rule2Quote}</p>
                <div className="bg-white p-3 rounded-xl border border-slate-200 text-center">
                  <InlineMath math="f(\overline{A}) \subset \overline{f(A)} \text{ pour tout } A \subset E" />
                </div>
             </div>
          </div>

          <div className="mt-12 bg-slate-900 rounded-[2rem] p-8 text-white relative overflow-hidden">
             <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 blur-3xl -z-10" />
             <div className="flex gap-4 items-start">
                <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center shrink-0 shadow-lg shadow-blue-500/20">
                   <span className="font-bold text-sm">!</span>
                </div>
                <div>
                   <h5 className="font-bold mb-1 text-sm">{curr.crucialTitle}</h5>
                   <p className="text-xs text-slate-400 leading-relaxed">
                     {curr.crucialDesc}
                   </p>
                </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GlobalContinuityDef;
