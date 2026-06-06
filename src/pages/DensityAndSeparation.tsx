import React from 'react';
import DensityHero from '../components/DensityHero';
import RationalDensityVisualizer from '../components/RationalDensityVisualizer';
import SeparationDefinition from '../components/SeparationDefinition';
import SeparationExamples from '../components/SeparationExamples';
import SeparationTestVisualizer from '../components/SeparationTestVisualizer';
import NextLesson from '../components/NextLesson';
import { useLanguage } from '../context/LanguageContext';

const DensityAndSeparation: React.FC = () => {
  const { language } = useLanguage();

  const content = {
    EN: {
      title: "Induced Topology",
      desc: "Learn how to extract subsets and treat them as independent topological universes."
    },
    FR: {
      title: "Topologie induite",
      desc: "Apprenez à extraire des sous-ensembles et à les traiter comme des univers topologiques indépendants."
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
        to="/induced-topology"
        chapter={5}
        title={next.title}
        description={next.desc}
      />
    </main>
  );
};

export default DensityAndSeparation;
