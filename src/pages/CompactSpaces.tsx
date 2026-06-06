import React from 'react';
import CompactHero from '../components/CompactHero';
import CompactDefinitions from '../components/CompactDefinitions';
import NonCompactVisualizer from '../components/NonCompactVisualizer';
import CompactStabilityGrid from '../components/CompactStabilityGrid';
import CompactContinuity from '../components/CompactContinuity';
import NextLesson from '../components/NextLesson';
import { useLanguage } from '../context/LanguageContext';

const CompactSpaces: React.FC = () => {
  const { language } = useLanguage();

  const content = {
    EN: {
      title: "Locally Compact Spaces",
      desc: "Discover how massive spaces like R^n behave like compact sets when you zoom in on individual points."
    },
    FR: {
      title: "Espaces localement compacts",
      desc: "Découvrez comment des espaces massifs comme R^n se comportent comme des ensembles compacts en zoomant sur chaque point."
    }
  };

  const next = content[language];

  return (
    <main className="min-h-screen bg-white">
      <CompactHero />
      <CompactDefinitions />
      <NonCompactVisualizer />
      <CompactStabilityGrid />
      <CompactContinuity />

      <NextLesson 
        to="/topology/locally-compact-spaces"
        chapter={9}
        title={next.title}
        description={next.desc}
      />
    </main>
  );
};

export default CompactSpaces;
