import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, AreaChart, Area } from 'recharts';

const data = [
  { name: 'Mon', claims: 40, approved: 35 },
  { name: 'Tue', claims: 55, approved: 50 },
  { name: 'Wed', claims: 45, approved: 42 },
  { name: 'Thu', claims: 60, approved: 58 },
  { name: 'Fri', claims: 70, approved: 65 },
  { name: 'Sat', claims: 30, approved: 28 },
  { name: 'Sun', claims: 20, approved: 18 },
];

export const Dashboard: React.FC = () => {
  return (
    <div className="space-y-6">
        <h1 className="text-3xl font-bold text-slate-900">Hospital Finance Overview</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
                <p className="text-sm font-medium text-slate-500">Total Revenue (30d)</p>
                <p className="text-3xl font-bold text-slate-900 mt-2">RF284,500</p>
                <span className="text-green-500 text-sm font-medium">↑ 12% vs last month</span>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
                <p className="text-sm font-medium text-slate-500">Claims Submitted</p>
                <p className="text-3xl font-bold text-slate-900 mt-2">1,245</p>
                <span className="text-slate-400 text-sm font-medium">Avg 41/day</span>
            </div>
             <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
                <p className="text-sm font-medium text-slate-500">Approval Rate</p>
                <p className="text-3xl font-bold text-slate-900 mt-2">96.8%</p>
                <span className="text-green-500 text-sm font-medium">↑ 2.1% improvement</span>
            </div>
             <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
                <p className="text-sm font-medium text-slate-500">Pending Payouts</p>
                <p className="text-3xl font-bold text-slate-900 mt-2">RF42,300</p>
                <span className="text-orange-500 text-sm font-medium">15 claims reviewing</span>
            </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
             <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm h-80">
                <h3 className="font-bold text-slate-800 mb-6">Weekly Claims Performance</h3>
                <ResponsiveContainer width="100%" height="80%">
                    <BarChart data={data}>
                        <XAxis dataKey="name" axisLine={false} tickLine={false} />
                        <Tooltip />
                        <Bar dataKey="claims" fill="#e2e8f0" radius={[4, 4, 0, 0]} />
                        <Bar dataKey="approved" fill="#30A19D" radius={[4, 4, 0, 0]} />
                    </BarChart>
                </ResponsiveContainer>
             </div>
             <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm h-80">
                <h3 className="font-bold text-slate-800 mb-6">Payout Velocity</h3>
                <ResponsiveContainer width="100%" height="80%">
                    <AreaChart data={data}>
                        <defs>
                            <linearGradient id="colorApproved" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#30A19D" stopOpacity={0.2}/>
                                <stop offset="95%" stopColor="#30A19D" stopOpacity={0}/>
                            </linearGradient>
                        </defs>
                        <XAxis dataKey="name" axisLine={false} tickLine={false} />
                        <Tooltip />
                        <Area type="monotone" dataKey="approved" stroke="#30A19D" fillOpacity={1} fill="url(#colorApproved)" />
                    </AreaChart>
                </ResponsiveContainer>
             </div>
        </div>
    </div>
  );
};
