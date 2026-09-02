import { NextResponse, NextRequest } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(
  request: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  try {
    const params = await context.params;
    const supplier = await prisma.supplierProfile.findUnique({
      where: {
        id: params.id
      },
      include: {
        organization: true,
        // Remove or replace locations if it doesn't exist on supplierProfile
        marketplaceProducts: {
          include: {
            product: true
          }
        },
        reviews: true,
        ranking: true
      }
    });

    if (!supplier) {
      return NextResponse.json(
        { success: false, error: "Supplier not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({ success: true, data: supplier });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: "Failed loading supplier" },
      { status: 500 }
    );
  }
}
