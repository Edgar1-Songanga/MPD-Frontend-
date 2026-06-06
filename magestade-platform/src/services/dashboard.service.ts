import { prisma } from "@/lib/prisma";

export const dashboardService = {
  async getStats(companyId: string) {
    const [
      totalCandidates,
      totalJobs,
      totalApplications,
      activeJobs
    ] = await Promise.all([
      prisma.candidate.count({
        where: { companyId }
      }),

      prisma.job.count({
        where: { companyId }
      }),

      prisma.application.count({
        where: {
          job: { companyId }
        }
      }),

      prisma.job.count({
        where: {
          companyId,
          isActive: true
        }
      })
    ]);

    return {
      totalCandidates,
      totalJobs,
      totalApplications,
      activeJobs
    };
  }
};
