import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation, Navigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronRight, Home, Map, Target, ZoomIn, ShieldCheck, Globe, Combine, Activity, Box, MapPin, Link2, PencilLine, Languages, Ruler, Circle, ShieldAlert, Footprints, Sparkles, Network, Wind } from 'lucide-react';
import LandingPage from './pages/LandingPage';
import TopologyBasics from './pages/TopologyBasics';
import SetConcepts from './pages/SetConcepts';
import NeighborhoodsAndBases from './pages/NeighborhoodsAndBases';
import DensityAndSeparation from './pages/DensityAndSeparation';
import InducedTopology from './pages/InducedTopology';
import ProductTopology from './pages/ProductTopology';
import ContinuityAndLimits from './pages/ContinuityAndLimits';
import CompactSpaces from './pages/CompactSpaces';
import LocallyCompactSpaces from './pages/LocallyCompactSpaces';
import ConnectedSpacesPage from './pages/ConnectedSpacesPage';
import PathConnectednessPage from './pages/PathConnectednessPage';
import MetricsLandingPage from './pages/MetricsLandingPage';
import MetricFoundations from './pages/MetricFoundations';
import MetricBallsPage from './pages/MetricBallsPage';
import MetricOpenSets from './pages/MetricOpenSets';
import MetricClosedSets from './pages/MetricClosedSets';
import MetricNeighborhoodsPage from './pages/MetricNeighborhoodsPage';
import MetricSequencesPage from './pages/MetricSequencesPage';
import MetricContinuityPage from './pages/MetricContinuityPage';
import MetricCompactPage from './pages/MetricCompactPage';
import MetricCompactLebesgue from './pages/MetricCompactLebesgue';
import MetricCompletenessPage from './pages/MetricCompletenessPage';
import TD1 from './pages/TD1';
import TD1Ex2 from './pages/TD1Ex2';
import TD1Ex3 from './pages/TD1Ex3';
import TD1Ex4 from './pages/TD1Ex4';
import TD1Ex5 from './pages/TD1Ex5';
import TD1Ex6 from './pages/TD1Ex6';
import TD1Ex7 from './pages/TD1Ex7';
import TD1Ex8 from './pages/TD1Ex8';
import TD1Ex9 from './pages/TD1Ex9';
import TD1Ex10 from './pages/TD1Ex10';
import TD1Ex11 from './pages/TD1Ex11';
import TD1Ex12 from './pages/TD1Ex12';
import { LanguageProvider, useLanguage } from './context/LanguageContext';

