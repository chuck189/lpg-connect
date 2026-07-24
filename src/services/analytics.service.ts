import { prisma } from "@/lib/prisma";

export async function getSalesTrend(organizationId: string) {
  const orders = await prisma.order.findMany({
    where: {
      organizationId,
    },
    include: {
      payments: true,
    },
    orderBy: {
      createdAt: "asc",
    },
  });

  return orders;
}