import { NextResponse } from "next/server";

const leads: any[] = [];

export async function POST(req: Request) {
  const body = await req.json();

  leads.push({
    email: body.email,
    createdAt: new Date()
  });

  return NextResponse.json({ success: true });
}

export async function GET() {
  return NextResponse.json(leads);
}