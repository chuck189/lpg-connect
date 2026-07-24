interface Props {
    title:string;
    value:string;
    description:string;
    }
    
    
    export default function SupplierStatCard({
    title,
    value,
    description
    }:Props){
    
    return (
    
    <div className="
    rounded-xl
    border
    bg-white
    p-6
    shadow-sm
    ">
    
    <p className="
    text-sm
    text-muted-foreground
    ">
    {title}
    </p>
    
    
    <h2 className="
    text-3xl
    font-bold
    mt-2
    ">
    {value}
    </h2>
    
    
    <p className="
    text-xs
    text-muted-foreground
    mt-2
    ">
    {description}
    </p>
    
    
    </div>
    
    )
    
    }