import {
    NextResponse
    } from "next/server";
    
    
    import {
    registerUser
    }
    from "@/services/auth-service";
    
    
    
    export async function POST(
    request:Request
    ){
    
    try{
    
    
    const body =
    await request.json();
    
    
    
    const user =
    await registerUser(body);
    
    
    
    return NextResponse.json({
    
    message:
    "Account created successfully",
    
    user:{
    id:user.id,
    email:user.email,
    role:user.role
    }
    
    });
    
    
    }
    catch(error:any){
    
    
    return NextResponse.json({
    
    error:error.message
    
    },
    {
    status:400
    }
    );
    
    
    }
    
    
    }