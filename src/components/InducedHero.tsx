import React from 'react';
import { motion } from 'framer-motion';
import { InlineMath } from './Math';
import { Globe, Compass } from 'lucide-react';

const InducedHero: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:items-center lg:gap-x-12">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 bg-slate-50 px-3 py-1 rounded-full text-slate-600 font-bold text-xs uppercase tracking-widest mb-6 border border-slate-100">
              <Globe className="w-3 h-3" />
              Chapter 5: Induced Topology
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-6xl">
              The Edge of the <span className="text-blue-600">Universe</span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-slate-600 italic">
              "Is a set open? That depends entirely on where you live."
            </p>
            <p className="mt-4 text-lg leading-8 text-slate-600">
              In topology, openness is not an absolute truth—it is <strong>relative</strong>. The <strong>Induced Topology</strong> allows us to extract a subset <InlineMath math="A" /> and treat it as its own independent mini-universe.
            </p>
            <div className="mt-8 bg-blue-50/50 p-6 rounded-3xl border border-blue-100 flex gap-4">
               <Compass className="w-6 h-6 text-blue-500 shrink-0 mt-1" />
               <p className="text-sm text-blue-900 leading-relaxed">
                  A border that looks like a hard "closed" wall from the perspective of the parent space might just be the "edge of the world" from the perspective of the subspace.
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
               
               {/* Parent Space E */}
               <rect x="40" y="40" width="320" height="220" rx="30" fill="none" stroke="#e2e8f0" strokeWidth="2" strokeDasharray="10 5" />
               <text x="60" y="70" className="text-[10px] font-bold fill-slate-300 uppercase tracking-widest">Parent Space E</text>

               {/* Subspace A */}
               <motion.rect 
                 initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}
                 x="100" y="100" width="200" height="100" rx="20" 
                 fill="white" stroke="#1e293b" strokeWidth="3" 
                 className="shadow-sm"
               />
               <text x="120" y="130" className="text-xs font-bold fill-slate-900 uppercase">Universe A</text>

               {/* An open set O slicing A */}
               <motion.circle 
                 cx="280" cy="120" r="60" 
                 fill="rgba(59, 130, 246, 0.1)" stroke="#3b82f6" strokeWidth="2"
                 animate={{ x: [0, -40, 0] }}
                 transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
               />
               <text x="280" y="150" className="text-[10px] font-bold fill-blue-500 uppercase">Open set O</text>
            </svg>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default InducedHero;
