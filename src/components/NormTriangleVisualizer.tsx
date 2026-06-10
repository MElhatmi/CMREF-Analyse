import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { MousePointer2, Calculator, Info } from 'lucide-react';

const ORIGIN = { x: 200, y: 200 };

const NormTriangleVisualizer: React.FC = () => {
  const { language } = useLanguage();
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  // Vector head positions (relative to origin at center)
  const [vecX, setVecX] = useState({ x: 100, y: -50 });
  const [vecY, setVecY] = useState({ x: 50, y: -120 });
  const [isDraggingX, setIsDraggingX] = useState(false);
  const [isDraggingY, setIsDraggingY] = useState(false);

  const content = {
    EN: {
      title: "Interactive Visualizer: The Triangle Inequality Elastic",
      subtitle: "Drag the arrowheads of Vector x (Blue) and Vector y (Red). Observe how the direct path (Purple) is always shorter than the sum of its parts.",
      calcX: "N(x)",
      calcY: "N(y)",
      calcSum: "Sum of lengths: N(x) + N(y)",
      calcRes: "Direct length: N(x+y)",
      hook: "Notice that the purple vector N(x+y) is always shorter than or equal to the dashed detour N(x) + N(y). Try dragging vector y so it perfectly aligns (is collinear) with vector x. Watch the inequality turn into a perfect equality!"
    },
    FR: {
      title: "Visualiseur Interactif : L'Élasticité de l'Inégalité Triangulaire",
      subtitle: "Faites glisser les extrémités du Vecteur x (Bleu) et du Vecteur y (Rouge). Observez comment le chemin direct (Violet) est toujours plus court que la somme de ses parties.",
      calcX: "N(x)",
      calcY: "N(y)",
      calcSum: "Somme des longueurs : N(x) + N(y)",
      calcRes: "Longueur directe : N(x+y)",
      hook: "Remarquez que le vecteur violet N(x+y) est toujours plus court ou égal au détour en pointillés N(x) + N(y). Essayez d'aligner parfaitement le vecteur y avec le vecteur x (colinéarité). Observez l'inégalité devenir une égalité parfaite !"
    }
  };

  const curr = content[language];

  const norm = (v: { x: number, y: number }) => Math.sqrt(v.x * v.x + v.y * v.y);
  const normX = norm(vecX);
  const normY = norm(vecY);
  const vecSum = useMemo(() => ({ x: vecX.x + vecY.x, y: vecX.y + vecY.y }), [vecX, vecY]);
  const normSum = normX + normY;
  const normRes = norm(vecSum);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Clear and draw grid
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // Draw Grid lines
    ctx.strokeStyle = '#f1f5f9';
    ctx.lineWidth = 1;
    for (let i = 0; i <= canvas.width; i += 40) {
      ctx.beginPath(); ctx.moveTo(i, 0); ctx.lineTo(i, canvas.height); ctx.stroke();
      ctx.beginPath(); ctx.moveTo(0, i); ctx.lineTo(canvas.width, i); ctx.stroke();
    }

    // Draw Axes
    ctx.strokeStyle = '#cbd5e1';
    ctx.lineWidth = 2;
    ctx.beginPath(); ctx.moveTo(ORIGIN.x, 0); ctx.lineTo(ORIGIN.x, canvas.height); ctx.stroke();
    ctx.beginPath(); ctx.moveTo(0, ORIGIN.y); ctx.lineTo(canvas.width, ORIGIN.y); ctx.stroke();

    const drawVector = (v: { x: number, y: number }, color: string, width: number, dashed = false) => {
      ctx.save();
      ctx.strokeStyle = color;
      ctx.fillStyle = color;
      ctx.lineWidth = width;
      if (dashed) ctx.setLineDash([5, 5]);
      
      const headlen = 10;
      const angle = Math.atan2(v.y, v.x);
      
      ctx.beginPath();
      ctx.moveTo(ORIGIN.x, ORIGIN.y);
      ctx.lineTo(ORIGIN.x + v.x, ORIGIN.y + v.y);
      ctx.stroke();
      
      // Arrow head
      ctx.setLineDash([]);
      ctx.beginPath();
      ctx.moveTo(ORIGIN.x + v.x, ORIGIN.y + v.y);
      ctx.lineTo(ORIGIN.x + v.x - headlen * Math.cos(angle - Math.PI / 6), ORIGIN.y + v.y - headlen * Math.sin(angle - Math.PI / 6));
      ctx.lineTo(ORIGIN.x + v.x - headlen * Math.cos(angle + Math.PI / 6), ORIGIN.y + v.y - headlen * Math.sin(angle + Math.PI / 6));
      ctx.closePath();
      ctx.fill();
      ctx.restore();
    };

    const drawLine = (p1: { x: number, y: number }, p2: { x: number, y: number }, color: string, dashed = false) => {
      ctx.save();
      ctx.strokeStyle = color;
      ctx.lineWidth = 2;
      if (dashed) ctx.setLineDash([5, 5]);
      ctx.beginPath();
      ctx.moveTo(ORIGIN.x + p1.x, ORIGIN.y + p1.y);
      ctx.lineTo(ORIGIN.x + p2.x, ORIGIN.y + p2.y);
      ctx.stroke();
      ctx.restore();
    };

    // Parallelogram construction
    drawLine(vecX, vecSum, '#94a3b8', true);
    drawLine(vecY, vecSum, '#94a3b8', true);

    // Detour (Tip-to-tail)
    drawLine(vecX, vecSum, '#ef4444', true); // y placed at tip of x

    // Main Vectors
    drawVector(vecX, '#2563eb', 3); // Blue: x
    drawVector(vecY, '#ef4444', 3); // Red: y
    drawVector(vecSum, '#8b5cf6', 4); // Purple: x+y

    // Labels
    ctx.font = 'bold 14px sans-serif';
    ctx.fillStyle = '#1e3a8a';
    ctx.fillText('x', ORIGIN.x + vecX.x + 10, ORIGIN.y + vecX.y);
    ctx.fillStyle = '#991b1b';
    ctx.fillText('y', ORIGIN.x + vecY.x + 10, ORIGIN.y + vecY.y);
    ctx.fillStyle = '#5b21b6';
    ctx.fillText('x + y', ORIGIN.x + vecSum.x + 10, ORIGIN.y + vecSum.y);

  }, [vecX, vecY, vecSum]);

  const handleMouseDown = (e: React.MouseEvent) => {
    const rect = canvasRef.current?.getBoundingClientRect();
    if (!rect) return;
    const x = e.clientX - rect.left - ORIGIN.x;
    const y = e.clientY - rect.top - ORIGIN.y;
    
    if (Math.hypot(x - vecX.x, y - vecX.y) < 20) setIsDraggingX(true);
    else if (Math.hypot(x - vecY.x, y - vecY.y) < 20) setIsDraggingY(true);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = canvasRef.current?.getBoundingClientRect();
    if (!rect) return;
    const x = e.clientX - rect.left - ORIGIN.x;
    const y = e.clientY - rect.top - ORIGIN.y;

    if (isDraggingX) setVecX({ x, y });
    if (isDraggingY) setVecY({ x, y });
  };

  const handleMouseUp = () => {
    setIsDraggingX(false);
    setIsDraggingY(false);
  };

  return (
    <div className="my-12 bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden">
      <div className="p-8 border-b border-slate-100 bg-slate-50/50">
        <div className="flex items-center gap-3 mb-2">
          <MousePointer2 className="w-5 h-5 text-indigo-600" />
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
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            className="bg-white rounded-xl shadow-inner border border-slate-200"
          />
          <div className="absolute top-4 left-4 flex flex-col gap-2">
            <div className="px-3 py-1 bg-white/90 backdrop-blur shadow-sm border border-slate-200 rounded-lg text-[10px] font-bold text-blue-600 uppercase tracking-wider">Vector x</div>
            <div className="px-3 py-1 bg-white/90 backdrop-blur shadow-sm border border-slate-200 rounded-lg text-[10px] font-bold text-red-600 uppercase tracking-wider">Vector y</div>
            <div className="px-3 py-1 bg-white/90 backdrop-blur shadow-sm border border-slate-200 rounded-lg text-[10px] font-bold text-purple-600 uppercase tracking-wider">Resultant x+y</div>
          </div>
        </div>

        <div className="flex-1 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 bg-blue-50 rounded-2xl border border-blue-100">
              <p className="text-[10px] font-bold text-blue-600 uppercase tracking-widest mb-1">{curr.calcX}</p>
              <p className="text-2xl font-mono font-bold text-blue-900">{(normX / 20).toFixed(2)}</p>
            </div>
            <div className="p-4 bg-red-50 rounded-2xl border border-red-100">
              <p className="text-[10px] font-bold text-red-600 uppercase tracking-widest mb-1">{curr.calcY}</p>
              <p className="text-2xl font-mono font-bold text-red-900">{(normY / 20).toFixed(2)}</p>
            </div>
          </div>

          <div className="p-6 bg-slate-900 rounded-2xl shadow-lg space-y-4">
            <div className="flex items-center justify-between text-slate-400 text-xs font-bold uppercase tracking-widest">
              <div className="flex items-center gap-2">
                <Calculator className="w-4 h-4" />
                {curr.calcSum}
              </div>
              <span className="text-white font-mono">{(normSum / 20).toFixed(2)}</span>
            </div>
            <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
               <motion.div 
                 className="h-full bg-indigo-500" 
                 animate={{ width: `${(normSum / (normSum + normRes)) * 100}%` }}
               />
            </div>
            
            <div className="flex items-center justify-between text-slate-400 text-xs font-bold uppercase tracking-widest">
              <div className="flex items-center gap-2">
                <Calculator className="w-4 h-4" />
                {curr.calcRes}
              </div>
              <span className="text-purple-400 font-mono">{(normRes / 20).toFixed(2)}</span>
            </div>
            <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
               <motion.div 
                 className="h-full bg-purple-500" 
                 animate={{ width: `${(normRes / (normSum + normRes)) * 100}%` }}
               />
            </div>
          </div>

          <div className="flex items-start gap-3 p-4 bg-indigo-50 rounded-2xl border border-indigo-100">
            <Info className="w-5 h-5 text-indigo-600 mt-1 flex-shrink-0" />
            <p className="text-indigo-900 text-sm leading-relaxed italic">
              {curr.hook}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NormTriangleVisualizer;
