"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Download } from "lucide-react"
import { useEffect, useRef } from "react"

export function Hero() {
  const heroRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (heroRef.current) {
        const scrolled = window.scrollY
        heroRef.current.style.transform = `translateY(${scrolled * 0.5}px)`
      }
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleDownloadCV = () => {
    const link = document.createElement("a")
    link.href = "/cv-sample.pdf"
    link.download = "John-Doe-CV.pdf"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/5" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center" ref={heroRef}>
          {/* Content */}
          <div className="space-y-8 parallax">
            <div className="inline-block">
              <span className="text-sm text-primary font-mono border border-primary/30 bg-primary/5 px-4 py-2 rounded-full">
                Available for freelance
              </span>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight text-balance">
              Full-Stack
              <br />
              <span className="text-primary">Web Developer</span>
            </h1>

            <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-xl">
              Building fast, scalable, and modern web experiences. Specializing in React, Next.js, and cloud-native
              architectures.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="group" asChild>
                <a href="#projects">
                  View My Work
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              <Button size="lg" variant="outline" onClick={handleDownloadCV}>
                <Download className="mr-2 h-4 w-4" />
                Download CV
              </Button>
            </div>
          </div>

          {/* Portrait */}
          <div className="flex justify-center lg:justify-end parallax">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary/50 to-accent/50 rounded-2xl blur-xl opacity-75 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative w-80 h-80 sm:w-96 sm:h-96 rounded-2xl overflow-hidden border border-primary/20">
                <img
                  src="/professional-developer-portrait.png"
                  alt="Developer Portrait"
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/30 rounded-full flex justify-center">
          <div className="w-1.5 h-3 bg-primary rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  )
}
