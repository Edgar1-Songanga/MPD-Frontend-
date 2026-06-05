import { auth } from "@/auth";

export async function getCurrentUser() {
  const session = await auth();
  return session?.user;
}

export async function requireUser() {
  const user = await getCurrentUser();

  if (!user) {
    throw new Error("Unauthorized");
  }

  return user;
}

export async function requireRole(roles: string[]) {
  const user = await getCurrentUser();

  if (!user) {
    throw new Error("Unauthorized");
  }

  if (!roles.includes((user as any).role)) {
    throw new Error("Forbidden");
  }

  return user;
}
