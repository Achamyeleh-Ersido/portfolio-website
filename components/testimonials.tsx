"use client"

import { Card } from "@/components/ui/card"
import { Star } from "lucide-react"
import { useState } from "react"

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CEO at TechStart",
    content:
      "Exceptional developer who delivered our project ahead of schedule. The code quality and attention to detail were outstanding.",
    rating: 5,
    avatar: "/professional-woman-diverse.png",
  },
  {
    name: "Michael Chen",
    role: "CTO at DataFlow",
    content:
      "Highly skilled in both frontend and backend development. Great communicator and problem solver. Would definitely work with again.",
    rating: 5,
    avatar: "/professional-man.jpg",
  },
  {
    name: "Emily Rodriguez",
    role: "Product Manager at CloudSys",
    content:
      "Transformed our vision into reality with a beautiful, performant application. Professional, reliable, and talented.",
    rating: 5,
    avatar: "/professional-person.png",
  },
]

export function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <section id="testimonials" className="py-20 md:py-32 bg-card">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-balance">Client Testimonials</h2>
            <p className="text-lg text-muted-foreground">What clients say about working with me</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <Card
                key={testimonial.name}
                className={`p-6 cursor-pointer transition-all duration-300 ${
                  index === activeIndex ? "border-primary/50 scale-105" : "hover:border-primary/30"
                }`}
                onClick={() => setActiveIndex(index)}
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                  ))}
                </div>

                <p className="text-muted-foreground mb-6 leading-relaxed">"{testimonial.content}"</p>

                <div className="flex items-center gap-3">
                  <img
                    src={testimonial.avatar || "/placeholder.svg"}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
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
