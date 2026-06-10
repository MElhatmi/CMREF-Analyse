import React from 'react';
import { motion } from 'framer-motion';
import { Shapes } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const KnNormsHero: React.FC = () => {
  const { language } = useLanguage();

  const content = {
    EN: {
      badge: "Normed Vector Spaces: Page 3",
      title: "The Zoo of Norms in Kⁿ",
      subtitle: "While abstract vector spaces can have wildly unpredictable norms, finite-dimensional spaces like Rⁿ have three canonical ways to measure reality.",
      quote: "A circle is only round if you use the right ruler.",
      desc: "In Kⁿ, distance isn't just a straight line. Depending on your needs, you might walk on a city grid (Manhattan), fly in a straight line (Euclidean), or only care about the worst-case deviation (Maximum). These three norms form the foundation of most geometric analysis in finite dimensions."
    },
    FR: {
      badge: "Espaces Vectoriels Normés : Page 3",
      title: "Le Zoo des Normes de Kⁿ",
      subtitle: "Alors que les espaces vectoriels abstraits peuvent avoir des normes imprévisibles, les espaces de dimension finie comme Rⁿ disposent de trois manières canoniques de mesurer la réalité.",
      quote: "Un cercle n'est rond que si vous utilisez la bonne règle.",
      desc: "Dans Kⁿ, la distance n'est pas seulement une ligne droite. Selon vos besoins, vous pouvez marcher sur une grille urbaine (Manhattan), voler en ligne droite (Euclidienne), ou ne vous soucier que de l'écart le plus important (Maximum). Ces trois normes constituent le fondement de la plupart des analyses géométriques en dimension finie."
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
            <div className="inline-flex items-center gap-2 bg-emerald-50 px-3 py-1 rounded-full text-emerald-600 font-bold text-xs uppercase tracking-widest mb-6 border border-emerald-100">
              <Shapes className="w-3 h-3" />
              {curr.badge}
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-6xl text-balance">
              {curr.title}
            </h1>
            <p className="mt-6 text-lg leading-8 text-slate-600 italic border-l-4 border-emerald-200 pl-4">
              "{curr.quote}"
            </p>
            <p className="mt-6 text-lg leading-8 text-slate-700">
              {curr.subtitle}
            </p>
            <p className="mt-4 text-slate-600 leading-relaxed">
              {curr.desc}
            </p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="relative flex justify-center"
          >
            <div className="absolute inset-0 bg-emerald-100/20 blur-3xl -z-10 rounded-full" />
            <svg viewBox="0 0 400 300" className="w-full max-w-md drop-shadow-2xl">
               <rect width="400" height="300" rx="40" fill="#f8fafc" />
               
               {/* Norms Comparison Illustration */}
               <g transform="translate(200, 150) scale(80)">
                 {/* L_inf Square */}
                 <rect x="-1" y="-1" width="2" height="2" fill="none" stroke="#94a3b8" strokeWidth="0.05" strokeDasharray="0.1 0.1" />
                 
                 {/* L_2 Circle */}
                 <circle r="1" fill="none" stroke="#10b981" strokeWidth="0.05" />
                 
                 {/* L_1 Diamond */}
                 <path d="M 1 0 L 0 1 L -1 0 L 0 -1 Z" fill="none" stroke="#3b82f6" strokeWidth="0.05" />

                 {/* Origin */}
                 <circle r="0.05" fill="#1e293b" />
               </g>

               {/* Labels */}
               <text x="110" y="70" className="text-[10px] font-bold fill-slate-400 uppercase tracking-widest">L-infinity</text>
               <text x="210" y="55" className="text-[10px] font-bold fill-emerald-600 uppercase tracking-widest">L-2 Euclidean</text>
               <text x="160" y="110" className="text-[10px] font-bold fill-blue-600 uppercase tracking-widest">L-1 Manhattan</text>

               {/* Background Grid */}
               <defs>
                 <pattern id="grid-norms" width="20" height="20" patternUnits="userSpaceOnUse">
                   <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#e2e8f0" strokeWidth="0.5" />
                 </pattern>
               </defs>
               <rect x="40" y="40" width="320" height="220" fill="url(#grid-norms)" rx="20" opacity="0.3" />
            </svg>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default KnNormsHero;
