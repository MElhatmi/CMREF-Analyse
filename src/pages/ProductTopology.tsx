import React from 'react';
import ProductHero from '../components/ProductHero';
import ProductDefinitions from '../components/ProductDefinitions';
import FiniteProductVisualizer from '../components/FiniteProductVisualizer';
import InfiniteProductSimulator from '../components/InfiniteProductSimulator';
import NextLesson from '../components/NextLesson';
import { useLanguage } from '../context/LanguageContext';

const ProductTopology: React.FC = () => {
  const { language } = useLanguage();

  const content = {
    EN: {
      title: "Continuity & Limits",
      desc: "Generalize the core of calculus into the language of open sets and neighborhoods."
    },
    FR: {
      title: "Continuité & Limites",
      desc: "Généralisez le cœur du calcul infinitésimal dans le langage des ouverts et des voisinages."
    }
  };

  const next = content[language];

  return (
    <main>
      <ProductHero />
      <ProductDefinitions />
      <FiniteProductVisualizer />
      <InfiniteProductSimulator />
      
      <NextLesson 
        to="/continuity-and-limits"
        chapter={7}
        title={next.title}
        description={next.desc}
      />
    </main>
  );
};

export default ProductTopology;
