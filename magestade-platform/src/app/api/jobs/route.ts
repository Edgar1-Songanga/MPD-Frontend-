// Placeholder for src/app/api/jobs/route.ts
import { NextResponse } from "next/server";
import { jobService } from "@/services/job.service";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const companyId = searchParams.get("companyId");

  if (!companyId) {
    return NextResponse.json(
      { error: "companyId required" },
      { status: 400 }
    );
  }

  const jobs = await jobService.getJobs(companyId);

  return NextResponse.json(jobs);
}

export async function POST(req: Request) {
  const body = await req.json();

  const job = await jobService.createJob(body);

  return NextResponse.json(job);
}
