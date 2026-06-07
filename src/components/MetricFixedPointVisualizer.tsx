import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, RefreshCw, Sliders, Info, Target } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const MetricFixedPointVisualizer: React.FC = () => {
  const { t } = useLanguage();
  const [x0, setX0] = useState(2.5);
  const [iterates, setIterates] = useState<number[]>([]);
  const [status, setStatus] = useState<'idle' | 'running' | 'finished'>('idle');

  // f(x) = cos(x)
  const f = (x: number) => Math.cos(x);

  // Coordinate mapping (Range: -3 to 3 on both axes)
  const getX = (val: number) => 200 + val * 60;
  const getY = (val: number) => 150 - val * 60;

  const handleIterate = () => {
    if (status === 'running') return;
    setStatus('running');
    
    let currentX = x0;
    const newIterates = [currentX];
    
    let i = 0;
    const interval = setInterval(() => {
      if (i >= 15) {
        clearInterval(interval);
        setStatus('finished');
        return;
      }
      currentX = f(currentX);
      newIterates.push(currentX);
      setIterates([...newIterates]);
      i++;
    }, 200);
  };

  const reset = () => {
    setIterates([]);
    setStatus('idle');
  };

  const curvePoints = useMemo(() => {
    const pts = [];
    for (let x = -3; x <= 3; x += 0.1) {
      pts.push(`${getX(x)},${getY(f(x))}`);
    }
    return pts.join(' ');
  }, []);

  const cobwebPath = useMemo(() => {
    if (iterates.length === 0) return "";
    let d = `M ${getX(iterates[0])} ${getY(0)}`;
    for (let i = 0; i < iterates.length - 1; i++) {
      const xCur = iterates[i];
      const xNext = iterates[i+1];
      // Vertical to curve
      d += ` L ${getX(xCur)} ${getY(xNext)}`;
      // Horizontal to y=x
      d += ` L ${getX(xNext)} ${getY(xNext)}`;
    }
    return d;
  }, [iterates]);

  return (
    <section className="bg-slate-50 py-24 px-6 overflow-hidden">
      <div className="mx-auto max-w-5xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-4 tracking-tight">{t('metrics.complete.viz.title')}</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            {t('metrics.complete.viz.subtitle')}
          </p>
        </div>

        <div className="bg-white rounded-[3rem] p-10 shadow-sm border border-slate-200 shadow-inner">
           <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
              
              <div className="lg:col-span-1 space-y-8">
                 <div>
                    <label className="text-xs font-bold text-slate-400 uppercase tracking-widest block mb-4 flex items-center gap-2">
                       <Sliders className="w-4 h-4 text-blue-500" /> Start Point x₀: {x0.toFixed(2)}
                    </label>
                    <input 
                      type="range" min="-3" max="3" step="0.1"
                      value={x0} onChange={(e) => { setX0(parseFloat(e.target.value)); reset(); }}
                      className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
                    />
                 </div>

                 <div className="flex flex-col gap-2">
                    <button 
                      onClick={handleIterate}
                      disabled={status === 'running'}
                      className="w-full bg-indigo-600 hover:bg-indigo-700 disabled:opacity-50 text-white py-4 rounded-2xl font-bold transition-all shadow-lg flex items-center justify-center gap-3"
                    >
                      {status === 'running' ? <RefreshCw className="w-5 h-5 animate-spin" /> : <Play className="w-5 h-5" />}
                      Start Iteration
                    </button>
                    <button 
                      onClick={reset}
                      className="w-full bg-white border border-slate-200 text-slate-500 py-4 rounded-2xl font-bold hover:bg-slate-50 transition-all"
                    >
                      Reset
                    </button>
                 </div>

                 <div className="bg-slate-900 rounded-[2.5rem] p-8 text-white">
                    <div className="flex gap-4 items-start">
                       <Info className="w-6 h-6 text-blue-400 shrink-0" />
                       <p className="text-xs text-slate-400 leading-relaxed italic">
                         "Because cos(x) is a contraction on ℝ (locally near the fixed point) and ℝ is complete, the sequence xₙ must converge to a unique a where cos(a) = a."
                       </p>
                    </div>
                 </div>

                 <AnimatePresence>
                    {status === 'finished' && (
                       <motion.div 
                        initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
                        className="p-6 rounded-[2rem] border bg-emerald-50 border-emerald-100 text-emerald-900"
                       >
                          <div className="flex gap-4">
                             <Target className="w-6 h-6 shrink-0 text-emerald-600" />
                             <div>
                                <h5 className="font-bold text-xs uppercase tracking-widest mb-1">Fixed Point Found</h5>
                                <p className="text-[10px] leading-relaxed opacity-80 italic">
                                   The sequence converged to a ≈ 0.739. This is the 'Dottie Number'.
                                </p>
                             </div>
                          </div>
                       </motion.div>
                    )}
                 </AnimatePresence>
              </div>

              <div className="lg:col-span-2 flex justify-center">
                 <div className="w-full max-w-lg aspect-square bg-slate-900 rounded-[4rem] border border-slate-800 shadow-2xl relative overflow-hidden flex flex-col justify-center">
                    <svg viewBox="0 0 400 300" className="w-full h-full">
                       {/* Grid */}
                       <defs>
                          <pattern id="fixed-grid" width="30" height="30" patternUnits="userSpaceOnUse">
                             <path d="M 30 0 L 0 0 0 30" fill="none" stroke="#1e293b" strokeWidth="0.5"/>
                          </pattern>
                       </defs>
                       <rect width="100%" height="100%" fill="url(#fixed-grid)" />
                       
                       {/* Axes */}
                       <line x1="40" y1="150" x2="360" y2="150" stroke="#475569" strokeWidth="1" />
                       <line x1="200" y1="20" x2="200" y2="280" stroke="#475569" strokeWidth="1" />

                       {/* y = x Line */}
                       <line 
                         x1={getX(-2.5)} y1={getY(-2.5)} 
                         x2={getX(2.5)} y2={getY(2.5)} 
                         stroke="#475569" strokeWidth="1" strokeDasharray="4 4" 
                       />
                       <text x={getX(2)} y={getY(2) - 10} className="text-[8px] font-bold fill-slate-500 uppercase">y = x</text>

                       {/* Function Curve f(x) = cos(x) */}
                       <polyline 
                         points={curvePoints}
                         fill="none" stroke="#3b82f6" strokeWidth="2"
                       />
                       <text x={getX(-2.5)} y={getY(Math.cos(-2.5)) - 10} className="text-[8px] font-bold fill-blue-500 uppercase">y = cos(x)</text>

                       {/* Cobweb Path */}
                       <motion.path 
                         d={cobwebPath}
                         fill="none" stroke="#f43f5e" strokeWidth="2"
                         initial={{ pathLength: 0 }}
                         animate={{ pathLength: 1 }}
                         transition={{ duration: 0.5, ease: "easeInOut" }}
                       />

                       {/* Fixed Point Indicator */}
                       {status === 'finished' && (
                          <motion.circle 
                            initial={{ scale: 0 }} animate={{ scale: 1 }}
                            cx={getX(0.739)} cy={getY(0.739)} r="6" 
                            fill="none" stroke="#f43f5e" strokeWidth="2" strokeDasharray="4 2"
                            className="animate-spin-slow"
                          />
                       )}
                    </svg>
                 </div>
              </div>
           </div>
        </div>
      </div>
    </section>
  );
};

export default MetricFixedPointVisualizer;
