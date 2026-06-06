import React from 'react';
import { motion } from 'framer-motion';
import { Layers, Combine } from 'lucide-react';

const ProductHero: React.FC = () => {
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
              <Combine className="w-3 h-3" />
              Chapter 6: Product Topology
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-6xl">
              Multiplying <span className="text-indigo-600">Spaces</span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-slate-600 italic">
              "How do we build a universe from smaller pieces?"
            </p>
            <p className="mt-4 text-lg leading-8 text-slate-600">
              When we combine multiple topological spaces—like multiplying two 1D lines to form a 2D plane—we need a way to define what "open" means in this new, larger space. The <strong>Product Topology</strong> provides the blueprints for this construction.
            </p>
            <div className="mt-8 bg-slate-50 p-6 rounded-3xl border border-slate-100 flex gap-4 shadow-inner">
               <Layers className="w-6 h-6 text-indigo-500 shrink-0 mt-1" />
               <p className="text-sm text-slate-600 leading-relaxed">
                  To define the global structure, we start with simple building blocks called <strong>Elementary Rectangles</strong>. These are formed by the "product" of open sets from each individual dimension.
               </p>
            </div>
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
               
               {/* 1D Components */}
               <g>
                  <line x1="50" y1="240" x2="350" y2="240" stroke="#cbd5e1" strokeWidth="2" />
                  <rect x="100" y="238" width="80" height="4" fill="#6366f1" rx="2" />
                  <text x="50" y="260" className="text-[10px] font-bold fill-indigo-400 uppercase">Space E₁</text>
               </g>

               <g>
                  <line x1="50" y1="50" x2="50" y2="250" stroke="#cbd5e1" strokeWidth="2" />
                  <rect x="48" y="100" width="4" height="60" fill="#ec4899" rx="2" />
                  <text x="30" y="45" className="text-[10px] font-bold fill-pink-400 uppercase [writing-mode:vertical-lr] rotate-180">Space E₂</text>
               </g>

               {/* 2D Product */}
               <motion.rect 
                 initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }}
                 x="100" y="100" width="80" height="60" rx="4" 
                 fill="rgba(99, 102, 241, 0.1)" stroke="#6366f1" strokeWidth="2" strokeDasharray="5 3"
               />
               
               <motion.path 
                 d="M 180 130 L 220 130" stroke="#94a3b8" strokeWidth="2" markerEnd="url(#arrow)"
                 initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay: 1.2 }}
               />
               <defs>
                 <marker id="arrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                   <path d="M 0 0 L 10 5 L 0 10 z" fill="#94a3b8" />
                 </marker>
               </defs>

               <text x="230" y="135" className="text-xs font-bold fill-slate-900 tracking-tight">PRODUCT SPACE E</text>
            </svg>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProductHero;
