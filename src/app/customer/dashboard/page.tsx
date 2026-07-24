import { prisma } from "@/lib/prisma";
import { success } from "@/lib/api-response";


export async function GET(){

const customers =
await prisma.customer.count();


const orders =
await prisma.order.count();


return success({

customers,

orders

});

}