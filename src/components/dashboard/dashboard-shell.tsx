import { ReactNode } from "react";
import DashboardSidebar from "./dashboard-sidebar";
import DashboardHeader from "./dashboard-header";


interface DashboardShellProps {
children: ReactNode;
}


export default function DashboardShell({
children,
}: DashboardShellProps) {


return (

<div
className="
min-h-screen
flex
bg-muted/40
"
>


<DashboardSidebar />


<div
className="
flex-1
flex
flex-col
"
>


<DashboardHeader />


<main
className="
p-6
space-y-6
"
>

{children}

</main>


</div>


</div>

)

}