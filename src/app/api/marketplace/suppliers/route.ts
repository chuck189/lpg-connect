import { NextRequest, NextResponse } from "next/server";
import { searchSuppliers } from "@/services/marketplace.service";


export async function GET(
request:NextRequest
){

try{


const {searchParams}=

new URL(request.url);



const keyword =
searchParams.get("keyword")
??
undefined;



const district =
searchParams.get("district")
??
undefined;



const suppliers =
await searchSuppliers(
keyword,
district
);



return NextResponse.json({

success:true,

data:suppliers

});


}
catch (error) {
    console.error(error);
  
    return NextResponse.json(
      {
        success: false,
        error: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    );
  }

}