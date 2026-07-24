export async function getCustomerDashboard(){


    const response =
    await fetch(
    "/api/customers/dashboard"
    );
    
    
    
    if(!response.ok){
    
    throw new Error(
    "Failed loading dashboard"
    );
    
    }
    
    
    
    return response.json();
    
    
    }