"use client";


import CustomerStats from "./customer-stats";
import UsageWidget from "./usage-widget";
import OrderWidget from "./order-widget";


export default function CustomerDashboard(){


return (

<div className="space-y-6">


<h1 className="text-3xl font-bold">

Customer Dashboard

</h1>



<CustomerStats/>


<div className="grid grid-cols-1 lg:grid-cols-2 gap-6">


<UsageWidget/>


<OrderWidget/>


</div>



</div>

);


}