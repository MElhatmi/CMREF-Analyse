import React from 'react';
import { motion } from 'framer-motion';
import { motion as m } from 'framer-motion';
import { PencilLine } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const PathHero: React.FC = () => {
  const { t, language } = useLanguage();

  const content = {
    EN: {
      title: "The Path of",
      accent: "Least Tearing",
      quote: '"Connectedness is abstract; path-connectedness is physical."',
      desc: "While standard connectedness is a rule about open sets, path-connectedness is the geometric intuition we naturally have. A space is path-connected if you can take a pencil and draw a continuous line from any point A to any point B without ever lifting your pencil off the paper or leaving the space.",
      label: "Continuous Journey"
    },
    FR: {
      title: "Le chemin de la",
      accent: "Continuité",
      quote: '"La connexité est abstraite ; la connexité par arcs est physique."',
      desc: "Alors que la connexité standard est une règle sur les ensembles ouverts, la connexité par arcs correspond à l'intuition géométrique naturelle. Un espace est connexe par arcs si l'on peut tracer une ligne continue entre n'importe quels points A et B sans jamais lever le crayon ni quitter l'espace.",
      label: "Voyage Continu"
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
              <PencilLine className="w-3 h-3" />
              {t('nav.pathConnected')}
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-6xl text-balance">
              {curr.title} <span className="text-blue-600">{curr.accent}</span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-slate-600 italic">
              {curr.quote}
            </p>
            <p className="mt-4 text-lg leading-8 text-slate-600">
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
               
               <path 
                 d="M 50 150 Q 80 50 200 100 T 350 150 Q 320 250 200 200 T 50 150"
                 fill="rgba(59, 130, 246, 0.05)" stroke="#3b82f6" strokeWidth="2" strokeDasharray="5 5"
               />

               <m.path 
                 d="M 100 150 C 120 120, 280 180, 300 150"
                 fill="none" stroke="#6366f1" strokeWidth="3"
                 initial={{ pathLength: 0 }}
                 animate={{ pathLength: 1 }}
                 transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
               />
               
               <circle cx="100" cy="150" r="4" fill="#1e293b" />
               <text x="85" y="155" className="text-xs font-bold fill-slate-900 font-mono">A</text>
               
               <circle cx="300" cy="150" r="4" fill="#1e293b" />
               <text x="310" y="155" className="text-xs font-bold fill-slate-900 font-mono">B</text>

               <text x="160" y="260" className="text-[10px] font-bold fill-blue-500 uppercase tracking-widest">{curr.label}</text>
            </svg>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PathHero;
