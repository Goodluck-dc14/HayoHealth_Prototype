import React, { useState } from 'react';
import { Pill, FileText, AlertTriangle, CheckCircle, Plus, Activity } from 'lucide-react';

export const Consultation: React.FC<{ onComplete: () => void }> = ({ onComplete }) => {
  const [activeTab, setActiveTab] = useState('notes');
  const [prescriptions, setPrescriptions] = useState([
    { name: 'Amoxicillin', dosage: '500mg', status: 'Approved' }
  ]);

  const handleAddPrescription = () => {
    // Simulate smart checking logic
    setPrescriptions([...prescriptions, { name: 'Lisinopril', dosage: '10mg', status: 'Warning' }]);
  };

  return (
    <div className="max-w-7xl mx-auto h-[calc(100vh-120px)] flex flex-col">
      <header className="mb-6 flex justify-between items-center bg-white p-4 rounded-2xl border border-slate-200 shadow-sm">
        <div className="flex items-center gap-4">
            <div className="relative">
                <img src="https://i.pravatar.cc/150?u=jane" alt="Patient" className="w-14 h-14 rounded-full border-2 border-white shadow-md" />
                <div className="absolute bottom-0 right-0 w-3.5 h-3.5 bg-primary border-2 border-white rounded-full"></div>
            </div>
            <div>
                <h1 className="text-xl font-bold text-slate-900">Jane Doe</h1>
                <div className="flex gap-3 text-sm text-slate-500 items-center mt-0.5">
                    <span className="font-medium">42y Female</span>
                    <span className="w-1 h-1 bg-slate-300 rounded-full"></span>
                    <span className="text-orange-600 font-bold bg-orange-50 px-2 py-0.5 rounded text-xs border border-orange-100">Allergy: Penicillin</span>
                    <span className="w-1 h-1 bg-slate-300 rounded-full"></span>
                    <span className="font-mono text-xs bg-slate-100 px-2 py-0.5 rounded">BP: 120/80</span>
                </div>
            </div>
        </div>
        <button onClick={onComplete} className="btn-primary px-6 py-2.5">
            Finalize Visit
        </button>
      </header>

      <div className="flex gap-6 flex-1 min-h-0">
        {/* Left: Medical History */}
        <div className="w-80 bg-white rounded-2xl border border-slate-200 flex flex-col overflow-hidden shadow-soft">
            <div className="p-4 border-b bg-slate-50/50 font-bold text-slate-800 text-sm uppercase tracking-wide">Medical Timeline</div>
            <div className="flex-1 overflow-y-auto p-5 space-y-8">
                {[1,2,3].map((i) => (
                    <div key={i} className="relative pl-6 border-l-2 border-slate-100 last:border-0 pb-2">
                        <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-white border-4 border-slate-200 shadow-sm"></div>
                        <p className="text-xs font-bold text-slate-400 mb-1 uppercase tracking-wide">Oct 12, 2023</p>
                        <h4 className="font-bold text-slate-800 text-base">Annual Checkup</h4>
                        <p className="text-sm text-slate-500 mt-2 leading-relaxed">
                            Patient reported mild fatigue. Blood work ordered. Prescription renewed for seasonal allergies.
                        </p>
                        <div className="mt-3 flex gap-2">
                            <span className="px-2 py-1 bg-slate-100 text-slate-600 text-xs rounded font-medium border border-slate-200">General Hospital</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>

        {/* Right: Active Consultation */}
        <div className="flex-1 bg-white rounded-2xl border border-slate-200 flex flex-col overflow-hidden shadow-soft">
            <div className="flex border-b border-slate-200">
                <button 
                    onClick={() => setActiveTab('notes')}
                    className={`flex-1 py-4 font-bold text-sm flex items-center justify-center gap-2 transition-colors ${activeTab === 'notes' ? 'text-primary border-b-2 border-primary bg-primary/5' : 'text-slate-500 hover:bg-slate-50'}`}
                >
                    <FileText size={18}/> Clinical Notes
                </button>
                <button 
                    onClick={() => setActiveTab('prescriptions')}
                    className={`flex-1 py-4 font-bold text-sm flex items-center justify-center gap-2 transition-colors ${activeTab === 'prescriptions' ? 'text-primary border-b-2 border-primary bg-primary/5' : 'text-slate-500 hover:bg-slate-50'}`}
                >
                    <Pill size={18}/> Prescriptions
                </button>
            </div>

            <div className="flex-1 p-8 overflow-y-auto bg-slate-50/30">
                {activeTab === 'notes' ? (
                    <div className="space-y-6 max-w-3xl mx-auto">
                        <div>
                            <label className="label-base">Diagnosis (ICD-10)</label>
                            <input type="text" className="input-base rounded-lg w-full" placeholder="Search diagnosis..." defaultValue="J01.90 - Acute sinusitis, unspecified" />
                        </div>
                        <div className="grid grid-cols-2 gap-6">
                             <div>
                                <label className="label-base">Subjective</label>
                                <textarea className="input-base resize-none h-40 rounded-lg w-full" placeholder="Patient complaints..."></textarea>
                            </div>
                             <div>
                                <label className="label-base">Objective</label>
                                <textarea className="input-base resize-none h-40 rounded-lg w-full" placeholder="Physical exam findings..."></textarea>
                            </div>
                        </div>
                        <div>
                            <label className="label-base">Plan</label>
                            <textarea className="input-base resize-none h-32 rounded-lg w-full" placeholder="Treatment plan..."></textarea>
                        </div>
                    </div>
                ) : (
                    <div className="space-y-6 max-w-3xl mx-auto">
                        <div className="flex justify-between items-center mb-6">
                            <h3 className="font-bold text-xl text-slate-900">Current Medications</h3>
                            <button onClick={handleAddPrescription} className="btn-primary text-sm px-4 py-2.5 flex items-center gap-2">
                                <Plus size={18} /> Add Drug
                            </button>
                        </div>

                        <div className="space-y-4">
                            {prescriptions.map((med, idx) => (
                                <div key={idx} className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm flex justify-between items-center group hover:border-primary/30 transition-colors">
                                    <div className="flex items-center gap-4">
                                        <div className="h-12 w-12 bg-slate-100 rounded-full flex items-center justify-center text-slate-500 group-hover:bg-primary/10 group-hover:text-primary transition-colors">
                                            <Pill size={24}/>
                                        </div>
                                        <div>
                                            <p className="font-bold text-slate-900 text-lg">{med.name}</p>
                                            <p className="text-sm text-slate-500 font-medium">{med.dosage} • 1 tablet daily</p>
                                        </div>
                                    </div>
                                    <div>
                                        {med.status === 'Approved' ? (
                                            <span className="flex items-center gap-1.5 text-green-700 bg-green-50 px-3 py-1.5 rounded-lg text-xs font-bold border border-green-100">
                                                <CheckCircle size={14} /> Covered
                                            </span>
                                        ) : (
                                            <div className="flex flex-col items-end gap-1">
                                                <span className="flex items-center gap-1.5 text-orange-700 bg-orange-50 px-3 py-1.5 rounded-lg text-xs font-bold border border-orange-100">
                                                    <AlertTriangle size={14} /> Price Alert
                                                </span>
                                                <p className="text-[10px] font-bold text-orange-600/80">Exceeds contract price</p>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="bg-blue-50/80 border border-blue-100 rounded-2xl p-6 mt-8">
                            <h4 className="font-bold text-blue-900 mb-2 flex items-center gap-2 text-lg">
                                <Activity size={20} /> Real-time Intelligence
                            </h4>
                            <p className="text-sm text-blue-800/80 leading-relaxed font-medium">
                                Based on the patient's <span className="font-bold text-blue-900">Aetna Gold PPO</span> plan, the prescribed Amoxicillin is fully covered (Tier 1). However, Lisinopril suggests a generic alternative to avoid co-pay.
                            </p>
                            <div className="mt-4 pt-4 border-t border-blue-200/50 flex gap-3">
                                <button className="text-xs bg-blue-600 text-white px-4 py-2 rounded-lg font-bold hover:bg-blue-700 transition-colors shadow-sm">
                                    Switch to Generic
                                </button>
                                <button className="text-xs bg-white text-blue-700 border border-blue-200 px-4 py-2 rounded-lg font-bold hover:bg-blue-50 transition-colors">
                                    Dismiss
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
      </div>
    </div>
  );
};