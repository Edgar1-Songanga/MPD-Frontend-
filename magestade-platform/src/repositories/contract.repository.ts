// Placeholder for src/repositories/contract.repository.ts
import { prisma } from "@/lib/prisma";

export const contractRepository = {
  async create(data: any) {
    return prisma.contract.create({
      data
    });
  },

  async findAll(companyId: string) {
    return prisma.contract.findMany({
      where: { companyId },
      orderBy: { createdAt: "desc" }
    });
  },

  async findById(id: string) {
    return prisma.contract.findUnique({
      where: { id }
    });
  },

  async update(id: string, data: any) {
    return prisma.contract.update({
      where: { id },
      data
    });
  },

  async delete(id: string) {
    return prisma.contract.delete({
      where: { id }
    });
  }
};
