import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { Info, Box } from 'lucide-react';

const BilinearScalingVisualizer: React.FC = () => {
  const { language } = useLanguage();
  
  const [alpha, setAlpha] = useState(1.5); // scale for vector x
  const [beta, setBeta] = useState(1.2);  // scale for vector y

  const content = {
    EN: {
      title: "Interactive Visualizer: Bilinear Scaling Simulator",
      subtitle: "Verify the bounding inequality ||f(x,y)|| \\le K ||x|| ||y|| using the inner product (where K=1).",
      scaleX: "Scale Vector x (\u03B1)",
      scaleY: "Scale Vector y (\u03B2)",
      calcNormX: "||\u03B1x||",
      calcNormY: "||\u03B2y||",
      calcMax: "Bounding Limit",
      calcActual: "Actual Output",
      hook: "Scale the vectors independently using the sliders. Notice that the actual output (the inner product) never exceeds the multiplication of their lengths. Because the output is strictly boxed in by K \u00B7 ||x|| \u00B7 ||y||, the bilinear map is perfectly stable and continuous!"
    },
    FR: {
      title: "Visualiseur Interactif : Simulateur de Mise \u00E0 l'\u00C9chelle Bilin\u00E9aire",
      subtitle: "V\u00E9rifiez l'in\u00E9galit\u00E9 de bornitude ||f(x,y)|| \u2264 K ||x|| ||y|| en utilisant le produit scalaire (o\u00F9 K=1).",
      scaleX: "Mise \u00E0 l'\u00E9chelle x (\u03B1)",
      scaleY: "Mise \u00E0 l'\u00E9chelle y (\u03B2)",
      calcNormX: "||\u03B1x||",
      calcNormY: "||\u03B2y||",
      calcMax: "Limite de Bornitude",
      calcActual: "Sortie R\u00E9elle",
      hook: "Modifiez l'\u00E9chelle des vecteurs ind\u00E9pendamment avec les curseurs. Remarquez que la sortie r\u00E9elle (le produit scalaire) ne d\u00E9passe jamais le produit de leurs longueurs. Comme la sortie est strictement enferm\u00E9e par K \u00B7 ||x|| \u00B7 ||y||, l'application bilin\u00E9aire est parfaitement stable et continue !"
    }
  };

  const curr = content[language];

  // Base vectors
  const baseV1 = { x: 40, y: 0 };
  const baseV2 = { x: 30, y: -30 }; // angled

  const v1 = { x: baseV1.x * alpha, y: baseV1.y * alpha };
  const v2 = { x: baseV2.x * beta, y: baseV2.y * beta };

  const norm1 = Math.sqrt(v1.x * v1.x + v1.y * v1.y);
  const norm2 = Math.sqrt(v2.x * v2.x + v2.y * v2.y);
  const innerProduct = Math.abs(v1.x * v2.x + v1.y * v2.y);
  const limit = norm1 * norm2;

  return (
    <div className="my-12 bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden">
      <div className="p-8 border-b border-slate-100 bg-slate-50/50">
        <div className="flex items-center gap-3 mb-2">
          <Box className="w-5 h-5 text-indigo-600" />
          <h3 className="text-xl font-bold text-slate-900">{curr.title}</h3>
        </div>
        <p className="text-slate-600 text-sm">{curr.subtitle}</p>
      </div>

      <div className="flex flex-col lg:flex-row gap-8 p-8">
        <div className="relative">
          <svg viewBox="0 0 400 400" className="w-full max-w-[400px] h-auto bg-white rounded-2xl shadow-inner border border-slate-100">
            {/* Grid */}
            <defs>
              <pattern id="grid-bilinear-viz" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#f1f5f9" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="400" height="400" fill="url(#grid-bilinear-viz)" />
            
            {/* Axes */}
            <line x1="200" y1="0" x2="200" y2="400" stroke="#cbd5e1" strokeWidth="1" />
            <line x1="0" y1="200" x2="400" y2="200" stroke="#cbd5e1" strokeWidth="1" />

            <g transform="translate(200, 200)">
               {/* Product Area visualization */}
               <motion.rect 
                 x={0} y={-norm2} width={norm1} height={norm2} 
                 fill="rgba(139, 92, 246, 0.05)" 
                 stroke="#8b5cf6" strokeWidth="1" strokeDasharray="4 2"
                 animate={{ width: norm1, height: norm2, y: -norm2 }}
               />
               
               {/* Actual Inner Product Shadow */}
               {/* We project v2 onto v1 line (x-axis) */}
               <motion.rect 
                 x={0} y={-2} width={innerProduct / norm1} height={4}
                 fill="#ec4899" fillOpacity="0.3"
                 animate={{ width: innerProduct / norm1 }}
               />

               {/* Vectors */}
               <motion.line 
                 x1="0" y1="0" x2={v1.x} y2={-v1.y} 
                 stroke="#2563eb" strokeWidth="4" strokeLinecap="round"
                 animate={{ x2: v1.x, y2: -v1.y }}
               />
               <motion.line 
                 x1="0" y1="0" x2={v2.x} y2={-v2.y} 
                 stroke="#ef4444" strokeWidth="4" strokeLinecap="round"
                 animate={{ x2: v2.x, y2: -v2.y }}
               />
               
               <circle r="6" fill="#1e293b" />
            </g>

            {/* Labels */}
            <text x="320" y="190" className="text-[10px] font-bold fill-blue-600 uppercase tracking-widest">Vector x</text>
            <text x="240" y="80" className="text-[10px] font-bold fill-red-600 uppercase tracking-widest">Vector y</text>
          </svg>
        </div>

        <div className="flex-1 space-y-6">
          <div className="space-y-6">
            <div className="space-y-2">
               <div className="flex items-center justify-between">
                  <span className="text-sm font-bold text-slate-900">{curr.scaleX}</span>
                  <span className="px-2 py-0.5 bg-blue-100 text-blue-700 rounded text-xs font-mono font-bold">{alpha.toFixed(1)}x</span>
               </div>
               <input 
                 type="range" min="0.5" max="3" step="0.1" 
                 value={alpha} onChange={e => setAlpha(parseFloat(e.target.value))}
                 className="w-full h-1.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
               />
            </div>
            
            <div className="space-y-2">
               <div className="flex items-center justify-between">
                  <span className="text-sm font-bold text-slate-900">{curr.scaleY}</span>
                  <span className="px-2 py-0.5 bg-red-100 text-red-700 rounded text-xs font-mono font-bold">{beta.toFixed(1)}x</span>
               </div>
               <input 
                 type="range" min="0.5" max="3" step="0.1" 
                 value={beta} onChange={e => setBeta(parseFloat(e.target.value))}
                 className="w-full h-1.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-red-600"
               />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
             <div className="p-3 bg-blue-50 rounded-xl border border-blue-100">
                <p className="text-[8px] font-black text-blue-400 uppercase tracking-tighter mb-1">{curr.calcNormX}</p>
                <p className="text-lg font-mono font-bold text-blue-900">{(norm1/20).toFixed(2)}</p>
             </div>
             <div className="p-3 bg-red-50 rounded-xl border border-red-100">
                <p className="text-[8px] font-black text-red-400 uppercase tracking-tighter mb-1">{curr.calcNormY}</p>
                <p className="text-lg font-mono font-bold text-red-900">{(norm2/20).toFixed(2)}</p>
             </div>
          </div>

          <div className="p-5 bg-slate-900 rounded-2xl shadow-xl space-y-4">
             <div>
                <p className="text-[8px] font-black text-slate-400 uppercase tracking-widest mb-1">{curr.calcMax} (K=1)</p>
                <p className="text-xl font-mono font-bold text-white">{(limit/400).toFixed(3)}</p>
             </div>
             <div>
                <p className="text-[8px] font-black text-pink-400 uppercase tracking-widest mb-1">{curr.calcActual}</p>
                <div className="flex items-center gap-3">
                   <p className="text-xl font-mono font-bold text-pink-500">{(innerProduct/400).toFixed(3)}</p>
                   <div className="flex-1 h-2 bg-slate-800 rounded-full overflow-hidden">
                      <motion.div 
                        className="h-full bg-pink-500" 
                        animate={{ width: `${(innerProduct / limit) * 100}%` }}
                      />
                   </div>
                </div>
             </div>
          </div>

          <div className="p-4 bg-indigo-50 rounded-2xl border border-indigo-100 flex items-start gap-3">
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

export default BilinearScalingVisualizer;
