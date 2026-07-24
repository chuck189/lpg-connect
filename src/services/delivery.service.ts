import { prisma } from "@/lib/prisma";


export async function assignDelivery(
orderId:string,
driverId:string
){


return prisma.delivery.create({

data:{


orderId,

driverId,

status:"ASSIGNED",

deliveryAddress:"Pending"

}

});


}