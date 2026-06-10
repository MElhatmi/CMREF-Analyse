import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const BanachHero: React.FC = () => {
  const { language } = useLanguage();

  const content = {
    EN: {
      badge: "Normed Vector Spaces: Page 9",
      title: "The Perfect Universe",
      subtitle: "Step into the flawless world of Banach Spaces. Here, every convergent-looking sequence finds its destination, ensuring total mathematical stability.",
      quote: "A Banach space is a universe without holes, where every journey has a home.",
      desc: "In a standard metric space, a sequence can get infinitely close to each other (a Cauchy sequence) but fail to converge because the 'target' point is physically missing (like trying to reach sqrt(2) while trapped inside the rational numbers). A Banach Space is the ultimate vector space: a Normed Vector Space that is perfectly complete. There are absolutely no missing limits."
    },
    FR: {
      badge: "Espaces Vectoriels Normés : Page 9",
      title: "L'Univers Parfait",
      subtitle: "Entrez dans le monde sans faille des Espaces de Banach. Ici, toute suite semblant converger trouve sa destination, garantissant une stabilité mathématique totale.",
      quote: "Un espace de Banach est un univers sans trous, où chaque voyage a un foyer.",
      desc: "Dans un espace métrique standard, une suite peut se rapprocher indéfiniment (suite de Cauchy) mais échouer à converger parce que le point 'cible' est physiquement manquant (comme tenter d'atteindre sqrt(2) en restant dans les rationnels). Un Espace de Banach est l'espace vectoriel ultime : un Espace Vectoriel Normé parfaitement complet. Il n'y a absolument aucune limite manquante."
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
              <ShieldCheck className="w-3 h-3" />
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
               
               {/* Completeness Illustration (Closing the loop) */}
               <g transform="translate(200, 150)">
                 {/* The Target Point */}
                 <motion.circle 
                   r="8" fill="#4f46e5" 
                   initial={{ opacity: 0.2 }} 
                   animate={{ opacity: [0.2, 1, 0.2] }} 
                   transition={{ repeat: Infinity, duration: 3 }}
                 />
                 
                 {/* Converging Swirl */}
                 <motion.path 
                   d="M 100 0 C 100 50, 50 100, 0 80 S -50 20, -20 0 S 10 -10, 0 0" 
                   fill="none" stroke="#6366f1" strokeWidth="3" strokeLinecap="round"
                   initial={{ pathLength: 0 }}
                   animate={{ pathLength: 1 }}
                   transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                 />

                 {/* Stable Foundations */}
                 <motion.path 
                   d="M -120 100 L 120 100" stroke="#cbd5e1" strokeWidth="4" strokeLinecap="round"
                   initial={{ scaleX: 0 }} animate={{ scaleX: 1 }}
                 />
                 <text y="125" textAnchor="middle" className="text-[10px] font-bold fill-slate-900 uppercase tracking-widest italic">Banach Space: No Holes</text>
               </g>

               {/* Background Grid */}
               <defs>
                 <pattern id="grid-banach" width="20" height="20" patternUnits="userSpaceOnUse">
                   <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#e2e8f0" strokeWidth="0.5" />
                 </pattern>
               </defs>
               <rect x="40" y="40" width="320" height="220" fill="url(#grid-banach)" rx="20" opacity="0.3" />
            </svg>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BanachHero;
