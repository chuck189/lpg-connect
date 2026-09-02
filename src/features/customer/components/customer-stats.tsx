"use client";


import { useCustomerDashboard } from "../hooks/use-customer-dashboard";


export default function CustomerStats(){


const {
data,
isLoading

}=useCustomerDashboard();



if(isLoading){

return <div>
Loading...
</div>

}



const Dashboard=data.data;



return (

<div className="grid grid-cols-1 md:grid-cols-3 gap-4">


<div className="rounded-xl border p-5">

<h3>
Orders
</h3>

<p className="text-3xl font-bold">

{Dashboard.orders}

</p>

</div>



<div className="rounded-xl border p-5">

<h3>
Total LPG Used
</h3>

<p className="text-3xl font-bold">

{Dashboard.usage}

</p>

</div>



<div className="rounded-xl border p-5">

<h3>
Loyalty Score
</h3>

<p className="text-3xl font-bold">

{Dashboard.loyalty}

</p>

</div>


</div>

);


}