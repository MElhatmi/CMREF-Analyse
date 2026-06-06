import React from 'react';
import { motion } from 'framer-motion';
import { Target } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const LocallyCompactHero: React.FC = () => {
  const { language, t } = useLanguage();

  const content = {
    EN: {
      header: "The Geometry of Proximity",
      quote: "\"Global compactness is rigid; local compactness is resilient.\"",
      intro: "Global compactness is a demanding property. The entire real line R fails it because it stretches to infinity—you cannot cover the universe with a finite number of blankets. However, if you zoom in, the local geometry behaves perfectly. Local compactness means that no matter where you stand, you can always draw a safe, solid, compact bubble entirely around yourself.",
      pointX: "Point x",
      compactNeigh: "Compact Neighborhood"
    },
    FR: {
      header: "La géométrie de la proximité",
      quote: "« La compacité globale est rigide ; la compacité locale est résiliente. »",
      intro: "La compacité globale est une propriété exigeante. La droite réelle R entière échoue car elle s'étend à l'infini — on ne peut pas couvrir l'univers avec un nombre fini de couvertures. Cependant, si l'on zoome, la géométrie locale se comporte parfaitement. La compacité locale signifie que peu importe où l'on se trouve, on peut toujours tracer une bulle compacte, solide et sûre tout autour de soi.",
      pointX: "Point x",
      compactNeigh: "Voisinage compact"
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
              <Target className="w-3 h-3" />
              {t('nav.locallyCompact')}
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-6xl text-balance">
              {curr.header.split(' ')[0]} <span className="text-emerald-600">{curr.header.split(' ').slice(1).join(' ')}</span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-slate-600 italic">
              {curr.quote}
            </p>
            <p className="mt-4 text-lg leading-8 text-slate-600">
              {curr.intro}
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
               
               <line x1="0" y1="150" x2="400" y2="150" stroke="#cbd5e1" strokeWidth="2" strokeDasharray="5 5" />
               
               <motion.g
                 animate={{ scale: [1, 1.05, 1] }}
                 transition={{ repeat: Infinity, duration: 4 }}
               >
                 <circle cx="200" cy="150" r="60" fill="rgba(16, 185, 129, 0.1)" stroke="#10b981" strokeWidth="2" strokeDasharray="8 4" />
                 <circle cx="200" cy="150" r="4" fill="#065f46" />
                 <text x="195" y="130" className="text-xs font-bold fill-emerald-700">{curr.pointX}</text>
                 <text x="170" y="230" className="text-[10px] font-bold fill-emerald-500 uppercase tracking-widest">{curr.compactNeigh}</text>
               </motion.g>

               <path d="M 20 150 L 5 150" stroke="#94a3b8" strokeWidth="2" markerEnd="url(#arrow-line)" />
               <path d="M 380 150 L 395 150" stroke="#94a3b8" strokeWidth="2" markerEnd="url(#arrow-line)" />
               
               <defs>
                 <marker id="arrow-line" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="4" markerHeight="4" orient="auto-start-reverse">
                   <path d="M 0 0 L 10 5 L 0 10 z" fill="#94a3b8" />
                 </marker>
               </defs>
            </svg>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default LocallyCompactHero;
