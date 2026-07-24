import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcrypt";
import { prisma } from "@/lib/prisma";


export const authConfig = {

providers:[

CredentialsProvider({

name:"Credentials",

credentials:{

email:{
label:"Email",
type:"email"
},

password:{
label:"Password",
type:"password"
}

},


async authorize(credentials){


if(
!credentials?.email ||
!credentials?.password
){

return null;

}



const user =
await prisma.user.findUnique({

where:{
email:
credentials.email
}

});



if(!user){

return null;

}



const passwordMatch =
await bcrypt.compare(

credentials.password,

user.password

);



if(!passwordMatch){

return null;

}



return {

id:user.id,

email:user.email,

role:user.role,

organizationId:user.organizationId

};


}

})

]

};