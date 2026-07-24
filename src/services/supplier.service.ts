import { prisma } from "@/lib/prisma";


export async function getSupplierDashboard(
organizationId:string
){


const organization =
await prisma.organization.findUnique({

where:{
id:organizationId
},

include:{

orders:true,

branches:{
include:{
inventories:true
}
},

analytics:true

}

});



if(!organization){

throw new Error(
"Supplier not found"
);

}



return {


supplier:{
id:organization.id,
name:organization.name
},


orders:
organization.orders.length,


completedOrders:
organization.analytics
?.completedOrders ?? 0,


branches:
organization.branches.length,


inventory:

organization.branches.reduce(

(total,branch)=>

total+
branch.inventories.reduce(
(sum,item)=>sum+item.quantity,
0
),

0

)

};


}