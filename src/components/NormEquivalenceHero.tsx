import React from 'react';
import { motion } from 'framer-motion';
import { Scale } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const NormEquivalenceHero: React.FC = () => {
  const { language } = useLanguage();

  const content = {
    EN: {
      badge: "Normed Vector Spaces: Page 10",
      title: "The Topological Consensus",
      subtitle: "In vector spaces, we can use many different 'rulers' to measure magnitude. But when do different measurements ultimately describe the same universe?",
      quote: "Two norms are equivalent if they agree on the meaning of 'closeness'.",
      desc: "Two norms are considered equivalent if one can be strictly 'trapped' or bounded by scaled versions of the other. When this happens, they achieve topological consensus: they define the exact same convergent sequences, the same open sets, and the same continuous functions. In finite dimensions, this agreement is universal."
    },
    FR: {
      badge: "Espaces Vectoriels Normés : Page 10",
      title: "Le Consensus Topologique",
      subtitle: "Dans les espaces vectoriels, nous pouvons utiliser de nombreuses 'règles' différentes pour mesurer la magnitude. Mais quand des mesures différentes décrivent-elles finalement le même univers ?",
      quote: "Deux normes sont équivalentes si elles s'accordent sur la signification de la 'proximité'.",
      desc: "Deux normes sont considérées comme équivalentes si l'une peut être strictement 'piégée' ou bornée par des versions mises à l'échelle de l'autre. Lorsque cela se produit, elles atteignent un consensus topologique : elles définissent exactement les mêmes suites convergentes, les mêmes ouverts et les mêmes fonctions continues."
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
            <div className="inline-flex items-center gap-2 bg-indigo-50 px-3 py-1 rounded-full text-indigo-600 font-bold text-xs uppercase tracking-widest mb-6 border border-indigo-100">
              <Scale className="w-3 h-3" />
              {curr.badge}
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-6xl text-balance">
              {curr.title}
            </h1>
            <p className="mt-6 text-lg leading-8 text-slate-600 italic border-l-4 border-indigo-200 pl-4">
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
            <div className="absolute inset-0 bg-indigo-100/20 blur-3xl -z-10 rounded-full" />
            <svg viewBox="0 0 400 300" className="w-full max-w-md drop-shadow-2xl">
               <rect width="400" height="300" rx="40" fill="#f8fafc" />
               
               {/* Equivalence Illustration (Squeezing shapes) */}
               <g transform="translate(200, 150)">
                 {/* Target Circle (L2) */}
                 <circle r="70" fill="#4f46e5" fillOpacity="0.1" stroke="#4f46e5" strokeWidth="4" />
                 
                 {/* Outer Trap (Linf scaled) */}
                 <motion.rect 
                    x="-100" y="-100" width="200" height="200" 
                    fill="none" stroke="#ef4444" strokeWidth="2" strokeDasharray="4 4"
                    animate={{ scale: [1.1, 1, 1.1] }} transition={{ repeat: Infinity, duration: 4 }}
                 />
                 
                 {/* Inner Trap (Linf scaled) */}
                 <motion.rect 
                    x="-50" y="-50" width="100" height="100" 
                    fill="none" stroke="#10b981" strokeWidth="2" strokeDasharray="4 4"
                    animate={{ scale: [0.9, 1, 0.9] }} transition={{ repeat: Infinity, duration: 4 }}
                 />

                 {/* Labels */}
                 <text y="-115" textAnchor="middle" className="text-[10px] font-bold fill-red-600 uppercase tracking-widest">\u03B2 N_1</text>
                 <text y="-55" textAnchor="middle" className="text-[10px] font-bold fill-emerald-600 uppercase tracking-widest">\u03B1 N_1</text>
                 <text y="5" textAnchor="middle" className="text-[10px] font-bold fill-indigo-600 uppercase tracking-widest">N_2</text>
               </g>

               {/* Background Grid */}
               <defs>
                 <pattern id="grid-equiv" width="20" height="20" patternUnits="userSpaceOnUse">
                   <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#e2e8f0" strokeWidth="0.5" />
                 </pattern>
               </defs>
               <rect x="40" y="40" width="320" height="220" fill="url(#grid-equiv)" rx="20" opacity="0.3" />
            </svg>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default NormEquivalenceHero;
