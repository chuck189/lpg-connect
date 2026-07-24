import { prisma } from "@/lib/prisma";


export async function getCustomerDashboard(
customerId:string
){


const customer =
await prisma.customer.findUnique({

where:{
id:customerId
},

include:{

orders:true,

usageLogs:true,

score:true

}

});


if(!customer){

throw new Error(
"Customer not found"
);

}



return {

customer:{
id:customer.id,
type:customer.type
},


orders:
customer.orders.length,


totalSpent:
customer.orders.reduce(
(sum,order)=>sum+order.totalAmount,
0
),


usage:
customer.usageLogs.reduce(
(sum,log)=>sum+log.quantity,
0
),


loyalty:
customer.score?.loyaltyScore ?? 0


};


}