export type Role =
  | "ADMIN"
  | "HR"
  | "CLIENT"
  | "USER";

type Resource =
  | "dashboard"
  | "candidates"
  | "jobs"
  | "companies"
  | "applications"
  | "contracts"
  | "billing"
  | "settings";

const permissions: Record<Role, Resource[]> = {
  ADMIN: [
    "dashboard",
    "candidates",
    "jobs",
    "companies",
    "applications",
    "contracts",
    "billing",
    "settings",
  ],

  HR: [
    "dashboard",
    "candidates",
    "jobs",
    "applications",
  ],

  CLIENT: [
    "dashboard",
    "applications",
    "contracts",
  ],

  USER: [],
};

export function hasPermission(
  role: Role,
  resource: Resource
) {
  return permissions[role]?.includes(resource);
}
