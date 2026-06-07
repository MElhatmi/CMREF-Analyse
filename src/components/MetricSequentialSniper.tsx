import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Crosshair, Play, RefreshCw, CheckCircle2, XCircle } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface Point {
  x: number;
  y: number;
}

const MetricSequentialSniper: React.FC = () => {
  const { t } = useLanguage();
  const [target, setTarget] = useState<Point>({ x: 200, y: 100 });
  const [sequence, setSequence] = useState<Point[]>([]);
  const [status, setStatus] = useState<'idle' | 'running' | 'success' | 'failed'>('idle');
  const [msg, setStatusMsg] = useState('');
  
  const svgRef = useRef<SVGSVGElement>(null);
  const radius = 80;
  const centerX = 200;
  const centerY = 200;

  const isInside = (p: Point) => {
    const d = Math.sqrt((p.x - centerX) ** 2 + (p.y - centerY) ** 2);
    return d < radius - 1; // Epsilon to handle boundary
  };

  const isOnBoundary = (p: Point) => {
    const d = Math.sqrt((p.x - centerX) ** 2 + (p.y - centerY) ** 2);
    return Math.abs(d - radius) < 5;
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (status === 'running' || !svgRef.current) return;
    const rect = svgRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 400;
    const y = ((e.clientY - rect.top) / rect.height) * 400;
    setTarget({ x, y });
    setSequence([]);
    setStatus('idle');
  };

  const generateSequence = () => {
    setStatus('running');
    setSequence([]);
    
    let currentX = centerX + (Math.random() - 0.5) * 40;
    let currentY = centerY + (Math.random() - 0.5) * 40;
    
    const steps = 15;
    const newSeq: Point[] = [];

    const distToTarget = Math.sqrt((target.x - centerX) ** 2 + (target.y - centerY) ** 2);

    const timer = setInterval(() => {
      if (newSeq.length >= steps) {
        clearInterval(timer);
        if (distToTarget <= radius + 5) {
          setStatus('success');
          setStatusMsg(distToTarget < radius - 5 ? "a ∈ A, so it is trivially adherent." : "Success! Sequence inside A converges to the boundary point a.");
        } else {
          setStatus('failed');
          setStatusMsg("Failed. A sequence starting inside A cannot reach a point outside its closure.");
        }
        return;
      }

      // Move toward target but stay inside A if target is outside
      const targetX = target.x;
      const targetY = target.y;
      
      const dx = targetX - currentX;
      const dy = targetY - currentY;
      
      const nextX = currentX + dx * 0.4;
      const nextY = currentY + dy * 0.4;

      // Check if next point would be outside A
      const dNext = Math.sqrt((nextX - centerX) ** 2 + (nextY - centerY) ** 2);
      if (dNext >= radius - 2 && distToTarget > radius) {
         // Cap it at boundary
         const angle = Math.atan2(dy, dx);
         newSeq.push({
           x: centerX + Math.cos(angle) * (radius - 2),
           y: centerY + Math.sin(angle) * (radius - 2)
         });
         clearInterval(timer);
         setStatus('failed');
         setStatusMsg("Failed. The sequence hits the boundary and can't go further.");
      } else {
         currentX = nextX;
         currentY = nextY;
         newSeq.push({ x: nextX, y: nextY });
         setSequence([...newSeq]);
      }
    }, 100);
  };

  return (
    <section className="bg-slate-50 py-24 px-6 overflow-hidden">
      <div className="mx-auto max-w-5xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-4 tracking-tight">{t('metrics.closed.viz.title')}</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            {t('metrics.closed.viz.subtitle')}
          </p>
        </div>

        <div className="bg-white rounded-[3rem] p-10 shadow-sm border border-slate-200">
           <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
              
              <div className="lg:col-span-1 space-y-8">
                 <div className="p-6 bg-slate-900 rounded-[2rem] text-white">
                    <h5 className="text-[10px] font-bold text-blue-400 uppercase tracking-widest mb-4">Target Point info</h5>
                    <div className="space-y-4">
                       <div className="flex justify-between items-center text-xs">
                          <span>Target a:</span>
                          <span className="font-mono text-blue-400">({target.x.toFixed(0)}, {target.y.toFixed(0)})</span>
                       </div>
                       <div className="flex justify-between items-center text-xs">
                          <span>Status:</span>
                          <span className={`font-bold uppercase ${isInside(target) ? 'text-emerald-400' : isOnBoundary(target) ? 'text-amber-400' : 'text-red-400'}`}>
                             {isInside(target) ? 'Inside A' : isOnBoundary(target) ? 'On Boundary' : 'Outside A'}
                          </span>
                       </div>
                    </div>
                 </div>

                 <button 
                  onClick={generateSequence}
                  disabled={status === 'running'}
                  className="w-full bg-indigo-600 hover:bg-indigo-700 disabled:opacity-50 text-white py-4 rounded-2xl font-bold transition-all shadow-lg flex items-center justify-center gap-3"
                 >
                   {status === 'running' ? <RefreshCw className="w-5 h-5 animate-spin" /> : <Play className="w-5 h-5" />}
                   Generate Sequence (xₙ)
                 </button>

                 <AnimatePresence>
                    {status !== 'idle' && status !== 'running' && (
                       <motion.div 
                        initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
                        className={`p-6 rounded-[2rem] border ${status === 'success' ? 'bg-emerald-50 border-emerald-100 text-emerald-900' : 'bg-red-50 border-red-100 text-red-900'}`}
                       >
                          <div className="flex gap-4">
                             {status === 'success' ? <CheckCircle2 className="w-6 h-6 shrink-0" /> : <XCircle className="w-6 h-6 shrink-0" />}
                             <div>
                                <h5 className="font-bold text-xs uppercase tracking-widest mb-1">{status.toUpperCase()}</h5>
                                <p className="text-[10px] leading-relaxed opacity-80 italic">
                                   {msg}
                                </p>
                             </div>
                          </div>
                       </motion.div>
                    )}
                 </AnimatePresence>
              </div>

              <div className="lg:col-span-2 flex justify-center">
                 <div className="w-full max-w-lg aspect-square bg-slate-900 rounded-[4rem] border border-slate-800 shadow-2xl relative overflow-hidden">
                    <svg 
                      ref={svgRef}
                      viewBox="0 0 400 400" 
                      className="w-full h-full cursor-crosshair"
                      onMouseMove={handleMouseMove}
                    >
                       {/* Set A (Open Ball) */}
                       <circle 
                         cx={centerX} cy={centerY} r={radius} 
                         fill="rgba(59, 130, 246, 0.05)" 
                         stroke="#3b82f6" strokeWidth="2" strokeDasharray="8 4" 
                       />
                       <text x={centerX - 10} y={centerY + 5} className="text-xl font-serif italic fill-blue-500/20">A</text>

                       {/* Sequence Points */}
                       {sequence.map((p, i) => (
                          <motion.circle 
                            key={i} cx={p.x} cy={p.y} r="3" 
                            fill="#818cf8" 
                            initial={{ scale: 0 }} animate={{ scale: 1 }}
                          />
                       ))}

                       {/* Target Point a */}
                       <g transform={`translate(${target.x}, ${target.y})`}>
                          <Crosshair className="w-8 h-8 -translate-x-4 -translate-y-4 text-white opacity-40" />
                          <circle r="4" fill="white" />
                          <text x="10" y="-10" className="text-xs font-bold fill-white italic">a</text>
                       </g>

                       {/* Boundary Label */}
                       <text x="290" y="200" className="text-[8px] font-bold fill-blue-400 uppercase tracking-widest">Boundary ∂A</text>
                    </svg>
                 </div>
              </div>
           </div>
        </div>
      </div>
    </section>
  );
};

export default MetricSequentialSniper;
