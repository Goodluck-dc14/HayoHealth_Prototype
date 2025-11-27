import React from "react";
import {
  ArrowLeft,
  CheckCircle,
  XCircle,
  AlertTriangle,
  FileText,
  Activity,
} from "lucide-react";

export const ClaimReview: React.FC<{
  claimId: string | null;
  onBack: () => void;
}> = ({ claimId, onBack }) => {
  return (
    <div className="max-w-6xl mx-auto">
      <button
        onClick={onBack}
        className="flex items-center gap-2 text-slate-500 hover:text-slate-900 mb-6 font-medium"
      >
        <ArrowLeft size={18} /> Back to Queue
      </button>

      <div className="flex justify-between items-start mb-8">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">
            Review Claim #{claimId || "CLM-8912"}
          </h1>
          <p className="text-slate-500 mt-1">General Hospital • Oct 12, 2023</p>
        </div>
        <div className="flex gap-3">
          <button className="bg-red-50 text-red-600 px-6 py-2 rounded-lg font-bold hover:bg-red-100 border border-red-100 flex items-center gap-2">
            <XCircle size={18} /> Reject
          </button>
          <button className="bg-white text-slate-600 px-6 py-2 rounded-lg font-bold hover:bg-slate-50 border border-slate-200 flex items-center gap-2">
            <AlertTriangle size={18} /> Request Info
          </button>
          <button className="bg-secondary text-white px-6 py-2 rounded-lg font-bold hover:bg-secondary/90 flex items-center gap-2 shadow-lg shadow-secondary/20">
            <CheckCircle size={18} /> Approve
          </button>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          {/* Automated Checks */}
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6">
            <h3 className="font-bold text-slate-900 mb-4">
              Automated Validation
            </h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="p-3 bg-green-50 rounded-xl border border-green-100 flex items-center gap-3">
                <CheckCircle className="text-green-600" size={20} />
                <div>
                  <p className="text-xs text-green-700 font-bold uppercase">
                    Coverage
                  </p>
                  <p className="text-sm font-medium text-green-900">
                    Active Policy
                  </p>
                </div>
              </div>
              <div className="p-3 bg-green-50 rounded-xl border border-green-100 flex items-center gap-3">
                <CheckCircle className="text-green-600" size={20} />
                <div>
                  <p className="text-xs text-green-700 font-bold uppercase">
                    Pricing
                  </p>
                  <p className="text-sm font-medium text-green-900">
                    Matches Contract
                  </p>
                </div>
              </div>
              <div className="p-3 bg-orange-50 rounded-xl border border-orange-100 flex items-center gap-3">
                <Activity className="text-orange-600" size={20} />
                <div>
                  <p className="text-xs text-orange-700 font-bold uppercase">
                    Anomaly
                  </p>
                  <p className="text-sm font-medium text-orange-900">
                    Freq. - Avg
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Line Items */}
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
            <div className="bg-slate-50 px-6 py-3 border-b border-slate-100 font-semibold text-slate-700">
              Line Items
            </div>
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="text-slate-500 border-b border-slate-100">
                  <th className="pl-6 py-3">Description</th>
                  <th className="py-3">Code</th>
                  <th className="py-3 text-right">Allowed</th>
                  <th className="pr-6 py-3 text-right">Billed</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-50">
                <tr>
                  <td className="pl-6 py-4 font-medium text-slate-900">
                    General Consultation
                  </td>
                  <td className="py-4 text-slate-500">99213</td>
                  <td className="py-4 text-right text-green-600">$100.00</td>
                  <td className="pr-6 py-4 text-right text-slate-900">
                    $120.00
                  </td>
                </tr>
                <tr className="bg-red-50/50">
                  <td className="pl-6 py-4 font-medium text-slate-900 flex items-center gap-2">
                    Amoxicillin 500mg
                    <span className="text-xs bg-red-100 text-red-700 px-2 py-0.5 rounded">
                      High Price
                    </span>
                  </td>
                  <td className="py-4 text-slate-500">RX-8912</td>
                  <td className="py-4 text-right text-green-600">$10.00</td>
                  <td className="pr-6 py-4 text-right text-red-600 font-bold">
                    $15.00
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6">
            <h3 className="font-bold text-slate-900 mb-4">Patient Profile</h3>
            <div className="flex items-center gap-4 mb-4">
              <img
                src="https://i.pravatar.cc/150?u=jane"
                alt="Jane"
                className="w-12 h-12 rounded-full"
              />
              <div>
                <p className="font-bold text-slate-900">Jane Doe</p>
                <p className="text-sm text-slate-500">Aetna Gold PPO</p>
              </div>
            </div>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-slate-500">Yearly Limit</span>
                <span className="font-medium">$100,000</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Used YTD</span>
                <span className="font-medium">$4,250</span>
              </div>
              <div className="w-full bg-slate-100 rounded-full h-2 mt-2">
                <div className="bg-green-500 h-2 rounded-full w-[4.25%]"></div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6">
            <h3 className="font-bold text-slate-900 mb-4">Supporting Docs</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3 p-3 border border-slate-100 rounded-lg hover:bg-slate-50 cursor-pointer">
                <div className="bg-blue-50 p-2 rounded-lg text-secondary">
                  <FileText size={20} />
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-800">
                    Visit_Summary.pdf
                  </p>
                  <p className="text-xs text-slate-400">2.4 MB</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
