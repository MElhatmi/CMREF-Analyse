import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface GlossaryTermProps {
  term: string;
  definition: React.ReactNode;
  children: React.ReactNode;
}

const GlossaryTerm: React.FC<GlossaryTermProps> = ({ term, definition, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <span 
      className="relative inline-block cursor-help group"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <span className="underline decoration-indigo-300 decoration-2 underline-offset-4 group-hover:decoration-indigo-600 transition-colors">
        {children}
      </span>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            className="absolute bottom-full left-1/2 -translate-x-1/2 mb-4 w-72 bg-slate-900 text-white p-6 rounded-[2rem] shadow-2xl z-[150] border border-white/10"
          >
            <div className="relative">
              <h5 className="text-xs font-bold text-indigo-400 uppercase tracking-widest mb-2">{term}</h5>
              <div className="text-[11px] leading-relaxed text-slate-300">
                {definition}
              </div>
              
              {/* Arrow */}
              <div className="absolute top-full left-1/2 -translate-x-1/2 w-4 h-4 bg-slate-900 rotate-45 border-r border-b border-white/10 mt-[-8px]" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </span>
  );
};

export default GlossaryTerm;
