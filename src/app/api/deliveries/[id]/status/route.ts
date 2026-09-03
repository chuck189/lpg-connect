import { NextResponse, NextRequest } from "next/server";
import { prisma } from "@/lib/prisma";
import { DeliveryStatus, OrderStatus } from "@/generated/prisma";

export async function PATCH(
  request: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  try {
    const params = await context.params;
    const { status } = await request.json();

    if (!Object.values(DeliveryStatus).includes(status as DeliveryStatus)) {
      return NextResponse.json({ success: false, error: "Invalid status" }, { status: 400 });
    }

    const result = await prisma.$transaction(async (tx) => {
      const delivery = await tx.delivery.update({
        where: { id: params.id },
        data: { status }
      });

      if (status === "DELIVERED") {
         await tx.order.update({
            where: { id: delivery.orderId },
            data: { status: "DELIVERED" }
         });
      }

      return delivery;
    });

    return NextResponse.json({ success: true, data: result });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
