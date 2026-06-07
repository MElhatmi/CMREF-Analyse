import React from 'react';
import InducedHero from '../components/InducedHero';
import InducedDefinitions from '../components/InducedDefinitions';
import SubspaceSlicer from '../components/SubspaceSlicer';
import InducedExamples from '../components/InducedExamples';
import NextLesson from '../components/NextLesson';
import { useLanguage } from '../context/LanguageContext';

const InducedTopology: React.FC = () => {
  const { language, t } = useLanguage();

  const content = {
    EN: {
      title: "Product Topology",
      desc: t('chapter.6.desc')
    },
    FR: {
      title: "Topologie produit",
      desc: t('chapter.6.desc')
    }
  };

  const next = content[language];

  return (
    <main>
      <InducedHero />
      <InducedDefinitions />
      <SubspaceSlicer />
      <InducedExamples />
      
      <NextLesson 
        to="/topology/product-topology"
        chapter={6}
        title={next.title}
        description={next.desc}
      />
    </main>
  );
};

export default InducedTopology;
