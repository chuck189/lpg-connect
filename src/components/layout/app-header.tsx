"use client";


import {
Bell,
Search
} from "lucide-react";


export default function AppHeader(){


return (

<header className="
h-16
border-b
bg-background
flex
items-center
justify-between
px-4
md:px-6
">


<div className="
flex
items-center
gap-3
">


<div className="
relative
">


<Search
className="
absolute
left-3
top-2.5
text-muted-foreground
"
size={18}
/>


<input

placeholder="Search LPG Connect..."

className="
pl-10
h-10
rounded-lg
border
bg-background
w-60
md:w-96
"

/>


</div>


</div>



<div className="
flex
items-center
gap-4
">


<button>

<Bell size={20}/>

</button>


<div className="
h-9
w-9
rounded-full
bg-primary
text-white
flex
items-center
justify-center
text-sm
">

M

</div>


</div>


</header>

)

}