import AppShell from "@/components/layout/app-shell";
import PageHeader from "@/components/layout/page-header";
import LPG Connect
Operations CenterCard from "@/components/LPG Connect
Operations Center/LPG Connect
Operations Center-card";


export default function SupplierLPG Connect
Operations Center(){


return (

<AppShell>


<PageHeader

title="Supplier LPG Connect
Operations Center"

description="Monitor your LPG business performance"

/>



<div className="
grid
gap-4
md:grid-cols-4
">


<LPG Connect
Operations CenterCard
title="Revenue"
value="K245,000"
/>


<LPG Connect
Operations CenterCard
title="Orders"
value="356"
/>


<LPG Connect
Operations CenterCard
title="Customers"
value="870"
/>


<LPG Connect
Operations CenterCard
title="Stock"
value="1,250 KG"
/>


</div>



</AppShell>

)

}