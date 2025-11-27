
import React from 'react';
import { 
  Download, 
  Calendar, 
  FileText, 
  TrendingUp, 
  AlertTriangle, 
  CheckCircle, 
  XCircle, 
  Filter,
  Clock,
  Shield,
  Search
} from 'lucide-react';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  Tooltip, 
  ResponsiveContainer, 
  LineChart, 
  Line, 
  PieChart, 
  Pie, 
  Cell, 
  AreaChart, 
  Area 
} from 'recharts';

// Mock Data
const claimsVolumeData = [
  { month: 'Jan', received: 450, approved: 380 },
  { month: 'Feb', received: 520, approved: 430 },
  { month: 'Mar', received: 480, approved: 410 },
  { month: 'Apr', received: 600, approved: 540 },
  { month: 'May', received: 750, approved: 680 },
  { month: 'Jun', received: 820, approved: 710 },
];

const statusDistribution = [
  { name: 'Approved', value: 68, color: '#10b981' },
  { name: 'Rejected', value: 12, color: '#ef4444' },
  { name: 'Pending Info', value: 15, color: '#f59e0b' },
  { name: 'Fraud Review', value: 5, color: '#6366f1' },
];

const rejectionReasons = [
  { name: 'Duplicate Claim', count: 145 },
  { name: 'Policy Expired', count: 98 },
  { name: 'Service Not Covered', count: 86 },
  { name: 'Price Mismatch', count: 54 },
  { name: 'Missing Info', count: 42 },
];

const auditLogs = [
  { id: 1, user: 'Sarah Conner', action: 'Approved Claim #CLM-8921', time: '10 mins ago', type: 'Approval' },
  { id: 2, user: 'System', action: 'Flagged Claim #CLM-9923 for Fraud', time: '32 mins ago', type: 'System' },
  { id: 3, user: 'Mike Ross', action: 'Updated Contract: Standard Tariff', time: '2 hours ago', type: 'Admin' },
  { id: 4, user: 'Sarah Conner', action: 'Rejected Claim #CLM-8812', time: '4 hours ago', type: 'Rejection' },
  { id: 5, user: 'System', action: 'Generated Monthly Payout Batch', time: '1 day ago', type: 'System' },
];

const generatedReports = [
  { name: 'Monthly Financial Summary - Oct 2023', type: 'PDF', size: '2.4 MB', date: 'Nov 01, 2023' },
  { name: 'Provider Performance Q3 2023', type: 'XLSX', size: '4.1 MB', date: 'Oct 15, 2023' },
  { name: 'Fraud Analysis Report - Sept', type: 'PDF', size: '1.8 MB', date: 'Oct 01, 2023' },
];

