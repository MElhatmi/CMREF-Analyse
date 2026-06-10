import React from 'react';
import { motion } from 'framer-motion';
import { Compass } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const LimitsHero: React.FC = () => {
  const { language } = useLanguage();

  const content = {
    EN: {
      badge: "Normed Vector Spaces: Page 5",
      title: "The Infinity of Paths",
      subtitle: "In higher dimensions, points aren't approached from just the left or right. You can reach a point from an infinity of directions and shapes.",
      quote: "To exist at a point, a limit must survive every possible journey toward it.",
      desc: "In standard 1D calculus, to check a limit, you only have two paths: left and right. In a Vector Space like R², there are infinitely many paths to reach a point. You can approach along a line, a parabola, or even a spiral! For a limit to exist, the function must converge to the exact same value no matter which of these infinite paths you take."
    },
    FR: {
      badge: "Espaces Vectoriels Normés : Page 5",
      title: "L'Infinité des Chemins",
      subtitle: "En dimensions supérieures, on ne s'approche pas d'un point uniquement par la gauche ou la droite. On peut l'atteindre depuis une infinité de directions et de formes.",
      quote: "Pour exister en un point, une limite doit survivre à tout voyage possible vers lui.",
      desc: "En calcul standard 1D, pour vérifier une limite, vous n'avez que deux chemins : gauche et droite. Dans un espace vectoriel comme R², il existe une infinité de chemins pour atteindre un point. On peut s'en approcher le long d'une droite, d'une parabole ou même d'une spirale ! Pour qu'une limite existe, la fonction doit converger vers la même valeur, quel que soit le chemin infini emprunté."
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
              <Compass className="w-3 h-3" />
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
               
               {/* Infinity of Paths Illustration */}
               <g transform="translate(200, 150)">
                 {/* Central Point */}
                 <circle r="6" fill="#1e293b" />
                 <text y="25" textAnchor="middle" className="text-[10px] font-bold fill-slate-900 uppercase tracking-widest">Target Point a</text>

                 {/* Various Paths */}
                 <motion.path 
                   d="M -150 0 L -10 0" stroke="#3b82f6" strokeWidth="2" strokeDasharray="4 2"
                   initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 2, repeat: Infinity }}
                 />
                 <motion.path 
                   d="M 150 0 L 10 0" stroke="#3b82f6" strokeWidth="2" strokeDasharray="4 2"
                   initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 2, repeat: Infinity }}
                 />
                 <motion.path 
                   d="M -100 -100 Q 0 -50 0 -10" stroke="#8b5cf6" strokeWidth="2" strokeDasharray="4 2"
                   initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 2.5, repeat: Infinity }}
                 />
                 <motion.path 
                   d="M 100 100 Q 50 0 10 0" stroke="#ec4899" strokeWidth="2" strokeDasharray="4 2"
                   initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 3, repeat: Infinity }}
                 />
                 
                 {/* Spiral Path */}
                 <motion.path 
                   d="M 120 -80 C 80 -120, 20 -40, 10 -10" stroke="#10b981" strokeWidth="2" strokeDasharray="4 2"
                   initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 4, repeat: Infinity }}
                 />
               </g>

               {/* Background Grid */}
               <defs>
                 <pattern id="grid-paths" width="20" height="20" patternUnits="userSpaceOnUse">
                   <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#e2e8f0" strokeWidth="0.5" />
                 </pattern>
               </defs>
               <rect x="40" y="40" width="320" height="220" fill="url(#grid-paths)" rx="20" opacity="0.3" />
            </svg>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default LimitsHero;
