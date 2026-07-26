import AppShell from "@/components/layout/app-shell";
import PageHeader from "@/components/layout/page-header";
import SupplierStatCard from "@/components/supplier/supplier-stat-card";
import { prisma } from "@/lib/prisma";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/lib/auth";

export default async function SupplierDashboardPage() {
  const session = await getServerSession(authOptions as any);

  // Determine organizationId from user session
  const userId = session?.user?.id as string | undefined;

  let organizationId: string | undefined = undefined;

  if (userId) {
    const user = await prisma.user.findUnique({ where: { id: userId } });
    organizationId = user?.organizationId ?? undefined;
  }

  // Fallback: if no organizationId, show platform-level defaults
  const ordersCount = organizationId
    ? await prisma.order.count({ where: { organizationId } })
    : await prisma.order.count();

  const customersCount = organizationId
    ? await prisma.customer.count({ where: { organizationId } })
    : await prisma.customer.count();

  const inventorySumResult = organizationId
    ? await prisma.inventory.aggregate({ where: { organizationId }, _sum: { quantity: true } })
    : await prisma.inventory.aggregate({ _sum: { quantity: true } });

  const inventoryTotal = inventorySumResult._sum.quantity ?? 0;

  const revenue = organizationId
    ? await prisma.order.aggregate({ where: { organizationId }, _sum: { totalAmount: true } })
    : await prisma.order.aggregate({ _sum: { totalAmount: true } });

  const totalRevenue = revenue._sum.totalAmount ?? 0;

  return (
    <AppShell>
      <PageHeader title="Supplier LPG Connect Operations Center" description="Monitor your LPG business performance" />

      <div className="grid gap-4 md:grid-cols-4">
        <SupplierStatCard title="Revenue" value={`K${totalRevenue}`} description="Total revenue" />
        <SupplierStatCard title="Orders" value={`${ordersCount}`} description="Orders processed" />
        <SupplierStatCard title="Customers" value={`${customersCount}`} description="Active customers" />
        <SupplierStatCard title="Stock" value={`${inventoryTotal} KG`} description="Current inventory level" />
      </div>
    </AppShell>
  );
}
