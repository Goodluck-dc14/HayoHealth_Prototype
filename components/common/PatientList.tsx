import React, { useState } from 'react';
import { Search, Filter, Plus, Calendar, ChevronRight } from 'lucide-react';

interface PatientListProps {
  onAddPatient: () => void;
}

export const PatientList: React.FC<PatientListProps> = ({ onAddPatient }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const patients = [
    { id: 'HH-8921', name: 'Jane Doe', age: 42, gender: 'Female', lastVisit: 'Oct 12, 2023', status: 'Active', img: 'https://i.pravatar.cc/150?u=jane' },
    { id: 'HH-8922', name: 'John Smith', age: 35, gender: 'Male', lastVisit: 'Sep 28, 2023', status: 'Active', img: 'https://i.pravatar.cc/150?u=john' },
    { id: 'HH-8923', name: 'Emily Ro', age: 28, gender: 'Female', lastVisit: 'Oct 05, 2023', status: 'Inactive', img: 'https://i.pravatar.cc/150?u=emily' },
    { id: 'HH-8924', name: 'Michael Brown', age: 55, gender: 'Male', lastVisit: 'Nov 01, 2023', status: 'Active', img: 'https://i.pravatar.cc/150?u=mike' },
    { id: 'HH-8925', name: 'Sarah Conner', age: 31, gender: 'Female', lastVisit: 'Aug 15, 2023', status: 'Active', img: 'https://i.pravatar.cc/150?u=sarah' },
  ];

  const filteredPatients = patients.filter(p => 
    p.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    p.id.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="max-w-7xl mx-auto">
      <header className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-extrabold text-slate-900">Patient Records</h1>
          <p className="text-slate-500 mt-1 font-medium">Manage patient profiles and history.</p>
        </div>
        <button 
          onClick={onAddPatient}
          className="btn-primary px-6 py-3 flex items-center gap-2"
        >
          <Plus size={20} />
          Add New Patient
        </button>
      </header>

      <div className="card-base overflow-hidden">
        {/* Filters Bar */}
        <div className="p-4 border-b border-slate-100 flex flex-col sm:flex-row gap-4 justify-between items-center bg-slate-50/50">
          <div className="relative w-full sm:max-w-md">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
            <input 
              type="text" 
              placeholder="Search by name or ID..." 
              className="input-base pl-12"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <button className="flex items-center gap-2 px-5 py-3 bg-white border border-slate-200 text-slate-700 rounded-xl text-sm font-bold hover:bg-slate-50 transition-colors shadow-sm">
            <Filter size={16} />
            Filters
          </button>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-slate-50/80 text-slate-500 font-bold text-xs uppercase tracking-wider">
              <tr>
                <th className="px-6 py-4">Patient Name</th>
                <th className="px-6 py-4">ID</th>
                <th className="px-6 py-4">Age / Gender</th>
                <th className="px-6 py-4">Last Visit</th>
                <th className="px-6 py-4">Status</th>
                <th className="px-6 py-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {filteredPatients.map((patient) => (
                <tr key={patient.id} className="hover:bg-slate-50/80 transition-colors group cursor-pointer">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-4">
                      <img src={patient.img} alt={patient.name} className="w-10 h-10 rounded-full object-cover border-2 border-white shadow-sm" />
                      <span className="font-bold text-slate-900">{patient.name}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 font-mono text-slate-500 text-sm font-medium">{patient.id}</td>
                  <td className="px-6 py-4 text-slate-700 text-sm font-medium">{patient.age} yrs • {patient.gender}</td>
                  <td className="px-6 py-4 text-slate-600 text-sm flex items-center gap-2 font-medium">
                    <div className="p-1.5 bg-slate-100 rounded-md text-slate-500"><Calendar size={14} /></div>
                    {patient.lastVisit}
                  </td>
                  <td className="px-6 py-4">
                    <span className={`px-2.5 py-1 rounded-full text-xs font-bold border ${
                      patient.status === 'Active' 
                        ? 'bg-emerald-50 text-emerald-700 border-emerald-100' 
                        : 'bg-slate-100 text-slate-600 border-slate-200'
                    }`}>
                      {patient.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <button className="text-slate-400 hover:text-primary p-2 hover:bg-primary/5 rounded-lg transition-colors">
                      <ChevronRight size={20} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        <div className="p-4 border-t border-slate-100 bg-slate-50 text-center">
          <button className="text-primary text-sm font-bold hover:underline">View All Patients</button>
        </div>
      </div>
    </div>
  );
};