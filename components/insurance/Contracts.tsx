
import React, { useState } from 'react';
import { Plus, Upload, FileText, Edit, Archive, CheckCircle, AlertTriangle, ChevronLeft, Save, Search, Filter, Download } from 'lucide-react';
import { Contract, ContractStatus, ContractItem } from '../../types';

// Mock Data
const MOCK_CONTRACTS: Contract[] = [
  { id: 'CNT-2024-001', name: 'Standard Drug Tariff 2024', insurerName: 'HayoHealth Insurance', version: 'v1.0', effectiveDate: '2024-01-01', status: ContractStatus.PUBLISHED, itemCount: 1250, region: 'National' },
  { id: 'CNT-2024-002', name: 'Specialty Care Addendum', insurerName: 'HayoHealth Insurance', version: 'v0.1', effectiveDate: '2024-06-01', status: ContractStatus.DRAFT, itemCount: 45, region: 'Kigali' },
  { id: 'CNT-2023-099', name: '2023 Legacy Tariff', insurerName: 'HayoHealth Insurance', version: 'v2.4', effectiveDate: '2023-01-01', status: ContractStatus.ARCHIVED, itemCount: 1100, region: 'National' },
];

const MOCK_ITEMS: ContractItem[] = [
  { id: 'ITM-001', code: 'ATC-A01', name: 'Paracetamol', form: 'Tablet', strength: '500mg', price: 150, coverage: 'Covered', category: 'Essential', limit: '30/month' },
  { id: 'ITM-002', code: 'ATC-A02', name: 'Amoxicillin', form: 'Capsule', strength: '500mg', price: 120, coverage: 'Covered', category: 'Essential', limit: '21/claim' },
  { id: 'ITM-003', code: 'ATC-B05', name: 'Ibuprofen', form: 'Tablet', strength: '400mg', price: 200, coverage: 'Conditional', category: 'Non-essential', limit: '15/claim' },
];

