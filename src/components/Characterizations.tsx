import React from 'react';
import { BlockMath } from './Math';
import { Globe, MapPin } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Characterizations: React.FC = () => {
  const { language } = useLanguage();

  const content = {
    EN: {
      title: "Constructive Characterizations",
      subtitle: "How do we actually build or find these sets in practice?",
      globalTitle: "Global Operations",
      globalSubtitle: "Proposition 1",
      interiorTitle: "The Interior as a Union",
      interiorLogic: "\"The interior is the union of all open sets contained in A.\"",
      closureTitle: "The Closure as an Intersection",
      closureLogic: "\"The closure is the intersection of all closed sets containing A.\"",
      localTitle: "Local Point Criteria",
      localSubtitle: "Proposition 2",
      insideTitle: "Inside the Interior",
      insideLogic: "\"x is an interior point if it has some breathing room entirely inside A.\"",
      touchTitle: "Touching the Closure",
      touchLogic: "\"x is in the closure if every neighborhood of x touches A.\""
    },
    FR: {
      title: "Caractérisations Constructives",
      subtitle: "Comment construire ou trouver ces ensembles en pratique ?",
      globalTitle: "Opérations Globales",
      globalSubtitle: "Proposition 1",
      interiorTitle: "L'Intérieur comme Réunion",
      interiorLogic: "« L'intérieur est la réunion de tous les ouverts contenus dans A. »",
      closureTitle: "L'Adhérence comme Intersection",
      closureLogic: "« L'adhérence est l'intersection de tous les fermés contenant A. »",
      localTitle: "Critères Ponctuels Locaux",
      localSubtitle: "Proposition 2",
      insideTitle: "À l'intérieur de l'Intérieur",
      insideLogic: "« x est un point intérieur s'il possède un voisinage entièrement contenu dans A. »",
      touchTitle: "Au contact de l'Adhérence",
      touchLogic: "« x est dans l'adhérence si tout voisinage de x rencontre A. »"
    }
  };

  const curr = content[language];

  return (
    <section className="bg-white py-20 px-6">
      <div className="mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4 tracking-tight">{curr.title}</h2>
          <p className="text-slate-600 text-lg">{curr.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="bg-slate-50 rounded-[3rem] p-10 border border-slate-100 shadow-sm flex flex-col">
            <div className="flex items-center gap-4 mb-8">
              <div className="h-14 w-14 bg-blue-600 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-blue-200">
                <Globe className="w-8 h-8" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-slate-900">{curr.globalTitle}</h3>
                <p className="text-xs text-slate-500 font-bold uppercase tracking-widest">{curr.globalSubtitle}</p>
              </div>
            </div>

            <div className="space-y-8 flex-grow">
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
                <p className="text-sm font-bold text-slate-400 uppercase mb-4 tracking-tighter">{curr.interiorTitle}</p>
                <BlockMath math="\mathring{A} = \bigcup \{O \in \mathcal{T} \mid O \subset A\}" />
                <p className="mt-4 text-sm text-slate-600 leading-relaxed italic border-l-2 border-blue-400 pl-4">
                  {curr.interiorLogic}
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
                <p className="text-sm font-bold text-slate-400 uppercase mb-4 tracking-tighter">{curr.closureTitle}</p>
                <BlockMath math="\overline{A} = \bigcap \{F \text{ fermé} \mid A \subset F\}" />
                <p className="mt-4 text-sm text-slate-600 leading-relaxed italic border-l-2 border-orange-400 pl-4">
                  {curr.closureLogic}
                </p>
              </div>
            </div>
          </div>

          <div className="bg-slate-900 rounded-[3rem] p-10 shadow-2xl flex flex-col text-white">
            <div className="flex items-center gap-4 mb-8">
              <div className="h-14 w-14 bg-indigo-500 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-indigo-500/20">
                <MapPin className="w-8 h-8" />
              </div>
              <div>
                <h3 className="text-2xl font-bold">{curr.localTitle}</h3>
                <p className="text-xs text-slate-500 font-bold uppercase tracking-widest">{curr.localSubtitle}</p>
              </div>
            </div>

            <div className="space-y-8 flex-grow">
              <div className="bg-white/5 backdrop-blur-md p-6 rounded-2xl border border-white/10">
                <p className="text-sm font-bold text-indigo-400 uppercase mb-4 tracking-tighter">{curr.insideTitle}</p>
                <BlockMath math="x \in \mathring{A} \iff \exists O \in \mathcal{T}, \quad x \in O \subset A" />
                <p className="mt-4 text-sm text-slate-300 leading-relaxed italic opacity-80">
                  {curr.insideLogic}
                </p>
              </div>

              <div className="bg-white/5 backdrop-blur-md p-6 rounded-2xl border border-white/10">
                <p className="text-sm font-bold text-indigo-400 uppercase mb-4 tracking-tighter">{curr.touchTitle}</p>
                <BlockMath math="x \in \overline{A} \iff \forall O \in \mathcal{T} \text{ avec } x \in O, \quad O \cap A \neq \emptyset" />
                <p className="mt-4 text-sm text-slate-300 leading-relaxed italic opacity-80">
                  {curr.touchLogic}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Characterizations;
