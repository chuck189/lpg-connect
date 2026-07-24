import { prisma } from "@/lib/prisma";
import bcrypt from "bcrypt";


export async function loginUser(
email:string,
password:string
){


const user =
await prisma.user.findUnique({

where:{
email
}

});


if(!user){

throw new Error(
"Invalid credentials"
);

}



const passwordMatch =
await bcrypt.compare(
password,
user.password
);



if(!passwordMatch){

throw new Error(
"Invalid credentials"
);

}



return {

id:user.id,

name:
`${user.firstName} ${user.lastName}`,

role:user.role,

organizationId:user.organizationId

};


}