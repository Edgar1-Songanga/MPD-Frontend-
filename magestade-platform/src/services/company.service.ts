// Placeholder for src/services/company.service.ts
import { companyRepository } from "@/repositories/company.repository";

export const companyService = {
  async createCompany(data: {
    name: string;
    email?: string;
    phone?: string;
    address?: string;
  }) {
    if (!data.name) {
      throw new Error("Company name is required");
    }

    return companyRepository.create(data);
  },

  async getCompanies() {
    return companyRepository.findAll();
  },

  async getCompany(id: string) {
    return companyRepository.findById(id);
  },

  async updateCompany(id: string, data: any) {
    return companyRepository.update(id, data);
  },

  async deleteCompany(id: string) {
    return companyRepository.delete(id);
  }
};
