// Placeholder for src/app/api/candidates/route.ts
import { NextResponse } from "next/server";
import { candidateService } from "@/services/candidate.service";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const companyId = searchParams.get("companyId");

  if (!companyId) {
    return NextResponse.json(
      { error: "companyId required" },
      { status: 400 }
    );
  }

  const data = await candidateService.getCandidates(companyId);

  return NextResponse.json(data);
}

export async function POST(req: Request) {
  const body = await req.json();

  const candidate = await candidateService.createCandidate(body);

  return NextResponse.json(candidate);
}
