import React, { useState, useRef, useMemo } from 'react';
import { CheckCircle2, ChevronDown } from 'lucide-react';
import { InlineMath } from './Math';
import { useLanguage } from '../context/LanguageContext';

type MetricType = 'euclidean' | 'manhattan' | 'maximum';

interface Point {
  x: number;
  y: number;
}

const TriangleInequalityVisualizer: React.FC = () => {
  const { t } = useLanguage();
  const [metric, setMetric] = useState<MetricType>('euclidean');
  
  // Points in grid coordinates (-10 to 10)
  const [a, setA] = useState<Point>({ x: -5, y: -2 });
  const [b, setB] = useState<Point>({ x: 0, y: 5 });
  const [c, setC] = useState<Point>({ x: 5, y: -2 });
  
  const [dragging, setDragging] = useState<'A' | 'B' | 'C' | null>(null);
  const svgRef = useRef<SVGSVGElement>(null);

  const calculateDistance = (p1: Point, p2: Point, type: MetricType): number => {
    const dx = Math.abs(p1.x - p2.x);
    const dy = Math.abs(p1.y - p2.y);
    switch (type) {
      case 'manhattan': return dx + dy;
      case 'maximum': return Math.max(dx, dy);
      default: return Math.sqrt(dx * dx + dy * dy);
    }
  };

  const dAC = useMemo(() => calculateDistance(a, c, metric), [a, c, metric]);
  const dAB = useMemo(() => calculateDistance(a, b, metric), [a, b, metric]);
  const dBC = useMemo(() => calculateDistance(b, c, metric), [b, c, metric]);
  
  const isValid = dAC <= dAB + dBC + 0.00001; // Epsilon for float math

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!dragging || !svgRef.current) return;
    const rect = svgRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 20 - 10;
    const y = 10 - ((e.clientY - rect.top) / rect.height) * 20;
    const snapped = { x: Math.round(x * 2) / 2, y: Math.round(y * 2) / 2 };
    
    if (dragging === 'A') setA(snapped);
    if (dragging === 'B') setB(snapped);
    if (dragging === 'C') setC(snapped);
  };

  const getPath = (p1: Point, p2: Point, type: MetricType) => {
    if (type === 'manhattan') {
      return `M ${p1.x} ${p1.y} L ${p2.x} ${p1.y} L ${p2.x} ${p2.y}`;
    }
    return `M ${p1.x} ${p1.y} L ${p2.x} ${p2.y}`;
  };

  const gridToSvg = (val: number) => val * 20 + 200;

  return (
    <section className="bg-slate-50 py-24 px-6 overflow-hidden">
      <div className="mx-auto max-w-5xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-4 tracking-tight">{t('metrics.viz.title')}</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            {t('metrics.viz.subtitle')}
          </p>
        </div>

        <div className="bg-white rounded-[3rem] p-10 shadow-sm border border-slate-200">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
            
            <div className="lg:col-span-1 space-y-8">
               <div>
                  <label className="text-xs font-bold text-slate-400 uppercase tracking-widest block mb-4">Universe Rules</label>
                  <div className="relative">
                    <select
                      value={metric}
                      onChange={(e) => setMetric(e.target.value as MetricType)}
                      className="w-full appearance-none bg-slate-50 border border-slate-200 rounded-2xl px-6 py-4 font-bold text-slate-900 cursor-pointer focus:ring-2 focus:ring-blue-500 outline-none shadow-sm transition-all"
                    >
                      <option value="euclidean">Euclidean (d₂)</option>
                      <option value="manhattan">Manhattan (d₁)</option>
                      <option value="maximum">Maximum (d∞)</option>
                    </select>
                    <ChevronDown className="absolute right-6 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 pointer-events-none" />
                  </div>
               </div>

               <div className="p-6 bg-slate-900 rounded-[2rem] text-white space-y-6">
                  <div>
                    <p className="text-[10px] font-bold text-blue-400 uppercase tracking-widest mb-2">Direct Path A → C</p>
                    <div className="flex justify-between items-center bg-white/5 p-3 rounded-xl border border-white/10">
                       <InlineMath math="d(A, C)" />
                       <span className="font-mono text-blue-400">{dAC.toFixed(2)}</span>
                    </div>
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-red-400 uppercase tracking-widest mb-2">Detour Path A → B → C</p>
                    <div className="flex justify-between items-center bg-white/5 p-3 rounded-xl border border-white/10">
                       <InlineMath math="d(A,B) + d(B,C)" />
                       <span className="font-mono text-red-400">{(dAB + dBC).toFixed(2)}</span>
                    </div>
                  </div>
                  
                  <div className={`p-4 rounded-xl border flex items-center gap-3 ${isValid ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-400' : 'bg-red-500/10 border-red-500/30 text-red-400'}`}>
                     <CheckCircle2 className="w-5 h-5" />
                     <div className="text-[10px] font-bold uppercase tracking-tight">
                        Triangle Inequality: {isValid ? 'True' : 'Broken'}
                     </div>
                  </div>
               </div>
               
               <p className="text-[11px] text-slate-400 italic leading-relaxed">
                 Notice how changing the metric changes the numerical distances, but the fundamental law of the Triangle Inequality never breaks.
               </p>
            </div>

            <div className="lg:col-span-2 flex justify-center">
               <div className="w-full max-w-lg aspect-square bg-slate-50 rounded-[4rem] border border-slate-100 shadow-2xl relative overflow-hidden">
                  <svg 
                    ref={svgRef}
                    viewBox="0 0 400 400" 
                    className="w-full h-full cursor-crosshair"
                    onMouseMove={handleMouseMove}
                    onMouseUp={() => setDragging(null)}
                    onMouseLeave={() => setDragging(null)}
                  >
                     {/* Grid */}
                     <defs>
                        <pattern id="metric-grid" width="20" height="20" patternUnits="userSpaceOnUse">
                           <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#e2e8f0" strokeWidth="0.5"/>
                        </pattern>
                     </defs>
                     <rect width="100%" height="100%" fill="url(#metric-grid)" />
                     
                     {/* Axes */}
                     <line x1="200" y1="0" x2="200" y2="400" stroke="#cbd5e1" strokeWidth="1" />
                     <line x1="0" y1="200" x2="400" y2="200" stroke="#cbd5e1" strokeWidth="1" />

                     {/* Paths */}
                     <g transform="translate(200, 200) scale(20, -20)">
                        {/* Direct A -> C */}
                        <path 
                          d={getPath(a, c, metric)}
                          fill="none" stroke="#3b82f6" strokeWidth="0.2"
                        />
                        {/* Detour A -> B -> C */}
                        <path 
                          d={getPath(a, b, metric)}
                          fill="none" stroke="#ef4444" strokeWidth="0.2" strokeDasharray="0.5 0.5"
                        />
                        <path 
                          d={getPath(b, c, metric)}
                          fill="none" stroke="#ef4444" strokeWidth="0.2" strokeDasharray="0.5 0.5"
                        />

                        {/* Nodes */}
                        {([
                          { id: 'A', pt: a },
                          { id: 'B', pt: b },
                          { id: 'C', pt: c }
                        ] as const).map(node => (
                          <circle 
                            key={node.id}
                            cx={node.pt.x} cy={node.pt.y} r="0.4"
                            fill={dragging === node.id ? '#6366f1' : '#1e293b'}
                            className="cursor-move transition-colors"
                            onMouseDown={() => setDragging(node.id)}
                          />
                        ))}
                     </g>

                     {/* Labels (separate to avoid scaling/transform issues with text) */}
                     {[
                        { id: 'A', pt: a },
                        { id: 'B', pt: b },
                        { id: 'C', pt: c }
                     ].map(node => (
                        <text 
                          key={node.id}
                          x={gridToSvg(node.pt.x)} y={gridToSvg(-node.pt.y) - 15}
                          className="text-xs font-bold fill-slate-900 font-mono text-center"
                          textAnchor="middle"
                        >
                           {node.id}
                        </text>
                     ))}
                  </svg>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TriangleInequalityVisualizer;
