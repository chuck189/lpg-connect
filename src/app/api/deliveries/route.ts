import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

// Create a delivery for an order (usually when order is CONFIRMED)
export async function POST(request: Request) {
  try {
    const { orderId, deliveryAddress } = await request.json();

    // Check if order exists
    const order = await prisma.order.findUnique({
      where: { id: orderId }
    });

    if (!order) {
      return NextResponse.json({ success: false, error: "Order not found" }, { status: 404 });
    }

    const delivery = await prisma.delivery.create({
      data: {
        orderId,
        deliveryAddress: deliveryAddress || "TBD", // Should normally come from customer checkout
        status: "PENDING"
      }
    });

    return NextResponse.json({ success: true, data: delivery });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
