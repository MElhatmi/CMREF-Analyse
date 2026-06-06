import React from 'react';
import LocallyCompactHero from '../components/LocallyCompactHero';
import LocallyCompactDefinitions from '../components/LocallyCompactDefinitions';
import LocallyCompactExamples from '../components/LocallyCompactExamples';
import LocallyCompactVisualizer from '../components/LocallyCompactVisualizer';
import NextLesson from '../components/NextLesson';
import { useLanguage } from '../context/LanguageContext';

const LocallyCompactSpaces: React.FC = () => {
  const { language } = useLanguage();

  const content = {
    EN: {
      title: "Connected Spaces",
      desc: "Master the art of topological unity and the 'Scissors Analogy' of space integrity."
    },
    FR: {
      title: "Espaces connexes",
      desc: "Maîtrisez l'art de l'unité topologique et l'analogie des ciseaux sur l'intégrité de l'espace."
    }
  };

  const next = content[language];

  return (
    <main className="min-h-screen bg-white">
      <LocallyCompactHero />
      <LocallyCompactDefinitions />
      <LocallyCompactExamples />
      <LocallyCompactVisualizer />

      <NextLesson 
        to="/connected-spaces"
        chapter={10}
        title={next.title}
        description={next.desc}
      />
    </main>
  );
};

export default LocallyCompactSpaces;
