import React from 'react';
import SetConceptsHero from '../components/SetConceptsHero';
import SetDefinitions from '../components/SetDefinitions';
import Characterizations from '../components/Characterizations';
import SetExplorer from '../components/SetExplorer';
import Duality from '../components/Duality';
import DistributivityTrap from '../components/DistributivityTrap';
import NextLesson from '../components/NextLesson';
import { useLanguage } from '../context/LanguageContext';

const SetConcepts: React.FC = () => {
  const { language } = useLanguage();

  const content = {
    EN: {
      title: "Neighborhoods & Bases",
      desc: "Zoom into the local environment of points and discover the fundamental building blocks of space."
    },
    FR: {
      title: "Voisinages & Bases",
      desc: "Zoomez sur l'environnement local des points et découvrez les briques fondamentales de l'espace."
    }
  };

  const next = content[language];

  return (
    <main>
      <SetConceptsHero />
      <SetDefinitions />
      <Characterizations />
      <SetExplorer />
      <Duality />
      <DistributivityTrap />
      
      <NextLesson 
        to="/neighborhoods-and-bases"
        chapter={3}
        title={next.title}
        description={next.desc}
      />
    </main>
  );
};

export default SetConcepts;
