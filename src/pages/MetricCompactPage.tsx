import React from 'react';
import MetricCompactHero from '../components/MetricCompactHero';
import MetricCompactSequential from '../components/MetricCompactSequential';
import MetricCompactRules from '../components/MetricCompactRules';
import MetricCompactVisualizer from '../components/MetricCompactVisualizer';
import NextLesson from '../components/NextLesson';
import { useLanguage } from '../context/LanguageContext';

const MetricCompactPage: React.FC = () => {
  const { language } = useLanguage();

  const content = {
    EN: {
      nextTitle: "Compactness II - Continuous Images",
      nextDesc: "Explore how continuous functions perfectly translate compactness from one universe to another."
    },
    FR: {
      nextTitle: "Compacit\u00E9 II - Images continues",
      nextDesc: "Explorez comment les fonctions continues traduisent parfaitement la compacit\u00E9 d'un univers \u00E0 l'autre."
    }
  };

  const next = content[language];

  return (
    <main className="min-h-screen bg-white">
      <MetricCompactHero />
      <MetricCompactSequential />
      <MetricCompactRules />
      <MetricCompactVisualizer />
      
      <NextLesson 
        to="/metrics/preservation"
        chapter={9}
        title={next.nextTitle}
        description={next.nextDesc}
      />
    </main>
  );
};

export default MetricCompactPage;
