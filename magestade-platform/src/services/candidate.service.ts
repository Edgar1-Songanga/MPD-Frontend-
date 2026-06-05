// Placeholder for src/services/candidate.service.ts
import { candidateRepository } from "@/repositories/candidate.repository";

export const candidateService = {
  async createCandidate(data: any) {
    if (!data.firstName || !data.email) {
      throw new Error("Missing required fields");
    }

    return candidateRepository.create(data);
  },

  async getCandidates(companyId: string) {
    return candidateRepository.findAll(companyId);
  },

  async getCandidate(id: string) {
    return candidateRepository.findById(id);
  },

  async updateCandidate(id: string, data: any) {
    return candidateRepository.update(id, data);
  },

  async deleteCandidate(id: string) {
    return candidateRepository.delete(id);
  }
};
