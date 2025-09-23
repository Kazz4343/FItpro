import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Programs from "@/components/Programs";
import Review from "@/components/Review";
import Sellingpoint from "@/components/Sellingpoint";



export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Programs />
      <Sellingpoint />
      <Review />
    </main>
  )
}