export const Contracts: React.FC = () => {
  const [view, setView] = useState<'list' | 'editor'>('list');
  const [contracts, setContracts] = useState(MOCK_CONTRACTS);
  const [currentContract, setCurrentContract] = useState<Contract | null>(null);

  const handleCreate = () => {
    setCurrentContract({
      id: `CNT-2024-${Math.floor(Math.random() * 1000)}`,
      name: 'New Contract Draft',
      insurerName: 'HayoHealth Insurance',
      version: 'v0.1',
      effectiveDate: new Date().toISOString().split('T')[0],
      status: ContractStatus.DRAFT,
      itemCount: 0,
      region: 'National'
    });
    setView('editor');
  };

  const handleEdit = (contract: Contract) => {
    setCurrentContract(contract);
    setView('editor');
  };

  return (
    <div className="max-w-7xl mx-auto">
      {view === 'list' ? (
        <>
          <header className="flex justify-between items-center mb-8">
            <div>
              <h1 className="text-3xl font-extrabold text-slate-900">Contract Library</h1>
              <p className="text-slate-500 mt-1 font-medium">Manage drug tariffs, service price lists, and coverage rules.</p>
            </div>
            <button 
              onClick={handleCreate}
              className="btn-primary px-6 py-3 flex items-center gap-2"
            >
              <Plus size={20} />
              Create New Contract
            </button>
          </header>

          <div className="card-base overflow-hidden">
            {/* Filters */}
            <div className="p-4 border-b border-slate-100 flex gap-4 items-center bg-slate-50/50">
              <div className="relative max-w-md w-full">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                <input type="text" placeholder="Search contracts..." className="input-base pl-12" />
              </div>
              <select className="input-base w-48">
                <option>All Regions</option>
                <option>National</option>
                <option>Kigali</option>
              </select>
              <select className="input-base w-48">
                <option>All Statuses</option>
                <option>Published</option>
                <option>Draft</option>
                <option>Archived</option>
              </select>
            </div>

            {/* Table */}
            <table className="w-full text-left">
              <thead className="bg-slate-50/80 text-slate-500 font-bold text-xs uppercase tracking-wider border-b border-slate-100">
                <tr>
                  <th className="px-6 py-4">Contract Name</th>
                  <th className="px-6 py-4">Version</th>
                  <th className="px-6 py-4">Effective Date</th>
                  <th className="px-6 py-4">Items</th>
                  <th className="px-6 py-4">Status</th>
                  <th className="px-6 py-4 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {contracts.map((contract) => (
                  <tr key={contract.id} className="hover:bg-slate-50 transition-colors group">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="p-2 bg-blue-50 text-blue-600 rounded-lg">
                          <FileText size={18} />
                        </div>
                        <div>
                          <p className="font-bold text-slate-900">{contract.name}</p>
                          <p className="text-xs text-slate-500 font-medium">{contract.insurerName}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 font-mono text-sm text-slate-600 font-medium">{contract.version}</td>
                    <td className="px-6 py-4 text-sm text-slate-600 font-medium">{contract.effectiveDate}</td>
                    <td className="px-6 py-4 text-sm text-slate-600 font-medium">{contract.itemCount}</td>
                    <td className="px-6 py-4">
                      <span className={`px-2.5 py-1 rounded-full text-xs font-bold border ${
                        contract.status === ContractStatus.PUBLISHED ? 'bg-emerald-50 text-emerald-700 border-emerald-100' :
                        contract.status === ContractStatus.DRAFT ? 'bg-yellow-50 text-yellow-700 border-yellow-100' :
                        'bg-slate-100 text-slate-600 border-slate-200'
                      }`}>
                        {contract.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <div className="flex justify-end gap-2">
                        <button onClick={() => handleEdit(contract)} className="p-2 hover:bg-slate-200 rounded-lg text-slate-500 hover:text-slate-700 transition-colors" title="Edit">
                          <Edit size={16} />
                        </button>
                        <button className="p-2 hover:bg-red-50 rounded-lg text-slate-400 hover:text-red-500 transition-colors" title="Archive">
                          <Archive size={16} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </>
      ) : (
        <ContractEditor 
          contract={currentContract} 
          onBack={() => setView('list')} 
        />
      )}
    </div>
  );
};

const ContractEditor: React.FC<{ contract: Contract | null, onBack: () => void }> = ({ contract, onBack }) => {
  return (
    <div className="flex flex-col h-[calc(100vh-100px)]">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-4">
          <button onClick={onBack} className="p-2 hover:bg-slate-200 rounded-full transition-colors text-slate-500">
            <ChevronLeft size={24} />
          </button>
          <div>
            <h1 className="text-2xl font-extrabold text-slate-900">{contract?.name || 'New Contract'}</h1>
            <p className="text-slate-500 text-sm font-medium flex items-center gap-2">
              {contract?.status === ContractStatus.DRAFT && <span className="w-2 h-2 bg-yellow-500 rounded-full"></span>}
              {contract?.status} • {contract?.version}
            </p>
          </div>
        </div>
        <div className="flex gap-3">
          <button className="px-4 py-2 bg-white border border-slate-200 rounded-xl font-bold text-slate-600 hover:bg-slate-50 flex items-center gap-2">
            <Save size={18} /> Save Draft
          </button>
          <button className="px-4 py-2 bg-slate-100 text-slate-400 rounded-xl font-bold cursor-not-allowed flex items-center gap-2">
            <CheckCircle size={18} /> Publish
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
        {/* Metadata Form */}
        <div className="card-base p-6 space-y-4">
          <h3 className="font-bold text-slate-900 border-b border-slate-100 pb-2">Contract Metadata</h3>
          <div>
            <label className="label-base">Contract Name</label>
            <input type="text" className="input-base" defaultValue={contract?.name} />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="label-base">Effective Date</label>
              <input type="date" className="input-base" defaultValue={contract?.effectiveDate} />
            </div>
            <div>
              <label className="label-base">Expiry Date</label>
              <input type="date" className="input-base" />
            </div>
          </div>
          <div>
            <label className="label-base">Region / Scope</label>
            <select className="input-base" defaultValue={contract?.region}>
              <option>National</option>
              <option>Kigali</option>
              <option>Northern Province</option>
            </select>
          </div>
          <div>
            <label className="label-base">Change Notes</label>
            <textarea className="input-base h-24 resize-none pt-2" placeholder="Summary of changes..."></textarea>
          </div>
        </div>

        {/* Upload & Stats */}
        <div className="lg:col-span-2 flex flex-col gap-6">
          {/* Upload Area */}
          <div className="card-base p-8 border-dashed border-2 border-slate-200 flex flex-col items-center justify-center text-center hover:border-primary/50 transition-colors cursor-pointer bg-slate-50/50 group">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-sm mb-4 group-hover:scale-110 transition-transform duration-300">
              <Upload className="text-primary" size={32} />
            </div>
            <h3 className="text-lg font-bold text-slate-900">Upload Tariff CSV</h3>
            <p className="text-slate-500 max-w-sm mx-auto mt-1 mb-4 font-medium text-sm">Drag and drop your .csv file here, or click to browse. Must follow the template.</p>
            <button className="text-primary font-bold text-sm hover:underline flex items-center gap-1">
              <Download size={16} /> Download Template
            </button>
          </div>

          {/* Validation Summary (Mock) */}
          {MOCK_ITEMS.length > 0 && (
            <div className="card-base p-4 bg-yellow-50 border-yellow-100 flex items-start gap-4">
              <div className="p-2 bg-yellow-100 rounded-lg text-yellow-700">
                <AlertTriangle size={20} />
              </div>
              <div>
                <h4 className="font-bold text-yellow-800">Validation Warnings</h4>
                <p className="text-sm text-yellow-700 font-medium mt-1">
                  3 items have missing codes. 1 item has a price of 0. Please review the table below.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Data Table */}
      <div className="card-base flex-1 overflow-hidden flex flex-col">
        <div className="p-4 border-b border-slate-100 bg-slate-50/50 flex justify-between items-center">
          <h3 className="font-bold text-slate-900">Contract Items ({MOCK_ITEMS.length})</h3>
          <div className="flex gap-2">
            <button className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg text-sm font-bold text-slate-600 hover:bg-slate-50">
              Filter Errors
            </button>
          </div>
        </div>
        <div className="flex-1 overflow-auto">
          <table className="w-full text-left text-sm">
            <thead className="bg-white sticky top-0 z-10 shadow-sm">
              <tr className="text-slate-500 text-xs uppercase tracking-wider font-bold">
                <th className="px-6 py-3 bg-slate-50">Code</th>
                <th className="px-6 py-3 bg-slate-50">Drug / Service Name</th>
                <th className="px-6 py-3 bg-slate-50">Form & Strength</th>
                <th className="px-6 py-3 bg-slate-50 text-right">Unit Price</th>
                <th className="px-6 py-3 bg-slate-50">Coverage</th>
                <th className="px-6 py-3 bg-slate-50">Limit</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {MOCK_ITEMS.map((item, idx) => (
                <tr key={item.id} className="hover:bg-slate-50/80 transition-colors">
                  <td className="px-6 py-3 font-mono text-slate-600 font-medium">{item.code}</td>
                  <td className="px-6 py-3 font-bold text-slate-900">{item.name}</td>
                  <td className="px-6 py-3 text-slate-600">{item.form} {item.strength}</td>
                  <td className="px-6 py-3 text-right font-mono font-bold text-slate-900">{item.price}</td>
                  <td className="px-6 py-3">
                    <span className={`px-2 py-0.5 rounded text-xs font-bold ${
                      item.coverage === 'Covered' ? 'bg-green-100 text-green-700' : 
                      item.coverage === 'Conditional' ? 'bg-blue-100 text-blue-700' : 'bg-red-100 text-red-700'
                    }`}>
                      {item.coverage}
                    </span>
                  </td>
                  <td className="px-6 py-3 text-slate-500">{item.limit}</td>
                </tr>
              ))}
              {/* Mock Error Row */}
              <tr className="bg-red-50/30 hover:bg-red-50/50 transition-colors border-l-4 border-red-400">
                <td className="px-6 py-3 font-mono text-red-400 font-bold">MISSING</td>
                <td className="px-6 py-3 font-bold text-slate-900">Metformin XR</td>
                <td className="px-6 py-3 text-slate-600">Tablet 750mg</td>
                <td className="px-6 py-3 text-right font-mono font-bold text-slate-900">0</td>
                <td className="px-6 py-3 text-xs font-bold text-slate-400">Covered</td>
                <td className="px-6 py-3 text-slate-500">-</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
