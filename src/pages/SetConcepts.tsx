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
  const { language, t } = useLanguage();

  const content = {
    EN: {
      title: "Neighborhoods & Bases",
      desc: t('chapter.3.desc')
    },
    FR: {
      title: "Voisinages & Bases",
      desc: t('chapter.3.desc')
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
        to="/topology/neighborhoods-and-bases"
        chapter={3}
        title={next.title}
        description={next.desc}
      />
    </main>
  );
};

export default SetConcepts;
