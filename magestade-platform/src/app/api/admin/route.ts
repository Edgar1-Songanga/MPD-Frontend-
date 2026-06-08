import { NextResponse } from "next/server";
import { adminService } from "@/services/admin.service";

export async function GET() {
  const stats = await adminService.getSystemStats();
  return NextResponse.json(stats);
}