import React from 'react';
import { motion } from 'framer-motion';
import { Waves } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const FunctionNormsHero: React.FC = () => {
  const { language } = useLanguage();

  const content = {
    EN: {
      badge: "Normed Vector Spaces: Page 4",
      title: "Measuring the Infinite",
      subtitle: "Step beyond finite vectors. In the world of continuous functions, distance can be measured by accumulated area or by absolute peak height.",
      quote: "In infinite dimensions, a sequence can vanish in one world while standing tall in another.",
      desc: "Vector spaces are not limited to finite lists of numbers like Rⁿ. The set of all continuous functions on an interval forms a massive, infinite-dimensional vector space. Just as we measure the length of a vector, we need rigorous ways to measure the 'size' or 'magnitude' of a function. We introduce the integral norms (measuring volume) and the supremum norm (measuring peak deviation)."
    },
    FR: {
      badge: "Espaces Vectoriels Normés : Page 4",
      title: "Mesurer l'Infini",
      subtitle: "Allez au-delà des vecteurs finis. Dans le monde des fonctions continues, la distance peut être mesurée par l'aire accumulée ou par la hauteur absolue du pic.",
      quote: "En dimension infinie, une suite peut s'évanouir dans un monde tout en restant debout dans un autre.",
      desc: "Les espaces vectoriels ne se limitent pas à des listes finies de nombres. L'ensemble des fonctions continues sur un intervalle forme un espace vectoriel massif de dimension infinie. Tout comme nous mesurons la longueur d'un vecteur, nous avons besoin de méthodes rigoureuses pour mesurer la 'taille' d'une fonction. Nous introduisons les normes intégrales (mesurant le volume) et la norme sup (mesurant l'écart maximal)."
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
              <Waves className="w-3 h-3" />
              {curr.badge}
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-6xl text-balance">
              {curr.title}
            </h1>
            <p className="mt-6 text-lg leading-8 text-slate-600 italic border-l-4 border-blue-200 pl-4">
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
            <div className="absolute inset-0 bg-blue-100/20 blur-3xl -z-10 rounded-full" />
            <svg viewBox="0 0 400 300" className="w-full max-w-md drop-shadow-2xl">
               <rect width="400" height="300" rx="40" fill="#f8fafc" />
               
               {/* Function Illustration */}
               <motion.path
                 d="M 50 200 Q 150 50 250 200 T 350 150"
                 fill="none"
                 stroke="#3b82f6"
                 strokeWidth="4"
                 strokeLinecap="round"
                 initial={{ pathLength: 0 }}
                 animate={{ pathLength: 1 }}
                 transition={{ duration: 2, ease: "easeInOut" }}
               />

               {/* Area shading */}
               <motion.path
                 d="M 50 200 Q 150 50 250 200 T 350 150 L 350 250 L 50 250 Z"
                 fill="#3b82f6"
                 fillOpacity="0.1"
                 initial={{ opacity: 0 }}
                 animate={{ opacity: 1 }}
                 transition={{ delay: 1 }}
               />

               {/* Peak Marker */}
               <motion.line
                 x1="120" y1="115" x2="180" y2="115"
                 stroke="#ef4444"
                 strokeWidth="2"
                 strokeDasharray="4 2"
                 animate={{ y: [115, 105, 115] }}
                 transition={{ repeat: Infinity, duration: 3 }}
               />
               <text x="140" y="100" className="text-[10px] font-bold fill-red-600 uppercase tracking-widest">Sup Norm</text>
               <text x="180" y="240" className="text-[10px] font-bold fill-blue-600 uppercase tracking-widest">Integral Norm</text>

               {/* Background Grid */}
               <defs>
                 <pattern id="grid-functions" width="20" height="20" patternUnits="userSpaceOnUse">
                   <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#e2e8f0" strokeWidth="0.5" />
                 </pattern>
               </defs>
               <rect x="40" y="40" width="320" height="220" fill="url(#grid-functions)" rx="20" opacity="0.3" />
            </svg>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FunctionNormsHero;
