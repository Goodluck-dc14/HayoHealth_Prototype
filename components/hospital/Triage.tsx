import React from 'react';
import { ArrowRight, Thermometer, Activity, Wind, Heart, AlertCircle } from 'lucide-react';

export const Triage: React.FC<{ onComplete: () => void }> = ({ onComplete }) => {
  return (
    <div className="max-w-5xl mx-auto">
      <header className="mb-8 flex justify-between items-center">
        <div>
           <h1 className="text-3xl font-extrabold text-slate-900">Triage Assessment</h1>
           <div className="flex items-center gap-2 mt-2 text-slate-500 font-medium">
             <span className="bg-slate-100 text-slate-700 px-2 py-0.5 rounded text-xs font-bold">HH-8921</span>
             <span>Jane Doe</span>
             <span>•</span>
             <span>42y Female</span>
           </div>
        </div>
        <div className="bg-orange-50 text-orange-700 px-4 py-2 rounded-xl font-bold text-sm border border-orange-100 flex items-center gap-2 shadow-sm">
            <AlertCircle size={16} />
            Awaiting Vitals
        </div>
      </header>

      <div className="card-base p-8 mb-8">
        <h2 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
            <div className="w-1 h-6 bg-primary rounded-full"></div>
            Vital Signs
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-6">
            <div>
                <label className="label-base flex items-center gap-2">
                    <Activity size={16} className="text-primary"/> Blood Pressure
                </label>
                <div className="flex items-center gap-2">
                    <div className="relative flex-1">
                        <input type="number" placeholder="120" className="input-base pr-8 text-center font-mono rounded-lg w-full" />
                        <span className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 text-xs font-bold">SYS</span>
                    </div>
                    <span className="text-slate-300 text-xl">/</span>
                    <div className="relative flex-1">
                        <input type="number" placeholder="80" className="input-base pr-8 text-center font-mono rounded-lg w-full" />
                        <span className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 text-xs font-bold">DIA</span>
                    </div>
                </div>
            </div>

            <div>
                <label className="label-base flex items-center gap-2">
                    <Heart size={16} className="text-rose-500"/> Heart Rate
                </label>
                 <div className="relative">
                    <input type="number" placeholder="72" className="input-base rounded-lg w-full pr-12 font-mono" />
                    <span className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 text-xs font-bold">BPM</span>
                 </div>
            </div>

            <div>
                <label className="label-base flex items-center gap-2">
                    <Thermometer size={16} className="text-orange-500"/> Temperature
                </label>
                 <div className="relative">
                    <input type="number" placeholder="98.6" className="input-base rounded-lg w-full pr-12 font-mono" />
                    <span className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 text-xs font-bold">°F</span>
                 </div>
            </div>

             <div>
                <label className="label-base flex items-center gap-2">
                    <Wind size={16} className="text-blue-500"/> SpO2
                </label>
                 <div className="relative">
                    <input type="number" placeholder="98" className="input-base rounded-lg w-full pr-12 font-mono" />
                    <span className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 text-xs font-bold">%</span>
                 </div>
            </div>

             <div>
                <label className="label-base">Weight</label>
                <div className="relative">
                    <input type="number" placeholder="65" className="input-base pr-12 font-mono rounded-lg w-full" />
                    <span className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 text-xs font-bold">kg</span>
                </div>
            </div>

             <div>
                <label className="label-base">Height</label>
                <div className="relative">
                    <input type="number" placeholder="170" className="input-base pr-12 font-mono rounded-lg w-full" />
                    <span className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 text-xs font-bold">cm</span>
                </div>
            </div>
        </div>
      </div>

      <div className="card-base p-8 mb-8">
         <h2 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
            <div className="w-1 h-6 bg-primary rounded-full"></div>
            Chief Complaint & Symptoms
         </h2>
         <div className="space-y-6">
            <div>
                <label className="label-base">Chief Complaint</label>
                <input type="text" className="input-base rounded-lg w-full" placeholder="e.g. Severe headache since morning" />
            </div>
            <div>
                <label className="label-base">Detailed Notes</label>
                <textarea rows={4} className="input-base resize-none rounded-lg w-full" placeholder="Patient describes throbbing pain on left side..."></textarea>
            </div>
            
            <div>
                <label className="label-base">Triage Priority</label>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <label className="flex items-center gap-3 border border-slate-200 p-4 rounded-xl cursor-pointer hover:bg-green-50 hover:border-green-200 transition-all has-[:checked]:bg-green-50 has-[:checked]:border-green-500 has-[:checked]:ring-1 has-[:checked]:ring-green-500">
                        <div className="relative flex items-center">
                            <input type="radio" name="priority" className="peer h-5 w-5 cursor-pointer appearance-none rounded-full border border-slate-300 checked:border-green-500 checked:bg-green-500 transition-all" />
                            <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white opacity-0 peer-checked:opacity-100">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                            </div>
                        </div>
                        <span className="font-bold text-green-700">Non-Urgent</span>
                    </label>
                    <label className="flex items-center gap-3 border border-slate-200 p-4 rounded-xl cursor-pointer hover:bg-yellow-50 hover:border-yellow-200 transition-all has-[:checked]:bg-yellow-50 has-[:checked]:border-yellow-500 has-[:checked]:ring-1 has-[:checked]:ring-yellow-500">
                        <div className="relative flex items-center">
                            <input type="radio" name="priority" className="peer h-5 w-5 cursor-pointer appearance-none rounded-full border border-slate-300 checked:border-yellow-500 checked:bg-yellow-500 transition-all" defaultChecked />
                            <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white opacity-0 peer-checked:opacity-100">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                            </div>
                        </div>
                        <span className="font-bold text-yellow-700">Urgent</span>
                    </label>
                    <label className="flex items-center gap-3 border border-slate-200 p-4 rounded-xl cursor-pointer hover:bg-red-50 hover:border-red-200 transition-all has-[:checked]:bg-red-50 has-[:checked]:border-red-500 has-[:checked]:ring-1 has-[:checked]:ring-red-500">
                        <div className="relative flex items-center">
                            <input type="radio" name="priority" className="peer h-5 w-5 cursor-pointer appearance-none rounded-full border border-slate-300 checked:border-red-500 checked:bg-red-500 transition-all" />
                            <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white opacity-0 peer-checked:opacity-100">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                            </div>
                        </div>
                        <span className="font-bold text-red-700">Emergent</span>
                    </label>
                </div>
            </div>
         </div>
      </div>

      <div className="flex justify-end gap-4 pb-8">
        <button className="px-8 py-3.5 rounded-xl font-bold text-slate-600 hover:bg-slate-200 transition-colors">Save Draft</button>
        <button 
            onClick={onComplete}
            className="btn-primary px-8 py-3.5 flex items-center gap-2 bg-primary hover:bg-primary/90 rounded-xl font-bold text-white"
        >
            Complete & Notify Doctor <ArrowRight size={20}/>
        </button>
      </div>
    </div>
  );
};