import React from 'react';
import { Camera, Save, X, User, MapPin, Shield } from 'lucide-react';

interface AddPatientProps {
  onCancel: () => void;
  onSave: () => void;
}

export const AddPatient: React.FC<AddPatientProps> = ({ onCancel, onSave }) => {
  return (
    <div className="max-w-5xl mx-auto">
      <header className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-extrabold text-slate-900">New Patient Registration</h1>
          <p className="text-slate-500 mt-1 font-medium">Create a new patient profile. All fields marked * are required.</p>
        </div>
        <button onClick={onCancel} className="p-2 hover:bg-slate-200 rounded-full transition-colors">
          <X size={24} className="text-slate-500" />
        </button>
      </header>

      <div className="card-base p-10">
        <form onSubmit={(e) => { e.preventDefault(); onSave(); }} className="space-y-10">
          
          {/* Profile Photo Section */}
          <div className="flex flex-col items-center justify-center">
            <div className="relative group">
              <div className="w-32 h-32 bg-slate-50 rounded-full flex items-center justify-center border-2 border-dashed border-slate-300 cursor-pointer hover:border-primary hover:bg-primary/5 transition-all overflow-hidden">
                <Camera className="w-10 h-10 text-slate-400 group-hover:text-primary transition-colors" />
              </div>
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity transition-transform duration-200 transform translate-y-2 group-hover:translate-y-0">
                <span className="text-xs font-bold text-white bg-slate-900 px-3 py-1 rounded-full shadow-lg">Upload</span>
              </div>
            </div>
          </div>

          {/* Personal Information */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 pb-2 border-b border-slate-100">
                <div className="p-2 bg-primary/10 rounded-lg text-primary"><User size={20} /></div>
                <h3 className="text-lg font-bold text-slate-900">Personal Information</h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-2 gap-y-6">
              <div className="space-y-1">
                <label className="label-base">First Name <span className="text-red-500">*</span></label>
                <input type="text" className="input-base rounded-lg w-full" placeholder="Jane" required />
              </div>
              <div className="space-y-1">
                <label className="label-base">Last Name <span className="text-red-500">*</span></label>
                <input type="text" className="input-base  rounded-lg w-full" placeholder="Doe" required />
              </div>
              <div className="space-y-1">
                <label className="label-base">Date of Birth <span className="text-red-500">*</span></label>
                <input type="date" className="input-base rounded-lg w-full" required />
              </div>
              <div className="space-y-1">
                <label className="label-base">Gender <span className="text-red-500">*</span></label>
                <select className="input-base rounded-lg w-full">
                  <option value="">Select Gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
              </div>
              <div className="space-y-1">
                <label className="label-base">Phone Number</label>
                <input type="tel" className="input-base rounded-lg w-full" placeholder="+1 (555) 000-0000" />
              </div>
              <div className="space-y-1">
                <label className="label-base">Email Address</label>
                <input type="email" className="input-base rounded-lg w-full" placeholder="jane.doe@example.com" />
              </div>
            </div>
          </div>

          {/* Address */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 pb-2 border-b border-slate-100">
                <div className="p-2 bg-secondary/10 rounded-lg text-secondary"><MapPin size={20} /></div>
                <h3 className="text-lg font-bold text-slate-900">Address</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
              <div className="md:col-span-2 space-y-1">
                <label className="label-base">Street Address</label>
                <input type="text" className="input-base rounded-lg w-full" placeholder="123 Main St, Apt 4B" />
              </div>
              <div className="space-y-1">
                <label className="label-base">City</label>
                <input type="text" className="input-base rounded-lg w-full" placeholder="New York" />
              </div>
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-1">
                  <label className="label-base">State</label>
                  <input type="text" className="input-base rounded-lg w-full" placeholder="NY" />
                </div>
                <div className="space-y-1">
                  <label className="label-base">Zip Code</label>
                  <input type="text" className="input-base rounded-lg w-full" placeholder="10001" />
                </div>
              </div>
            </div>
          </div>

          {/* Insurance Information */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 pb-2 border-b border-slate-100">
                <div className="p-2 bg-blue-50 rounded-lg text-blue-600"><Shield size={20} /></div>
                <h3 className="text-lg font-bold text-slate-900">Insurance Details</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
              <div className="space-y-1">
                <label className="label-base">Insurance Provider</label>
                <select className="input-base rounded-lg w-full">
                  <option value="">Select Provider</option>
                  <option value="aetna">Aetna</option>
                  <option value="bcbs">BlueCross BlueShield</option>
                  <option value="cigna">Cigna</option>
                  <option value="uhc">UnitedHealthcare</option>
                </select>
              </div>
              <div className="space-y-1">
                <label className="label-base">Policy Number</label>
                <input type="text" className="input-base rounded-lg w-full" placeholder="Policy ID" />
              </div>
              <div className="space-y-1">
                <label className="label-base">Group Number</label>
                <input type="text" className="input-base rounded-lg w-full" placeholder="Group ID (Optional)" />
              </div>
              <div className="space-y-1">
                <label className="label-base">Policy Holder Relationship</label>
                <select className="input-base rounded-lg w-full">
                  <option value="self">Self</option>
                  <option value="spouse">Spouse</option>
                  <option value="child">Child</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center justify-end gap-4 pt-8 border-t border-slate-100">
            <button 
              type="button"
              onClick={onCancel}
              className="px-8 py-3.5 rounded-xl font-bold text-slate-600 hover:bg-slate-100 transition-colors bg-slate-200 flex items-center gap-2"
            >
              Cancel
            </button>
            <button 
              type="submit"
              className="btn-primary px-8 py-3.5 flex items-center gap-2 text-sm bg-primary hover:bg-primary/90 rounded-xl font-bold text-white"
            >
              <Save size={20} />
              Create Profile
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};