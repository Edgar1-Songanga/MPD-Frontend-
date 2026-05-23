import { prisma } from "@/lib/prisma";

export async function GET() {
  const candidates =
    await prisma.candidate.findMany();

  return Response.json(candidates);
}

export async function POST(req: Request) {
  const body = await req.json();

  const candidate =
    await prisma.candidate.create({
      data: {
        fullName: body.fullName,
        email: body.email,
        phone: body.phone,
        skills: body.skills,
        experience: body.experience,
      },
    });

  return Response.json(candidate);
}
