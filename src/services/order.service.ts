import { prisma } from "@/lib/prisma";


export async function createOrder(data:any){


return prisma.order.create({

data:{


organizationId:
data.organizationId,


customerId:
data.customerId,


quantity:
data.quantity,


totalAmount:
data.totalAmount,


status:"PENDING"


}

});


}