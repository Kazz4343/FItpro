import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Programs from "@/components/Programs";
import Review from "@/components/Review";
import Benefit from "@/components/Benefit"
import Pricing from "@/components/Pricing";



export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Programs />
      <Benefit />
      <Review />
      <Pricing />
    </main>
  )
}
