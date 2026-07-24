"use client";


import { useQuery } from "@tanstack/react-query";


export function useSuppliers(
keyword?:string,
district?:string
){


return useQuery({

queryKey:[
"suppliers",
keyword,
district
],

queryFn:async()=>{


const response =
await fetch(
`/api/marketplace/suppliers?keyword=${keyword ?? ""}&district=${district ?? ""}`
);



return response.json();


}

});


}