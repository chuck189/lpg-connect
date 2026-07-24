"use client";


import {

BarChart,

Bar,

XAxis,

YAxis,

Tooltip,

ResponsiveContainer

} from "recharts";


const data=[

{
product:"6kg",
sales:120
},

{
product:"12.5kg",
sales:350
},

{
product:"15kg",
sales:210
},

{
product:"48kg",
sales:80
}

];


export default function ProductChart(){


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

Cylinder Performance

</h3>



<div className="
h-72
">


<ResponsiveContainer
width="100%"
height="100%"
>


<BarChart data={data}>


<XAxis dataKey="product"/>


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