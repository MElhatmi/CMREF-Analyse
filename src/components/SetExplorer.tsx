import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { InlineMath } from './Math';
import { ChevronDown, Search, Maximize2 } from 'lucide-react';
import GlossaryTerm from './GlossaryTerm';

type SetType = 'open' | 'closed' | 'half' | 'point';

interface SetConfig {
  label: string;
  math: string;
  original: React.ReactNode;
  interior: React.ReactNode;
  closure: React.ReactNode;
  boundary: React.ReactNode;
  explanation: string;
  zoomLogic?: { left: string, right: string };
}

const SetExplorer: React.FC = () => {
  const [activeSet, setActiveSet] = useState<SetType>('half');
  const [zoomPoint, setZoomPoint] = useState<'left' | 'right' | null>(null);

  const configs: Record<SetType, SetConfig> = {
    open: {
      label: "Open Interval ]0, 1[",
      math: "]0, 1[",
      original: <Interval leftOpen={true} rightOpen={true} color="bg-slate-400" />,
      interior: <Interval leftOpen={true} rightOpen={true} color="bg-blue-500" />,
      closure: <Interval leftOpen={false} rightOpen={false} color="bg-orange-500" />,
      boundary: <Points pts={[0, 1]} color="bg-red-500" />,
      explanation: "Since the set is already open, the interior is identical to the original set. The closure adds the missing endpoints, and the boundary consists of those two endpoints.",
      zoomLogic: { left: "Hollow Circle: The point 0 is excluded.", right: "Hollow Circle: The point 1 is excluded." }
    },
    closed: {
      label: "Closed Interval [0, 1]",
      math: "[0, 1]",
      original: <Interval leftOpen={false} rightOpen={false} color="bg-slate-400" />,
      interior: <Interval leftOpen={true} rightOpen={true} color="bg-blue-500" />,
      closure: <Interval leftOpen={false} rightOpen={false} color="bg-orange-500" />,
      boundary: <Points pts={[0, 1]} color="bg-red-500" />,
      explanation: "Since the set is already closed, the closure is identical to the original. The interior 'strips' the boundary points 0 and 1, making it open.",
      zoomLogic: { left: "Solid Circle: The point 0 is included.", right: "Solid Circle: The point 1 is included." }
    },
    half: {
      label: "Half-Open Interval ]0, 1]",
      math: "]0, 1]",
      original: <Interval leftOpen={true} rightOpen={false} color="bg-slate-400" />,
      interior: <Interval leftOpen={true} rightOpen={true} color="bg-blue-500" />,
      closure: <Interval leftOpen={false} rightOpen={false} color="bg-orange-500" />,
      boundary: <Points pts={[0, 1]} color="bg-red-500" />,
      explanation: "The interior strips the hard boundary at 1, yielding ]0, 1[. The closure seals the missing boundary at 0, yielding [0, 1]. The boundary is exactly the endpoints {0, 1}.",
      zoomLogic: { left: "Hollow Circle: 0 is excluded.", right: "Solid Circle: 1 is included." }
    },
    point: {
      label: "Discrete Point {0.5}",
      math: "\\{0.5\\}",
      original: <Points pts={[0.5]} color="bg-slate-400" />,
      interior: <div className="text-xs text-slate-500 italic mt-2">Empty Set (\u2205)</div>,
      closure: <Points pts={[0.5]} color="bg-orange-500" />,
      boundary: <Points pts={[0.5]} color="bg-red-500" />,
      explanation: "A single point has no 'room' around it, so its interior is empty. It is its own closure and boundary.",
      zoomLogic: { left: "Single Point: No interior.", right: "Single Point: No interior." }
    }
  };

  const current = configs[activeSet];

  return (
    <section className="bg-slate-50 py-24 px-6">
      <div className="mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900">1D Topology Explorer</h2>
          <p className="mt-4 text-slate-600">
            Select a subset of the <GlossaryTerm term="Real Line" definition="The set of all real numbers R equipped with the standard topology.">Real line</GlossaryTerm> to see its components.
          </p>
        </div>

        <div className="bg-white rounded-[2.5rem] p-10 shadow-xl border border-slate-200 relative overflow-hidden">
          {/* Zoom Overlay */}
          <AnimatePresence>
            {zoomPoint && (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="absolute inset-0 z-50 bg-slate-900/95 backdrop-blur-xl flex flex-col items-center justify-center p-12 text-white"
              >
                <button 
                  onClick={() => setZoomPoint(null)}
                  className="absolute top-8 right-8 text-slate-400 hover:text-white transition-colors"
                >
                  <Search className="w-8 h-8" />
                </button>
                <div className="text-center">
                  <h4 className="text-2xl font-bold mb-6 flex items-center gap-3 justify-center">
                    <Maximize2 className="w-6 h-6 text-blue-400" />
                    Boundary Micro-Zoom
                  </h4>
                  <div className="w-48 h-48 bg-white/5 rounded-full border-4 border-white/20 flex items-center justify-center mb-8 relative">
                    <div className={`w-12 h-12 rounded-full border-4 ${activeSet === 'open' || (activeSet === 'half' && zoomPoint === 'left') ? 'bg-transparent border-blue-400' : 'bg-blue-400 border-white'} shadow-2xl`} />
                    <div className="absolute inset-x-0 h-1 bg-white/10 -z-10" />
                  </div>
                  <p className="text-lg text-slate-300 italic max-w-sm">
                    {zoomPoint === 'left' ? current.zoomLogic?.left : current.zoomLogic?.right}
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <div className="relative mb-12">
            <select 
              value={activeSet}
              onChange={(e) => setActiveSet(e.target.value as SetType)}
              className="w-full appearance-none bg-slate-50 border border-slate-200 rounded-2xl px-6 py-4 font-bold text-slate-900 cursor-pointer focus:ring-2 focus:ring-indigo-500 outline-none transition-all"
            >
              {Object.entries(configs).map(([key, config]) => (
                <option key={key} value={key}>{config.label}</option>
              ))}
            </select>
            <ChevronDown className="absolute right-6 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 pointer-events-none" />
          </div>

          <div className="space-y-12">
             <LineRow label="Original Set A" math={current.math} onZoom={(p) => setZoomPoint(p)}>{current.original}</LineRow>
             <LineRow label="Interior \text{Int}(A)" math="\mathring{A}" color="text-blue-600">{current.interior}</LineRow>
             <LineRow label="Closure \text{Adh}(A)" math="\overline{A}" color="text-orange-600">{current.closure}</LineRow>
             <LineRow label="Boundary \partial A" math="\text{Fr}(A)" color="text-red-600">{current.boundary}</LineRow>
          </div>

          <div className="mt-16 bg-slate-900 rounded-3xl p-8 text-white relative overflow-hidden">
             <div className="flex gap-4 items-start">
                <div className="w-10 h-10 bg-indigo-500 rounded-xl flex items-center justify-center shrink-0 shadow-lg shadow-indigo-500/20">
                   <span className="font-bold">i</span>
                </div>
                <div>
                   <h4 className="font-bold text-indigo-400 mb-2 uppercase tracking-widest text-xs">Insight</h4>
                   <p className="text-slate-300 leading-relaxed text-sm">
                      {current.explanation}
                   </p>
                </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const LineRow: React.FC<{ label: string; math: string; color?: string; children: React.ReactNode; onZoom?: (p: 'left' | 'right') => void }> = ({ label, math, color, children, onZoom }) => (
  <div className="group relative">
    <div className="flex justify-between items-end mb-4 px-2">
      <span className="text-xs font-bold uppercase tracking-widest text-slate-400">{label}</span>
      <span className={`text-lg font-serif italic ${color}`}><InlineMath math={math} /></span>
    </div>
    <div className="relative h-12 flex items-center">
       <div className="absolute inset-x-0 h-0.5 bg-slate-100" />
       
       {/* Zoom Buttons */}
       {onZoom && (
         <>
           <button 
             onClick={() => onZoom('left')}
             className="absolute left-[22%] top-1/2 -translate-y-1/2 z-20 p-1 bg-white shadow-md rounded-full text-slate-400 hover:text-blue-600 transition-colors opacity-0 group-hover:opacity-100"
           >
             <Search className="w-3 h-3" />
           </button>
           <button 
             onClick={() => onZoom('right')}
             className="absolute right-[22%] top-1/2 -translate-y-1/2 z-20 p-1 bg-white shadow-md rounded-full text-slate-400 hover:text-blue-600 transition-colors opacity-0 group-hover:opacity-100"
           >
             <Search className="w-3 h-3" />
           </button>
         </>
       )}

       <div className="absolute inset-x-0 flex justify-between px-2 opacity-20">
          {[-1, 0, 1, 2].map(v => <div key={v} className="h-4 w-px bg-slate-900" />)}
       </div>
       <div className="relative w-full h-full flex items-center px-[25%]">
          {children}
       </div>
    </div>
  </div>
);

const Interval: React.FC<{ leftOpen: boolean; rightOpen: boolean; color: string }> = ({ leftOpen, rightOpen, color }) => (
  <div className="relative w-full h-2 flex items-center">
    <motion.div 
      initial={{ scaleX: 0 }}
      animate={{ scaleX: 1 }}
      className={`absolute inset-0 ${color} h-2 rounded-full`}
    />
    <div className={`absolute left-0 -translate-x-1/2 w-4 h-4 rounded-full border-2 border-white shadow-sm ${leftOpen ? 'bg-white border-slate-300' : color}`} />
    <div className={`absolute right-0 translate-x-1/2 w-4 h-4 rounded-full border-2 border-white shadow-sm ${rightOpen ? 'bg-white border-slate-300' : color}`} />
  </div>
);

const Points: React.FC<{ pts: number[]; color: string }> = ({ pts, color }) => (
  <div className="relative w-full h-full flex items-center justify-center">
    {pts.map((_, i) => (
      <motion.div 
        key={i}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        className={`w-4 h-4 rounded-full border-2 border-white shadow-sm ${color} ${pts.length > 1 ? (i === 0 ? '-translate-x-[150%]' : 'translate-x-[150%]') : ''}`}
        style={pts.length > 1 ? {} : { left: '50%', position: 'absolute', transform: 'translateX(-50%)' }}
      />
    ))}
  </div>
);

export default SetExplorer;
