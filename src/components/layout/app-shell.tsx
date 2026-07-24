import { ReactNode } from "react";
import AppSidebar from "./app-sidebar";
import AppHeader from "./app-header";


interface Props {
    children: ReactNode;
}


export default function AppShell({
    children
}: Props) {


return (

<div className="
min-h-screen
bg-muted/40
flex
">


<AppSidebar />


<div className="
flex-1
flex
flex-col
">


<AppHeader />


<main className="
flex-1
p-4
md:p-6
">

{children}

</main>


</div>


</div>

)

}