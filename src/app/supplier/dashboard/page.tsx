import AppShell from "@/components/layout/app-shell";
import PageHeader from "@/components/layout/page-header";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

export default async function SupplierDashboardPage() {
  const session = await getServerSession(authOptions as any) as any;
  const userId = session?.user?.id as string | undefined;

  let organizationId: string | undefined = undefined;

  if (userId) {
    const user = await prisma.user.findUnique({
      where: { id: userId },
      select: { organizationId: true },
    });
    organizationId = user?.organizationId || undefined;
  }

  const products = organizationId
    ? await prisma.product.count({ where: { } })
    : 0;

  const orders = organizationId
    ? await prisma.order.count({ where: { organizationId } })
    : 0;

  const amountResult = organizationId
    ? await prisma.order.aggregate({
        where: { organizationId },
        _sum: { totalAmount: true },
      })
    : { _sum: { totalAmount: 0 } };

  const revenue = amountResult._sum.totalAmount ?? 0;

  return (
    <AppShell>
      <PageHeader title="Supplier Dashboard" description="Monitor your LPG business performance" />

      <div className="grid gap-4 md:grid-cols-3">
        <div className="rounded-xl border p-5">
          <h3 className="text-sm text-muted-foreground">Total Products</h3>
          <p className="text-3xl font-bold">{products}</p>
        </div>
        <div className="rounded-xl border p-5">
          <h3 className="text-sm text-muted-foreground">Total Orders</h3>
          <p className="text-3xl font-bold">{orders}</p>
        </div>
        <div className="rounded-xl border p-5">
          <h3 className="text-sm text-muted-foreground">Revenue</h3>
          <p className="text-3xl font-bold">K{revenue.toFixed(2)}</p>
        </div>
      </div>
    </AppShell>
  );
}
