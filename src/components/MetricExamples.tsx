import React from 'react';
import { InlineMath } from './Math';
import { useLanguage } from '../context/LanguageContext';
import { Ruler, Maximize2, Zap } from 'lucide-react';

const MetricExamples: React.FC = () => {
  const { language, t } = useLanguage();

  const content = {
    EN: {
      cases: [
        {
          title: "Standard Distance on ℝ",
          desc: "The most intuitive metric is the absolute value difference.",
          math: "d(x,y) = |x - y|",
          label: "(\\mathbb{R}, |\\cdot|)"
        },
        {
          title: "Maximum Distance on ℝⁿ",
          desc: "In higher dimensions, we can measure distance by looking at the largest gap across any single coordinate axis.",
          math: "d_\\infty(x,y) = \\max_{1 \\le i \\le n} |x_i - y_i|",
          label: "d_\\infty"
        },
        {
          title: "The Discrete Distance",
          desc: "We can turn ANY set into a metric space. It treats distinct points as being exactly 1 unit away, isolating them.",
          math: "d(x,y) = 1 \\text{ if } x \\neq y \\text{, else } 0",
          label: "\\text{Discrete}"
        }
      ]
    },
    FR: {
      cases: [
        {
          title: "Distance usuelle sur ℝ",
          desc: "La métrique la plus intuitive est la valeur absolue de la différence.",
          math: "d(x,y) = |x - y|",
          label: "(\\mathbb{R}, |\\cdot|)"
        },
        {
          title: "Distance de Tchebychev sur ℝⁿ",
          desc: "En dimensions supérieures, on mesure la distance par le plus grand écart sur n'importe quel axe.",
          math: "d_\\infty(x,y) = \\max_{1 \\le i \\le n} |x_i - y_i|",
          label: "d_\\infty"
        },
        {
          title: "La distance discrète",
          desc: "N'importe quel ensemble peut devenir un espace métrique. Deux points distincts sont toujours à distance 1.",
          math: "d(x,y) = 1 \\text{ si } x \\neq y \\text{, sinon } 0",
          label: "\\text{Discrète}"
        }
      ]
    }
  };

  const curr = content[language];
  const icons = [<Ruler className="text-blue-500" />, <Maximize2 className="text-indigo-500" />, <Zap className="text-amber-500" />];

  return (
    <section className="bg-white py-24 px-6 overflow-hidden">
      <div className="mx-auto max-w-7xl">
        <h2 className="text-3xl font-bold text-slate-900 mb-16 text-center underline decoration-blue-500 decoration-4 underline-offset-8">{t('metrics.ex.title')}</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {curr.cases.map((ex, i) => (
            <div key={i} className="bg-slate-50 rounded-[3rem] p-10 border border-slate-100 flex flex-col shadow-sm hover:shadow-md transition-all">
              <div className="h-12 w-12 rounded-2xl bg-white flex items-center justify-center mb-8 shadow-sm">
                {icons[i]}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2 tracking-tight">{ex.title}</h3>
              <div className="text-[10px] font-bold uppercase tracking-widest mb-6 text-blue-600 h-4">
                 <InlineMath math={ex.label} />
              </div>
              
              <p className="text-sm text-slate-600 leading-relaxed mb-8 flex-grow italic">
                {ex.desc}
              </p>

              <div className="mt-auto pt-8 border-t border-slate-200">
                 <div className="bg-white p-4 rounded-2xl text-xs font-medium text-slate-700 border border-slate-200 flex items-center justify-center min-h-[60px]">
                    <InlineMath math={ex.math} />
                 </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MetricExamples;
