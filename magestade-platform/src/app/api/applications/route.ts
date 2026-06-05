// Placeholder for src/app/api/applications/route.ts
import { NextResponse } from "next/server";
import { applicationService } from "@/services/application.service";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const companyId = searchParams.get("companyId");

  if (!companyId) {
    return NextResponse.json(
      { error: "companyId required" },
      { status: 400 }
    );
  }

  const data = await applicationService.getApplications(companyId);

  return NextResponse.json(data);
}

export async function POST(req: Request) {
  const body = await req.json();

  const application = await applicationService.createApplication(body);

  return NextResponse.json(application);
}
