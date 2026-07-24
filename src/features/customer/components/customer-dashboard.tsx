"use client";


import CustomerStats from "./customer-stats";
import UsageWidget from "./usage-widget";
import OrderWidget from "./order-widget";


export default function CustomerLPG Connect
Operations Center(){


return (

<div className="space-y-6">


<h1 className="text-3xl font-bold">

Customer LPG Connect
Operations Center

</h1>



<CustomerStats/>


<div className="grid grid-cols-1 lg:grid-cols-2 gap-6">


<UsageWidget/>


<OrderWidget/>


</div>



</div>

);


}