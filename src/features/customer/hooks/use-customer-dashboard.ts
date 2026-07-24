"use client";


import { useQuery } from "@tanstack/react-query";


async function fetchDashboard(){


const response =
await fetch(
"/api/customers/dashboard"
);


return response.json();


}



export function useCustomerDashboard(){


return useQuery({

queryKey:[
"customer-dashboard"
],

queryFn:
fetchDashboard

});


}