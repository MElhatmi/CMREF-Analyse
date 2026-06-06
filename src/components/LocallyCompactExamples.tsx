import React from 'react';
import { InlineMath } from './Math';
import { CheckCircle2, XCircle, Sparkles } from 'lucide-react';

import { useLanguage } from '../context/LanguageContext';

const LocallyCompactExamples: React.FC = () => {
  const { language } = useLanguage();
  const examples = [
    {
      title: "Compact implies Locally Compact",
      status: "Trivial Success",
      icon: <Sparkles className="text-amber-500" />,
      color: "border-amber-100 bg-amber-50/30",
      explanation: "If the entire universe E is compact, then for any point x, the whole space E itself acts as a valid compact neighborhood.",
      logic: language === 'EN' ? "x \\in E \\subset E \\quad \\text{(E is open and compact)}" : "x \\in E \\subset E \\quad \\text{(E est ouvert et compact)}"
    },
    {
      title: language === 'EN' ? "The Real Line \\mathbb{R}" : "La droite réelle \\mathbb{R}",
      status: language === 'EN' ? "Unbounded Success" : "Succès non borné",
      icon: <CheckCircle2 className="text-emerald-500" />,
      color: "border-emerald-100 bg-emerald-50/30",
      explanation: language === 'EN' ? "R stretches to infinity, but every point x has a closed interval [x-1, x+1] around it. This set is closed and bounded." : "R s'étend à l'infini, mais chaque point x possède un intervalle fermé [x-1, x+1]. Cet ensemble est fermé et borné.",
      logic: language === 'EN' ? "V = [x-1, x+1] \\quad \\text{is compact by Borel-Lebesgue.}" : "V = [x-1, x+1] \\quad \\text{est compact par Borel-Lebesgue.}"
    },
    {
      title: language === 'EN' ? "The Rationals \\mathbb{Q}" : "Les rationnels \\mathbb{Q}",
      status: language === 'EN' ? "Critical Failure" : "Échec critique",
      icon: <XCircle className="text-red-500" />,
      color: "border-red-100 bg-red-50/30",
      explanation: language === 'EN' ? "Try drawing a 'closed interval' in Q. It is full of holes where irrationals like \\sqrt{2} should be. Limit points are missing." : "Essayez de tracer un « intervalle fermé » dans Q. Il est plein de trous là où les irrationnels comme \\sqrt{2} devraient être.",
      logic: language === 'EN' ? "\\text{No neighborhood in } \\mathbb{Q} \\text{ can be truly compact.}" : "\\text{Aucun voisinage dans } \\mathbb{Q} \\text{ ne peut être vraiment compact.}"
    }
  ];

  return (
    <section className="bg-white py-24 px-6 overflow-hidden">
      <div className="mx-auto max-w-7xl">
        <h2 className="text-3xl font-bold text-slate-900 mb-16 text-center">Exemples 4: Three Classic Cases</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {examples.map((ex, i) => (
            <div key={i} className={`rounded-[3rem] p-10 border ${ex.color} flex flex-col shadow-sm hover:shadow-md transition-all`}>
              <div className="h-12 w-12 rounded-2xl bg-white flex items-center justify-center mb-8 shadow-sm">
                {ex.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2 tracking-tight">{ex.title}</h3>
              <p className={`text-[10px] font-bold uppercase tracking-widest mb-6 ${ex.status.includes('Failure') ? 'text-red-500' : 'text-emerald-600'}`}>
                {ex.status}
              </p>
              
              <p className="text-sm text-slate-600 leading-relaxed mb-8 flex-grow italic">
                {ex.explanation}
              </p>

              <div className="mt-auto pt-8 border-t border-slate-200/50">
                 <p className="text-[10px] font-bold text-slate-400 uppercase mb-4 tracking-tighter">Mathematical Logic:</p>
                 <div className="bg-white/40 p-4 rounded-2xl text-xs font-medium text-slate-700 border border-white flex items-center justify-center min-h-[60px]">
                    <InlineMath math={ex.logic} />
                 </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LocallyCompactExamples;
