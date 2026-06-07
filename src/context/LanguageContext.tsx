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
    'common.return': 'Return to the home hub.',

    // Metric Spaces Course
    'nav.metrics.intro': '1. Foundations of Distance',
    'metrics.hero.title': 'The Foundations of Distance',
    'metrics.hero.subtitle': 'Step back from abstract sets into a measurable reality. A Metric Space is a universe with a ruler, where every point has a defined numerical distance to every other point.',
    'metrics.def.title': 'Metric Space & Distance',
    'metrics.def.intro': 'Let E be a non-empty set. A distance (or metric) on E is a function d: E × E → ℝ⁺ that satisfies three strict axioms:',
    'metrics.def.ax1': '1. Separation / Identity of indiscernibles:',
    'metrics.def.ax1_sub': 'The distance between two points is zero if and only if they are identical.',
    'metrics.def.ax2': '2. Symmetry:',
    'metrics.def.ax2_sub': 'The distance from A to B is identical to the distance from B to A.',
    'metrics.def.ax3': '3. Triangle Inequality:',
    'metrics.def.ax3_sub': 'The direct path is always the shortest. Detouring through a third point will either equal or exceed the direct distance.',
    'metrics.ex.title': 'Fundamental Examples',
    'metrics.viz.title': 'The Shape of Distance',
    'metrics.viz.subtitle': 'Drag points A, B, and C to verify the Triangle Inequality across different mathematical universes.',

    // Balls and Spheres
    'nav.metrics.balls': '2. Balls and Spheres',
    'metrics.balls.hero.title': 'The Geometry of Balls and Spheres',
    'metrics.balls.hero.subtitle': 'In everyday geometry, a "ball" is a perfectly round object. However, in metric spaces, the shape of a ball is entirely dictated by the underlying distance formula. A ball can look like a circle, a diamond, or even a rigid square.',
    'metrics.balls.def.title': 'Formal Definitions',
    'metrics.balls.def.intro': 'Let (E, d) be a metric space, let a ∈ E be a center point, and let r > 0 be a real radius.',
    'metrics.balls.def.open': '1. Open Ball (Boule ouverte):',
    'metrics.balls.def.open_sub': 'The set of points strictly closer than r to a.',
    'metrics.balls.def.closed': '2. Closed Ball (Boule fermée):',
    'metrics.balls.def.closed_sub': 'The set of points at a distance less than or equal to r from a.',
    'metrics.balls.def.sphere': '3. Sphere (Sphère):',
    'metrics.balls.def.sphere_sub': 'The set of points lying exactly at a distance r from a.',
    'metrics.balls.ex.title': '1D Case Example',
    'metrics.balls.ex.desc': 'In the 1D real number line, an open ball is simply an open interval.',
    'metrics.balls.viz.title': 'The Shape-Shifting Ball',
    'metrics.balls.viz.subtitle': 'Adjust the radius and change the metric to see the geometry of an open ball mutate in a 2D plane.',

    // Open Sets
    'nav.metrics.open': '3. Open Sets & Interiors',
    'metrics.open.hero.title': 'The Intuition of Breathing Room',
    'metrics.open.hero.subtitle': 'A set is open if it has no hard skin. Metaphorically, every point inside has enough "breathing room" to inflate a tiny ball that remains entirely trapped inside the set.',
    'metrics.open.def.title': 'Defining Openness',
    'metrics.open.def.intro': 'A subset A is open if every point has a safety radius around it.',
    'metrics.open.prop.title': 'Stability & The Infinite Trap',
    'metrics.open.warn.title': 'The Infinite Intersection Trap',
    'metrics.open.warn.desc': 'You CANNOT take an infinite intersection of open sets and expect it to remain open. Shrinking intervals can collapse into a single point.',
    'metrics.open.interior.title': 'The Interior of a Set',
    'metrics.open.interior.desc': 'The interior is the collection of all points that possess breathing room. A set is open if and only if it equals its interior.',
    'metrics.open.viz.title': 'The Breathing Room Test',
    'metrics.open.viz.subtitle': 'Toggle between an Open and Closed square. Move your probe to see if you can find a point with zero breathing room.',

    // Closed Sets
    'nav.metrics.closed': '4. Closed Sets & Adherence',
    'metrics.closed.hero.title': 'The Skin of the Space',
    'metrics.closed.hero.subtitle': 'If open sets have no skin, closed sets include their entire boundary. They are the shapes that "trap" all their limits—you cannot walk infinitely close to the edge and suddenly fall out.',
    'metrics.closed.def.title': 'Closed Sets & Infinite Traps',
    'metrics.closed.def.intro': 'A subset F is closed if its complement is open. While finite unions are safe, the infinite union of closed sets can break the property.',
    'metrics.closed.warn.title': 'The Infinite Union Trap',
    'metrics.closed.warn.desc': 'You CANNOT take an infinite union of closed sets and expect it to remain closed. A classic example is the union of [1/n, 1] resulting in ]0, 1].',
    'metrics.closed.adh.title': 'Adherence and Closure',
    'metrics.closed.adh.intro': 'A point is adherent to a set if every neighborhood of that point touches the set. The collection of all such points forms the Closure.',
    'metrics.closed.seq.title': 'Sequential Characterization',
    'metrics.closed.seq.desc': 'In metric spaces, a point is in the closure if and only if there is a sequence inside the set that converges to it. This is the ultimate test of belonging.',
    'metrics.closed.viz.title': 'The Sequential Sniper',
    'metrics.closed.viz.subtitle': 'Drag the target point "a" and attempt to hit it with a sequence (xₙ) starting from inside the set A.',

    // Neighborhoods & Separability
    'nav.metrics.neigh': '5. Neighborhoods & Separability',
    'metrics.neigh.hero.title': 'Local Environments and Skeletons',
    'metrics.neigh.hero.subtitle': 'While open sets describe the global map, sometimes we only care about the immediate surroundings of a point. We explore the "building blocks" of space and the hidden countable skeletons that hold everything together.',
    'metrics.neigh.def.title': 'Neighborhoods & Interiors',
    'metrics.neigh.def.intro': 'A set is a neighborhood if it is "thick enough" to swallow an open ball around a point.',
    'metrics.neigh.q.title': 'Counter-Intuitive Fact: The Empty Interior of ℚ',
    'metrics.neigh.q.desc': 'Even though there are infinite fractions, you can NEVER draw a valid open ball made entirely of fractions. Irrationals will always sneak in!',
    'metrics.neigh.base.title': 'Bases: The Building Blocks',
    'metrics.neigh.base.desc': 'A collection is a base if every open set can be built by taking unions of its elements. In metric spaces, open balls are the ultimate base.',
    'metrics.neigh.sep.title': 'Separable Spaces',
    'metrics.neigh.sep.desc': 'A space is separable if it has a countable dense set—a microscopic skeleton that touches every part of the universe.',
    'metrics.neigh.viz.title': 'The Density Zoom',
    'metrics.neigh.viz.subtitle': 'Zoom in on the irrational number √2. Notice how rational fractions dynamically appear to fill every gap, proving that ℚ is dense in ℝ.',

    // Sequences & Adherence
    'nav.metrics.seq': '6. Sequences & Adherence',
    'metrics.seq.hero.title': 'The Intuition of Infinite Journeys',
    'metrics.seq.hero.subtitle': 'Sequences are like infinite journeys through a space. Convergence is reaching a permanent destination; a Value of Adherence is a place you visit infinitely many times.',
    'metrics.seq.def.title': 'Convergence vs. Adherence',
    'metrics.seq.def.conv': 'Definition 12: Convergence',
    'metrics.seq.def.conv_desc': 'Eventually, past some index, ALL future terms are trapped close to the limit.',
    'metrics.seq.def.adh': 'Definition 13: Value of Adherence',
    'metrics.seq.def.adh_desc': 'No matter how far you look, you will ALWAYS find another term that dips close to this point.',
    'metrics.seq.sub.title': 'Subsequences & The Grand Link',
    'metrics.seq.sub.desc': 'A subsequence is formed by picking terms without changing their order. It allows us to extract order from chaotic sequences.',
    'metrics.seq.trap.title': 'Anomalies and Traps',
    'metrics.seq.trap.osc': 'Multiple Values (Divergence)',
    'metrics.seq.trap.single': 'The Single Adherence Trap',
    'metrics.seq.viz.title': 'The Subsequence Extractor',
    'metrics.seq.viz.subtitle': 'Choose a sequence and extract its "even" subsequence to discover hidden convergence.',

    // Continuity
    'nav.metrics.continuity': '7. Continuity: Local to Lipschitz',
    'metrics.cont.hero.title': 'The Hierarchy of Smoothness',
    'metrics.cont.hero.subtitle': 'In metric spaces, continuity is all about bounding the error. If you restrict how much the input changes, can you guarantee the output won\'t jump wildly?',
    'metrics.cont.def.title': 'Local vs. Uniform Continuity',
    'metrics.cont.def.local': 'Proposition 10: Local Continuity',
    'metrics.cont.def.uniform': 'Definition 15: Uniform Continuity',
    'metrics.cont.def.uniform_desc': 'A single restriction rule works everywhere simultaneously. The safety margin alpha depends ONLY on epsilon, not on your location.',
    'metrics.cont.def.lipschitz': 'Definition 16: Lipschitz Continuity',
    'metrics.cont.def.lipschitz_desc': 'The function\'s "speed" is strictly capped by a constant ratio. It is the gold standard of stability.',
    'metrics.cont.viz.title': 'The ε-α Sliding Box',
    'metrics.cont.viz.subtitle': 'Drag the box along the curve. If the curve stays inside the left/right exits without breaking the top/bottom, it is uniformly continuous for this α.',

    // Compactness I
    'nav.metrics.compact': '8. Sequential Compactness',
    'metrics.compact.hero.title': 'The Ultimate Good Behavior',
    'metrics.compact.hero.subtitle': 'Compactness is the topological version of being finite. In a compact space, you cannot stretch to infinity or fall into holes. Every infinite journey is forced to clump up somewhere inside.',
    'metrics.compact.seq.title': 'The Sequential Characterization',
    'metrics.compact.seq.bw': 'Theorem 1: Bolzano-Weierstrass Property',
    'metrics.compact.seq.desc': 'A set A is compact if and only if EVERY sequence in A has a value of adherence in A. Order is always hidden within infinite chaos.',
    'metrics.compact.rules.title': 'The Rules of Compactness',
    'metrics.compact.rules.cb': 'Compact implies Closed and Bounded',
    'metrics.compact.rules.cb_desc': 'Compact sets have no missing boundaries and do not stretch to infinity. Note: The reverse is generally false!',
    'metrics.compact.rules.sub': 'Closed Subsets',
    'metrics.compact.rules.sub_desc': 'A closed shape inside a compact universe is always compact.',
    'metrics.compact.heine.title': 'The Magic of ℝⁿ (Heine-Borel)',
    'metrics.compact.heine.desc': 'In Euclidean space, "Closed + Bounded" is exactly equivalent to being compact. This makes calculus in ℝⁿ very predictable.',
    'metrics.compact.viz.title': 'The Infinite Particle Trap',
    'metrics.compact.viz.subtitle': 'Drop 500 particles into a bounded box. Notice how they are mathematically forced to cluster, forming a value of adherence.',

    // Compactness II
    'nav.metrics.compact2': '9. Continuous Images & Heine',
    'metrics.compact2.hero.title': 'The Power of Preservation',
    'metrics.compact2.hero.subtitle': 'Continuous functions map points without tearing the fabric of space. Because they preserve proximity, they perfectly translate compactness from one universe to another.',
    'metrics.compact2.img.title': 'Continuous Images',
    'metrics.compact2.img.desc': 'If you start with a compact domain, the output is mathematically guaranteed to be safe, bounded, and predictable.',
    'metrics.compact2.trap.title': 'The Inverse Image Trap',
    'metrics.compact2.trap.desc': 'While direct images preserve compactness, inverse images do not. A bounded output doesn\'t mean the input wasn\'t stretching to infinity.',
    'metrics.compact2.extrema.title': 'The Extreme Value Theorem',
    'metrics.compact2.heine.title': 'Heine\'s Theorem',
    'metrics.compact2.heine.desc': 'A continuous function on a compact space is automatically uniformly continuous. Compactness "tames" the function\'s growth.',
    'metrics.compact2.viz.title': 'The Extrema Finder',
    'metrics.compact2.viz.subtitle': 'Toggle between a compact and non-compact domain to see why a continuous function is only guaranteed to reach its bounds on compact sets.',

    // Completeness
    'nav.metrics.complete': '10. Completeness & Fixed Points',
    'metrics.complete.hero.title': 'Completeness & Fixed Points',
    'metrics.complete.hero.subtitle': 'A complete space is a universe with no microscopic holes. In such a perfect environment, any sequence that looks like it is converging mathematically MUST converge. This guarantees the existence of stable fixed points.',
    'metrics.complete.cauchy.title': 'Cauchy Sequences',
    'metrics.complete.cauchy.desc': 'A sequence is Cauchy if its terms eventually get arbitrarily close to EACH OTHER. In a complete space, this is enough to guarantee a limit.',
    'metrics.complete.def.title': 'Complete Spaces',
    'metrics.complete.def.desc': 'A space is complete if every Cauchy sequence converges. A perfect universe for analysis.',
    'metrics.complete.fixed.title': 'The Picard-Banach Fixed-Point Theorem',
    'metrics.complete.fixed.desc': 'A contractive function in a complete space is an attractor: all paths lead to a unique, stable fixed point.',
    'metrics.complete.viz.title': 'The Picard-Banach Attractor',
    'metrics.complete.viz.subtitle': 'Pick a starting point and iterate the function f(x) = cos(x). Watch the cobweb plot spiral into the unique fixed point.'
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
    'chapter.1.desc': 'Comprenez les 3 axiomes fondamentaux, les ensembles ouveils et la définition formelle.',
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
    'common.return': 'Retourner à l\'accueil',

    // Metric Spaces Course
    'nav.metrics.intro': '1. Fondations de la Distance',
    'metrics.hero.title': 'Les fondations de la distance',
    'metrics.hero.subtitle': 'Revenez des ensembles abstraits à une réalité mesurable. Un espace métrique est un univers muni d\'une règle, où chaque point a une distance numérique définie par rapport aux autres.',
    'metrics.def.title': 'Espace métrique & Distance',
    'metrics.def.intro': 'Soit E un ensemble non vide. Une distance (ou métrique) sur E est une fonction d : E × E → ℝ⁺ qui satisfait trois axiomes stricts :',
    'metrics.def.ax1': '1. Séparation / Identité des indiscernables :',
    'metrics.def.ax1_sub': 'La distance entre deux points est nulle si et seulement si ils sont identiques.',
    'metrics.def.ax2': '2. Symétrie :',
    'metrics.def.ax2_sub': 'La distance de A vers B est identique à la distance de B vers A.',
    'metrics.def.ax3': '3. Inégalité triangulaire :',
    'metrics.def.ax3_sub': 'Le chemin direct est toujours le plus court. Faire un détour par un troisième point sera égal ou supérieur à la distance directe.',
    'metrics.ex.title': 'Exemples fondamentaux',
    'metrics.viz.title': 'La forme de la distance',
    'metrics.viz.subtitle': 'Faites glisser les points A, B et C pour vérifier l\'inégalité triangulaire à travers différents univers mathématiques.',

    // Balls and Spheres
    'nav.metrics.balls': '2. Boules et Sphères',
    'metrics.balls.hero.title': 'La géométrie des boules et sphères',
    'metrics.balls.hero.subtitle': 'Dans la géométrie quotidienne, une « boule » est ronde. Pourtant, dans les espaces métriques, sa forme est dictée par la règle de calcul choisie. Selon la métrique, une boule peut ressembler à un cercle, un losange ou un carré.',
    'metrics.balls.def.title': 'Définitions formelles',
    'metrics.balls.def.intro': 'Soit (E, d) un espace métrique, a ∈ E un centre et r > 0 un rayon réel.',
    'metrics.balls.def.open': '1. Boule ouverte :',
    'metrics.balls.def.open_sub': 'L\'ensemble des points dont la distance à a est strictement inférieure à r.',
    'metrics.balls.def.closed': '2. Boule fermée :',
    'metrics.balls.def.closed_sub': 'L\'ensemble des points à une distance inférieure ou égale à r de a.',
    'metrics.balls.def.sphere': '3. Sphère :',
    'metrics.balls.def.sphere_sub': 'L\'ensemble des points situés exactement à une distance r de a.',
    'metrics.balls.ex.title': 'Exemple en 1D',
    'metrics.balls.ex.desc': 'Sur la droite réelle, une boule ouverte est simplement un intervalle ouvert.',
    'metrics.balls.viz.title': 'La boule métamorphique',
    'metrics.balls.viz.subtitle': 'Ajustez le rayon et changez la métrique pour voir la géométrie d\'une boule ouverte muter dans un plan 2D.',

    // Open Sets
    'nav.metrics.open': '3. Ensembles ouverts & Intérieurs',
    'metrics.open.hero.title': 'L\'intuition de l\'espace vital',
    'metrics.open.hero.subtitle': 'Un ensemble est ouvert s\'il n\'a pas de peau rigide. Métaphoriquement, chaque point à l\'intérieur possède assez d\'« espace vital » pour gonfler une petite boule qui reste entièrement piégée dans l\'ensemble.',
    'metrics.open.def.title': 'Définir l\'ouverture',
    'metrics.open.def.intro': 'Une partie A est ouverte si chaque point possède un rayon de sécurité autour de lui.',
    'metrics.open.prop.title': 'Stabilité & Le piège infini',
    'metrics.open.warn.title': 'Le piège de l\'intersection infinie',
    'metrics.open.warn.desc': 'On ne peut PAS prendre une intersection infinie d\'ouverts et espérer qu\'elle reste ouverte. Des intervalles rétrécissants peuvent s\'effondrer en un point unique.',
    'metrics.open.interior.title': 'L\'Intérieur d\'un ensemble',
    'metrics.open.interior.desc': 'L\'intérieur est la collection de tous les points qui possèdent un espace vital. Un ensemble est ouvert si et seulement si il est égal à son intérieur.',
    'metrics.open.viz.title': 'Le Test de l\'Espace Vital',
    'metrics.open.viz.subtitle': 'Basculez entre un carré ouvert et fermé. Déplacez votre sonde pour voir si vous pouvez trouver un point avec un espace vital nul.',

    // Closed Sets
    'nav.metrics.closed': '4. Ensembles fermés & Adhérence',
    'metrics.closed.hero.title': 'La peau de l\'espace',
    'metrics.closed.hero.subtitle': 'Si les ouverts n\'ont pas de peau, les fermés incluent leur frontière entière. Ce sont les formes qui « piègent » toutes leurs limites — vous ne pouvez pas vous approcher infiniment du bord sans y rester coincé.',
    'metrics.closed.def.title': 'Ensembles fermés & Pièges infinis',
    'metrics.closed.def.intro': 'Un sous-ensemble F est fermé si son complémentaire est ouvert. Alors que les réunions finies sont sûres, la réunion infinie de fermés peut briser cette propriété.',
    'metrics.closed.warn.title': 'Le piège de la réunion infinie',
    'metrics.closed.warn.desc': 'On ne peut PAS prendre une réunion infinie de fermés et espérer qu\'elle reste fermée. Un exemple classique est la réunion des [1/n, 1] qui donne ]0, 1].',
    'metrics.closed.adh.title': 'Adhérence et Fermeture',
    'metrics.closed.adh.intro': 'Un point est adhérent à un ensemble si tout voisinage de ce point rencontre l\'ensemble. La collection de tous ces points forme l\'Adhérence.',
    'metrics.closed.seq.title': 'Caractérisation séquentielle',
    'metrics.closed.seq.desc': 'Dans les espaces métriques, un point est dans l\'adhérence si et seulement s\'il existe une suite de points de l\'ensemble qui converge vers lui.',
    'metrics.closed.viz.title': 'Le Sniper Séquentiel',
    'metrics.closed.viz.subtitle': 'Faites glisser la cible « a » et tentez de l\'atteindre avec une suite (xₙ) issue de l\'intérieur de l\'ensemble A.',

    // Neighborhoods & Separability
    'nav.metrics.neigh': '5. Voisinages & Séparabilité',
    'metrics.neigh.hero.title': 'Environnements locaux et squelettes',
    'metrics.neigh.hero.subtitle': 'Alors que les ouverts décrivent la carte globale, nous ne nous soucions parfois que de l\'entourage immédiat d\'un point. Nous explorons les « briques » de l\'espace et les squelettes dénombrables cachés qui maintiennent l\'ensemble.',
    'metrics.neigh.def.title': 'Voisinages & Intérieurs',
    'metrics.neigh.def.intro': 'Un ensemble est un voisinage s\'il est « assez épais » pour avaler une boule ouverte autour d\'un point.',
    'metrics.neigh.q.title': 'Fait contre-intuitif : l\'intérieur vide de ℚ',
    'metrics.neigh.q.desc': 'Même s\'il existe une infinité de fractions, on ne peut JAMAIS tracer une boule ouverte composée uniquement de fractions. Les irrationnels s\'y glisseront toujours !',
    'metrics.neigh.base.title': 'Bases : les briques de base',
    'metrics.neigh.base.desc': 'Une famille est une base si tout ouvert peut être construit par réunion de ses éléments. Dans les espaces métriques, les boules forment la base ultime.',
    'metrics.neigh.sep.title': 'Espaces séparables',
    'metrics.neigh.sep.desc': 'Un espace est séparable s\'il possède une partie dénombrable dense — un squelette microscopique qui touche chaque recoin de l\'univers.',
    'metrics.neigh.viz.title': 'Le Zoom de Densité',
    'metrics.neigh.viz.subtitle': 'Zoomez sur le nombre irrationnel √2. Notez comment les fractions rationnelles apparaissent dynamiquement pour combler chaque vide, prouvant que ℚ est dense dans ℝ.',

    // Sequences & Adherence
    'nav.metrics.seq': '6. Suites & Adhérence',
    'metrics.seq.hero.title': 'L\'intuition des voyages infinis',
    'metrics.seq.hero.subtitle': 'Les suites sont comme des voyages infinis dans l\'espace. La convergence est l\'atteinte d\'une destination fixe ; une valeur d\'adhérence est un lieu visité une infinité de fois.',
    'metrics.seq.def.title': 'Convergence vs Adhérence',
    'metrics.seq.def.conv': 'Définition 12 : Convergence',
    'metrics.seq.def.conv_desc': 'Finalement, passé un certain rang, TOUS les termes futurs sont piégés près de la limite.',
    'metrics.seq.def.adh': 'Définition 13 : Valeur d\'adhérence',
    'metrics.seq.def.adh_desc': 'Peu importe où vous regardez, vous trouverez TOUJOURS un terme futur qui revient vers ce point.',
    'metrics.seq.sub.title': 'Sous-suites & Le Grand Lien',
    'metrics.seq.sub.desc': 'Une suite extraite est formée en choisissant des termes sans changer leur ordre. Elle permet d\'extraire l\'ordre du chaos.',
    'metrics.seq.trap.title': 'Anomalies et Pièges',
    'metrics.seq.trap.osc': 'Valeurs multiples (Divergence)',
    'metrics.seq.trap.single': 'Le piège de l\'adhérence unique',
    'metrics.seq.viz.title': 'L\'Extracteur de Sous-suite',
    'metrics.seq.viz.subtitle': 'Choisissez une suite et extrayez sa sous-suite « paire » pour découvrir une convergence cachée.',

    // Continuity
    'nav.metrics.continuity': '7. Continuité : du Local au Lipschitz',
    'metrics.cont.hero.title': 'La hiérarchie de la régularité',
    'metrics.cont.hero.subtitle': 'Dans les espaces métriques, la continuité consiste à borner l\'erreur. Si vous restreignez la variation en entrée, pouvez-vous garantir que la sortie ne sautera pas sauvagement ?',
    'metrics.cont.def.title': 'Continuité Locale vs Uniforme',
    'metrics.cont.def.local': 'Proposition 10 : Continuité Locale',
    'metrics.cont.def.uniform': 'Définition 15 : Continuité Uniforme',
    'metrics.cont.def.uniform_desc': 'Une règle unique fonctionne partout simultanément. La marge de sécurité alpha dépend UNIQUEMENT de epsilon.',
    'metrics.cont.def.lipschitz': 'Définition 16 : Applications Lipschitziennes',
    'metrics.cont.def.lipschitz_desc': 'La « vitesse » de la fonction est strictement plafonnée par un rapport constant. C\'est la norme d\'or de la stabilité.',
    'metrics.cont.viz.title': 'La Boîte Coulissante ε-α',
    'metrics.cont.viz.subtitle': 'Faites glisser la boîte le long de la courbe. Si la courbe reste dans les sorties latérales sans casser le haut/bas, elle est uniformément continue pour cet α.',

    // Compactness I
    'nav.metrics.compact': '8. Compacité séquentielle',
    'metrics.compact.hero.title': 'Le comportement idéal',
    'metrics.compact.hero.subtitle': 'La compacité est la version topologique de la finitude. Dans un espace compact, on ne peut pas s\'étendre à l\'infini ni tomber dans des trous. Chaque voyage infini est forcé de s\'agglutiner quelque part.',
    'metrics.compact.seq.title': 'La caractérisation séquentielle',
    'metrics.compact.seq.bw': 'Théorème 1 : Propriété de Bolzano-Weierstrass',
    'metrics.compact.seq.desc': 'Une partie A est compacte si et seulement si TOUTE suite d\'éléments de A admet une valeur d\'adhérence dans A. L\'ordre est toujours caché dans le chaos infini.',
    'metrics.compact.rules.title': 'Les règles de la compacité',
    'metrics.compact.rules.cb': 'Compact implique Fermé et Borné',
    'metrics.compact.rules.cb_desc': 'Les ensembles compacts n\'ont pas de frontières manquantes et ne s\'étendent pas à l\'infini. Note : La réciproque est généralement fausse !',
    'metrics.compact.rules.sub': 'Sous-ensembles fermés',
    'metrics.compact.rules.sub_desc': 'Une forme fermée dans un univers compact est toujours compacte.',
    'metrics.compact.heine.title': 'La magie de ℝⁿ (Heine-Borel)',
    'metrics.compact.heine.desc': 'Dans l\'espace euclidien, « Fermé + Borné » est exactement équivalent à être compact. Cela rend l\'analyse dans ℝⁿ très prévisible.',
    'metrics.compact.viz.title': 'Le Piège à Particules Infini',
    'metrics.compact.viz.subtitle': 'Lâchez 500 particules dans une boîte bornée. Notez comment elles sont mathématiquement forcées de s\'agglutiner, formant une valeur d\'adhérence.',

    // Compactness II
    'nav.metrics.compact2': '9. Images continues & Heine',
    'metrics.compact2.hero.title': 'Le pouvoir de la préservation',
    'metrics.compact2.hero.subtitle': 'Les fonctions continues transportent les points sans déchirer le tissu de l\'espace. Parce qu\'elles préservent la proximité, elles traduisent parfaitement la compacité d\'un univers à l\'autre.',
    'metrics.compact2.img.title': 'Images continues',
    'metrics.compact2.img.desc': 'Si vous partez d\'un domaine compact, la sortie est mathématiquement garantie comme sûre, bornée et prévisible.',
    'metrics.compact2.trap.title': 'Le piège de l\'image réciproque',
    'metrics.compact2.trap.desc': 'Alors que les images directes préservent la compacité, les images réciproques ne le font pas. Une sortie bornée ne signifie pas que l\'entrée ne s\'étendait pas à l\'infini.',
    'metrics.compact2.extrema.title': 'Théorème des Bornes Atteintes',
    'metrics.compact2.heine.title': 'Théorème de Heine',
    'metrics.compact2.heine.desc': 'Une fonction continue sur un espace compact est automatiquement uniformément continue. La compacité « dompte » la croissance de la fonction.',
    'metrics.compact2.viz.title': 'L\'Extracteur d\'Extrema',
    'metrics.compact2.viz.subtitle': 'Basculez entre un domaine compact et non-compact pour voir pourquoi une fonction continue n\'est garantie d\'atteindre ses bornes que sur des ensembles compacts.'
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
