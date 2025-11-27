import React from 'react';
import { Download, CheckCircle } from 'lucide-react';

export const Payments: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto">
      <header className="mb-8 flex justify-between items-end">
        <div>
           <h1 className="text-3xl font-bold text-slate-900">Payments Queue</h1>
           <p className="text-slate-500">Process payouts for approved claims.</p>
        </div>
        <div className="text-right">
            <p className="text-sm font-bold text-slate-400 uppercase tracking-wide">Total Pending</p>
            <p className="text-3xl font-bold text-slate-900">RF142,500.00</p>
        </div>
      </header>

      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
        <div className="p-4 border-b border-slate-100 flex justify-between items-center bg-slate-50">
            <div className="flex gap-2">
                <button className="px-4 py-2 bg-white border border-slate-200 rounded-lg text-sm font-medium hover:bg-slate-50">Select All</button>
            </div>
            <div className="flex gap-2">
                <button className="px-4 py-2 bg-white border border-slate-200 rounded-lg text-sm font-medium hover:bg-slate-50 flex items-center gap-2">
                    <Download size={16} /> Export CSV
                </button>
                <button className="px-4 py-2 bg-secondary text-white rounded-lg text-sm font-medium hover:bg-secondary/90 flex items-center gap-2 shadow-md">
                    <CheckCircle size={16} /> Process Batch
                </button>
            </div>
        </div>
        <table className="w-full text-left">
            <thead className="bg-white text-slate-500 font-semibold text-sm">
                <tr>
                    <th className="px-6 py-4 w-12"><input type="checkbox" className="rounded border-slate-300 text-secondary focus:ring-secondary"/></th>
                    <th className="px-6 py-4">Batch ID</th>
                    <th className="px-6 py-4">Hospital Name</th>
                    <th className="px-6 py-4">Claim Count</th>
                    <th className="px-6 py-4">Total Amount</th>
                    <th className="px-6 py-4">Approved Date</th>
                    <th className="px-6 py-4">Status</th>
                </tr>
            </thead>
             <tbody className="divide-y divide-slate-100">
                {[1,2,3,4].map((i) => (
                    <tr key={i} className="hover:bg-slate-50 transition-colors">
                        <td className="px-6 py-4"><input type="checkbox" className="rounded border-slate-300 text-secondary focus:ring-secondary"/></td>
                        <td className="px-6 py-4 font-mono text-slate-600">BCH-2023-{890+i}</td>
                        <td className="px-6 py-4 font-medium text-slate-900">General Hospital</td>
                        <td className="px-6 py-4 text-slate-600">42</td>
                        <td className="px-6 py-4 font-bold text-slate-900">RF{(35000 + i*1200).toLocaleString()}.00</td>
                        <td className="px-6 py-4 text-sm text-slate-500">Oct 24, 2023</td>
                        <td className="px-6 py-4">
                            <span className="bg-green-100 text-green-700 px-2 py-1 rounded-full text-xs font-bold">Ready</span>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
      </div>
    </div>
  );
};
