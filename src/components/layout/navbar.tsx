import Logo from "@/components/shared/logo";

export default function Navbar(){

return (

<header className="
border-b 
bg-white
">

<div className="
container
mx-auto
flex
h-16
items-center
justify-between
px-6
">

<Logo />


<nav className="
hidden
md:flex
gap-6
text-sm
">

<a href="#">
Find LPG
</a>

<a href="#">
Suppliers
</a>

<a href="#">
Pricing
</a>

<a href="#">
Become Supplier
</a>

</nav>


<button className="
rounded-lg
bg-green-600
px-4
py-2
text-white
">
Login
</button>


</div>

</header>

)

}