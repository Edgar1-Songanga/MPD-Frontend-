import { prisma } from "@/lib/prisma";

export async function GET() {
  const jobs =
    await prisma.job.findMany();

  return Response.json(jobs);
}

export async function POST(req: Request) {
  const body = await req.json();

  const job = await prisma.job.create({
    data: {
      title: body.title,
      description: body.description,
      sector: body.sector,
    },
  });

  return Response.json(job);
}
