import React from 'react';
import { InlineMath } from './Math';
import { Shield, ShieldOff, Zap, HelpCircle } from 'lucide-react';

const SeparationExamples: React.FC = () => {
  const examples = [
    {
      title: "Discrete Space",
      status: "Always Separated",
      icon: <Zap className="text-amber-500" />,
      color: "border-amber-100 bg-amber-50/30",
      math: "\mathcal{T}_d = \mathcal{P}(E)",
      explanation: "Every single subset is open. If you pick two distinct points, they are their own open sets.",
      proof: "V_x = \{x\}, V_y = \{y\} \implies V_x \cap V_y = \emptyset"
    },
    {
      title: "Trivial Space",
      status: "Never Separated",
      icon: <ShieldOff className="text-red-500" />,
      color: "border-red-100 bg-red-50/30",
      math: "\mathcal{T}_g = \{\emptyset, E\}",
      explanation: "The only non-empty open set is the entire space. Points are forced to share.",
      proof: "V_x = E, V_y = E \implies V_x \cap V_y = E \neq \emptyset"
    },
    {
      title: "Sierpiński Space",
      status: "Not Separated",
      icon: <HelpCircle className="text-indigo-500" />,
      color: "border-indigo-100 bg-indigo-50/30",
      math: "\mathcal{T} = \{\emptyset, \{0\}, E\}",
      explanation: "Point 0 is isolated, but any neighborhood of 1 MUST include 0. Asymmetry fails.",
      proof: "V_0 = \{0\}, V_1 = E \implies V_0 \cap V_1 = \{0\} \neq \emptyset"
    },
    {
      title: "Metric Spaces",
      status: "Always Separated",
      icon: <Shield className="text-emerald-500" />,
      color: "border-emerald-100 bg-emerald-50/30",
      math: "\mathbb{R}^n, \text{ Distances}",
      explanation: "If points have distance r, just draw balls of radius r/3. They will never touch.",
      proof: "B(x, r/3) \cap B(y, r/3) = \emptyset"
    }
  ];

  return (
    <section className="bg-slate-50 py-24 px-6">
      <div className="mx-auto max-w-7xl">
        <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center underline decoration-blue-500 decoration-4 underline-offset-8">The 4 Classic Separation Cases</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {examples.map((ex, i) => (
            <div key={i} className={`rounded-[2rem] p-8 border ${ex.color} flex flex-col shadow-sm hover:shadow-md transition-all`}>
              <div className="h-10 w-10 rounded-xl bg-white flex items-center justify-center mb-6 shadow-sm">
                {ex.icon}
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-1">{ex.title}</h3>
              <p className={`text-[10px] font-bold uppercase tracking-widest mb-4 ${ex.status.includes('Never') || ex.status.includes('Not') ? 'text-red-500' : 'text-emerald-600'}`}>
                {ex.status}
              </p>
              
              <div className="bg-white/60 rounded-xl p-3 mb-6 border border-white">
                <InlineMath math={ex.math} />
              </div>

              <p className="text-xs text-slate-600 leading-relaxed mb-6 flex-grow">
                {ex.explanation}
              </p>

              <div className="mt-auto pt-6 border-t border-slate-200/50">
                 <p className="text-[10px] font-bold text-slate-400 uppercase mb-2">Verdict Logic:</p>
                 <div className="text-[10px] font-mono text-slate-500 bg-white/40 p-2 rounded italic">
                    <InlineMath math={ex.proof} />
                 </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SeparationExamples;
