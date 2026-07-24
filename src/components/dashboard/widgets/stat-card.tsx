interface Props {
    title:string;
    value:string;
    subtitle:string;
   }
   
   export default function StatCard({
    title,
    value,
    subtitle
   }:Props){
   
   return (
   
   <div className="
   rounded-xl
   border
   bg-white
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
   
   
   <p className="
   text-xs
   mt-2
   text-muted-foreground
   ">
   {subtitle}
   </p>
   
   
   </div>
   
   )
   
   }