"use client";

import DashboardShell from "@/components/dashboard/dashboard-shell";
import { consumerNavigation } from "@/config/navigation";

import StatCard from "@/components/dashboard/widgets/stat-card";
import UsageChart from "@/components/dashboard/widgets/usage-chart";
import PurchaseChart from "@/components/dashboard/widgets/purchase-chart";
import QuickActions from "@/components/dashboard/widgets/quick-actions";


export default function Dashboard() {

  return (

    <DashboardShell items={consumerNavigation}>

      <h1 className="text-3xl font-bold mb-6">
        Good Morning, Customer
      </h1>


      <div className="
        grid
        md:grid-cols-2
        xl:grid-cols-4
        gap-6
        mb-8
      ">

        <StatCard
          title="Gas Remaining"
          value="65%"
          subtitle="Estimated level"
        />

        <StatCard
          title="Next Refill"
          value="12 Days"
          subtitle="Based on usage"
        />

        <StatCard
          title="Monthly Spending"
          value="K850"
          subtitle="July"
        />

        <StatCard
          title="Orders"
          value="24"
          subtitle="Completed"
        />

      </div>


      <div className="
        grid
        xl:grid-cols-2
        gap-6
      ">

        <UsageChart />

        <PurchaseChart />

      </div>


      <div className="mt-6">

        <QuickActions />

      </div>


    </DashboardShell>

  );
}