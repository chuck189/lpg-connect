import {NextResponse} from "next/server";

import {
registerSupplier
}
from "@/features/suppliers/services/register-supplier";


export async function POST(
request:Request
){

try{


const body =
await request.json();


const supplier =
await registerSupplier(body);



return NextResponse.json({

success:true,

supplierId:supplier.id

});


}
catch(error: unknown){

    const message =
    error instanceof Error
    ? error.message
    : "Something went wrong";
    
    
    return NextResponse.json(
    {
    error: message
    },
    {
    status:400
    }
    );
    
    }

}