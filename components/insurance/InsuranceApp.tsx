
import React, { useState } from 'react';
import { Sidebar } from '../common/Sidebar';
import { LayoutGrid, FileText, ShieldAlert, DollarSign, PieChart, Users, ScrollText } from 'lucide-react';
import { ClaimsQueue } from './ClaimsQueue';
import { ClaimReview } from './ClaimReview';
import { FraudConsole } from './FraudConsole';
import { Payments } from './Payments';
import { PatientList } from '../common/PatientList';
import { AddPatient } from '../common/AddPatient';
import { Contracts } from './Contracts';
import { Dashboard } from './Dashboard';
import { Reports } from './Reports';

type View = 'dashboard' | 'claims' | 'fraud' | 'payments' | 'review' | 'patients' | 'add-patient' | 'contracts' | 'reports';

export const InsuranceApp: React.FC<{ onLogout: () => void }> = ({ onLogout }) => {
  const [currentView, setCurrentView] = useState<View>('dashboard');
  const [selectedClaimId, setSelectedClaimId] = useState<string | null>(null);

  const handleReviewClaim = (id: string) => {
    setSelectedClaimId(id);
    setCurrentView('review');
  };

  const navItems = [
    {
      icon: <LayoutGrid size={20} />,
      label: 'Dashboard',
      active: currentView === 'dashboard',
      onClick: () => setCurrentView('dashboard')
    },
    {
      icon: <FileText size={20} />,
      label: 'Incoming Claims',
      active: currentView === 'claims' || currentView === 'review',
      onClick: () => setCurrentView('claims')
    },
    {
      icon: <Users size={20} />,
      label: 'Members',
      active: currentView === 'patients' || currentView === 'add-patient',
      onClick: () => setCurrentView('patients')
    },
    {
      icon: <ScrollText size={20} />,
      label: 'Contracts',
      active: currentView === 'contracts',
      onClick: () => setCurrentView('contracts')
    },
    {
      icon: <ShieldAlert size={20} />,
      label: 'Fraud Analysis',
      active: currentView === 'fraud',
      onClick: () => setCurrentView('fraud')
    },
    {
      icon: <DollarSign size={20} />,
      label: 'Payments',
      active: currentView === 'payments',
      onClick: () => setCurrentView('payments')
    },
    {
      icon: <PieChart size={20} />,
      label: 'Audit & Reports',
      active: currentView === 'reports',
      onClick: () => setCurrentView('reports')
    }
  ];

  const renderContent = () => {
    switch (currentView) {
      case 'dashboard': return <Dashboard />;
      case 'claims': return <ClaimsQueue onReview={handleReviewClaim} />;
      case 'review': return <ClaimReview claimId={selectedClaimId} onBack={() => setCurrentView('claims')} />;
      case 'patients': return <PatientList onAddPatient={() => setCurrentView('add-patient')} />;
      case 'add-patient': return <AddPatient onCancel={() => setCurrentView('patients')} onSave={() => setCurrentView('patients')} />;
      case 'contracts': return <Contracts />;
      case 'fraud': return <FraudConsole />;
      case 'payments': return <Payments />;
      case 'reports': return <Reports />;
      default: return <ClaimsQueue onReview={handleReviewClaim} />;
    }
  };

  return (
    <div className="flex min-h-screen bg-slate-50">
      <Sidebar 
        title="HayoHealth" 
        subtitle="Insurance Portal" 
        items={navItems}
        userAvatar="https://i.pravatar.cc/150?u=admin"
        userName="Sarah Conner"
        userRole="Senior Claims Officer"
        onLogout={onLogout}
        colorClass="text-secondary"
      />
      <main className="ml-64 flex-1 p-8">
        {renderContent()}
      </main>
    </div>
  );
};
