
import React, { useState } from 'react';
import { Sidebar } from '../common/Sidebar';
import { LayoutDashboard, UserPlus, Stethoscope, ClipboardCheck, Activity, Users, Link as LinkIcon } from 'lucide-react';
import { FrontDesk } from './FrontDesk';
import { Triage } from './Triage';
import { Consultation } from './Consultation';
import { Billing } from './Billing';
import { Dashboard } from './Dashboard';
import { PatientList } from '../common/PatientList';
import { AddPatient } from '../common/AddPatient';
import { ContractMapping } from './ContractMapping';

type View = 'dashboard' | 'frontdesk' | 'triage' | 'consultation' | 'billing' | 'patients' | 'add-patient' | 'contracts';

export const HospitalApp: React.FC<{ onLogout: () => void }> = ({ onLogout }) => {
  const [currentView, setCurrentView] = useState<View>('frontdesk');

  const navItems = [
    {
      icon: <LayoutDashboard size={20} />,
      label: 'Admin Dashboard',
      active: currentView === 'dashboard',
      onClick: () => setCurrentView('dashboard')
    },
    {
      icon: <UserPlus size={20} />,
      label: 'Front Desk',
      active: currentView === 'frontdesk',
      onClick: () => setCurrentView('frontdesk')
    },
    {
      icon: <Users size={20} />,
      label: 'All Patients',
      active: currentView === 'patients' || currentView === 'add-patient',
      onClick: () => setCurrentView('patients')
    },
    {
      icon: <Activity size={20} />,
      label: 'Triage',
      active: currentView === 'triage',
      onClick: () => setCurrentView('triage')
    },
    {
      icon: <Stethoscope size={20} />,
      label: 'Consultation',
      active: currentView === 'consultation',
      onClick: () => setCurrentView('consultation')
    },
    {
      icon: <ClipboardCheck size={20} />,
      label: 'Billing & Claims',
      active: currentView === 'billing',
      onClick: () => setCurrentView('billing')
    },
    {
      icon: <LinkIcon size={20} />,
      label: 'Contract Mapping',
      active: currentView === 'contracts',
      onClick: () => setCurrentView('contracts')
    }
  ];

  const renderContent = () => {
    switch (currentView) {
      case 'dashboard': return <Dashboard />;
      case 'frontdesk': return <FrontDesk onCheckIn={() => setCurrentView('triage')} />;
      case 'patients': return <PatientList onAddPatient={() => setCurrentView('add-patient')} />;
      case 'add-patient': return <AddPatient onCancel={() => setCurrentView('patients')} onSave={() => setCurrentView('patients')} />;
      case 'triage': return <Triage onComplete={() => setCurrentView('consultation')} />;
      case 'consultation': return <Consultation onComplete={() => setCurrentView('billing')} />;
      case 'billing': return <Billing />;
      case 'contracts': return <ContractMapping />;
      default: return <FrontDesk onCheckIn={() => setCurrentView('triage')} />;
    }
  };

  return (
    <div className="flex min-h-screen bg-slate-50">
      <Sidebar 
        title="HayoHealth" 
        subtitle="Hospital Portal" 
        items={navItems}
        userAvatar="https://i.pravatar.cc/150?u=dr_smith"
        userName="Dr. Marcus Smith"
        userRole="Chief Medical Officer"
        onLogout={onLogout}
        colorClass="text-primary"
      />
      <main className="ml-64 flex-1 p-8">
        {renderContent()}
      </main>
    </div>
  );
};
