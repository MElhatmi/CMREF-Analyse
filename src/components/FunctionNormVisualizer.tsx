import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { Info, Activity, Sliders } from 'lucide-react';

const FunctionNormVisualizer: React.FC = () => {
  const { language } = useLanguage();
  const [n, setN] = useState(1);

  const content = {
    EN: {
      title: "Interactive Visualizer: Measuring the Spike",
      subtitle: "Observe the sequence fₙ(x) = xⁿ. As n increases, the function 'flattens' against the x-axis but maintains a sharp peak at x=1.",
      exponent: "Exponent n",
      norm1: "Area (L1 Norm):",
      normInf: "Peak (Linf Norm):",
      hook: "Watch the blue area disappear as n grows. The L1 norm thinks the function is vanishing to zero! But look at the red line—the L∞ norm sees a massive, undying spike at x=1. In infinite dimensions, measuring 'size' entirely depends on your choice of norm."
    },
    FR: {
      title: "Visualiseur Interactif : Mesurer la Pointe",
      subtitle: "Observez la suite fₙ(x) = xⁿ. À mesure que n augmente, la fonction s'écrase contre l'axe X mais conserve une pointe acérée à x=1.",
      exponent: "Exposant n",
      norm1: "Aire (Norme L1) :",
      normInf: "Sommet (Norme Linf) :",
      hook: "Regardez l'aire bleue disparaître à mesure que n croît. La norme L1 pense que la fonction s'évanouit vers zéro ! Mais regardez la ligne rouge — la norme L∞ voit une pointe massive et persistante à x=1. En dimension infinie, la mesure de la 'taille' dépend entièrement de votre choix de norme."
    }
  };

  const curr = content[language];

  // Calculate points for the graph
  const points = useMemo(() => {
    const pts = [];
    const steps = 100;
    for (let i = 0; i <= steps; i++) {
      const x = i / steps;
      const y = Math.pow(x, n);
      pts.push({ x: 50 + x * 300, y: 350 - y * 300 });
    }
    return pts;
  }, [n]);

  const pathData = useMemo(() => {
    return `M ${points[0].x} ${points[0].y} ` + 
      points.slice(1).map(p => `L ${p.x} ${p.y}`).join(' ');
  }, [points]);

  const areaData = useMemo(() => {
    return `${pathData} L 350 350 L 50 350 Z`;
  }, [pathData]);

  const l1Value = 1 / (n + 1);

  return (
    <div className="my-12 bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden">
      <div className="p-8 border-b border-slate-100 bg-slate-50/50">
        <div className="flex items-center gap-3 mb-2">
          <Activity className="w-5 h-5 text-blue-600" />
          <h3 className="text-xl font-bold text-slate-900">{curr.title}</h3>
        </div>
        <p className="text-slate-600 text-sm">{curr.subtitle}</p>
      </div>

      <div className="flex flex-col lg:flex-row gap-8 p-8">
        <div className="relative">
          <svg viewBox="0 0 400 400" className="w-full max-w-[400px] h-auto bg-white rounded-2xl shadow-inner border border-slate-100">
            {/* Grid */}
            <defs>
              <pattern id="grid-fn-viz" width="30" height="30" patternUnits="userSpaceOnUse">
                <path d="M 30 0 L 0 0 0 30" fill="none" stroke="#f1f5f9" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="400" height="400" fill="url(#grid-fn-viz)" />
            
            {/* Axes */}
            <line x1="50" y1="50" x2="50" y2="350" stroke="#cbd5e1" strokeWidth="2" />
            <line x1="50" y1="350" x2="380" y2="350" stroke="#cbd5e1" strokeWidth="2" />
            
            {/* Area */}
            <motion.path 
              d={areaData} 
              fill="#3b82f6" 
              fillOpacity="0.2"
              transition={{ duration: 0.1 }}
            />

            {/* Function Curve */}
            <motion.path 
              d={pathData} 
              fill="none" 
              stroke="#2563eb" 
              strokeWidth="3"
              strokeLinecap="round"
              transition={{ duration: 0.1 }}
            />

            {/* Linf Peak Line */}
            <line x1="50" y1="50" x2="350" y2="50" stroke="#ef4444" strokeWidth="2" strokeDasharray="4 2" />
            <circle cx="350" cy="50" r="4" fill="#ef4444" />

            {/* Labels */}
            <text x="360" y="370" className="text-[10px] font-bold fill-slate-400">x=1</text>
            <text x="25" y="60" className="text-[10px] font-bold fill-slate-400">y=1</text>
          </svg>
        </div>

        <div className="flex-1 space-y-8">
          <div className="space-y-4">
             <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                   <Sliders className="w-4 h-4 text-slate-400" />
                   <span className="text-sm font-bold text-slate-900">{curr.exponent}</span>
                </div>
                <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-lg font-mono font-bold">n = {n}</span>
             </div>
             <input 
               type="range" min="1" max="100" step="1" 
               value={n} onChange={(e) => setN(parseInt(e.target.value))}
               className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
             />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 bg-blue-50 rounded-2xl border border-blue-100 shadow-sm">
               <p className="text-[10px] font-bold text-blue-600 uppercase tracking-widest mb-1">{curr.norm1}</p>
               <div className="flex items-baseline gap-2">
                 <span className="text-2xl font-mono font-bold text-blue-900">{l1Value.toFixed(4)}</span>
                 <span className="text-[10px] text-blue-400 font-bold">1/(n+1)</span>
               </div>
            </div>
            <div className="p-4 bg-red-50 rounded-2xl border border-red-100 shadow-sm">
               <p className="text-[10px] font-bold text-red-600 uppercase tracking-widest mb-1">{curr.normInf}</p>
               <div className="flex items-baseline gap-2">
                 <span className="text-2xl font-mono font-bold text-red-900">1.0000</span>
                 <span className="text-[10px] text-red-400 font-bold">max |xⁿ|</span>
               </div>
            </div>
          </div>

          <div className="p-5 bg-slate-900 rounded-3xl relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-1 h-full bg-blue-500" />
            <p className="text-slate-400 text-[10px] font-bold uppercase tracking-widest mb-3">Mathematical Divergence</p>
            <div className="space-y-4">
               <div className="flex justify-between items-center text-xs">
                  <span className="text-blue-400 font-bold">L1 Sequence:</span>
                  <span className="text-white font-mono">fₙ → 0</span>
               </div>
               <div className="flex justify-between items-center text-xs">
                  <span className="text-red-400 font-bold">L∞ Sequence:</span>
                  <span className="text-white font-mono">fₙ ↛ 0</span>
               </div>
            </div>
          </div>

          <div className="flex items-start gap-3 p-4 bg-indigo-50 rounded-2xl border border-indigo-100">
            <Info className="w-5 h-5 text-indigo-600 mt-1 flex-shrink-0" />
            <p className="text-indigo-900 text-sm leading-relaxed italic">
              {curr.hook}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FunctionNormVisualizer;
