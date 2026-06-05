// Placeholder for src/repositories/job.repository.ts
import { prisma } from "@/lib/prisma";

export const jobRepository = {
  async create(data: any) {
    return prisma.job.create({ data });
  },

  async findAll(companyId: string) {
    return prisma.job.findMany({
      where: { companyId },
      orderBy: { createdAt: "desc" }
    });
  },

  async findById(id: string) {
    return prisma.job.findUnique({
      where: { id }
    });
  },

  async update(id: string, data: any) {
    return prisma.job.update({
      where: { id },
      data
    });
  },

  async delete(id: string) {
    return prisma.job.delete({
      where: { id }
    });
  }
};
