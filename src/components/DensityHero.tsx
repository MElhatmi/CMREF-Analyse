import React from 'react';
import { motion } from 'framer-motion';
import { BlockMath } from './Math';
import { Layers, Info } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const DensityHero: React.FC = () => {
  const { language, t } = useLanguage();

  const content = {
    EN: {
      header: "Everywhere at Once",
      intro: "A dense set is a subset that is \"everywhere\" within a larger space. Even if the set has infinitely many \"holes,\" you will always find elements of it no matter how much you zoom in. It acts as the \"skeleton\" of the entire space.",
      mathTitle: "The Formal Math",
      mathIntro: "Let A and B be subsets of a topological space E. We say that A is dense in B if:",
      mathNote: "If A is dense in the entire space E, then \u0100 = E.",
      noteTitle: "Important Note",
      noteDesc: "The definition of density does not require A \u2282 B. A set can be dense in a target even if it \"spills out\" or lives entirely elsewhere, as long as its closure covers the target.",
      analogyTitle: "Analogy",
      analogyDesc: "\"Imagine a cloud of dust. Even if it's mostly empty space, if the dust is dense, you can't point anywhere without being infinitely close to a dust particle.\""
    },
    FR: {
      header: "Partout à la fois",
      intro: "Un ensemble dense est une partie qui est « partout » au sein d'un espace plus grand. Même si l'ensemble possède une infinité de « trous », on y trouve toujours des éléments quel que soit le niveau de zoom. Il agit comme le « squelette » de l'espace entier.",
      mathTitle: "Mathématiques formelles",
      mathIntro: "Soient A et B deux parties d'un espace topologique E. On dit que A est dense dans B si :",
      mathNote: "Si A est dense dans l'espace E entier, alors \u0100 = E.",
      noteTitle: "Note Importante",
      noteDesc: "La définition de la densité n'impose pas A \u2282 B. Un ensemble peut être dense dans une cible même s'il en « déborde » ou vit ailleurs, tant que son adhérence recouvre la cible.",
      analogyTitle: "Analogie",
      analogyDesc: "« Imaginez un nuage de poussière. Même s'il est majoritairement composé de vide, si la poussière est dense, vous ne pouvez pointer nulle part sans être infiniment proche d'une particule. »"
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
            <div className="inline-flex items-center gap-2 bg-blue-50 px-3 py-1 rounded-full text-blue-600 font-bold text-xs uppercase tracking-widest mb-6 border border-blue-100">
              <Layers className="w-3 h-3" />
              {t('nav.density')}
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-6xl">
              {t('nav.density').split(' ')[2] || 'Dense Sets'}: <span className="text-blue-600">{curr.header}</span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-slate-600">
              {curr.intro}
            </p>

            <div className="mt-10 p-8 bg-slate-50 rounded-[2.5rem] border border-slate-100 shadow-inner">
               <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-4">{curr.mathTitle}</h3>
               <p className="text-slate-700 leading-relaxed mb-4 text-sm">
                 {curr.mathIntro}
               </p>
               <div className="bg-white p-4 rounded-2xl border border-slate-100 shadow-sm flex items-center justify-center">
                  <BlockMath math="B \subset \overline{A}" />
               </div>
               <p className="mt-4 text-xs text-slate-500 italic text-center">
                 {curr.mathNote}
               </p>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="space-y-6"
          >
            <div className="bg-blue-600 rounded-[2.5rem] p-10 text-white shadow-xl shadow-blue-100 relative overflow-hidden text-sm">
               <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16 blur-2xl" />
               <div className="flex gap-4 items-start relative z-10">
                 <Info className="w-8 h-8 flex-shrink-0 text-blue-200" />
                 <div>
                   <h4 className="font-bold mb-3 uppercase tracking-widest text-xs text-blue-100 underline decoration-blue-400 underline-offset-4">{curr.noteTitle}</h4>
                   <p className="leading-relaxed text-blue-50">
                     {curr.noteDesc}
                   </p>
                 </div>
               </div>
            </div>

            <div className="bg-slate-900 rounded-[2.5rem] p-8 text-slate-300 border border-slate-800 shadow-xl">
               <p className="text-xs font-mono mb-2 text-blue-400 opacity-60 font-bold uppercase tracking-widest">{curr.analogyTitle}</p>
               <p className="italic text-sm leading-relaxed">
                 {curr.analogyDesc}
               </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default DensityHero;
