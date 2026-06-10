import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const FiniteDimensionsHero: React.FC = () => {
  const { language } = useLanguage();

  const content = {
    EN: {
      badge: "Normed Vector Spaces: Page 8",
      title: "The Topological Safe Haven",
      subtitle: "In finite dimensions, topology and algebra lock together perfectly. It is the only world where every linear map is automatically continuous.",
      quote: "Finite dimensions are where intuition and mathematics agree completely.",
      desc: "Explain that finite-dimensional vector spaces are the 'safe havens' of mathematics. When the dimension is finite, topology and algebra lock together perfectly. Sequences cannot escape without either diverging to infinity or hitting a boundary, meaning compactness is beautifully simple to prove. Furthermore, linearity becomes incredibly powerful: in finite dimensions, every single linear map is mathematically guaranteed to be continuous without needing any bounding proofs."
    },
    FR: {
      badge: "Espaces Vectoriels Normés : Page 8",
      title: "Le Havre de Paix Topologique",
      subtitle: "En dimension finie, la topologie et l'algèbre s'imbriquent parfaitement. C'est le seul monde où toute application linéaire est automatiquement continue.",
      quote: "La dimension finie est le lieu où l'intuition et les mathématiques s'accordent totalement.",
      desc: "Les espaces vectoriels de dimension finie sont les 'havres de paix' des mathématiques. Quand la dimension est finie, la topologie et l'algèbre se verrouillent parfaitement. Les suites ne peuvent pas s'échapper sans diverger vers l'infini ou heurter une frontière, ce qui rend la compacité simple à prouver. De plus, la linéarité devient incroyablement puissante : chaque application linéaire est mathématiquement garantie continue sans besoin de preuves de bornitude."
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
               
               {/* Safe Haven Illustration (Interlocking elements) */}
               <g transform="translate(200, 150)">
                 {/* Interlocking Rings: Algebra & Topology */}
                 <motion.circle 
                   cx="-30" r="60" fill="none" stroke="#3b82f6" strokeWidth="8" strokeOpacity="0.2"
                   animate={{ x: [-30, -25, -30] }} transition={{ repeat: Infinity, duration: 4 }}
                 />
                 <motion.circle 
                   cx="30" r="60" fill="none" stroke="#8b5cf6" strokeWidth="8" strokeOpacity="0.2"
                   animate={{ x: [30, 35, 30] }} transition={{ repeat: Infinity, duration: 4 }}
                 />
                 
                 {/* Core Center (Safe Haven) */}
                 <rect x="-10" y="-10" width="20" height="20" rx="4" fill="#1e293b" />
                 
                 {/* Convergence Arrows */}
                 <motion.path d="M -100 0 L -80 0" stroke="#3b82f6" strokeWidth="2" markerEnd="url(#arrow-blue)" animate={{ x: [0, 10, 0] }} transition={{ repeat: Infinity, duration: 2 }} />
                 <motion.path d="M 100 0 L 80 0" stroke="#8b5cf6" strokeWidth="2" markerEnd="url(#arrow-purple)" animate={{ x: [0, -10, 0] }} transition={{ repeat: Infinity, duration: 2 }} />
                 <motion.path d="M 0 -100 L 0 -80" stroke="#10b981" strokeWidth="2" markerEnd="url(#arrow-green)" animate={{ y: [0, 10, 0] }} transition={{ repeat: Infinity, duration: 2 }} />
                 
                 <text y="90" textAnchor="middle" className="text-[10px] font-bold fill-slate-900 uppercase tracking-widest">Bounded & Closed</text>
                 <text y="105" textAnchor="middle" className="text-[8px] font-bold fill-slate-400 uppercase tracking-widest">= Compact</text>
               </g>

               {/* Arrow definitions */}
               <defs>
                 <marker id="arrow-blue" markerWidth="6" markerHeight="4" refX="0" refY="2" orient="auto">
                   <polygon points="0 0, 6 2, 0 4" fill="#3b82f6" />
                 </marker>
                 <marker id="arrow-purple" markerWidth="6" markerHeight="4" refX="0" refY="2" orient="auto">
                   <polygon points="0 0, 6 2, 0 4" fill="#8b5cf6" />
                 </marker>
                 <marker id="arrow-green" markerWidth="6" markerHeight="4" refX="0" refY="2" orient="auto">
                   <polygon points="0 0, 6 2, 0 4" fill="#10b981" />
                 </marker>
                 <pattern id="grid-finite" width="20" height="20" patternUnits="userSpaceOnUse">
                   <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#e2e8f0" strokeWidth="0.5" />
                 </pattern>
               </defs>
               <rect x="40" y="40" width="320" height="220" fill="url(#grid-finite)" rx="20" opacity="0.3" />
            </svg>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FiniteDimensionsHero;
