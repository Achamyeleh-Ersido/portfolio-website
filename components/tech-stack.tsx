// import { Card } from "@/components/ui/card"

// const technologies = [
//   { name: "React", icon: "⚛️", category: "Frontend" },
//   { name: "Next.js", icon: "▲", category: "Frontend" },
//   { name: "Vue.js", icon: "💚", category: "Frontend" },
//   { name: "TypeScript", icon: "📘", category: "Language" },
//   { name: "Node.js", icon: "🟢", category: "Backend" },
//   { name: "Express", icon: "🚂", category: "Backend" },
//   { name: "MongoDB", icon: "🍃", category: "Database" },
//   { name: "PostgreSQL", icon: "🐘", category: "Database" },
//   { name: "Tailwind CSS", icon: "🎨", category: "Styling" },
//   { name: "Git", icon: "📦", category: "Tools" },
// ]

// export function TechStack() {
//   return (
//     <section id="tech" className="py-20 md:py-32 bg-background">
//       <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="max-w-6xl mx-auto">
//           <div className="text-center mb-16">
//             <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-balance">Tech Stack</h2>
//             <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
//               Technologies and tools I use to bring ideas to life
//             </p>
//           </div>

//           <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
//             {technologies.map((tech, index) => (
//               <Card
//                 key={tech.name}
//                 className="p-6 hover:border-primary/50 transition-all duration-300 hover:scale-105 group cursor-pointer"
//                 style={{
//                   animationDelay: `${index * 50}ms`,
//                 }}
//               >
//                 <div className="flex flex-col items-center text-center gap-3">
//                   <div className="text-4xl group-hover:scale-110 transition-transform">{tech.icon}</div>
//                   <div>
//                     <div className="font-semibold text-sm">{tech.name}</div>
//                     <div className="text-xs text-muted-foreground">{tech.category}</div>
//                   </div>
//                 </div>
//               </Card>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }
