// "use client";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";

export default function Home(){

return (

<div className="min-h-screen">

<Navbar />

<main className="
container
mx-auto
px-6
py-20
">

<h1 className="
text-5xl
font-bold
max-w-3xl
">

The Smarter Way To Buy,
Sell And Manage LPG.

</h1>

<p className="
mt-6
text-lg
text-muted-foreground
max-w-xl
">

Connect customers, suppliers and delivery partners
through one trusted LPG ecosystem.

</p>

<div className="
mt-8
flex
gap-4
">

<button className="
rounded-xl
bg-green-600
px-6
py-3
text-white
">

Find LPG Supplier

</button>

<button className="
rounded-xl
border
px-6
py-3
">

Become Supplier

</button>

</div>

</main>

<Footer />

</div>

)

}
