import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { Circle } from 'lucide-react';

const MetricBallsHero: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="relative overflow-hidden bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:items-center lg:gap-x-12">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 bg-blue-50 px-3 py-1 rounded-full text-blue-600 font-bold text-xs uppercase tracking-widest mb-6 border border-blue-100">
              <Circle className="w-3 h-3" />
              {t('nav.metrics.balls')}
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-6xl text-balance">
              {t('metrics.balls.hero.title')}
            </h1>
            <p className="mt-6 text-lg leading-8 text-slate-600 italic">
              "The shape of a circle is just a matter of rules."
            </p>
            <p className="mt-4 text-lg leading-8 text-slate-600">
              {t('metrics.balls.hero.subtitle')}
            </p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="relative flex justify-center"
          >
            <div className="absolute inset-0 bg-blue-100/20 blur-3xl -z-10 rounded-full" />
            <svg viewBox="0 0 400 300" className="w-full max-w-md drop-shadow-2xl">
               <rect width="400" height="300" rx="40" fill="#f8fafc" />
               
               {/* Center point */}
               <circle cx="200" cy="150" r="4" fill="#1e293b" />
               <text x="190" y="140" className="text-xs font-bold fill-slate-900 italic">a</text>

               {/* Morphing Ball visualization */}
               <motion.path
                 animate={{ 
                   d: [
                     "M 200 80 A 70 70 0 1 1 200 220 A 70 70 0 1 1 200 80", // Circle
                     "M 200 80 L 270 150 L 200 220 L 130 150 Z", // Diamond
                     "M 130 80 L 270 80 L 270 220 L 130 220 Z", // Square
                     "M 200 80 A 70 70 0 1 1 200 220 A 70 70 0 1 1 200 80"
                   ]
                 }}
                 transition={{ repeat: Infinity, duration: 9, ease: "easeInOut" }}
                 fill="rgba(59, 130, 246, 0.1)"
                 stroke="#3b82f6"
                 strokeWidth="2"
                 strokeDasharray="6 4"
               />
               
               <motion.line 
                 x1="200" y1="150" x2="270" y2="150" 
                 stroke="#3b82f6" strokeWidth="2" 
                 animate={{ rotate: 360 }}
                 transition={{ repeat: Infinity, duration: 9, ease: "linear" }}
                 className="origin-[200px_150px]"
               />
               <text x="230" y="145" className="text-[10px] font-bold fill-blue-600 uppercase tracking-widest">Radius r</text>
            </svg>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MetricBallsHero;
