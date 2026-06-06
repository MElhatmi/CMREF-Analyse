import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { BookOpen, Map, Target, ArrowRight, ZoomIn, ShieldCheck, Globe, Combine, Activity, Box, MapPin, Link2, PencilLine } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const LandingPage: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="bg-white min-h-[calc(100vh-64px)] flex flex-col items-center justify-center px-6 py-20">
      <div className="max-w-4xl w-full text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 bg-blue-50 px-4 py-2 rounded-full text-blue-600 font-bold text-xs uppercase tracking-widest mb-8">
            <BookOpen className="w-4 h-4" />
            Interactive Mathematics Series
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 tracking-tight mb-8 text-balance">
            {t('landing.title')} <span className="text-blue-600">Topology</span>
          </h1>
          <p className="text-xl text-slate-600 leading-relaxed mb-12 max-w-2xl mx-auto">
            {t('landing.subtitle')}
          </p>
          
          <div className="flex justify-center mb-20">
            <Link 
              to="/topology/topology-introduction"
              className="group bg-blue-600 hover:bg-blue-700 text-white px-10 py-4 rounded-2xl font-bold text-lg transition-all shadow-xl shadow-blue-200 flex items-center justify-center gap-2"
            >
              {t('landing.start')}
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </motion.div>

        {/* Course Syllabus Preview */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
          <Link to="/topology/topology-introduction" className="group">
            <div className="p-8 bg-slate-50 rounded-[2.5rem] border-2 border-transparent group-hover:border-blue-500 group-hover:bg-white transition-all h-full">
              <Map className="w-10 h-10 text-blue-600 mb-6" />
              <h3 className="text-xl font-bold text-slate-900 mb-2">{t('nav.intro')}</h3>
              <p className="text-sm text-slate-500 leading-relaxed">
                {t('chapter.1.desc')}
              </p>
            </div>
          </Link>

          <Link to="/topology/interior-closure-boundary" className="group">
            <div className="p-8 bg-slate-50 rounded-[2.5rem] border-2 border-transparent group-hover:border-blue-500 group-hover:bg-white transition-all h-full">
              <Target className="w-10 h-10 text-orange-500 mb-6" />
              <h3 className="text-xl font-bold text-slate-900 mb-2">{t('nav.concepts')}</h3>
              <p className="text-sm text-slate-500 leading-relaxed">
                {t('chapter.2.desc')}
              </p>
            </div>
          </Link>

          <Link to="/topology/neighborhoods-and-bases" className="group">
            <div className="p-8 bg-slate-50 rounded-[2.5rem] border-2 border-transparent group-hover:border-blue-500 group-hover:bg-white transition-all h-full">
              <ZoomIn className="w-10 h-10 text-indigo-600 mb-6" />
              <h3 className="text-xl font-bold text-slate-900 mb-2">{t('nav.bases')}</h3>
              <p className="text-sm text-slate-500 leading-relaxed">
                {t('chapter.3.desc')}
              </p>
            </div>
          </Link>

          <Link to="/topology/density-and-separation" className="group">
            <div className="p-8 bg-slate-50 rounded-[2.5rem] border-2 border-transparent group-hover:border-blue-500 group-hover:bg-white transition-all h-full">
              <ShieldCheck className="w-10 h-10 text-emerald-600 mb-6" />
              <h3 className="text-xl font-bold text-slate-900 mb-2">{t('nav.density')}</h3>
              <p className="text-sm text-slate-500 leading-relaxed">
                {t('chapter.4.desc')}
              </p>
            </div>
          </Link>

          <Link to="/topology/induced-topology" className="group">
            <div className="p-8 bg-slate-50 rounded-[2.5rem] border-2 border-transparent group-hover:border-blue-500 group-hover:bg-white transition-all h-full">
              <Globe className="w-10 h-10 text-blue-500 mb-6" />
              <h3 className="text-xl font-bold text-slate-900 mb-2">{t('nav.induced')}</h3>
              <p className="text-sm text-slate-500 leading-relaxed">
                {t('chapter.5.desc')}
              </p>
            </div>
          </Link>

          <Link to="/topology/product-topology" className="group">
            <div className="p-8 bg-slate-50 rounded-[2.5rem] border-2 border-transparent group-hover:border-blue-500 group-hover:bg-white transition-all h-full">
              <Combine className="w-10 h-10 text-indigo-600 mb-6" />
              <h3 className="text-xl font-bold text-slate-900 mb-2">{t('nav.product')}</h3>
              <p className="text-sm text-slate-500 leading-relaxed">
                {t('chapter.6.desc')}
              </p>
            </div>
          </Link>

          <Link to="/topology/continuity-and-limits" className="group">
            <div className="p-8 bg-slate-50 rounded-[2.5rem] border-2 border-transparent group-hover:border-blue-500 group-hover:bg-white transition-all h-full">
              <Activity className="w-10 h-10 text-blue-600 mb-6" />
              <h3 className="text-xl font-bold text-slate-900 mb-2">{t('nav.continuity')}</h3>
              <p className="text-sm text-slate-500 leading-relaxed">
                {t('chapter.7.desc')}
              </p>
            </div>
          </Link>

          <Link to="/topology/compact-spaces" className="group">
            <div className="p-8 bg-slate-50 rounded-[2.5rem] border-2 border-transparent group-hover:border-blue-500 group-hover:bg-white transition-all h-full">
              <Box className="w-10 h-10 text-indigo-600 mb-6" />
              <h3 className="text-xl font-bold text-slate-900 mb-2">{t('nav.compact')}</h3>
              <p className="text-sm text-slate-500 leading-relaxed">
                {t('chapter.8.desc')}
              </p>
            </div>
          </Link>

          <Link to="/topology/locally-compact-spaces" className="group">
            <div className="p-8 bg-slate-50 rounded-[2.5rem] border-2 border-transparent group-hover:border-blue-500 group-hover:bg-white transition-all h-full">
              <MapPin className="w-10 h-10 text-emerald-600 mb-6" />
              <h3 className="text-xl font-bold text-slate-900 mb-2">{t('nav.locallyCompact')}</h3>
              <p className="text-sm text-slate-500 leading-relaxed">
                {t('chapter.9.desc')}
              </p>
            </div>
          </Link>

          <Link to="/topology/connected-spaces" className="group">
            <div className="p-8 bg-slate-50 rounded-[2.5rem] border-2 border-transparent group-hover:border-blue-500 group-hover:bg-white transition-all h-full">
              <Link2 className="w-10 h-10 text-indigo-600 mb-6" />
              <h3 className="text-xl font-bold text-slate-900 mb-2">{t('nav.connected')}</h3>
              <p className="text-sm text-slate-500 leading-relaxed">
                {t('chapter.10.desc')}
              </p>
            </div>
          </Link>

          <Link to="/topology/path-connectedness" className="group">
            <div className="p-8 bg-slate-50 rounded-[2.5rem] border-2 border-transparent group-hover:border-blue-500 group-hover:bg-white transition-all h-full">
              <PencilLine className="w-10 h-10 text-blue-600 mb-6" />
              <h3 className="text-xl font-bold text-slate-900 mb-2">{t('nav.pathConnected')}</h3>
              <p className="text-sm text-slate-500 leading-relaxed">
                {t('chapter.11.desc')}
              </p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
