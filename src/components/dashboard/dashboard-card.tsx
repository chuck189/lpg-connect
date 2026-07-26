import { LucideIcon } from "lucide-react";


interface StatCardProps {

 title:string;

 value:string;

 description:string;

 icon:LucideIcon;

}


export function StatCard({

 title,

 value,

 description,

 icon:Icon,

}:StatCardProps){


return (

<div
className="
rounded-xl
border
bg-card
p-5
shadow-sm
"
>


<div className="flex items-center justify-between">


<div>

<p className="text-sm text-muted-foreground">

{title}

</p>


<h2 className="mt-2 text-3xl font-bold">

{value}

</h2>


<p className="mt-1 text-xs text-muted-foreground">

{description}

</p>


</div>


<div
className="
rounded-lg
bg-primary/10
p-3
"
>

<Icon size={24}/>

</div>


</div>


</div>

)


}