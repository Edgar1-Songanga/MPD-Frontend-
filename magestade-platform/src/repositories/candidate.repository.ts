// Placeholder for src/repositories/candidate.repository.ts
import { prisma } from "@/lib/prisma";

export const candidateRepository = {
  async create(data: any) {
    return prisma.candidate.create({ data });
  },

  async findAll(companyId: string) {
    return prisma.candidate.findMany({
      where: { companyId },
      orderBy: { createdAt: "desc" }
    });
  },

  async findById(id: string) {
    return prisma.candidate.findUnique({
      where: { id }
    });
  },

  async update(id: string, data: any) {
    return prisma.candidate.update({
      where: { id },
      data
    });
  },

  async delete(id: string) {
    return prisma.candidate.delete({
      where: { id }
    });
  }
};
