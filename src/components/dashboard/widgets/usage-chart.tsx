"use client"

import {
LineChart,
Line,
XAxis,
YAxis,
Tooltip,
ResponsiveContainer
} from "recharts";


const data=[
{
month:"Jan",
usage:20
},
{
month:"Feb",
usage:35
},
{
month:"Mar",
usage:28
},
{
month:"Apr",
usage:42
},
{
month:"May",
usage:30
}
];


export default function UsageChart(){

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
LPG Usage Trend
</h3>


<div className="
h-[300px]
">

<ResponsiveContainer
width="100%"
height="100%"
>

<LineChart data={data}>


<XAxis dataKey="month"/>


<YAxis/>


<Tooltip/>


<Line
type="monotone"
dataKey="usage"
strokeWidth={3}
/>


</LineChart>


</ResponsiveContainer>

</div>


</div>

)

}