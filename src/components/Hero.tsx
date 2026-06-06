import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

const Hero: React.FC = () => {
  const { language } = useLanguage();

  const content = {
    EN: {
      title: "What is a",
      accent: "Topology?",
      desc1: "In standard calculus, we use \"distance\" (metrics) to determine if things are close to each other. Topology is a more abstract, generalized framework. It strips away the concept of \"distance\" entirely and instead defines \"closeness\" and \"neighborhoods\" purely by grouping elements into sets.",
      desc2: "We do this by officially declaring a specific collection of subsets as",
      openSets: "Open Sets",
      setE: "Set E",
      outside: "Outside open set"
    },
    FR: {
      title: "Qu'est-ce qu'une",
      accent: "Topologie ?",
      desc1: "Dans le calcul standard, nous utilisons la « distance » (métriques) pour déterminer si les choses sont proches les unes des autres. La topologie est un cadre plus abstrait et généralisé. Elle supprime entièrement le concept de « distance » et définit la « proximité » et les « voisinages » purement en regroupant les éléments dans des ensembles.",
      desc2: "Nous faisons cela en déclarant officiellement une collection spécifique de sous-ensembles comme étant des",
      openSets: "Ensembles Ouverts",
      setE: "Ensemble E",
      outside: "Hors de l'ouvert"
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
            <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-6xl">
              {curr.title} <span className="text-blue-600">{curr.accent}</span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-slate-600">
              {curr.desc1}
            </p>
            <p className="mt-4 text-lg leading-8 text-slate-600 font-medium">
              {curr.desc2} <span className="text-blue-600 underline decoration-2 underline-offset-4">"{curr.openSets}"</span>.
            </p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center"
          >
            <svg viewBox="0 0 400 300" className="w-full max-w-md drop-shadow-xl">
              <rect width="400" height="300" rx="20" fill="#f1f5f9" />
              <text x="20" y="40" className="text-xl font-bold fill-slate-400">{curr.setE}</text>
              
              <motion.path
                d="M 100 100 Q 150 50 200 100 T 300 150 Q 250 250 150 200 Z"
                fill="rgba(59, 130, 246, 0.1)"
                stroke="#3b82f6"
                strokeWidth="2"
                strokeDasharray="5,5"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
              />
              
              <motion.circle
                cx="250" cy="100" r="50"
                fill="rgba(147, 51, 234, 0.1)"
                stroke="#9333ea"
                strokeWidth="2"
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
              />

              <motion.path
                d="M 50 150 Q 100 250 200 230 Q 150 150 50 150"
                fill="rgba(16, 185, 129, 0.1)"
                stroke="#10b981"
                strokeWidth="2"
                initial={{ opacity: 0.5 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 4, repeat: Infinity, repeatType: "reverse" }}
              />

              {[
                { x: 120, y: 120, label: 'x' },
                { x: 260, y: 90, label: 'y' },
                { x: 160, y: 210, label: 'z' },
                { x: 320, y: 180, label: 'w' },
              ].map((point, i) => (
                <g key={i}>
                  <circle cx={point.x} cy={point.y} r="4" fill="#334155" />
                  <text x={point.x + 8} y={point.y + 4} className="text-xs fill-slate-600 italic">{point.x === 320 ? curr.outside : point.label}</text>
                </g>
              ))}
            </svg>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
