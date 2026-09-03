import { NextResponse, NextRequest } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(
  request: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  try {
    const params = await context.params;
    const { driverId, vehicleId } = await request.json();

    const delivery = await prisma.delivery.update({
      where: { id: params.id },
      data: {
        driverId,
        vehicleId,
        status: "ASSIGNED"
      }
    });

    return NextResponse.json({ success: true, data: delivery });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
