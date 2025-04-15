"use client"

import { motion } from "framer-motion"
import { useLanguage } from "@/components/language-provider"
import PageTitle from "@/components/page-title"
import { Progress } from "@/components/ui/progress"
import { Square, Circle, Triangle } from "lucide-react"

export default function SkillsPage() {
  const { t } = useLanguage()

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

  // Skill data with progress values
  const frontendSkills = [
    { name: "HTML5 / CSS3", value: 95 },
    { name: "JavaScript / TypeScript", value: 90 },
    { name: "React / Next.js", value: 90 },
    { name: "Tailwind CSS / SASS", value: 84 },
    { name: "Redux / Zustand", value: 78 },
  ]

  const backendSkills = [
    { name: "Node.js / Nest.js", value: 88 },
    { name: "REST API / GraphQL", value: 78 },
    { name: "MongoDB / PostgreSQL", value: 85 },
    { name: "Firebase / Supabase", value: 80 },
  ]

  const toolsSkills = [
    { name: "Git / GitHub", value: 92 },
    { name: "Docker / Kubernetes", value: 70 },
    { name: "AWS / Vercel / Netlify", value: 71 },
    { name: "Jest / Cypress", value: 80 },
    { name: "CI/CD / GitHub Actions", value: 69 },
  ]

  return (
    <>
      <PageTitle title={t.skills.title} />

      <section className="py-12">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Frontend Skills */}
            <motion.div
              className="bg-yellow-500 border-8 border-black p-8 shadow-brutal"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-2xl font-black mb-6 uppercase border-b-4 border-black pb-2">{t.skills.frontend}</h3>
              <motion.ul className="space-y-6" variants={containerVariants} initial="hidden" animate="visible">
                {frontendSkills.map((skill, index) => (
                  <motion.li key={index} className="space-y-2" variants={itemVariants}>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <Square className="h-5 w-5 flex-shrink-0" />
                        <span className="font-bold">{skill.name}</span>
                      </div>
                      <span className="font-bold">{skill.value}%</span>
                    </div>
                    <Progress
                      value={skill.value}
                      className="h-3 bg-white border-2 border-black"
                      indicatorColor="bg-black"
                    />
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>

            {/* Backend Skills */}
            <motion.div
              className="bg-primary text-white border-8 border-black p-8 shadow-brutal"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h3 className="text-2xl font-black mb-6 uppercase border-b-4 border-white pb-2">{t.skills.backend}</h3>
              <motion.ul className="space-y-6" variants={containerVariants} initial="hidden" animate="visible">
                {backendSkills.map((skill, index) => (
                  <motion.li key={index} className="space-y-2" variants={itemVariants}>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <Circle className="h-5 w-5 flex-shrink-0" />
                        <span className="font-bold">{skill.name}</span>
                      </div>
                      <span className="font-bold">{skill.value}%</span>
                    </div>
                    <Progress
                      value={skill.value}
                      className="h-3 bg-white border-2 border-black"
                      indicatorColor="bg-yellow-500"
                    />
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>

            {/* Tools Skills */}
            <motion.div
              className="bg-blue-600 text-white border-8 border-black p-8 shadow-brutal"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <h3 className="text-2xl font-black mb-6 uppercase border-b-4 border-white pb-2">{t.skills.tools}</h3>
              <motion.ul className="space-y-6" variants={containerVariants} initial="hidden" animate="visible">
                {toolsSkills.map((skill, index) => (
                  <motion.li key={index} className="space-y-2" variants={itemVariants}>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <Triangle className="h-5 w-5 flex-shrink-0" />
                        <span className="font-bold">{skill.name}</span>
                      </div>
                      <span className="font-bold">{skill.value}%</span>
                    </div>
                    <Progress
                      value={skill.value}
                      className="h-3 bg-white border-2 border-black"
                      indicatorColor="bg-primary"
                    />
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Additional Skills */}
      <section className="py-12">
        <div className="container">
          <h2 className="text-3xl font-black tracking-tighter uppercase border-b-4 border-black pb-2 inline-block mb-8">
            {t.skills.additionalTitle}
          </h2>

          <motion.div
            className="grid md:grid-cols-2 gap-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            {/* Soft Skills */}
            <div className="bg-black text-white border-8 border-black p-8 shadow-brutal-inverse">
              <h3 className="text-2xl font-black mb-6 uppercase border-b-4 border-white pb-2">{t.skills.softSkills}</h3>
              <ul className="space-y-4">
                <li className="flex items-center gap-3">
                  <Square className="h-6 w-6 text-yellow-500" />
                  <span className="text-lg">{t.skills.softSkill1}</span>
                </li>
                <li className="flex items-center gap-3">
                  <Circle className="h-6 w-6 text-primary" />
                  <span className="text-lg">{t.skills.softSkill2}</span>
                </li>
                <li className="flex items-center gap-3">
                  <Triangle className="h-6 w-6 text-blue-600" />
                  <span className="text-lg">{t.skills.softSkill3}</span>
                </li>
                <li className="flex items-center gap-3">
                  <Square className="h-6 w-6 text-yellow-500" />
                  <span className="text-lg">{t.skills.softSkill4}</span>
                </li>
                <li className="flex items-center gap-3">
                  <Circle className="h-6 w-6 text-primary" />
                  <span className="text-lg">{t.skills.softSkill5}</span>
                </li>
              </ul>
            </div>

            {/* Languages */}
            <div className="bg-white border-8 border-black p-8 shadow-brutal">
              <h3 className="text-2xl font-black mb-6 uppercase border-b-4 border-black pb-2">{t.skills.languages}</h3>
              <ul className="space-y-6">
                <li className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Square className="h-5 w-5 text-primary flex-shrink-0" />
                      <span className="font-bold">{t.skills.language1}</span>
                    </div>
                    <span className="font-bold">{t.skills.nativeLevel}</span>
                  </div>
                  <Progress value={100} className="h-3 bg-gray-200 border-2 border-black" indicatorColor="bg-primary" />
                </li>
                <li className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Circle className="h-5 w-5 text-blue-600 flex-shrink-0" />
                      <span className="font-bold">{t.skills.language2}</span>
                    </div>
                    <span className="font-bold">{t.skills.advancedLevel}</span>
                  </div>
                  <Progress value={60} className="h-3 bg-gray-200 border-2 border-black" indicatorColor="bg-blue-600" />
                </li>
                <li className="space-y-2">
                  {/* <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Triangle className="h-5 w-5 text-yellow-500 flex-shrink-0" />
                      <span className="font-bold">{t.skills.language3}</span>
                    </div>
                    <span className="font-bold">{t.skills.intermediateLevel}</span>
                  </div> */}
              {/*     <Progress
                    value={60}
                    className="h-3 bg-gray-200 border-2 border-black"
                    indicatorColor="bg-yellow-500"
                  /> */}
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}
