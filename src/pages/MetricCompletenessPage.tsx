import React from 'react';
import MetricCompletenessHero from '../components/MetricCompletenessHero';
import MetricCompletenessDefs from '../components/MetricCompletenessDefs';
import MetricFixedPointTheorem from '../components/MetricFixedPointTheorem';
import MetricFixedPointVisualizer from '../components/MetricFixedPointVisualizer';
import NextLesson from '../components/NextLesson';
import { useLanguage } from '../context/LanguageContext';

const MetricCompletenessPage: React.FC = () => {
  const { t } = useLanguage();

  return (
    <main className="min-h-screen bg-white">
      <MetricCompletenessHero />
      <MetricCompletenessDefs />
      <MetricFixedPointTheorem />
      <MetricFixedPointVisualizer />
      
      <NextLesson 
        to="/metrics"
        chapter={1}
        title={t('common.complete')}
        description={t('common.return')}
      />
    </main>
  );
};

export default MetricCompletenessPage;
