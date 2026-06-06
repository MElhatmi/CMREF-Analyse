import React from 'react';
import { motion } from 'framer-motion';
import { Box } from 'lucide-react';

const CompactHero: React.FC = () => {
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
              <Box className="w-3 h-3" />
              Chapter 8: Compact Spaces
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-6xl text-balance">
              The Power of <span className="text-indigo-600">Compactness</span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-slate-600 italic">
              "Reducing the infinite to the finite."
            </p>
            <p className="mt-4 text-lg leading-8 text-slate-600">
              Compactness is one of the most powerful concepts in topology. It generalizes the property of "closed and bounded" intervals in R. A compact space is one where any infinite process or covering can be reduced to a finite one, meaning the space has no "missing holes" and doesn't stretch out to infinity.
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
               
               {/* Concept of "Reducing to Finite" */}
               <text x="40" y="50" className="text-[10px] font-bold fill-slate-300 uppercase tracking-widest">Infinite Open Cover</text>
               
               {/* many small circles */}
               {[...Array(12)].map((_, i) => (
                 <circle 
                   key={i} 
                   cx={80 + (i % 4) * 40 + Math.sin(i) * 10} 
                   cy={80 + Math.floor(i / 4) * 40 + Math.cos(i) * 10} 
                   r="25" 
                   fill="rgba(99, 102, 241, 0.05)" 
                   stroke="#6366f1" 
                   strokeWidth="0.5" 
                   strokeDasharray="2 2"
                 />
               ))}

               {/* Arrow pointing down */}
               <motion.path 
                 d="M 200 160 L 200 200" 
                 stroke="#94a3b8" 
                 strokeWidth="2" 
                 markerEnd="url(#arrow-head)"
                 animate={{ y: [0, 5, 0] }}
                 transition={{ repeat: Infinity, duration: 2 }}
               />
               <defs>
                 <marker id="arrow-head" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="4" markerHeight="4" orient="auto-start-reverse">
                   <path d="M 0 0 L 10 5 L 0 10 z" fill="#94a3b8" />
                 </marker>
               </defs>

               {/* Finite Subcover */}
               <text x="40" y="220" className="text-[10px] font-bold fill-indigo-400 uppercase tracking-widest">Finite Subcover</text>
               <motion.rect 
                 initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }}
                 x="120" y="230" width="160" height="40" rx="10" 
                 fill="rgba(99, 102, 241, 0.1)" stroke="#6366f1" strokeWidth="2"
               />
               <div className="flex">
                  <circle cx="160" cy="250" r="15" fill="rgba(99, 102, 241, 0.2)" stroke="#6366f1" strokeWidth="1" />
                  <circle cx="200" cy="250" r="15" fill="rgba(99, 102, 241, 0.2)" stroke="#6366f1" strokeWidth="1" />
                  <circle cx="240" cy="250" r="15" fill="rgba(99, 102, 241, 0.2)" stroke="#6366f1" strokeWidth="1" />
               </div>
            </svg>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CompactHero;
