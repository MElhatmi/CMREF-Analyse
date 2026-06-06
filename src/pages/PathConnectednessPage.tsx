import React from 'react';
import PathHero from '../components/PathHero';
import PathDefinitions from '../components/PathDefinitions';
import PathFindingVisualizer from '../components/PathFindingVisualizer';
import PathRelations from '../components/PathRelations';
import SineCurveVisualizer from '../components/SineCurveVisualizer';
import NextLesson from '../components/NextLesson';
import { useLanguage } from '../context/LanguageContext';

const PathConnectednessPage: React.FC = () => {
  const { t } = useLanguage();

  return (
    <main className="min-h-screen bg-white">
      <PathHero />
      <PathDefinitions />
      <PathFindingVisualizer />
      <PathRelations />
      <SineCurveVisualizer />

      <NextLesson 
        to="/topology"
        chapter={1}
        title={t('common.complete')}
        description={t('common.return')}
      />
    </main>
  );
};

export default PathConnectednessPage;
