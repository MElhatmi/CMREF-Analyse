import React from 'react';
import ContinuityHero from '../components/ContinuityHero';
import GlobalContinuityDef from '../components/GlobalContinuityDef';
import JumpDiscontinuityVisualizer from '../components/JumpDiscontinuityVisualizer';
import LocalContinuityDef from '../components/LocalContinuityDef';
import LimitVisualizer from '../components/LimitVisualizer';
import NextLesson from '../components/NextLesson';
import { useLanguage } from '../context/LanguageContext';

const ContinuityAndLimits: React.FC = () => {
  const { language, t } = useLanguage();

  const content = {
    EN: {
      title: "Compact Spaces",
      desc: t('chapter.8.desc')
    },
    FR: {
      title: "Espaces compacts",
      desc: t('chapter.8.desc')
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
        to="/topology/compact-spaces"
        chapter={8}
        title={next.title}
        description={next.desc}
      />
    </main>
  );
};

export default ContinuityAndLimits;
