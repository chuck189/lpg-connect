"use client";

import DashboardShell from "@/components/dashboard/dashboard-shell";

import StatCard from "@/components/dashboard/widgets/stat-card";
import UsageChart from "@/components/dashboard/widgets/usage-chart";
import PurchaseChart from "@/components/dashboard/widgets/purchase-chart";
import QuickActions from "@/components/dashboard/widgets/quick-actions";

export default function Dashboard() {
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
          />

          <StatCard
            title="Next Refill"
            value="12 Days"
            subtitle="Based on current usage"
          />

          <StatCard
            title="Monthly Spending"
            value="K850"
            subtitle="July consumption"
          />

          <StatCard
            title="Orders"
            value="24"
            subtitle="Completed orders"
          />

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