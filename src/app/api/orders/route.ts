import { NextResponse } from "next/server";
import { createOrder } from "@/services/order.service";


export async function POST(
request:Request
){


const body =
await request.json();



const order =
await createOrder(body);



return NextResponse.json({

success:true,

data:order

});


}
