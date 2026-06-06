import React from 'react';
import ConnectedHero from '../components/ConnectedHero';
import ConnectedDefinitions from '../components/ConnectedDefinitions';
import ConnectedStability from '../components/ConnectedStability';
import ConnectedContinuity from '../components/ConnectedContinuity';
import IVTVisualizer from '../components/IVTVisualizer';
import NextLesson from '../components/NextLesson';
import { useLanguage } from '../context/LanguageContext';

const ConnectedSpacesPage: React.FC = () => {
  const { language } = useLanguage();

  const content = {
    EN: {
      title: "Path-Connectedness",
      desc: "Explore the geometric intuition of paths and the classic 'Topologist's Sine Curve' exception."
    },
    FR: {
      title: "Connexité par arcs",
      desc: "Explorez l'intuition géométrique des chemins et l'exception classique de la 'Sinusoïde du topologue'."
    }
  };

  const next = content[language];

  return (
    <main className="min-h-screen bg-white">
      <ConnectedHero />
      <ConnectedDefinitions />
      <ConnectedStability />
      <ConnectedContinuity />
      <IVTVisualizer />

      <NextLesson 
        to="/path-connectedness"
        chapter={11}
        title={next.title}
        description={next.desc}
      />
    </main>
  );
};

export default ConnectedSpacesPage;
