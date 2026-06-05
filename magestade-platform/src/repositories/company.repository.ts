// Placeholder for src/repositories/company.repository.ts
import { prisma } from "@/lib/prisma";

export const companyRepository = {
  async create(data: {
    name: string;
    email?: string;
    phone?: string;
    address?: string;
  }) {
    return prisma.company.create({
      data
    });
  },

  async findAll() {
    return prisma.company.findMany({
      orderBy: { createdAt: "desc" }
    });
  },

  async findById(id: string) {
    return prisma.company.findUnique({
      where: { id }
    });
  },

  async update(id: string, data: any) {
    return prisma.company.update({
      where: { id },
      data
    });
  },

  async delete(id: string) {
    return prisma.company.delete({
      where: { id }
    });
  }
};
