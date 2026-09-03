import { NextResponse } from "next/server";
import { registerSupplier } from "@/features/suppliers/services/register-supplier";
import { prisma } from "@/lib/prisma";
import bcrypt from "bcrypt";
import { UserRole } from "@/generated/prisma";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { role, ...data } = body;

    if (role === "SUPPLIER") {
      const supplier = await registerSupplier(data as any);
      return NextResponse.json({ success: true, data: supplier });
    }

    const existingUser = await prisma.user.findUnique({
      where: { email: data.email }
    });

    if (existingUser) {
      return NextResponse.json({ success: false, error: "Email already registered" }, { status: 400 });
    }

    const passwordHash = await bcrypt.hash(data.password, 12);

    const userRole = Object.values(UserRole).includes(role as UserRole)
      ? (role as UserRole)
      : UserRole.CUSTOMER;

    const user = await prisma.user.create({
      data: {
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        phone: data.phone,
        password: passwordHash,
        role: userRole,
        ...(userRole === UserRole.CUSTOMER && {
          customer: {
            create: {}
          }
        })
      },
      include: {
        customer: true
      }
    });

    // Don't return password hash
    const { password: _, ...userWithoutPassword } = user;

    return NextResponse.json({ success: true, data: userWithoutPassword });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
