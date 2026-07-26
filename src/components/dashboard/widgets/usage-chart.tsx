"use client";

import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";


const data = [
  {
    month: "Jan",
    sales: 12000,
  },
  {
    month: "Feb",
    sales: 18000,
  },
  {
    month: "Mar",
    sales: 15000,
  },
  {
    month: "Apr",
    sales: 24000,
  },
  {
    month: "May",
    sales: 32000,
  },
  {
    month: "Jun",
    sales: 28000,
  },
];


export function UsageChart(){

return (

<div
className="
rounded-xl
border
bg-card
p-6
"
>

<div className="mb-5">

<h3 className="font-semibold">

LPG Sales Overview

</h3>


<p className="text-sm text-muted-foreground">

Monthly gas sales performance

</p>

</div>


<div className="h-[320px]">


<ResponsiveContainer
width="100%"
height="100%"
>


<AreaChart data={data}>


<CartesianGrid
strokeDasharray="3 3"
/>


<XAxis
dataKey="month"
/>


<YAxis />


<Tooltip />


<Area
type="monotone"
dataKey="sales"
strokeWidth={2}
/>


</AreaChart>


</ResponsiveContainer>


</div>


</div>

)

}