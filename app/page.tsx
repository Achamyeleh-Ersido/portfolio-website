import { Hero } from "@/components/hero"
import { About } from "@/components/about"
//import { TechStack } from "@/components/tech-stack"
import { Projects } from "@/components/projects"
//import { Experience } from "@/components/experience"
import { Testimonials } from "@/components/testimonials"
import { Contact } from "@/components/contact"
import { Navigation } from "@/components/navigation"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <About />
      {/* <TechStack /> */}
      <Projects />
      {/* <Experience /> */}
      <Testimonials />
      <Contact />
    </main>
  )
}
