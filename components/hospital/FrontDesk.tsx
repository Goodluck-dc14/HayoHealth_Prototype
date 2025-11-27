import React, { useState } from "react";
import {
  Scan,
  User,
  Calendar,
  CreditCard,
  ChevronRight,
  Check,
  Search,
} from "lucide-react";

export const FrontDesk: React.FC<{ onCheckIn: () => void }> = ({
  onCheckIn,
}) => {
  const [scanned, setScanned] = useState(false);

  return (
    <div className="max-w-6xl mx-auto">
      <header className="mb-8">
        <h1 className="text-3xl font-extrabold text-slate-900">
          Patient Check-in
        </h1>
        <p className="text-slate-500 mt-1 font-medium">
          Welcome, please tap the patient's card to begin or create a new
          profile.
        </p>
      </header>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Left Panel: Scanning Area */}
        <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-card min-h-[500px] flex flex-col items-center justify-center text-center relative overflow-hidden">
          {!scanned ? (
            <div className="w-full h-full flex flex-col items-center justify-center">
              <div
                className="cursor-pointer group flex flex-col items-center"
                onClick={() => setScanned(true)}
              >
                <div className="w-48 h-48 bg-slate-50 rounded-full flex items-center justify-center mb-8 group-hover:scale-105 transition-all duration-500 mx-auto border-[6px] border-slate-100 group-hover:border-primary/20 shadow-inner group-hover:shadow-primary/10">
                  <Scan className="w-20 h-20 text-primary group-hover:text-primary transition-colors" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-3">
                  Tap Patient Card
                </h3>
                <p className="text-slate-500 max-w-sm mx-auto leading-relaxed font-medium">
                  Hold the patient's HayoHealth NFC card near the reader to
                  instantly retrieve their identity and insurance details.
                </p>
              </div>

              <div className="mt-10 w-full max-w-sm border-t border-slate-100 pt-8">
                <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4">
                  Or Manual Entry
                </p>
                <div className="relative">
                  <Search
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-primary transition-colors"
                    size={20}
                  />
                  <input
                    type="text"
                    required
                    className="input-base pl-11 w-full rounded-lg"
                    placeholder="Search by Name or Patient ID"
                  />
                </div>
              </div>
            </div>
          ) : (
            <div className="w-full h-full flex flex-col animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className="flex items-center gap-6 mb-8 w-full p-5 bg-slate-50 rounded-2xl border border-slate-100">
                <div className="relative">
                  <img
                    src="https://i.pravatar.cc/150?u=jane"
                    alt="Patient"
                    className="w-20 h-20 rounded-full object-cover border-4 border-white shadow-md"
                  />
                  <div className="absolute bottom-0 right-0 w-5 h-5 bg-primary border-2 border-white rounded-full"></div>
                </div>
                <div className="text-left">
                  <h2 className="text-2xl font-bold text-slate-900">
                    Jane Doe
                  </h2>
                  <p className="text-slate-500 font-mono text-sm mt-0.5 font-bold">
                    ID: HH-8921-001
                  </p>
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-primary/10 text-primary mt-3 border border-primary/20">
                    Active Member
                  </span>
                </div>
              </div>

              <div className="space-y-6 w-full text-left flex-1">
                <div>
                  <label className="label-base">Assigned Doctor</label>
                  <select className="input-base cursor-pointer rounded-lg w-full">
                    <option>Dr. Marcus Smith (General)</option>
                    <option>Dr. Sarah Chen (Cardiology)</option>
                    <option>Dr. James Wilson (Pediatrics)</option>
                  </select>
                </div>

                <div className="p-5 border border-slate-200 rounded-2xl bg-white">
                  <div className="flex justify-between items-center mb-3">
                    <h4 className="font-bold text-slate-900 text-sm uppercase tracking-wide">
                      Visit Reason
                    </h4>
                    <button className="text-primary text-xs font-bold hover:underline">
                      Edit
                    </button>
                  </div>
                  <div className="flex gap-2 flex-wrap">
                    <span className="px-3 py-1.5 bg-slate-50 border border-slate-100 text-slate-700 font-bold rounded-lg text-sm">
                      Fever
                    </span>
                    <span className="px-3 py-1.5 bg-slate-50 border border-slate-100 text-slate-700 font-bold rounded-lg text-sm">
                      Cough
                    </span>
                    <span className="px-3 py-1.5 bg-slate-50 border border-slate-100 text-slate-700 font-bold rounded-lg text-sm">
                      Fatigue
                    </span>
                  </div>
                </div>
              </div>

              <div className="mt-auto pt-6 flex gap-4 w-full">
                <button
                  onClick={() => setScanned(false)}
                  className="flex-1 py-3.5 px-4 border border-slate-200 text-slate-600 font-bold rounded-xl hover:bg-slate-50 transition-colors"
                >
                  Cancel
                </button>
                <button
                  onClick={onCheckIn}
                  className="flex-[2] btn-primary flex items-center justify-center gap-2"
                >
                  Confirm Check-In
                  <ChevronRight size={20} />
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Right Panel: Information */}
        <div className="space-y-6">
          <div className="card-base p-6">
            <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
              <div className="p-2 bg-primary/10 rounded-lg text-primary">
                <CreditCard size={20} />
              </div>
              Insurance Coverage
            </h3>
            {scanned ? (
              <div className="bg-gradient-to-br from-primary to-teal-600 rounded-2xl p-6 text-white shadow-lg shadow-primary/30 relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16 blur-2xl group-hover:bg-white/20 transition-all duration-700"></div>
                <div className="flex justify-between items-start mb-8 relative z-10">
                  <div>
                    <p className="text-white/80 text-xs font-bold uppercase tracking-wider mb-1">
                      Plan Name
                    </p>
                    <p className="font-bold text-xl tracking-tight">
                      Aetna Gold PPO
                    </p>
                  </div>
                  <div className="bg-white/20 p-1.5 rounded-full border border-white/30">
                    <Check className="text-white h-5 w-5" />
                  </div>
                </div>
                <div className="flex justify-between items-end relative z-10">
                  <div>
                    <p className="text-white/80 text-[10px] font-bold uppercase tracking-wider mb-1">
                      Policy Number
                    </p>
                    <p className="font-mono text-lg tracking-widest text-white">
                      #### #### 8921
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-white/80 text-[10px] font-bold uppercase tracking-wider mb-1">
                      Valid Thru
                    </p>
                    <p className="font-bold">12/25</p>
                  </div>
                </div>
              </div>
            ) : (
              <div className="h-48 bg-slate-50 rounded-2xl border-2 border-dashed border-slate-200 flex flex-col items-center justify-center text-slate-400 gap-2">
                <CreditCard size={32} className="text-slate-300" />
                <p className="font-bold text-sm">
                  Scan card to verify insurance
                </p>
              </div>
            )}
          </div>

          <div className="card-base p-6">
            <h3 className="text-lg font-bold text-slate-900 mb-6 flex items-center gap-2">
              <div className="p-2 bg-secondary/10 rounded-lg text-secondary">
                <Calendar size={20} />
              </div>
              Recent History
            </h3>
            <div className="relative pl-4 border-l-2 border-slate-100 space-y-8">
              <div className="relative group">
                <div
                  className={`absolute -left-[21px] top-1.5 w-3.5 h-3.5 rounded-full border-2 border-white transition-colors duration-300 ${
                    scanned
                      ? "bg-primary shadow-md shadow-primary/30"
                      : "bg-slate-200"
                  }`}
                ></div>
                <p
                  className={`text-sm font-bold ${
                    scanned ? "text-slate-900" : "text-slate-300"
                  }`}
                >
                  Oct 12, 2023
                </p>
                <p
                  className={`text-sm mt-1 font-medium ${
                    scanned ? "text-slate-600" : "text-slate-300"
                  }`}
                >
                  General Checkup • Dr. Smith
                </p>
              </div>
              <div className="relative group">
                <div
                  className={`absolute -left-[21px] top-1.5 w-3.5 h-3.5 rounded-full border-2 border-white transition-colors duration-300 ${
                    scanned ? "bg-secondary" : "bg-slate-200"
                  }`}
                ></div>
                <p
                  className={`text-sm font-bold ${
                    scanned ? "text-slate-900" : "text-slate-300"
                  }`}
                >
                  Aug 05, 2023
                </p>
                <p
                  className={`text-sm mt-1 font-medium ${
                    scanned ? "text-slate-600" : "text-slate-300"
                  }`}
                >
                  Dermatology • Dr. Ray
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
