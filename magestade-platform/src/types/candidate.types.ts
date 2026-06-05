// Placeholder for src/types/candidate.types.ts
export type Candidate = {
  id: string;

  companyId: string;

  firstName: string;
  lastName: string;

  email: string;
  phone?: string;

  cvUrl?: string;
  skills?: string;
  experience?: string;
  notes?: string;

  createdAt: Date;
  updatedAt: Date;
};
