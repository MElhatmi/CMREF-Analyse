import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { BookOpen, Ruler, Circle, ArrowRight, Home, ShieldAlert, Footprints, Activity, Box, Sparkles, Network, Wind } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const MetricsLandingPage: React.FC = () => {
  const { t } = useLanguage();

  const chapters = [
    { path: 'foundations', title: t('nav.metrics.intro'), icon: <Ruler className="w-10 h-10 text-indigo-600 mb-6" />, color: 'group-hover:border-indigo-500' },
    { path: 'balls', title: t('nav.metrics.balls'), icon: <Circle className="w-10 h-10 text-blue-500 mb-6" />, color: 'group-hover:border-blue-500' },
    { path: 'open-sets', title: t('nav.metrics.open'), icon: <Wind className="w-10 h-10 text-sky-500 mb-6" />, color: 'group-hover:border-sky-500' },
    { path: 'closed-sets', title: t('nav.metrics.closed'), icon: <ShieldAlert className="w-10 h-10 text-red-500 mb-6" />, color: 'group-hover:border-red-500' },
    { path: 'neighborhoods', title: t('nav.metrics.neigh'), icon: <BookOpen className="w-10 h-10 text-indigo-500 mb-6" />, color: 'group-hover:border-indigo-500' },
    { path: 'sequences', title: t('nav.metrics.seq'), icon: <Footprints className="w-10 h-10 text-amber-500 mb-6" />, color: 'group-hover:border-amber-500' },
    { path: 'continuity', title: t('nav.metrics.continuity'), icon: <Activity className="w-10 h-10 text-blue-500 mb-6" />, color: 'group-hover:border-blue-500' },
    { path: 'compactness', title: t('nav.metrics.compact'), icon: <Box className="w-10 h-10 text-indigo-500 mb-6" />, color: 'group-hover:border-indigo-500' },
    { path: 'preservation', title: t('nav.metrics.compact2'), icon: <Sparkles className="w-10 h-10 text-emerald-500 mb-6" />, color: 'group-hover:border-emerald-500' },
    { path: 'completeness', title: t('nav.metrics.complete'), icon: <Network className="w-10 h-10 text-indigo-600 mb-6" />, color: 'group-hover:border-indigo-600' },
  ];

  return (
    <div className="bg-white min-h-[calc(100vh-64px)] flex flex-col items-center justify-center px-6 py-20">
      <div className="max-w-6xl w-full text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 bg-indigo-50 px-4 py-2 rounded-full text-indigo-600 font-bold text-xs uppercase tracking-widest mb-8">
            <BookOpen className="w-4 h-4" />
            Interactive Mathematics Series
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 tracking-tight mb-8 text-balance">
            {t('landing.title')} <span className="text-indigo-600">Metric Spaces</span>
          </h1>
          <p className="text-xl text-slate-600 leading-relaxed mb-12 max-w-2xl mx-auto">
            {t('metrics.hero.subtitle')}
          </p>
          
          <div className="flex justify-center mb-20">
            <Link 
              to="/metrics/foundations"
              className="group bg-indigo-600 hover:bg-indigo-700 text-white px-10 py-4 rounded-2xl font-bold text-lg transition-all shadow-xl shadow-indigo-200 flex items-center justify-center gap-2"
            >
              {t('landing.start')}
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </motion.div>

        {/* Course Syllabus Preview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
          {chapters.map((ch) => (
            <Link key={ch.path} to={`/metrics/${ch.path}`} className="group">
              <div className={`p-8 bg-slate-50 rounded-[2.5rem] border-2 border-transparent transition-all h-full ${ch.color} group-hover:bg-white`}>
                {ch.icon}
                <h3 className="text-xl font-bold text-slate-900 mb-2">{ch.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed italic">
                  Chapter {chapters.indexOf(ch) + 1} of the interactive metric spaces journey.
                </p>
              </div>
            </Link>
          ))}
        </div>

        {/* Back to Topology CTA */}
        <div className="mt-32 p-12 bg-slate-900 rounded-[4rem] text-white relative overflow-hidden shadow-2xl">
           <div className="absolute top-0 right-0 p-8 opacity-10">
              <Home className="w-64 h-64" />
           </div>
           <div className="relative z-10 text-center">
              <h3 className="text-3xl font-bold mb-4">Pure Abstraction</h3>
              <p className="text-slate-400 max-w-xl mx-auto mb-8">
                 Want to see where distance comes from? Return to the world of open sets in our <strong>Topology Basics</strong> course.
              </p>
              <Link 
                to="/topology"
                className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-2xl font-bold transition-all shadow-lg shadow-blue-500/20"
              >
                Go to Topology Hub <ArrowRight className="w-5 h-5" />
              </Link>
           </div>
        </div>
      </div>
    </div>
  );
};

export default MetricsLandingPage;
