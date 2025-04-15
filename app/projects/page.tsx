"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { useLanguage } from "@/components/language-provider"
import PageTitle from "@/components/page-title"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Github, ExternalLink } from "lucide-react"
import ProjectTimeline from "@/components/project-timeline"

export default function ProjectsPage() {
  const { t } = useLanguage()
  const [selectedProject, setSelectedProject] = useState(null)

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  }

  // Project data
  const projects = {
    all: [
      {
        id: 1,
        title: "E-COMMERCE APP",
        description: 'A web e-commerce application dedicated to tattoo supplies and equipment',
        image: "/nk.png?height=300&width=500",
        tags: ['NextJS', 'Node.js', 'Strapi', 'JavaScript', 'Typescript', 'Tailwind-CSS', 'shadcn/ui'],
        tagColors: ["bg-yellow-500", "bg-blue-600 text-white", "bg-primary text-white", "bg-yellow-500", "bg-blue-600 text-white", "bg-primary text-white", "bg-yellow-500"],
        github: "https://github.com/Dasieloski/MK-ecommerce.git",
        demo: "mktattoo.vercel.app",
        category: "web",
      },
      {
        id: 2,
        title: "CLASSIC SUDOKU GAME",
        description: "A classic Sudoku game",
        image: "/sudoku.png?height=300&width=500",
        tags: ['NextJS', 'Node.js','Typescript', 'Tailwind-CSS', 'shadcn/ui'],
        tagColors: ["bg-yellow-500", "bg-blue-600 text-white", "bg-primary text-white","bg-yellow-500", "bg-blue-600 text-white"],
        github: "https://github.com/Dasieloski/Sudoku.git",
        demo: "https://sudokumaritza.vercel.app/",
        category: "web",
      },
      {
        id: 3,
        title: "GYM MANAGEMENT WEBSITE",
        description: "A gym website that manages clients, trainers, and memberships",
        image: "/gymvictoria.png?height=300&width=500",
        tags: ['NextJS', 'Node.js','Typescript', 'Tailwind-CSS', 'shadcn/ui', 'PostgresQL','PrismaDB'],
        tagColors: ["bg-yellow-500", "bg-blue-600 text-white", "bg-primary text-white", "bg-yellow-500", "bg-blue-600 text-white", "bg-primary text-white", "bg-yellow-500"],
        github: "https://github.com/Dasieloski/gym-victoria.git",
        demo: "gymvictoria.vercel.app",
        category: "web",
      },
      {
        id: 4,
        title: "E-COMMERCE APP",
        description: "A 99-store website for a variety of products",
        image: "/99store.png?height=300&width=500",
        tags: ['NextJS', 'Node.js','Typescript', 'Tailwind-CSS', 'shadcn/ui', 'PostgresQL','PrismaDB'],
        tagColors: ["bg-yellow-500", "bg-blue-600 text-white", "bg-primary text-white", "bg-yellow-500", "bg-blue-600 text-white", "bg-primary text-white", "bg-yellow-500"],
        github: "https://github.com/Dasieloski/99store.git",
        demo: "99store.vercel.app",
        category: "web",
      },
      {
        id: 5,
        title: "BASIC TASK APP",
        description: "A basic task management website",
        image: "/basictasks.png?height=300&width=500",
        tags: ["React", "Vite.js", "TypeScript", "Material UI"],
        tagColors: ["bg-yellow-500", "bg-blue-600 text-white", "bg-primary text-white", "bg-yellow-500"],
        github: "https://github.com/Dasieloski/gestion-tareas.git",
        demo: "https://basictasks.vercel.app",
        category: "web",
      },
       {
        id: 6,
        title: "PHARMACY WEBSITE",
        description: "A pharmacy website for the sale of all types of veterinary products",
        image: "/valea.png?height=300&width=500",
        tags: ['NextJS', 'Node.js','Typescript', 'Tailwind-CSS', 'shadcn/ui', 'PostgresQL','PrismaDB'],
        tagColors: ["bg-yellow-500", "bg-blue-600 text-white", "bg-primary text-white", "bg-yellow-500", "bg-blue-600 text-white", "bg-primary text-white", "bg-yellow-500"],
        github: "https://github.com/Dasieloski/veterinaria-ValeA.git",
        demo: "https://valea.vercel.app/",
        category: "web",
      },
        {
        id: 7,
        title: "MOTORCYCLE E-COMMERCE WITH INVENTORY AND POS SYSTEM",
        description: "A website for the sale of motorcycle products, inventory management, and a POS (Point of Sale) system",
        image: "/reinier.png?height=300&width=500",
        tags: ['NextJS', 'Node.js','Typescript', 'Tailwind-CSS', 'shadcn/ui', 'PostgresQL','PrismaDB'],
        tagColors: ["bg-yellow-500", "bg-blue-600 text-white", "bg-primary text-white", "bg-yellow-500", "bg-blue-600 text-white", "bg-primary text-white", "bg-yellow-500"],
        github: "https://github.com/Dasieloski/tienda-pos.git",
        demo: "https://variedadeselfrinon.vercel.app/",
        category: "web",
      },
        {
        id: 8,
        title: "GYM TRAINER",
        description: "A gym trainer's website",
        image: "/coach.png?height=300&width=500",
        tags: ['NextJS','Typescript', 'Tailwind-CSS', 'shadcn/ui'],
        tagColors: ["bg-yellow-500", "bg-blue-600 text-white", "bg-primary text-white", "bg-yellow-500"],
        github: "https://github.com/Dasieloski/fitness-coach.git",
        demo: "https://alain-coach.vercel.app/",
        category: "web",
      },
        {
        id: 9,
        title: "PROFESSIONAL CHAUFFEUR SERVICE WEBSITE",
        description: "A professional chauffeur service website",
        image: "/driver.png?height=300&width=500",
        tags: ['NextJS','Typescript', 'Tailwind-CSS', 'shadcn/ui'],
        tagColors: ["bg-yellow-500", "bg-blue-600 text-white", "bg-primary text-white", "bg-yellow-500"],
        github: "https://github.com/Dasieloski/luxury-driver.git",
        demo: "https://alain-driver.vercel.app/",
        category: "web",
      },
    ],
  }

  // Filter projects by category
  projects.web = projects.all.filter((project) => project.category === "web")
