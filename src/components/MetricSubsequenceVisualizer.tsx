import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Scissors, ChevronDown, CheckCircle2 } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

type SequenceType = 'convergent' | 'oscillating' | 'trap';

const MetricSubsequenceVisualizer: React.FC = () => {
  const { t } = useLanguage();
  const [seqType, setSeqType] = useState<SequenceType>('convergent');
  const [extracted, setExtracted] = useState(false);

  const points = useMemo(() => {
    const result = [];
    for (let n = 0; n <= 40; n++) {
      let y = 0;
      if (seqType === 'convergent') {
        y = 15 / (n + 1);
      } else if (seqType === 'oscillating') {
        y = 5 * (n % 2 === 0 ? 1 : -1);
      } else if (seqType === 'trap') {
        y = n % 2 === 0 ? 0 : n / 2.5;
      }
      result.push({ n, y });
    }
    return result;
  }, [seqType]);

  const subseq = useMemo(() => points.filter(p => p.n % 2 === 0), [points]);

  const getYPos = (y: number) => 150 - (y * 15);
  const getXPos = (n: number) => 40 + (n * 8);

  const getInsightText = () => {
    if (!extracted) return "";
    if (seqType === 'convergent') return "The original sequence already converged. The subsequence simply follows the same path.";
    if (seqType === 'oscillating') return "The overall sequence jumps between -5 and 5. But by extracting only the even indices, the subsequence is constant at 5, which trivially converges.";
    if (seqType === 'trap') return "The odd terms explode to infinity, causing divergence. But the even subsequence is locked at 0, revealing 0 as a hidden value of adherence.";
    return "";
  };

  return (
    <section className="bg-white py-24 px-6 overflow-hidden">
      <div className="mx-auto max-w-5xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-4 tracking-tight">{t('metrics.seq.viz.title')}</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            {t('metrics.seq.viz.subtitle')}
          </p>
        </div>

        <div className="bg-slate-50 rounded-[3rem] p-10 shadow-sm border border-slate-100 shadow-inner">
           <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
              
              <div className="lg:col-span-1 space-y-8">
                 <div>
                    <label className="text-xs font-bold text-slate-400 uppercase tracking-widest block mb-4">Sequence Type</label>
                    <div className="relative">
                      <select 
                        value={seqType}
                        onChange={(e) => { setSeqType(e.target.value as SequenceType); setExtracted(false); }}
                        className="w-full appearance-none bg-white border border-slate-200 rounded-2xl px-6 py-4 font-bold text-slate-900 cursor-pointer focus:ring-2 focus:ring-blue-500 outline-none shadow-sm transition-all"
                      >
                        <option value="convergent">Convergent (15/(n+1))</option>
                        <option value="oscillating">Oscillating (5\u00B7(-1)\u207F)</option>
                        <option value="trap">The Trap (Exploding Odds)</option>
                      </select>
                      <ChevronDown className="absolute right-6 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 pointer-events-none" />
                    </div>
                 </div>

                 <button 
                  onClick={() => setExtracted(!extracted)}
                  className={`w-full py-4 rounded-2xl font-bold transition-all shadow-lg flex items-center justify-center gap-3 ${extracted ? 'bg-indigo-600 text-white shadow-indigo-200' : 'bg-white border-2 border-indigo-100 text-indigo-600 hover:bg-indigo-50'}`}
                 >
                   <Scissors className="w-5 h-5" />
                   {extracted ? "Restore Sequence" : "Extract Subsequence (φ(n)=2n)"}
                 </button>

                 <AnimatePresence>
                    {extracted && (
                       <motion.div 
                        initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
                        className="p-6 rounded-[2rem] border bg-emerald-50 border-emerald-100 text-emerald-900"
                       >
                          <div className="flex gap-4">
                             <CheckCircle2 className="w-6 h-6 shrink-0" />
                             <div>
                                <h5 className="font-bold text-xs uppercase tracking-widest mb-1">Subsequence insight</h5>
                                <p className="text-[10px] leading-relaxed opacity-80 italic">
                                   {getInsightText()}
                                </p>
                             </div>
                          </div>
                       </motion.div>
                    )}
                 </AnimatePresence>
              </div>

              <div className="lg:col-span-2 flex justify-center">
                 <div className="w-full max-w-lg aspect-[16/9] bg-slate-900 rounded-[3rem] border border-slate-800 shadow-2xl relative overflow-hidden flex flex-col justify-center p-12">
                    <svg viewBox="0 0 400 300" className="w-full h-full overflow-visible">
                       {/* Axes */}
                       <line x1="40" y1="150" x2="380" y2="150" stroke="#475569" strokeWidth="1" />
                       <line x1="40" y1="20" x2="40" y2="280" stroke="#475569" strokeWidth="1" />
                       
                       {/* Grid lines */}
                       {[0, 10, 20, 30, 40].map(n => (
                          <line key={n} x1={getXPos(n)} y1="155" x2={getXPos(n)} y2="145" stroke="#475569" strokeWidth="1" />
                       ))}

                       {/* Full sequence (faded) */}
                       {points.map((p, i) => (
                          <circle 
                            key={i} cx={getXPos(p.n)} cy={getYPos(p.y)} r="2" 
                            fill="#475569" 
                            opacity={extracted && p.n % 2 !== 0 ? 0.1 : 0.6}
                            className="transition-opacity duration-500"
                          />
                       ))}

                       {/* Subsequence (highlighted) */}
                       <AnimatePresence>
                          {extracted && (
                             <motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                                {/* Path through subsequence */}
                                <path 
                                  d={`M ${subseq.map(p => `${getXPos(p.n)} ${getYPos(p.y)}`).join(' L ')}`}
                                  fill="none" stroke="#818cf8" strokeWidth="1.5" strokeDasharray="4 2"
                                />
                                {subseq.map((p, i) => (
                                   <motion.circle 
                                     key={i} cx={getXPos(p.n)} cy={getYPos(p.y)} r="4" 
                                     fill="#818cf8"
                                     initial={{ scale: 0 }} animate={{ scale: 1 }}
                                     transition={{ delay: i * 0.05 }}
                                   />
                                ))}
                             </motion.g>
                          )}
                       </AnimatePresence>

                       <text x="350" y="170" className="text-[10px] font-bold fill-slate-500 font-mono">n</text>
                       <text x="20" y="40" className="text-[10px] font-bold fill-slate-500 font-mono italic">U_n</text>
                    </svg>
                 </div>
              </div>
           </div>
        </div>
      </div>
    </section>
  );
};

export default MetricSubsequenceVisualizer;
