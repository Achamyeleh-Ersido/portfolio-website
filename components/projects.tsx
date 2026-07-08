import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"

const projects = [
  {
    title: "E-Commerce Platform",
    description:
      "A full-featured e-commerce platform with real-time inventory management, payment processing, and admin dashboard.",
    image: "/modern-ecommerce-website.png",
    tech: ["Next.js", "TypeScript", "PostgreSQL", "Stripe"],
    liveUrl: "#",
    githubUrl: "https://github.com/Achamyeleh-Ersido/e-commerce-",
  },
  {
    title: "SaaS Analytics Dashboard",
    description:
      "Real-time analytics dashboard for SaaS products with advanced data visualization and reporting capabilities.",
    image: "/saas.png",
    tech: ["React", "Node.js", "MongoDB", "Chart.js"],
    liveUrl: "#",
    githubUrl: "https://github.com/Achamyeleh-Ersido/Saas-anaytics-dashboard",
  },
  {
    title: "Multi Tenant Booking System",
    description:
      "A scalable booking system for managing reservations across multiple tenants with real-time availability and scheduling.",
    image: "/multi booking system.png",
    tech: ["Next.js", "Tailwind", "PostgreSQL", "Redis"],
    liveUrl: "https://multi-tenant-booking-system.vercel.app/",
    githubUrl: "https://github.com/Achamyeleh-Ersido/Multi-Tenant-Booking-System",
  },
  {
    title: "Learning Management System (LMS)",
    description: "A comprehensive LMS for online courses, quizzes, and student progress tracking with a user-friendly interface.",
    image: "/lms.png",
    tech: ["Next.js", "React", "TypeScript", "PostgreSQL"],
    liveUrl: "#",
    githubUrl: "https://github.com/Achamyeleh-Ersido/Learning-Mangement-System-for-Hawassa-University-Daye-Campus",
  },
]

export function Projects() {
  return (
    <section id="projects" className="py-20 md:py-32 bg-card">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-balance">Featured Projects</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A selection of my recent work showcasing modern web applications
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card
                key={project.title}
                className="overflow-hidden group hover:border-primary/50 transition-all duration-300"
                style={{
                  animationDelay: `${index * 100}ms`,
                }}
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card/90 to-transparent" />
                </div>

                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs bg-primary/10 text-primary border border-primary/20 px-3 py-1 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-3">
                    <Button size="sm" variant="outline" asChild>
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Live Demo
                      </a>
                    </Button>
                    <Button size="sm" variant="outline" asChild>
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="mr-2 h-4 w-4" />
                        Code
                      </a>
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
