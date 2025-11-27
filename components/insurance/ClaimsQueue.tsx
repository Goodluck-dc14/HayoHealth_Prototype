import React from 'react';
import { Filter, ArrowUpRight, Search } from 'lucide-react';

export const ClaimsQueue: React.FC<{ onReview: (id: string) => void }> = ({ onReview }) => {
  const claims = [
    { id: 'CLM-8912', hospital: 'General Hospital', patient: 'Jane Doe', amount: 180.00, risk: 'Low', status: 'Review' },
    { id: 'CLM-8913', hospital: 'City Clinic', patient: 'John Smith', amount: 4500.00, risk: 'High', status: 'Flagged' },
    { id: 'CLM-8914', hospital: 'Westside Med', patient: 'Emily R.', amount: 75.00, risk: 'Low', status: 'Clean' },
    { id: 'CLM-8915', hospital: 'General Hospital', patient: 'Michael B.', amount: 320.50, risk: 'Medium', status: 'Review' },
  ];

  return (
    <div className="max-w-6xl mx-auto">
      <div className="flex justify-between items-center mb-8">
        <div>
            <h1 className="text-3xl font-bold text-slate-900">Incoming Claims</h1>
            <p className="text-slate-500 mt-1 font-medium">Review and process new claims submissions.</p>
        </div>
        <div className="flex gap-4 items-center">
            <div className="relative w-64">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                <input 
                    type="text" 
                    placeholder="Search claims..." 
                    className="input-base pl-12" 
                />
            </div>
            <button className="flex items-center gap-2 px-5 py-3 border border-slate-200 rounded-xl bg-white text-slate-700 font-bold hover:bg-slate-50 transition-colors shadow-sm">
                <Filter size={18} /> Filters
            </button>
        </div>
      </div>

      <div className="bg-white rounded-2xl border border-slate-200 shadow-card overflow-hidden">
        <table className="w-full text-left">
            <thead className="bg-slate-50/80 text-slate-500 font-bold text-xs uppercase tracking-wider border-b border-slate-100">
                <tr>
                    <th className="px-6 py-4">Claim ID</th>
                    <th className="px-6 py-4">Hospital</th>
                    <th className="px-6 py-4">Patient</th>
                    <th className="px-6 py-4">Amount</th>
                    <th className="px-6 py-4">Risk Score</th>
                    <th className="px-6 py-4">Status</th>
                    <th className="px-6 py-4 text-right">Action</th>
                </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
                {claims.map((claim) => (
                    <tr key={claim.id} className="hover:bg-slate-50 transition-colors group">
                        <td className="px-6 py-4 font-mono text-slate-600 font-medium">{claim.id}</td>
                        <td className="px-6 py-4 text-slate-900 font-bold">{claim.hospital}</td>
                        <td className="px-6 py-4 text-slate-600 font-medium">{claim.patient}</td>
                        <td className="px-6 py-4 font-bold text-slate-900">RF{claim.amount.toFixed(2)}</td>
                        <td className="px-6 py-4">
                            <span className={`px-3 py-1 rounded-full text-xs font-bold border ${
                                claim.risk === 'Low' ? 'bg-emerald-50 text-emerald-700 border-emerald-100' :
                                claim.risk === 'Medium' ? 'bg-orange-50 text-orange-700 border-orange-100' :
                                'bg-red-50 text-red-700 border-red-100'
                            }`}>
                                {claim.risk}
                            </span>
                        </td>
                        <td className="px-6 py-4 text-sm text-slate-600 font-medium">{claim.status}</td>
                        <td className="px-6 py-4 text-right">
                            <button 
                                onClick={() => onReview(claim.id)}
                                className="text-secondary font-bold hover:text-secondary/80 inline-flex items-center gap-1 text-sm bg-secondary/5 px-3 py-1.5 rounded-lg hover:bg-secondary/10 transition-colors"
                            >
                                Review <ArrowUpRight size={16} />
                            </button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
      </div>
    </div>
  );
};