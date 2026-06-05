// Placeholder for src/services/application.service.ts
import { applicationRepository } from "@/repositories/application.repository";

export const applicationService = {
  async createApplication(data: any) {
    if (!data.candidateId || !data.jobId) {
      throw new Error("Missing required fields");
    }

    return applicationRepository.create({
      ...data,
      status: "APPLIED"
    });
  },

  async getApplications(companyId: string) {
    return applicationRepository.findAll(companyId);
  },

  async getApplication(id: string) {
    return applicationRepository.findById(id);
  },

  async updateStatus(id: string, status: string) {
    return applicationRepository.updateStatus(id, status);
  },

  async deleteApplication(id: string) {
    return applicationRepository.delete(id);
  }
};
