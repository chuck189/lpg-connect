import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";


export async function GET() {

  try {

    const customer =
      await prisma.customer.findFirst({

        include: {

          orders:true,

          usageLogs:true,

          score:true

        }

      });


    if(!customer){

      return NextResponse.json(
        {
          success:false,
          error:"Customer not found"
        },
        {
          status:404
        }
      );

    }


    return NextResponse.json({

      success:true,

      data:{

        orders:customer.orders.length,

        usage:
        customer.usageLogs.reduce(
          (total,item)=>total+item.quantity,
          0
        ),

        loyalty:
        customer.score?.loyaltyScore ?? 0

      }

    });


} catch {

    return NextResponse.json(
      {
        success:false,
        error:"Failed loading Dashboard"
      },
      {
        status:500
      }
    );

  }

}