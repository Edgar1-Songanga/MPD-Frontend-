// Placeholder for src/app/api/companies/route.ts
import { NextResponse } from "next/server";
import { companyService } from "@/services/company.service";

export async function GET() {
  const companies = await companyService.getCompanies();
  return NextResponse.json(companies);
}

export async function POST(req: Request) {
  const body = await req.json();

  const company = await companyService.createCompany(body);

  return NextResponse.json(company);
}
