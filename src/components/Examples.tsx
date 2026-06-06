import React from 'react';
import { HelpCircle } from 'lucide-react';
import ExtremeTopologies from './ExtremeTopologies';
import SierpinskiSpace from './SierpinskiSpace';
import UnionTrap from './UnionTrap';
import { useLanguage } from '../context/LanguageContext';

const Examples: React.FC = () => {
  const { language } = useLanguage();

  const content = {
    EN: {
      title: "Deep Dive: Examples & Logic",
      subtitle: "Topology is best understood by looking at where it holds and where it breaks. Each section below explores a critical case study in topological structure.",
      checklist: "Topological Checklist",
      checklistSub: "To prove a collection T is a topology, you must rigorously verify these three pillars:",
      pillars: [
        { title: "The Boundary Check", desc: "Is the empty set and whole space included?", tag: "Axiom 1" },
        { title: "Finite Intersection", desc: "If I pick any two sets, is their overlap also in here?", tag: "Axiom 2" },
        { title: "Arbitrary Union", desc: "If I throw an infinite collection together, is the result still in here?", tag: "Axiom 3" },
      ],
      biggerPicture: "The Bigger Picture",
      biggerPictureDesc: "By defining these \"Open Sets\", we create a structure on an otherwise empty set of points. This structure allows us to define continuity without ever needing to measure a single distance.",
      quote: "\"A function is continuous if the 'pullback' of every open set in the codomain is also an open set in the domain.\"",
      status: "Status: Theoretical Foundation Complete",
      keepExploring: "Keep Exploring"
    },
    FR: {
      title: "Approfondissement : Exemples & Logique",
      subtitle: "La topologie se comprend mieux en observant où elle s'applique et où elle échoue. Chaque section explore une étude de cas critique.",
      checklist: "Check-list Topologique",
      checklistSub: "Pour prouver qu'une collection T est une topologie, vous devez vérifier rigoureusement ces trois piliers :",
      pillars: [
        { title: "Vérification des bornes", desc: "L'ensemble vide et l'espace entier sont-ils inclus ?", tag: "Axiome 1" },
        { title: "Intersections finies", desc: "Si je choisis deux ensembles, leur intersection est-elle aussi présente ?", tag: "Axiome 2" },
        { title: "Réunions quelconques", desc: "Si je réunis une collection infinie, le résultat est-il toujours présent ?", tag: "Axiome 3" },
      ],
      biggerPicture: "Vue d'ensemble",
      biggerPictureDesc: "En définissant ces « Ensembles Ouverts », nous créons une structure sur un ensemble de points autrement vide. Cette structure permet de définir la continuité sans jamais mesurer de distance.",
      quote: "« Une fonction est continue si l'image réciproque de tout ouvert de l'ensemble d'arrivée est un ouvert de l'ensemble de départ. »",
      status: "Statut : Fondations théoriques terminées",
      keepExploring: "Continuer l'exploration"
    }
  };

  const curr = content[language];

  return (
    <section className="bg-slate-50 py-24 px-6">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-bold text-slate-900 mb-4 tracking-tight">{curr.title}</h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg leading-relaxed">
            {curr.subtitle}
          </p>
        </div>
        
        <ExtremeTopologies />
        <SierpinskiSpace />
        <UnionTrap />

        <div className="bg-slate-900 rounded-[4rem] p-12 md:p-20 text-white relative overflow-hidden shadow-2xl mt-24">
           <div className="absolute top-0 right-0 p-8 opacity-5">
              <HelpCircle className="w-[400px] h-[400px]" />
           </div>
           
           <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
              <div>
                 <h3 className="text-4xl font-bold mb-8">{curr.checklist}</h3>
                 <p className="text-slate-400 mb-10 text-lg">
                    {curr.checklistSub}
                 </p>
                 <div className="space-y-6">
                    {curr.pillars.map((item, i) => (
                      <div key={i} className="flex gap-6 group">
                        <div className="h-10 w-10 rounded-2xl bg-blue-600/20 text-blue-400 flex items-center justify-center text-lg font-bold border border-blue-500/20 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                          {i+1}
                        </div>
                        <div>
                          <div className="flex items-center gap-3 mb-1">
                            <p className="font-bold text-xl">{item.title}</p>
                            <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500 border border-slate-700 px-2 py-0.5 rounded-full">{item.tag}</span>
                          </div>
                          <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                 </div>
              </div>
              
              <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-[3rem] p-10 shadow-inner">
                 <h4 className="text-blue-400 font-bold text-sm uppercase mb-6 tracking-widest flex items-center gap-2">
                   <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
                   {curr.biggerPicture}
                 </h4>
                 <p className="text-slate-300 text-lg leading-relaxed mb-8">
                    {curr.biggerPictureDesc}
                 </p>
                 <div className="p-6 bg-blue-500/10 rounded-2xl border border-blue-400/20">
                    <p className="text-sm text-slate-400 italic">
                      {curr.quote}
                    </p>
                 </div>
                 <div className="mt-10 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6">
                    <span className="text-xs text-slate-500 italic font-mono uppercase tracking-tighter">{curr.status}</span>
                    <button className="w-full sm:w-auto bg-blue-600 hover:bg-blue-500 hover:scale-105 active:scale-95 px-8 py-4 rounded-2xl text-sm font-bold transition-all shadow-lg shadow-blue-600/20">
                      {curr.keepExploring}
                    </button>
                 </div>
              </div>
           </div>
        </div>
      </div>
    </section>
  );
};

export default Examples;
