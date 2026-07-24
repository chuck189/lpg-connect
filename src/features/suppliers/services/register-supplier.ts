import bcrypt from "bcrypt";
import { prisma } from "@/lib/prisma";


interface SupplierRegistration {

firstName:string;

lastName:string;

email:string;

phone:string;

password:string;

companyName:string;

registrationNumber?:string;

}


export async function registerSupplier(
data:SupplierRegistration
){


const existingUser =
await prisma.user.findUnique({
where:{
email:data.email
}
});


if(existingUser){
throw new Error(
"Email already registered"
);
}



const passwordHash =
await bcrypt.hash(
data.password,
12
);



const supplier =
await prisma.organization.create({

data:{


name:data.companyName,


registrationNumber:
data.registrationNumber,


users:{
create:{


firstName:data.firstName,

lastName:data.lastName,

email:data.email,

phone:data.phone,

password:passwordHash,

role:"OWNER"


}

},


verification:{
create:{}

}


}

});



return supplier;


}