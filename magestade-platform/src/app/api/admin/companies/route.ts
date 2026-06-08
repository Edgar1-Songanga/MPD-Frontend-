import { NextResponse } from "next/server";
import { adminService } from "@/services/admin.service";

export async function GET() {
  const companies = await adminService.getAllCompanies();
  return NextResponse.json(companies);
}