import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { Info, Layers, Eye, EyeOff } from 'lucide-react';

const UnitSphereVisualizer: React.FC = () => {
  const { language } = useLanguage();
  const [activeNorm, setActiveNorm] = useState<'L1' | 'L2' | 'Linf'>('L2');
  const [showAll, setShowAll] = useState(false);

  const content = {
    EN: {
      title: "Interactive Visualizer: The Unit Sphere Shape-Shifter",
      subtitle: "Observe how the concept of a 'circle' changes depending on the norm. The unit sphere is the set of all points at distance 1 from the origin.",
      l1Label: "L1 Norm (Manhattan)",
      l2Label: "L2 Norm (Euclidean)",
      linfLabel: "Linf Norm (Maximum)",
      showAll: "Show Nesting Hierarchy",
      l1Text: "|x| + |y| = 1. The L1 unit sphere is a diamond.",
      l2Text: "sqrt(x² + y²) = 1. The L2 unit sphere is a perfect circle.",
      linfText: "max(|x|, |y|) = 1. The Linf unit sphere is a square.",
      nestingHook: "Notice how the shapes nest perfectly. This geometrically proves the hierarchy: ||X||inf ≤ ||X||2 ≤ ||X||1. A point on the inner diamond is 'further' from the origin than a point on the outer square when measured with the same norm."
    },
    FR: {
      title: "Visualiseur Interactif : La Sphère Unité Métamorphique",
      subtitle: "Observez comment le concept de 'cercle' change selon la norme. La sphère unité est l'ensemble des points à une distance 1 de l'origine.",
      l1Label: "Norme L1 (Manhattan)",
      l2Label: "Norme L2 (Euclidienne)",
      linfLabel: "Norme Linf (Maximum)",
      showAll: "Afficher la Hiérarchie d'Emboîtement",
      l1Text: "|x| + |y| = 1. La sphère unité L1 est un losange.",
      l2Text: "sqrt(x² + y²) = 1. La sphère unité L2 est un cercle parfait.",
      linfText: "max(|x|, |y|) = 1. La sphère unité Linf est un carré.",
      nestingHook: "Remarquez comment les formes s'emboîtent parfaitement. Cela prouve géométriquement la hiérarchie : ||X||inf ≤ ||X||2 ≤ ||X||1. Un point sur le losange intérieur est 'plus loin' de l'origine qu'un point sur le carré extérieur lorsqu'on mesure avec la même norme."
    }
  };

  const curr = content[language];

  // SVG Coordinates
  // Center is (200, 200). Scale is 1 unit = 120 pixels.
  const scale = 120;
  const center = 200;

  return (
    <div className="my-12 bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden">
      <div className="p-8 border-b border-slate-100 bg-slate-50/50">
        <div className="flex items-center gap-3 mb-2">
          <Layers className="w-5 h-5 text-emerald-600" />
          <h3 className="text-xl font-bold text-slate-900">{curr.title}</h3>
        </div>
        <p className="text-slate-600 text-sm">{curr.subtitle}</p>
      </div>

      <div className="flex flex-col lg:flex-row gap-8 p-8">
        <div className="relative">
          <svg viewBox="0 0 400 400" className="w-full max-w-[400px] h-auto bg-white rounded-2xl shadow-inner border border-slate-100">
            {/* Grid */}
            <defs>
              <pattern id="grid-viz" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#f1f5f9" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="400" height="400" fill="url(#grid-viz)" />
            
            {/* Axes */}
            <line x1="200" y1="0" x2="200" y2="400" stroke="#cbd5e1" strokeWidth="1" />
            <line x1="0" y1="200" x2="400" y2="200" stroke="#cbd5e1" strokeWidth="1" />
            
            {/* Axis Labels */}
            <text x="385" y="195" className="text-[10px] font-bold fill-slate-400">x</text>
            <text x="205" y="15" className="text-[10px] font-bold fill-slate-400">y</text>
            <text x="320" y="215" className="text-[10px] font-bold fill-slate-400">1</text>
            <text x="185" y="80" className="text-[10px] font-bold fill-slate-400">1</text>

            <g transform={`translate(${center}, ${center}) scale(${scale})`}>
               {/* Underlays when showAll is true */}
               {showAll && (
                 <>
                   {/* Linf Square */}
                   <rect x="-1" y="-1" width="2" height="2" fill="#94a3b8" fillOpacity="0.05" stroke="#94a3b8" strokeWidth="0.01" strokeDasharray="0.05 0.05" />
                   {/* L2 Circle */}
                   <circle r="1" fill="#10b981" fillOpacity="0.05" stroke="#10b981" strokeWidth="0.01" strokeDasharray="0.05 0.05" />
                   {/* L1 Diamond */}
                   <path d="M 1 0 L 0 1 L -1 0 L 0 -1 Z" fill="#3b82f6" fillOpacity="0.05" stroke="#3b82f6" strokeWidth="0.01" strokeDasharray="0.05 0.05" />
                 </>
               )}

               {/* Active Shape */}
               <AnimatePresence mode="wait">
                 {activeNorm === 'Linf' && (
                   <motion.rect 
                     key="linf"
                     initial={{ opacity: 0, scale: 0.9 }}
                     animate={{ opacity: 1, scale: 1 }}
                     exit={{ opacity: 0, scale: 1.1 }}
                     x="-1" y="-1" width="2" height="2" 
                     fill="none" stroke="#94a3b8" strokeWidth="0.03"
                   />
                 )}
                 {activeNorm === 'L2' && (
                   <motion.circle 
                     key="l2"
                     initial={{ opacity: 0, scale: 0.9 }}
                     animate={{ opacity: 1, scale: 1 }}
                     exit={{ opacity: 0, scale: 1.1 }}
                     r="1" 
                     fill="none" stroke="#10b981" strokeWidth="0.03"
                   />
                 )}
                 {activeNorm === 'L1' && (
                   <motion.path 
                     key="l1"
                     initial={{ opacity: 0, scale: 0.9 }}
                     animate={{ opacity: 1, scale: 1 }}
                     exit={{ opacity: 0, scale: 1.1 }}
                     d="M 1 0 L 0 1 L -1 0 L 0 -1 Z" 
                     fill="none" stroke="#3b82f6" strokeWidth="0.03"
                   />
                 )}
               </AnimatePresence>
               
               {/* Origin */}
               <circle r="0.04" fill="#1e293b" />
            </g>
          </svg>
        </div>

        <div className="flex-1 space-y-6">
          <div className="flex flex-col gap-3">
            <button 
              onClick={() => setActiveNorm('L1')}
              className={`flex items-center justify-between p-4 rounded-2xl border transition-all ${activeNorm === 'L1' ? 'bg-blue-50 border-blue-200 shadow-sm' : 'bg-white border-slate-100 hover:border-slate-200'}`}
            >
              <div className="flex items-center gap-3">
                <div className={`w-3 h-3 rounded-full ${activeNorm === 'L1' ? 'bg-blue-500' : 'bg-slate-200'}`} />
                <span className={`text-sm font-bold ${activeNorm === 'L1' ? 'text-blue-900' : 'text-slate-600'}`}>{curr.l1Label}</span>
              </div>
              <span className="text-[10px] font-mono text-slate-400">||X||₁</span>
            </button>

            <button 
              onClick={() => setActiveNorm('L2')}
              className={`flex items-center justify-between p-4 rounded-2xl border transition-all ${activeNorm === 'L2' ? 'bg-emerald-50 border-emerald-200 shadow-sm' : 'bg-white border-slate-100 hover:border-slate-200'}`}
            >
              <div className="flex items-center gap-3">
                <div className={`w-3 h-3 rounded-full ${activeNorm === 'L2' ? 'bg-emerald-500' : 'bg-slate-200'}`} />
                <span className={`text-sm font-bold ${activeNorm === 'L2' ? 'text-emerald-900' : 'text-slate-600'}`}>{curr.l2Label}</span>
              </div>
              <span className="text-[10px] font-mono text-slate-400">||X||₂</span>
            </button>

            <button 
              onClick={() => setActiveNorm('Linf')}
              className={`flex items-center justify-between p-4 rounded-2xl border transition-all ${activeNorm === 'Linf' ? 'bg-slate-100 border-slate-300 shadow-sm' : 'bg-white border-slate-100 hover:border-slate-200'}`}
            >
              <div className="flex items-center gap-3">
                <div className={`w-3 h-3 rounded-full ${activeNorm === 'Linf' ? 'bg-slate-500' : 'bg-slate-200'}`} />
                <span className={`text-sm font-bold ${activeNorm === 'Linf' ? 'text-slate-900' : 'text-slate-600'}`}>{curr.linfLabel}</span>
              </div>
              <span className="text-[10px] font-mono text-slate-400">||X||∞</span>
            </button>
          </div>

          <div className="p-4 bg-slate-900 rounded-2xl">
            <p className="text-white text-sm font-mono italic text-center">
              {activeNorm === 'L1' ? curr.l1Text : activeNorm === 'L2' ? curr.l2Text : curr.linfText}
            </p>
          </div>

          <div className="pt-4 border-t border-slate-100">
            <button 
              onClick={() => setShowAll(!showAll)}
              className={`w-full flex items-center justify-center gap-3 p-3 rounded-xl border-2 transition-all font-bold text-xs uppercase tracking-widest ${showAll ? 'bg-indigo-600 border-indigo-600 text-white shadow-lg shadow-indigo-100' : 'bg-white border-slate-100 text-slate-400 hover:border-slate-200'}`}
            >
              {showAll ? <Eye className="w-4 h-4" /> : <EyeOff className="w-4 h-4" />}
              {curr.showAll}
            </button>
          </div>

          {showAll && (
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-start gap-3 p-4 bg-indigo-50 rounded-2xl border border-indigo-100"
            >
              <Info className="w-5 h-5 text-indigo-600 mt-1 flex-shrink-0" />
              <p className="text-indigo-900 text-sm leading-relaxed italic">
                {curr.nestingHook}
              </p>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
};

export default UnitSphereVisualizer;
