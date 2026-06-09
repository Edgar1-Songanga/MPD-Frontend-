import { NextResponse } from "next/server";
import { dashboardService } from "@/services/dashboard.service";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const companyId = searchParams.get("companyId");

  if (!companyId) {
    return NextResponse.json(
      { error: "companyId required" },
      { status: 400 }
    );
  }

  const stats = await dashboardService.getStats(companyId);

  return NextResponse.json(stats);
}
