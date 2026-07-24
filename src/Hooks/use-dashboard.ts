"use client";


import { useEffect,useState } from "react";


export function useDashboard(){


const [data,setData]=useState(null);



useEffect(()=>{


fetch(
"/api/customers/dashboard"
)

.then(res=>res.json())

.then(result=>{

setData(result.data);

});


},[]);



return data;


}