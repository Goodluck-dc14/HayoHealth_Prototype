
import React, { useState } from 'react';
import { UserRole } from '../../types';
import { Building2, ShieldCheck, Mail, Lock, ArrowRight, CheckCircle2 } from 'lucide-react';

interface LoginProps {
  onLogin: (role: UserRole) => void;
}

export const Login: React.FC<LoginProps> = ({ onLogin }) => {
  const [activeRole, setActiveRole] = useState<UserRole>(UserRole.HOSPITAL);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      onLogin(activeRole);
    }, 800);
  };

  const isHospital = activeRole === UserRole.HOSPITAL;
  const themeColor = isHospital ? 'text-primary' : 'text-secondary';
  const themeBg = isHospital ? 'bg-primary' : 'bg-secondary';
  const themeBorder = isHospital ? 'border-primary' : 'border-secondary';
  const themeRing = isHospital ? 'focus:ring-primary' : 'focus:ring-secondary';
  const themeHover = isHospital ? 'hover:bg-primary/90' : 'hover:bg-secondary/90';
  const themeShadow = isHospital ? 'shadow-primary/25' : 'shadow-secondary/25';

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center p-6 relative overflow-hidden">
      {/* Background Decoration */}
      <div className={`absolute top-0 left-0 w-full h-2 bg-gradient-to-r ${isHospital ? 'from-primary to-teal-400' : 'from-secondary to-orange-400'}`}></div>
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-slate-100 rounded-full blur-3xl opacity-50 pointer-events-none"></div>
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-slate-100 rounded-full blur-3xl opacity-50 pointer-events-none"></div>

      <div className="w-full max-w-md relative z-10">
        {/* Logo Section */}
        <div className="text-center mb-8">
          <div className='h-14 w-14 mx-auto rounded-xl flex items-center justify-center shadow-lg mb-4 transition-colors duration-300'>
           <img src="/HAYOHEALTH.png"/>
          </div>
          <h1 className="text-3xl font-extrabold text-slate-900">Welcome Back</h1>
          <p className="text-slate-500 font-medium mt-1">Sign in to access the secure portal.</p>
        </div>

        {/* Card */}
        <div className="bg-white rounded-2xl shadow-xl shadow-slate-200/60 border border-slate-100 overflow-hidden">
          {/* Role Tabs */}
          <div className="grid grid-cols-2 border-b border-slate-100">
            <button 
              onClick={() => setActiveRole(UserRole.HOSPITAL)}
              className={`py-4 px-4 flex items-center justify-center gap-2 text-sm font-bold transition-all relative ${isHospital ? 'text-primary bg-primary/5' : 'text-slate-400 hover:text-slate-600 hover:bg-slate-50'}`}
            >
              <Building2 size={18} />
              <span>Hospital</span>
              {isHospital && <div className="absolute bottom-0 left-0 w-full h-0.5 bg-primary"></div>}
            </button>
            <button 
              onClick={() => setActiveRole(UserRole.INSURANCE)}
              className={`py-4 px-4 flex items-center justify-center gap-2 text-sm font-bold transition-all relative ${!isHospital ? 'text-secondary bg-secondary/5' : 'text-slate-400 hover:text-slate-600 hover:bg-slate-50'}`}
            >
              <ShieldCheck size={18} />
              <span>Insurance</span>
              {!isHospital && <div className="absolute bottom-0 left-0 w-full h-0.5 bg-secondary"></div>}
            </button>
          </div>

          {/* Form */}
          <div className="p-8">
            <form onSubmit={handleLogin} className="space-y-5">
              <div className="space-y-1.5">
                <label className="label-base">Email Address</label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                  <input 
                    type="email" 
                    required
                    className={`input-base pl-11 w-full rounded-lg ${themeRing}`} 
                    placeholder={isHospital ? "dr.name@hospital.com" : "officer@insurance.com"}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="label-base">Password</label>
                <div className="relative">
                  <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                  <input 
                    type="password" 
                    required
                    className={`input-base pl-11 w-full rounded-lg ${themeRing}`} 
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
              </div>

              <div className="flex items-center justify-between text-sm">
                <label className="flex items-center gap-2 cursor-pointer group">
                  <div className={`w-4 h-4 rounded border border-slate-300 flex items-center justify-center transition-colors ${isHospital ? 'group-hover:border-primary' : 'group-hover:border-secondary'}`}>
                    <CheckCircle2 size={12} className={`opacity-0 transition-opacity ${themeColor}`} />
                  </div>
                  <span className="font-medium text-slate-500 group-hover:text-slate-700">Remember me</span>
                </label>
                <a href="#" className={`font-bold ${themeColor} hover:underline`}>Forgot password?</a>
              </div>

              <button 
                type="submit"
                disabled={isLoading}
                className={`w-full h-12 rounded-xl font-bold text-white shadow-lg transition-all duration-200 flex items-center justify-center gap-2 ${themeBg} ${themeHover} ${themeShadow} ${isLoading ? 'opacity-70 cursor-not-allowed' : 'active:scale-[0.98]'}`}
              >
                {isLoading ? (
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                ) : (
                  <>
                    Sign In <ArrowRight size={18} />
                  </>
                )}
              </button>
            </form>
          </div>
          
          {/* Demo Credentials Hint */}
          <div className="bg-slate-50 px-8 py-4 border-t border-slate-100 text-center">
            <p className="text-xs text-slate-400 font-medium">
              Demo: Use any email/password to sign in.
            </p>
          </div>
        </div>

        <p className="text-center mt-8 text-slate-400 text-sm font-medium">
          © 2024 HayoHealth. Secure HIPAA Compliant Login.
        </p>
      </div>
    </div>
  );
};
