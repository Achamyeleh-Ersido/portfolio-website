// import { Card } from "@/components/ui/card"
// import { Briefcase } from "lucide-react"

// const experiences = [
//   {
//     role: "Senior Full-Stack Developer",
//     company: "Tech Innovations Inc.",
//     period: "2022 - 2023",
//     description:
//       "Leading development of cloud-native applications using Next.js and AWS. Architecting scalable solutions and mentoring junior developers.",
//   },
//   {
//     role: "Full-Stack Developer",
//     company: "Digital Solutions Ltd.",
//     period: "2023 - 2024",
//     description:
//       "Built and maintained multiple client projects using React, Node.js, and MongoDB. Improved application performance by 40%.",
//   },
//   {
//     role: "Frontend Developer",
//     company: "Creative Web Agency",
//     period: "2019 - 2020",
//     description:
//       "Developed responsive websites and web applications. Collaborated with designers to create pixel-perfect implementations.",
//   },
//   {
//     role: "Junior Developer",
//     company: "StartUp Hub",
//     period: "2024 - 2025",
//     description:
//       "Assisted in development of various web projects. Learned modern development practices and agile methodologies.",
//   },
// ]

// export function Experience() {
//   return (
//     <section id="experience" className="py-20 md:py-32 bg-background">
//       <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="max-w-4xl mx-auto">
//           <div className="text-center mb-16">
//             <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-balance">Work Experience</h2>
//             <p className="text-lg text-muted-foreground">My professional journey in software development</p>
//           </div>

//           <div className="relative">
//             {/* Timeline line */}
//             <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-border" />

//             <div className="space-y-12">
//               {experiences.map((exp, index) => (
//                 <div
//                   key={exp.company}
//                   className={`relative flex items-start ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
//                 >
//                   {/* Timeline dot */}
//                   <div className="absolute left-4 md:left-1/2 w-3 h-3 rounded-full bg-primary border-4 border-background -translate-x-1.5 md:-translate-x-1.5" />

//                   <div className={`flex-1 ${index % 2 === 0 ? "md:pr-12" : "md:pl-12"} pl-12 md:pl-0`}>
//                     <Card className="p-6 hover:border-primary/50 transition-colors">
//                       <div className="flex items-start gap-4">
//                         <div className="p-2 bg-primary/10 rounded-lg">
//                           <Briefcase className="h-5 w-5 text-primary" />
//                         </div>
//                         <div className="flex-1">
//                           <div className="text-sm text-primary font-mono mb-1">{exp.period}</div>
//                           <h3 className="text-xl font-bold mb-1">{exp.role}</h3>
//                           <div className="text-sm text-muted-foreground mb-3">{exp.company}</div>
//                           <p className="text-muted-foreground leading-relaxed">{exp.description}</p>
//                         </div>
//                       </div>
//                     </Card>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }
