import { prisma } from "@/lib/prisma";

export async function getSupplierDashboard(organizationId: string) {
  // Temporary implementation until authentication is connected

  const [
    totalProducts,
    totalCustomers,
    totalOrders,
    totalRevenue,
  ] = await Promise.all([
    prisma.product.count({
      where: {
        supplierProducts: {
          some: {
            organizationId,
          },
        },
      },
    }),

    prisma.customer.count(),

    prisma.order.count({
      where: {
        organizationId,
      },
    }),

    prisma.payment.aggregate({
      where: {
        order: {
          organizationId,
        },
      },
      _sum: {
        amount: true,
      },
    }),
  ]);

  return {
    totalProducts,
    totalCustomers,
    totalOrders,
    revenue: totalRevenue._sum.amount ?? 0,
  };
}