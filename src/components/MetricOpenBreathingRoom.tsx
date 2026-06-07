import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { MousePointer2, Box } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const MetricOpenBreathingRoom: React.FC = () => {
  const { t } = useLanguage();
  const [isClosed, setIsClosed] = useState(false);
  const [probe, setProbe] = useState({ x: 200, y: 150 });
  const [radius, setRadius] = useState(20);
  
  const svgRef = useRef<SVGSVGElement>(null);
  
  // Set A bounds (Square from 100 to 300)
  const xMin = 100, xMax = 300, yMin = 50, yMax = 250;

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!svgRef.current) return;
    const rect = svgRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 400;
    const y = ((e.clientY - rect.top) / rect.height) * 300;
    
    // Constraint probe inside square for visualization
    const clampedX = Math.max(xMin, Math.min(xMax, x));
    const clampedY = Math.max(yMin, Math.min(yMax, y));
    
    setProbe({ x: clampedX, y: clampedY });

    // Calculate distance to nearest boundary
    const distL = clampedX - xMin;
    const distR = xMax - clampedX;
    const distT = clampedY - yMin;
    const distB = yMax - clampedY;
    
    const minD = Math.min(distL, distR, distT, distB);
    setRadius(Math.max(0, minD));
  };

  const isInterior = radius > 0.5;

  return (
    <section className="bg-white py-24 px-6 overflow-hidden">
      <div className="mx-auto max-w-5xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-4 tracking-tight">{t('metrics.open.viz.title')}</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            {t('metrics.open.viz.subtitle')}
          </p>
        </div>

        <div className="bg-slate-50 rounded-[3rem] p-10 shadow-sm border border-slate-100 shadow-inner">
           <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
              
              <div className="lg:col-span-1 space-y-8">
                 <div>
                    <label className="text-xs font-bold text-slate-400 uppercase tracking-widest block mb-4">Set Geometry</label>
                    <div className="flex flex-col gap-2">
                       <button 
                        onClick={() => setIsClosed(false)}
                        className={`py-4 rounded-2xl font-bold transition-all border-2 flex items-center justify-center gap-2 ${!isClosed ? 'bg-blue-600 text-white border-blue-600 shadow-lg shadow-blue-100' : 'bg-white text-slate-500 border-slate-100 hover:border-blue-200'}`}
                       >
                         Open Square (]x, y[)
                       </button>
                       <button 
                        onClick={() => setIsClosed(true)}
                        className={`py-4 rounded-2xl font-bold transition-all border-2 flex items-center justify-center gap-2 ${isClosed ? 'bg-slate-900 text-white border-slate-900 shadow-lg' : 'bg-white text-slate-500 border-slate-100 hover:border-slate-300'}`}
                       >
                         Closed Square ([x, y])
                       </button>
                    </div>
                 </div>

                 <div className={`p-6 rounded-[2rem] border transition-all ${isInterior ? 'bg-emerald-50 border-emerald-100 text-emerald-900' : 'bg-red-50 border-red-100 text-red-900'}`}>
                    <div className="flex gap-4">
                       <MousePointer2 className={`w-6 h-6 shrink-0 ${isInterior ? 'text-emerald-600' : 'text-red-600'}`} />
                       <div>
                          <h5 className="font-bold text-xs uppercase tracking-widest mb-1">{isInterior ? "Interior Point" : "Boundary Hit"}</h5>
                          <p className="text-[10px] leading-relaxed opacity-80 italic">
                             {isInterior 
                               ? `Found breathing room! Radius r = ${(radius/20).toFixed(2)}. The ball fits inside.` 
                               : "You hit the solid border! The only ball that fits has radius 0. This point has no breathing room."}
                          </p>
                       </div>
                    </div>
                 </div>

                 <div className="bg-slate-900 rounded-[2.5rem] p-8 text-white relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-4 opacity-10">
                       <Box className="w-12 h-12" />
                    </div>
                    <h5 className="text-[10px] font-bold text-blue-400 uppercase tracking-widest mb-4">Verdict</h5>
                    <p className="text-xs leading-relaxed text-slate-400">
                       {!isClosed 
                         ? "In an Open Square, the border points are NOT in the set. You can get arbitrarily close, but you always have room to inflate a ball. THE SET IS OPEN."
                         : "In a Closed Square, the border points ARE in the set. Since they have r=0, they fail the openness test. THE SET IS NOT OPEN."}
                    </p>
                 </div>
              </div>

              <div className="lg:col-span-2 flex justify-center">
                 <div className="w-full max-w-lg aspect-square bg-white rounded-[4rem] border border-slate-200 shadow-2xl relative overflow-hidden flex flex-col justify-center">
                    <svg 
                      ref={svgRef}
                      viewBox="0 0 400 300" 
                      className="w-full h-full cursor-crosshair"
                      onMouseMove={handleMouseMove}
                    >
                       {/* Grid */}
                       <defs>
                          <pattern id="room-grid" width="20" height="20" patternUnits="userSpaceOnUse">
                             <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#f1f5f9" strokeWidth="1"/>
                          </pattern>
                       </defs>
                       <rect width="100%" height="100%" fill="url(#room-grid)" />
                       
                       {/* The Square Set A */}
                       <rect 
                        x={xMin} y={yMin} width={xMax - xMin} height={yMax - yMin}
                        fill="rgba(59, 130, 246, 0.05)"
                        stroke={isClosed ? "#1e293b" : "#3b82f6"}
                        strokeWidth={isClosed ? 4 : 2}
                        strokeDasharray={isClosed ? "0" : "8 4"}
                        className="transition-all duration-300"
                       />
                       <text x={xMin + 10} y={yMin + 25} className="text-2xl font-serif italic fill-blue-500/20 uppercase">A</text>

                       {/* The Probe Ball */}
                       <motion.circle 
                          cx={probe.x} cy={probe.y} r={radius}
                          fill="rgba(16, 185, 129, 0.15)"
                          stroke="#10b981"
                          strokeWidth="1.5"
                          strokeDasharray="4 2"
                       />

                       {/* Probe center */}
                       <circle cx={probe.x} cy={probe.y} r="3" fill="#1e293b" />
                       
                       {/* Radius Line */}
                       {radius > 2 && (
                         <g>
                           <line x1={probe.x} y1={probe.y} x2={probe.x + radius} y2={probe.y} stroke="#10b981" strokeWidth="1" />
                           <text x={probe.x + radius/2} y={probe.y - 5} className="text-[8px] font-bold fill-emerald-600">r</text>
                         </g>
                       )}

                       <text x="20" y="40" className="text-[10px] font-bold fill-slate-300 uppercase tracking-widest italic">Testing Interior Points</text>
                    </svg>
                 </div>
              </div>
           </div>
        </div>
      </div>
    </section>
  );
};

export default MetricOpenBreathingRoom;
