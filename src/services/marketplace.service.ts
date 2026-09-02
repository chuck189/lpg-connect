import { prisma } from "@/lib/prisma";

export async function searchSuppliers(
  keyword?: string,
  district?: string
) {
  return prisma.supplierProfile.findMany({
    where: {
      status: "ACTIVE",
      AND: [
        keyword
          ? {
              displayName: {
                contains: keyword,
                mode: "insensitive"
              }
            }
          : {},
        district
          ? {
              serviceAreas: {
                some: {
                  district: district
                }
              }
            }
          : {}
      ]
    },
    include: {
      organization: true,
      marketplaceProducts: {
        include: {
          product: true
        }
      },
      serviceAreas: true,
      ranking: true
    },
    orderBy: {
      averageRating: "desc"
    }
  });
}
