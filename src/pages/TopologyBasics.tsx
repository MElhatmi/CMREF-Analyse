import React from 'react';
import Hero from '../components/Hero';
import Definition from '../components/Definition';
import InteractiveVisualizer from '../components/InteractiveVisualizer';
import Examples from '../components/Examples';
import NextLesson from '../components/NextLesson';
import { useLanguage } from '../context/LanguageContext';

const TopologyBasics: React.FC = () => {
  const { language } = useLanguage();

  const content = {
    EN: {
      title: "Interior, Closure & Boundary",
      desc: "Learn how to define the core, the edge, and the shell of any topological set."
    },
    FR: {
      title: "Intérieur, Adhérence & Frontière",
      desc: "Apprenez à définir le cœur, le bord et la coque de n'importe quel ensemble topologique."
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
        to="/interior-closure-boundary"
        chapter={2}
        title={next.title}
        description={next.desc}
      />
    </main>
  );
};

export default TopologyBasics;
