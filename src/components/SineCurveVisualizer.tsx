import React, { useState } from 'react';
import { Sliders, HelpCircle, Activity } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const SineCurveVisualizer: React.FC = () => {
  const [zoom, setZoom] = useState(1);
  const { language } = useLanguage();

  const content = {
    EN: {
      title: "The Topologist's Sine Curve",
      subtitle: "The classic counter-example: A space that is Connected but NOT Path-Connected.",
      zoomLabel: "Zoom Near x=0",
      problemTitle: "The Problem",
      problemDesc: "\"To reach (0,0) from any point on the curve, you must traverse an infinite number of oscillations in a finite time. A continuous arc cannot survive this.\"",
      originLabel: "Origin (0,0)",
      anomalyTitle: "Mathematical Anomaly",
      connectedDesc: "This space is Connected because the origin (0,0) lies exactly in the closure of the sine wave. You cannot separate them with open sets—they are topologically \"stuck\" together.",
      notPathConnectedDesc: "However, it is NOT Path-Connected. There is no continuous path from the curve to the origin because the \"journey\" requires an infinite amount of movement that cannot be compressed into a continuous function."
    },
    FR: {
      title: "La sinusoïde du topologue",
      subtitle: "Le contre-exemple classique : un espace Connexe mais PAS connexe par arcs.",
      zoomLabel: "Zoomer vers x=0",
      problemTitle: "Le Problème",
      problemDesc: "« Pour atteindre (0,0) depuis n'importe quel point de la courbe, il faut traverser un nombre infini d'oscillations en un temps fini. Un arc continu ne peut pas survivre à cela. »",
      originLabel: "Origine (0,0)",
      anomalyTitle: "Anomalie Mathématique",
      connectedDesc: "Cet espace est Connexe car l'origine (0,0) se trouve exactement dans l'adhérence de la courbe. On ne peut pas les séparer par des ouverts — ils sont topologiquement « collés ».",
      notPathConnectedDesc: "Cependant, il n'est PAS connexe par arcs. Il n'existe aucun chemin continu de la courbe vers l'origine car le « voyage » nécessite un mouvement infini impossible à compresser dans une fonction continue."
    }
  };

  const curr = content[language];

  // Generate sine curve points
  const points = [];
  const res = 1000;
  for (let i = 0; i <= res; i++) {
    const x = 0.001 + (i / res) * (1 / zoom);
    const y = Math.sin(1 / x);
    points.push({ x: (i / res) * 400, y: 150 - y * 80 });
  }

  const pathD = `M ${points[0].x} ${points[0].y} ` + points.slice(1).map(p => `L ${p.x} ${p.y}`).join(' ');

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
           <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
              
              <div className="lg:col-span-1 space-y-8">
                 <div>
                    <label className="text-xs font-bold text-slate-400 uppercase tracking-widest block mb-4 flex items-center gap-2">
                       <Sliders className="w-4 h-4 text-blue-500" /> {curr.zoomLabel}
                    </label>
                    <input 
                      type="range" min="1" max="20" step="0.1"
                      value={zoom} onChange={(e) => setZoom(parseFloat(e.target.value))}
                      className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
                    />
                 </div>

                 <div className="p-6 bg-slate-900 rounded-[2rem] text-white space-y-4">
                    <div className="flex items-center gap-2">
                       <HelpCircle className="w-4 h-4 text-amber-400" />
                       <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500">{curr.problemTitle}</span>
                    </div>
                    <p className="text-[11px] leading-relaxed italic text-slate-300">
                       {curr.problemDesc}
                    </p>
                 </div>
              </div>

              <div className="lg:col-span-2 flex justify-center">
                 <div className="w-full max-w-lg aspect-square bg-white rounded-[4rem] border border-slate-100 shadow-2xl relative overflow-hidden flex items-center justify-center p-8">
                    <svg viewBox="0 0 400 300" className="w-full h-full">
                       <line x1="0" y1="150" x2="400" y2="150" stroke="#f1f5f9" strokeWidth="1" />
                       <line x1="10" y1="0" x2="10" y2="300" stroke="#cbd5e1" strokeWidth="2" />
                       <path d={pathD} fill="none" stroke="#6366f1" strokeWidth="1.5" />
                       <circle cx="10" cy="150" r="4" fill="#ef4444" />
                       <text x="15" y="165" className="text-[10px] font-bold fill-red-600">{curr.originLabel}</text>
                       <text x="300" y="50" className="text-[10px] font-bold fill-slate-300 uppercase tracking-widest">f(x) = sin(1/x)</text>
                    </svg>
                 </div>
              </div>
           </div>
        </div>

        <div className="mt-16 bg-blue-600 rounded-[3rem] p-12 text-white relative overflow-hidden shadow-xl">
           <div className="absolute top-0 right-0 p-12 opacity-10">
              <Activity className="w-64 h-64" />
           </div>
           <div className="relative z-10">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                 <span className="bg-white/20 p-2 rounded-xl">i</span>
                 {curr.anomalyTitle}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-sm">
                 <p className="text-blue-50 leading-relaxed">
                    {curr.connectedDesc}
                 </p>
                 <p className="text-blue-50 leading-relaxed font-bold italic">
                    {curr.notPathConnectedDesc}
                 </p>
              </div>
           </div>
        </div>
      </div>
    </section>
  );
};

export default SineCurveVisualizer;
