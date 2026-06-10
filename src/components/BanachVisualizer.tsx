import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { Activity, Sliders, Info, Zap, AlertCircle } from 'lucide-react';

const BanachVisualizer: React.FC = () => {
  const { language } = useLanguage();
  const [n, setN] = useState(1);

  const content = {
    EN: {
      title: "Interactive Visualizer: The Missing Limit Function",
      subtitle: "Observe the sequence f\u2099(x) = (2/\u03C0) arctan(nx). As n increases, the function approaches a discontinuous step function.",
      exponent: "Parameter n",
      spaceLabel: "Space: C([-1, 1], \u211D)",
      normLabel: "Norm: L1 (Area)",
      limitLabel: "Discontinuous Limit",
      hook: "Drag the slider to increase n. In the L1 norm, this sequence of perfectly continuous curves is a Cauchy sequence; the functions are clumping tighter and tighter together. But look at what they are converging to! The limit is a harsh, broken step function. Since the limit is NOT continuous, it falls outside our vector space. Therefore, C([-1, 1], \u211D) under the L1 norm is NOT a Banach space!"
    },
    FR: {
      title: "Visualiseur Interactif : La Fonction Limite Manquante",
      subtitle: "Observez la suite f\u2099(x) = (2/\u03C0) arctan(nx). \u00C0 mesure que n augmente, la fonction s'approche d'une fonction en escalier discontinue.",
      exponent: "Param\u00E8tre n",
      spaceLabel: "Espace : C([-1, 1], \u211D)",
      normLabel: "Norme : L1 (Aire)",
      limitLabel: "Limite Discontinue",
      hook: "Faites glisser le curseur pour augmenter n. Dans la norme L1, cette suite de courbes parfaitement continues est une suite de Cauchy ; les fonctions s'agglutinent de plus en plus. Mais regardez vers quoi elles convergent ! La limite est une fonction en escalier, bris\u00E9e. Comme la limite n'est PAS continue, elle sort de notre espace vectoriel. Par cons\u00E9quent, C([-1, 1], \u211D) sous la norme L1 n'est PAS un espace de Banach !"
    }
  };

  const curr = content[language];

  // Calculate points for the graph [-1, 1]
  // Center is (200, 200). x range [-1, 1] maps to [50, 350]. y range [-1.2, 1.2] maps to [350, 50]
  const points = useMemo(() => {
    const pts = [];
    const steps = 100;
    for (let i = 0; i <= steps; i++) {
      const x = (i / steps) * 2 - 1; // from -1 to 1
      const y = (2 / Math.PI) * Math.atan(n * x);
      pts.push({ x: 200 + x * 150, y: 200 - y * 120 });
    }
    return pts;
  }, [n]);

  const pathData = useMemo(() => {
    return `M ${points[0].x} ${points[0].y} ` + 
      points.slice(1).map(p => `L ${p.x} ${p.y}`).join(' ');
  }, [points]);

  return (
    <div className="my-12 bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden">
      <div className="p-8 border-b border-slate-100 bg-slate-50/50">
        <div className="flex items-center gap-3 mb-2">
          <Activity className="w-5 h-5 text-indigo-600" />
          <h3 className="text-xl font-bold text-slate-900">{curr.title}</h3>
        </div>
        <p className="text-slate-600 text-sm">{curr.subtitle}</p>
      </div>

      <div className="flex flex-col lg:flex-row gap-12 p-8">
        <div className="relative">
          <svg viewBox="0 0 400 400" className="w-full max-w-[400px] h-auto bg-white rounded-2xl shadow-inner border border-slate-100">
            {/* Grid */}
            <defs>
              <pattern id="grid-banach-viz" width="30" height="30" patternUnits="userSpaceOnUse">
                <path d="M 30 0 L 0 0 0 30" fill="none" stroke="#f1f5f9" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="400" height="400" fill="url(#grid-banach-viz)" />
            
            {/* Axes */}
            <line x1="50" y1="200" x2="350" y2="200" stroke="#cbd5e1" strokeWidth="1" />
            <line x1="200" y1="50" x2="200" y2="350" stroke="#cbd5e1" strokeWidth="1" />
            
            {/* Discontinuous Limit (Step Function) */}
            {n > 30 && (
              <g opacity={0.3}>
                <line x1="50" y1="320" x2="200" y2="320" stroke="#ef4444" strokeWidth="2" strokeDasharray="4 4" />
                <line x1="200" y1="80" x2="350" y2="80" stroke="#ef4444" strokeWidth="2" strokeDasharray="4 4" />
                <circle cx="200" cy="200" r="4" fill="none" stroke="#ef4444" />
              </g>
            )}

            {/* Function Curve */}
            <motion.path 
              d={pathData} 
              fill="none" 
              stroke="#4f46e5" 
              strokeWidth="3"
              strokeLinecap="round"
              transition={{ duration: 0.1 }}
            />

            {/* Labels */}
            <text x="355" y="215" className="text-[10px] font-bold fill-slate-400">x=1</text>
            <text x="45" y="215" className="text-[10px] font-bold fill-slate-400">x=-1</text>
            <text x="210" y="60" className="text-[10px] font-bold fill-slate-400">y=1</text>
            <text x="210" y="345" className="text-[10px] font-bold fill-slate-400">y=-1</text>
          </svg>
          
          {n > 40 && (
            <motion.div 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }}
              className="absolute top-1/4 right-8 bg-red-50 px-3 py-1.5 rounded-lg border border-red-100 flex items-center gap-2"
            >
              <AlertCircle className="w-3 h-3 text-red-600" />
              <span className="text-[10px] font-bold text-red-900 uppercase">{curr.limitLabel}</span>
            </motion.div>
          )}
        </div>

        <div className="flex-1 space-y-8">
          <div className="space-y-4">
             <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-slate-900 font-bold text-sm">
                   <Sliders className="w-4 h-4 text-indigo-500" />
                   {curr.exponent}
                </div>
                <span className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-lg font-mono font-bold">n = {n}</span>
             </div>
             <input 
               type="range" min="1" max="50" step="1" 
               value={n} onChange={(e) => setN(parseInt(e.target.value))}
               className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-indigo-600"
             />
          </div>

          <div className="grid grid-cols-1 gap-4">
             <div className="p-4 bg-indigo-50 rounded-2xl border border-indigo-100">
                <p className="text-[10px] font-bold text-indigo-600 uppercase tracking-widest mb-1">{curr.spaceLabel}</p>
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{curr.normLabel}</p>
             </div>
             
             <div className="p-5 bg-slate-900 rounded-3xl relative overflow-hidden group">
                <div className="absolute top-0 left-0 w-1 h-full bg-indigo-500" />
                <p className="text-indigo-300 text-[10px] font-bold uppercase tracking-widest mb-3 italic">Completeness Status</p>
                <div className="flex items-center gap-3">
                   <div className={`p-2 rounded-xl ${n > 30 ? 'bg-red-500/20 text-red-400' : 'bg-amber-500/20 text-amber-400'}`}>
                      <Zap className="w-5 h-5" />
                   </div>
                   <div>
                      <p className="text-white font-bold text-sm">Non-Complete Space</p>
                      <p className="text-slate-400 text-xs">Limit \u2209 Space</p>
                   </div>
                </div>
             </div>
          </div>

          <div className="p-5 bg-indigo-50 rounded-2xl border border-indigo-100 flex items-start gap-3">
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

export default BanachVisualizer;
