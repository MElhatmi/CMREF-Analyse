import React from 'react';
import ContinuityHero from '../components/ContinuityHero';
import GlobalContinuityDef from '../components/GlobalContinuityDef';
import JumpDiscontinuityVisualizer from '../components/JumpDiscontinuityVisualizer';
import LocalContinuityDef from '../components/LocalContinuityDef';
import LimitVisualizer from '../components/LimitVisualizer';
import NextLesson from '../components/NextLesson';
import { useLanguage } from '../context/LanguageContext';

const ContinuityAndLimits: React.FC = () => {
  const { language } = useLanguage();

  const content = {
    EN: {
      title: "Compact Spaces",
      desc: "Master the gold standard of topological finiteness and the power of finite subcovers."
    },
    FR: {
      title: "Espaces compacts",
      desc: "Maîtrisez la norme d'or de la finitude topologique et la puissance des recouvrements finis."
    }
  };

  const next = content[language];

  return (
    <main>
      <ContinuityHero />
      <GlobalContinuityDef />
      <JumpDiscontinuityVisualizer />
      <LocalContinuityDef />
      <LimitVisualizer />
      
      <NextLesson 
        to="/compact-spaces"
        chapter={8}
        title={next.title}
        description={next.desc}
      />
    </main>
  );
};

export default ContinuityAndLimits;
