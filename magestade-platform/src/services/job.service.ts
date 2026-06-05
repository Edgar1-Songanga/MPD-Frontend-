// Placeholder for src/services/job.service.ts
import { jobRepository } from "@/repositories/job.repository";

export const jobService = {
  async createJob(data: any) {
    if (!data.title || !data.description) {
      throw new Error("Missing required fields");
    }

    return jobRepository.create(data);
  },

  async getJobs(companyId: string) {
    return jobRepository.findAll(companyId);
  },

  async getJob(id: string) {
    return jobRepository.findById(id);
  },

  async updateJob(id: string, data: any) {
    return jobRepository.update(id, data);
  },

  async deleteJob(id: string) {
    return jobRepository.delete(id);
  }
};
