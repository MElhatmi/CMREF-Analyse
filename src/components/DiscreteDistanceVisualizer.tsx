import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Target, Info, MousePointer2 } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const DiscreteDistanceVisualizer: React.FC = () => {
  const { t } = useLanguage();
  const [points, setPoints] = useState<{ x: number; y: number; id: number }[]>([
    { x: 100, y: 100, id: 1 },
    { x: 300, y: 200, id: 2 }
  ]);
  const [activePoint, setActivePoint] = useState<number | null>(null);

  const handleMouseMove = (e: React.MouseEvent<SVGSVGElement>) => {
    if (activePoint === null) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setPoints(pts => pts.map(p => p.id === activePoint ? { ...p, x, y } : p));
  };

  const p1 = points[0];
  const p2 = points[1];
  
  const euclideanDist = Math.sqrt(Math.pow(p1.x - p2.x, 2) + Math.pow(p1.y - p2.y, 2));
  const isSame = Math.abs(p1.x - p2.x) < 5 && Math.abs(p1.y - p2.y) < 5;
  const discreteDist = isSame ? 0 : 1;

  return (
    <div className="my-12 bg-slate-900 rounded-[2.5rem] p-8 text-white overflow-hidden relative shadow-2xl border border-slate-800">
      {/* Background patterns */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(#4f46e5 1px, transparent 1px)', backgroundSize: '30px 30px' }} />
      </div>

      <div className="relative z-10 space-y-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h4 className="text-xl font-bold flex items-center gap-2">
              <Target className="w-5 h-5 text-indigo-400" />
              {t('td1.viz.discrete.title')}
            </h4>
            <p className="text-slate-400 text-sm mt-1">{t('td1.viz.discrete.subtitle')}</p>
          </div>
          <div className="flex gap-4">
             <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl px-4 py-3 border border-slate-700/50 text-center min-w-[120px]">
                <p className="text-[10px] uppercase tracking-widest text-slate-500 font-bold mb-1">{t('td1.viz.discrete.euclidean')}</p>
                <p className="text-xl font-mono font-black text-white">{(euclideanDist/100).toFixed(2)}</p>
             </div>
             <div className="bg-indigo-600 rounded-2xl px-4 py-3 shadow-lg shadow-indigo-500/20 text-center min-w-[120px]">
                <p className="text-[10px] uppercase tracking-widest text-indigo-200 font-bold mb-1">{t('td1.viz.discrete.discrete')}</p>
                <p className="text-xl font-mono font-black text-white">{discreteDist}</p>
             </div>
          </div>
        </div>

        <div className="relative aspect-video bg-slate-950 rounded-3xl border border-slate-800 overflow-hidden cursor-crosshair">
          <svg 
            className="w-full h-full" 
            onMouseMove={handleMouseMove}
            onMouseUp={() => setActivePoint(null)}
            onMouseLeave={() => setActivePoint(null)}
          >
            {/* Connection line for Euclidean visual */}
            <line 
              x1={p1.x} y1={p1.y} x2={p2.x} y2={p2.y} 
              stroke="rgba(79, 70, 229, 0.2)" 
              strokeWidth="2" 
              strokeDasharray="4 4"
            />

            {/* Point 1 */}
            <g 
              onMouseDown={() => setActivePoint(p1.id)}
              className="cursor-grab active:cursor-grabbing"
            >
              <circle cx={p1.x} cy={p1.y} r="20" fill="rgba(79, 70, 229, 0.1)" />
              <circle cx={p1.x} cy={p1.y} r="6" fill="#6366f1" className="filter drop-shadow-[0_0_8px_rgba(99,102,241,0.8)]" />
              <text x={p1.x} y={p1.y - 15} textAnchor="middle" className="text-[10px] fill-slate-400 font-bold tracking-widest uppercase">x</text>
            </g>

            {/* Point 2 */}
            <g 
              onMouseDown={() => setActivePoint(p2.id)}
              className="cursor-grab active:cursor-grabbing"
            >
              <circle cx={p2.x} cy={p2.y} r="20" fill="rgba(244, 63, 94, 0.1)" />
              <circle cx={p2.x} cy={p2.y} r="6" fill="#f43f5e" className="filter drop-shadow-[0_0_8px_rgba(244,63,94,0.8)]" />
              <text x={p2.x} y={p2.y - 15} textAnchor="middle" className="text-[10px] fill-slate-400 font-bold tracking-widest uppercase">y</text>
            </g>
          </svg>

          {/* Value Indicator Overlay */}
          <AnimatePresence>
            {!isSame && (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="absolute top-4 left-4 bg-slate-900/80 backdrop-blur-md px-3 py-2 rounded-xl border border-slate-700 text-[10px] font-bold text-slate-300 flex items-center gap-2 pointer-events-none"
              >
                <MousePointer2 className="w-3 h-3 text-indigo-400" />
                {t('td1.viz.discrete.move')}
              </motion.div>
            )}
          </AnimatePresence>

          {/* Formula helper */}
          <div className="absolute bottom-4 right-4 text-right">
            <div className="bg-slate-900/80 backdrop-blur-md p-4 rounded-2xl border border-slate-700 max-w-[200px]">
              <p className="text-[10px] font-black text-indigo-400 uppercase tracking-widest mb-1">{t('td1.viz.discrete.rule')}</p>
              <p className="text-xs text-slate-300 leading-tight">
                {isSame 
                  ? t('td1.viz.discrete.rule_same')
                  : t('td1.viz.discrete.rule_diff')}
              </p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-4">
          <div className="bg-slate-800/30 p-4 rounded-2xl border border-slate-800 flex gap-3">
            <Info className="w-5 h-5 text-indigo-400 shrink-0" />
            <p className="text-[10px] text-slate-400 leading-relaxed uppercase tracking-wide">
              {t('td1.viz.discrete.info1')}
            </p>
          </div>
          <div className="bg-slate-800/30 p-4 rounded-2xl border border-slate-800 flex gap-3">
            <div className="w-5 h-5 rounded bg-indigo-500/20 text-indigo-400 flex items-center justify-center font-bold text-[10px]">!</div>
            <p className="text-[10px] text-slate-400 leading-relaxed uppercase tracking-wide">
              {t('td1.viz.discrete.info2')}
            </p>
          </div>
          <div className="bg-slate-800/30 p-4 rounded-2xl border border-slate-800 flex gap-3">
            <div className="w-5 h-5 rounded bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold text-[10px]">√</div>
            <p className="text-[10px] text-slate-400 leading-relaxed uppercase tracking-wide">
              {t('td1.viz.discrete.info3')}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiscreteDistanceVisualizer;
