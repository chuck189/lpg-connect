import AppShell from "@/components/layout/app-shell";
import PageHeader from "@/components/layout/page-header";
import DashboardCard from "@/components/dashboard/dashboard-card";


export default function SupplierDashboard(){


return (

<AppShell>


<PageHeader

title="Supplier Dashboard"

description="Monitor your LPG business performance"

/>



<div className="
grid
gap-4
md:grid-cols-4
">


<DashboardCard
title="Revenue"
value="K245,000"
/>


<DashboardCard
title="Orders"
value="356"
/>


<DashboardCard
title="Customers"
value="870"
/>


<DashboardCard
title="Stock"
value="1,250 KG"
/>


</div>



</AppShell>

)

}