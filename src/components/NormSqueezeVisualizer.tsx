import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { CheckCircle2, XCircle, Info, Maximize2 } from 'lucide-react';

const NormSqueezeVisualizer: React.FC = () => {
  const { language } = useLanguage();
  const [alpha, setAlpha] = useState(0.5); // Inner trap
  const [beta, setBeta] = useState(2.0);  // Outer trap

  const content = {
    EN: {
      title: "Interactive Visualizer: The Nested Squeeze Theorem",
      subtitle: "Physically 'trap' the circular L2 norm between two scaled Linf squares to prove equivalence.",
      alphaLabel: "Inner Bound (\u03B1)",
      betaLabel: "Outer Bound (\u03B2)",
      statusTrapped: "Perfectly Trapped!",
      statusBroken: "Bound Broken!",
      hook: "Adjust the sliders to physically 'squeeze' the circular L2 norm between two scaled Linf squares. When you find the tightest fit (\u03B1=1 and \u03B2=\u221A2), you have visually proven that Linf \u2264 L2 \u2264 \u221A2 Linf in \u211D\u00B2!"
    },
    FR: {
      title: "Visualiseur Interactif : Le Théorème du Sandwich",
      subtitle: "Piégez physiquement la norme circulaire L2 entre deux carrés Linf mis à l'échelle pour prouver l'équivalence.",
      alphaLabel: "Borne Intérieure (\u03B1)",
      betaLabel: "Borne Extérieure (\u03B2)",
      statusTrapped: "Parfaitement Borné !",
      statusBroken: "Borne Rompue !",
      hook: "Ajustez les curseurs pour 'écraser' la norme circulaire L2 entre deux carrés Linf. En trouvant l'ajustement le plus serré (\u03B1=1 et \u03B2=\u221A2), vous prouvez visuellement que Linf \u2264 L2 \u2264 \u221A2 Linf dans \u211D\u00B2 !"
    }
  };

  const curr = content[language];

  const scale = 100;
  const isAlphaValid = alpha <= 1.001;
  const isBetaValid = beta >= 1.41; // sqrt(2) approx 1.414
  const isTrapped = isAlphaValid && isBetaValid;

  return (
    <div className="my-12 bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden">
      <div className="p-8 border-b border-slate-100 bg-slate-50/50">
        <div className="flex items-center gap-3 mb-2">
          <Maximize2 className="w-5 h-5 text-indigo-600" />
          <h3 className="text-xl font-bold text-slate-900">{curr.title}</h3>
        </div>
        <p className="text-slate-600 text-sm">{curr.subtitle}</p>
      </div>

      <div className="flex flex-col lg:flex-row gap-12 p-8">
        <div className="relative">
          <svg viewBox="0 0 400 400" className="w-full max-w-[400px] h-auto bg-white rounded-2xl shadow-inner border border-slate-100">
            {/* Grid */}
            <defs>
              <pattern id="grid-squeeze" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#f1f5f9" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="400" height="400" fill="url(#grid-squeeze)" />
            
            {/* Axes */}
            <line x1="200" y1="0" x2="200" y2="400" stroke="#cbd5e1" strokeWidth="1" />
            <line x1="0" y1="200" x2="400" y2="200" stroke="#cbd5e1" strokeWidth="1" />

            <g transform="translate(200, 200)">
               {/* Fixed L2 Circle */}
               <circle r={scale} fill="rgba(79, 70, 229, 0.05)" stroke="#4f46e5" strokeWidth="3" />
               
               {/* Outer Beta Trap (Linf square) */}
               <motion.rect 
                 x={-beta * scale} y={-beta * scale} 
                 width={beta * 2 * scale} height={beta * 2 * scale} 
                 fill="none" 
                 stroke={isBetaValid ? "#ef4444" : "#f87171"} 
                 strokeWidth={2} strokeDasharray="6 4"
                 animate={{ x: -beta * scale, y: -beta * scale, width: beta * 2 * scale, height: beta * 2 * scale }}
               />

               {/* Inner Alpha Trap (Linf square) */}
               <motion.rect 
                 x={-alpha * scale} y={-alpha * scale} 
                 width={alpha * 2 * scale} height={alpha * 2 * scale} 
                 fill="none" 
                 stroke={isAlphaValid ? "#10b981" : "#f43f5e"} 
                 strokeWidth={2} strokeDasharray="6 4"
                 animate={{ x: -alpha * scale, y: -alpha * scale, width: alpha * 2 * scale, height: alpha * 2 * scale }}
               />
               
               <circle r="6" fill="#1e293b" />
            </g>
          </svg>

          <div className="absolute top-4 left-4">
             <div className={`flex items-center gap-2 px-3 py-1.5 rounded-lg border backdrop-blur-md shadow-sm ${isTrapped ? 'bg-emerald-50 border-emerald-100 text-emerald-700' : 'bg-red-50 border-red-100 text-red-700'}`}>
                {isTrapped ? <CheckCircle2 className="w-4 h-4" /> : <XCircle className="w-4 h-4" />}
                <span className="text-[10px] font-black uppercase tracking-widest">{isTrapped ? curr.statusTrapped : curr.statusBroken}</span>
             </div>
          </div>
        </div>

        <div className="flex-1 space-y-8">
          <div className="space-y-6">
            <div className="space-y-2">
               <div className="flex items-center justify-between">
                  <span className="text-sm font-bold text-slate-900">{curr.alphaLabel}</span>
                  <span className={`px-2 py-0.5 rounded text-xs font-mono font-bold ${isAlphaValid ? 'bg-emerald-100 text-emerald-700' : 'bg-red-100 text-red-700'}`}>\u03B1 = {alpha.toFixed(2)}</span>
               </div>
               <input 
                 type="range" min="0.5" max="1.5" step="0.01" 
                 value={alpha} onChange={e => setAlpha(parseFloat(e.target.value))}
                 className={`w-full h-2 rounded-lg appearance-none cursor-pointer transition-colors ${isAlphaValid ? 'bg-emerald-200 accent-emerald-600' : 'bg-red-200 accent-red-600'}`}
               />
            </div>

            <div className="space-y-2">
               <div className="flex items-center justify-between">
                  <span className="text-sm font-bold text-slate-900">{curr.betaLabel}</span>
                  <span className={`px-2 py-0.5 rounded text-xs font-mono font-bold ${isBetaValid ? 'bg-red-100 text-red-700' : 'bg-emerald-100 text-emerald-700'}`}>\u03B2 = {beta.toFixed(2)}</span>
               </div>
               <input 
                 type="range" min="0.5" max="2.0" step="0.01" 
                 value={beta} onChange={e => setBeta(parseFloat(e.target.value))}
                 className={`w-full h-2 rounded-lg appearance-none cursor-pointer transition-colors ${isBetaValid ? 'bg-red-200 accent-red-600' : 'bg-emerald-200 accent-emerald-600'}`}
               />
            </div>
          </div>

          <div className="p-6 bg-slate-900 rounded-3xl relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-1 h-full bg-indigo-500" />
            <p className="text-indigo-300 text-[10px] font-bold uppercase tracking-widest mb-4 italic">Geometric Result</p>
            <div className="space-y-4">
               <div className="bg-black/20 p-3 rounded-xl">
                  <code className="text-white text-xs font-mono block mb-2">
                    {alpha.toFixed(2)} N\u221E(x) \u2264 N2(x) \u2264 {beta.toFixed(2)} N\u221E(x)
                  </code>
                  <p className="text-[10px] text-slate-500 font-bold uppercase">Condition for all x \u2208 \u211D\u00B2</p>
               </div>
               {alpha === 1 && Math.abs(beta - 1.41) < 0.02 && (
                 <motion.div 
                   initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}
                   className="p-3 bg-indigo-500 text-white rounded-xl text-center font-bold text-[10px] uppercase tracking-tighter"
                 >
                   Tightest Bound Found!
                 </motion.div>
               )}
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

export default NormSqueezeVisualizer;
