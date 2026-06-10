import React from 'react';
import { motion } from 'framer-motion';
import { Scaling } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const BilinearHero: React.FC = () => {
  const { language } = useLanguage();

  const content = {
    EN: {
      badge: "Normed Vector Spaces: Page 7",
      title: "The Geometry of Scaling",
      subtitle: "While linear maps transform a single vector, Bilinear Maps combine two vectors to create a new dimension of interaction.",
      quote: "Bilinearity is the bridge between vector lengths and multi-dimensional volume.",
      desc: "Think of it like calculating the area of a rectangle: if you double the width, the area doubles; if you triple the height, the area triples. If you do both, the area is multiplied by 6. For a bilinear map to be continuous, it needs a two-dimensional 'speed limit': a constant K that bounds the output based on the multiplied lengths of both inputs."
    },
    FR: {
      badge: "Espaces Vectoriels Normés : Page 7",
      title: "La Géométrie de la Mise à l'Échelle",
      subtitle: "Alors que les applications linéaires transforment un seul vecteur, les applications bilinéaires combinent deux vecteurs pour créer une nouvelle dimension d'interaction.",
      quote: "La bilinéarité est le pont entre la longueur des vecteurs et le volume multidimensionnel.",
      desc: "Considérez cela comme le calcul de l'aire d'un rectangle : si vous doublez la largeur, l'aire double ; si vous triplez la hauteur, l'aire triple. Si vous faites les deux, l'aire est multipliée par 6. Pour qu'une application bilinéaire soit continue, elle nécessite une 'limite de vitesse' bidimensionnelle : une constante K qui borne la sortie en fonction du produit des longueurs des deux entrées."
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
              <Scaling className="w-3 h-3" />
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
               
               {/* Bilinear Illustration (Area concept) */}
               <g transform="translate(100, 100)">
                 {/* Background Area */}
                 <motion.rect 
                    width="150" height="100" 
                    fill="#8b5cf6" fillOpacity="0.1" 
                    stroke="#8b5cf6" strokeWidth="2" strokeDasharray="4 4"
                    animate={{ width: [150, 180, 150], height: [100, 120, 100] }}
                    transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                 />
                 
                 {/* Vector x */}
                 <motion.line 
                    x1="0" y1="0" x2="150" y2="0" 
                    stroke="#2563eb" strokeWidth="4" strokeLinecap="round"
                    animate={{ x2: [150, 180, 150] }}
                    transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                 />
                 <text x="60" y="-15" className="text-[10px] font-bold fill-blue-600 uppercase tracking-widest italic">Input x</text>
                 
                 {/* Vector y */}
                 <motion.line 
                    x1="0" y1="0" x2="0" y2="100" 
                    stroke="#ef4444" strokeWidth="4" strokeLinecap="round"
                    animate={{ y2: [100, 120, 100] }}
                    transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                 />
                 <text x="-50" y="55" className="text-[10px] font-bold fill-red-600 uppercase tracking-widest italic" transform="rotate(-90, -10, 55)">Input y</text>

                 {/* Result Label */}
                 <text x="50" y="60" className="text-[10px] font-bold fill-purple-600 uppercase tracking-widest">Output f(x,y)</text>
               </g>

               {/* Origin */}
               <circle cx="100" cy="100" r="6" fill="#1e293b" />

               {/* Background Grid */}
               <defs>
                 <pattern id="grid-bilinear" width="20" height="20" patternUnits="userSpaceOnUse">
                   <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#e2e8f0" strokeWidth="0.5" />
                 </pattern>
               </defs>
               <rect x="40" y="40" width="320" height="220" fill="url(#grid-bilinear)" rx="20" opacity="0.3" />
            </svg>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BilinearHero;
