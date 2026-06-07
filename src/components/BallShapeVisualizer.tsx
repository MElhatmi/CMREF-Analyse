import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Sliders, ChevronDown } from 'lucide-react';
import { InlineMath } from './Math';
import { useLanguage } from '../context/LanguageContext';

type MetricType = 'euclidean' | 'manhattan' | 'maximum';

const BallShapeVisualizer: React.FC = () => {
  const { t } = useLanguage();
  const [metric, setMetric] = useState<MetricType>('euclidean');
  const [radius, setRadius] = useState(5);

  const equations = {
    euclidean: "x^2 + y^2 < r^2",
    manhattan: "|x| + |y| < r",
    maximum: "\\max(|x|, |y|) < r"
  };

  const getBallPath = () => {
    // radius is 1-10, scale to SVG 400x400 (center 200,200, grid 20px per unit)
    const r = radius * 20;
    const cx = 200;
    const cy = 200;

    switch(metric) {
      case 'manhattan':
        // Diamond: (r,0), (0,r), (-r,0), (0,-r)
        return `M ${cx + r} ${cy} L ${cx} ${cy - r} L ${cx - r} ${cy} L ${cx} ${cy + r} Z`;
      case 'maximum':
        // Square: corners at (+-r, +-r)
        return `M ${cx - r} ${cy - r} L ${cx + r} ${cy - r} L ${cx + r} ${cy + r} L ${cx - r} ${cy + r} Z`;
      default:
        // Euclidean circle
        return `M ${cx} ${cy - r} A ${r} ${r} 0 1 1 ${cx} ${cy + r} A ${r} ${r} 0 1 1 ${cx} ${cy - r}`;
    }
  };

  return (
    <section className="bg-white py-24 px-6 overflow-hidden">
      <div className="mx-auto max-w-5xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-4 tracking-tight">{t('metrics.balls.viz.title')}</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            {t('metrics.balls.viz.subtitle')}
          </p>
        </div>

        <div className="bg-slate-50 rounded-[3rem] p-10 shadow-sm border border-slate-100 shadow-inner">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
            
            <div className="lg:col-span-1 space-y-8">
               <div className="space-y-6">
                  <div>
                    <label className="text-xs font-bold text-slate-400 uppercase tracking-widest block mb-4 flex items-center gap-2">
                      <Sliders className="w-3 h-3 text-blue-500" /> Radius r = {radius}
                    </label>
                    <input 
                      type="range" min="1" max="10" step="0.5"
                      value={radius} onChange={(e) => setRadius(parseFloat(e.target.value))}
                      className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-bold text-slate-400 uppercase tracking-widest block mb-4">Universe Metric</label>
                    <div className="relative">
                      <select 
                        value={metric}
                        onChange={(e) => setMetric(e.target.value as MetricType)}
                        className="w-full appearance-none bg-white border border-slate-200 rounded-2xl px-6 py-4 font-bold text-slate-900 cursor-pointer focus:ring-2 focus:ring-blue-500 outline-none shadow-sm transition-all"
                      >
                        <option value="euclidean">Euclidean (d₂)</option>
                        <option value="manhattan">Manhattan (d₁)</option>
                        <option value="maximum">Maximum (d∞)</option>
                      </select>
                      <ChevronDown className="absolute right-6 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 pointer-events-none" />
                    </div>
                  </div>
               </div>

               <div className="p-8 bg-slate-900 rounded-[2.5rem] text-white shadow-xl relative overflow-hidden">
                  <div className="absolute top-0 right-0 p-4 opacity-10">
                     <CircleIcon />
                  </div>
                  <h4 className="text-[10px] font-bold text-blue-400 uppercase tracking-[0.2em] mb-4">Mathematical Constraint</h4>
                  <div className="bg-white/5 p-4 rounded-xl border border-white/10 flex justify-center items-center min-h-[60px]">
                     <InlineMath math={equations[metric].replace('r', radius.toString())} />
                  </div>
               </div>
            </div>

            <div className="lg:col-span-2 flex justify-center">
               <div className="w-full max-w-lg aspect-square bg-white rounded-[4rem] border border-slate-200 shadow-2xl relative overflow-hidden">
                  <svg viewBox="0 0 400 400" className="w-full h-full">
                     {/* Grid */}
                     <defs>
                        <pattern id="ball-grid" width="20" height="20" patternUnits="userSpaceOnUse">
                           <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#f1f5f9" strokeWidth="1"/>
                        </pattern>
                     </defs>
                     <rect width="100%" height="100%" fill="url(#ball-grid)" />
                     
                     {/* Axes */}
                     <line x1="200" y1="0" x2="200" y2="400" stroke="#cbd5e1" strokeWidth="1" />
                     <line x1="0" y1="200" x2="400" y2="200" stroke="#cbd5e1" strokeWidth="1" />

                     {/* The Ball */}
                     <motion.path 
                        animate={{ d: getBallPath() }}
                        transition={{ duration: 0.5, ease: "anticipate" }}
                        fill="rgba(59, 130, 246, 0.15)"
                        stroke="#3b82f6"
                        strokeWidth="2"
                        strokeDasharray="6 3"
                     />

                     {/* Center point */}
                     <circle cx="200" cy="200" r="4" fill="#1e293b" />
                     <text x="210" y="215" className="text-xs font-bold fill-slate-900 italic">a</text>

                     <text x="20" y="40" className="text-[10px] font-bold fill-slate-300 uppercase tracking-widest">Target Open Ball B(a, r)</text>
                  </svg>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const CircleIcon = () => (
  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-500">
    <circle cx="12" cy="12" r="10" />
  </svg>
);

export default BallShapeVisualizer;
