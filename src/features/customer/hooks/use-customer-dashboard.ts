"use client";


import { useQuery } from "@tanstack/react-query";


async function fetchDashboard(){


const response =
await fetch(
"/api/customers/Dashboard"
);


return response.json();


}



export function useCustomerDashboard(){


return useQuery({

queryKey:[
"customer-Dashboard"
],

queryFn:
fetchDashboard

});


}