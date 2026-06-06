import React from 'react';
import NeighborhoodHero from '../components/NeighborhoodHero';
import AccumulationVisualizer from '../components/AccumulationVisualizer';
import BaseDefinition from '../components/BaseDefinition';
import BaseBuilderVisualizer from '../components/BaseBuilderVisualizer';
import NextLesson from '../components/NextLesson';
import { useLanguage } from '../context/LanguageContext';

const NeighborhoodsAndBases: React.FC = () => {
  const { language } = useLanguage();

  const content = {
    EN: {
      title: "Density & Separation",
      desc: "Explore everywhere-dense sets and the Hausdorff property that gives points their unique identity."
    },
    FR: {
      title: "Densité & Séparation",
      desc: "Explorez les ensembles denses et la propriété de Hausdorff qui confère aux points leur identité unique."
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
        to="/density-and-separation"
        chapter={4}
        title={next.title}
        description={next.desc}
      />
    </main>
  );
};

export default NeighborhoodsAndBases;
