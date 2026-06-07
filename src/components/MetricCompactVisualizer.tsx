import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, RefreshCw, Crosshair, Combine } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface Particle {
  x: number;
  y: number;
  id: number;
}

const MetricCompactVisualizer: React.FC = () => {
  const { t } = useLanguage();
  const [particles, setParticles] = useState<Particle[]>([]);
  const [status, setStatus] = useState<'idle' | 'generating' | 'finished'>('idle');
  const [clusterCenter, setClusterPoint] = useState<{x: number, y: number} | null>(null);
  const [subseqIndices, setSubseqIndices] = useState<number[]>([]);
  
  const boxWidth = 300;
  const boxHeight = 200;
  const startX = 50;
  const startY = 50;

  const generate = () => {
    setStatus('generating');
    setParticles([]);
    setClusterPoint(null);
    setSubseqIndices([]);

    const newParticles: Particle[] = [];
    const count = 300;
    
    // Predetermined cluster center
    const targetX = startX + boxWidth / 2 + (Math.random() - 0.5) * 50;
    const targetY = startY + boxHeight / 2 + (Math.random() - 0.5) * 50;

    let i = 0;
    const interval = setInterval(() => {
      if (i >= count) {
        clearInterval(interval);
        setStatus('finished');
        
        // Find cluster
        setClusterPoint({ x: targetX, y: targetY });
        
        // Extract indices for "subsequence" (points closest to target)
        const subIndices = newParticles
          .map((p, idx) => ({ idx, dist: Math.sqrt((p.x - targetX)**2 + (p.y - targetY)**2) }))
          .sort((a, b) => a.dist - b.dist)
          .slice(0, 15)
          .map(o => o.idx);
        setSubseqIndices(subIndices);
        return;
      }

      // 70% chance to be near target, 30% chance anywhere in box
      const bias = Math.random() > 0.3;
      const x = bias 
        ? targetX + (Math.random() - 0.5) * 60 
        : startX + Math.random() * boxWidth;
      const y = bias 
        ? targetY + (Math.random() - 0.5) * 60 
        : startY + Math.random() * boxHeight;

      newParticles.push({ x, y, id: i });
      setParticles([...newParticles]);
      i++;
    }, 10);
  };

  return (
    <section className="bg-slate-50 py-24 px-6 overflow-hidden">
      <div className="mx-auto max-w-5xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-4 tracking-tight">{t('metrics.compact.viz.title')}</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            {t('metrics.compact.viz.subtitle')}
          </p>
        </div>

        <div className="bg-white rounded-[3rem] p-10 shadow-sm border border-slate-200">
           <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
              
              <div className="lg:col-span-1 space-y-8">
                 <button 
                  onClick={generate}
                  disabled={status === 'generating'}
                  className="w-full bg-indigo-600 hover:bg-indigo-700 disabled:opacity-50 text-white py-4 rounded-2xl font-bold transition-all shadow-lg flex items-center justify-center gap-3"
                 >
                   {status === 'generating' ? <RefreshCw className="w-5 h-5 animate-spin" /> : <Play className="w-5 h-5" />}
                   Generate Sequence
                 </button>

                 <div className="p-8 bg-slate-900 rounded-[2.5rem] text-white">
                    <h5 className="text-[10px] font-bold text-blue-400 uppercase tracking-widest mb-4">Space Constraints</h5>
                    <div className="space-y-4 text-[10px] leading-relaxed italic text-slate-400">
                       <p>1. Bounded: Points cannot escape the viewport.</p>
                       <p>2. Closed: The limit points are guaranteed to exist.</p>
                       <p>3. Infinite Sequence: Chaos meets topological structure.</p>
                    </div>
                 </div>

                 <AnimatePresence>
                    {status === 'finished' && (
                       <motion.div 
                        initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
                        className="p-6 rounded-[2rem] border bg-emerald-50 border-emerald-100 text-emerald-900"
                       >
                          <div className="flex gap-4">
                             <Combine className="w-6 h-6 shrink-0" />
                             <div>
                                <h5 className="font-bold text-xs uppercase tracking-widest mb-1">Bolzano-Weierstrass</h5>
                                <p className="text-[10px] leading-relaxed opacity-80 italic">
                                   "Because the space is bounded, they must clump. Because it is closed, the clump point is in A. We extract the red subsequence converging to it."
                                </p>
                             </div>
                          </div>
                       </motion.div>
                    )}
                 </AnimatePresence>
              </div>

              <div className="lg:col-span-2 flex justify-center">
                 <div className="w-full max-w-lg aspect-[16/12] bg-slate-900 rounded-[3rem] border border-slate-800 shadow-2xl relative overflow-hidden">
                    <svg viewBox="0 0 400 300" className="w-full h-full">
                       {/* The Bounded Set A */}
                       <rect 
                        x={startX} y={startY} width={boxWidth} height={boxHeight}
                        fill="rgba(59, 130, 246, 0.05)"
                        stroke="#3b82f6" strokeWidth="2" strokeDasharray="8 4"
                       />
                       <text x={startX + 10} y={startY + 25} className="text-xl font-serif italic fill-blue-500/20 uppercase">A</text>

                       {/* Sequence Particles */}
                       {particles.map((p) => (
                          <circle 
                            key={p.id} cx={p.x} cy={p.y} r="2" 
                            fill={subseqIndices.includes(p.id) ? "#ef4444" : "#475569"} 
                            opacity={subseqIndices.includes(p.id) ? 1 : 0.4}
                          />
                       ))}

                       {/* Cluster Highlight */}
                       {clusterCenter && (
                          <motion.g initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }}>
                             <circle 
                              cx={clusterCenter.x} cy={clusterCenter.y} r="35"
                              fill="none" stroke="#ef4444" strokeWidth="1" strokeDasharray="4 2"
                             />
                             <Crosshair className="w-6 h-6 text-red-500 -translate-x-3 -translate-y-3" x={clusterCenter.x} y={clusterCenter.y} />
                             <text x={clusterCenter.x + 40} y={clusterCenter.y} className="text-[8px] font-bold fill-red-500 uppercase tracking-widest">Value of Adherence</text>
                          </motion.g>
                       )}

                       {/* Subsequence Path */}
                       {status === 'finished' && subseqIndices.length > 0 && (
                          <motion.path 
                            initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
                            d={`M ${subseqIndices.map(idx => `${particles[idx].x} ${particles[idx].y}`).join(' L ')}`}
                            fill="none" stroke="#ef4444" strokeWidth="1" opacity="0.4"
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

export default MetricCompactVisualizer;
