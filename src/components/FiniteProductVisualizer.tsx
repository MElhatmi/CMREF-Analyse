import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Sliders, Plus, RotateCcw } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface Rectangle {
  x: number;
  y: number;
  w: number;
  h: number;
  id: number;
}

const FiniteProductVisualizer: React.FC = () => {
  const [u1, setU1] = useState({ start: 1, end: 3 }); // X-axis interval
  const [u2, setU2] = useState({ start: 1, end: 2 }); // Y-axis interval
  const [rects, setRects] = useState<Rectangle[]>([]);
  const { language } = useLanguage();

  const content = {
    EN: {
      title: "Interactive: The Finite Case (R \u00D7 R)",
      subtitle: "See how two 1D open intervals combine to form a 2D \"elementary rectangle.\" Combine multiple rectangles to build complex open sets.",
      labelX: "Interval U\u2081 on X-Axis",
      labelY: "Interval U\u2082 on Y-Axis",
      btnAdd: "Add Current Rectangle",
      btnClear: "Clear Canvas",
      labelProjection: "Projection: U\u2081 \u00D7 U\u2082"
    },
    FR: {
      title: "Interactif : Le cas fini (R \u00D7 R)",
      subtitle: "Voyez comment deux intervalles ouverts 1D se combinent pour former un « rectangle élémentaire » 2D. Combinez plusieurs rectangles pour construire des ouverts complexes.",
      labelX: "Intervalle U\u2081 sur l'axe X",
      labelY: "Intervalle U\u2082 sur l'axe Y",
      btnAdd: "Ajouter le rectangle actuel",
      btnClear: "Effacer le canevas",
      labelProjection: "Projection : U\u2081 \u00D7 U\u2082"
    }
  };

  const curr = content[language];

  const addRectangle = () => {
    setRects(prev => [
      ...prev,
      { x: u1.start, y: u2.start, w: u1.end - u1.start, h: u2.end - u2.start, id: Date.now() }
    ]);
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
               <div className="space-y-6">
                  <div>
                    <label className="text-[10px] font-bold text-indigo-500 uppercase tracking-widest block mb-4 flex items-center gap-2">
                      <Sliders className="w-3 h-3" /> {curr.labelX}
                    </label>
                    <div className="flex gap-4 items-center">
                       <input type="range" min="0" max="4.5" step="0.1" value={u1.start} onChange={e => setU1(p => ({ ...p, start: Math.min(parseFloat(e.target.value), p.end - 0.2) }))} className="w-full h-1 bg-slate-200 rounded-lg appearance-none accent-indigo-500" />
                       <input type="range" min="0" max="5" step="0.1" value={u1.end} onChange={e => setU1(p => ({ ...p, end: Math.max(parseFloat(e.target.value), p.start + 0.2) }))} className="w-full h-1 bg-slate-200 rounded-lg appearance-none accent-indigo-500" />
                    </div>
                  </div>

                  <div>
                    <label className="text-[10px] font-bold text-pink-500 uppercase tracking-widest block mb-4 flex items-center gap-2">
                      <Sliders className="w-3 h-3" /> {curr.labelY}
                    </label>
                    <div className="flex gap-4 items-center">
                       <input type="range" min="0" max="4.5" step="0.1" value={u2.start} onChange={e => setU2(p => ({ ...p, start: Math.min(parseFloat(e.target.value), p.end - 0.2) }))} className="w-full h-1 bg-slate-200 rounded-lg appearance-none accent-pink-500" />
                       <input type="range" min="0" max="5" step="0.1" value={u2.end} onChange={e => setU2(p => ({ ...p, end: Math.max(parseFloat(e.target.value), p.start + 0.2) }))} className="w-full h-1 bg-slate-200 rounded-lg appearance-none accent-pink-500" />
                    </div>
                  </div>
               </div>

               <div className="pt-6 border-t border-slate-200 space-y-4">
                  <button 
                    onClick={addRectangle}
                    className="w-full flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white py-4 rounded-2xl font-bold transition-all shadow-lg shadow-indigo-100"
                  >
                    <Plus className="w-4 h-4" /> {curr.btnAdd}
                  </button>
                  <button 
                    onClick={() => setRects([])}
                    className="w-full flex items-center justify-center gap-2 bg-white border border-slate-200 text-slate-400 py-3 rounded-2xl text-xs font-bold hover:text-slate-600 transition-all"
                  >
                    <RotateCcw className="w-3 h-3" /> {curr.btnClear}
                  </button>
               </div>
            </div>

            <div className="lg:col-span-2 flex justify-center">
               <div className="w-full max-w-lg aspect-square bg-white rounded-[4rem] border border-slate-100 shadow-2xl relative overflow-hidden">
                  <svg viewBox="0 0 500 500" className="w-full h-full">
                     <defs>
                        <pattern id="grid" width="50" height="50" patternUnits="userSpaceOnUse">
                           <path d="M 50 0 L 0 0 0 50" fill="none" stroke="#f1f5f9" strokeWidth="1"/>
                        </pattern>
                     </defs>
                     <rect width="100%" height="100%" fill="url(#grid)" />

                     <line x1="50" y1="450" x2="450" y2="450" stroke="#cbd5e1" strokeWidth="2" />
                     <line x1="50" y1="50" x2="50" y2="450" stroke="#cbd5e1" strokeWidth="2" />

                     {rects.map(r => (
                       <rect 
                        key={r.id}
                        x={50 + r.x * 80} y={450 - (r.y + r.h) * 80}
                        width={r.w * 80} height={r.h * 80}
                        fill="rgba(99, 102, 241, 0.05)"
                        stroke="#6366f1" strokeWidth="1" strokeDasharray="4 2"
                        className="opacity-40"
                       />
                     ))}

                     <rect x={50 + u1.start * 80} y="448" width={(u1.end - u1.start) * 80} height="4" fill="#6366f1" rx="2" />
                     <rect x="48" y={450 - u2.end * 80} width="4" height={(u2.end - u2.start) * 80} fill="#ec4899" rx="2" />

                     <motion.rect 
                        animate={{ 
                          x: 50 + u1.start * 80,
                          y: 450 - u2.end * 80,
                          width: (u1.end - u1.start) * 80,
                          height: (u2.end - u2.start) * 80
                        }}
                        fill="rgba(99, 102, 241, 0.15)"
                        stroke="#6366f1" strokeWidth="3" strokeDasharray="8 4"
                        className="shadow-inner"
                     />

                     <text x="70" y="40" className="text-[10px] font-bold fill-slate-300 uppercase tracking-widest">{curr.labelProjection}</text>
                  </svg>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FiniteProductVisualizer;
