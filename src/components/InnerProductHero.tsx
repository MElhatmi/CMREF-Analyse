import React from 'react';
import { motion } from 'framer-motion';
import { Compass } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const InnerProductHero: React.FC = () => {
  const { language } = useLanguage();

  const content = {
    EN: {
      badge: "Normed Vector Spaces: Page 2",
      title: "Angles, Shadows, and Perfect Norms",
      subtitle: "Move beyond simple length. An Inner Product adds geometry to algebra, allowing us to measure alignment, define angles, and project vectors onto one another.",
      quote: "A norm measures size; an inner product measures relationship.",
      desc: "While a 'norm' just measures length, an Inner Product (Produit Scalaire) is a much richer structure. It measures how much two vectors 'align' with each other, granting us the concepts of angles, orthogonality, and projections. Not all vector spaces have inner products, but those that do (Pre-Hilbert spaces) automatically generate the most beautifully behaved norms in mathematics, directly generalizing the Pythagorean theorem."
    },
    FR: {
      badge: "Espaces Vectoriels Normés : Page 2",
      title: "Angles, Ombres et Normes Parfaites",
      subtitle: "Allez au-delà de la simple longueur. Un produit scalaire ajoute de la géométrie à l'algèbre, nous permettant de mesurer l'alignement, de définir des angles et de projeter des vecteurs les uns sur les autres.",
      quote: "Une norme mesure la taille ; un produit scalaire mesure la relation.",
      desc: "Alors qu'une 'norme' mesure simplement la longueur, un Produit Scalaire est une structure beaucoup plus riche. Il mesure à quel point deux vecteurs sont 'alignés', nous offrant les concepts d'angles, d'orthogonalité et de projections. Tous les espaces vectoriels n'ont pas de produits scalaires, mais ceux qui en ont (espaces préhilbertiens) génèrent automatiquement les normes les plus harmonieuses des mathématiques, généralisant directement le théorème de Pythagore."
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
               
               {/* Projection Illustration */}
               <motion.g>
                 {/* Vector v (Base) */}
                 <line x1="80" y1="220" x2="320" y2="220" stroke="#cbd5e1" strokeWidth="2" strokeDasharray="4 4" />
                 <line x1="100" y1="220" x2="280" y2="220" stroke="#ef4444" strokeWidth="4" />
                 <path d="M 280 220 L 270 215 L 270 225 Z" fill="#ef4444" />
                 
                 {/* Vector u */}
                 <motion.line 
                   x1="100" y1="220" x2="220" y2="80" 
                   stroke="#2563eb" strokeWidth="4"
                   animate={{ x2: [220, 250, 220] }}
                   transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                 />
                 <motion.path 
                   d="M 220 80 L 210 95 L 230 95 Z" fill="#2563eb"
                   animate={{ transform: "translate(0,0) rotate(40, 220, 80)", x: [0, 30, 0], y: [0, -35, 0] }}
                   transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                 />

                 {/* Projection Line */}
                 <motion.line 
                   x1="220" y1="80" x2="220" y2="220" 
                   stroke="#94a3b8" strokeWidth="2" strokeDasharray="4 2"
                   animate={{ x1: [220, 250, 220], x2: [220, 250, 220] }}
                   transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                 />

                 {/* Shadow (Inner Product) */}
                 <motion.rect 
                   x="100" y="216" width="120" height="8" 
                   fill="#8b5cf6" fillOpacity="0.3"
                   animate={{ width: [120, 150, 120] }}
                   transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                 />
                 
                 <circle cx="100" cy="220" r="6" fill="#1e293b" />
                 <text x="90" y="245" className="text-[10px] font-bold fill-slate-900 uppercase tracking-widest">Origin</text>
                 <text x="290" y="225" className="text-sm font-bold fill-red-600">v</text>
                 <motion.text 
                    x="230" y="75" className="text-sm font-bold fill-blue-600"
                    animate={{ x: [230, 260, 230] }}
                    transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                 >u</motion.text>
                 <motion.text 
                    x="130" y="210" className="text-[10px] font-bold fill-purple-600 uppercase tracking-widest"
                    animate={{ opacity: [1, 0.5, 1] }}
                    transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                 >⟨u,v⟩ Shadow</motion.text>
               </motion.g>

               {/* Background Grid */}
               <defs>
                 <pattern id="grid-inner" width="20" height="20" patternUnits="userSpaceOnUse">
                   <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#e2e8f0" strokeWidth="0.5" />
                 </pattern>
               </defs>
               <rect x="40" y="40" width="320" height="220" fill="url(#grid-inner)" rx="20" opacity="0.5" />
            </svg>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default InnerProductHero;
