import React from 'react';
import Hero from '../components/Hero';
import Definition from '../components/Definition';
import InteractiveVisualizer from '../components/InteractiveVisualizer';
import Examples from '../components/Examples';
import NextLesson from '../components/NextLesson';
import { useLanguage } from '../context/LanguageContext';

const TopologyBasics: React.FC = () => {
  const { language, t } = useLanguage();

  const content = {
    EN: {
      title: "Interior, Closure & Boundary",
      desc: t('chapter.2.desc')
    },
    FR: {
      title: "Intérieur, Adhérence & Frontière",
      desc: t('chapter.2.desc')
    }
  };

  const next = content[language];

  return (
    <main>
      <Hero />
      <Definition />
      <div id="visualizer">
        <InteractiveVisualizer />
      </div>
      <Examples />
      
      <NextLesson 
        to="/topology/interior-closure-boundary"
        chapter={2}
        title={next.title}
        description={next.desc}
      />
    </main>
  );
};

export default TopologyBasics;
