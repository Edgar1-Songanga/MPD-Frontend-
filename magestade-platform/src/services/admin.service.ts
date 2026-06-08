import { prisma } from "@/lib/prisma";

export const adminService = {
  async getAllCompanies() {
    return prisma.company.findMany({
      include: {
        users: true,
        _count: {
          select: {
            candidates: true,
            jobs: true,
            contracts: true
          }
        }
      }
    });
  },

  async getAllUsers() {
    return prisma.user.findMany({
      include: {
        company: true
      }
    });
  },

  async getSystemStats() {
    const [users, companies, jobs, candidates] =
      await Promise.all([
        prisma.user.count(),
        prisma.company.count(),
        prisma.job.count(),
        prisma.candidate.count()
      ]);

    return {
      users,
      companies,
      jobs,
      candidates
    };
  },

  async deactivateCompany(companyId: string) {
    return prisma.company.update({
      where: { id: companyId },
      data: {
        name: "[DISABLED] " + companyId
      }
    });
  }
};