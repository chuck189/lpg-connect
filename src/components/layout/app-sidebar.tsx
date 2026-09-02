"use client";

import Link from "next/link";
import {
Home,
ShoppingCart,
Package,
Users,
Truck,
Wallet,
BarChart3,
Settings
} from "lucide-react";

const navigation = [
{
name:"LPG Connect Operations Center",
href:"/supplier/dashboard",
icon:Home
},
{
name:"Orders",
href:"#",
icon:ShoppingCart
},
{
name:"Inventory",
href:"#",
icon:Package
},
{
name:"Customers",
href:"#",
icon:Users
},
{
name:"Deliveries",
href:"#",
icon:Truck
},
{
name:"Analytics",
href:"#",
icon:BarChart3
},
{
name:"Wallet",
href:"#",
icon:Wallet
},
{
name:"Settings",
href:"#",
icon:Settings
}
];

export default function AppSidebar(){

return (
<aside className="
hidden
md:flex
w-64
flex-col
border-r
bg-background
">

<div className="
h-16
flex
items-center
px-6
font-bold
text-xl
">
🔥 LPG Connect
</div>

<nav className="
flex-1
px-4
space-y-2
">
{
navigation.map((item)=>{
const Icon=item.icon;
return (
<Link
key={item.name}
href={item.href}
className="
flex
items-center
gap-3
rounded-lg
px-3
py-2
text-sm
hover:bg-muted
transition
"
>
<Icon size={18}/>
{item.name}
</Link>
)
})
}
</nav>
</aside>
)
}
