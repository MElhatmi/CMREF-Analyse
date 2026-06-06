import React, { createContext, useContext, useState, type ReactNode, useEffect } from 'react';

type Language = 'EN' | 'FR';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations: Record<Language, Record<string, string>> = {
  EN: {
    // Navigation
    'nav.home': 'Home',
    'nav.intro': '1. Introduction',
    'nav.concepts': '2. Concepts',
    'nav.bases': '3. Neighborhoods & Bases',
    'nav.density': '4. Density & Separation',
    'nav.induced': '5. Induced Topology',
    'nav.product': '6. Product Topology',
    'nav.continuity': '7. Continuity & Limits',
    'nav.compact': '8. Compact Spaces',
    'nav.locallyCompact': '9. Locally Compact',
    'nav.connected': '10. Connected Spaces',
    'nav.pathConnected': '11. Path-Connectedness',
    'nav.curriculum': 'Course Curriculum',
    'nav.comingSoon': 'More topics coming soon.',
    
    // Landing Page
    'landing.title': 'Master the Geometry of',
    'landing.subtitle': 'Step away from distances and metrics. Dive into the abstract beauty of sets, neighborhoods, and continuity through interactive visualizations.',
    'landing.start': 'Start the Course',
    
    // Chapter Summaries
    'chapter.1.desc': 'Understand the 3 core axioms, open sets, and the formal definition of a topological space.',
    'chapter.2.desc': 'Explore the regions of a subset, boundary logic, and the behavior of infinite operations.',
    'chapter.3.desc': 'Understand local environments, point types (isolated/accumulation), and topological building blocks.',
    'chapter.4.desc': 'Explore "everywhere" sets like rationals and the Hausdorff property that protects point identity.',
    'chapter.5.desc': 'Learn how openness is relative to your "universe" and how to slice subspaces out of parent spaces.',
    'chapter.6.desc': 'Discover how to combine spaces using elementary rectangles and why infinite products have strict rules.',
    'chapter.7.desc': 'Generalize calculus using open sets. See how topology catches jump discontinuities and handles "holes."',
    'chapter.8.desc': 'Understand the Borel-Lebesgue property, finite subcovers, and why compactness is the gold standard.',
    'chapter.9.desc': 'Explore spaces that behave like compact sets when zoomed in, and why R succeeds while Q fails.',
    'chapter.10.desc': 'Understand topological unity through the Scissors Analogy and see how continuous functions preserve intervals.',
    'chapter.11.desc': 'Explore the geometric intuition of paths and the classic "Topologist\'s Sine Curve" exception.',
    
    // Common
    'common.next': 'Next Lesson',
    'common.chapter': 'Chapter',
    'common.continue': 'Continue the journey',
    'common.complete': 'Course Complete',
    'common.return': 'Return to the home hub.'
  },
  FR: {
    // Navigation
    'nav.home': 'Accueil',
    'nav.intro': '1. Introduction',
    'nav.concepts': '2. Concepts de base',
    'nav.bases': '3. Voisinages & Bases',
    'nav.density': '4. Densité & Séparation',
    'nav.induced': '5. Topologie induite',
    'nav.product': '6. Topologie produit',
    'nav.continuity': '7. Continuité & Limites',
    'nav.compact': '8. Espaces compacts',
    'nav.locallyCompact': '9. Localement compact',
    'nav.connected': '10. Espaces connexes',
    'nav.pathConnected': '11. Connexité par arcs',
    'nav.curriculum': 'Programme du cours',
    'nav.comingSoon': 'Plus de sujets à venir.',
    
    // Landing Page
    'landing.title': 'Maîtrisez la Géométrie de la',
    'landing.subtitle': 'Éloignez-vous des distances et des métriques. Plongez dans la beauté abstraite des ensembles, des voisinages et de la continuité.',
    'landing.start': 'Commencer le cours',
    
    // Chapter Summaries
    'chapter.1.desc': 'Comprenez les 3 axiomes fondamentaux, les ensembles ouverts et la définition formelle.',
    'chapter.2.desc': 'Explorez l\'intérieur, l\'adhérence et la frontière, ainsi que les opérations infinies.',
    'chapter.3.desc': 'Comprenez les environnements locaux, les points isolés/d\'accumulation et les briques de base.',
    'chapter.4.desc': 'Explorez les ensembles denses comme les rationnels et la propriété de Hausdorff (séparation).',
    'chapter.5.desc': 'Apprenez comment l\'ouverture est relative à votre "univers" via les sous-espaces.',
    'chapter.6.desc': 'Découvrez comment combiner des espaces et pourquoi les produits infinis ont des règles strictes.',
    'chapter.7.desc': 'Généralisez le calcul infinitésimal. Voyez comment la topologie détecte les discontinuités.',
    'chapter.8.desc': 'Comprenez la propriété de Borel-Lebesgue et pourquoi la compacité est la norme d\'or.',
    'chapter.9.desc': 'Explorez les espaces qui se comportent comme des compacts en zoomant sur chaque point.',
    'chapter.10.desc': 'Comprenez l\'unité topologique via l\'analogie des ciseaux et la conservation des intervalles.',
    'chapter.11.desc': 'Explorez l\'intuition géométrique des chemins et l\'exception de la "Sinusoïde du topologue".',
    
    // Common
    'common.next': 'Leçon suivante',
    'common.chapter': 'Chapitre',
    'common.continue': 'Continuer l\'aventure',
    'common.complete': 'Cours terminé',
    'common.return': 'Retourner à l\'accueil'
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  // Initialize from localStorage or default to EN
  const [language, setLanguageState] = useState<Language>(() => {
    const saved = localStorage.getItem('topo_lang');
    return (saved === 'FR' || saved === 'EN') ? saved : 'EN';
  });

  // Persist change to localStorage and trigger re-render
  const setLanguage = (newLang: Language) => {
    setLanguageState(newLang);
    localStorage.setItem('topo_lang', newLang);
  };

  const t = (key: string) => {
    return translations[language][key] || key;
  };

  // Optional: Sync tab title or other globals
  useEffect(() => {
    document.documentElement.lang = language.toLowerCase();
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error('useLanguage must be used within a LanguageProvider');
  return context;
};
