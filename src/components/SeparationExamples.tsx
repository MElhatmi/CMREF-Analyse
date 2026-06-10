import React from 'react';
import { InlineMath } from './Math';
import { Shield, ShieldOff, Zap, HelpCircle } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const SeparationExamples: React.FC = () => {
  const { language } = useLanguage();

  const content = {
    EN: {
      header: "The 4 Classic Separation Cases",
      verdictLabel: "Verdict Logic:",
      cases: [
        {
          title: "Discrete Space",
          status: "Always Separated",
          explanation: "Every single subset is open. If you pick two distinct points, they are their own open sets.",
          math: "\\mathcal{T}_d = \\mathcal{P}(E)",
          proof: "V_x = \\{x\\}, V_y = \\{y\\} \\implies V_x \\cap V_y = \\emptyset"
        },
        {
          title: "Trivial Space",
          status: "Never Separated",
          explanation: "The only non-empty open set is the entire space. Points are forced to share.",
          math: "\\mathcal{T}_g = \\{\\emptyset, E\\}",
          proof: "V_x = E, V_y = E \\implies V_x \\cap V_y = E \\neq \\emptyset"
        },
        {
          title: "Sierpiński Space",
          status: "Not Separated",
          explanation: "Point 0 is isolated, but any neighborhood of 1 MUST include 0. Asymmetry fails.",
          math: "\\mathcal{T} = \\{\\emptyset, \\{0\\}, E\\}",
          proof: "V_0 = \\{0\\}, V_1 = E \\implies V_0 \\cap V_1 = \\{0\\} \\neq \\emptyset"
        },
        {
          title: "Metric Spaces",
          status: "Always Separated",
          explanation: "If points have distance r, just draw balls of radius r/3. They will never touch.",
          math: "\\mathbb{R}^n, \\text{ Distances}",
          proof: "B(x, r/3) \\cap B(y, r/3) = \\emptyset"
        }
      ]
    },
    FR: {
      header: "Les 4 cas classiques de séparation",
      verdictLabel: "Logique du verdict :",
      cases: [
        {
          title: "Espace discret",
          status: "Toujours séparé",
          explanation: "Chaque partie est un ouvert. Si vous choisissez deux points distincts, ils sont leurs propres ouverts.",
          math: "\\mathcal{T}_d = \\mathcal{P}(E)",
          proof: "V_x = \\{x\\}, V_y = \\{y\\} \\implies V_x \\cap V_y = \\emptyset"
        },
        {
          title: "Espace grossier",
          status: "Jamais séparé",
          explanation: "Le seul ouvert non vide est l'espace entier. Les points sont forcés de partager.",
          math: "\\mathcal{T}_g = \\{\\emptyset, E\\}",
          proof: "V_x = E, V_y = E \\implies V_x \\cap V_y = E \\neq \\emptyset"
        },
        {
          title: "Espace de Sierpiński",
          status: "Non séparé",
          explanation: "Le point 0 est isolé, mais tout voisinage de 1 DOIT inclure 0. L'asymétrie échoue.",
          math: "\\mathcal{T} = \\{\\emptyset, \\{0\\}, E\\}",
          proof: "V_0 = \\{0\\}, V_1 = E \\implies V_0 \\cap V_1 = \\{0\\} \\neq \\emptyset"
        },
        {
          title: "Espaces métriques",
          status: "Toujours séparé",
          explanation: "Si les points sont à distance r, tracez des boules de rayon r/3. Elles ne se toucheront jamais.",
          math: "\\mathbb{R}^n, \\text{ Distances}",
          proof: "B(x, r/3) \\cap B(y, r/3) = \\emptyset"
        }
      ]
    }
  };

  const curr = content[language];
  const icons = [<Zap className="text-amber-500" />, <ShieldOff className="text-red-500" />, <HelpCircle className="text-indigo-500" />, <Shield className="text-emerald-500" />];
  const colors = ["border-amber-100 bg-amber-50/30", "border-red-100 bg-red-50/30", "border-indigo-100 bg-indigo-50/30", "border-emerald-100 bg-emerald-50/30"];

  return (
    <section className="bg-slate-50 py-24 px-6">
      <div className="mx-auto max-w-7xl">
        <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center underline decoration-blue-500 decoration-4 underline-offset-8">{curr.header}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {curr.cases.map((ex, i) => (
            <div key={i} className={`rounded-[2rem] p-8 border ${colors[i]} flex flex-col shadow-sm hover:shadow-md transition-all`}>
              <div className="h-10 w-10 rounded-xl bg-white flex items-center justify-center mb-6 shadow-sm">
                {icons[i]}
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-1">{ex.title}</h3>
              <p className={`text-[10px] font-bold uppercase tracking-widest mb-4 ${ex.status.toLowerCase().includes('jamais') || ex.status.toLowerCase().includes('non') || ex.status.toLowerCase().includes('never') || ex.status.toLowerCase().includes('not') ? 'text-red-500' : 'text-emerald-600'}`}>
                {ex.status}
              </p>
              
              <div className="bg-white/60 rounded-xl p-3 mb-6 border border-white flex items-center justify-center min-h-[50px]">
                <InlineMath math={ex.math} />
              </div>

              <p className="text-xs text-slate-600 leading-relaxed mb-6 flex-grow italic">
                {ex.explanation}
              </p>

              <div className="mt-auto pt-6 border-t border-slate-200/50">
                 <p className="text-[10px] font-bold text-slate-400 uppercase mb-2">{curr.verdictLabel}</p>
                 <div className="bg-white/40 p-4 rounded-2xl text-xs font-medium text-slate-700 border border-white flex items-center justify-center min-h-[60px]">
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
