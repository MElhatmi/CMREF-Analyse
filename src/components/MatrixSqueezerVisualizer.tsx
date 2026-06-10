import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { Sliders, Maximize2, Info } from 'lucide-react';

const MatrixSqueezerVisualizer: React.FC = () => {
  const { language } = useLanguage();
  
  // Matrix M = [[a, b], [c, d]]
  const [matrix, setMatrix] = useState({ a: 2.0, b: 1.0, c: 0.0, d: 1.5 });

  const content = {
    EN: {
      title: "Interactive Visualizer: The Operator Matrix Squeezer",
      subtitle: "See how a linear transformation stretches the unit circle. The maximum stretch factor is the operator norm C.",
      matrixLabel: "Transformation Matrix M",
      calcMax: "Max Output Length ||u(x)||",
      maxVector: "Max Stretch Vector x_max",
      hook: "The faint circle represents all input vectors of length 1 (||x|| = 1). The blue ellipse is the output. The glowing red vector is the absolute furthest the matrix can stretch a unit vector. That maximum length is exactly your constant C! Because the ellipse is finite, the operator is bounded and therefore continuous."
    },
    FR: {
      title: "Visualiseur Interactif : Le Presseur de Matrice",
      subtitle: "Observez comment une transformation linéaire étire le cercle unité. Le facteur d'étirement maximal est la norme d'opérateur C.",
      matrixLabel: "Matrice de Transformation M",
      calcMax: "Longueur de sortie Max ||u(x)||",
      maxVector: "Vecteur d'étirement Max x_max",
      hook: "Le cercle en pointillés représente tous les vecteurs d'entrée de longueur 1. L'ellipse bleue est la sortie. Le vecteur rouge brillant est l'étirement maximal qu'exerce la matrice sur un vecteur unitaire. Cette longueur maximale est exactement votre constante C ! Comme l'ellipse est finie, l'opérateur est borné et donc continu."
    }
  };

  const curr = content[language];

  // Calculate the ellipse and max stretch
  const { pathData, maxStretch, maxVec } = useMemo(() => {
    const steps = 100;
    const pts = [];
    let bestNorm = 0;
    let bestX = 0;
    let bestY = 0;
    let bestUX = 0;
    let bestUY = 0;

    for (let i = 0; i <= steps; i++) {
      const theta = (i / steps) * 2 * Math.PI;
      const x = Math.cos(theta);
      const y = Math.sin(theta);
      
      // Transform: M * [x, y]
      const ux = matrix.a * x + matrix.b * y;
      const uy = matrix.c * x + matrix.d * y;
      
      pts.push({ x: ux, y: uy });
      
      const currentNorm = Math.sqrt(ux * ux + uy * uy);
      if (currentNorm > bestNorm) {
        bestNorm = currentNorm;
        bestX = x;
        bestY = y;
        bestUX = ux;
        bestUY = uy;
      }
    }

    const scaledPath = "M " + pts.map(p => `${200 + p.x * 60} ${200 - p.y * 60}`).join(" L ");

    return { 
      pathData: scaledPath, 
      maxStretch: bestNorm,
      maxVec: { x: bestX, y: bestY, ux: bestUX, uy: bestUY }
    };
  }, [matrix]);

  return (
    <div className="my-12 bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden">
      <div className="p-8 border-b border-slate-100 bg-slate-50/50">
        <div className="flex items-center gap-3 mb-2">
          <Maximize2 className="w-5 h-5 text-purple-600" />
          <h3 className="text-xl font-bold text-slate-900">{curr.title}</h3>
        </div>
        <p className="text-slate-600 text-sm">{curr.subtitle}</p>
      </div>

      <div className="flex flex-col lg:flex-row gap-8 p-8">
        <div className="relative">
          <svg viewBox="0 0 400 400" className="w-full max-w-[400px] h-auto bg-white rounded-2xl shadow-inner border border-slate-100">
            {/* Grid */}
            <defs>
              <pattern id="grid-matrix" width="30" height="30" patternUnits="userSpaceOnUse">
                <path d="M 30 0 L 0 0 0 30" fill="none" stroke="#f1f5f9" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="400" height="400" fill="url(#grid-matrix)" />
            
            {/* Axes */}
            <line x1="200" y1="0" x2="200" y2="400" stroke="#cbd5e1" strokeWidth="1" />
            <line x1="0" y1="200" x2="400" y2="200" stroke="#cbd5e1" strokeWidth="1" />

            {/* Input Unit Circle */}
            <circle cx="200" cy="200" r="60" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="4 4" />
            
            {/* Transformed Ellipse */}
            <motion.path 
              d={pathData} 
              fill="rgba(139, 92, 246, 0.1)" 
              stroke="#8b5cf6" 
              strokeWidth="3"
              transition={{ duration: 0.1 }}
            />

            {/* Max Stretch Vector */}
            <line 
              x1="200" y1="200" 
              x2={200 + maxVec.ux * 60} 
              y2={200 - maxVec.uy * 60} 
              stroke="#ef4444" strokeWidth="4" strokeLinecap="round"
              className="drop-shadow-[0_0_8px_rgba(239,68,68,0.5)]"
            />
            <circle cx={200 + maxVec.ux * 60} cy={200 - maxVec.uy * 60} r="4" fill="#ef4444" />

            {/* Labels */}
            <text x="350" y="215" className="text-[10px] font-bold fill-slate-400">x</text>
            <text x="210" y="20" className="text-[10px] font-bold fill-slate-400">y</text>
          </svg>
        </div>

        <div className="flex-1 space-y-6">
          <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200">
            <h5 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-4 flex items-center gap-2">
               <Sliders className="w-4 h-4" /> {curr.matrixLabel}
            </h5>
            <div className="grid grid-cols-2 gap-4 max-w-[200px]">
               <input type="number" step="0.1" value={matrix.a} onChange={e => setMatrix({...matrix, a: parseFloat(e.target.value) || 0})} className="p-2 bg-white border border-slate-200 rounded-lg font-mono text-center" />
               <input type="number" step="0.1" value={matrix.b} onChange={e => setMatrix({...matrix, b: parseFloat(e.target.value) || 0})} className="p-2 bg-white border border-slate-200 rounded-lg font-mono text-center" />
               <input type="number" step="0.1" value={matrix.c} onChange={e => setMatrix({...matrix, c: parseFloat(e.target.value) || 0})} className="p-2 bg-white border border-slate-200 rounded-lg font-mono text-center" />
               <input type="number" step="0.1" value={matrix.d} onChange={e => setMatrix({...matrix, d: parseFloat(e.target.value) || 0})} className="p-2 bg-white border border-slate-200 rounded-lg font-mono text-center" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
             <div className="p-4 bg-purple-900 rounded-2xl shadow-xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-12 h-12 bg-white/5 rounded-full -translate-y-6 translate-x-6" />
                <p className="text-[10px] font-bold text-purple-300 uppercase tracking-widest mb-1">{curr.calcMax}</p>
                <div className="flex items-baseline gap-2">
                   <span className="text-3xl font-mono font-bold text-white">C = {maxStretch.toFixed(2)}</span>
                </div>
             </div>
             
             <div className="p-4 bg-white rounded-2xl border border-slate-200 shadow-sm">
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">{curr.maxVector}</p>
                <p className="text-sm font-mono font-bold text-slate-700">({maxVec.x.toFixed(2)}, {maxVec.y.toFixed(2)})</p>
             </div>
          </div>

          <div className="p-4 bg-indigo-50 rounded-2xl border border-indigo-100 flex items-start gap-3">
             <Info className="w-5 h-5 text-indigo-600 mt-0.5 flex-shrink-0" />
             <p className="text-indigo-900 text-sm italic leading-relaxed">
               {curr.hook}
             </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MatrixSqueezerVisualizer;
