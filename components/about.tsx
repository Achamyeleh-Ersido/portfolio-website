export function About() {
  return (
    <section id="about" className="py-20 md:py-32 bg-card">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-balance">About Me</h2>
          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
            <p>
              I'm a passionate full-stack developer with over 2 years of experience building modern web applications. I
              specialize in creating scalable, performant solutions using the latest technologies and best practices.
            </p>
            <p>
              My expertise spans front-end frameworks like React and Next.js, to back-end technologies like Node.js and
              PostgreSQL. I'm committed to writing clean, maintainable code and delivering exceptional user experiences.
            </p>
            <p>
              When I'm not coding, you'll find me contributing to open-source projects, writing technical articles, or
              exploring new technologies to stay at the forefront of web development.
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-8 mt-12">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">2+</div>
              <div className="text-sm text-muted-foreground">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">13+</div>
              <div className="text-sm text-muted-foreground">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">10+</div>
              <div className="text-sm text-muted-foreground">Happy Clients</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