//  projects.mobile = projects.all.filter((project) => project.category === "mobile")

  return (
    <>
      <PageTitle title={t.projects.title} />

      <section className="py-12">
        <div className="container">
          <Tabs defaultValue="all" className="space-y-12">
            <div className="flex justify-center">
              <TabsList className="grid w-full max-w-md grid-cols-3 h-16 bg-transparent gap-4">
                <TabsTrigger
                  value="all"
                  className="data-[state=active]:bg-yellow-500 data-[state=active]:text-black data-[state=active]:border-black data-[state=active]:border-4 data-[state=active]:shadow-brutal
                  bg-white border-4 border-black text-lg font-bold h-full"
                >
                  {t.projects.all}
                </TabsTrigger>
                <TabsTrigger
                  value="web"
                  className="data-[state=active]:bg-blue-600 data-[state=active]:text-white data-[state=active]:border-black data-[state=active]:border-4 data-[state=active]:shadow-brutal
                  bg-white border-4 border-black text-lg font-bold h-full"
                >
                  {t.projects.web}
                </TabsTrigger>
                <TabsTrigger
                  value="mobile"
                  className="data-[state=active]:bg-primary data-[state=active]:text-white data-[state=active]:border-black data-[state=active]:border-4 data-[state=active]:shadow-brutal
                  bg-white border-4 border-black text-lg font-bold h-full"
                >
                  {t.projects.mobile}
                </TabsTrigger>
              </TabsList>
            </div>

            {/* All Projects Tab */}
            {Object.keys(projects).map((category) => (
              <TabsContent key={category} value={category} className="space-y-8">
                <motion.div
                  className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                >
                  {projects[category].map((project) => (
                    <motion.div
                      key={project.id}
                      className="bg-white border-8 border-black shadow-brutal group"
                      variants={itemVariants}
                      whileHover={{ y: -10 }}
                    >
                      <div className="relative overflow-hidden border-b-4 border-black">
                        <img
                          src={project.image || "/placeholder.svg"}
                          alt={project.title}
                          className="w-full h-48 object-cover transition-transform group-hover:scale-105"
                        />
                      </div>
                      <div className="p-6">
                        <h3 className="text-xl font-black uppercase mb-2">{project.title}</h3>
                        <p className="mb-4">{project.description}</p>
                        <div className="flex flex-wrap gap-2 mb-6">
                          {project.tags.map((tag, index) => (
                            <span
                              key={index}
                              className={`${project.tagColors[index]} px-2 py-1 text-xs font-bold border-2 border-black`}
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                        <div className="flex gap-3">
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-black text-white border-2 border-black px-3 py-2 font-bold text-sm shadow-brutal hover:translate-y-1 hover:shadow-none transition-all flex items-center gap-1"
                          >
                            <Github className="h-4 w-4" />
                            {t.projects.codeButton}
                          </a>
                          <a
                            href={project.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-blue-600 text-white border-2 border-black px-3 py-2 font-bold text-sm shadow-brutal hover:translate-y-1 hover:shadow-none transition-all flex items-center gap-1"
                          >
                            <ExternalLink className="h-4 w-4" />
                            {t.projects.demoButton}
                          </a>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Project Timeline Section */}
      <section className="py-12 bg-black text-white border-y-8 border-primary">
        <div className="container">
          <h2 className="text-3xl font-black tracking-tighter uppercase border-b-4 border-white pb-2 inline-block mb-12">
            {t.projects.timelineTitle}
          </h2>
          <ProjectTimeline />
        </div>
      </section>

      {/* Featured Project */}
      <section className="py-12">
        <div className="container">
          <h2 className="text-3xl font-black tracking-tighter uppercase border-b-4 border-black pb-2 inline-block mb-12">
            {t.projects.featuredTitle}
          </h2>

          <motion.div
            className="bg-primary text-white border-8 border-black p-8 shadow-brutal"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-3xl font-black uppercase mb-4">{t.projects.featured.title}</h3>
                <p className="text-lg mb-6">{t.projects.featured.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="bg-yellow-500 text-black px-3 py-1 text-sm font-bold border-2 border-black">
                    NEXT.JS
                  </span>
                  <span className="bg-blue-600 text-white px-3 py-1 text-sm font-bold border-2 border-black">
                    TYPESCRIPT
                  </span>
                  <span className="bg-black text-white px-3 py-1 text-sm font-bold border-2 border-white">
                    TAILWIND CSS
                  </span>
                </div>
                <div className="flex gap-4">
                  <a
                    href="https://github.com/Dasieloski/gym-victoria.git"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-black text-white border-4 border-white px-4 py-2 font-bold shadow-brutal-white hover:translate-y-1 hover:shadow-none transition-all flex items-center gap-2"
                  >
                    <Github className="h-5 w-5" />
                    {t.projects.codeButton}
                  </a>
                  <a
                    href="https://gymvictoria.vercel.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-yellow-500 text-black border-4 border-white px-4 py-2 font-bold shadow-brutal-white hover:translate-y-1 hover:shadow-none transition-all flex items-center gap-2"
                  >
                    <ExternalLink className="h-5 w-5" />
                    {t.projects.viewProjectButton}
                  </a>
                </div>
              </div>
              <div className="relative">
                <div className="absolute -top-6 -right-6 h-24 w-24 bg-yellow-500 border-4 border-black rotate-12 z-0"></div>
                <img
                  src="/gymvictoria.png?height=400&width=600"
                  alt="Featured Project"
                  className="w-full h-auto border-4 border-white relative z-10"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}
