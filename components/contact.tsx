"use client"

import type React from "react"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Github, Linkedin, Mail, Twitter } from "lucide-react"
import { useState } from "react"

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
  }

  const socialLinks = [
    { icon: Github, href: "https://github.com", label: "GitHub" },
    { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
    { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
    { icon: Mail, href: "mailto:hello@example.com", label: "Email" },
  ]

  return (
    <section id="contact" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-balance">Get In Touch</h2>
            <p className="text-lg text-muted-foreground">
              Have a project in mind? Let's work together to bring your ideas to life.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Form */}
            <Card className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Name
                  </label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your.email@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Tell me about your project..."
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                  />
                </div>

                <Button type="submit" className="w-full" size="lg">
                  Send Message
                </Button>
              </form>
            </Card>

            {/* Contact Info */}
            <div className="space-y-8">
              <Card className="p-8">
                <h3 className="text-xl font-bold mb-4">Let's Connect</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  I'm always interested in hearing about new projects and opportunities. Whether you have a question or
                  just want to say hi, feel free to reach out!
                </p>

                <div className="space-y-4">
                  <div>
                    <div className="text-sm text-muted-foreground mb-1">Email</div>
                    <a href="mailto:hello@example.com" className="text-primary hover:underline">
                      hello@example.com
                    </a>
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground mb-1">Location</div>
                    <div>San Francisco, CA</div>
                  </div>
                </div>
              </Card>

              <Card className="p-8">
                <h3 className="text-xl font-bold mb-4">Follow Me</h3>
                <div className="grid grid-cols-2 gap-4">
                  {socialLinks.map((social) => (
                    <Button key={social.label} variant="outline" className="w-full bg-transparent" asChild>
                      <a href={social.href} target="_blank" rel="noopener noreferrer">
                        <social.icon className="mr-2 h-4 w-4" />
                        {social.label}
                      </a>
                    </Button>
                  ))}
                </div>
              </Card>
            </div>
          </div>

          <div className="text-center mt-16 text-muted-foreground">
            <p>© 2025 Full-Stack Developer. Built with Next.js & Tailwind CSS.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
