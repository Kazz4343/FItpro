import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Programs from "@/components/Programs";
import { Button } from "@/components/ui/button";


export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Programs />
    </main>
  )
}
