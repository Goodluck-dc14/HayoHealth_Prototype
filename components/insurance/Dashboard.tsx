
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import { AlertOctagon, FileText, ScrollText, TrendingUp, ArrowUpRight, DollarSign } from 'lucide-react';

const claimsData = [
  { name: 'Mon', received: 120, processed: 110 },
  { name: 'Tue', received: 145, processed: 130 },
  { name: 'Wed', received: 132, processed: 125 },
  { name: 'Thu', received: 156, processed: 140 },
  { name: 'Fri', received: 180, processed: 165 },
  { name: 'Sat', received: 90, processed: 85 },
  { name: 'Sun', received: 65, processed: 60 },
];

const statusData = [
  { name: 'Approved', value: 65, color: '#10b981' },
  { name: 'Rejected', value: 10, color: '#ef4444' },
  { name: 'Pending', value: 25, color: '#f59e0b' },
];

export const Dashboard: React.FC = () => {
  return (
    <div className="space-y-8">
      <header className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-extrabold text-slate-900">Insurance Overview</h1>
          <p className="text-slate-500 mt-1 font-medium">Real-time insights on claims, fraud, and contracts.</p>
        </div>
        <div className="flex gap-2">
           <select className="input-base h-10 py-0 w-40 text-sm">
              <option>Last 7 Days</option>
              <option>Last 30 Days</option>
              <option>This Quarter</option>
           </select>
        </div>
      </header>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="card-base p-6 flex flex-col justify-between relative overflow-hidden group">
          <div className="absolute right-0 top-0 w-24 h-24 bg-primary/5 rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-110"></div>
          <div>
            <p className="text-slate-500 font-bold text-xs uppercase tracking-wider mb-2">Claims Queue</p>
            <h3 className="text-3xl font-extrabold text-slate-900">428</h3>
          </div>
          <div className="mt-4 flex items-center gap-2 text-sm font-bold text-primary">
            <span className="bg-primary/10 px-2 py-1 rounded-lg flex items-center gap-1">
              <ArrowUpRight size={14} /> +12%
            </span>
            <span className="text-slate-400 font-medium">vs last week</span>
          </div>
        </div>

        <div className="card-base p-6 flex flex-col justify-between relative overflow-hidden group">
          <div className="absolute right-0 top-0 w-24 h-24 bg-secondary/5 rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-110"></div>
          <div>
            <p className="text-slate-500 font-bold text-xs uppercase tracking-wider mb-2">Fraud Alerts</p>
            <h3 className="text-3xl font-extrabold text-slate-900">12</h3>
          </div>
          <div className="mt-4 flex items-center gap-2 text-sm font-bold text-secondary">
            <span className="bg-secondary/10 px-2 py-1 rounded-lg flex items-center gap-1">
              <AlertOctagon size={14} /> High Risk
            </span>
            <span className="text-slate-400 font-medium">Requires review</span>
          </div>
        </div>

        <div className="card-base p-6 flex flex-col justify-between relative overflow-hidden group">
          <div className="absolute right-0 top-0 w-24 h-24 bg-blue-50 rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-110"></div>
          <div>
            <p className="text-slate-500 font-bold text-xs uppercase tracking-wider mb-2">Active Contracts</p>
            <h3 className="text-3xl font-extrabold text-slate-900">8</h3>
          </div>
          <div className="mt-4 flex items-center gap-2 text-sm font-bold text-blue-600">
            <span className="bg-blue-50 px-2 py-1 rounded-lg flex items-center gap-1">
              <ScrollText size={14} /> 2 Drafts
            </span>
            <span className="text-slate-400 font-medium">Pending publish</span>
          </div>
        </div>

        <div className="card-base p-6 flex flex-col justify-between relative overflow-hidden group">
          <div className="absolute right-0 top-0 w-24 h-24 bg-emerald-50 rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-110"></div>
          <div>
            <p className="text-slate-500 font-bold text-xs uppercase tracking-wider mb-2">Payouts Processed</p>
            <h3 className="text-3xl font-extrabold text-slate-900">RF1.2M</h3>
          </div>
          <div className="mt-4 flex items-center gap-2 text-sm font-bold text-emerald-600">
            <span className="bg-emerald-50 px-2 py-1 rounded-lg flex items-center gap-1">
              <DollarSign size={14} /> Ready
            </span>
            <span className="text-slate-400 font-medium">Next batch tomorrow</span>
          </div>
        </div>
      </div>

      {/* Charts Section */}
      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 card-base p-6 min-h-[400px] flex flex-col">
          <div className="flex justify-between items-center mb-6">
            <h3 className="font-bold text-lg text-slate-900 flex items-center gap-2">
              <TrendingUp className="text-slate-400" size={20} />
              Claims Volume
            </h3>
          </div>
          <div className="flex-1">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={claimsData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: '#94a3b8', fontSize: 12 }} dy={10} />
                <YAxis axisLine={false} tickLine={false} tick={{ fill: '#94a3b8', fontSize: 12 }} />
                <Tooltip 
                  contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)' }}
                  cursor={{ fill: '#f1f5f9' }}
                />
                <Bar dataKey="received" name="Received" fill="#cbd5e1" radius={[4, 4, 0, 0]} barSize={20} />
                <Bar dataKey="processed" name="Processed" fill="#30A19D" radius={[4, 4, 0, 0]} barSize={20} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="card-base p-6 min-h-[400px] flex flex-col">
          <h3 className="font-bold text-lg text-slate-900 mb-6">Processing Status</h3>
          <div className="flex-1 relative">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={statusData}
                  innerRadius={80}
                  outerRadius={110}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {statusData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} strokeWidth={0} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
            {/* Center Text */}
            <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
              <span className="text-3xl font-extrabold text-slate-900">85%</span>
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Completion</span>
            </div>
          </div>
          <div className="mt-6 space-y-3">
            {statusData.map((item, idx) => (
              <div key={idx} className="flex justify-between items-center p-3 rounded-lg bg-slate-50">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }}></div>
                  <span className="font-bold text-slate-700 text-sm">{item.name}</span>
                </div>
                <span className="font-mono font-bold text-slate-900">{item.value}%</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="grid lg:grid-cols-2 gap-8">
        <div className="card-base p-6">
          <div className="flex justify-between items-center mb-6">
            <h3 className="font-bold text-lg text-slate-900">High Priority Claims</h3>
            <button className="text-secondary text-sm font-bold hover:underline">View All</button>
          </div>
          <div className="space-y-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex items-center justify-between p-4 rounded-xl border border-slate-100 hover:border-secondary/20 hover:bg-secondary/5 transition-colors cursor-pointer group">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-red-50 text-red-500 flex items-center justify-center font-bold">
                    !
                  </div>
                  <div>
                    <p className="font-bold text-slate-900">CLM-892{i}</p>
                    <p className="text-xs text-slate-500 font-medium">City Clinic • Potential Duplication</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-bold text-slate-900">RF4,500.00</p>
                  <span className="text-[10px] font-bold uppercase text-secondary group-hover:underline">Review Now</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="card-base p-6">
          <div className="flex justify-between items-center mb-6">
            <h3 className="font-bold text-lg text-slate-900">Recent Contract Updates</h3>
            <button className="text-primary text-sm font-bold hover:underline">Manage</button>
          </div>
          <div className="space-y-4">
             <div className="flex items-start gap-4 p-4 rounded-xl bg-slate-50 border border-slate-100">
                <div className="mt-1 bg-white p-2 rounded-lg border border-slate-200 text-blue-600">
                  <ScrollText size={18} />
                </div>
                <div>
                  <p className="font-bold text-slate-900">Standard Tariff 2024</p>
                  <p className="text-sm text-slate-600 mt-1">Version 1.2 published. Effective immediately for all providers.</p>
                  <p className="text-xs text-slate-400 font-medium mt-2">2 hours ago</p>
                </div>
             </div>
             <div className="flex items-start gap-4 p-4 rounded-xl bg-yellow-50/50 border border-yellow-100">
                <div className="mt-1 bg-white p-2 rounded-lg border border-yellow-200 text-yellow-600">
                  <FileText size={18} />
                </div>
                <div>
                  <p className="font-bold text-slate-900">Specialty Care Addendum</p>
                  <p className="text-sm text-slate-600 mt-1">Draft saved. 3 items require price validation before publishing.</p>
                  <p className="text-xs text-slate-400 font-medium mt-2">Yesterday</p>
                </div>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};
