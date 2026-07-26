"use client";

import DashboardShell from "@/components/dashboard/dashboard-shell";

import StatCard from "@/components/dashboard/widgets/stat-card";
import { UsageChart } from "@/components/dashboard/widgets/usage-chart";
import { InventoryStatus } from "@/components/dashboard/widgets/inventory-status";
import PurchaseChart from "@/components/dashboard/widgets/purchase-chart";
import QuickActions from "@/components/dashboard/widgets/quick-actions";

// import { getDashboardStats } from "@/services/dashboard.service";

export default async function DashboardPage(){
  // const stats = await getDashboardStats();  
  return (
    <DashboardShell>
      <div className="space-y-8">

        {/* Dashboard Header */}
        <div>
          <h1 className="text-3xl font-bold tracking-tight">
            Good Morning, Customer
          </h1>

          <p className="text-muted-foreground mt-2">
            Monitor your LPG usage, purchases, and deliveries.
          </p>
        </div>


        {/* Statistics */}
        <div
          className="
            grid
            gap-6
            md:grid-cols-2
            xl:grid-cols-4
          "
        >

          <StatCard
            title="Gas Remaining"
            value="65%"
            subtitle="Estimated cylinder level"
            value={String(stats.products)}
          />

          <StatCard
          title="Products"
          subtitle="Estimated cylinder level"
          value={String(stats.products)}
          />

          <StatCard
          title="Registered Suppliers"
          subtitle="Estimated cylinder level"
          value={String(stats.suppliers)}
          />

          <StatCard
          title="Active Customers"
          subtitle="Estimated cylinder level"
          value={String(stats.customers)}
          />

          <StatCard
          title="Today's Orders"
          subtitle="Estimated cylinder level"
          value={String(stats.ordersToday)}
          />

          <StatCard
            title="Monthly Spending"
            value="K850"
            subtitle="July consumption"
            value={String(stats.spending)}
          />

          <StatCard
            title="Suppliers"
            value="K850"
            subtitle="July consumption"
            value={String(stats.supplier)}
          />

          {/* <StatCard
            title="Orders"
            value="24"
            subtitle="Completed orders"
            value={String(stats.orders)}
          /> */}

        </div>

        <div className="grid gap-6 lg:grid-cols-2">

        <InventoryStatus />

        <QuickActions />

        </div>


        {/* Charts */}
        <div
          className="
            grid
            gap-6
            xl:grid-cols-2
          "
        >

          <UsageChart />

          <PurchaseChart />

        </div>


        {/* Actions */}
        <div>
          <QuickActions />
        </div>


      </div>
    </DashboardShell>
  );
}