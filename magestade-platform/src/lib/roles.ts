export const ROLES = {
  ADMIN: "ADMIN",
  HR: "HR",
  CLIENT: "CLIENT",
  USER: "USER"
} as const;

export type Role = keyof typeof ROLES;
