import React from 'react';
import MetricSequencesHero from '../components/MetricSequencesHero';
import MetricSequencesDefinitions from '../components/MetricSequencesDefinitions';
import MetricSubsequences from '../components/MetricSubsequences';
import MetricSequencesTraps from '../components/MetricSequencesTraps';
import MetricSubsequenceVisualizer from '../components/MetricSubsequenceVisualizer';
import NextLesson from '../components/NextLesson';
import { useLanguage } from '../context/LanguageContext';

const MetricSequencesPage: React.FC = () => {
  const { language } = useLanguage();

  const content = {
    EN: {
      nextTitle: "Continuity: Local & Uniform",
      nextDesc: "Learn how the measurable distance allows us to define precise movement and stable destinations."
    },
    FR: {
      nextTitle: "Continuit\u00E9 : Locale & Uniforme",
      nextDesc: "Apprenez comment la distance mesurable nous permet de d\u00E9finir un mouvement pr\u00E9cis et des destinations stables."
    }
  };

  const next = content[language];

  return (
    <main className="min-h-screen bg-white">
      <MetricSequencesHero />
      <MetricSequencesDefinitions />
      <MetricSubsequences />
      <MetricSequencesTraps />
      <MetricSubsequenceVisualizer />
      
      <NextLesson 
        to="/metrics/continuity"
        chapter={7}
        title={next.nextTitle}
        description={next.nextDesc}
      />
    </main>
  );
};

export default MetricSequencesPage;
