import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";


export async function GET(
request:Request,
context:{
params:{
id:string
}
}

){

try{


const supplier =
await prisma.supplierProfile.findUnique({

where:{
id:context.params.id
},

include:{

organization:true,

locations:true,

marketplaceProducts:{

include:{
product:true
}

},

reviews:true,

ranking:true

}

});



if(!supplier){

return NextResponse.json({

success:false,

error:"Supplier not found"

},
{
status:404
});

}



return NextResponse.json({

success:true,

data:supplier

});


}
catch(error){


return NextResponse.json({

success:false,

error:"Failed loading supplier"

},
{
status:500
});


}

}