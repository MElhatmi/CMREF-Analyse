import React from 'react';
import DensityHero from '../components/DensityHero';
import RationalDensityVisualizer from '../components/RationalDensityVisualizer';
import SeparationDefinition from '../components/SeparationDefinition';
import SeparationExamples from '../components/SeparationExamples';
import SeparationTestVisualizer from '../components/SeparationTestVisualizer';
import NextLesson from '../components/NextLesson';
import { useLanguage } from '../context/LanguageContext';

const DensityAndSeparation: React.FC = () => {
  const { language, t } = useLanguage();

  const content = {
    EN: {
      title: "Induced Topology",
      desc: t('chapter.5.desc')
    },
    FR: {
      title: "Topologie induite",
      desc: t('chapter.5.desc')
    }
  };

  const next = content[language];

  return (
    <main>
      <DensityHero />
      <RationalDensityVisualizer />
      <SeparationDefinition />
      <SeparationExamples />
      <SeparationTestVisualizer />
      
      <NextLesson 
        to="/topology/induced-topology"
        chapter={5}
        title={next.title}
        description={next.desc}
      />
    </main>
  );
};

export default DensityAndSeparation;
