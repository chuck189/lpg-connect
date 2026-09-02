export async function getCustomerDashboard(){


    const response =
    await fetch(
    "/api/customers/Dashboard"
    );
    
    
    
    if(!response.ok){
    
    throw new Error(
    "Failed loading Dashboard"
    );
    
    }
    
    
    
    return response.json();
    
    
    }