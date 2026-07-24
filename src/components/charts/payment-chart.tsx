"use client";


import {
PieChart,
Pie,
Cell,
Tooltip,
ResponsiveContainer
} from "recharts";


const data=[

{
name:"Mobile Money",
value:55
},

{
name:"Bank",
value:30
},

{
name:"Cash",
value:15
}

];


export default function PaymentChart(){


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

Payment Methods

</h3>



<div className="
h-72
">


<ResponsiveContainer
width="100%"
height="100%"
>


<PieChart>


<Pie

data={data}

dataKey="value"

nameKey="name"

outerRadius={90}

>


{
data.map((entry,index)=>(

<Cell
key={index}
/>

))
}


</Pie>


<Tooltip/>


</PieChart>


</ResponsiveContainer>


</div>


</div>

)

}