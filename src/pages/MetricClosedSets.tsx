import React from 'react';
import MetricClosedHero from '../components/MetricClosedHero';
import MetricClosedDefinitions from '../components/MetricClosedDefinitions';
import MetricAdherence from '../components/MetricAdherence';
import MetricSequentialSniper from '../components/MetricSequentialSniper';
import NextLesson from '../components/NextLesson';
import { useLanguage } from '../context/LanguageContext';

const MetricClosedSets: React.FC = () => {
  const { language } = useLanguage();

  const content = {
    EN: {
      nextTitle: "Neighborhoods & Separability",
      nextDesc: "Zoom in on local environments and discover the countable skeletons that hold a space together."
    },
    FR: {
      nextTitle: "Voisinages & S\u00E9parabilit\u00E9",
      nextDesc: "Zoomez sur les environnements locaux et d\u00E9couvrez les squelettes d\u00E9nombrables qui maintiennent un espace."
    }
  };

  const next = content[language];

  return (
    <main className="min-h-screen bg-white">
      <MetricClosedHero />
      <MetricClosedDefinitions />
      <MetricAdherence />
      <MetricSequentialSniper />
      
      <NextLesson 
        to="/metrics/neighborhoods"
        chapter={5}
        title={next.nextTitle}
        description={next.nextDesc}
      />
    </main>
  );
};

export default MetricClosedSets;
