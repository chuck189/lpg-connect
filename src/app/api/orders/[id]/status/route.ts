import { NextResponse, NextRequest } from "next/server";
import { prisma } from "@/lib/prisma";
import { OrderStatus } from "@/generated/prisma";

export async function PATCH(
  request: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  try {
    const params = await context.params;
    const { status } = await request.json();

    if (!Object.values(OrderStatus).includes(status as OrderStatus)) {
      return NextResponse.json({ success: false, error: "Invalid status" }, { status: 400 });
    }

    const order = await prisma.order.update({
      where: { id: params.id },
      data: { status }
    });

    return NextResponse.json({ success: true, data: order });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: "Failed to update order status" }, { status: 500 });
  }
}
