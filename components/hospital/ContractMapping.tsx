
import React, { useState } from 'react';
import { ArrowRight, Check, AlertCircle, Search, Link as LinkIcon, MoreHorizontal, Filter, ChevronDown } from 'lucide-react';

export const ContractMapping: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState<'unmapped' | 'mapped'>('unmapped');

  const UNMAPPED_DRUGS = [
    { id: 1, name: 'Panadol Extra', form: 'Tablet', strength: '500mg', stock: 450, matchConfidence: 95, matchName: 'Paracetamol', matchCode: 'ATC-A01' },
    { id: 2, name: 'Amoxil Brand', form: 'Capsule', strength: '500mg', stock: 120, matchConfidence: 88, matchName: 'Amoxicillin', matchCode: 'ATC-A02' },
    { id: 3, name: 'Brufen Syrup', form: 'Syrup', strength: '100mg/5ml', stock: 50, matchConfidence: 60, matchName: 'Ibuprofen Susp', matchCode: 'ATC-B05' },
    { id: 4, name: 'Local Aspirin', form: 'Tablet', strength: '75mg', stock: 1000, matchConfidence: 40, matchName: 'Acetylsalicylic acid', matchCode: 'ATC-B01' },
  ];

  return (
    <div className="max-w-7xl mx-auto h-[calc(100vh-100px)] flex flex-col">
      <header className="flex justify-between items-end mb-6">
        <div>
          <h1 className="text-3xl font-extrabold text-slate-900">Contract Mapping</h1>
          <p className="text-slate-500 mt-1 font-medium">Map your internal hospital drug catalog to insurer contract codes.</p>
        </div>
        <div className="flex gap-3">
          <div className="text-right mr-4">
            <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Mapping Status</p>
            <p className="font-bold text-slate-900 text-lg">84% Complete</p>
          </div>
          <div className="w-32 h-10 bg-slate-200 rounded-full overflow-hidden mt-2">
            <div className="h-full bg-primary w-[84%]"></div>
          </div>
        </div>
      </header>

      {/* Controls */}
      <div className="card-base p-4 mb-6 flex flex-wrap gap-4 items-center justify-between">
        <div className="flex gap-4 items-center">
          <div className="flex flex-col">
            <label className="label-base mb-1">Insurer Contract</label>
            <select className="input-base h-10 py-0 w-64 text-sm">
              <option>HayoHealth Standard 2024</option>
              <option>RSSB Mutuelle 2023</option>
            </select>
          </div>
          <div className="h-8 w-px bg-slate-200"></div>
          <div className="flex gap-2">
            <button 
              onClick={() => setSelectedTab('unmapped')}
              className={`px-4 py-2 rounded-lg font-bold text-sm transition-colors ${selectedTab === 'unmapped' ? 'bg-slate-800 text-white' : 'text-slate-600 hover:bg-slate-100'}`}
            >
              Unmapped (42)
            </button>
            <button 
              onClick={() => setSelectedTab('mapped')}
              className={`px-4 py-2 rounded-lg font-bold text-sm transition-colors ${selectedTab === 'mapped' ? 'bg-slate-800 text-white' : 'text-slate-600 hover:bg-slate-100'}`}
            >
              Mapped (850)
            </button>
          </div>
        </div>
        
        <div className="flex gap-3">
          <button className="px-4 py-2 bg-white border border-slate-200 text-slate-700 font-bold rounded-lg text-sm hover:bg-slate-50 flex items-center gap-2">
            <Filter size={16} /> Filter
          </button>
          <button className="px-4 py-2 bg-primary text-white font-bold rounded-lg text-sm hover:bg-primary/90 flex items-center gap-2 shadow-md shadow-primary/20">
            <LinkIcon size={16} /> Auto-Map High Confidence
          </button>
        </div>
      </div>

      {/* Mapping Workspace */}
      <div className="flex gap-6 flex-1 min-h-0">
        {/* Left: Hospital Catalog */}
        <div className="flex-1 card-base flex flex-col overflow-hidden">
          <div className="p-4 border-b border-slate-100 bg-slate-50/50 flex justify-between items-center">
            <h3 className="font-bold text-slate-800">Local Catalog</h3>
            <div className="relative w-48">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={14} />
              <input type="text" placeholder="Search local..." className="input-base h-9 pl-9 text-xs" />
            </div>
          </div>
          <div className="flex-1 overflow-y-auto p-2 space-y-2">
            {UNMAPPED_DRUGS.map((drug) => (
              <div key={drug.id} className="p-4 rounded-xl border border-slate-200 hover:border-primary/50 hover:shadow-md transition-all cursor-pointer bg-white group relative overflow-hidden">
                <div className="flex justify-between items-start relative z-10">
                  <div>
                    <h4 className="font-bold text-slate-900">{drug.name}</h4>
                    <p className="text-xs text-slate-500 font-medium mt-1">{drug.form} • {drug.strength} • Stock: {drug.stock}</p>
                  </div>
                  {drug.matchConfidence > 80 && (
                    <span className="text-xs font-bold text-green-600 bg-green-50 px-2 py-1 rounded border border-green-100">
                      {drug.matchConfidence}% Match
                    </span>
                  )}
                  {drug.matchConfidence <= 80 && (
                    <span className="text-xs font-bold text-orange-600 bg-orange-50 px-2 py-1 rounded border border-orange-100">
                      {drug.matchConfidence}% Match
                    </span>
                  )}
                </div>
                
                {/* Suggestion Action */}
                <div className="mt-4 pt-3 border-t border-slate-100 flex justify-between items-center">
                  <div className="flex items-center gap-2 text-sm text-slate-600">
                    <span className="text-slate-400 text-xs uppercase font-bold">Suggestion:</span>
                    <span className="font-bold text-primary">{drug.matchName}</span>
                    <span className="font-mono text-xs bg-slate-100 px-1 py-0.5 rounded text-slate-500">{drug.matchCode}</span>
                  </div>
                  <button className="bg-slate-900 text-white px-3 py-1.5 rounded-lg text-xs font-bold flex items-center gap-1 hover:bg-slate-700 transition-colors">
                    Map <ArrowRight size={12} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Insurer Contract Items (for manual selection) */}
        <div className="w-96 card-base flex flex-col overflow-hidden">
          <div className="p-4 border-b border-slate-100 bg-slate-50/50">
            <h3 className="font-bold text-slate-800">Contract Items</h3>
            <p className="text-xs text-slate-500 mt-1">Select an item to map manually if suggestion is incorrect.</p>
          </div>
          <div className="p-3 border-b border-slate-100">
             <input type="text" placeholder="Search contract items..." className="input-base h-10 text-sm" />
          </div>
          <div className="flex-1 overflow-y-auto">
            {[1,2,3,4,5,6].map((i) => (
              <div key={i} className="p-3 border-b border-slate-100 hover:bg-slate-50 cursor-pointer transition-colors">
                <div className="flex justify-between">
                  <span className="font-bold text-slate-800 text-sm">Paracetamol</span>
                  <span className="font-mono text-xs text-slate-500">ATC-A01</span>
                </div>
                <div className="flex justify-between mt-1">
                  <span className="text-xs text-slate-500">Tablet • 500mg</span>
                  <span className="text-xs font-bold text-green-600">150 RWF</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
