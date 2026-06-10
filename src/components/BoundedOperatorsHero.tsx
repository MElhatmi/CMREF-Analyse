import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRightLeft } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const BoundedOperatorsHero: React.FC = () => {
  const { language } = useLanguage();

  const content = {
    EN: {
      badge: "Normed Vector Spaces: Page 6",
      title: "The Domino Effect of Linearity",
      subtitle: "Linear applications are incredibly rigid. A single point of continuity guarantees uniform stability everywhere.",
      quote: "In the world of linear maps, continuity means being 'bounded'—never stretching infinity into a single vector.",
      desc: "Because they preserve addition and scaling, linear maps exhibit perfectly uniform topological behavior. In standard functions, continuity can be unpredictable. But for a linear map, if it is continuous at just the origin, it is uniformly continuous everywhere! Continuity simplifies to a geometric concept: a map is bounded if it cannot stretch a vector's length by more than a fixed maximum factor C."
    },
    FR: {
      badge: "Espaces Vectoriels Normés : Page 6",
      title: "L'Effet Domino de la Linéarité",
      subtitle: "Les applications linéaires sont incroyablement rigides. Un seul point de continuité garantit une stabilité uniforme partout.",
      quote: "Dans le monde des applications linéaires, la continuité signifie être 'bornée' — ne jamais étirer l'infini dans un seul vecteur.",
      desc: "Parce qu'elles préservent l'addition et la mise à l'échelle, les applications linéaires présentent un comportement topologique parfaitement uniforme. Pour une application linéaire, si elle est continue à l'origine, elle est uniformément continue partout ! La continuité se simplifie en un concept géométrique : une application est bornée s'il existe un facteur maximal C limitant l'étirement des vecteurs."
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
            <div className="inline-flex items-center gap-2 bg-purple-50 px-3 py-1 rounded-full text-purple-600 font-bold text-xs uppercase tracking-widest mb-6 border border-purple-100">
              <ArrowRightLeft className="w-3 h-3" />
              {curr.badge}
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-6xl text-balance">
              {curr.title}
            </h1>
            <p className="mt-6 text-lg leading-8 text-slate-600 italic border-l-4 border-purple-200 pl-4">
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
            <div className="absolute inset-0 bg-purple-100/20 blur-3xl -z-10 rounded-full" />
            <svg viewBox="0 0 400 300" className="w-full max-w-md drop-shadow-2xl">
               <rect width="400" height="300" rx="40" fill="#f8fafc" />
               
               {/* Linearity & Boundedness Illustration */}
               <g transform="translate(100, 150)">
                 {/* Input Domain (Unit Ball) */}
                 <circle r="40" fill="none" stroke="#cbd5e1" strokeWidth="2" strokeDasharray="4 2" />
                 <text x="-45" y="-55" className="text-[10px] font-bold fill-slate-400 uppercase tracking-widest">Unit Ball B(0,1)</text>
                 
                 {/* Linear Map Arrow */}
                 <motion.path 
                   d="M 60 0 L 140 0" stroke="#94a3b8" strokeWidth="2" markerEnd="url(#arrowhead)" 
                   animate={{ x: [0, 5, 0] }} transition={{ repeat: Infinity, duration: 2 }}
                 />
                 <text x="75" y="-10" className="text-[10px] font-bold fill-purple-600 uppercase tracking-widest italic">Linear Map u</text>

                 {/* Output Image (Bounded Ellipse) */}
                 <g transform="translate(200, 0)">
                   <motion.ellipse 
                     rx="80" ry="30" fill="#8b5cf6" fillOpacity="0.1" stroke="#8b5cf6" strokeWidth="3" 
                     animate={{ rx: [80, 90, 80], ry: [30, 25, 30] }}
                     transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                   />
                   <text x="-30" y="-45" className="text-[10px] font-bold fill-purple-600 uppercase tracking-widest">Bounded Image u(B)</text>
                   
                   {/* Stretch Factor C */}
                   <motion.line 
                     x1="0" y1="0" x2="80" y2="0" stroke="#ef4444" strokeWidth="2" strokeDasharray="2 2"
                     animate={{ x2: [80, 90, 80] }}
                     transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                   />
                   <text x="35" y="15" className="text-[10px] font-bold fill-red-600 uppercase tracking-widest">Max Stretch C</text>
                 </g>
                 
                 <circle r="5" fill="#1e293b" />
                 <circle cx="200" cy="0" r="5" fill="#1e293b" />
               </g>

               {/* Arrowhead definition */}
               <defs>
                 <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="0" refY="3.5" orient="auto">
                   <polygon points="0 0, 10 3.5, 0 7" fill="#94a3b8" />
                 </marker>
                 <pattern id="grid-bounded" width="20" height="20" patternUnits="userSpaceOnUse">
                   <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#e2e8f0" strokeWidth="0.5" />
                 </pattern>
               </defs>
               <rect x="40" y="40" width="320" height="220" fill="url(#grid-bounded)" rx="20" opacity="0.3" />
            </svg>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BoundedOperatorsHero;
