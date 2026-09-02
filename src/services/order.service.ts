import { prisma } from "@/lib/prisma";

export async function createOrder(data:any){

  return prisma.order.create({
    data:{
      orderNumber: data.orderNumber || `ORD-${Date.now()}`,
      organizationId: data.organizationId,
      customerId: data.customerId,
      subtotal: data.totalAmount || 0,
      totalAmount: data.totalAmount,
      status:"PENDING"
    }
  });

}
