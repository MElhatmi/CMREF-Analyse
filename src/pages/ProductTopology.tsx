import React from 'react';
import ProductHero from '../components/ProductHero';
import ProductDefinitions from '../components/ProductDefinitions';
import FiniteProductVisualizer from '../components/FiniteProductVisualizer';
import InfiniteProductSimulator from '../components/InfiniteProductSimulator';
import NextLesson from '../components/NextLesson';
import { useLanguage } from '../context/LanguageContext';

const ProductTopology: React.FC = () => {
  const { language, t } = useLanguage();

  const content = {
    EN: {
      title: "Continuity & Limits",
      desc: t('chapter.7.desc')
    },
    FR: {
      title: "Continuité & Limites",
      desc: t('chapter.7.desc')
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
        to="/topology/continuity-and-limits"
        chapter={7}
        title={next.title}
        description={next.desc}
      />
    </main>
  );
};

export default ProductTopology;
