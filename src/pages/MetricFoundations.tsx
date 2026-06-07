import React from 'react';
import MetricHero from '../components/MetricHero';
import MetricDefinitions from '../components/MetricDefinitions';
import MetricExamples from '../components/MetricExamples';
import TriangleInequalityVisualizer from '../components/TriangleInequalityVisualizer';
import NextLesson from '../components/NextLesson';
import { useLanguage } from '../context/LanguageContext';

const MetricFoundations: React.FC = () => {
  const { language } = useLanguage();

  const content = {
    EN: {
      nextTitle: "Balls and Spheres",
      nextDesc: "Explore the geometry of distance and how the rules of measurement change the shape of a circle."
    },
    FR: {
      nextTitle: "Boules et Sph\u00E8res",
      nextDesc: "Explorez la g\u00E9om\u00E9trie de la distance et comment les r\u00E8gles de mesure changent la forme d'un cercle."
    }
  };

  const next = content[language];

  return (
    <main className="min-h-screen bg-white">
      <MetricHero />
      <MetricDefinitions />
      <MetricExamples />
      <TriangleInequalityVisualizer />
      
      <NextLesson 
        to="/metrics/balls"
        chapter={2}
        title={next.nextTitle}
        description={next.nextDesc}
      />
    </main>
  );
};

export default MetricFoundations;
