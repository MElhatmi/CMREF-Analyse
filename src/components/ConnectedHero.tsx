import React from 'react';
import { motion } from 'framer-motion';
import { Scissors, Link2 } from 'lucide-react';

const ConnectedHero: React.FC = () => {
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
              <Link2 className="w-3 h-3" />
              Chapter 10: Connected Spaces
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-6xl text-balance">
              Topological <span className="text-indigo-600">Unity</span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-slate-600 italic">
              "When a space is more than just a collection of points—it's a single piece."
            </p>
            <p className="mt-4 text-lg leading-8 text-slate-600">
              In topology, we say a space is <strong>connected</strong> if it consists of one solid piece. Think of the <strong>Scissors Analogy</strong>: if it's mathematically impossible to take a pair of scissors and cut the space into two disjoint open pieces, then the space is connected.
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
               
               {/* Connected Blob */}
               <motion.path 
                 d="M 100 150 Q 120 80 200 100 T 300 150 Q 280 220 200 210 T 100 150"
                 fill="rgba(99, 102, 241, 0.1)" stroke="#6366f1" strokeWidth="3"
                 animate={{ d: [
                   "M 100 150 Q 120 80 200 100 T 300 150 Q 280 220 200 210 T 100 150",
                   "M 100 150 Q 130 90 210 110 T 300 150 Q 270 230 190 220 T 100 150",
                   "M 100 150 Q 120 80 200 100 T 300 150 Q 280 220 200 210 T 100 150"
                 ]}}
                 transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
               />
               
               {/* Scissors trying to cut */}
               <motion.g
                 animate={{ x: [0, 20, 0], rotate: [0, -10, 0] }}
                 transition={{ repeat: Infinity, duration: 4 }}
                 className="origin-center"
                 style={{ x: 180, y: 50 }}
               >
                  <Scissors className="w-12 h-12 text-slate-400 opacity-40" />
                  <motion.path 
                    d="M 20 60 L 20 240" stroke="#ef4444" strokeWidth="2" strokeDasharray="5 5" 
                    animate={{ opacity: [0, 1, 0] }}
                    transition={{ repeat: Infinity, duration: 4 }}
                  />
               </motion.g>

               <text x="160" y="270" className="text-[10px] font-bold fill-indigo-500 uppercase tracking-widest">Unbreakable Fabric</text>
            </svg>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ConnectedHero;
