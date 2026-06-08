import { NextResponse } from "next/server";
import { billingService } from "@/services/billing.service";

export async function POST(req: Request) {
  const body = await req.json();

  const session = await billingService.createCheckoutSession(
    body.companyId
  );

  return NextResponse.json({ url: session.url });
}