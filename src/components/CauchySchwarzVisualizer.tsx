import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { Info, Zap } from 'lucide-react';

const CauchySchwarzVisualizer: React.FC = () => {
  const { language } = useLanguage();
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  const [vecU, setVecU] = useState({ x: 120, y: -80 });
  const [vecV, setVecV] = useState({ x: 150, y: 0 });
  const [isDraggingU, setIsDraggingU] = useState(false);
  const [isDraggingV, setIsDraggingV] = useState(false);

  const ORIGIN = { x: 200, y: 200 };

  const content = {
    EN: {
      title: "Interactive Visualizer: The Cauchy-Schwarz Shadow Caster",
      subtitle: "Drag the arrowheads of Vector u (Blue) and Vector v (Red). Watch how the projection 'shadow' relates to their absolute lengths.",
      calcInner: "| ⟨u, v⟩ |",
      calcMax: "||u|| · ||v||",
      hook: "As you rotate the vectors apart, the inner product (shadow) shrinks to 0 at 90 degrees. Drag the vectors until they overlap perfectly. Notice that the ratio hits exactly 100% (1.0), triggering the Cauchy-Schwarz equality condition: the vectors are linearly dependent!",
      ortho: "Orthogonal! The shadow vanishes.",
      collinear: "Equality! Perfect alignment."
    },
    FR: {
      title: "Visualiseur Interactif : Le Lanceur d'Ombre de Cauchy-Schwarz",
      subtitle: "Faites glisser les extrémités du Vecteur u (Bleu) et du Vecteur v (Rouge). Observez comment l'ombre de la projection se rapporte à leurs longueurs absolues.",
      calcInner: "| ⟨u, v⟩ |",
      calcMax: "||u|| · ||v||",
      hook: "En faisant pivoter les vecteurs, le produit scalaire (l'ombre) s'annule à 90 degrés. Faites glisser les vecteurs jusqu'à ce qu'ils se superposent parfaitement. Notez que le ratio atteint exactement 100% (1,0), déclenchant l'égalité de Cauchy-Schwarz : les vecteurs sont colinéaires !",
      ortho: "Orthogonal ! L'ombre s'évanouit.",
      collinear: "Égalité ! Alignement parfait."
    }
  };

  const curr = content[language];

  const norm = (v: { x: number, y: number }) => Math.sqrt(v.x * v.x + v.y * v.y);
  const dot = (u: { x: number, y: number }, v: { x: number, y: number }) => u.x * v.x + u.y * v.y;
  
  const normU = norm(vecU);
  const normV = norm(vecV);
  const innerVal = Math.abs(dot(vecU, vecV));
  const maxVal = normU * normV;
  const ratio = maxVal > 0 ? innerVal / maxVal : 0;

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // Grid
    ctx.strokeStyle = '#f1f5f9';
    ctx.lineWidth = 1;
    for (let i = 0; i <= canvas.width; i += 40) {
      ctx.beginPath(); ctx.moveTo(i, 0); ctx.lineTo(i, canvas.height); ctx.stroke();
      ctx.beginPath(); ctx.moveTo(0, i); ctx.lineTo(canvas.width, i); ctx.stroke();
    }

    // Axes
    ctx.strokeStyle = '#cbd5e1';
    ctx.lineWidth = 2;
    ctx.beginPath(); ctx.moveTo(ORIGIN.x, 0); ctx.lineTo(ORIGIN.x, canvas.height); ctx.stroke();
    ctx.beginPath(); ctx.moveTo(0, ORIGIN.y); ctx.lineTo(canvas.width, ORIGIN.y); ctx.stroke();

    const drawVector = (v: { x: number, y: number }, color: string, width: number) => {
      ctx.save();
      ctx.strokeStyle = color;
      ctx.fillStyle = color;
      ctx.lineWidth = width;
      const angle = Math.atan2(v.y, v.x);
      const headlen = 10;
      ctx.beginPath();
      ctx.moveTo(ORIGIN.x, ORIGIN.y);
      ctx.lineTo(ORIGIN.x + v.x, ORIGIN.y + v.y);
      ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(ORIGIN.x + v.x, ORIGIN.y + v.y);
      ctx.lineTo(ORIGIN.x + v.x - headlen * Math.cos(angle - Math.PI / 6), ORIGIN.y + v.y - headlen * Math.sin(angle - Math.PI / 6));
      ctx.lineTo(ORIGIN.x + v.x - headlen * Math.cos(angle + Math.PI / 6), ORIGIN.y + v.y - headlen * Math.sin(angle + Math.PI / 6));
      ctx.closePath();
      ctx.fill();
      ctx.restore();
    };

    // Projection Projection
    if (normV > 0) {
      const vUnit = { x: vecV.x / normV, y: vecV.y / normV };
      const projectionLen = dot(vecU, vecV) / normV;
      const projection = { x: vUnit.x * projectionLen, y: vUnit.y * projectionLen };

      // Perpendicular line
      ctx.save();
      ctx.strokeStyle = '#94a3b8';
      ctx.setLineDash([5, 5]);
      ctx.beginPath();
      ctx.moveTo(ORIGIN.x + vecU.x, ORIGIN.y + vecU.y);
      ctx.lineTo(ORIGIN.x + projection.x, ORIGIN.y + projection.y);
      ctx.stroke();
      ctx.restore();

      // Shadow segment
      ctx.save();
      ctx.strokeStyle = '#8b5cf6';
      ctx.lineWidth = 6;
      ctx.globalAlpha = 0.4;
      ctx.beginPath();
      ctx.moveTo(ORIGIN.x, ORIGIN.y);
      ctx.lineTo(ORIGIN.x + projection.x, ORIGIN.y + projection.y);
      ctx.stroke();
      ctx.restore();
    }

    drawVector(vecV, '#ef4444', 3); // Red: v
    drawVector(vecU, '#2563eb', 3); // Blue: u

    // Labels
    ctx.font = 'bold 14px sans-serif';
    ctx.fillStyle = '#1e3a8a';
    ctx.fillText('u', ORIGIN.x + vecU.x + 10, ORIGIN.y + vecU.y);
    ctx.fillStyle = '#991b1b';
    ctx.fillText('v', ORIGIN.x + vecV.x + 10, ORIGIN.y + vecV.y);

  }, [vecU, vecV]);

  const handleMouseDown = (e: React.MouseEvent) => {
    const rect = canvasRef.current?.getBoundingClientRect();
    if (!rect) return;
    const x = e.clientX - rect.left - ORIGIN.x;
    const y = e.clientY - rect.top - ORIGIN.y;
    
    if (Math.hypot(x - vecU.x, y - vecU.y) < 20) setIsDraggingU(true);
    else if (Math.hypot(x - vecV.x, y - vecV.y) < 20) setIsDraggingV(true);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = canvasRef.current?.getBoundingClientRect();
    if (!rect) return;
    const x = e.clientX - rect.left - ORIGIN.x;
    const y = e.clientY - rect.top - ORIGIN.y;

    if (isDraggingU) setVecU({ x, y });
    if (isDraggingV) setVecV({ x, y });
  };

  return (
    <div className="my-12 bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden">
      <div className="p-8 border-b border-slate-100 bg-slate-50/50">
        <div className="flex items-center gap-3 mb-2">
          <Zap className="w-5 h-5 text-purple-600" />
          <h3 className="text-xl font-bold text-slate-900">{curr.title}</h3>
        </div>
        <p className="text-slate-600 text-sm">{curr.subtitle}</p>
      </div>

      <div className="flex flex-col lg:flex-row items-center gap-8 p-8">
        <div className="relative cursor-crosshair">
          <canvas
            ref={canvasRef}
            width={400}
            height={400}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={() => { setIsDraggingU(false); setIsDraggingV(false); }}
            onMouseLeave={() => { setIsDraggingU(false); setIsDraggingV(false); }}
            className="bg-white rounded-xl shadow-inner border border-slate-200"
          />
          
          {ratio < 0.05 && (
            <motion.div 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-slate-900/80 backdrop-blur px-4 py-2 rounded-full text-white font-bold text-xs uppercase tracking-widest border border-slate-700"
            >
              {curr.ortho}
            </motion.div>
          )}

          {ratio > 0.99 && (
            <motion.div 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }}
              className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-purple-600 px-4 py-2 rounded-full text-white font-bold text-xs uppercase tracking-widest shadow-lg shadow-purple-200"
            >
              {curr.collinear}
            </motion.div>
          )}
        </div>

        <div className="flex-1 space-y-6 w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 bg-purple-50 rounded-2xl border border-purple-100">
              <p className="text-[10px] font-bold text-purple-600 uppercase tracking-widest mb-1">{curr.calcInner}</p>
              <p className="text-2xl font-mono font-bold text-purple-900">{(innerVal / 400).toFixed(2)}</p>
            </div>
            <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200">
              <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1">{curr.calcMax}</p>
              <p className="text-2xl font-mono font-bold text-slate-900">{(maxVal / 400).toFixed(2)}</p>
            </div>
          </div>

          <div className="p-6 bg-slate-900 rounded-3xl shadow-2xl relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-1 h-full bg-purple-500" />
            
            <div className="flex items-center justify-between mb-4">
               <span className="text-slate-400 text-[10px] font-bold uppercase tracking-widest">Cauchy-Schwarz Ratio</span>
               <span className={`font-mono text-xl font-bold ${ratio > 0.99 ? 'text-purple-400' : 'text-white'}`}>
                 {(ratio * 100).toFixed(1)}%
               </span>
            </div>

            <div className="h-4 bg-slate-800 rounded-full p-1 border border-slate-700">
               <motion.div 
                 className={`h-full rounded-full ${ratio > 0.99 ? 'bg-purple-400 shadow-[0_0_15px_rgba(192,132,252,0.5)]' : 'bg-indigo-500'}`}
                 animate={{ width: `${ratio * 100}%` }}
                 transition={{ type: 'spring', damping: 20 }}
               />
            </div>

            <div className="mt-4 flex justify-between items-center text-[10px] font-bold text-slate-500 uppercase">
              <span>0.0 (⊥)</span>
              <span>1.0 (||)</span>
            </div>
          </div>

          <div className="flex items-start gap-3 p-5 bg-indigo-50/50 rounded-2xl border border-indigo-100">
            <Info className="w-5 h-5 text-indigo-600 mt-0.5 flex-shrink-0" />
            <p className="text-indigo-900 text-sm leading-relaxed italic">
              {curr.hook}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CauchySchwarzVisualizer;
