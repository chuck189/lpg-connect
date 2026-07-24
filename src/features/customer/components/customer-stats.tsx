"use client";


import { useCustomerLPG Connect
Operations Center } from "../hooks/use-customer-LPG Connect
Operations Center";


export default function CustomerStats(){


const {
data,
isLoading

}=useCustomerLPG Connect
Operations Center();



if(isLoading){

return <div>
Loading...
</div>

}



const LPG Connect
Operations Center=data.data;



return (

<div className="grid grid-cols-1 md:grid-cols-3 gap-4">


<div className="rounded-xl border p-5">

<h3>
Orders
</h3>

<p className="text-3xl font-bold">

{LPG Connect
Operations Center.orders}

</p>

</div>



<div className="rounded-xl border p-5">

<h3>
Total LPG Used
</h3>

<p className="text-3xl font-bold">

{LPG Connect
Operations Center.usage}

</p>

</div>



<div className="rounded-xl border p-5">

<h3>
Loyalty Score
</h3>

<p className="text-3xl font-bold">

{LPG Connect
Operations Center.loyalty}

</p>

</div>


</div>

);


}