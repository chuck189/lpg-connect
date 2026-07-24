"use client"

import {
BarChart,
Bar,
XAxis,
YAxis,
Tooltip,
ResponsiveContainer
}
from "recharts";


const data=[
{
month:"Jan",
sales:12000
},
{
month:"Feb",
sales:18000
},
{
month:"Mar",
sales:15000
},
{
month:"Apr",
sales:24000
},
{
month:"May",
sales:30000
}
];


export default function SalesChart(){

return (

<div className="
rounded-xl
border
bg-white
p-6
">


<h3 className="
font-semibold
mb-5
">
Monthly Sales
</h3>


<div className="h-[300px]">

<ResponsiveContainer
width="100%"
height="100%"
>

<BarChart data={data}>

<XAxis
dataKey="month"
/>

<YAxis/>

<Tooltip/>

<Bar
dataKey="sales"
/>

</BarChart>


</ResponsiveContainer>

</div>


</div>

)

}