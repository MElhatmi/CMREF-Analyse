import React from 'react';
import MetricOpenHero from '../components/MetricOpenHero';
import MetricOpenDefinitions from '../components/MetricOpenDefinitions';
import MetricOpenBreathingRoom from '../components/MetricOpenBreathingRoom';
import NextLesson from '../components/NextLesson';
import { useLanguage } from '../context/LanguageContext';

const MetricOpenSets: React.FC = () => {
  const { language } = useLanguage();

  const content = {
    EN: {
      nextTitle: "Closed Sets & Adherence",
      nextDesc: "Flip the logic: if an open set has no skin, a closed set includes its entire boundary."
    },
    FR: {
      nextTitle: "Ensembles ferm\u00E9s & Adh\u00E9rence",
      nextDesc: "Inversez la logique : si un ouvert n'a pas de peau, un ferm\u00E9 inclut sa fronti\u00E8re enti\u00E8re."
    }
  };

  const next = content[language];

  return (
    <main className="min-h-screen bg-white">
      <MetricOpenHero />
      <MetricOpenDefinitions />
      <MetricOpenBreathingRoom />
      
      <NextLesson 
        to="/metrics/closed-sets"
        chapter={4}
        title={next.nextTitle}
        description={next.nextDesc}
      />
    </main>
  );
};

export default MetricOpenSets;
