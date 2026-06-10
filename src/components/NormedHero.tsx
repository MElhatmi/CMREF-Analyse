import React from 'react';
import { motion } from 'framer-motion';
import { MoveUpRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const NormedHero: React.FC = () => {
  const { language } = useLanguage();

  const content = {
    EN: {
      badge: "Normed Vector Spaces: Page 1",
      title: "The Intuition of Magnitude",
      subtitle: "Step beyond measuring distances between static points. In a Normed Vector Space, we measure the intrinsic 'length' or 'magnitude' of vectors that can be added, scaled, and transformed.",
      quote: "A metric space has a ruler; a normed space has an origin and a direction.",
      desc: "In a pure metric space, we only have a 'ruler' to measure the distance between two static points. We don't care about coordinates or origin. But in a Vector Space, points are 'Vectors'—they have a starting point (the origin), a direction, and an intrinsic magnitude. A Norm is a special mathematical tool that measures the absolute 'length' or 'size' of a single vector. Because vectors can be added and stretched, a norm must play perfectly by the rules of algebra (scaling and adding)."
    },
    FR: {
      badge: "Espaces Vectoriels Normés : Page 1",
      title: "L'Intuition de la Magnitude",
      subtitle: "Allez au-delà de la mesure des distances entre points statiques. Dans un espace vectoriel normé, nous mesurons la 'longueur' ou la 'magnitude' intrinsèque des vecteurs qui peuvent être ajoutés, mis à l'échelle et transformés.",
      quote: "Un espace métrique a une règle ; un espace normé a une origine et une direction.",
      desc: "Dans un espace métrique pur, nous n'avons qu'une 'règle' pour mesurer la distance entre deux points statiques. Nous ne nous soucions pas des coordonnées ou de l'origine. Mais dans un Espace Vectoriel, les points sont des 'Vecteurs' — ils ont un point de départ (l'origine), une direction et une magnitude intrinsèque. Une Norme est un outil mathématique spécial qui mesure la 'longueur' ou la 'taille' absolue d'un seul vecteur. Parce que les vecteurs peuvent être ajoutés et étirés, une norme doit respecter parfaitement les règles de l'algèbre (mise à l'échelle et addition)."
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
              <MoveUpRight className="w-3 h-3" />
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
               
               {/* Vector Illustration */}
               <motion.g
                 animate={{ scale: [1, 1.1, 1] }}
                 transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
               >
                 {/* Vector v */}
                 <line x1="100" y1="200" x2="250" y2="100" stroke="#4f46e5" strokeWidth="4" />
                 <path d="M 250 100 L 240 115 L 260 110 Z" fill="#4f46e5" transform="rotate(-33, 250, 100)" />
                 
                 {/* Vector lambda*v */}
                 <line x1="100" y1="200" x2="175" y2="150" stroke="#818cf8" strokeWidth="4" strokeDasharray="4 2" />
                 
                 <circle cx="100" cy="200" r="6" fill="#1e293b" />
                 <text x="90" y="225" className="text-[10px] font-bold fill-slate-900 uppercase tracking-widest">Origin 0</text>
                 <text x="260" y="90" className="text-sm font-bold fill-indigo-600">Vector v</text>
                 <text x="130" y="140" className="text-[10px] font-bold fill-indigo-400 italic">λv (Scaling)</text>
               </motion.g>

               {/* Magnitude Indicator */}
               <path d="M 90 190 L 80 180 M 240 90 L 230 80" stroke="#cbd5e1" strokeWidth="1" />
               <path d="M 85 185 L 235 85" stroke="#cbd5e1" strokeWidth="1" strokeDasharray="2 2" />
               <text x="130" y="110" className="text-[10px] font-bold fill-slate-400 uppercase tracking-widest" transform="rotate(-33, 130, 110)">Magnitude ||v||</text>

               {/* Background Grid */}
               <defs>
                 <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
                   <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#e2e8f0" strokeWidth="0.5" />
                 </pattern>
               </defs>
               <rect x="40" y="40" width="320" height="220" fill="url(#grid)" rx="20" />
            </svg>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default NormedHero;
