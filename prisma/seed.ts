import { PrismaClient, UserRole, AccountStatus, ProductCategory, PermissionAction } from "../src/generated/prisma";
import bcrypt from "bcrypt";


const prisma = new PrismaClient();



async function main() {


  const password = await bcrypt.hash(
    "Admin@12345",
    10
  );


  ////////////////////////////////////////////////////
  // SUPER ADMIN
  ////////////////////////////////////////////////////

  const admin = await prisma.user.upsert({

    where: {
      email: "admin@lpgconnect.com"
    },

    update: {},

    create: {

      firstName: "System",

      lastName: "Administrator",

      email: "admin@lpgconnect.com",

      phone: "+260000000000",

      password,

      role: UserRole.SUPER_ADMIN,

      status: AccountStatus.ACTIVE

    }

  });



  ////////////////////////////////////////////////////
  // DEFAULT LPG PRODUCTS
  ////////////////////////////////////////////////////

  const products = [

    {
      name: "LPG Gas 6KG Cylinder",
      category: ProductCategory.LPG,
      unit: "6KG Cylinder"
    },


    {
      name: "LPG Gas 12.5KG Cylinder",
      category: ProductCategory.LPG,
      unit: "12.5KG Cylinder"
    },


    {
      name: "LPG Gas 48KG Cylinder",
      category: ProductCategory.LPG,
      unit: "48KG Cylinder"
    },


    {
      name: "Gas Regulator",
      category: ProductCategory.ACCESSORY,
      unit: "Piece"
    }

  ];



  for (const product of products) {


    await prisma.product.upsert({

      where: {

        id: product.name

      },

      update: {},

      create: product

    });


  }



  ////////////////////////////////////////////////////
  // DEFAULT SYSTEM SETTINGS
  ////////////////////////////////////////////////////

  await prisma.systemSetting.upsert({

    where: {
      key: "platform_name"
    },

    update:{},

    create:{

      key:"platform_name",

      value:"LPG Connect",

      description:
      "Platform identification"

    }

  });

  const permissions = [
    { name: "supplier.manage", module: "supplier", action: PermissionAction.UPDATE },
    { name: "supplier.verify", module: "supplier", action: PermissionAction.APPROVE },
    { name: "customer.manage", module: "customer", action: PermissionAction.UPDATE },
    { name: "order.create", module: "order", action: PermissionAction.CREATE },
    { name: "order.manage", module: "order", action: PermissionAction.UPDATE },
    { name: "delivery.assign", module: "delivery", action: PermissionAction.UPDATE },
    { name: "inventory.manage", module: "inventory", action: PermissionAction.UPDATE },
    { name: "payment.view", module: "payment", action: PermissionAction.READ },
    { name: "analytics.view", module: "analytics", action: PermissionAction.READ },
    { name: "user.manage", module: "user", action: PermissionAction.UPDATE }
  ];
    
    
  for(const p of permissions){
    await prisma.permission.upsert({
      where: {
        name: p.name
      },
      update: {},
      create: {
        name: p.name,
        module: p.module,
        action: p.action
      }
    });
  }

  console.log("Seed completed successfully");

}

main()
.catch((error)=>{
console.error(error);
process.exit(1);
})
.finally(async()=>{
await prisma.$disconnect();
});
