import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  console.log('Seeding database...')

  const company = await prisma.company.create({
    data: {
      name: 'Acme Corporation',
      legalName: 'Acme Corporation Ltd',
      country: 'AO',
      taxId: 'TAX123456789',
      email: 'info@acme.ao',
      phone: '+244 222 123 456',
    }
  })

  const employee = await prisma.employee.create({
    data: {
      companyId: company.id,
      firstName: 'João',
      lastName: 'Silva',
      email: 'joao@acme.ao',
      phone: '+244 912 345 678',
      ssn: '12345678901234',
      dateOfBirth: new Date('1990-01-15'),
      department: 'Engineering',
      jobTitle: 'Software Engineer',
      startDate: new Date('2024-01-01'),
    }
  })

  console.log(`✓ Created company: ${company.name}`)
  console.log(`✓ Created employee: ${employee.firstName} ${employee.lastName}`)
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
