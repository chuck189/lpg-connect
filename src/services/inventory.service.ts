import { prisma } from "@/lib/prisma";


export async function getInventory(
branchId:string
){


return prisma.inventory.findMany({

where:{
branchId
},

include:{
product:true
}

});


}