import { NextResponse } from "next/server";
import { loginUser } from "@/services/auth.service";


export async function POST(
request:Request
){


try{


const body =
await request.json();



const user =
await loginUser(
body.email,
body.password
);



return NextResponse.json({

success:true,

user

});


}

catch(error:any){


return NextResponse.json({

success:false,

message:error.message

},

{
status:401
});


}


}