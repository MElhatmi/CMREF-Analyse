import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

const SetConceptsHero: React.FC = () => {
  const [showClosure, setShowClosure] = useState(false);
  const { language } = useLanguage();

  const content = {
    EN: {
      title: "Interior, Closure, and",
      accent: "Boundary",
      desc: "Before we dive into the formal math, let's understand these regions intuitively. Every subset of a topological space can be divided into three distinct zones based on how they relate to the \"edges\" of the set.",
      interior: "Interior:",
      interiorDesc: "The \"safe core\" of a set, far away from the edges. Every point here is surrounded by other points of the set.",
      closure: "Closure:",
      closureDesc: "The set with all its \"edges\" sealed. It includes the interior and the boundary.",
      boundary: "Boundary:",
      boundaryDesc: "The literal \"shell\" or \"frontier\" where the inside meets the outside.",
      viewSubset: "Subset View",
      viewClosure: "Closure View",
      labelInterior: "INTERIOR",
      labelBoundary: "BOUNDARY (FRONT)",
      labelClosure: "CLOSURE",
      pointsOutside: "Points outside"
    },
    FR: {
      title: "Intérieur, Adhérence et",
      accent: "Frontière",
      desc: "Avant de plonger dans les mathématiques formelles, comprenons ces régions intuitivement. Chaque partie d'un espace topologique peut être divisée en trois zones distinctes selon leur relation avec les « bords ».",
      interior: "Intérieur :",
      interiorDesc: "Le « cœur sûr » d'un ensemble, loin des bords. Chaque point ici est entouré d'autres points de l'ensemble.",
      closure: "Adhérence :",
      closureDesc: "L'ensemble avec tous ses « bords » scellés. Elle inclut l'intérieur et la frontière.",
      boundary: "Frontière :",
      boundaryDesc: "La « coque » ou le « front » littéral où l'intérieur rencontre l'extérieur.",
      viewSubset: "Vue Partie",
      viewClosure: "Vue Adhérence",
      labelInterior: "INTÉRIEUR",
      labelBoundary: "FRONTIÈRE",
      labelClosure: "ADHÉRENCE",
      pointsOutside: "Points extérieurs"
    }
  };

  const curr = content[language];

  return (
    <section className="relative overflow-hidden bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:items-center lg:gap-x-12">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-6xl">
              {curr.title} <span className="text-red-500">{curr.accent}</span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-slate-600">
              {curr.desc}
            </p>
            <div className="mt-8 space-y-4">
              <div className="flex gap-4">
                <div className="w-1 h-auto bg-blue-500 rounded-full" />
                <p className="text-sm text-slate-600"><span className="font-bold text-blue-600 uppercase tracking-tight">{curr.interior}</span> {curr.interiorDesc}</p>
              </div>
              <div className="flex gap-4">
                <div className="w-1 h-auto bg-orange-500 rounded-full" />
                <p className="text-sm text-slate-600"><span className="font-bold text-orange-600 uppercase tracking-tight">{curr.closure}</span> {curr.closureDesc}</p>
              </div>
              <div className="flex gap-4">
                <div className="w-1 h-auto bg-red-500 rounded-full" />
                <p className="text-sm text-slate-600"><span className="font-bold text-red-600 uppercase tracking-tight">{curr.boundary}</span> {curr.boundaryDesc}</p>
              </div>
            </div>
            
            <button 
              onClick={() => setShowClosure(!showClosure)}
              className="mt-8 px-6 py-3 bg-slate-900 text-white rounded-xl font-bold text-sm hover:bg-slate-800 transition-all shadow-lg"
            >
              Toggle {showClosure ? curr.viewSubset : curr.viewClosure}
            </button>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center"
          >
            <svg viewBox="0 0 400 300" className="w-full max-w-md drop-shadow-2xl">
              <rect width="400" height="300" rx="30" fill="#f8fafc" />
              
              <motion.path
                d="M 100 150 Q 120 80 200 100 T 300 150 Q 280 230 200 220 T 100 150"
                fill={showClosure ? "rgba(249, 115, 22, 0.2)" : "rgba(59, 130, 246, 0.2)"}
                stroke={showClosure ? "#f97316" : "#ef4444"}
                strokeWidth={showClosure ? "4" : "2"}
                className="transition-colors duration-500"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2 }}
              />
              
              {!showClosure && (
                <>
                  <motion.path
                    d="M 130 150 Q 140 110 200 120 T 270 150 Q 260 200 200 190 T 130 150"
                    fill="rgba(59, 130, 246, 0.4)"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                  />
                  <text x="180" y="160" className="text-[10px] font-bold fill-blue-700">{curr.labelInterior}</text>
                  <text x="280" y="240" className="text-[10px] font-bold fill-red-600">{curr.labelBoundary}</text>
                </>
              )}

              {showClosure && (
                <motion.text 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  x="180" y="160" className="text-[10px] font-bold fill-orange-700"
                >
                  {curr.labelClosure}
                </motion.text>
              )}
              
              <g className="opacity-40">
                <circle cx="50" cy="50" r="3" fill="#cbd5e1" />
                <text x="60" y="55" className="text-[8px] fill-slate-400 font-mono italic">{curr.pointsOutside}</text>
              </g>
            </svg>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SetConceptsHero;
