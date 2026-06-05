// Placeholder for src/repositories/application.repository.ts
import { prisma } from "@/lib/prisma";

export const applicationRepository = {
  async create(data: any) {
    return prisma.application.create({ data });
  },

  async findAll(companyId: string) {
    return prisma.application.findMany({
      where: {
        job: {
          companyId
        }
      },
      include: {
        candidate: true,
        job: true
      },
      orderBy: {
        createdAt: "desc"
      }
    });
  },

  async findById(id: string) {
    return prisma.application.findUnique({
      where: { id },
      include: {
        candidate: true,
        job: true
      }
    });
  },

  async updateStatus(id: string, status: string) {
    return prisma.application.update({
      where: { id },
      data: { status }
    });
  },

  async delete(id: string) {
    return prisma.application.delete({
      where: { id }
    });
  }
};
