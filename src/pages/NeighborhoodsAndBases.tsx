import React from 'react';
import NeighborhoodHero from '../components/NeighborhoodHero';
import AccumulationVisualizer from '../components/AccumulationVisualizer';
import BaseDefinition from '../components/BaseDefinition';
import BaseBuilderVisualizer from '../components/BaseBuilderVisualizer';
import NextLesson from '../components/NextLesson';
import { useLanguage } from '../context/LanguageContext';

const NeighborhoodsAndBases: React.FC = () => {
  const { language, t } = useLanguage();

  const content = {
    EN: {
      title: "Density & Separation",
      desc: t('chapter.4.desc')
    },
    FR: {
      title: "Densité & Séparation",
      desc: t('chapter.4.desc')
    }
  };

  const next = content[language];

  return (
    <main>
      <NeighborhoodHero />
      <AccumulationVisualizer />
      <BaseDefinition />
      <BaseBuilderVisualizer />
      
      <NextLesson 
        to="/topology/density-and-separation"
        chapter={4}
        title={next.title}
        description={next.desc}
      />
    </main>
  );
};

export default NeighborhoodsAndBases;
