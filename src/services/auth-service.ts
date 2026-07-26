import bcrypt from "bcrypt";
import { prisma } from "@/lib/prisma";

interface RegisterInput {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  password: string;
  role?: "CUSTOMER" | "OWNER" | "MANAGER" | "DRIVER" | "ADMIN" | "SUPER_ADMIN";
}

export async function registerUser(data: RegisterInput) {
  const existing = await prisma.user.findUnique({
    where: {
      email: data.email,
    },
  });

  if (existing) {
    throw new Error("User already exists");
  }

  const hashedPassword = await bcrypt.hash(data.password, 12);

  const user = await prisma.user.create({
    data: {
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      phone: data.phone,
      password: hashedPassword,
      role: data.role ?? "CUSTOMER",
    },
  });

  return user;
}
