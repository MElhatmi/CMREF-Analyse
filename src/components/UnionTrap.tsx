import React from 'react';
import { BlockMath } from './Math';
import { XCircle, AlertTriangle, Infinity as InfinityIcon } from 'lucide-react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

const UnionTrap: React.FC = () => {
  const { language } = useLanguage();

  const content = {
    EN: {
      title: "3. The Union Trap",
      desc: "A common mistake is thinking any collection of \"familiar\" open sets forms a topology. Let's test the collection T of ONLY bounded open intervals on R.",
      axiomTest: "The Axiom Test:",
      axiomDesc: "Axiom 3 says ANY union of sets in the collection must also be in the collection.",
      consider: "Consider the infinite union:",
      verdict: "\"The result is a ray that goes to infinity. It is not bounded. Therefore, it is NOT in our original collection.\"",
      infiniteResult: "Infinite Result: Unbounded Ray",
      statusLabel: "Status of result",
      notBounded: "NOT BOUNDED",
      verdictLabel: "Topological Verdict",
      failsAxiom: "FAILS AXIOM 3"
    },
    FR: {
      title: "3. Le Piège de la Réunion",
      desc: "Une erreur courante est de penser que n'importe quelle collection d'ouverts « familiers » forme une topologie. Testons la collection T des intervalles ouverts BORNÉS sur R.",
      axiomTest: "Le Test de l'Axiome :",
      axiomDesc: "L'Axiome 3 stipule que TOUTE réunion d'ensembles de la collection doit aussi appartenir à la collection.",
      consider: "Considérons la réunion infinie :",
      verdict: "« Le résultat est une demi-droite qui va jusqu'à l'infini. Elle n'est pas bornée. Par conséquent, elle n'est PAS dans notre collection d'origine. »",
      infiniteResult: "Résultat Infini : Demi-droite non bornée",
      statusLabel: "Statut du résultat",
      notBounded: "NON BORNÉ",
      verdictLabel: "Verdict Topologique",
      failsAxiom: "ÉCHOUE À L'AXIOME 3"
    }
  };

  const curr = content[language];

  return (
    <div className="bg-white rounded-[3rem] p-8 md:p-12 shadow-sm border border-red-100 mb-12">
      <div className="flex flex-col lg:flex-row gap-12">
        <div className="lg:w-1/3">
          <div className="flex items-center gap-4 mb-6">
            <div className="h-12 w-12 bg-red-100 rounded-2xl flex items-center justify-center text-red-600">
              <XCircle className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900">{curr.title}</h3>
          </div>
          <p className="text-slate-600 leading-relaxed mb-6">
            {curr.desc}
          </p>
          
          <div className="bg-red-50 p-6 rounded-2xl border border-red-100 mb-6">
            <h4 className="text-xs font-bold text-red-900 mb-4 uppercase tracking-wider flex items-center gap-2">
              <AlertTriangle className="w-4 h-4" /> {curr.axiomTest}
            </h4>
            <p className="text-sm text-red-800 leading-relaxed">
              {curr.axiomDesc}
            </p>
          </div>

          <div className="prose prose-sm prose-red">
            <p className="font-bold text-slate-900">{curr.consider}</p>
            <BlockMath math="\bigcup_{n=1}^\infty ]0, n[ = ]0, +\infty[" />
            <p className="text-slate-500 italic mt-2 text-xs">
              {curr.verdict}
            </p>
          </div>
        </div>

        <div className="lg:w-2/3 bg-slate-900 rounded-3xl p-8 border border-white/5 flex flex-col items-center justify-center relative overflow-hidden min-h-[450px]">
          <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '30px 30px' }} />

          <div className="w-full max-w-xl space-y-12 relative z-10">
            <div className="space-y-4">
              {[1, 2, 3, 5, 8].map((n, i) => (
                <div key={n} className="relative h-4 flex items-center">
                  <div className="absolute left-0 text-[10px] font-mono text-slate-500">n={n}</div>
                  <motion.div 
                    initial={{ width: 0, opacity: 0 }}
                    animate={{ width: `${(n / 10) * 100}%`, opacity: 1 - (i * 0.15) }}
                    transition={{ duration: 1, delay: i * 0.2 }}
                    className="absolute left-10 h-2 bg-red-500/40 rounded-full border border-red-400/30"
                  />
                </div>
              ))}
            </div>

            <div className="pt-8 border-t border-white/10 relative">
              <div className="flex items-center gap-4 mb-4">
                <div className="h-8 w-8 bg-amber-500 rounded-lg flex items-center justify-center text-slate-900">
                  <InfinityIcon className="w-5 h-5" />
                </div>
                <h4 className="text-white font-bold">{curr.infiniteResult}</h4>
              </div>

              <div className="relative h-12 flex items-center">
                 <div className="absolute left-0 text-[10px] font-mono text-amber-500 font-bold">LIMIT</div>
                 <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: '100%' }}
                    transition={{ duration: 2, delay: 2 }}
                    className="absolute left-10 h-4 bg-gradient-to-r from-amber-500 to-transparent rounded-l-full shadow-[0_0_20px_rgba(245,158,11,0.3)]"
                 />
                 <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 3.5 }}
                    className="absolute right-0 w-4 h-4 bg-amber-500 rotate-45 translate-x-1/2 -translate-y-1/2 rounded-sm blur-[2px]"
                 />
              </div>

              <div className="mt-12 grid grid-cols-2 gap-4">
                <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                   <p className="text-[10px] text-slate-400 uppercase font-bold mb-1">{curr.statusLabel}</p>
                   <p className="text-sm text-amber-400 font-bold flex items-center gap-2">
                     <XCircle className="w-4 h-4" /> {curr.notBounded}
                   </p>
                </div>
                <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                   <p className="text-[10px] text-slate-400 uppercase font-bold mb-1">{curr.verdictLabel}</p>
                   <p className="text-sm text-red-400 font-bold">{curr.failsAxiom}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UnionTrap;
