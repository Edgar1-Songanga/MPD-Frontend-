// Placeholder for src/types/contract.types.ts
export type Contract = {
  id: string;

  companyId: string;

  title: string;
  fileUrl?: string;

  status: "DRAFT" | "ACTIVE" | "EXPIRED" | "TERMINATED";

  startDate?: Date;
  endDate?: Date;

  createdAt: Date;
  updatedAt: Date;
};
