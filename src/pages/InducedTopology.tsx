import React from 'react';
import InducedHero from '../components/InducedHero';
import InducedDefinitions from '../components/InducedDefinitions';
import SubspaceSlicer from '../components/SubspaceSlicer';
import InducedExamples from '../components/InducedExamples';
import NextLesson from '../components/NextLesson';
import { useLanguage } from '../context/LanguageContext';

const InducedTopology: React.FC = () => {
  const { language } = useLanguage();

  const content = {
    EN: {
      title: "Product Topology",
      desc: "Discover how to build complex spaces by multiplying simpler ones together."
    },
    FR: {
      title: "Topologie produit",
      desc: "Découvrez comment construire des espaces complexes en multipliant des espaces plus simples."
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
        to="/product-topology"
        chapter={6}
        title={next.title}
        description={next.desc}
      />
    </main>
  );
};

export default InducedTopology;
