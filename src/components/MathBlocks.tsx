import React from 'react';

interface BlockProps {
  title: string;
  children: React.ReactNode;
}

export const Definition: React.FC<BlockProps> = ({ title, children }) => (
  <div className="my-8 bg-blue-50/50 rounded-3xl border border-blue-100 p-8 shadow-sm">
    <div className="flex items-center gap-3 mb-4">
      <span className="bg-blue-600 text-white px-3 py-1 rounded-lg text-[10px] font-bold uppercase tracking-widest">Definition</span>
      <h4 className="text-lg font-bold text-blue-900">{title}</h4>
    </div>
    <div className="text-slate-700 leading-relaxed text-sm">{children}</div>
  </div>
);

export const Theorem: React.FC<BlockProps> = ({ title, children }) => (
  <div className="my-8 bg-indigo-50/50 rounded-3xl border border-indigo-100 p-8 shadow-sm">
    <div className="flex items-center gap-3 mb-4">
      <span className="bg-indigo-600 text-white px-3 py-1 rounded-lg text-[10px] font-bold uppercase tracking-widest">Theorem</span>
      <h4 className="text-lg font-bold text-indigo-900">{title}</h4>
    </div>
    <div className="text-slate-700 leading-relaxed text-sm font-medium">{children}</div>
  </div>
);

export const Proposition: React.FC<BlockProps> = ({ title, children }) => (
  <div className="my-8 bg-slate-50 rounded-3xl border border-slate-200 p-8 shadow-sm">
    <div className="flex items-center gap-3 mb-4">
      <span className="bg-slate-900 text-white px-3 py-1 rounded-lg text-[10px] font-bold uppercase tracking-widest">Proposition</span>
      <h4 className="text-lg font-bold text-slate-900">{title}</h4>
    </div>
    <div className="text-slate-700 leading-relaxed text-sm">{children}</div>
  </div>
);

export const Example: React.FC<BlockProps> = ({ title, children }) => (
  <div className="my-8 bg-blue-50/30 rounded-3xl border border-blue-200 p-8 shadow-sm">
    <div className="flex items-center gap-3 mb-4">
      <span className="bg-blue-600 text-white px-3 py-1 rounded-lg text-[10px] font-bold uppercase tracking-widest">Example</span>
      <h4 className="text-lg font-bold text-blue-900">{title}</h4>
    </div>
    <div className="text-slate-700 leading-relaxed text-sm">{children}</div>
  </div>
);

export const Remark: React.FC<BlockProps> = ({ title, children }) => (
  <div className="my-6 bg-amber-50/30 rounded-2xl border-l-4 border-amber-400 p-6">
    <h5 className="text-xs font-bold text-amber-700 uppercase tracking-widest mb-2">{title}</h5>
    <div className="text-slate-600 leading-relaxed text-xs italic">{children}</div>
  </div>
);

export const Warning: React.FC<BlockProps> = ({ title, children }) => (
  <div className="my-8 bg-red-50/50 rounded-3xl border border-red-100 p-8 shadow-sm">
    <div className="flex items-center gap-3 mb-4 text-red-600">
      <span className="bg-red-600 text-white px-3 py-1 rounded-lg text-[10px] font-bold uppercase tracking-widest">Warning</span>
      <h4 className="text-lg font-bold">{title}</h4>
    </div>
    <div className="text-red-900 leading-relaxed text-sm italic">{children}</div>
  </div>
);

export const Property: React.FC<BlockProps> = ({ title, children }) => (
  <div className="my-8 bg-emerald-50/30 rounded-3xl border border-emerald-100 p-8 shadow-sm">
    <div className="flex items-center gap-3 mb-4">
      <span className="bg-emerald-600 text-white px-3 py-1 rounded-lg text-[10px] font-bold uppercase tracking-widest">Property</span>
      <h4 className="text-lg font-bold text-emerald-900">{title}</h4>
    </div>
    <div className="text-slate-700 leading-relaxed text-sm">{children}</div>
  </div>
);

export const Exercise: React.FC<BlockProps> = ({ title, children }) => (
  <div className="my-8 bg-purple-50/30 rounded-3xl border border-purple-200 p-8 shadow-sm">
    <div className="flex items-center gap-3 mb-4">
      <span className="bg-purple-600 text-white px-3 py-1 rounded-lg text-[10px] font-bold uppercase tracking-widest">Exercise</span>
      <h4 className="text-lg font-bold text-purple-900">{title}</h4>
    </div>
    <div className="text-slate-700 leading-relaxed text-sm">{children}</div>
  </div>
);

export const Corollary: React.FC<BlockProps> = ({ title, children }) => (
  <div className="my-8 bg-indigo-50/20 rounded-3xl border border-indigo-200 border-dashed p-8 shadow-sm">
    <div className="flex items-center gap-3 mb-4">
      <span className="bg-indigo-400 text-white px-3 py-1 rounded-lg text-[10px] font-bold uppercase tracking-widest">Corollary</span>
      <h4 className="text-lg font-bold text-indigo-800">{title}</h4>
    </div>
    <div className="text-slate-700 leading-relaxed text-sm italic">{children}</div>
  </div>
);
