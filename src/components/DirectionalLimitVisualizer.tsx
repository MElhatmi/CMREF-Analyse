import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { Sliders, Activity, Info, AlertTriangle } from 'lucide-react';

const DirectionalLimitVisualizer: React.FC = () => {
  const { language } = useLanguage();
  const [theta, setTheta] = useState(0); // Angle in degrees

  const content = {
    EN: {
      title: "Interactive Visualizer: The Directional Approach",
      subtitle: "Why h(x, y) = xy / (x² + y²) fails to have a limit at the origin.",
      angleLabel: "Approach Angle (θ)",
      pathLabel: "Approach Path:",
      limitLabel: "Limit along this path:",
      hook: "Drag the slider to change your approach path toward the origin. Notice how the height z changes depending on your angle of attack. Because the height differs across infinite paths, the function is utterly torn apart at the origin. No single limit exists!",
      analysis: "For a limit to exist, every possible path must lead to the same height. Here, the heights range from -0.5 to 0.5."
    },
    FR: {
      title: "Visualiseur Interactif : L'Approche Directionnelle",
      subtitle: "Pourquoi h(x, y) = xy / (x² + y²) n'a pas de limite à l'origine.",
      angleLabel: "Angle d'approche (θ)",
      pathLabel: "Chemin d'approche :",
      limitLabel: "Limite le long de ce chemin :",
      hook: "Faites glisser le curseur pour changer votre chemin d'approche vers l'origine. Remarquez comment la hauteur z change selon votre angle d'attaque. Comme la hauteur diffère sur une infinité de chemins, la fonction est littéralement déchirée à l'origine. Aucune limite unique n'existe !",
      analysis: "Pour qu'une limite existe, tout chemin possible doit mener à la même hauteur. Ici, les hauteurs varient de -0,5 à 0,5."
    }
  };

  const curr = content[language];

  // Limit value: h(r cos t, r sin t) = (r² cos t sin t) / (r²) = cos t sin t = 0.5 sin(2t)
  const rad = (theta * Math.PI) / 180;
  const limitValue = Math.sin(rad) * Math.cos(rad);
  const slope = Math.tan(rad);

  return (
    <div className="my-12 bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden">
      <div className="p-8 border-b border-slate-100 bg-slate-50/50">
        <div className="flex items-center gap-3 mb-2">
          <Activity className="w-5 h-5 text-purple-600" />
          <h3 className="text-xl font-bold text-slate-900">{curr.title}</h3>
        </div>
        <p className="text-slate-600 text-sm">{curr.subtitle}</p>
      </div>

      <div className="flex flex-col lg:flex-row items-stretch gap-8 p-8">
        <div className="relative flex-1 flex flex-col items-center justify-center min-h-[300px] bg-slate-50 rounded-2xl border border-slate-100 overflow-hidden">
           {/* Simple 3D bowtie projection simulation via SVG */}
           <svg viewBox="0 0 400 300" className="w-full h-full max-w-md">
             {/* Coordinate Grid in Perspective */}
             <g transform="translate(200, 150)">
               {/* XY Plane Axes */}
               <line x1="-150" y1="50" x2="150" y2="-50" stroke="#cbd5e1" strokeWidth="1" />
               <line x1="-150" y1="-50" x2="150" y2="50" stroke="#cbd5e1" strokeWidth="1" />
               
               {/* Vertical Z Axis */}
               <line x1="0" y1="-100" x2="0" y2="100" stroke="#94a3b8" strokeWidth="1" strokeDasharray="2 2" />
               <text x="5" y="-105" className="text-[10px] font-bold fill-slate-400">z</text>

               {/* Bowtie Surface Simulation (Static parts for context) */}
               <path d="M -100 0 L 100 0" stroke="#e2e8f0" strokeWidth="1" />
               
               {/* The Dynamic Approach Path on XY Plane */}
               <motion.line 
                 x1={-150 * Math.cos(rad)} 
                 y1={50 * Math.cos(rad) + 40 * Math.sin(rad)} 
                 x2={150 * Math.cos(rad)} 
                 y2={-50 * Math.cos(rad) - 40 * Math.sin(rad)} 
                 stroke="#8b5cf6" strokeWidth="3" strokeOpacity="0.3"
               />

               {/* The Limit Height Projection (Dynamic) */}
               <motion.g animate={{ y: -limitValue * 150 }}>
                 <line x1="-150" y1="0" x2="150" y2="0" stroke="#ec4899" strokeWidth="4" strokeLinecap="round" className="drop-shadow-lg" />
                 <circle r="4" fill="#ec4899" />
                 <text x="160" y="4" className="text-[10px] font-bold fill-pink-600 uppercase tracking-widest">Height z</text>
               </motion.g>

               {/* Arrow Indicators */}
               <path d="M 0 0 L 10 10 M 0 0 L -10 10" stroke="#94a3b8" strokeWidth="1" fill="none" transform={`translate(0, ${-limitValue * 150})`} />
             </g>
           </svg>
           
           <div className="absolute top-4 left-4 bg-white/80 backdrop-blur-sm p-3 rounded-xl border border-slate-200 shadow-sm">
             <div className="flex items-center gap-2 mb-1">
                <AlertTriangle className="w-3 h-3 text-pink-500" />
                <span className="text-[8px] font-black text-slate-400 uppercase tracking-tighter">Singularity Analysis</span>
             </div>
             <p className="text-[10px] font-bold text-slate-700">h(0,0) is undefined</p>
           </div>
        </div>

        <div className="flex-1 space-y-6">
          <div className="space-y-4">
             <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-slate-900 font-bold text-sm">
                   <Sliders className="w-4 h-4 text-purple-500" />
                   {curr.angleLabel}
                </div>
                <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-lg font-mono font-bold">{theta}°</span>
             </div>
             <input 
               type="range" min="0" max="180" step="1" 
               value={theta} onChange={(e) => setTheta(parseInt(e.target.value))}
               className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-purple-600"
             />
          </div>

          <div className="grid grid-cols-1 gap-4">
             <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200">
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">{curr.pathLabel}</p>
                <p className="text-xl font-mono font-bold text-slate-900">
                  {Math.abs(theta - 90) < 1 ? "x = 0" : `y = ${slope.toFixed(2)}x`}
                </p>
             </div>
             
             <div className="p-4 bg-purple-900 rounded-2xl shadow-xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-16 h-16 bg-white/5 rounded-full -translate-y-8 translate-x-8" />
                <p className="text-[10px] font-bold text-purple-300 uppercase tracking-widest mb-1">{curr.limitLabel}</p>
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl font-mono font-bold text-white">{limitValue.toFixed(3)}</span>
                  <span className="text-purple-300 text-xs font-bold">z-axis</span>
                </div>
                
                {/* Visual Gauge */}
                <div className="mt-4 h-2 bg-purple-950 rounded-full overflow-hidden border border-purple-800/50">
                  <motion.div 
                    className="h-full bg-pink-500 shadow-[0_0_10px_rgba(236,72,153,0.5)]"
                    animate={{ width: `${((limitValue + 0.5)) * 100}%` }}
                  />
                </div>
                <div className="mt-2 flex justify-between text-[8px] font-bold text-purple-400 uppercase">
                  <span>-0.5</span>
                  <span>0.0</span>
                  <span>+0.5</span>
                </div>
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

export default DirectionalLimitVisualizer;
