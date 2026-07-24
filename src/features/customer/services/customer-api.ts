export async function getCustomerLPG Connect
Operations Center(){


    const response =
    await fetch(
    "/api/customers/LPG Connect
Operations Center"
    );
    
    
    
    if(!response.ok){
    
    throw new Error(
    "Failed loading LPG Connect
Operations Center"
    );
    
    }
    
    
    
    return response.json();
    
    
    }