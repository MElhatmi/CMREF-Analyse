import React from 'react';
import MetricNeighborhoodsHero from '../components/MetricNeighborhoodsHero';
import MetricNeighborhoodsDefs from '../components/MetricNeighborhoodsDefs';
import MetricSeparability from '../components/MetricSeparability';
import MetricDensityZoom from '../components/MetricDensityZoom';
import NextLesson from '../components/NextLesson';
import { useLanguage } from '../context/LanguageContext';

const MetricNeighborhoodsPage: React.FC = () => {
  const { language } = useLanguage();

  const content = {
    EN: {
      nextTitle: "Sequences & Adherence",
      nextDesc: "Explore the infinite journeys through metric spaces and the difference between strict convergence and recurring visits."
    },
    FR: {
      nextTitle: "Suites & Adh\u00E9rence",
      nextDesc: "Explorez les voyages infinis dans les espaces m\u00E9triques et la diff\u00E9rence entre convergence stricte et visites r\u00E9currentes."
    }
  };

  const next = content[language];

  return (
    <main className="min-h-screen bg-white">
      <MetricNeighborhoodsHero />
      <MetricNeighborhoodsDefs />
      <MetricSeparability />
      <MetricDensityZoom />
      
      <NextLesson 
        to="/metrics/sequences"
        chapter={6}
        title={next.nextTitle}
        description={next.nextDesc}
      />
    </main>
  );
};

export default MetricNeighborhoodsPage;
