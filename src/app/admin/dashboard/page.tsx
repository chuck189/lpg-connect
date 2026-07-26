import AppShell from "@/components/layout/app-shell";
import PageHeader from "@/components/layout/page-header";
import { prisma } from "@/lib/prisma";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/lib/auth";

export default async function AdminDashboard() {
  const session = await getServerSession(authOptions as any);

  // Basic platform metrics
  const usersCount = await prisma.user.count();
  const orgCount = await prisma.organization.count();
  const ordersCount = await prisma.order.count();

  return (
    <AppShell>
      <PageHeader title="Admin Dashboard" description="Manage LPG Connect operations and users" />

      <div className="grid gap-4 md:grid-cols-3">
        <div className="rounded-3xl border bg-white p-6 shadow-sm">
          <h3 className="text-sm text-muted-foreground">Users</h3>
          <p className="text-2xl font-bold">{usersCount}</p>
          <p className="mt-2 text-sm text-muted-foreground">Total registered users</p>
        </div>

        <div className="rounded-3xl border bg-white p-6 shadow-sm">
          <h3 className="text-sm text-muted-foreground">Organizations</h3>
          <p className="text-2xl font-bold">{orgCount}</p>
          <p className="mt-2 text-sm text-muted-foreground">Active supplier organizations</p>
        </div>

        <div className="rounded-3xl border bg-white p-6 shadow-sm">
          <h3 className="text-sm text-muted-foreground">Orders</h3>
          <p className="text-2xl font-bold">{ordersCount}</p>
          <p className="mt-2 text-sm text-muted-foreground">Total orders on platform</p>
        </div>
      </div>
    </AppShell>
  );
}
