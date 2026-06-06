import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MousePointer2, CheckCircle2, XCircle } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

type SpaceType = 'U' | 'disjoint';

const PathFindingVisualizer: React.FC = () => {
  const [space, setSpace] = useState<SpaceType>('U');
  const [points, setPoints] = useState<{ x: number, y: number }[]>([]);
  const [status, setStatus] = useState<string | null>(null);
  const [isError, setIsError] = useState(false);
  const { language } = useLanguage();

  const content = {
    EN: {
      title: "Interactive: The Path-Finding Test",
      subtitle: "Click twice inside the blue areas to place point A and B.",
      btnA: "Space A: Solid 'U'",
      btnB: "Space B: Disjoint Circles",
      clickLabel: "Click the canvas",
      placeA: "Place starting point A...",
      placeB: "Now place end point B...",
      outsideError: "Point must be INSIDE the topological space (the blue areas).",
      successU: "Success. A continuous arc exists between the points. The space is path-connected.",
      successB: "Success. Both points are in the same circle. A local arc exists.",
      failB: "Failed. You cannot reach B from A without leaving the space. These components are disconnected."
    },
    FR: {
      title: "Interactif : Le test du chemin",
      subtitle: "Cliquez deux fois dans les zones bleues pour placer les points A et B.",
      btnA: "Espace A : 'U' Solide",
      btnB: "Espace B : Cercles disjoints",
      clickLabel: "Cliquez sur le canevas",
      placeA: "Placez le point de départ A...",
      placeB: "Maintenant, placez le point B...",
      outsideError: "Le point doit être À L'INTÉRIEUR de l'espace (zones bleues).",
      successU: "Succès. Un arc continu existe entre les points. L'espace est connexe par arcs.",
      successB: "Succès. Les deux points sont dans le même cercle. Un arc local existe.",
      failB: "Échec. Impossible d'atteindre B depuis A sans quitter l'espace. Les composantes sont disjointes."
    }
  };

  const curr = content[language];

  const isInside = (x: number, y: number) => {
    if (space === 'U') {
      const inLeft = x >= 100 && x <= 140 && y >= 50 && y <= 250;
      const inRight = x >= 260 && x <= 300 && y >= 50 && y <= 250;
      const inBottom = x >= 140 && x <= 260 && y >= 210 && y <= 250;
      return inLeft || inRight || inBottom;
    } else {
      const dist1 = Math.sqrt((x - 100)**2 + (y - 150)**2);
      const dist2 = Math.sqrt((x - 300)**2 + (y - 150)**2);
      return dist1 <= 80 || dist2 <= 80;
    }
  };

  const handleClick = (e: React.MouseEvent<SVGSVGElement>) => {
    const svg = e.currentTarget;
    const rect = svg.getBoundingClientRect();
    const x = (e.clientX - rect.left) * (400 / rect.width);
    const y = (e.clientY - rect.top) * (300 / rect.height);

    if (points.length >= 2) {
      setPoints([]);
      setStatus(null);
      setIsError(false);
      return;
    }

    if (!isInside(x, y)) {
      setStatus(curr.outsideError);
      setIsError(true);
      return;
    }

    const newPoints = [...points, { x, y }];
    setPoints(newPoints);
    setStatus(null);
    setIsError(false);

    if (newPoints.length === 2) {
      const [p1, p2] = newPoints;
      if (space === 'U') {
        setStatus(curr.successU);
      } else {
        const inC1 = Math.sqrt((p1.x - 100)**2 + (p1.y - 150)**2) <= 80;
        const inC2 = Math.sqrt((p2.x - 100)**2 + (p2.y - 150)**2) <= 80;
        if (inC1 !== inC2) {
          setStatus(curr.failB);
          setIsError(true);
        } else {
          setStatus(curr.successB);
        }
      }
    }
  };

  const getUPath = () => {
    if (points.length < 2) return "";
    const [p1, p2] = points;
    const inLeft1 = p1.x < 140;
    const inRight1 = p1.x > 260;
    const inLeft2 = p2.x < 140;
    const inRight2 = p2.x > 260;
    if ((inLeft1 && inRight2) || (inRight1 && inLeft2)) {
      return `M ${p1.x} ${p1.y} L ${p1.x} 230 L ${p2.x} 230 L ${p2.x} ${p2.y}`;
    }
    return `M ${p1.x} ${p1.y} L ${p2.x} ${p2.y}`;
  };

  return (
    <section className="bg-white py-24 px-6 overflow-hidden">
      <div className="mx-auto max-w-5xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-4 tracking-tight">{curr.title}</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            {curr.subtitle}
          </p>
        </div>

        <div className="bg-slate-50 rounded-[3rem] p-10 border border-slate-100 shadow-inner">
           <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
              <div className="lg:col-span-1 space-y-8">
                 <div>
                    <label className="text-xs font-bold text-slate-400 uppercase tracking-widest block mb-4">Selection</label>
                    <div className="flex flex-col gap-2">
                       <button onClick={() => { setSpace('U'); setPoints([]); setStatus(null); }}
                        className={`py-4 rounded-2xl font-bold text-sm transition-all border-2 ${space === 'U' ? 'bg-blue-600 text-white border-blue-600 shadow-xl' : 'bg-white text-slate-500 border-slate-100'}`}>
                         {curr.btnA}
                       </button>
                       <button onClick={() => { setSpace('disjoint'); setPoints([]); setStatus(null); }}
                        className={`py-4 rounded-2xl font-bold text-sm transition-all border-2 ${space === 'disjoint' ? 'bg-blue-600 text-white border-blue-600 shadow-xl' : 'bg-white text-slate-500 border-slate-100'}`}>
                         {curr.btnB}
                       </button>
                    </div>
                 </div>
                 <div className="p-6 bg-slate-900 rounded-[2rem] text-white space-y-4">
                    <div className="flex items-center gap-2">
                       <MousePointer2 className="w-4 h-4 text-blue-400" />
                       <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500 italic">{curr.clickLabel}</span>
                    </div>
                    <AnimatePresence mode="wait">
                       {status && (
                         <motion.div key={status} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
                           className={`flex gap-3 items-start ${isError ? 'text-red-400' : 'text-emerald-400'}`}>
                            {isError ? <XCircle className="w-5 h-5 shrink-0" /> : <CheckCircle2 className="w-5 h-5 shrink-0" />}
                            <p className="text-[11px] leading-relaxed font-medium">{status}</p>
                         </motion.div>
                       )}
                    </AnimatePresence>
                    {!status && points.length < 2 && (
                      <p className="text-[10px] text-slate-400 italic">
                        {points.length === 0 ? curr.placeA : curr.placeB}
                      </p>
                    )}
                 </div>
              </div>

              <div className="lg:col-span-2 flex justify-center">
                 <div className="w-full max-w-lg aspect-[4/3] bg-white rounded-[3rem] border border-slate-100 shadow-2xl relative overflow-hidden">
                    <svg viewBox="0 0 400 300" className="w-full h-full cursor-crosshair" onClick={handleClick}>
                       <rect width="400" height="300" fill="#f8fafc" />
                       {space === 'U' ? (
                         <path d="M 100 50 L 100 250 L 300 250 L 300 50 L 260 50 L 260 210 L 140 210 L 140 50 Z" fill="#6366f115" stroke="#6366f1" strokeWidth="2" />
                       ) : (
                         <>
                           <circle cx="100" cy="150" r="80" fill="#6366f115" stroke="#6366f1" strokeWidth="2" />
                           <circle cx="300" cy="150" r="80" fill="#6366f115" stroke="#6366f1" strokeWidth="2" />
                         </>
                       )}
                       {points.map((p, i) => (
                         <g key={i}>
                            <motion.circle initial={{ scale: 0 }} animate={{ scale: 1 }} cx={p.x} cy={p.y} r="6" fill="#1e293b" />
                            <text x={p.x + 8} y={p.y - 8} className="text-xs font-bold fill-slate-900 font-mono">{i === 0 ? 'A' : 'B'}</text>
                         </g>
                       ))}
                       {points.length === 2 && !isError && (
                         <motion.path d={space === 'U' ? getUPath() : `M ${points[0].x} ${points[0].y} L ${points[1].x} ${points[1].y}`} fill="none" stroke="#6366f1" strokeWidth="2" strokeDasharray="5 5" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1.5 }} />
                       )}
                       {points.length === 2 && isError && (
                         <motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                            <line x1={points[0].x} y1={points[0].y} x2={200} y2={150} stroke="#ef4444" strokeWidth="2" strokeDasharray="5 5" />
                            <circle cx="200" cy="150" r="4" fill="#ef4444" className="animate-ping" />
                         </motion.g>
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

export default PathFindingVisualizer;
