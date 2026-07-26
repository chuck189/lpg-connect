import AppShell from "@/components/layout/app-shell";
import PageHeader from "@/components/layout/page-header";
import { prisma } from "@/lib/prisma";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/lib/auth";

export default async function DriverDashboard() {
  const session = await getServerSession(authOptions as any);
  const userId = session?.user?.id as string | undefined;

  const deliveries = userId
    ? await prisma.delivery.findMany({ where: { driverId: userId }, orderBy: { createdAt: "desc" }, take: 10 })
    : [];

  return (
    <AppShell>
      <PageHeader title="Driver Dashboard" description="View assigned deliveries and route details" />
      <div className="space-y-6">
        <div className="rounded-3xl border bg-white p-6 shadow-sm">
          <h2 className="text-xl font-semibold">Assigned deliveries</h2>
          <p className="mt-2 text-sm text-muted-foreground">{deliveries.length} active deliveries</p>
        </div>
        <div className="rounded-3xl border bg-white p-6 shadow-sm">
          <h2 className="text-xl font-semibold">Route overview</h2>
          <div className="mt-2 space-y-2">
            {deliveries.length === 0 ? (
              <p className="text-sm text-muted-foreground">No assigned deliveries</p>
            ) : (
              deliveries.map((d) => (
                <div key={d.id} className="p-2 border rounded">
                  <p className="font-medium">Delivery #{d.id}</p>
                  <p className="text-sm text-muted-foreground">Status: {d.status}</p>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </AppShell>
  );
}
