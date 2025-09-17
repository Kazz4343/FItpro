import Image from "next/image";
import { Button } from "./ui/button";


export default function Hero() {
  return (
    <section className="h-screen relative flex items-center justify-center overflow-hidden pt-16">
      <div className="absolute inset-0">
        <Image fill className="object-cover object-center" src="/fitness-hero.jpeg" alt='fitness'/>
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      <div className="relative z-10 text-white text-center px-4 max-w-4xl">
        <div>
          <h1 className="text-5xl md:text-7xl font-black font-heading mb-6 leading-tight">Transform Your Body, <span className="text-primary">Transform Your Life</span></h1>
          <p className="text-xl md:text-2xl mb-8 font-light leading-relaxed max-w-3xl">
            Join our fitness programs and achieve your goals with expert trainers and personalized plans.
          </p>
          <div>
            <Button>Start Free Trial</Button>
            <Button>View Plans</Button>
          </div>

        </div>
      </div>
    </section>
  )
}
