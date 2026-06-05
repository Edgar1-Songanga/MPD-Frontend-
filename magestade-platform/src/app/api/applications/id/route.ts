import { NextResponse } from "next/server";
import { applicationService } from "@/services/application.service";

export async function GET(
  req: Request,
  { params }: { params: { id: string } }
) {
  const data = await applicationService.getApplication(params.id);
  return NextResponse.json(data);
}

export async function PATCH(
  req: Request,
  { params }: { params: { id: string } }
) {
  const body = await req.json();

  const updated = await applicationService.updateStatus(
    params.id,
    body.status
  );

  return NextResponse.json(updated);
}

export async function DELETE(
  req: Request,
  { params }: { params: { id: string } }
) {
  await applicationService.deleteApplication(params.id);

  return NextResponse.json({ success: true });
}
