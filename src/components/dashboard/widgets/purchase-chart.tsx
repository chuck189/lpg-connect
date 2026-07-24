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
amount:500
},
{
month:"Feb",
amount:800
},
{
month:"Mar",
amount:650
},
{
month:"Apr",
amount:950
}
];


export default function PurchaseChart(){

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
Monthly Spending
</h3>


<div className="h-[300px]">

<ResponsiveContainer
width="100%"
height="100%"
>


<BarChart data={data}>


<XAxis dataKey="month"/>


<YAxis/>


<Tooltip/>


<Bar
dataKey="amount"
/>


</BarChart>


</ResponsiveContainer>


</div>


</div>

)

}