import React from 'react';
import { Network, AlertOctagon, MapPin, List, ShieldAlert } from 'lucide-react';

export const FraudConsole: React.FC = () => {
  return (
    <div className="space-y-8">
       <header className="flex justify-between items-center">
            <h1 className="text-3xl font-extrabold text-slate-900">Fraud Analysis Console</h1>
            <div className="bg-secondary text-white px-4 py-1.5 rounded-full text-sm font-bold animate-pulse shadow-lg shadow-secondary/30 flex items-center gap-2">
                <ShieldAlert size={16} /> 3 High Risk Patterns Detected
            </div>
       </header>

       <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-card border-l-4 border-l-secondary">
                <p className="text-slate-400 text-xs font-bold uppercase mb-2 tracking-wider">Risk Score</p>
                <h3 className="text-3xl font-extrabold text-slate-900">Dr. E. Reed</h3>
                <p className="text-secondary font-bold mt-2 flex items-center gap-1">
                    <AlertOctagon size={18}/> High (92/100)
                </p>
                <p className="text-xs text-slate-500 mt-2 font-medium">Abnormal billing frequency</p>
            </div>
            {/* More cards can be added here */}
       </div>

       <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 card-base p-6">
                <h3 className="font-bold text-lg mb-6 flex items-center gap-2 text-slate-900">
                    <Network className="text-primary" /> Link Analysis Graph
                </h3>
                <div className="h-96 w-full bg-slate-50 rounded-xl flex items-center justify-center relative overflow-hidden border border-slate-100">
                     {/* Mock Graph Visual */}
                     <div className="absolute inset-0 flex items-center justify-center">
                        <div className="relative w-full h-full">
                            <div className="absolute top-1/2 left-1/2 w-6 h-6 bg-secondary rounded-full shadow-[0_0_20px_rgba(249,112,102,0.6)] transform -translate-x-1/2 -translate-y-1/2 z-10 border-4 border-white"></div>
                            <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-primary rounded-full border-2 border-white shadow-md"></div>
                            <div className="absolute bottom-1/3 right-1/3 w-4 h-4 bg-primary rounded-full border-2 border-white shadow-md"></div>
                             <div className="absolute top-1/3 right-1/4 w-4 h-4 bg-primary rounded-full border-2 border-white shadow-md"></div>
                            {/* Lines */}
                            <svg className="absolute inset-0 w-full h-full pointer-events-none">
                                <line x1="50%" y1="50%" x2="25%" y2="25%" stroke="#cbd5e1" strokeWidth="2" />
                                <line x1="50%" y1="50%" x2="66%" y2="66%" stroke="#cbd5e1" strokeWidth="2" />
                                <line x1="50%" y1="50%" x2="75%" y2="33%" stroke="#cbd5e1" strokeWidth="2" />
                            </svg>
                        </div>
                     </div>
                     <div className="absolute bottom-4 right-4 bg-white p-3 rounded-lg border border-slate-200 text-xs shadow-sm">
                        <div className="flex items-center gap-2 mb-1"><div className="w-2 h-2 rounded-full bg-secondary"></div> Flagged Provider</div>
                        <div className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-primary"></div> Connected Patient</div>
                     </div>
                </div>
            </div>

            <div className="card-base p-6">
                 <h3 className="font-bold text-lg mb-6 flex items-center gap-2 text-slate-900">
                    <List className="text-primary" /> Recent Alerts
                </h3>
                <div className="space-y-4">
                    <div className="p-4 bg-red-50 border border-red-100 rounded-xl">
                        <div className="flex justify-between items-start mb-2">
                            <span className="text-red-800 font-bold text-sm">Upcoding Detected</span>
                            <span className="text-xs text-red-600 font-medium">2m ago</span>
                        </div>
                        <p className="text-xs text-red-700 font-medium leading-relaxed">Claim #8921: Service level mismatch with diagnosis.</p>
                    </div>
                     <div className="p-4 bg-orange-50 border border-orange-100 rounded-xl">
                        <div className="flex justify-between items-start mb-2">
                            <span className="text-orange-800 font-bold text-sm">Duplicate Claim</span>
                            <span className="text-xs text-orange-600 font-medium">15m ago</span>
                        </div>
                        <p className="text-xs text-orange-700 font-medium leading-relaxed">Identical service billed twice within 24h.</p>
                    </div>
                </div>
            </div>
       </div>
    </div>
  );
};