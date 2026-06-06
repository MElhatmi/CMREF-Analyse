import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { Search } from 'lucide-react';

const NeighborhoodHero: React.FC = () => {
  const { language, t } = useLanguage();

  const content = {
    EN: {
      title: "Zooming In:",
      accent: "Local Environments",
      desc: "While open sets describe the \"global\" structure of a space, neighborhoods let us zoom in and describe the \"local environment\" around a specific point. They capture the idea of being \"near\" something without requiring a strict measurement of distance.",
      mathHeader: "The Formal Math",
      mathIntro: "Let V be a subset of a topological space E. V is a neighborhood of a point x if there exists an open set O such that:",
      crucial: "Crucial Distinction",
      crucialDesc: "A neighborhood does not have to be an open set itself! It just needs to be \"thick enough\" to completely swallow an open buffer zone around the point.",
      exampleTitle: "Valid Example",
      exampleDesc: "In R, [-1, 1] is a neighborhood of 0.",
      exampleLogic: "Because: 0 \in ]-0.5, 0.5[ \subset [-1, 1]",
      counterTitle: "Counter-Example",
      counterDesc: "In R, [0, 1] is NOT a neighborhood of 0.",
      counterLogic: "Reason: Any open interval around 0 spills into negatives."
    },
    FR: {
      title: "Zoom local :",
      accent: "Voisinages",
      desc: "Alors que les ensembles ouverts décrivent la structure « globale » d'un espace, les voisinages nous permettent de zoomer et de décrire l'« environnement local » autour d'un point spécifique. Ils capturent l'idée d'être « proche » sans nécessiter de mesure stricte de distance.",
      mathHeader: "Mathématiques formelles",
      mathIntro: "Soit V une partie d'un espace topologique E. V est un voisinage d'un point x s'il existe un ouvert O tel que :",
      crucial: "Distinction Cruciale",
      crucialDesc: "Un voisinage n'a pas besoin d'être un ouvert lui-même ! Il doit juste être assez « épais » pour englober une zone tampon ouverte autour du point.",
      exampleTitle: "Exemple Valide",
      exampleDesc: "Dans R, [-1, 1] est un voisinage de 0.",
      exampleLogic: "Car : 0 \in ]-0.5, 0.5[ \subset [-1, 1]",
      counterTitle: "Contre-Exemple",
      counterDesc: "Dans R, [0, 1] n'est PAS un voisinage de 0.",
      counterLogic: "Raison : Tout intervalle ouvert autour de 0 déborde dans les négatifs."
    }
  };

  const curr = content[language];

  return (
    <section className="relative overflow-hidden bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:items-center lg:gap-x-12">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 bg-blue-50 px-3 py-1 rounded-full text-blue-600 font-bold text-xs uppercase tracking-widest mb-6 border border-blue-100">
              <Search className="w-3 h-3" />
              {t('nav.bases')}
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-6xl text-balance">
              {curr.title} <span className="text-blue-600">{curr.accent}</span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-slate-600">
              {curr.desc}
            </p>

            <div className="mt-10 p-8 bg-slate-50 rounded-[2.5rem] border border-slate-100 shadow-inner">
               <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-4">{curr.mathHeader}</h3>
               <p className="text-slate-700 leading-relaxed mb-4 text-sm">
                 {curr.mathIntro}
               </p>
               <div className="bg-white p-4 rounded-2xl border border-slate-100 shadow-sm flex items-center justify-center">
                  <BlockMath math="x \in O \subset V" />
               </div>
            </div>
          </motion.div>
          
          <div className="space-y-6">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-blue-600 rounded-[2.5rem] p-8 text-white shadow-xl shadow-blue-200"
            >
              <div className="flex gap-4 items-start">
                <div className="w-6 h-6 flex-shrink-0 text-blue-200 font-bold bg-white/10 rounded flex items-center justify-center text-xs">i</div>
                <div>
                  <h4 className="font-bold mb-2 uppercase tracking-widest text-xs text-blue-100">{curr.crucial}</h4>
                  <p className="text-sm leading-relaxed text-blue-50">
                    {curr.crucialDesc}
                  </p>
                </div>
              </div>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
               <div className="p-6 bg-white rounded-3xl border border-slate-200 shadow-sm">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full" />
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">{curr.exampleTitle}</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {curr.exampleDesc}
                  </p>
                  <div className="mt-3 text-[10px] text-slate-400 italic font-mono bg-slate-50 p-2 rounded">
                    <InlineMath math={curr.exampleLogic} />
                  </div>
               </div>

               <div className="p-6 bg-white rounded-3xl border border-slate-200 shadow-sm">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full" />
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">{curr.counterTitle}</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {curr.counterDesc}
                  </p>
                  <div className="mt-3 text-[10px] text-slate-400 italic font-mono bg-slate-50 p-2 rounded">
                    {curr.counterLogic}
                  </div>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Internal components
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

const BlockMath: React.FC<{ math: string }> = ({ math }) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  React.useEffect(() => {
    if (containerRef.current) {
      import('katex').then(katex => {
        katex.default.render(math, containerRef.current!, { throwOnError: false, displayMode: true });
      });
    }
  }, [math]);
  return <div ref={containerRef} />;
};

export default NeighborhoodHero;
