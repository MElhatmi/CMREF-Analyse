import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, RotateCcw, Box } from 'lucide-react';
import { InlineMath } from './Math';
import { useLanguage } from '../context/LanguageContext';

const BaseBuilderVisualizer: React.FC = () => {
  const [circles, setCircles] = useState<{ x: number; y: number; r: number }[]>([]);
  const [isBuilding, setIsBuilding] = useState(false);
  const containerRef = useRef<SVGSVGElement>(null);
  const { language } = useLanguage();

  const content = {
    EN: {
      title: "Interactive: Building with Bases",
      subtitle: "In R², open disks form a base. Watch how a complex, irregular open set is constructed perfectly by a union of simple basic disks.",
      constructTitle: "Constructing U",
      constructDesc: "Any open set U (the amoeba) can be represented as a union of basic open sets (the disks).",
      btnFill: "Fill with Base Elements",
      labelTarget: "Target Open Set U"
    },
    FR: {
      title: "Interactif : Construire avec des Bases",
      subtitle: "Dans R², les disques ouverts forment une base. Voyez comment un ouvert complexe et irrégulier est construit parfaitement par une réunion de disques élémentaires.",
      constructTitle: "Construction de U",
      constructDesc: "Tout ouvert U (l'amibe) peut être représenté comme une réunion d'ouverts de base (les disques).",
      btnFill: "Remplir avec des éléments de base",
      labelTarget: "Ouvert cible U"
    }
  };

  const curr = content[language];

  // Amoeba path for masking and logic
  const amoebaPath = "M 100 150 Q 120 80 200 100 T 300 150 Q 280 230 200 220 T 100 150";

  const startBuilding = () => {
    setCircles([]);
    setIsBuilding(true);
  };

  useEffect(() => {
    if (!isBuilding) return;

    let count = 0;
    const interval = setInterval(() => {
      if (count >= 150) {
        setIsBuilding(false);
        clearInterval(interval);
        return;
      }

      const x = 110 + Math.random() * 180;
      const y = 100 + Math.random() * 120;
      const r = 5 + Math.random() * 15;

      setCircles((prev) => [...prev, { x, y, r }]);
      count++;
    }, 30);

    return () => clearInterval(interval);
  }, [isBuilding]);

  return (
    <section className="bg-slate-50 py-24 px-6">
      <div className="mx-auto max-w-5xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-4 tracking-tight">{curr.title}</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            {curr.subtitle}
          </p>
        </div>

        <div className="bg-white rounded-[3rem] p-10 shadow-sm border border-slate-200 overflow-hidden">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            
            <div className="lg:w-1/2 space-y-6">
               <div className="p-6 bg-slate-50 rounded-3xl border border-slate-100">
                  <h4 className="font-bold text-slate-900 mb-2 flex items-center gap-2">
                    <Box className="w-4 h-4 text-blue-500" /> {curr.constructTitle}
                  </h4>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {curr.constructDesc}
                  </p>
                  <div className="mt-4 text-sm bg-white p-3 rounded-xl border border-slate-200 text-blue-600 flex items-center justify-center min-h-[50px]">
                    <InlineMath math="U = \bigcup_{i \in I} B_i \text{ where } B_i \in \mathcal{B}" />
                  </div>
               </div>

               <div className="flex gap-4">
                  <button 
                    onClick={startBuilding}
                    disabled={isBuilding}
                    className="flex-grow flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 disabled:bg-slate-300 text-white py-4 rounded-2xl font-bold transition-all shadow-lg shadow-blue-200"
                  >
                    <Play className="w-4 h-4" /> {curr.btnFill}
                  </button>
                  <button 
                    onClick={() => setCircles([])}
                    className="p-4 bg-slate-100 hover:bg-slate-200 text-slate-600 rounded-2xl transition-all"
                  >
                    <RotateCcw className="w-5 h-5" />
                  </button>
               </div>
            </div>

            <div className="lg:w-1/2 w-full flex justify-center">
               <div className="relative w-full max-w-[400px] aspect-square bg-slate-50 rounded-[2.5rem] border border-slate-100 overflow-hidden shadow-inner">
                  <svg 
                    ref={containerRef}
                    viewBox="0 0 400 300" 
                    className="w-full h-full"
                  >
                    <path
                      id="amoeba"
                      d={amoebaPath}
                      fill="rgba(59, 130, 246, 0.05)"
                      stroke="#3b82f6"
                      strokeWidth="2"
                      strokeDasharray="5 5"
                    />

                    <defs>
                      <clipPath id="amoeba-clip">
                        <path d={amoebaPath} />
                      </clipPath>
                    </defs>

                    <g clipPath="url(#amoeba-clip)">
                      <AnimatePresence>
                        {circles.map((c, i) => (
                          <motion.circle
                            key={i}
                            cx={c.x}
                            cy={c.y}
                            r={c.r}
                            initial={{ scale: 0, opacity: 0 }}
                            animate={{ scale: 1, opacity: 0.3 }}
                            fill="#6366f1"
                            stroke="#4f46e5"
                            strokeWidth="1"
                          />
                        ))}
                      </AnimatePresence>
                    </g>

                    <text x="20" y="40" className="text-[10px] font-bold fill-slate-300 uppercase tracking-widest">{curr.labelTarget}</text>
                  </svg>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BaseBuilderVisualizer;
