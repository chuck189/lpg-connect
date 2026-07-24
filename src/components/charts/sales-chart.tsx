"use client";

import {
LineChart,
Line,
XAxis,
YAxis,
CartesianGrid,
Tooltip,
ResponsiveContainer
} from "recharts";


const data = [

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
sales:24000
},

{
month:"Apr",
sales:32000
},

{
month:"May",
sales:45000
}

];


export default function SalesChart(){


return (

<div className="
rounded-xl
border
bg-background
p-5
">


<h3 className="
font-semibold
mb-4
">

Sales Performance

</h3>


<div className="
h-72
">


<ResponsiveContainer
width="100%"
height="100%"
>


<LineChart data={data}>


<CartesianGrid
strokeDasharray="3 3"
/>


<XAxis dataKey="month"/>


<YAxis/>


<Tooltip/>


<Line
type="monotone"
dataKey="sales"
strokeWidth={3}
/>


</LineChart>


</ResponsiveContainer>


</div>


</div>

)

}