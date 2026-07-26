"use client";

import Link from "next/link";

import {
  Home,
  ShoppingCart,
  Truck,
  Users,
  Package,
  BarChart3,
  Settings,
  Building2,
  CreditCard,
  MapPin,
  FileText,
} from "lucide-react";


const menu = [
  {
    name:"Dashboard",
    href:"/dashboard",
    icon:Home,
  },

  {
    name:"Marketplace",
    href:"/marketplace",
    icon:ShoppingCart,
  },

  {
    name:"Orders",
    href:"/orders",
    icon:FileText,
  },

  {
    name:"Inventory",
    href:"/inventory",
    icon:Package,
  },

  {
    name:"Suppliers",
    href:"/suppliers",
    icon:Building2,
  },

  {
    name:"Customers",
    href:"/customers",
    icon:Users,
  },

  {
    name:"Deliveries",
    href:"/deliveries",
    icon:Truck,
  },

  {
    name:"Locations",
    href:"/locations",
    icon:MapPin,
  },

  {
    name:"Payments",
    href:"/payments",
    icon:CreditCard,
  },

  {
    name:"Analytics",
    href:"/analytics",
    icon:BarChart3,
  },

  {
    name:"Settings",
    href:"/settings",
    icon:Settings,
  },
];


export default function DashboardSidebar(){

return (

<aside className="hidden md:flex w-72 border-r bg-white dark:bg-slate-950 min-h-screen flex-col">


<div className="p-6 border-b">

<h1 className="text-2xl font-bold text-green-600">LPG Connect</h1>


<p className="text-xs text-muted-foreground mt-1">Energy Management Platform</p>


</div>



<nav className="p-4 space-y-1">


{
menu.map((item)=>{


const Icon=item.icon;


return (

<Link key={item.name} href={item.href} className="flex items-center gap-3 rounded-lg px-4 py-3 text-sm transition hover:bg-green-50 hover:text-green-700">

  <Icon size={19} />

  {item.name}

</Link>


)


})
}


</nav>


</aside>


)

}