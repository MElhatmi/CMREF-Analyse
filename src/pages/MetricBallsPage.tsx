import React from 'react';
import MetricBallsHero from '../components/MetricBallsHero';
import MetricBallsDefinitions from '../components/MetricBallsDefinitions';
import BallShapeVisualizer from '../components/BallShapeVisualizer';
import NextLesson from '../components/NextLesson';
import { useLanguage } from '../context/LanguageContext';

const MetricBallsPage: React.FC = () => {
  const { language } = useLanguage();

  const content = {
    EN: {
      nextTitle: "Open Sets & Interiors",
      nextDesc: "Learn how the concept of 'breathing room' defines the open sets of a metric universe."
    },
    FR: {
      nextTitle: "Ensembles ouverts & Int\u00E9rieurs",
      nextDesc: "D\u00E9couvrez comment le concept d'\u00AB espace vital \u00BB d\u00E9finit les ouverts d'un univers m\u00E9trique."
    }
  };

  const next = content[language];

  return (
    <main className="min-h-screen bg-white">
      <MetricBallsHero />
      <MetricBallsDefinitions />
      <BallShapeVisualizer />
      
      <NextLesson 
        to="/metrics/open-sets"
        chapter={3}
        title={next.nextTitle}
        description={next.nextDesc}
      />
    </main>
  );
};

export default MetricBallsPage;
