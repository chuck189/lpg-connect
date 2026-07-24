interface Props {

    title:string;
    
    value:string;
    
    description?:string;
    
    }
    
    
    export default function LPG Connect
Operations CenterCard({
    title,
    value,
    description
    }:Props){
    
    
    return (
    
    <div className="
    rounded-xl
    border
    bg-background
    p-5
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
    
    
    
    {
    description &&
    <p className="
    text-xs
    text-muted-foreground
    mt-2
    ">
    
    {description}
    
    </p>
    }
    
    
    </div>
    
    )
    
    }