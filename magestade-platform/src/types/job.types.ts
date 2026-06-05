// Placeholder for src/types/job.types.ts
export type Job = {
  id: string;

  companyId: string;

  title: string;
  description: string;

  location?: string;
  isActive: boolean;

  createdAt: Date;
  updatedAt: Date;
};
