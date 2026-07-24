import { prisma } from "@/lib/prisma"


export async function GET() {

  try {

    await prisma.$connect()


    return Response.json({

      status: "ok",

      database: "connected"

    })


  } catch (error) {


    return Response.json(

      {

        status: "error",

        database: "failed"

      },

      {
        status:500
      }

    )

  }

}