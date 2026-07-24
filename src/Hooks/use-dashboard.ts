"use client";


import { useEffect,useState } from "react";


export function useLPG Connect
Operations Center(){


const [data,setData]=useState(null);



useEffect(()=>{


fetch(
"/api/customers/LPG Connect
Operations Center"
)

.then(res=>res.json())

.then(result=>{

setData(result.data);

});


},[]);



return data;


}