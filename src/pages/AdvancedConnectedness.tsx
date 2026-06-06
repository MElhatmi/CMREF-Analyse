import React from 'react';
import LocallyCompactSection from '../components/LocallyCompactSection';
import LocalCompactnessVisualizer from '../components/LocalCompactnessVisualizer';
import ConnectednessSection from '../components/ConnectednessSection';
import ConnectednessContinuitySection from '../components/ConnectednessContinuitySection';
import PathConnectednessSection from '../components/PathConnectednessSection';
import ConnectednessVisualizer from '../components/ConnectednessVisualizer';

const AdvancedConnectedness: React.FC = () => {
  return (
    <main className="min-h-screen bg-white">
      <LocallyCompactSection />
      <LocalCompactnessVisualizer />
      <ConnectednessSection />
      <ConnectednessContinuitySection />
      <PathConnectednessSection />
      <ConnectednessVisualizer />

      {/* Mastery Section */}
      <section className="bg-slate-900 py-24 px-6 overflow-hidden relative">
         <div className="mx-auto max-w-4xl text-center relative z-10">
            <h3 className="text-4xl font-bold text-white mb-8 tracking-tight">The Fabric of Geometry</h3>
            <p className="text-slate-400 text-lg leading-relaxed mb-12 max-w-2xl mx-auto">
               You've mastered the global properties that define the "physical" feel of a topological space. From the local density of points to the unbreakable bonds of connectedness, you now understand how spaces hold together.
            </p>
            <div className="h-px bg-white/10 w-full mb-12" />
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-[10px] font-mono uppercase tracking-[0.3em] text-slate-500">
               <span>Local Compactness</span>
               <div className="w-1 h-1 bg-blue-500 rounded-full hidden sm:block" />
               <span>Connectedness</span>
               <div className="w-1 h-1 bg-blue-500 rounded-full hidden sm:block" />
               <span>Path Logic</span>
            </div>
         </div>
         <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-indigo-500/5 blur-[120px] rounded-full -z-0" />
      </section>
    </main>
  );
};

export default AdvancedConnectedness;