// Component to handle scroll reset on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  
  return null;
};

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { language, setLanguage, t } = useLanguage();
  
  const isActive = (path: string) => location.pathname === path;

  const topologyLinks = [
    { path: '/topology', label: t('nav.home'), icon: <Home className="w-4 h-4" /> },
    { path: '/topology/introduction', label: t('nav.intro'), icon: <Map className="w-4 h-4" /> },
    { path: '/topology/interior-closure-boundary', label: t('nav.concepts'), icon: <Target className="w-4 h-4" /> },
    { path: '/topology/neighborhoods-and-bases', label: t('nav.bases'), icon: <ZoomIn className="w-4 h-4" /> },
    { path: '/topology/density-and-separation', label: t('nav.density'), icon: <ShieldCheck className="w-4 h-4" /> },
    { path: '/topology/induced-topology', label: t('nav.induced'), icon: <Globe className="w-4 h-4" /> },
    { path: '/topology/product-topology', label: t('nav.product'), icon: <Combine className="w-4 h-4" /> },
    { path: '/topology/continuity-and-limits', label: t('nav.continuity'), icon: <Activity className="w-4 h-4" /> },
    { path: '/topology/compact-spaces', label: t('nav.compact'), icon: <Box className="w-4 h-4" /> },
    { path: '/topology/locally-compact-spaces', label: t('nav.locallyCompact'), icon: <MapPin className="w-4 h-4" /> },
    { path: '/topology/connected-spaces', label: t('nav.connected'), icon: <Link2 className="w-4 h-4" /> },
    { path: '/topology/path-connectedness', label: t('nav.pathConnected'), icon: <PencilLine className="w-4 h-4" /> },
  ];

  const metricLinks = [
    { path: '/metrics', label: t('nav.home'), icon: <Home className="w-4 h-4" /> },
    { path: '/metrics/foundations', label: t('nav.metrics.intro'), icon: <Ruler className="w-4 h-4" /> },
    { path: '/metrics/balls', label: t('nav.metrics.balls'), icon: <Circle className="w-4 h-4" /> },
    { path: '/metrics/open-sets', label: t('nav.metrics.open'), icon: <Wind className="w-4 h-4" /> },
    { path: '/metrics/closed-sets', label: t('nav.metrics.closed'), icon: <ShieldAlert className="w-4 h-4" /> },
    { path: '/metrics/neighborhoods', label: t('nav.metrics.neigh'), icon: <ZoomIn className="w-4 h-4" /> },
    { path: '/metrics/sequences', label: t('nav.metrics.seq'), icon: <Footprints className="w-4 h-4" /> },
    { path: '/metrics/continuity', label: t('nav.metrics.continuity'), icon: <Activity className="w-4 h-4" /> },
    { path: '/metrics/compactness', label: t('nav.metrics.compact'), icon: <Box className="w-4 h-4" /> },
    { path: '/metrics/preservation', label: t('nav.metrics.compact2'), icon: <Sparkles className="w-4 h-4" /> },
    { path: '/metrics/completeness', label: t('nav.metrics.complete'), icon: <Network className="w-4 h-4" /> },
  ];

  const tdLinks = [
    { path: '/td1/ex1', label: 'Exercice 1: Distance Discrète', icon: <PencilLine className="w-4 h-4" /> },
    { path: '/td1/ex2', label: 'Exercice 2: Complétude de (R, δ)', icon: <PencilLine className="w-4 h-4" /> },
    { path: '/td1/ex3', label: 'Exercice 3: Propriétés de (E, d)', icon: <PencilLine className="w-4 h-4" /> },
    { path: '/td1/ex4', label: 'Exercice 4: Ensembles non fermés', icon: <PencilLine className="w-4 h-4" /> },
    { path: '/td1/ex5', label: 'Exercice 5: Analyse Topologique', icon: <PencilLine className="w-4 h-4" /> },
    { path: '/td1/ex6', label: 'Exercice 6: Topologie dans R²', icon: <PencilLine className="w-4 h-4" /> },
    { path: '/td1/ex7', label: 'Exercice 7: Intersections & Adhérences', icon: <PencilLine className="w-4 h-4" /> },
    { path: '/td1/ex8', label: 'Exercice 8: Distances & Séparation', icon: <PencilLine className="w-4 h-4" /> },
    { path: '/td1/ex9', label: 'Exercice 9: Normes sur C¹([0, 1])', icon: <PencilLine className="w-4 h-4" /> },
    { path: '/td1/ex10', label: 'Exercice 10: Propriétés des s.e.v.', icon: <PencilLine className="w-4 h-4" /> },
    { path: '/td1/ex11', label: 'Exercice 11: Constance sur un connexe', icon: <PencilLine className="w-4 h-4" /> },
    { path: '/td1/ex12', label: 'Exercice 12: Non-connexité de GLn(R)', icon: <PencilLine className="w-4 h-4" /> },
  ];

  const currentCourse = location.pathname.startsWith('/metrics') 
    ? 'metrics' 
    : location.pathname.startsWith('/td1') 
      ? 'td1' 
      : 'topology';

  return (
    <header className="sticky top-0 z-[100] bg-white/80 backdrop-blur-md border-b border-slate-100">
      <nav className="mx-auto max-w-7xl px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <Link to={`/${currentCourse === 'td1' ? 'td1/ex1' : currentCourse}`} onClick={() => setIsOpen(false)} className="flex items-center gap-2">
            <div className={`w-8 h-8 rounded-lg flex items-center justify-center text-white font-bold text-xl ${
              currentCourse === 'metrics' ? 'bg-indigo-600' : 
              currentCourse === 'td1' ? 'bg-slate-900' : 'bg-blue-600'
            }`}>
              {currentCourse === 'metrics' ? 'm' : currentCourse === 'td1' ? 'ex' : 'τ'}
            </div>
            <span className="font-bold text-slate-900 tracking-tight">TopoLearn</span>
          </Link>
          
          <div className="hidden md:flex items-center gap-4 text-[10px] font-bold uppercase tracking-widest text-slate-400">
            <Link to="/topology" className={`${currentCourse === 'topology' ? 'text-blue-600' : 'hover:text-slate-600'} transition-colors`}>Topology</Link>
            <div className="w-1 h-1 bg-slate-200 rounded-full" />
            <Link to="/metrics" className={`${currentCourse === 'metrics' ? 'text-indigo-600' : 'hover:text-slate-600'} transition-colors`}>Metrics</Link>
            <div className="w-1 h-1 bg-slate-200 rounded-full" />
            <Link to="/td1/ex1" className={`${currentCourse === 'td1' ? 'text-slate-900' : 'hover:text-slate-600'} transition-colors`}>TDs</Link>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button 
            onClick={() => setLanguage(language === 'EN' ? 'FR' : 'EN')}
            className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-50 border border-slate-100 text-slate-600 hover:bg-white hover:shadow-sm transition-all"
          >
            <Languages className="w-4 h-4 text-indigo-500" />
            <span className="text-[10px] font-bold uppercase tracking-widest">{language}</span>
          </button>

          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 hover:bg-slate-100 rounded-xl transition-colors text-slate-600"
            aria-label="Toggle Menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-slate-900/20 backdrop-blur-sm z-[90]"
            />
            
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="absolute top-full right-4 w-80 bg-white rounded-[2rem] shadow-2xl border border-slate-100 p-4 z-[100] mt-2 overflow-hidden"
            >
              <div className="flex flex-col gap-1 overflow-y-auto max-h-[80vh] custom-scrollbar">
                <div className="flex md:hidden items-center justify-around p-2 bg-slate-50 rounded-2xl mb-4 border border-slate-100">
                  <Link to="/topology" onClick={() => setIsOpen(false)} className={`flex-grow text-center py-2 text-[10px] font-bold uppercase rounded-xl transition-all ${currentCourse === 'topology' ? 'bg-white shadow-sm text-blue-600' : 'text-slate-400'}`}>Topology</Link>
                  <Link to="/metrics" onClick={() => setIsOpen(false)} className={`flex-grow text-center py-2 text-[10px] font-bold uppercase rounded-xl transition-all ${currentCourse === 'metrics' ? 'bg-white shadow-sm text-indigo-600' : 'text-slate-400'}`}>Metrics</Link>
                  <Link to="/td1/ex1" onClick={() => setIsOpen(false)} className={`flex-grow text-center py-2 text-[10px] font-bold uppercase rounded-xl transition-all ${currentCourse === 'td1' ? 'bg-white shadow-sm text-slate-900' : 'text-slate-400'}`}>TDs</Link>
                </div>

                {currentCourse === 'topology' ? (
                  <>
                    <p className="px-4 py-2 text-[10px] font-bold text-slate-400 uppercase tracking-widest">Topology Course</p>
                    {topologyLinks.map((link) => (
                      <Link
                        key={link.path}
                        to={link.path}
                        onClick={() => setIsOpen(false)}
                        className={`flex items-center justify-between px-4 py-3 rounded-2xl transition-all ${
                          isActive(link.path) 
                            ? 'bg-blue-50 text-blue-600' 
                            : 'hover:bg-slate-50 text-slate-600 hover:text-slate-900'
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <div className={`p-2 rounded-lg ${isActive(link.path) ? 'bg-blue-600 text-white' : 'bg-slate-100 text-slate-400'}`}>
                            {link.icon}
                          </div>
                          <span className="font-bold text-xs">{link.label}</span>
                        </div>
                        {isActive(link.path) && <ChevronRight className="w-4 h-4" />}
                      </Link>
                    ))}
                  </>
                ) : currentCourse === 'metrics' ? (
                  <>
                    <p className="px-4 py-2 text-[10px] font-bold text-slate-400 uppercase tracking-widest">Metric Spaces Course</p>
                    {metricLinks.map((link) => (
                      <Link
                        key={link.path}
                        to={link.path}
                        onClick={() => setIsOpen(false)}
                        className={`flex items-center justify-between px-4 py-3 rounded-2xl transition-all ${
                          isActive(link.path) 
                            ? 'bg-indigo-50 text-indigo-600' 
                            : 'hover:bg-slate-50 text-slate-600 hover:text-slate-900'
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <div className={`p-2 rounded-lg ${isActive(link.path) ? 'bg-indigo-600 text-white' : 'bg-slate-100 text-slate-400'}`}>
                            {link.icon}
                          </div>
                          <span className="font-bold text-xs">{link.label}</span>
                        </div>
                        {isActive(link.path) && <ChevronRight className="w-4 h-4" />}
                      </Link>
                    ))}
                  </>
                ) : (
                  <>
                    <p className="px-4 py-2 text-[10px] font-bold text-slate-400 uppercase tracking-widest">Exercise Solutions</p>
                    {tdLinks.map((link) => (
                      <Link
                        key={link.path}
                        to={link.path}
                        onClick={() => setIsOpen(false)}
                        className={`flex items-center justify-between px-4 py-3 rounded-2xl transition-all ${
                          isActive(link.path) 
                            ? 'bg-slate-100 text-slate-900' 
                            : 'hover:bg-slate-50 text-slate-600 hover:text-slate-900'
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <div className={`p-2 rounded-lg ${isActive(link.path) ? 'bg-slate-900 text-white' : 'bg-slate-100 text-slate-400'}`}>
                            {link.icon}
                          </div>
                          <span className="font-bold text-xs">{link.label}</span>
                        </div>
                        {isActive(link.path) && <ChevronRight className="w-4 h-4" />}
                      </Link>
                    ))}
                  </>
                )}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
};

function App() {
  return (
    <LanguageProvider>
      <Router>
        <ScrollToTop />
        <div className="min-h-screen bg-white selection:bg-blue-100 selection:text-blue-900">
          <Navbar />

          <Routes>
            <Route path="/" element={<Navigate to="/topology" replace />} />
            
            <Route path="/topology">
              <Route index element={<LandingPage />} />
              <Route path="introduction" element={<TopologyBasics />} />
              <Route path="interior-closure-boundary" element={<SetConcepts />} />
              <Route path="neighborhoods-and-bases" element={<NeighborhoodsAndBases />} />
              <Route path="density-and-separation" element={<DensityAndSeparation />} />
              <Route path="induced-topology" element={<InducedTopology />} />
              <Route path="product-topology" element={<ProductTopology />} />
              <Route path="continuity-and-limits" element={<ContinuityAndLimits />} />
              <Route path="compact-spaces" element={<CompactSpaces />} />
              <Route path="locally-compact-spaces" element={<LocallyCompactSpaces />} />
              <Route path="connected-spaces" element={<ConnectedSpacesPage />} />
              <Route path="path-connectedness" element={<PathConnectednessPage />} />
            </Route>

            <Route path="/metrics">
              <Route index element={<MetricsLandingPage />} />
              <Route path="foundations" element={<MetricFoundations />} />
              <Route path="balls" element={<MetricBallsPage />} />
              <Route path="open-sets" element={<MetricOpenSets />} />
              <Route path="closed-sets" element={<MetricClosedSets />} />
              <Route path="neighborhoods" element={<MetricNeighborhoodsPage />} />
              <Route path="sequences" element={<MetricSequencesPage />} />
              <Route path="continuity" element={<MetricContinuityPage />} />
              <Route path="compactness" element={<MetricCompactPage />} />
              <Route path="preservation" element={<MetricCompactLebesgue />} />
              <Route path="completeness" element={<MetricCompletenessPage />} />
            </Route>

            <Route path="/td1">
              <Route path="ex1" element={<TD1 />} />
              <Route path="ex2" element={<TD1Ex2 />} />
              <Route path="ex3" element={<TD1Ex3 />} />
              <Route path="ex4" element={<TD1Ex4 />} />
              <Route path="ex5" element={<TD1Ex5 />} />
              <Route path="ex6" element={<TD1Ex6 />} />
              <Route path="ex7" element={<TD1Ex7 />} />
              <Route path="ex8" element={<TD1Ex8 />} />
              <Route path="ex9" element={<TD1Ex9 />} />
              <Route path="ex10" element={<TD1Ex10 />} />
              <Route path="ex11" element={<TD1Ex11 />} />
              <Route path="ex12" element={<TD1Ex12 />} />
            </Route>
          </Routes>

          <footer className="bg-slate-900 py-12 px-6">
            <div className="mx-auto max-w-7xl flex flex-col md:flex-row justify-between items-center gap-8 text-center md:text-left relative z-10">
              <div>
                <div className="flex items-center gap-2 justify-center md:justify-start mb-4">
                  <div className="w-6 h-6 bg-blue-500 rounded flex items-center justify-center text-white font-bold text-sm">
                    τ
                  </div>
                  <span className="font-bold text-white tracking-tight">TopoLearn</span>
                </div>
                <p className="text-slate-400 text-sm max-w-xs italic">
                  A modern interactive guide to understanding the abstract beauty of Point-Set Topology and Metric Spaces.
                </p>
              </div>
              <div className="text-slate-500 text-xs">
                © 2026 TopoLearn Project. Built for educational excellence.
              </div>
            </div>
          </footer>
        </div>
      </Router>
    </LanguageProvider>
  );
};

export default App;
