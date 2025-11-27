
export enum UserRole {
  HOSPITAL = 'HOSPITAL',
  INSURANCE = 'INSURANCE',
  NONE = 'NONE'
}

export interface Patient {
  id: string;
  name: string;
  dob: string;
  age: number;
  gender: string;
  photoUrl: string;
  insuranceId: string;
  plan: string;
  lastVisit: string;
}

export interface Claim {
  id: string;
  patientName: string;
  hospitalName: string;
  date: string;
  amount: number;
  status: 'Clean' | 'Review' | 'High Risk' | 'Approved' | 'Rejected' | 'Paid';
  riskScore: 'Low' | 'Medium' | 'High';
  flags: string[];
}

export interface Vitals {
  bpSystolic: number;
  bpDiastolic: number;
  heartRate: number;
  temp: number;
  weight: number;
  spo2: number;
}

export enum ContractStatus {
  DRAFT = 'Draft',
  PUBLISHED = 'Published',
  ARCHIVED = 'Archived'
}

export interface Contract {
  id: string;
  name: string;
  insurerName: string;
  version: string;
  effectiveDate: string;
  status: ContractStatus;
  itemCount: number;
  region: string;
}

export interface ContractItem {
  id: string;
  code: string;
  name: string;
  form: string;
  strength: string;
  price: number;
  coverage: 'Covered' | 'Not Covered' | 'Conditional';
  category: string;
  limit: string;
}
