import React from 'react';
import MetricContinuityHero from '../components/MetricContinuityHero';
import MetricContinuityDefs from '../components/MetricContinuityDefs';
import MetricContinuityVisualizer from '../components/MetricContinuityVisualizer';
import NextLesson from '../components/NextLesson';
import { useLanguage } from '../context/LanguageContext';

const MetricContinuityPage: React.FC = () => {
  const { language } = useLanguage();

  const content = {
    EN: {
      nextTitle: "Compact Spaces",
      nextDesc: "Return to the concept of compactness in metric spaces and see how it interacts with uniform continuity."
    },
    FR: {
      nextTitle: "Espaces compacts",
      nextDesc: "Revenez sur le concept de compacit\u00E9 dans les espaces m\u00E9triques et voyez comment il interagit avec la continuit\u00E9 uniforme."
    }
  };

  const next = content[language];

  return (
    <main className="min-h-screen bg-white">
      <MetricContinuityHero />
      <MetricContinuityDefs />
      <MetricContinuityVisualizer />
      
      <NextLesson 
        to="/metrics/compactness"
        chapter={8}
        title={next.nextTitle}
        description={next.nextDesc}
      />
    </main>
  );
};

export default MetricContinuityPage;
