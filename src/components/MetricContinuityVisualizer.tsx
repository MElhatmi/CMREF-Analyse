import React, { useState, useMemo } from 'react';
import { CheckCircle2, XCircle } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

type FunctionType = 'linear' | 'square';

const MetricContinuityVisualizer: React.FC = () => {
  const { t } = useLanguage();
  const [funcType, setFuncType] = useState<FunctionType>('linear');
  const [boxX, setBoxX] = useState(2); // Local center of the box
  
  const epsilon = 1.5;
  const alpha = 1;

  // Coordinate mapping
  const getX = (val: number) => 100 + val * 50;
  const getY = (val: number) => 250 - val * 20;

  const f = (x: number) => {
    return funcType === 'linear' ? x : (x * x) / 2;
  };

  const isBroken = useMemo(() => {
    // Check if function breaks the top/bottom boundary within the alpha width
    const leftVal = f(boxX - alpha);
    const rightVal = f(boxX + alpha);
    const centerVal = f(boxX);
    
    const topLimit = centerVal + epsilon;
    const bottomLimit = centerVal - epsilon;
    
    return leftVal > topLimit || leftVal < bottomLimit || rightVal > topLimit || rightVal < bottomLimit;
  }, [funcType, boxX]);

  const generatePath = () => {
    const points = [];
    for (let x = 0; x <= 6; x += 0.1) {
      points.push(`${getX(x)},${getY(f(x))}`);
    }
    return points.join(' ');
  };

  return (
    <section className="bg-white py-24 px-6 overflow-hidden">
      <div className="mx-auto max-w-5xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-4 tracking-tight">{t('metrics.cont.viz.title')}</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            {t('metrics.cont.viz.subtitle')}
          </p>
        </div>

        <div className="bg-slate-50 rounded-[3rem] p-10 shadow-sm border border-slate-100 shadow-inner">
           <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
              
              <div className="lg:col-span-1 space-y-8">
                 <div>
                    <label className="text-xs font-bold text-slate-400 uppercase tracking-widest block mb-4">Function</label>
                    <div className="flex flex-col gap-2">
                       <button 
                         onClick={() => setFuncType('linear')}
                         className={`py-4 rounded-2xl font-bold transition-all border-2 flex items-center justify-center gap-2 ${funcType === 'linear' ? 'bg-blue-600 text-white border-blue-600 shadow-lg' : 'bg-white text-slate-500 border-slate-100'}`}
                       >
                         Linear f(x) = x
                       </button>
                       <button 
                         onClick={() => setFuncType('square')}
                         className={`py-4 rounded-2xl font-bold transition-all border-2 flex items-center justify-center gap-2 ${funcType === 'square' ? 'bg-indigo-600 text-white border-indigo-600 shadow-lg' : 'bg-white text-slate-500 border-slate-100'}`}
                       >
                         Square f(x) = x²
                       </button>
                    </div>
                 </div>

                 <div>
                    <label className="text-xs font-bold text-slate-400 uppercase tracking-widest block mb-4">Slide Position x = {boxX.toFixed(1)}</label>
                    <input 
                      type="range" min="1" max="5" step="0.1"
                      value={boxX} onChange={(e) => setBoxX(parseFloat(e.target.value))}
                      className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
                    />
                 </div>

                 <div className={`p-6 rounded-[2rem] border transition-colors ${isBroken ? 'bg-red-50 border-red-100 text-red-900' : 'bg-emerald-50 border-emerald-100 text-emerald-900'}`}>
                    <div className="flex gap-4">
                       {isBroken ? <XCircle className="w-6 h-6 shrink-0" /> : <CheckCircle2 className="w-6 h-6 shrink-0" />}
                       <div>
                          <h5 className="font-bold text-xs uppercase tracking-widest mb-1">{isBroken ? "Failed" : "Success"}</h5>
                          <p className="text-[10px] leading-relaxed opacity-80 italic">
                             {isBroken 
                               ? "At this slope, the fixed alpha is too wide. The output escapes the epsilon vertical limit. Universal alpha fails." 
                               : "The curve enters and exits through the sides. Error is bounded everywhere for this alpha."}
                          </p>
                       </div>
                    </div>
                 </div>
              </div>

              <div className="lg:col-span-2 flex justify-center">
                 <div className="w-full max-w-lg aspect-[16/12] bg-slate-900 rounded-[3rem] border border-slate-800 shadow-2xl relative overflow-hidden flex flex-col justify-center">
                    <svg viewBox="0 0 400 300" className="w-full h-full cursor-crosshair">
                       {/* Grid */}
                       <defs>
                          <pattern id="cont-grid" width="20" height="20" patternUnits="userSpaceOnUse">
                             <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#1e293b" strokeWidth="0.5"/>
                          </pattern>
                       </defs>
                       <rect width="100%" height="100%" fill="url(#cont-grid)" />
                       
                       {/* Axis */}
                       <line x1="40" y1="250" x2="380" y2="250" stroke="#475569" strokeWidth="1" />
                       <line x1="40" y1="20" x2="40" y2="280" stroke="#475569" strokeWidth="1" />

                       {/* Function Path */}
                       <polyline 
                         points={generatePath()}
                         fill="none" stroke="#475569" strokeWidth="1" strokeDasharray="4 2"
                       />

                       {/* The Box (Epsilon-Alpha) */}
                       <g transform={`translate(${getX(boxX) - alpha * 50}, ${getY(f(boxX) + epsilon)})`}>
                          <rect 
                            width={alpha * 100} height={epsilon * 40}
                            fill={isBroken ? "rgba(239, 68, 68, 0.15)" : "rgba(16, 185, 129, 0.15)"}
                            stroke={isBroken ? "#ef4444" : "#10b981"}
                            strokeWidth="2"
                            rx="4"
                          />
                          {/* Inner labels */}
                          <text x="5" y="15" className={`text-[8px] font-bold ${isBroken ? 'fill-red-400' : 'fill-emerald-400'} uppercase tracking-tighter`}>2\u03B5 Window</text>
                       </g>

                       {/* Indicators */}
                       <circle cx={getX(boxX)} cy={getY(f(boxX))} r="4" fill="white" className="shadow-lg" />
                    </svg>
                 </div>
              </div>
           </div>
        </div>
      </div>
    </section>
  );
};

export default MetricContinuityVisualizer;
