import React from 'react';
import { FileCheck, AlertTriangle, Send, CreditCard, Receipt } from 'lucide-react';

export const Billing: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto">
      <header className="mb-8">
         <h1 className="text-3xl font-extrabold text-slate-900">Claim Preparation</h1>
         <p className="text-slate-500 mt-1 font-medium">Review generated claim for Jane Doe before submission.</p>
      </header>

      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
            <div className="card-base overflow-hidden">
                <div className="p-6 border-b border-slate-100 bg-slate-50/50 flex justify-between items-center">
                    <div className="flex items-center gap-3">
                        <div className="p-2 bg-white border border-slate-200 rounded-lg text-primary">
                            <Receipt size={20} />
                        </div>
                        <div>
                            <h2 className="font-bold text-slate-900">Provisional Claim #CLM-2023-891</h2>
                            <p className="text-xs text-slate-500 font-medium">Generated on Oct 12, 2023</p>
                        </div>
                    </div>
                    <span className="bg-yellow-50 text-yellow-700 px-3 py-1 rounded-full text-xs font-bold border border-yellow-100">Draft</span>
                </div>
                <div className="p-6">
                    <table className="w-full text-left text-sm">
                        <thead>
                            <tr className="text-slate-400 border-b border-slate-100 text-xs uppercase tracking-wider">
                                <th className="pb-3 font-bold pl-2">Service / Item</th>
                                <th className="pb-3 font-bold">Code</th>
                                <th className="pb-3 font-bold text-right">Qty</th>
                                <th className="pb-3 font-bold text-right pr-2">Price</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-50">
                            <tr>
                                <td className="py-4 font-bold text-slate-900 pl-2">General Consultation (Level 3)</td>
                                <td className="py-4 text-slate-500 font-mono text-xs">99213</td>
                                <td className="py-4 text-right font-medium">1</td>
                                <td className="py-4 text-right text-slate-900 font-bold pr-2">RF120.00</td>
                            </tr>
                            <tr>
                                <td className="py-4 font-bold text-slate-900 pl-2">Amoxicillin 500mg</td>
                                <td className="py-4 text-slate-500 font-mono text-xs">RX-8912</td>
                                <td className="py-4 text-right font-medium">30</td>
                                <td className="py-4 text-right text-slate-900 font-bold pr-2">RF15.00</td>
                            </tr>
                             <tr>
                                <td className="py-4 font-bold text-slate-900 pl-2">Urinalysis, auto, w/o scope</td>
                                <td className="py-4 text-slate-500 font-mono text-xs">81003</td>
                                <td className="py-4 text-right font-medium">1</td>
                                <td className="py-4 text-right text-slate-900 font-bold pr-2">RF45.00</td>
                            </tr>
                        </tbody>
                        <tfoot>
                            <tr className="bg-slate-50">
                                <td className="pt-4 pb-4 pl-4 font-bold text-slate-600 rounded-l-xl" colSpan={3}>Total Claim Value</td>
                                <td className="pt-4 pb-4 pr-4 text-right text-lg font-extrabold text-slate-900 rounded-r-xl">RF180.00</td>
                            </tr>
                        </tfoot>
                    </table>
                </div>
            </div>

            <div className="card-base p-6">
                <h3 className="font-bold text-slate-900 mb-4 flex items-center gap-2 text-lg">
                    <AlertTriangle className="text-primary" size={20} /> Pre-Submission Validation
                </h3>
                <div className="space-y-3">
                    <div className="flex items-start gap-3 text-sm p-4 bg-green-50 text-green-900 rounded-xl border border-green-100">
                        <div className="mt-0.5 text-green-600"><FileCheck size={18} /></div>
                        <div>
                            <span className="font-bold">Medical Logic Passed</span>
                            <p className="text-green-700/80 mt-0.5 font-medium">Diagnosis matches prescribed procedures.</p>
                        </div>
                    </div>
                     <div className="flex items-start gap-3 text-sm p-4 bg-green-50 text-green-900 rounded-xl border border-green-100">
                        <div className="mt-0.5 text-green-600"><FileCheck size={18} /></div>
                        <div>
                            <span className="font-bold">Contract Pricing Verified</span>
                            <p className="text-green-700/80 mt-0.5 font-medium">All items within allowable rates for Aetna Gold.</p>
                        </div>
                    </div>
                     <div className="flex items-start gap-3 text-sm p-4 bg-secondary/10 text-secondary rounded-xl border border-secondary/20">
                        <div className="mt-0.5 text-secondary"><AlertTriangle size={18} /></div>
                        <div>
                            <span className="font-bold text-slate-900">Utilization Warning</span>
                            <p className="text-slate-600 mt-0.5 font-medium">Urinalysis frequency is higher than average for this patient.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="space-y-6">
            <div className="card-base p-6">
                <h3 className="font-bold text-slate-900 mb-6 flex items-center gap-2">
                    <CreditCard size={20} className="text-primary" />
                    Patient Responsibility
                </h3>
                <div className="space-y-4 mb-8">
                    <div className="flex justify-between items-center p-3 bg-slate-50 rounded-lg border border-slate-100">
                        <span className="text-slate-500 text-sm font-bold">Co-pay</span>
                        <span className="font-bold text-slate-900">RF20.00</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-slate-50 rounded-lg border border-slate-100">
                        <span className="text-slate-500 text-sm font-bold">Deductible Status</span>
                        <span className="font-bold text-green-600 text-sm flex items-center gap-1">
                            <div className="w-2 h-2 bg-green-500 rounded-full"></div> Met
                        </span>
                    </div>
                </div>
                <button className="w-full py-3 border-2 border-slate-200 text-slate-700 font-bold rounded-xl hover:border-primary hover:text-primary hover:bg-primary/5 transition-all">
                    Collect RF20.00
                </button>
            </div>

            <div className="bg-gradient-to-br from-primary to-teal-600 rounded-2xl shadow-xl shadow-primary/30 p-6 text-white relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -mr-20 -mt-20 blur-3xl group-hover:bg-white/20 transition-all duration-700"></div>
                <h3 className="font-bold text-lg mb-2 relative z-10">Submit to Insurer</h3>
                <p className="text-white/80 text-sm mb-8 leading-relaxed relative z-10 font-medium">
                    By submitting, you certify that services were rendered as described and match medical necessity criteria.
                </p>
                <button className="w-full py-3.5 bg-white text-primary font-bold rounded-xl flex justify-center items-center gap-2 transition-all transform active:scale-95 shadow-lg relative z-10 hover:bg-slate-50">
                    Submit Claim <Send size={18} />
                </button>
            </div>
        </div>
      </div>
    </div>
  );
};