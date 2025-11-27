
import React, { useState } from 'react';
import { UserRole } from './types';
import { HospitalApp } from './components/hospital/HospitalApp';
import { InsuranceApp } from './components/insurance/InsuranceApp';
import { Login } from './components/common/Login';

const App: React.FC = () => {
  const [role, setRole] = useState<UserRole>(UserRole.NONE);

  if (role === UserRole.NONE) {
    return <Login onLogin={(selectedRole) => setRole(selectedRole)} />;
  }

  return (
    <>
      {role === UserRole.HOSPITAL ? (
        <HospitalApp onLogout={() => setRole(UserRole.NONE)} />
      ) : (
        <InsuranceApp onLogout={() => setRole(UserRole.NONE)} />
      )}
    </>
  );
};

export default App;
