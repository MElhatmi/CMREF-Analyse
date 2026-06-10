import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { Plus, Info, Zap, AlertTriangle, ShieldCheck } from 'lucide-react';

const InfiniteEscapeVisualizer: React.FC = () => {
  const { language } = useLanguage();
  const [vectors, setVectors] = useState<{ id: number, angle: number }[]>([]);

  const content = {
    EN: {
      title: "Interactive Visualizer: The Infinite Escape",
      subtitle: "Why Bolzano-Weierstrass fails in infinite dimensions. In an infinite-dimensional space, you can have an infinite sequence that stays trapped but never clusters.",
      action: "Spawn Orthogonal Vector",
      bounded: "Bounded Space: Yes (||e_n|| = 1)",
      distance: "Distance between any two points: sqrt(2) \u2248 1.414",
      hook: "Keep spawning vectors. Because every new axis is perfectly perpendicular to all previous ones, the vectors never get closer to each other. They are all exactly sqrt(2) apart! You have an infinite sequence trapped in a bounded box, but they never form a cluster. Bolzano-Weierstrass fails completely without finite dimensions.",
      maxReached: "Maximum dimensions reached for this simulation."
    },
    FR: {
      title: "Visualiseur Interactif : L'Échappée Infinie",
      subtitle: "Pourquoi Bolzano-Weierstrass échoue en dimension infinie. Dans un espace de dimension infinie, une suite peut rester piégée sans jamais s'accumuler.",
      action: "Générer un Vecteur Orthogonal",
      bounded: "Espace Borné : Oui (||e_n|| = 1)",
      distance: "Distance entre deux points : sqrt(2) \u2248 1,414",
      hook: "Continuez à générer des vecteurs. Comme chaque nouvel axe est parfaitement perpendiculaire aux précédents, les vecteurs ne se rapprochent jamais. Ils sont tous à une distance exacte de sqrt(2) ! Vous avez une suite infinie dans une boîte bornée, mais ils ne forment jamais d'accumulation. Bolzano-Weierstrass échoue totalement sans dimension finie.",
      maxReached: "Dimensions maximales atteintes pour cette simulation."
    }
  };

  const curr = content[language];

  const addVector = () => {
    if (vectors.length >= 10) return;
    setVectors([...vectors, { id: Date.now(), angle: (vectors.length * 36) }]);
  };

  return (
    <div className="my-12 bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden">
      <div className="p-8 border-b border-slate-100 bg-slate-50/50">
        <div className="flex items-center gap-3 mb-2">
          <Zap className="w-5 h-5 text-indigo-600" />
          <h3 className="text-xl font-bold text-slate-900">{curr.title}</h3>
        </div>
        <p className="text-slate-600 text-sm">{curr.subtitle}</p>
      </div>

      <div className="flex flex-col lg:flex-row items-center gap-12 p-8">
        <div className="relative flex flex-col items-center">
           <svg viewBox="0 0 400 400" className="w-full max-w-[350px] h-auto">
             {/* Unit Ball Shadow */}
             <circle cx="200" cy="200" r="120" fill="rgba(79, 70, 229, 0.03)" stroke="#e2e8f0" strokeWidth="1" strokeDasharray="4 4" />
             
             {/* Coordinate Grid in Perspective */}
             <g transform="translate(200, 200)">
               <line x1="-150" y1="0" x2="150" y2="0" stroke="#f1f5f9" strokeWidth="1" />
               <line x1="0" y1="-150" x2="0" y2="150" stroke="#f1f5f9" strokeWidth="1" />
               
               {/* Vectors */}
               <AnimatePresence>
                 {vectors.map((v, i) => {
                   // Simulate orthogonal axes by spreading them out
                   const rad = (v.angle * Math.PI) / 180;
                   const tx = Math.cos(rad) * 120;
                   const ty = Math.sin(rad) * 120;
                   
                   return (
                     <motion.g 
                       key={v.id}
                       initial={{ opacity: 0, scale: 0 }}
                       animate={{ opacity: 1, scale: 1 }}
                       transition={{ type: 'spring', damping: 12 }}
                     >
                       <line x1="0" y1="0" x2={tx} y2={ty} stroke="#6366f1" strokeWidth="3" strokeLinecap="round" />
                       <circle cx={tx} cy={ty} r="5" fill="#4f46e5" shadow-sm />
                       <text x={tx + 10} y={ty + 10} className="text-[10px] font-bold fill-slate-400">e{i+1}</text>
                       
                       {/* Distance Line to previous vector */}
                       {i > 0 && (
                         <motion.line 
                           x1={tx} y1={ty} 
                           x2={Math.cos((vectors[i-1].angle * Math.PI) / 180) * 120} 
                           y2={Math.sin((vectors[i-1].angle * Math.PI) / 180) * 120} 
                           stroke="#f43f5e" strokeWidth="1" strokeDasharray="2 2"
                           initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
                         />
                       )}
                     </motion.g>
                   );
                 })}
               </AnimatePresence>
               
               <circle r="6" fill="#1e293b" />
             </g>
           </svg>

           <button 
             onClick={addVector}
             disabled={vectors.length >= 10}
             className={`mt-8 flex items-center gap-3 px-6 py-3 rounded-2xl font-bold text-sm transition-all ${vectors.length >= 10 ? 'bg-slate-100 text-slate-400 cursor-not-allowed' : 'bg-indigo-600 text-white hover:bg-indigo-700 shadow-lg shadow-indigo-100'}`}
           >
             <Plus className="w-4 h-4" />
             {curr.action} ({vectors.length}/10)
           </button>
           {vectors.length >= 10 && <p className="mt-2 text-[10px] text-amber-600 font-bold uppercase">{curr.maxReached}</p>}
        </div>

        <div className="flex-1 space-y-6 w-full">
          <div className="grid grid-cols-1 gap-4">
            <div className="p-4 bg-emerald-50 rounded-2xl border border-emerald-100">
               <div className="flex items-center gap-3 mb-2">
                 <ShieldCheck className="w-4 h-4 text-emerald-600" />
                 <p className="text-xs font-bold text-emerald-900 uppercase tracking-widest">{curr.bounded}</p>
               </div>
               <p className="text-sm text-emerald-700 italic">Input vectors remain inside the unit ball.</p>
            </div>
            
            <div className="p-4 bg-pink-50 rounded-2xl border border-pink-100">
               <div className="flex items-center gap-3 mb-2">
                 <AlertTriangle className="w-4 h-4 text-pink-600" />
                 <p className="text-xs font-bold text-pink-900 uppercase tracking-widest">{curr.distance}</p>
               </div>
               <p className="text-sm text-pink-700 italic">They never get closer to each other.</p>
            </div>
          </div>

          <div className="p-5 bg-slate-900 rounded-3xl relative overflow-hidden">
             <div className="absolute top-0 left-0 w-1 h-full bg-indigo-500" />
             <p className="text-indigo-300 text-[10px] font-bold uppercase tracking-widest mb-3 italic">Geometric Proof</p>
             <div className="bg-black/20 p-4 rounded-xl text-center mb-4">
                <code className="text-white text-xs font-mono">
                  ||e_n - e_m||^2 = ||e_n||^2 + ||e_m||^2 = 1 + 1 = 2
                </code>
             </div>
             <p className="text-slate-400 text-xs leading-relaxed">
               In infinite dimensions, orthogonality provides enough 'room' for points to stay far apart forever.
             </p>
          </div>

          <div className="p-4 bg-indigo-50 rounded-2xl border border-indigo-100 flex items-start gap-3">
            <Info className="w-5 h-5 text-indigo-600 mt-0.5 flex-shrink-0" />
            <p className="text-indigo-900 text-xs italic leading-relaxed">
              {curr.hook}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfiniteEscapeVisualizer;
