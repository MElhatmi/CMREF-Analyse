import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Search, ZoomIn, Info } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const MetricDensityZoom: React.FC = () => {
  const { t } = useLanguage();
  const [zoom, setZoom] = useState(1); // 1 to 1000
  const target = Math.sqrt(2);
  
  const viewportWidth = 1 / zoom;

  const rationals = useMemo(() => {
    const list: { p: number, q: number, x: number }[] = [];
    const minX = target - viewportWidth;
    const maxX = target + viewportWidth;
    
    // Iterate through denominators to find rationals in view
    // Adjust precision based on zoom
    const maxQ = Math.min(200, Math.floor(zoom * 50)); 
    
    for (let q = 1; q <= maxQ; q++) {
       const startP = Math.floor(minX * q);
       const endP = Math.ceil(maxX * q);
       
       for (let p = startP; p <= endP; p++) {
          const val = p / q;
          if (val >= minX && val <= maxX) {
             list.push({ p, q, x: val });
          }
       }
    }
    // Deduplicate and limit
    return list.sort((a, b) => b.q - a.q).slice(0, 100);
  }, [zoom, target, viewportWidth]);

  return (
    <section className="bg-slate-50 py-24 px-6 overflow-hidden">
      <div className="mx-auto max-w-5xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-4 tracking-tight">{t('metrics.neigh.viz.title')}</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            {t('metrics.neigh.viz.subtitle')}
          </p>
        </div>

        <div className="bg-white rounded-[3rem] p-10 shadow-sm border border-slate-200">
           <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
              
              <div className="lg:col-span-1 space-y-8">
                 <div className="p-8 bg-blue-50 rounded-[2.5rem] border border-blue-100 shadow-inner">
                    <label className="text-xs font-bold text-blue-600 uppercase tracking-widest block mb-6 flex items-center gap-2">
                       <ZoomIn className="w-4 h-4" /> Magnification: {zoom.toFixed(1)}x
                    </label>
                    <input 
                      type="range" min="1" max="1000" step="1"
                      value={zoom} onChange={(e) => setZoom(parseFloat(e.target.value))}
                      className="w-full h-2 bg-blue-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
                    />
                    <div className="flex justify-between mt-4 text-[10px] font-bold text-blue-400 font-mono">
                       <span>1x</span>
                       <span>1000x</span>
                    </div>
                 </div>

                 <div className="bg-slate-900 rounded-[2.5rem] p-8 text-white">
                    <div className="flex gap-4 items-start">
                       <Info className="w-6 h-6 text-indigo-400 shrink-0" />
                       <p className="text-xs text-slate-400 leading-relaxed italic">
                         "Notice how, no matter how microscopically close you zoom, new rational fractions dynamically appear to fill every gap. You can never find an empty gap. This visually proves that ℚ is dense in ℝ."
                       </p>
                    </div>
                 </div>
              </div>

              <div className="lg:col-span-2 space-y-8">
                 <div className="bg-slate-900 rounded-[3rem] p-12 h-64 relative flex items-center shadow-2xl overflow-hidden">
                    <div className="relative h-px bg-slate-700 w-full">
                       {/* The Target (Irrational sqrt 2) */}
                       <div className="absolute left-1/2 -translate-x-1/2 flex flex-col items-center z-20">
                          <div className="h-20 w-0.5 bg-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.8)] -translate-y-10" />
                          <div className="w-3 h-3 bg-white rounded-full border-2 border-blue-600 -translate-y-1.5" />
                          <span className="mt-4 text-xs font-bold text-blue-400 font-mono italic">√2</span>
                       </div>

                       {/* Rationals Pins */}
                       {rationals.map((r) => {
                          const relX = (r.x - target) / viewportWidth; // -1 to 1
                          const screenX = (relX + 1) / 2 * 100; // 0 to 100%
                          
                          if (screenX < 0 || screenX > 100) return null;

                          return (
                             <motion.div 
                               key={`${r.p}/${r.q}`}
                               initial={{ opacity: 0, scale: 0 }}
                               animate={{ opacity: 1, scale: 1 }}
                               className="absolute flex flex-col items-center"
                               style={{ left: `${screenX}%` }}
                             >
                                <div 
                                  className="h-6 w-px bg-indigo-500 opacity-40 -translate-y-3"
                                  style={{ height: `${20 + (100 / r.q)}px` }}
                                />
                                <div className="w-1.5 h-1.5 bg-indigo-400 rounded-full" />
                                {zoom < 10 && (
                                   <span className="absolute top-full mt-2 text-[8px] font-mono text-slate-500 whitespace-nowrap bg-slate-900 px-1">
                                      {r.p}/{r.q}
                                   </span>
                                )}
                             </motion.div>
                          );
                       })}

                       <div className="absolute bottom-4 left-4 text-[10px] font-mono text-slate-500 uppercase tracking-widest">
                          Viewport: [{ (target - viewportWidth).toFixed(5) }, { (target + viewportWidth).toFixed(5) }]
                       </div>
                    </div>
                 </div>

                 <div className="p-6 bg-indigo-50 rounded-2xl border border-indigo-100 flex items-center gap-4">
                    <Search className="w-6 h-6 text-indigo-600" />
                    <p className="text-xs text-indigo-900 leading-relaxed font-medium">
                       Countable Skeleton: There are only <span className="font-bold">{rationals.length}</span> visible rationals in this specific window, but they are guaranteed to exist at <strong>any</strong> zoom level.
                    </p>
                 </div>
              </div>
           </div>
        </div>
      </div>
    </section>
  );
};

export default MetricDensityZoom;
