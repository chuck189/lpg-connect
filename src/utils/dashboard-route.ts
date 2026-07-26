import { UserRole } from "@/generated/prisma";

export function getDashboardRoute(role: UserRole | string) {
  switch (role) {
    case "CUSTOMER":
      return "/customer";
    case "OWNER":
    case "MANAGER":
      return "/supplier";
    case "DRIVER":
      return "/driver";
    case "ADMIN":
    case "SUPER_ADMIN":
      return "/admin";
    default:
      return "/";
  }
}
