import React from 'react';
import MetricCompactPreservationHero from '../components/MetricCompactPreservationHero';
import MetricCompactImages from '../components/MetricCompactImages';
import MetricExtremaTheorems from '../components/MetricExtremaTheorems';
import MetricExtremaVisualizer from '../components/MetricExtremaVisualizer';
import NextLesson from '../components/NextLesson';
import { useLanguage } from '../context/LanguageContext';

const MetricCompactLebesgue: React.FC = () => {
  const { language } = useLanguage();

  const content = {
    EN: {
      nextTitle: "Completeness & Cauchy",
      nextDesc: "Finalize the Metric course by exploring spaces where every 'consistent' journey has a destination."
    },
    FR: {
      nextTitle: "Compl\u00E9tude & Cauchy",
      nextDesc: "Terminez le cours sur les m\u00E9triques en explorant les espaces o\u00F9 chaque voyage « coh\u00E9rent » a une destination."
    }
  };

  const next = content[language];

  return (
    <main className="min-h-screen bg-white">
      <MetricCompactPreservationHero />
      <MetricCompactImages />
      <MetricExtremaTheorems />
      <MetricExtremaVisualizer />
      
      <NextLesson 
        to="/metrics/completeness"
        chapter={10}
        title={next.nextTitle}
        description={next.nextDesc}
      />
    </main>
  );
};

export default MetricCompactLebesgue;
