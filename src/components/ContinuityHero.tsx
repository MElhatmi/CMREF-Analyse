import React from 'react';
import { motion } from 'framer-motion';
import { Activity, Wind } from 'lucide-react';

const ContinuityHero: React.FC = () => {
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
              <Activity className="w-3 h-3" />
              Chapter 7: Continuity & Limits
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-6xl">
              Preserving <span className="text-blue-600">Structure</span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-slate-600 italic">
              "A continuous function is one that doesn't tear the topological fabric."
            </p>
            <p className="mt-4 text-lg leading-8 text-slate-600">
              In standard calculus, we think of continuity as "drawing without lifting the pen." In topology, we generalize this entirely using open sets. Continuity is about the <strong>stability of neighborhoods</strong>: if you're close enough in the target, you must have been close enough in the source.
            </p>
            <div className="mt-8 bg-slate-50 p-6 rounded-3xl border border-slate-100 flex gap-4 shadow-inner">
               <Wind className="w-6 h-6 text-blue-500 shrink-0 mt-1" />
               <p className="text-sm text-slate-600 leading-relaxed">
                  Instead of complex distances, we use a simple rule: a function is continuous if it "pulls back" every open set into another open set.
               </p>
            </div>
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
               
               {/* Domain Blob */}
               <motion.path 
                 d="M 50 150 Q 70 80 150 100 T 150 200 Q 70 220 50 150"
                 fill="rgba(59, 130, 246, 0.05)" stroke="#3b82f6" strokeWidth="2" strokeDasharray="5 5"
               />
               <text x="60" y="70" className="text-[10px] font-bold fill-blue-400 uppercase tracking-widest">Domain E</text>

               {/* Target Blob */}
               <motion.path 
                 d="M 250 150 Q 270 80 350 100 T 350 200 Q 270 220 250 150"
                 fill="rgba(249, 115, 22, 0.05)" stroke="#f97316" strokeWidth="2" strokeDasharray="5 5"
               />
               <text x="260" y="70" className="text-[10px] font-bold fill-orange-400 uppercase tracking-widest">Target F</text>

               {/* Function Arrow */}
               <motion.path 
                 d="M 160 150 L 240 150" stroke="#94a3b8" strokeWidth="2" markerEnd="url(#arrow-head)"
                 initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay: 1, duration: 1 }}
               />
               <defs>
                 <marker id="arrow-head" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="4" markerHeight="4" orient="auto-start-reverse">
                   <path d="M 0 0 L 10 5 L 0 10 z" fill="#94a3b8" />
                 </marker>
               </defs>
               <text x="195" y="140" className="text-xs font-bold fill-slate-400 italic">f</text>

               {/* Pullback Visualization */}
               <motion.circle 
                 cx="300" cy="150" r="30" fill="rgba(249, 115, 22, 0.2)" stroke="#f97316" strokeWidth="1"
                 initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2 }}
               />
               <motion.path 
                 d="M 270 150 Q 200 120 130 150" fill="none" stroke="#6366f1" strokeWidth="1" strokeDasharray="4 2"
                 initial={{ pathLength: 0, opacity: 0 }} animate={{ pathLength: 1, opacity: 1 }} transition={{ delay: 2.5, duration: 1 }}
               />
               <motion.path 
                 d="M 100 150 Q 110 120 130 130 T 130 170 Q 110 180 100 150"
                 fill="rgba(59, 130, 246, 0.2)" stroke="#3b82f6" strokeWidth="1"
                 initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 3.5 }}
               />
               
               <text x="285" y="200" className="text-[8px] font-bold fill-orange-600">Open Set O</text>
               <text x="80" y="200" className="text-[8px] font-bold fill-blue-600 tracking-tighter">Inverse Image f⁻¹(O)</text>
            </svg>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContinuityHero;
