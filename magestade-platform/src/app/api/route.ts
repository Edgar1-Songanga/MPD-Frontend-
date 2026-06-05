import { NextResponse } from "next/server";
import { candidateService } from "@/services/candidate.service";

export async function GET(
  req: Request,
  { params }: { params: { id: string } }
) {
  const data = await candidateService.getCandidate(params.id);
  return NextResponse.json(data);
}

export async function PUT(
  req: Request,
  { params }: { params: { id: string } }
) {
  const body = await req.json();

  const updated = await candidateService.updateCandidate(
    params.id,
    body
  );

  return NextResponse.json(updated);
}

export async function DELETE(
  req: Request,
  { params }: { params: { id: string } }
) {
  await candidateService.deleteCandidate(params.id);

  return NextResponse.json({ success: true });
}
