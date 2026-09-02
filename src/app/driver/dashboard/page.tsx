import AppShell from "@/components/layout/app-shell";
import PageHeader from "@/components/layout/page-header";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

export default async function DriverDashboard() {
  const session = await getServerSession(authOptions as any) as any;
  const userId = session?.user?.id as string | undefined;

  const deliveries = userId
    ? await prisma.delivery.findMany({ where: { driverId: userId }, orderBy: { createdAt: "desc" }, take: 10 })
    : [];

  return (
    <AppShell>
      <PageHeader title="Driver Dashboard" description="Your upcoming and recent deliveries" />
      <div className="grid gap-4 mt-6">
        {deliveries.length === 0 ? (
          <p className="text-sm text-muted-foreground">No assigned deliveries.</p>
        ) : (
          deliveries.map(d => (
            <div key={d.id} className="border p-4 rounded-xl flex justify-between items-center">
              <div>
                <p className="font-medium">Delivery #{d.id}</p>
                <p className="text-sm text-muted-foreground">Status: {d.status}</p>
              </div>
            </div>
          ))
        )}
      </div>
    </AppShell>
  );
}
