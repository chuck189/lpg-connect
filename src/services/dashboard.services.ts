import { prisma } from "@/lib/prisma";

export async function getDashboardStats() {
  const [
    orders,
    customers,
    suppliers,
    products,
  ] = await Promise.all([
    prisma.order.count(),
    prisma.customer.count(),
    prisma.supplier.count(),
    prisma.product.count(),
  ]);

  return {
    orders,
    customers,
    suppliers,
    products,
  };
}