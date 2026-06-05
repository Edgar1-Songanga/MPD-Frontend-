// Placeholder for prisma/seed.ts
import { PrismaClient, Role } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

async function main() {
  const passwordHash = await bcrypt.hash("Admin@123", 12);

  const company = await prisma.company.upsert({
    where: {
      id: "default-company"
    },
    update: {},
    create: {
      id: "default-company",
      name: "Magestade Pura Digital"
    }
  });

  await prisma.user.upsert({
    where: {
      email: "admin@magestade.local"
    },
    update: {},
    create: {
      name: "System Administrator",
      email: "admin@magestade.local",
      passwordHash,
      role: Role.ADMIN,
      companyId: company.id
    }
  });

  console.log("Seed completed.");
}

main()
  .catch(console.error)
  .finally(async () => {
    await prisma.$disconnect();
  });
