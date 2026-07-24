"use client";


import { useQuery } from "@tanstack/react-query";


async function fetchLPG Connect
Operations Center(){


const response =
await fetch(
"/api/customers/LPG Connect
Operations Center"
);


return response.json();


}



export function useCustomerLPG Connect
Operations Center(){


return useQuery({

queryKey:[
"customer-LPG Connect
Operations Center"
],

queryFn:
fetchLPG Connect
Operations Center

});


}