export const Reports: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto space-y-8">
      {/* Header */}
      <header className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-extrabold text-slate-900">Audit & Reports</h1>
          <p className="text-slate-500 mt-1 font-medium">Comprehensive analytics on claims, finance, and operations.</p>
        </div>
        <div className="flex flex-wrap gap-3">
          <div className="relative">
            <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
            <select className="pl-10 pr-4 py-2.5 bg-white border border-slate-200 rounded-xl text-sm font-bold text-slate-600 hover:border-slate-300 focus:ring-2 focus:ring-secondary/20 outline-none appearance-none cursor-pointer shadow-sm">
              <option>Last 30 Days</option>
              <option>Last Quarter</option>
              <option>Year to Date</option>
            </select>
          </div>
          <button className="flex items-center gap-2 px-5 py-2.5 bg-secondary text-white rounded-xl font-bold shadow-lg shadow-secondary/25 hover:bg-secondary/90 transition-all">
            <Download size={18} /> Export Data
          </button>
        </div>
      </header>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="card-base p-6 flex flex-col justify-between">
          <div>
            <p className="text-slate-500 text-xs font-bold uppercase tracking-wider mb-2">Total Processed</p>
            <h3 className="text-3xl font-extrabold text-slate-900">14,832</h3>
          </div>
          <div className="mt-4 flex items-center gap-2 text-sm font-bold text-emerald-600">
            <span className="bg-emerald-50 px-2 py-1 rounded-lg flex items-center gap-1 border border-emerald-100">
              <TrendingUp size={14} /> +5.4%
            </span>
            <span className="text-slate-400 font-medium">vs last period</span>
          </div>
        </div>

        <div className="card-base p-6 flex flex-col justify-between">
          <div>
            <p className="text-slate-500 text-xs font-bold uppercase tracking-wider mb-2">Approval Rate</p>
            <h3 className="text-3xl font-extrabold text-slate-900">92.8%</h3>
          </div>
          <div className="mt-4 flex items-center gap-2 text-sm font-bold text-red-500">
            <span className="bg-red-50 px-2 py-1 rounded-lg flex items-center gap-1 border border-red-100">
              <TrendingUp size={14} className="rotate-180" /> -1.2%
            </span>
            <span className="text-slate-400 font-medium">vs last period</span>
          </div>
        </div>

        <div className="card-base p-6 flex flex-col justify-between">
          <div>
            <p className="text-slate-500 text-xs font-bold uppercase tracking-wider mb-2">Fraud Savings</p>
            <h3 className="text-3xl font-extrabold text-slate-900">RF1.2M</h3>
          </div>
          <div className="mt-4 flex items-center gap-2 text-sm font-bold text-emerald-600">
            <span className="bg-emerald-50 px-2 py-1 rounded-lg flex items-center gap-1 border border-emerald-100">
              <Shield size={14} /> +12%
            </span>
            <span className="text-slate-400 font-medium">detection rate</span>
          </div>
        </div>

        <div className="card-base p-6 flex flex-col justify-between">
          <div>
            <p className="text-slate-500 text-xs font-bold uppercase tracking-wider mb-2">Avg Turnaround</p>
            <h3 className="text-3xl font-extrabold text-slate-900">5.2 Days</h3>
          </div>
          <div className="mt-4 flex items-center gap-2 text-sm font-bold text-blue-600">
            <span className="bg-blue-50 px-2 py-1 rounded-lg flex items-center gap-1 border border-blue-100">
              <Clock size={14} /> -0.5 Days
            </span>
            <span className="text-slate-400 font-medium">faster</span>
          </div>
        </div>
      </div>

      {/* Main Charts Section */}
      <div className="grid lg:grid-cols-3 gap-8">
        {/* Volume Trend */}
        <div className="lg:col-span-2 card-base p-6">
          <div className="flex justify-between items-center mb-6">
            <h3 className="font-bold text-lg text-slate-900">Claims Volume Trend</h3>
            <div className="flex gap-2">
              <span className="flex items-center gap-1 text-xs font-bold text-slate-500"><div className="w-3 h-3 rounded-full bg-slate-300"></div> Received</span>
              <span className="flex items-center gap-1 text-xs font-bold text-slate-500"><div className="w-3 h-3 rounded-full bg-secondary"></div> Approved</span>
            </div>
          </div>
          <div className="h-80 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={claimsVolumeData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                <defs>
                  <linearGradient id="colorApproved" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#F97066" stopOpacity={0.2}/>
                    <stop offset="95%" stopColor="#F97066" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{ fill: '#94a3b8', fontSize: 12 }} dy={10} />
                <YAxis axisLine={false} tickLine={false} tick={{ fill: '#94a3b8', fontSize: 12 }} />
                <Tooltip contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)' }} />
                <Area type="monotone" dataKey="received" stroke="#cbd5e1" fill="#f1f5f9" strokeWidth={2} />
                <Area type="monotone" dataKey="approved" stroke="#F97066" fillOpacity={1} fill="url(#colorApproved)" strokeWidth={2} />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Status Distribution */}
        <div className="card-base p-6 flex flex-col">
          <h3 className="font-bold text-lg text-slate-900 mb-4">Claim Outcomes</h3>
          <div className="flex-1 relative min-h-[250px]">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={statusDistribution}
                  innerRadius={60}
                  outerRadius={80}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {statusDistribution.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} strokeWidth={0} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
            <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
              <span className="text-2xl font-extrabold text-slate-900">Total</span>
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Distribution</span>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3 mt-4">
            {statusDistribution.map((item, idx) => (
              <div key={idx} className="flex items-center gap-2 text-xs font-medium text-slate-600">
                <div className="w-2 h-2 rounded-full" style={{ backgroundColor: item.color }}></div>
                <span>{item.name} ({item.value}%)</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Rejection Reasons */}
        <div className="card-base p-6">
          <h3 className="font-bold text-lg text-slate-900 mb-6">Top Rejection Reasons</h3>
          <div className="space-y-4">
            {rejectionReasons.map((reason, idx) => (
              <div key={idx} className="group">
                <div className="flex justify-between text-sm font-medium mb-1.5">
                  <span className="text-slate-700 group-hover:text-secondary transition-colors">{reason.name}</span>
                  <span className="text-slate-900 font-bold">{reason.count}</span>
                </div>
                <div className="w-full bg-slate-100 rounded-full h-2.5 overflow-hidden">
                  <div 
                    className="bg-secondary h-2.5 rounded-full transition-all duration-500 ease-out group-hover:bg-secondary/80" 
                    style={{ width: `${(reason.count / 200) * 100}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Generated Reports */}
        <div className="card-base p-6">
          <h3 className="font-bold text-lg text-slate-900 mb-6">Available Reports</h3>
          <div className="space-y-4">
            {generatedReports.map((report, idx) => (
              <div key={idx} className="flex items-center justify-between p-4 border border-slate-100 rounded-xl hover:border-secondary/20 hover:bg-secondary/5 transition-all group cursor-pointer">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-slate-100 text-slate-500 rounded-lg group-hover:bg-white group-hover:text-secondary transition-colors">
                    <FileText size={20} />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-slate-900 group-hover:text-secondary transition-colors">{report.name}</p>
                    <p className="text-xs text-slate-500 font-medium mt-0.5">{report.date} • {report.size}</p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <button className="p-2 text-slate-400 hover:text-secondary transition-colors">
                    <Download size={18} />
                  </button>
                </div>
              </div>
            ))}
          </div>
          <button className="w-full mt-6 py-3 border border-slate-200 text-slate-600 font-bold rounded-xl hover:bg-slate-50 transition-colors text-sm">
            View All Archived Reports
          </button>
        </div>
      </div>

      {/* Audit Log */}
      <div className="card-base overflow-hidden">
        <div className="p-6 border-b border-slate-100 flex justify-between items-center bg-slate-50/50">
          <h3 className="font-bold text-lg text-slate-900">System Audit Log</h3>
          <div className="relative w-64">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
            <input type="text" placeholder="Search logs..." className="w-full pl-10 pr-4 py-2 bg-white border border-slate-200 rounded-lg text-sm outline-none focus:border-secondary" />
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead className="bg-white text-slate-500 font-bold text-xs uppercase tracking-wider border-b border-slate-100">
              <tr>
                <th className="px-6 py-4">User</th>
                <th className="px-6 py-4">Action</th>
                <th className="px-6 py-4">Type</th>
                <th className="px-6 py-4 text-right">Time</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {auditLogs.map((log) => (
                <tr key={log.id} className="hover:bg-slate-50 transition-colors">
                  <td className="px-6 py-4 font-bold text-slate-900">{log.user}</td>
                  <td className="px-6 py-4 text-slate-600 font-medium">{log.action}</td>
                  <td className="px-6 py-4">
                    <span className={`px-2.5 py-1 rounded-full text-xs font-bold border ${
                      log.type === 'Approval' ? 'bg-emerald-50 text-emerald-700 border-emerald-100' :
                      log.type === 'Rejection' ? 'bg-red-50 text-red-700 border-red-100' :
                      log.type === 'Admin' ? 'bg-blue-50 text-blue-700 border-blue-100' :
                      'bg-slate-100 text-slate-600 border-slate-200'
                    }`}>
                      {log.type}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right text-slate-500 font-mono text-xs">{log.time}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
