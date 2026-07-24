import { UserRole } from "@/generated/prisma";


export function dashboardRoute(
role:UserRole
){


switch(role){


case "CUSTOMER":

return "/customer";


case "OWNER":

return "/supplier";


case "MANAGER":

return "/supplier";


case "DRIVER":

return "/driver";


case "ADMIN":

case "SUPER_ADMIN":

return "/admin";


default:

return "/";

}


}