export function InventoryStatus(){

    const stock=[
    {
    name:"5kg Cylinder",
    amount:420
    },
    {
    name:"12.5kg Cylinder",
    amount:860
    },
    {
    name:"48kg Cylinder",
    amount:120
    }
    ];
    
    
    return (
    
    <div
    className="
    rounded-xl
    border
    bg-card
    p-6
    "
    >
    
    
    <h3 className="font-semibold mb-5">
    
    Inventory Status
    
    </h3>
    
    
    <div className="space-y-5">
    
    
    {stock.map(item=>(
    
    
    <div key={item.name}>
    
    
    <div className="flex justify-between text-sm">
    
    <span>
    {item.name}
    </span>
    
    
    <span>
    {item.amount}
    </span>
    
    </div>
    
    
    <div
    className="
    mt-2
    h-2
    rounded-full
    bg-muted
    "
    >
    
    <div
    className="
    h-full
    rounded-full
    bg-primary
    "
    style={{
    width:`${Math.min(item.amount/10,100)}%`
    }}
    />
    
    
    </div>
    
    
    </div>
    
    
    ))}
    
    
    </div>
    
    
    </div>
    
    )
    
    }